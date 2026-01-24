import React from "react";
import { setCookieConsent, CookieConsentStatus } from "../lib/cookieConsent";

export function CookieBanner({
  onChoice,
}: {
  onChoice: (choice: CookieConsentStatus) => void;
}) {
  const handle = (choice: CookieConsentStatus) => {
    setCookieConsent(choice);
    onChoice(choice);
  };

  return (
    <div className="fixed bottom-4 left-0 right-0 z-[9999] px-4">
      <div className="mx-auto max-w-4xl rounded-2xl border border-white/30 bg-white/70 backdrop-blur-xl shadow-2xl shadow-black/10 p-4 md:p-5">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div className="text-left">
            <p className="font-bold text-gray-800">
              Cookies & mesure d’audience
            </p>
            <p className="text-sm text-gray-700/90 mt-1 leading-relaxed">
              Nous utilisons des cookies de mesure d’audience (Google Analytics et/ou Vercel
              Analytics) pour améliorer le site. Vous pouvez accepter ou refuser.
              {" "}
              <a href="/mentions-legales" className="underline hover:text-[#4AA171]">
                En savoir plus
              </a>
              .
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-2 sm:gap-3">
            <button
              onClick={() => handle("rejected")}
              className="px-5 py-2.5 rounded-xl bg-white text-gray-700 border border-gray-200 hover:border-gray-300 hover:shadow-sm transition"
            >
              Refuser
            </button>

            <button
              onClick={() => handle("accepted")}
              className="px-5 py-2.5 rounded-xl bg-[#4AA171] text-white font-bold hover:bg-[#3d8c60] transition shadow-lg shadow-black/10"
            >
              Accepter
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
