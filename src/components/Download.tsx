import React from 'react';
import { ArrowLeft, Instagram, Linkedin } from 'lucide-react';
import { LINKS } from "../config/links"; // adapte le chemin selon le fichier


export function Download() {
  return (
    <div className="min-h-screen bg-[#F9F7F2] flex flex-col items-center justify-center p-4 text-center font-sans selection:bg-[#4AA171] selection:text-white">
      
      {/* Bouton Retour (Lien interne = pas de https) */}
      <a href="/" className="absolute top-8 left-8 p-3 rounded-full bg-white shadow-md hover:bg-gray-50 transition-colors group">
        <ArrowLeft className="text-gray-600 group-hover:text-[#4AA171]" />
      </a>

      {/* Contenu Principal */}
      <div className="max-w-2xl w-full bg-white/60 backdrop-blur-md rounded-[3rem] p-12 shadow-xl border border-white">
        
        {/* Icône Fusée */}
        <div className="w-24 h-24 bg-[#4AA171]/10 rounded-full flex items-center justify-center mx-auto mb-8 animate-pulse">
          <span className="text-5xl">🚀</span>
        </div>

        <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-6">
          Ça arrive <span className="text-[#4AA171]">très vite !</span>
        </h1>

        <p className="text-xl text-gray-600 mb-10 leading-relaxed">
          L'application PIAF est actuellement en cours de finalisation. 
          <br className="hidden md:block" />
          La version <strong>Bêta</strong> sera disponible dans quelques jours sur iOS et Android.
        </p>

        <div className="w-16 h-1 bg-gray-200 rounded-full mx-auto mb-10"></div>

        <div className="space-y-6">
          <p className="text-sm font-bold text-gray-500 uppercase tracking-widest">
            Suivez l'avancée du projet sur
          </p>

          {/* ============================================================
              LIENS SOCIAUX (Corrigés avec balise <a> classique)
          ============================================================ */}
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            
            {/* INSTAGRAM */}
            <SocialBtn 
              icon={Instagram} 
              link={LINKS.instagram} 
              label="Instagram" 
            />
            
            {/* LINKEDIN */}
            <SocialBtn 
              icon={Linkedin} 
              link={LINKS.linkedin}
              label="LinkedIn" 
            />
            
            {/* TIKTOK */}
            <SocialBtn 
              icon={TikTokIcon} 
              link={LINKS.tiktok}
              label="TikTok" 
            />

          </div>
        </div>

      </div>
      
      <p className="mt-12 text-gray-400 text-sm">© 2026 PIAF - Cui Cui. </p>
    </div>
  );
}

// ------------------------------------------------------------------
// COMPOSANTS UTILITAIRES (DÉFINIS ICI POUR QUE ÇA MARCHE DIRECT)
// ------------------------------------------------------------------

// J'ai remplacé les "..." par du vrai style (bouton blanc, ombre, hover vert)
const SocialBtn = ({ icon: Icon, link, label }: any) => {
  return (
    <a 
      href={link} 
      target="_blank" 
      rel="noopener noreferrer" 
      className="flex items-center justify-center gap-3 px-6 py-3 bg-white text-gray-700 rounded-xl shadow-sm border border-gray-100 hover:shadow-md hover:border-[#4AA171]/30 hover:text-[#4AA171] transition-all duration-300 transform hover:-translate-y-1"
    >
      <Icon className="w-5 h-5" />
      <span className="font-medium">{label}</span> 
    </a>
  );
};

// Icône TikTok Manuelle
function TikTokIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
    </svg>
  );
}