import React from 'react';
// Import des composants UI réutilisables
import { Button } from './ui/Button';

export function Hero() {
  return (
      <section className="relative w-full px-4 pb-8 pt-0 overflow-hidden">

      {/* Fond de couleur */}
      <div className="max-w-7xl mx-auto">
        
        {/* LA CARTE PRINCIPALE */}
        <div className="relative glass-panel glass-sheen rounded-[3rem] p-8 md:p-16 lg:p-24 overflow-hidden">

          {/* Cercle décoratif */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-bl-[10rem] -mr-10 -mt-10 z-0 overflow-hidden" />

          {/* CONTENU TEXTE */}
          <div className="relative z-10 max-w-3xl">
            
            {/* Badge "Vainqueur" */}
            <span className="inline-block px-4 py-2 rounded-full glass-chip text-[#4AA171] font-bold text-sm mb-6 tracking-wide">
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
              PIAF rend la ville accessible à tous. Une application GPS communautaire couplée à un kit de capteurs intelligent pour détecter les obstacles invisibles.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#le-projet" className="no-underline">
                <Button
                  icon
                  className="px-8 py-4 rounded-full bg-[#4AA171]/85 backdrop-blur-md border border-white/25 text-white font-medium shadow-lg shadow-black/12 hover:bg-[#4AA171]/95 hover:shadow-xl hover:shadow-black/15 transition-all transform hover:-translate-y-0.5 inline-block text-center"
                >
                  Découvrir le projet
                </Button>
              </a>

              <a href="#comment-ca-marche" className="no-underline">
                <Button
                  variant="secondary"
                  className="px-8 py-4 rounded-full bg-white/55 backdrop-blur-md text-[#4AA171] font-bold text-lg border border-white/40 shadow-md shadow-black/10 hover:bg-white/65 hover:shadow-lg hover:shadow-black/12 transition-all transform hover:-translate-y-0.5 inline-block text-center"
                >
                  Comment ça marche ?
                </Button>
              </a>
            </div>
            {/* --------------------------------------------- */}

          </div>
        </div>
      </div>
    </section>
  );
}