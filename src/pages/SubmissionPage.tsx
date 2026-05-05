import { FormEvent, useState } from "react";
import { SubmissionInput } from "../features/useAppData";
import type { Role } from "../features/useAuth";
import { apiCreateSubmission } from "../lib/api";
import { ProducerSubmission, Region, WineType } from "../lib/types";

type Props = {
  onSubmit: (input: SubmissionInput) => Promise<void>;
  submissions: ProducerSubmission[];
  token: string | null;
  role: Role | null;
  onLoginClick: () => void;
  onRefreshToken: () => Promise<string | null>;
};

const currentYear = new Date().getFullYear();

const initialState: SubmissionInput = {
  producerName: "",
  contactInfo: "",
  wineName: "",
  wineType: "red",
  grapeVariety: "",
  year: currentYear,
  price: 0,
  region: "Codru",
  sweetness: "dry",
  body: "medium",
  alcoholPercent: 12,
  aromaNotes: [],
  suggestedPairingTags: [],
  productionMethod: ""
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

export default function SubmissionPage({ onSubmit, submissions, token, role, onLoginClick, onRefreshToken }: Props) {
  const [form, setForm] = useState(initialState);
  const [error, setError] = useState("");
  const [saved, setSaved] = useState(false);

  async function handleSubmit(event: FormEvent) {
    event.preventDefault();
    setSaved(false);

    if (!form.producerName || !form.wineName || !form.contactInfo || !form.grapeVariety) {
      setError("Заполните обязательные поля.");
      return;
    }
    if (form.year < 1950 || form.year > currentYear) {
      setError("Год должен быть в диапазоне от 1950 до текущего.");
      return;
    }
    if (form.alcoholPercent < 5 || form.alcoholPercent > 20) {
      setError("Крепость должна быть от 5 до 20%.");
      return;
    }

    if (!token || (role !== "WRITER" && role !== "ADMIN")) {
      setError("Для отправки заявки необходимо войти с ролью WRITER или ADMIN.");
      return;
    }

    setError("");
    try {
      // Try sending to the backend API first
      let activeToken = token;
      try {
        await apiCreateSubmission(form, activeToken);
      } catch (err) {
        if (err instanceof Error && err.message === "unauthorized") {
          // Token expired — refresh and retry
          const newToken = await onRefreshToken();
          if (!newToken) { setError("Сессия истекла. Войдите снова."); return; }
          activeToken = newToken;
          await apiCreateSubmission(form, activeToken);
        } else {
          throw err;
        }
      }
      // Also persist locally in IndexedDB so the user sees their own submissions
      await onSubmit(form);
      setSaved(true);
      setForm(initialState);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Ошибка при отправке заявки.");
    }
  }

  return (
    <section>
      <h2>Заявка от местного производителя</h2>

      {(!token || (role !== "WRITER" && role !== "ADMIN")) && (
        <div className="card auth-notice">
          <p>Для отправки заявки необходима авторизация с ролью <strong>WRITER</strong> или <strong>ADMIN</strong>.</p>
          <button className="btn" onClick={onLoginClick}>Войти</button>
        </div>
      )}

      <form onSubmit={handleSubmit} className="card form-grid">
        <label>
          Название производителя*
          <input value={form.producerName} onChange={(e) => setForm({ ...form, producerName: e.target.value })} />
        </label>
        <label>
          Контактные данные*
          <input value={form.contactInfo} onChange={(e) => setForm({ ...form, contactInfo: e.target.value })} />
        </label>
        <label>
          Название вина*
          <input value={form.wineName} onChange={(e) => setForm({ ...form, wineName: e.target.value })} />
        </label>
        <label>
          Тип
          <select value={form.wineType} onChange={(e) => setForm({ ...form, wineType: e.target.value as WineType })}>
            <option value="red">Красное</option>
            <option value="white">Белое</option>
            <option value="rose">Розе</option>
            <option value="sparkling">Игристое</option>
          </select>
        </label>
        <label>
          Сорт винограда*
          <input value={form.grapeVariety} onChange={(e) => setForm({ ...form, grapeVariety: e.target.value })} />
        </label>
        <label>
          Год
          <input type="number" value={form.year} onChange={(e) => setForm({ ...form, year: Number(e.target.value) })} />
        </label>
        <label>
          Цена (MDL)
          <input type="number" min={0} value={form.price} onChange={(e) => setForm({ ...form, price: Number(e.target.value) })} />
        </label>
        <label>
          Регион
          <select value={form.region} onChange={(e) => setForm({ ...form, region: e.target.value as Region })}>
            <option value="Codru">Кодру</option>
            <option value="Stefan Voda">Штефан-Водэ</option>
            <option value="Valul lui Traian">Валул-луй-Траян</option>
            <option value="Other">Другое</option>
          </select>
        </label>
        <label>
          Тело
          <select value={form.body} onChange={(e) => setForm({ ...form, body: e.target.value as SubmissionInput["body"] })}>
            <option value="light">Легкое</option>
            <option value="medium">Среднее</option>
            <option value="full">Плотное</option>
          </select>
        </label>
        <label>
          Сладость
          <select
            value={form.sweetness}
            onChange={(e) => setForm({ ...form, sweetness: e.target.value as SubmissionInput["sweetness"] })}
          >
            <option value="dry">Сухое</option>
            <option value="semi-dry">Полусухое</option>
            <option value="semi-sweet">Полусладкое</option>
            <option value="sweet">Сладкое</option>
          </select>
        </label>
        <label>
          Алкоголь %
          <input
            type="number"
            step="0.1"
            value={form.alcoholPercent}
            onChange={(e) => setForm({ ...form, alcoholPercent: Number(e.target.value) })}
          />
        </label>
        <label className="full">
          Ароматические ноты (через запятую)
          <input
            value={form.aromaNotes.join(", ")}
            onChange={(e) =>
              setForm({ ...form, aromaNotes: e.target.value.split(",").map((v) => v.trim()).filter(Boolean) })
            }
          />
        </label>
        <label className="full">
          Предложенные теги сочетаний (через запятую)
          <input
            value={form.suggestedPairingTags.join(", ")}
            onChange={(e) =>
              setForm({ ...form, suggestedPairingTags: e.target.value.split(",").map((v) => v.trim()).filter(Boolean) })
            }
          />
        </label>
        <label className="full">
          Метод производства
          <textarea
            rows={3}
            value={form.productionMethod}
            onChange={(e) => setForm({ ...form, productionMethod: e.target.value })}
          />
        </label>

        {error ? <p className="error">{error}</p> : null}
        {saved ? <p className="success">Заявка сохранена со статусом "На проверке".</p> : null}

        <button className="btn" type="submit">
          Отправить на проверку
        </button>
      </form>

      <div className="card submission-tracker">
        <h3>Мои заявки</h3>
        {submissions.length === 0 ? <p>Пока нет заявок.</p> : null}
        <ul className="clean-list">
          {submissions.map((submission) => (
            <li key={submission.id} className="list-row">
              <div>
                <strong>{submission.wineName}</strong>
                <p>
                  {submission.producerName} | {typeLabel[submission.wineType]} | {submission.year}
                </p>
                {submission.reviewerComment ? <p>Комментарий модератора: {submission.reviewerComment}</p> : null}
              </div>
              <span className="badge">{statusLabel[submission.status]}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
