export type CookieConsentStatus = "accepted" | "rejected";
const KEY = "piaf_cookie_consent_v1";

export function getCookieConsent(): CookieConsentStatus | null {
  try {
    const v = localStorage.getItem(KEY);
    if (v === "accepted" || v === "rejected") return v;
    return null;
  } catch {
    return null;
  }
}

export function setCookieConsent(value: CookieConsentStatus) {
  try {
    localStorage.setItem(KEY, value);
  } catch {
    // ignore
  }
}

export function clearCookieConsent() {
  try {
    localStorage.removeItem(KEY);
  } catch {
    // ignore
  }
}
