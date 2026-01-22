import React from 'react';
// Import des composants UI réutilisables
import { Button } from './ui/Button';

export function Hero() {
  return (
      <section className="relative w-full px-4 pb-8 pt-6 md:pt-10 overflow-hidden">

      {/* Fond de couleur */}
      <div className="max-w-7xl mx-auto">
        
        {/* LA CARTE PRINCIPALE */}
        <div className="relative bg-white/18 backdrop-blur-2xl backdrop-saturate-150 rounded-[3rem] md:rounded-[4rem] p-8 md:p-16 lg:p-24 shadow-2xl shadow-black/10 border border-white/25 overflow-hidden">

          {/* Cercle décoratif */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-bl-[10rem] -mr-10 -mt-10 z-0 overflow-hidden" />

          {/* CONTENU TEXTE */}
          <div className="relative z-10 max-w-3xl">
            
            {/* Badge "Vainqueur" */}
            <span className="inline-block px-4 py-2 rounded-full bg-white/35 backdrop-blur-md text-[#4AA171] font-bold text-sm mb-6 tracking-wide border border-[#4AA171]/50 ring-1 ring-[#4AA171]/15 shadow-md shadow-black/10 -translate-y-0.5">
            🏆 Vainqueur Challenge Innovation Sécurité Routière 2025
            </span>

            {/* Titre Principal */}
            <h1 className="text-5xl md:text-7xl font-bold text-gray-800 mb-8 leading-tight tracking-tight">
              Ne marchez plus,{' '}
              <span className="text-[#4AA171] relative inline-block">
                volez 
                <svg className="absolute w-full h-3 -bottom-1 left-0 text-[#4AA171]/20" viewBox="0 0 100 10" preserveAspectRatio="none">
                  <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="8" fill="none" />
                </svg>
              </span>
              !
            </h1>

            {/* Paragraphe */}
            <p className="text-xl md:text-2xl text-gray-600 mb-10 leading-relaxed max-w-2xl">
              PIAF rend la ville accessible à tous. Un GPS communautaire pensé pour l’autonomie : itinéraires plus fluides, signalements en temps réel et trajets plus sûrs au quotidien.
            </p>

            {/*------------- Boutons ------------ */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="/projet"
                className="no-underline inline-flex items-center justify-center px-8 py-4 rounded-full font-medium transition-all duration-300 ease-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#4AA171] bg-[#4AA171]/85 backdrop-blur-md border border-white/25 text-white shadow-lg shadow-black/10 hover:bg-[#4AA171]/95 hover:shadow-xl hover:shadow-black/15"
              >
                Découvrir le projet
                <span className="ml-2">
                  {/* petite flèche simple, sans dépendre du Button */}
                  →
                </span>
              </a>

              <a
                href="/comment-ca-marche"
                className="no-underline inline-flex items-center justify-center px-8 py-4 rounded-full font-medium transition-all duration-300 ease-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#4AA171] bg-white/55 backdrop-blur-md border border-white/40 text-[#4AA171] shadow-md shadow-black/10 hover:bg-white/65 hover:shadow-lg hover:shadow-black/12"
              >
                Comment ça marche ?
              </a>
            </div>

            {/* --------------------------------------------- */}

          </div>
        </div>
      </div>
    </section>
  );
}