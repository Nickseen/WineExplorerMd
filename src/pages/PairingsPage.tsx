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

function scoreScenarioFit(section: PairingSection, wine: Wine) {
  const title = section.title.toLowerCase();
  const tagHit = wine.pairingTags.some((tag) => title.includes(tag.toLowerCase())) ? 1 : 0;
  const pinBonus = section.pinned ? 1 : 0;
  const typeBonus = title.includes("комп") && wine.type === "sparkling" ? 1 : 0;
  return Math.min(5, 2 + tagHit + pinBonus + typeBonus);
}

export default function PairingsPage({ pairings, wines, onToggleLike, onAdd, onRemove }: Props) {
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
      <form className="card form-grid" onSubmit={handleAdd}>
        <h3 className="full">Создать раздел сочетаний</h3>
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

      <div className="card-grid">
        {pairings.map((section) => {
          const recommended = wines.filter((wine) => section.recommendedWineIds.includes(wine.id));
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
                {recommended.map((wine) => (
                  <li key={wine.id} className="list-row">
                    <div>
                      <strong>{wine.name}</strong>
                      <p>
                        {typeLabel[wine.type]} | {regionLabel[wine.region]}
                      </p>
                      <p className="fit-score">Оценка попадания: {scoreScenarioFit(section, wine)}/5</p>
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
