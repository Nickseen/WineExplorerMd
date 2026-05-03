import { FormEvent, useState } from "react";
import { PairingSection, Wine } from "../lib/types";

type Props = {
  pairings: PairingSection[];
  wines: Wine[];
  onToggleLike: (id: string) => void;
  onAdd: (input: {
    title: string;
    description: string;
    recommendedWineIds: string[];
    colorToken: string;
    iconKey: string;
  }) => Promise<void>;
  onRemove: (id: string) => Promise<void>;
};

const scenarioGuide: Record<string, { whyItWorks: string; servingTip: string; mistakesToAvoid: string }> = {
  "К красному мясу": {
    whyItWorks: "Белок и жир смягчают танины плотных красных вин.",
    servingTip: "Откройте насыщенные красные за 20-30 минут до подачи.",
    mistakesToAvoid: "Не подавайте слишком холодными, аромат станет глухим."
  },
  "К сырам": {
    whyItWorks: "Соленость и жир сыра хорошо балансируются кислотностью и пузырьками.",
    servingTip: "Игристые подавайте при 6-8 C, сыр достаньте за 20 минут до еды.",
    mistakesToAvoid: "Не сочетайте очень сладкие вина с очень солеными твердыми сырами."
  },
  "Для компаний": {
    whyItWorks: "Универсальные стили легче подходят разным вкусам одновременно.",
    servingTip: "Держите минимум один красный и один игристый вариант.",
    mistakesToAvoid: "Не берите только один интенсивный стиль на всю компанию."
  }
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

function scoreScenarioFit(section: PairingSection, wine: Wine): number {
  const title = section.title.toLowerCase();
  let score = 0;

  // Tag match: each matching pairing tag adds 2 points (up to 6)
  const tagMatches = wine.pairingTags.filter((tag) => title.includes(tag.toLowerCase())).length;
  score += Math.min(6, tagMatches * 2);

  // Wine type affinity for scenario keywords: up to 3 points
  const isRed = wine.type === "red";
  const isWhite = wine.type === "white";
  const isRose = wine.type === "rose";
  const isSparkling = wine.type === "sparkling";

  if (title.includes("мяс") || title.includes("стейк") || title.includes("барбек") || title.includes("шашлык")) {
    if (isRed) score += 3;
    else if (isRose) score += 1;
  } else if (title.includes("сыр")) {
    if (isWhite || isSparkling) score += 3;
    else if (isRose) score += 2;
    else if (isRed) score += 1;
  } else if (title.includes("рыб") || title.includes("морепрод") || title.includes("морск")) {
    if (isWhite || isSparkling) score += 3;
    else if (isRose) score += 1;
  } else if (title.includes("десерт") || title.includes("сладк") || title.includes("фрукт")) {
    if (isSparkling) score += 3;
    else if (isWhite) score += 2;
  } else if (title.includes("комп") || title.includes("праздн") || title.includes("вечер") || title.includes("аперит")) {
    if (isSparkling) score += 3;
    else if (isRose) score += 2;
    else score += 1;
  } else if (title.includes("овощ") || title.includes("салат") || title.includes("зелен") || title.includes("пикник")) {
    if (isWhite || isRose) score += 3;
  } else if (title.includes("птиц") || title.includes("курин") || title.includes("паст")) {
    if (isWhite) score += 3;
    else if (isRose || isRed) score += 2;
  } else if (title.includes("традицион") || title.includes("молдавск")) {
    score += 2; // any type works for traditional
  } else {
    score += 1;
  }

  // Wine quality bonus based on price tier: up to 4 points
  if (wine.price >= 500) score += 4;
  else if (wine.price >= 300) score += 3;
  else if (wine.price >= 200) score += 2;
  else if (wine.price >= 130) score += 1;

  return Math.min(10, Math.max(0, score));
}

export default function PairingsPage({ pairings, wines, onToggleLike, onAdd, onRemove }: Props) {
  const [formOpen, setFormOpen] = useState(false);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [selectedWineIds, setSelectedWineIds] = useState<string[]>([]);

  function toggleSelectedWine(id: string) {
    setSelectedWineIds((prev) => (prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]));
  }

  async function handleAdd(event: FormEvent) {
    event.preventDefault();
    if (!title.trim() || selectedWineIds.length === 0) return;
    await onAdd({
      title: title.trim(),
      description: description.trim() || "Пользовательский сценарий сочетания.",
      recommendedWineIds: selectedWineIds,
      colorToken: "var(--accent-sea)",
      iconKey: "custom"
    });
    setTitle("");
    setDescription("");
    setSelectedWineIds([]);
  }

  return (
    <section>
      <h2>Сценарии сочетаний</h2>
      <div className="card">
        <div className="row-between">
          <h3 style={{ margin: 0 }}>Создать раздел сочетаний</h3>
          <button className="btn" type="button" onClick={() => setFormOpen((o) => !o)}>
            {formOpen ? "Свернуть ▲" : "Развернуть ▼"}
          </button>
        </div>
        {formOpen && (
          <form className="form-grid" style={{ marginTop: "1rem" }} onSubmit={handleAdd}>
            <label>
              Название
              <input value={title} onChange={(e) => setTitle(e.target.value)} />
            </label>
            <label className="full">
              Описание
              <textarea value={description} onChange={(e) => setDescription(e.target.value)} rows={2} />
            </label>
            <fieldset className="full selection-block">
              <legend>Рекомендуемые вина</legend>
              <div className="selection-grid">
                {wines.map((wine) => (
                  <label key={wine.id} className="check-item">
                    <input
                      type="checkbox"
                      checked={selectedWineIds.includes(wine.id)}
                      onChange={() => toggleSelectedWine(wine.id)}
                    />
                    {wine.name}
                  </label>
                ))}
              </div>
            </fieldset>
            <button className="btn" type="submit">
              Добавить раздел
            </button>
          </form>
        )}
      </div>

      <div className="card-grid">
        {pairings.map((section) => {
          // Seed sections: score ALL wines and take top 8 with score >= 5
          // User-created sections: score only the user's picked wines
          const pool = section.id.startsWith("pair-") ? wines : wines.filter((w) => section.recommendedWineIds.includes(w.id));
          const recommended = pool
            .map((wine) => ({ wine, score: scoreScenarioFit(section, wine) }))
            .filter(({ score }) => score >= 5)
            .sort((a, b) => b.score - a.score)
            .slice(0, 8);
          const guide = scenarioGuide[section.title];
          return (
            <article key={section.id} className="card pairing-card">
              <div className="row-between">
                <h3>{section.title}</h3>
                {!section.id.startsWith("pair-") ? (
                  <button className="btn btn-danger" onClick={() => onRemove(section.id)}>
                    Удалить
                  </button>
                ) : null}
              </div>
              <p>{section.description}</p>
              {guide ? (
                <div className="pairing-education">
                  <p>
                    <strong>Почему работает:</strong> {guide.whyItWorks}
                  </p>
                  <p>
                    <strong>Совет по подаче:</strong> {guide.servingTip}
                  </p>
                  <p>
                    <strong>Избегайте:</strong> {guide.mistakesToAvoid}
                  </p>
                </div>
              ) : null}
              <ul className="clean-list">
                {recommended.map(({ wine, score }) => (
                  <li key={wine.id} className="list-row">
                    <div>
                      <strong>{wine.name}</strong>
                      <p>
                        {typeLabel[wine.type]} | {regionLabel[wine.region]}
                      </p>
                      <p className="fit-score">Оценка попадания: {score}/10</p>
                    </div>
                    <button className="btn" onClick={() => onToggleLike(wine.id)}>
                      {wine.liked ? "Убрать лайк" : "Лайк"}
                    </button>
                  </li>
                ))}
              </ul>
            </article>
          );
        })}
      </div>
    </section>
  );
}
