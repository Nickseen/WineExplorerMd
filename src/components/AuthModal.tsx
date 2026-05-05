import { FormEvent, useState } from "react";
import type { Role } from "../features/useAuth";

type Props = {
  onLogin: (role: Role) => Promise<void>;
  onClose: () => void;
};

const roles: { value: Role; label: string; icon: string; desc: string }[] = [
  { value: "WRITER", label: "Writer", icon: "✍️", desc: "Добавление вин и заявки на модерацию" },
  { value: "ADMIN",  label: "Admin",  icon: "🛡️", desc: "Полный доступ и панель модерации" },
];

export default function AuthModal({ onLogin, onClose }: Props) {
  const [role, setRole] = useState<Role>("WRITER");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError("");
    try {
      await onLogin(role);
      onClose();
    } catch {
      setError("Не удалось подключиться к серверу. Убедитесь, что бэкенд запущен на порту 3001.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <h2>Войти</h2>
        <p className="text-muted">
          Выберите роль. Токен действует <strong>1 минуту</strong> (демо-режим).
        </p>

        <form onSubmit={handleSubmit} className="auth-form">
          <div className="role-options">
            {roles.map(({ value, label, icon, desc }) => (
              <label key={value} className={`role-option ${role === value ? "role-option-active" : ""}`}>
                <input
                  type="radio"
                  name="role"
                  value={value}
                  checked={role === value}
                  onChange={() => setRole(value)}
                />
                <span className="role-icon">{icon}</span>
                <div className="role-info">
                  <span className="role-name">{label}</span>
                  <span className="role-desc">{desc}</span>
                </div>
              </label>
            ))}
          </div>

          {error && <p className="form-error">{error}</p>}

          <div className="row-actions">
            <button type="submit" className="btn" disabled={loading}>
              {loading ? "Загрузка..." : "Войти"}
            </button>
            <button type="button" className="btn btn-outline" onClick={onClose}>
              Отмена
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
