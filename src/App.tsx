import React, { useEffect, useMemo, useState } from "react";
import { Instagram, Linkedin } from "lucide-react";

import { Hero } from "./components/Hero";
import { Features } from "./components/Features";
import { ProductShowcase } from "./components/ProductShowcase";
import { Team } from "./components/Team";
import { Download } from "./components/Download";
import { ProjectPage } from "./components/ProjectPage";
import { HowItWorksPage } from "./components/HowItWorksPage";
import { MentionsLegalesPage } from "./components/MentionsLegalesPage";

import { SecondaryBackground } from "./components/ui/SecondaryBackground";
import { CookieBanner } from "./components/CookieBanner";

import { getCookieConsent, CookieConsentStatus } from "./lib/cookieConsent";
import { loadGoogleAnalytics } from "./lib/analytics";

export function App() {
  // -----------------------------
  // ROUTAGE SIMPLE (Vite / SPA)
  // -----------------------------
  const rawPath = window.location.pathname;
  const path = rawPath.replace(/\/+$/, "") || "/";

  // -----------------------------
  // COOKIES
  // -----------------------------
  const [consent, setConsent] = useState<CookieConsentStatus | null>(() =>
    getCookieConsent()
  );

  const gaId = useMemo(() => {
    // Mets dans .env : VITE_GA_MEASUREMENT_ID=G-XXXXXXX
    return (import.meta as any).env?.VITE_GA_MEASUREMENT_ID as string | undefined;
  }, []);

  useEffect(() => {
    if (consent === "accepted" && gaId) {
      loadGoogleAnalytics(gaId);
    }
  }, [consent, gaId]);

  const withBanner = (node: React.ReactNode) => (
    <>
      {node}
      {!consent && <CookieBanner onChoice={setConsent} />}
    </>
  );

  // -----------------------------
  // PAGES
  // -----------------------------
  if (path === "/download") return withBanner(<Download />);

  if (path === "/projet" || path === "/project" || path === "/decouvrir-le-projet")
    return withBanner(<ProjectPage />);

  if (path === "/comment-ca-marche" || path === "/how-it-works")
    return withBanner(<HowItWorksPage />);

  if (path === "/mentions-legales" || path === "/mentions")
    return withBanner(<MentionsLegalesPage />);

  // -----------------------------
  // HOME
  // -----------------------------
  return withBanner(
    <div className="min-h-screen relative overflow-hidden font-sans selection:bg-gray-50 selection:text-[#4AA171]">
      <SecondaryBackground variant="home" />

      {/* HEADER */}
      <header className="relative w-full">
        <div className="w-full h-[140px] md:h-[225px]">
          <img
            src="/images/banderole2.png"
            alt="Banderole PIAF"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Boutons header */}
        <div className="absolute top-0 left-0 right-0 px-4 md:px-8 pt-4 sm:pt-5 md:pt-8">
          <div className="w-full max-w-7xl mx-auto flex justify-end">
            <div className="flex flex-col items-stretch gap-2 sm:flex-row sm:items-center sm:gap-3 md:gap-4">
              <a
                href="mailto:piaf.contact@gmail.com"
                className="inline-flex justify-center sm:justify-start bg-white/70 backdrop-blur-md border border-white/60 text-[#4AA171] font-bold px-4 sm:px-6 py-2.5 sm:py-3 rounded-full shadow-md hover:shadow-lg transition-all hover:-translate-y-0.5 w-full sm:w-auto"
              >
                Contact
              </a>

              <a
                href="/download"
                className="inline-flex justify-center sm:justify-start bg-[#4AA171] text-white px-4 sm:px-6 py-2.5 sm:py-3 rounded-full font-bold hover:bg-[#3d8c60] transition-all shadow-xl ring-4 ring-white/40 hover:-translate-y-0.5 w-full sm:w-auto text-center"
              >
                Télécharger
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* CONTENU */}
      <main className="relative z-10 space-y-8 md:space-y-16 pb-16">
        <Hero />
        <Features />
        <ProductShowcase />
        <Team />
      </main>

      {/* FOOTER */}
      <footer className="relative z-10 bg-white/55 backdrop-blur-xl py-12 px-4 text-center text-gray-600 text-sm border-t border-white/40">
        <div className="flex justify-center gap-6 mb-10">
          <SocialFooterBtn
            icon={Instagram}
            link="https://www.instagram.com/team_piaf/"
            label="Instagram"
          />
          <SocialFooterBtn
            icon={Linkedin}
            link="https://www.linkedin.com/in/team-piaf"
            label="LinkedIn"
          />
          <SocialFooterBtn
            icon={TikTokIcon}
            link="https://www.tiktok.com/@fly_with_piaf"
            label="TikTok"
          />
        </div>

        <div className="max-w-7xl mx-auto pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p>© 2026 PIAF - Parcours Interactifs Accessibles Facilement.</p>
          <div className="flex gap-4">
            <a href="mailto:support@piaf-app.fr" className="hover:text-[#4AA171]">
              Support
            </a>
            <span className="text-gray-300">|</span>
            <a href="/mentions-legales" className="hover:text-[#4AA171]">
              Mentions Légales
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

function SocialFooterBtn({
  icon: Icon,
  link,
  label,
}: {
  icon: any;
  link: string;
  label: string;
}) {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-50 text-gray-400 hover:bg-[#4AA171] hover:text-white transition-all duration-300"
      aria-label={label}
    >
      <Icon className="w-5 h-5" />
    </a>
  );
}

function TikTokIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
    </svg>
  );
}
