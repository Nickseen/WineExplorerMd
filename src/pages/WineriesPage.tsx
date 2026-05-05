import { FormEvent, useMemo, useState } from "react";
import type { Role } from "../features/useAuth";
import { apiAddWinery, apiDeleteWinery } from "../lib/api";
import { Wine, Winery } from "../lib/types";

type Props = {
  wineries: Winery[];
  wines: Wine[];
  onToggleLike: (id: string) => void;
  onAdd: (winery: Winery) => Promise<void>;
  onRemove: (id: string) => Promise<void>;
  role: Role | null;
  onLoginClick: () => void;
  token: string | null;
};

const regionLabel: Record<Winery["region"], string> = {
  Codru: "Кодру",
  "Stefan Voda": "Штефан-Водэ",
  "Valul lui Traian": "Валул-луй-Траян",
  Other: "Другое"
};

const regionColor: Record<Winery["region"], string> = {
  Codru: "#4a7c59",
  "Stefan Voda": "#7a3b69",
  "Valul lui Traian": "#b5580a",
  Other: "#4a5568"
};

export default function WineriesPage({ wineries, wines, onToggleLike, onAdd, onRemove, role, onLoginClick, token }: Props) {
  const [region, setRegion] = useState<"all" | Winery["region"]>("all");
  const [sortBy, setSortBy] = useState<"name" | "rating" | "wines" | "liked">("rating");
  const [formOpen, setFormOpen] = useState(false);
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const [addError, setAddError] = useState<string | null>(null);
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
    setAddError(null);
    const input = {
      name: form.name.trim(),
      region: form.region,
      city: form.city.trim(),
      description: form.description.trim() || "Винодельня, добавленная сообществом.",
      priceLevel: form.priceLevel,
      rating: Math.min(5, Math.max(1, form.rating))
    };
    try {
      if (token) {
        const winery = await apiAddWinery(input, token);
        await onAdd(winery);
      } else {
        onLoginClick();
        return;
      }
    } catch (err) {
      setAddError(err instanceof Error ? err.message : "Ошибка при добавлении винодельни");
      return;
    }
    setForm({ ...form, name: "", city: "", description: "" });
  }

  const wineCountMap = useMemo(() => {
    const map: Record<string, number> = {};
    wines.forEach((w) => { if (w.wineryId) map[w.wineryId] = (map[w.wineryId] ?? 0) + 1; });
    return map;
  }, [wines]);

  const topWinesMap = useMemo(() => {
    const map: Record<string, Wine[]> = {};
    wines.forEach((w) => {
      if (!w.wineryId) return;
      if (!map[w.wineryId]) map[w.wineryId] = [];
      map[w.wineryId].push(w);
    });
    Object.keys(map).forEach((id) => {
      map[id] = map[id].sort((a, b) => b.price - a.price).slice(0, 3);
    });
    return map;
  }, [wines]);

  const stats = useMemo(() => {
    const byRegion: Record<string, number> = {};
    wineries.forEach((w) => { byRegion[w.region] = (byRegion[w.region] ?? 0) + 1; });
    return {
      total: wineries.length,
      liked: wineries.filter((w) => w.liked).length,
      byRegion
    };
  }, [wineries]);

  const list = useMemo(() => {
    const filtered = wineries.filter((item) => region === "all" ? true : item.region === region);
    if (sortBy === "name") return [...filtered].sort((a, b) => a.name.localeCompare(b.name));
    if (sortBy === "rating") return [...filtered].sort((a, b) => b.rating - a.rating);
    if (sortBy === "wines") return [...filtered].sort((a, b) => (wineCountMap[b.id] ?? 0) - (wineCountMap[a.id] ?? 0));
    if (sortBy === "liked") return [...filtered].filter((w) => w.liked);
    return filtered;
  }, [region, sortBy, wineries, wineCountMap]);

  return (
    <section>
      {/* Add-winery block — role-gated */}
      {!role && (
        <div className="card auth-notice">
          <p>Войдите, чтобы добавить винодельню.</p>
          <button className="btn" onClick={onLoginClick}>Войти</button>
        </div>
      )}
      {(role === "VISITOR" || role === "WRITER") && (
        <div className="card auth-notice">
          <p>Добавлять винодельни может только <strong>ADMIN</strong>.</p>
          <button className="btn btn-outline" onClick={onLoginClick}>Сменить роль</button>
        </div>
      )}
      {role === "ADMIN" && (
      <div className="card">
        <div className="row-between">
          <h3 style={{ margin: 0 }}>Добавить винодельню (ADMIN)</h3>
          <button className="btn" type="button" onClick={() => setFormOpen((o) => !o)}>
            {formOpen ? "Свернуть ▲" : "Развернуть ▼"}
          </button>
        </div>
        {formOpen && (
          <form className="form-grid" style={{ marginTop: "1rem" }} onSubmit={handleAdd}>
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
            {addError && <p className="error" style={{ marginTop: "0.5rem" }}>{addError}</p>}
          </form>
        )}
      </div>
      )}

      <div className="card winery-stats-row">
        <span>Всего: <strong>{stats.total}</strong></span>
        <span>В избранном: <strong>{stats.liked}</strong></span>
        {Object.entries(stats.byRegion).map(([r, count]) => (
          <span key={r} style={{ color: regionColor[r as Winery["region"]] }}>
            {regionLabel[r as Winery["region"]]}: <strong>{count}</strong>
          </span>
        ))}
      </div>

      <div className="row-between">
        <h2>Винодельни</h2>
        <div style={{ display: "flex", gap: "0.5rem" }}>
          <select value={region} onChange={(e) => setRegion(e.target.value as "all" | Winery["region"])}>
            <option value="all">Все регионы</option>
            <option value="Codru">Кодру</option>
            <option value="Stefan Voda">Штефан-Водэ</option>
            <option value="Valul lui Traian">Валул-луй-Траян</option>
            <option value="Other">Другое</option>
          </select>
          <select value={sortBy} onChange={(e) => setSortBy(e.target.value as typeof sortBy)}>
            <option value="rating">По рейтингу</option>
            <option value="name">По названию</option>
            <option value="wines">По кол-ву вин</option>
            <option value="liked">Только избранные</option>
          </select>
        </div>
      </div>

      <div className="card-grid">
        {list.map((winery) => {
          const count = wineCountMap[winery.id] ?? 0;
          const top = topWinesMap[winery.id] ?? [];
          const isExpanded = expandedId === winery.id;
          const stars = Math.round(winery.rating);
          return (
          <article key={winery.id} className="card winery-card">
            <div className="winery-region-bar" style={{ background: regionColor[winery.region] }} />

            {/* Header */}
            <div className="winery-card-header">
              <div>
                <span className="winery-region-pill" style={{ color: regionColor[winery.region], borderColor: regionColor[winery.region] }}>
                  {regionLabel[winery.region]}
                </span>
                <h3 className="winery-card-title">{winery.name}</h3>
                <span className="winery-city">{winery.city} · {winery.priceLevel}</span>
              </div>
              <div className="winery-card-actions">
                <button
                  className={`winery-like-btn${winery.liked ? " winery-like-btn--active" : ""}`}
                  onClick={() => onToggleLike(winery.id)}
                  title={winery.liked ? "Убрать из избранного" : "В избранное"}
                >
                  {winery.liked ? "♥" : "♡"}
                </button>
                {!winery.id.startsWith("w-") && (
                  <button
                    className="winery-delete-btn"
                    title="Удалить"
                    onClick={async () => {
                      if (!token) { onLoginClick(); return; }
                      try {
                        await apiDeleteWinery(winery.id, token);
                        await onRemove(winery.id);
                      } catch {
                        // игнорируем UI ошибку удаления
                      }
                    }}
                  >✕</button>
                )}
              </div>
            </div>

            {/* Description */}
            <p className="winery-card-desc">{winery.description}</p>

            {/* Footer */}
            <div className="winery-card-footer">
              <span className="winery-stars">
                {"★".repeat(stars)}{"☆".repeat(5 - stars)}
                <span className="winery-rating-num">{winery.rating.toFixed(1)}</span>
              </span>
              <span className="winery-wine-count">{count > 0 ? `${count} вин` : "—"}</span>
            </div>

            {count > 0 && (
              <button
                className="winery-expand-btn"
                onClick={() => setExpandedId(isExpanded ? null : winery.id)}
              >
                <span>Топ вина</span>
                <span className="winery-expand-icon">{isExpanded ? "▲" : "▼"}</span>
              </button>
            )}
            {isExpanded && (
              <ul className="clean-list winery-top-wines">
                {top.map((w) => (
                  <li key={w.id} className="list-row">
                    <span>{w.name} <small>({w.year})</small></span>
                    <span className="badge badge-outline">{w.price} MDL</span>
                  </li>
                ))}
              </ul>
            )}
          </article>
        )})}
      </div>
    </section>
  );
}
