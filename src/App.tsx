import React from "react";
// J'importe les icônes nécessaires
import { Instagram, Linkedin } from 'lucide-react';
import { Hero } from "./components/Hero";
import { Features } from "./components/Features";
import { ProductShowcase } from "./components/ProductShowcase";
import { Team } from "./components/Team";
import { Download } from "./components/Download"; 

export function App() {
  // 1. ROUTAGE SIMPLE
  const path = window.location.pathname;
  if (path === '/download') {
    return <Download />;
  }

  // 2. PAGE D'ACCUEIL
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#effcf6] to-white font-sans selection:bg-gray-50 selection:text-[#4AA171]">
      
      {/* HEADER */}
      <header className="relative w-full">
        <div className="w-full h-[225px]">
          <img 
            src="/images/banderole2.png" 
            alt="Banderole PIAF" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute top-0 left-0 w-full h-full px-8 flex justify-end items-start max-w-7xl mx-auto left-0 right-0">
          <div className="flex gap-12 items-center mt-20 -mr-24">
            <a href="mailto:piaf.contact@gmail.com" className="hidden md:block bg-white text-[#4AA171] font-bold px-6 py-3 rounded-full shadow-md hover:shadow-lg transition-all hover:-translate-y-0.5">
              Contact
            </a>
            <a href="/download" className="bg-[#4AA171] text-white px-6 py-3 rounded-full font-bold hover:bg-[#3d8c60] transition-all shadow-xl ring-4 ring-white/40 hover:-translate-y-0.5 inline-block text-center">
              Télécharger
            </a>
          </div>
        </div>
      </header>

      {/* CONTENU PRINCIPAL */}
      <main className="space-y-12 md:space-y-24 pb-24">
        <Hero />
        <Features />
        <ProductShowcase />
        <Team />
      </main>

      {/* PIED DE PAGE (FOOTER) */}
      <footer className="bg-white py-12 px-4 text-center text-gray-400 text-sm">
        
        {/* === AJOUT : LES RÉSEAUX SOCIAUX === */}
        {/* Je les ai mis dans un bloc juste avant la ligne de séparation (border-t) */}
        <div className="flex justify-center gap-6 mb-10">
           <SocialFooterBtn icon={Instagram} link="https://www.instagram.com/piaf_app/" label="Instagram" />
           <SocialFooterBtn icon={Linkedin} link="https://www.linkedin.com/company/piaf-app" label="LinkedIn" />
           <SocialFooterBtn icon={TikTokIcon} link="https://www.tiktok.com/@piaf_app" label="TikTok" />
        </div>

        {/* LIGNE DE SÉPARATION & COPYRIGHT */}
        <div className="max-w-7xl mx-auto border-t border-gray-100 pt-12 flex flex-col md:flex-row justify-between items-center gap-4">
          <p>© 2026 PIAF - Parcours Interactifs Accessibles Facilement.</p>
          <div className="flex gap-4">
            <a href="mailto:support@piaf-app.fr" className="hover:text-[#4AA171]">Support</a>
            <span className="text-gray-300">|</span>
            <a href="#" className="hover:text-[#4AA171]">Mentions Légales</a>
          </div>
        </div>
      </footer>

    </div>
  );
}

// ------------------------------------------------------------------
// PETITS COMPOSANTS POUR LE FOOTER (À laisser à la fin du fichier)
// ------------------------------------------------------------------

function SocialFooterBtn({ icon: Icon, link, label }: { icon: any, link: string, label: string }) {
  return (
    <a 
      href={link}
      target="_blank" 
      rel="noopener noreferrer"
      // J'ai mis un style un peu plus "léger" que sur la page download (gris par défaut, vert au survol)
      className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-50 text-gray-400 hover:bg-[#4AA171] hover:text-white transition-all duration-300"
      aria-label={label}
    >
      <Icon className="w-5 h-5" />
    </a>
  );
}

function TikTokIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
    </svg>
  );
}