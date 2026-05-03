import { FormEvent, useMemo, useState } from "react";
import { Wine } from "../lib/types";

type Props = {
  wines: Wine[];
  onAdd: (input: {
    name: string;
    type: Wine["type"];
    grapeVariety: string;
    year: number;
    price: number;
    region: Wine["region"];
    body: Wine["body"];
    sweetness: Wine["sweetness"];
    aromaNotes: string[];
    servingTemp: string;
    alcoholPercent: number;
    pairingTags: string[];
    imagePath?: string;
  }) => Promise<void>;
  onToggleLike: (id: string) => void;
  onRemove: (id: string) => void;
};

const typeLabel: Record<Wine["type"], string> = {
  red: "Красное",
  white: "Белое",
  rose: "Розе",
  sparkling: "Игристое"
};

const sweetnessLabel: Record<Wine["sweetness"], string> = {
  dry: "Сухое",
  "semi-dry": "Полусухое",
  "semi-sweet": "Полусладкое",
  sweet: "Сладкое"
};

const bodyLabel: Record<Wine["body"], string> = {
  light: "Легкое",
  medium: "Среднее",
  full: "Плотное"
};

const regionLabel: Record<Wine["region"], string> = {
  Codru: "Кодру",
  "Stefan Voda": "Штефан-Водэ",
  "Valul lui Traian": "Валул-луй-Траян",
  Other: "Другое"
};

