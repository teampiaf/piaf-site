import React from "react";
import { Blob } from "./components/ui/Blob";


// J'importe les icônes nécessaires
import { Instagram, Linkedin } from "lucide-react";
import { Hero } from "./components/Hero";
import { Features } from "./components/Features";
import { ProductShowcase } from "./components/ProductShowcase";
import { Team } from "./components/Team";
import { Download } from "./components/Download";

export function App() {
  // 1. ROUTAGE SIMPLE
  const path = window.location.pathname;
  if (path === "/download") {
    return <Download />;
  }

  // 2. PAGE D'ACCUEIL
  return (
  <div className="relative min-h-screen overflow-hidden bg-[radial-gradient(ellipse_at_top,_rgba(74,161,113,0.16)_0%,_rgba(239,252,246,1)_45%,_rgba(255,255,255,1)_100%)] font-sans selection:bg-gray-50 selection:text-[#4AA171]">
    
    {/* FOND GLOBAL (évite la “cassure” entre sections) */}
    <div className="pointer-events-none absolute inset-0 -z-10">
      <Blob className="top-0 left-0 w-[38rem] h-[38rem] bg-[#4AA171]/10 -translate-x-1/3 -translate-y-1/3" />
      <Blob className="bottom-0 right-0 w-[46rem] h-[46rem] bg-[#E8E4D9]/70 translate-x-1/4 translate-y-1/4" />
    </div>

      {/* HEADER */}
      <header className="relative w-full">
        <div className="w-full h-[140px] md:h-[225px]">
          <img
            src="/images/banderole2.png"
            alt="Banderole PIAF"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="absolute inset-0 px-4 md:px-8 flex justify-end items-start">
          <div className="w-full max-w-7xl mx-auto flex justify-end">
            <div className="flex flex-col md:flex-row gap-3 md:gap-12 items-end mt-3 md:mt-20">
              <a
                href="mailto:piaf.contact@gmail.com"
                className="bg-white/70 backdrop-blur-md text-[#4AA171] font-bold px-4 py-2 md:px-6 md:py-3 rounded-full shadow-md hover:shadow-lg transition-all hover:-translate-y-0.5 border border-white/30 text-sm md:text-base"
              >
                Contact
              </a>
              <a
                href="/download"
                className="bg-[#4AA171] text-white px-4 py-2 md:px-6 md:py-3 rounded-full font-bold hover:bg-[#3d8c60] transition-all shadow-xl ring-2 md:ring-4 ring-white/40 hover:-translate-y-0.5 inline-block text-center text-sm md:text-base"
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
      <footer className="bg-white/10 backdrop-blur-2xl backdrop-saturate-150 py-12 px-4 text-center text-gray-500 text-sm border-t border-white/20 ring-1 ring-white/10">

        {/* === AJOUT : LES RÉSEAUX SOCIAUX === */}
        <div className="flex justify-center gap-6 mb-10">
          <SocialFooterBtn
            icon={Instagram}
            link="https://www.instagram.com/fly_with_piaf/"
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
        <div className="max-w-7xl mx-auto border-t border-white/30 pt-12 flex flex-col md:flex-row justify-between items-center gap-4">
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
      className="w-10 h-10 flex items-center justify-center rounded-full bg-white/14 backdrop-blur-xl backdrop-saturate-150 text-gray-600 hover:bg-[#4AA171]/90 hover:text-white transition-all duration-300 border border-white/20 ring-1 ring-white/10"
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
