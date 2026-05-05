import { useCallback, useEffect, useState } from "react";
import type { Role } from "../features/useAuth";
import { apiDeleteSubmission, apiGetSubmissions, apiUpdateSubmissionStatus } from "../lib/api";
import { ProducerSubmission } from "../lib/types";

type Props = {
  submissions: ProducerSubmission[];
  onStatusChange: (id: string, status: ProducerSubmission["status"], comment: string) => Promise<void>;
  onDelete: (id: string) => Promise<void>;
  onWinesRefresh: () => Promise<void>;
  token: string | null;
  role: Role | null;
  onLoginClick: () => void;
  onRefreshToken: () => Promise<string | null>;
};

const statusLabel: Record<ProducerSubmission["status"], string> = {
  pending: "На проверке",
  approved: "Одобрено",
  rejected: "Отклонено",
  needs_changes: "Нужны правки"
};

const typeLabel: Record<ProducerSubmission["wineType"], string> = {
  red: "Красное",
  white: "Белое",
  rose: "Розе",
  sparkling: "Игристое"
};

const regionLabel: Record<ProducerSubmission["region"], string> = {
  Codru: "Кодру",
  "Stefan Voda": "Штефан-Водэ",
  "Valul lui Traian": "Валул-луй-Траян",
  Other: "Другое"
};

export default function ReviewPage({ token, role, onLoginClick, onRefreshToken, onWinesRefresh }: Props) {
  const [apiSubmissions, setApiSubmissions] = useState<ProducerSubmission[]>([]);
  const [loadError, setLoadError] = useState("");
  const [actionError, setActionError] = useState("");

  const loadSubmissions = useCallback(
    async (activeToken: string) => {
      try {
        const result = await apiGetSubmissions(activeToken, { limit: 100 });
        setApiSubmissions(result.data);
        setLoadError("");
      } catch (err) {
        if (err instanceof Error && err.message === "unauthorized") {
          const newToken = await onRefreshToken();
          if (!newToken) { setLoadError("Сессия истекла. Войдите снова."); return; }
          const result = await apiGetSubmissions(newToken, { limit: 100 });
          setApiSubmissions(result.data);
          setLoadError("");
        } else {
          setLoadError("Не удалось загрузить заявки с сервера. Убедитесь, что бэкенд запущен.");
        }
      }
    },
    [onRefreshToken]
  );

  useEffect(() => {
    if (token && role === "ADMIN") {
      loadSubmissions(token);
    }
  }, [token, role, loadSubmissions]);

  if (role !== "ADMIN") {
    return (
      <section>
        <h2>Панель модерации</h2>
        <div className="card auth-notice">
          <p>Доступ только для <strong>ADMIN</strong>. Войдите с соответствующей ролью.</p>
          <button className="btn" onClick={onLoginClick}>Войти как ADMIN</button>
        </div>
      </section>
    );
  }

  const sorted = [...apiSubmissions].sort((a, b) => b.createdAt - a.createdAt);

  const askComment = (status: ProducerSubmission["status"]) => {
    const text = window.prompt(`Добавьте комментарий модератора: ${statusLabel[status]}`, "") ?? "";
    return text.trim();
  };

  async function handleStatusChange(id: string, status: ProducerSubmission["status"], comment: string) {
    if (!token) return;
    setActionError("");
    try {
      let activeToken = token;
      try {
        await apiUpdateSubmissionStatus(id, status, comment, activeToken);
      } catch (err) {
        if (err instanceof Error && err.message === "unauthorized") {
          const newToken = await onRefreshToken();
          if (!newToken) { setActionError("Сессия истекла. Войдите снова."); return; }
          activeToken = newToken;
          await apiUpdateSubmissionStatus(id, status, comment, activeToken);
        } else {
          throw err;
        }
      }
      await loadSubmissions(activeToken);
      // After approval, immediately refresh the wines list
      if (status === "approved") {
        onWinesRefresh().catch(() => undefined);
      }
    } catch {
      setActionError("Ошибка при обновлении статуса.");
    }
  }

  async function handleDelete(id: string) {
    if (!token) return;
    setActionError("");
    try {
      let activeToken = token;
      try {
        await apiDeleteSubmission(id, activeToken);
      } catch (err) {
        if (err instanceof Error && err.message === "unauthorized") {
          const newToken = await onRefreshToken();
          if (!newToken) { setActionError("Сессия истекла. Войдите снова."); return; }
          activeToken = newToken;
          await apiDeleteSubmission(id, activeToken);
        } else {
          throw err;
        }
      }
      await loadSubmissions(activeToken);
    } catch {
      setActionError("Ошибка при удалении заявки.");
    }
  }

  return (
    <section>
      <h2>Панель модерации</h2>
      {loadError && <p className="form-error">{loadError}</p>}
      {actionError && <p className="form-error">{actionError}</p>}
      {sorted.length === 0 && !loadError && <p>Заявок пока нет.</p>}
      <div className="card-grid">
        {sorted.map((submission) => (
          <article key={submission.id} className="card">
            <div className="row-between">
              <h3>{submission.wineName}</h3>
              <span className="badge">{statusLabel[submission.status]}</span>
            </div>
            <p>Производитель: {submission.producerName}</p>
            <p>
              {typeLabel[submission.wineType]} | {regionLabel[submission.region]} | {submission.year}
            </p>
            <p>Сорта: {submission.grapeVariety}</p>
            <p>Контакт: {submission.contactInfo}</p>
            {submission.reviewerComment ? <p>Комментарий: {submission.reviewerComment}</p> : null}

            <div className="row-actions">
              <button className="btn" onClick={() => handleStatusChange(submission.id, "approved", askComment("approved"))}>
                Одобрить
              </button>
              <button
                className="btn btn-outline"
                onClick={() => handleStatusChange(submission.id, "needs_changes", askComment("needs_changes"))}
              >
                Нужны правки
              </button>
              <button className="btn btn-danger" onClick={() => handleStatusChange(submission.id, "rejected", askComment("rejected"))}>
                Отклонить
              </button>
              <button className="btn btn-outline" onClick={() => handleDelete(submission.id)}>
                Удалить
              </button>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
