import { ProducerSubmission } from "../lib/types";

type Props = {
  submissions: ProducerSubmission[];
  onStatusChange: (id: string, status: ProducerSubmission["status"], comment: string) => Promise<void>;
  onDelete: (id: string) => Promise<void>;
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

export default function ReviewPage({ submissions, onStatusChange, onDelete }: Props) {
  const sorted = [...submissions].sort((a, b) => b.createdAt - a.createdAt);

  const askComment = (status: ProducerSubmission["status"]) => {
    const text = window.prompt(`Добавьте комментарий модератора: ${statusLabel[status]}`, "") ?? "";
    return text.trim();
  };

  return (
    <section>
      <h2>Панель модерации</h2>
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
              <button className="btn" onClick={() => onStatusChange(submission.id, "approved", askComment("approved"))}>
                Одобрить
              </button>
              <button
                className="btn btn-outline"
                onClick={() => onStatusChange(submission.id, "needs_changes", askComment("needs_changes"))}
              >
                Нужны правки
              </button>
              <button className="btn btn-danger" onClick={() => onStatusChange(submission.id, "rejected", askComment("rejected"))}>
                Отклонить
              </button>
              <button className="btn btn-outline" onClick={() => onDelete(submission.id)}>
                Удалить
              </button>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
