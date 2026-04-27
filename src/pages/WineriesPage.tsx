import { FormEvent, useMemo, useState } from "react";
import { Winery } from "../lib/types";

type Props = {
  wineries: Winery[];
  onToggleLike: (id: string) => void;
  onAdd: (input: {
    name: string;
    region: Winery["region"];
    city: string;
    description: string;
    priceLevel: Winery["priceLevel"];
    rating: number;
  }) => Promise<void>;
  onRemove: (id: string) => Promise<void>;
};

const regionLabel: Record<Winery["region"], string> = {
  Codru: "Кодру",
  "Stefan Voda": "Штефан-Водэ",
  "Valul lui Traian": "Валул-луй-Траян",
  Other: "Другое"
};

export default function WineriesPage({ wineries, onToggleLike, onAdd, onRemove }: Props) {
  const [region, setRegion] = useState<"all" | Winery["region"]>("all");
  const [form, setForm] = useState({
    name: "",
    region: "Codru" as Winery["region"],
    city: "",
    description: "",
    priceLevel: "$$" as Winery["priceLevel"],
    rating: 4.3
  });

  async function handleAdd(event: FormEvent) {
    event.preventDefault();
    if (!form.name.trim() || !form.city.trim()) return;
    await onAdd({
      name: form.name.trim(),
      region: form.region,
      city: form.city.trim(),
      description: form.description.trim() || "Винодельня, добавленная сообществом.",
      priceLevel: form.priceLevel,
      rating: Math.min(5, Math.max(1, form.rating))
    });
    setForm({ ...form, name: "", city: "", description: "" });
  }

  const list = useMemo(
    () => wineries.filter((item) => (region === "all" ? true : item.region === region)),
    [region, wineries]
  );

  return (
    <section>
      <form className="card form-grid" onSubmit={handleAdd}>
        <h3 className="full">Добавить винодельню</h3>
        <label>
          Название
          <input value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} />
        </label>
        <label>
          Город
          <input value={form.city} onChange={(e) => setForm({ ...form, city: e.target.value })} />
        </label>
        <label>
          Регион
          <select value={form.region} onChange={(e) => setForm({ ...form, region: e.target.value as Winery["region"] })}>
            <option value="Codru">Кодру</option>
            <option value="Stefan Voda">Штефан-Водэ</option>
            <option value="Valul lui Traian">Валул-луй-Траян</option>
            <option value="Other">Другое</option>
          </select>
        </label>
        <label>
          Ценовой уровень
          <select
            value={form.priceLevel}
            onChange={(e) => setForm({ ...form, priceLevel: e.target.value as Winery["priceLevel"] })}
          >
            <option value="$">$</option>
            <option value="$$">$$</option>
            <option value="$$$">$$$</option>
          </select>
        </label>
        <label>
          Рейтинг
          <input
            type="number"
            min={1}
            max={5}
            step={0.1}
            value={form.rating}
            onChange={(e) => setForm({ ...form, rating: Number(e.target.value) })}
          />
        </label>
        <label className="full">
          Описание
          <textarea value={form.description} onChange={(e) => setForm({ ...form, description: e.target.value })} rows={2} />
        </label>
        <button className="btn" type="submit">
          Добавить винодельню
        </button>
      </form>

      <div className="row-between">
        <h2>Винодельни</h2>
        <select value={region} onChange={(e) => setRegion(e.target.value as "all" | Winery["region"])}>
          <option value="all">Все регионы</option>
          <option value="Codru">Кодру</option>
          <option value="Stefan Voda">Штефан-Водэ</option>
          <option value="Valul lui Traian">Валул-луй-Траян</option>
          <option value="Other">Другое</option>
        </select>
      </div>

      <div className="card-grid">
        {list.map((winery) => (
          <article key={winery.id} className="card">
            <div className="row-between">
              <h3>{winery.name}</h3>
              <div className="row-actions">
                <button className="btn" onClick={() => onToggleLike(winery.id)}>
                  {winery.liked ? "В избранном" : "В избранное"}
                </button>
                {!winery.id.startsWith("w-") ? (
                  <button className="btn btn-danger" onClick={() => onRemove(winery.id)}>
                    Удалить
                  </button>
                ) : null}
              </div>
            </div>
            <p>
              {winery.city} | {regionLabel[winery.region]}
            </p>
            <p>{winery.description}</p>
            <p>
              Цена: {winery.priceLevel} | Рейтинг: {winery.rating.toFixed(1)}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}
