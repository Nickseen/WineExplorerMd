import { Wine } from "../lib/types";

type Props = {
  wines: Wine[];
  onToggleLike: (id: string) => void;
};

const typeLabel: Record<Wine["type"], string> = {
  red: "Красное",
  white: "Белое",
  rose: "Розе",
  sparkling: "Игристое"
};

const regionLabel: Record<Wine["region"], string> = {
  Codru: "Кодру",
  "Stefan Voda": "Штефан-Водэ",
  "Valul lui Traian": "Валул-луй-Траян",
  Other: "Другое"
};

export default function CollectionPage({ wines, onToggleLike }: Props) {
  const liked = wines.filter((item) => item.liked);

  return (
    <section>
      <h2>Моя коллекция</h2>
      {liked.length === 0 ? <p className="card">Пока нет вин в избранном.</p> : null}
      <div className="card-grid">
        {liked.map((wine) => (
          <article key={wine.id} className="card wine-card">
            <div className="wine-visual">
              {wine.imagePath ? <img src={wine.imagePath} alt={wine.name} loading="lazy" /> : <span>Нет фото</span>}
            </div>
            <h3>{wine.name}</h3>
            <p>
              {typeLabel[wine.type]} | {regionLabel[wine.region]} | {wine.year}
            </p>
            <button className="btn" onClick={() => onToggleLike(wine.id)}>
              Удалить из коллекции
            </button>
          </article>
        ))}
      </div>
    </section>
  );
}
