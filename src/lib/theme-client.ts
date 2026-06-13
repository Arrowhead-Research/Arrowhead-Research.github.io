export type Theme = "dark" | "light";

const THEME_STORAGE_KEY = "theme";

export function getStoredTheme(): Theme | null {
  const theme = window.localStorage.getItem(THEME_STORAGE_KEY);
  return theme === "dark" || theme === "light" ? theme : null;
}

export function getSystemTheme(): Theme {
  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
}

export function getResolvedTheme(): Theme {
  return getStoredTheme() ?? getSystemTheme();
}

export function applyTheme(theme: Theme): void {
  document.documentElement.classList.toggle("dark", theme === "dark");
}

/**
 * Store the user's explicit theme preference and update the <html> class.
 */
export function setThemeOnClient(theme: Theme): void {
  window.localStorage.setItem(THEME_STORAGE_KEY, theme);
  applyTheme(theme);
}
