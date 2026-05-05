import { useCallback, useState } from "react";
import { fetchToken } from "../lib/api";

export type Role = "ADMIN" | "WRITER" | "VISITOR";

const TOKEN_KEY = "vinaria_token";
const ROLE_KEY = "vinaria_role";

export function useAuth() {
  const [token, setToken] = useState<string | null>(() => localStorage.getItem(TOKEN_KEY));
  // Default to VISITOR so unauthenticated users can browse without logging in
  const [role, setRole] = useState<Role>(() => (localStorage.getItem(ROLE_KEY) as Role | null) ?? "VISITOR");

  const login = useCallback(async (selectedRole: Role): Promise<void> => {
    const t = await fetchToken(selectedRole);
    setToken(t);
    setRole(selectedRole);
    localStorage.setItem(TOKEN_KEY, t);
    localStorage.setItem(ROLE_KEY, selectedRole);
  }, []);

  const logout = useCallback(() => {
    setToken(null);
    setRole("VISITOR");
    localStorage.removeItem(TOKEN_KEY);
    localStorage.removeItem(ROLE_KEY);
  }, []);

  /** Re-issues a fresh token for the current role (call when 401 is received). */
  const refreshToken = useCallback(async (): Promise<string | null> => {
    if (role === "VISITOR") return null;
    try {
      const t = await fetchToken(role);
      setToken(t);
      localStorage.setItem(TOKEN_KEY, t);
      return t;
    } catch {
      logout();
      return null;
    }
  }, [role, logout]);

  return { token, role, login, logout, refreshToken };
}
