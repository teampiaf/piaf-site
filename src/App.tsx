import React from "react";
// J'importe les icônes nécessaires
import { Instagram, Linkedin } from "lucide-react";
import { Hero } from "./components/Hero";
import { Features } from "./components/Features";
import { ProductShowcase } from "./components/ProductShowcase";
import { Team } from "./components/Team";
import { Download } from "./components/Download";
import { ProjectPage } from "./components/ProjectPage";
import { HowItWorksPage } from "./components/HowItWorksPage";

export function App() {
  // 1. ROUTAGE SIMPLE
  const path = window.location.pathname.replace(/\/$/, "");

  if (path === "/download") return <Download />;
  if (path === "/project") return <ProjectPage />;
  if (path === "/how-it-works") return <HowItWorksPage />;

  // 2. PAGE D'ACCUEIL
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#effcf6] to-white font-sans selection:bg-gray-50 selection:text-[#4AA171]">
      {/* HEADER */}
      <header className="relative w-full">
        <div className="w-full h-[140px] md:h-[225px]">
          <img
            src="/images/banderole2.png"
            alt="Banderole PIAF"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Zone boutons (responsive + évite overlap sur mobile) */}
        <div className="absolute inset-0 px-4 md:px-8 flex justify-end items-start">
          <div className="w-full max-w-7xl mx-auto flex justify-end">
            <div className="flex gap-3 sm:gap-4 md:gap-12 items-center mt-4 sm:mt-5 md:mt-20 md:-mr-24">
              <a
                href="mailto:piaf.contact@gmail.com"
                className="inline-block bg-white/70 backdrop-blur-md border border-white/60 text-[#4AA171] font-bold px-4 sm:px-6 py-2.5 sm:py-3 rounded-full shadow-md hover:shadow-lg transition-all hover:-translate-y-0.5"
              >
                Contact
              </a>

              <a
                href="/download"
                className="bg-[#4AA171] text-white px-4 sm:px-6 py-2.5 sm:py-3 rounded-full font-bold hover:bg-[#3d8c60] transition-all shadow-xl ring-4 ring-white/40 hover:-translate-y-0.5 inline-block text-center"
              >
                Télécharger
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* CONTENU PRINCIPAL */}
      <main className="space-y-8 md:space-y-16 pb-16">
        <Hero />
        <Features />
        <ProductShowcase />
        <Team />
      </main>

      {/* PIED DE PAGE (FOOTER) */}
      <footer className="bg-white py-12 px-4 text-center text-gray-400 text-sm">
        {/* === AJOUT : LES RÉSEAUX SOCIAUX === */}
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

        {/* LIGNE DE SÉPARATION & COPYRIGHT */}
        <div className="max-w-7xl mx-auto border-t border-gray-100 pt-12 flex flex-col md:flex-row justify-between items-center gap-4">
          <p>© 2026 PIAF - Parcours Interactifs Accessibles Facilement.</p>
          <div className="flex gap-4">
            <a
              href="mailto:support@piaf-app.fr"
              className="hover:text-[#4AA171]"
            >
              Support
            </a>
            <span className="text-gray-300">|</span>
            <a href="#" className="hover:text-[#4AA171]">
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
