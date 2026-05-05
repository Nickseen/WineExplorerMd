import { NavLink, Outlet } from "react-router-dom";
import type { Role } from "../features/useAuth";

type Props = {
  theme: "light" | "dark";
  onToggleTheme: () => void;
  role: Role | null;
  onLoginClick: () => void;
  onLogout: () => void;
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

export default function Layout({ theme, onToggleTheme, role, onLoginClick, onLogout }: Props) {
  return (
    <div className="app-shell">
      <header className="topbar">
        <div>
          <h1>Vinaria Explorer Moldova</h1>
          <p>Каталог молдавских вин · сценарии сочетаний · живые данные</p>
        </div>
        <div className="topbar-actions">
          {role && role !== "VISITOR" ? (
            <div className="auth-status">
              <span className="role-badge">{role}</span>
              <button className="btn btn-outline btn-sm" onClick={onLogout}>
                Выйти
              </button>
            </div>
          ) : (
            <button className="btn btn-outline btn-sm" onClick={onLoginClick}>
              Войти
            </button>
          )}
          <button className="btn btn-outline" onClick={onToggleTheme}>
            {theme === "light" ? "🌙 Тёмная" : "☀️ Светлая"}
          </button>
        </div>
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