export default function WinesPage({ wines, onAdd, onToggleLike, onRemove }: Props) {
  const currentYear = new Date().getFullYear();
  const [form, setForm] = useState({
    name: "",
    type: "red" as Wine["type"],
    grapeVariety: "",
    year: currentYear,
    price: 180,
    region: "Codru" as Wine["region"],
    body: "medium" as Wine["body"],
    sweetness: "dry" as Wine["sweetness"],
    aromaNotes: "",
    servingTemp: "12-16 C",
    alcoholPercent: 12.5,
    pairingTags: "",
    imagePath: ""
  });

  const [search, setSearch] = useState("");
  const [type, setType] = useState<"all" | Wine["type"]>("all");
  const [region, setRegion] = useState<"all" | Wine["region"]>("all");
  const [sweetness, setSweetness] = useState<"all" | Wine["sweetness"]>("all");
  const [body, setBody] = useState<"all" | Wine["body"]>("all");
  const [sortBy, setSortBy] = useState<"year-desc" | "price-asc" | "price-desc" | "name-asc">("year-desc");
  const [maxPrice, setMaxPrice] = useState<number>(9999);
  const [activeWineId, setActiveWineId] = useState<string | null>(null);
  const [formOpen, setFormOpen] = useState(false);

  const sliderMax = useMemo(() => {
    const prices = wines.map((w) => w.price || 0).filter((p) => p > 0);
    return prices.length > 0 ? Math.ceil(Math.max(...prices) / 100) * 100 + 200 : 2000;
  }, [wines]);

  const filtered = useMemo(() => {
    const result = wines
      .filter((wine) => (type === "all" ? true : wine.type === type))
      .filter((wine) => (region === "all" ? true : wine.region === region))
      .filter((wine) => (sweetness === "all" ? true : wine.sweetness === sweetness))
      .filter((wine) => (body === "all" ? true : wine.body === body))
      .filter((wine) => wine.price <= maxPrice)
      .filter(
        (wine) =>
          wine.name.toLowerCase().includes(search.toLowerCase()) ||
          wine.grapeVariety.toLowerCase().includes(search.toLowerCase())
      );

    if (sortBy === "price-asc") return result.sort((a, b) => a.price - b.price);
    if (sortBy === "price-desc") return result.sort((a, b) => b.price - a.price);
    if (sortBy === "name-asc") return result.sort((a, b) => a.name.localeCompare(b.name));
    return result.sort((a, b) => b.year - a.year);
  }, [body, maxPrice, region, search, sortBy, sweetness, type, wines]);

  const activeWine = activeWineId ? wines.find((wine) => wine.id === activeWineId) ?? null : null;

  async function handleAdd(event: FormEvent) {
    event.preventDefault();
    if (!form.name.trim() || !form.grapeVariety.trim()) return;
    await onAdd({
      name: form.name.trim(),
      type: form.type,
      grapeVariety: form.grapeVariety.trim(),
      year: form.year,
      price: form.price,
      region: form.region,
      body: form.body,
      sweetness: form.sweetness,
      aromaNotes: form.aromaNotes
        .split(",")
        .map((v) => v.trim())
        .filter(Boolean),
      servingTemp: form.servingTemp.trim() || "12-16 C",
      alcoholPercent: form.alcoholPercent,
      pairingTags: form.pairingTags
        .split(",")
        .map((v) => v.trim())
        .filter(Boolean),
      imagePath: form.imagePath.trim() || undefined
    });
    setForm({ ...form, name: "", grapeVariety: "", aromaNotes: "", pairingTags: "", imagePath: "" });
    setFormOpen(false);
  }

  return (
    <section>
      <h2>Каталог вин</h2>
      <div className="card">
        <div className="row-between">
          <h3 style={{ margin: 0 }}>Добавить свое вино</h3>
          <button type="button" className="btn btn-outline" onClick={() => setFormOpen((v) => !v)}>
            {formOpen ? "Свернуть" : "Развернуть"}
          </button>
        </div>
      </div>
      {formOpen && (
      <form className="card form-grid" onSubmit={handleAdd}>
        <label>
          Название
          <input value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} />
        </label>
        <label>
          Тип
          <select value={form.type} onChange={(e) => setForm({ ...form, type: e.target.value as Wine["type"] })}>
            <option value="red">Красное</option>
            <option value="white">Белое</option>
            <option value="rose">Розе</option>
            <option value="sparkling">Игристое</option>
          </select>
        </label>
        <label>
          Сорт винограда
          <input value={form.grapeVariety} onChange={(e) => setForm({ ...form, grapeVariety: e.target.value })} />
        </label>
        <label>
          Год
          <input type="number" value={form.year} onChange={(e) => setForm({ ...form, year: Number(e.target.value) })} />
        </label>
        <label>
          Цена
          <input type="number" value={form.price} onChange={(e) => setForm({ ...form, price: Number(e.target.value) })} />
        </label>
        <label>
          Регион
          <select value={form.region} onChange={(e) => setForm({ ...form, region: e.target.value as Wine["region"] })}>
            <option value="Codru">Кодру</option>
            <option value="Stefan Voda">Штефан-Водэ</option>
            <option value="Valul lui Traian">Валул-луй-Траян</option>
            <option value="Other">Другое</option>
          </select>
        </label>
        <label>
          Тело
          <select value={form.body} onChange={(e) => setForm({ ...form, body: e.target.value as Wine["body"] })}>
            <option value="light">Легкое</option>
            <option value="medium">Среднее</option>
            <option value="full">Плотное</option>
          </select>
        </label>
        <label>
          Сладость
          <select
            value={form.sweetness}
            onChange={(e) => setForm({ ...form, sweetness: e.target.value as Wine["sweetness"] })}
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
            step={0.1}
            value={form.alcoholPercent}
            onChange={(e) => setForm({ ...form, alcoholPercent: Number(e.target.value) })}
          />
        </label>
        <label>
          Температура подачи
          <input value={form.servingTemp} onChange={(e) => setForm({ ...form, servingTemp: e.target.value })} />
        </label>
        <label className="full">
          Ароматические ноты (через запятую)
          <input value={form.aromaNotes} onChange={(e) => setForm({ ...form, aromaNotes: e.target.value })} />
        </label>
        <label className="full">
          Теги сочетаний (через запятую)
          <input value={form.pairingTags} onChange={(e) => setForm({ ...form, pairingTags: e.target.value })} />
        </label>
        <label className="full">
          Ссылка на фото (опционально)
          <input
            placeholder="/bottle-images/my-wine.png"
            value={form.imagePath}
            onChange={(e) => setForm({ ...form, imagePath: e.target.value })}
          />
        </label>
        <button className="btn" type="submit">
          Добавить вино
        </button>
      </form>
      )}

      <div className="card filters-row">
        <input placeholder="Поиск по названию" value={search} onChange={(e) => setSearch(e.target.value)} />
        <select value={type} onChange={(e) => setType(e.target.value as "all" | Wine["type"])}>
          <option value="all">Все типы</option>
          <option value="red">Красные</option>
          <option value="white">Белые</option>
          <option value="rose">Розе</option>
          <option value="sparkling">Игристые</option>
        </select>
        <select value={region} onChange={(e) => setRegion(e.target.value as "all" | Wine["region"])}>
          <option value="all">Все регионы</option>
          <option value="Codru">Кодру</option>
          <option value="Stefan Voda">Штефан-Водэ</option>
          <option value="Valul lui Traian">Валул-луй-Траян</option>
          <option value="Other">Другое</option>
        </select>
        <select value={sweetness} onChange={(e) => setSweetness(e.target.value as "all" | Wine["sweetness"])}>
          <option value="all">Любая сладость</option>
          <option value="dry">Сухое</option>
          <option value="semi-dry">Полусухое</option>
          <option value="semi-sweet">Полусладкое</option>
          <option value="sweet">Сладкое</option>
        </select>
        <select value={body} onChange={(e) => setBody(e.target.value as "all" | Wine["body"])}>
          <option value="all">Любая плотность</option>
          <option value="light">Легкое</option>
          <option value="medium">Среднее</option>
          <option value="full">Плотное</option>
        </select>
        <select value={sortBy} onChange={(e) => setSortBy(e.target.value as "year-desc" | "price-asc" | "price-desc" | "name-asc")}>
          <option value="year-desc">Сначала новые</option>
          <option value="price-asc">Цена по возрастанию</option>
          <option value="price-desc">Цена по убыванию</option>
          <option value="name-asc">Название А-Я</option>
        </select>
        <label>
          Макс. цена: {maxPrice >= sliderMax ? "Любая" : `${maxPrice} MDL`}
          <input
            type="range"
            min={50}
            max={sliderMax}
            step={10}
            value={Math.min(maxPrice, sliderMax)}
            onChange={(e) => {
              const val = Number(e.target.value);
              setMaxPrice(val >= sliderMax ? 9999 : val);
            }}
          />
        </label>
      </div>

      <p className="result-line">Найдено: {filtered.length}</p>

      <div className="card-grid">
        {filtered.map((wine) => (
          <article key={wine.id} className="card wine-card">
            <div className="wine-visual">
              {wine.imagePath ? <img src={wine.imagePath} alt={wine.name} loading="lazy" /> : <span>Нет фото</span>}
            </div>
            <div className="row-between">
              <h3>{wine.name}</h3>
              <span className="badge">{typeLabel[wine.type]}</span>
            </div>
            <p>
              {regionLabel[wine.region]} | {wine.year} | {wine.grapeVariety}
            </p>
            <p>
              Тело: {bodyLabel[wine.body]}, Сладость: {sweetnessLabel[wine.sweetness]}, Алк: {wine.alcoholPercent}%
            </p>
            <p>Сочетания: {wine.pairingTags.join(", ")}</p>
            <p>Цена: {wine.price} MDL</p>
            <div className="row-actions">
              <button className="btn btn-outline" onClick={() => setActiveWineId(wine.id)}>
                Подробнее
              </button>
              <button className="btn" onClick={() => onToggleLike(wine.id)}>
                {wine.liked ? "Убрать лайк" : "Лайк"}
              </button>
              {wine.sourceType !== "seed" ? (
                <button className="btn btn-danger" onClick={() => onRemove(wine.id)}>
                  Удалить
                </button>
              ) : null}
            </div>
          </article>
        ))}
      </div>

      {activeWine ? (
        <div className="modal-overlay" onClick={() => setActiveWineId(null)}>
          <div className="modal-box" onClick={(e) => e.stopPropagation()}>
            <div className="row-between">
              <h3>{activeWine.name}</h3>
              <button className="btn btn-outline" onClick={() => setActiveWineId(null)}>
                Закрыть
              </button>
            </div>
            {activeWine.imagePath ? (
              <div className="wine-detail-image">
                <img src={activeWine.imagePath} alt={activeWine.name} loading="lazy" />
              </div>
            ) : null}
            <p>
              {activeWine.year} | {typeLabel[activeWine.type]} | {regionLabel[activeWine.region]}
            </p>
            <p>Сорта: {activeWine.grapeVariety}</p>
            <p>Аромат: {activeWine.aromaNotes.join(", ")}</p>
            <p>Подача: {activeWine.servingTemp}</p>
            <p>Теги сочетаний: {activeWine.pairingTags.join(", ")}</p>
            <p>
              Алкоголь: {activeWine.alcoholPercent}% | Цена: {activeWine.price} MDL
            </p>
          </div>
        </div>
      ) : null}
    </section>
  );
}
