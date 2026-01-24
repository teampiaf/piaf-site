import React, { useMemo, useState } from "react";
import type { CookiePreferences } from "../lib/cookieConsent";

export function CookieBanner({
  onSave,
  onAcceptAll,
  onRejectAll,
}: {
  onSave: (prefs: CookiePreferences) => void;
  onAcceptAll: () => void;
  onRejectAll: () => void;
}) {
  const [open, setOpen] = useState(false);

  // valeurs proposées dans la modale
  const [analytics, setAnalytics] = useState(false);

  const prefsPreview: CookiePreferences = useMemo(
    () => ({ necessary: true, analytics }),
    [analytics]
  );

  const save = () => {
    onSave(prefsPreview);
    setOpen(false);
  };

  return (
    <>
      {/* BANDEAU */}
      <div className="fixed bottom-4 left-0 right-0 z-[9999] px-4">
        <div className="mx-auto max-w-4xl rounded-2xl border border-white/30 bg-white/70 backdrop-blur-xl shadow-2xl shadow-black/10 p-4 md:p-5">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div className="text-left">
              <p className="font-bold text-gray-800">Cookies & mesure d’audience</p>
              <p className="text-sm text-gray-700/90 mt-1 leading-relaxed">
                On utilise des cookies nécessaires au fonctionnement du site et, si vous l’acceptez,
                des cookies de mesure d’audience (ex : Vercel Analytics / Google Analytics).
                {" "}
                <a href="/mentions-legales" className="underline hover:text-[#4AA171]">
                  En savoir plus
                </a>
                .
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-2 sm:gap-3">
              <button
                onClick={onRejectAll}
                className="px-5 py-2.5 rounded-xl bg-white text-gray-700 border border-gray-200 hover:border-gray-300 hover:shadow-sm transition"
              >
                Refuser
              </button>

              <button
                onClick={() => setOpen(true)}
                className="px-5 py-2.5 rounded-xl bg-white/70 text-gray-800 border border-white/40 hover:bg-white/80 transition"
              >
                Personnaliser
              </button>

              <button
                onClick={onAcceptAll}
                className="px-5 py-2.5 rounded-xl bg-[#4AA171] text-white font-bold hover:bg-[#3d8c60] transition shadow-lg shadow-black/10"
              >
                Accepter
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* MODALE PERSONNALISATION */}
      {open && (
        <div className="fixed inset-0 z-[10000] flex items-center justify-center px-4">
          <div
            className="absolute inset-0 bg-black/40"
            onClick={() => setOpen(false)}
          />
          <div className="relative w-full max-w-xl rounded-3xl bg-white/85 backdrop-blur-2xl border border-white/40 shadow-2xl shadow-black/20 p-6 md:p-8">
            <div className="flex items-start justify-between gap-4">
              <div>
                <h3 className="text-xl md:text-2xl font-bold text-gray-900">
                  Personnaliser les cookies
                </h3>
                <p className="text-sm text-gray-700/90 mt-1">
                  Vous pouvez activer/désactiver certains cookies. Les cookies nécessaires sont
                  toujours actifs.
                </p>
              </div>

              <button
                onClick={() => setOpen(false)}
                className="px-3 py-2 rounded-xl bg-white/60 border border-white/40 hover:bg-white/80 transition text-gray-700"
                aria-label="Fermer"
              >
                ✕
              </button>
            </div>

            <div className="mt-6 space-y-4">
              {/* Nécessaires */}
              <div className="flex items-center justify-between gap-4 rounded-2xl border border-gray-100 bg-white p-4">
                <div>
                  <p className="font-bold text-gray-900">Cookies nécessaires</p>
                  <p className="text-sm text-gray-700/80">
                    Indispensables au fonctionnement du site.
                  </p>
                </div>
                <span className="text-sm font-bold text-gray-600 bg-gray-100 px-3 py-1 rounded-full">
                  Toujours actifs
                </span>
              </div>

              {/* Analytics */}
              <div className="flex items-center justify-between gap-4 rounded-2xl border border-gray-100 bg-white p-4">
                <div>
                  <p className="font-bold text-gray-900">Mesure d’audience</p>
                  <p className="text-sm text-gray-700/80">
                    Aide à comprendre l’usage du site et l’améliorer.
                  </p>
                </div>

                <label className="inline-flex items-center cursor-pointer select-none">
                  <input
                    type="checkbox"
                    className="sr-only"
                    checked={analytics}
                    onChange={(e) => setAnalytics(e.target.checked)}
                  />
                  <span
                    className={`w-12 h-7 rounded-full transition relative ${
                      analytics ? "bg-[#4AA171]" : "bg-gray-300"
                    }`}
                  >
                    <span
                      className={`absolute top-1 left-1 w-5 h-5 rounded-full bg-white transition ${
                        analytics ? "translate-x-5" : ""
                      }`}
                    />
                  </span>
                </label>
              </div>
            </div>

            <div className="mt-7 flex flex-col sm:flex-row gap-2 sm:gap-3 justify-end">
              <button
                onClick={() => {
                  setAnalytics(false);
                  onRejectAll();
                  setOpen(false);
                }}
                className="px-5 py-2.5 rounded-xl bg-white text-gray-700 border border-gray-200 hover:border-gray-300 hover:shadow-sm transition"
              >
                Tout refuser
              </button>

              <button
                onClick={() => {
                  setAnalytics(true);
                  onAcceptAll();
                  setOpen(false);
                }}
                className="px-5 py-2.5 rounded-xl bg-white/70 text-gray-800 border border-white/40 hover:bg-white/80 transition"
              >
                Tout accepter
              </button>

              <button
                onClick={save}
                className="px-5 py-2.5 rounded-xl bg-[#4AA171] text-white font-bold hover:bg-[#3d8c60] transition shadow-lg shadow-black/10"
              >
                Enregistrer
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
