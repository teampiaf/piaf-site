export type CookiePreferences = {
  necessary: true;      // toujours true
  analytics: boolean;   // personnalisable
};

const KEY = "piaf_cookie_prefs_v1";

export function getCookiePreferences(): CookiePreferences | null {
  try {
    const raw = localStorage.getItem(KEY);
    if (!raw) return null;
    const obj = JSON.parse(raw);

    // Validation minimale
    if (typeof obj?.analytics !== "boolean") return null;

    return { necessary: true, analytics: obj.analytics };
  } catch {
    return null;
  }
}

export function setCookiePreferences(prefs: CookiePreferences) {
  try {
    localStorage.setItem(KEY, JSON.stringify({ analytics: prefs.analytics }));
  } catch {
    // ignore
  }
}

export function acceptAllCookies() {
  setCookiePreferences({ necessary: true, analytics: true });
}

export function rejectAllCookies() {
  setCookiePreferences({ necessary: true, analytics: false });
}

export function resetCookiePreferences() {
  try {
    localStorage.removeItem(KEY);
  } catch {
    // ignore
  }
}
