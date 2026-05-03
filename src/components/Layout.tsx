import { NavLink, Outlet } from "react-router-dom";

type Props = {
  theme: "light" | "dark";
  onToggleTheme: () => void;
};

const links = [
  ["/", "Главная"],
  ["/wines", "Вина"],
  ["/wineries", "Винодельни"],
  ["/pairings", "Сочетания"],
  ["/collection", "Моя коллекция"],
  ["/submit", "Заявка производителя"],
  ["/review", "Панель модерации"]
] as const;

export default function Layout({ theme, onToggleTheme }: Props) {
  return (
    <div className="app-shell">
      <header className="topbar">
        <div>
          <h1>Vinaria Explorer Moldova</h1>
          <p>Каталог молдавских вин · сценарии сочетаний · живые данные</p>
        </div>
        <button className="btn btn-outline" onClick={onToggleTheme}>
          {theme === "light" ? "🌙 Тёмная" : "☀️ Светлая"}
        </button>
      </header>

      <nav className="nav-grid">
        {links.map(([to, label]) => (
          <NavLink
            key={to}
            to={to}
            end={to === "/"}
            className={({ isActive }) => (isActive ? "nav-link nav-link-active" : "nav-link")}
          >
            {label}
          </NavLink>
        ))}
      </nav>

      <main className="page-wrap">
        <Outlet />
      </main>
    </div>
  );
}
