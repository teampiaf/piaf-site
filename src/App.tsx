import React from "react";
import { Blob } from "./components/ui/Blob";

import { ProjectPage } from "./components/ProjectPage";
import { HowItWorksPage } from "./components/HowItWorksPage";



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

  if (path === "/download") return <Download />;
  if (path === "/projet") return <ProjectPage />;
  if (path === "/comment-ca-marche") return <HowItWorksPage />;

  return (
    <div className="min-h-screen w-full overflow-x-hidden site-bg site-noise font-sans selection:bg-gray-50 selection:text-[#4AA171]">
      {path === "/download" ? (
        <Download />
      ) : (
        <>
          {/* HEADER */}
          <header className="relative w-full">
            <div className="w-full h-[225px]">
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
                className="bg-white/55 backdrop-blur-md text-[#4AA171] font-bold px-4 py-2 md:px-6 md:py-3 rounded-full border border-white/40 shadow-md shadow-black/10 hover:bg-white/65 hover:shadow-lg hover:shadow-black/12 transition-all hover:-translate-y-0.5 text-sm md:text-base"
              >
                Contact
              </a>

              <a
                href="/download"
                className="bg-[#4AA171]/90 backdrop-blur-md text-white px-4 py-2 md:px-6 md:py-3 rounded-full font-bold border border-white/25 shadow-xl shadow-black/12 ring-2 ring-white/25 hover:bg-[#4AA171] hover:shadow-2xl hover:shadow-black/16 transition-all hover:-translate-y-0.5 inline-block text-center text-sm md:text-base"
              >
                Télécharger
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* CONTENU PRINCIPAL */}
          <main className="space-y-8 md:space-y-16 pb-16">
            {path === "/projet" ? (
              <ProjectPage />
            ) : path === "/comment-ca-marche" ? (
              <HowItWorksPage />
            ) : (
              <>
                <Hero />
                <Features />
                <ProductShowcase />
                <Team />
              </>
            )}
          </main>

          {/* FOOTER */}
          <footer className="bg-transparent py-12 px-4 text-center text-gray-400 text-sm">


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
        <div className="max-w-7xl mx-auto border-t border-white/30 pt-12 flex flex-col md:flex-row justify-between items-center gap-4">
          <p>© 2026 PIAF App - Parcours Interactifs Accessibles Facilement </p>
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
        </>
      )}
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
      className="w-10 h-10 flex items-center justify-center rounded-full bg-white/35 backdrop-blur-md border border-white/30 text-gray-600 shadow-sm shadow-black/10 hover:bg-[#4AA171]/90 hover:text-white hover:shadow-md transition-all duration-300"
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
