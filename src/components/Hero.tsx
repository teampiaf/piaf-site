import React from 'react';
// Import des composants UI réutilisables
import { Button } from './ui/Button';
import { Blob } from './ui/Blob';

export function Hero() {
  return (
    // CONTENEUR PRINCIPAL
    // relative + overflow-hidden : Important pour que les formes en arrière-plan ne créent pas de barre de défilement
    <section className="relative w-full px-4 pb-12 pt-0 ...">
      
      {/* --------------------  DÉCORATION D'ARRIÈRE-PLAN (Les "Blobs")  -------------------- */}
      {/* Forme verte en haut à gauche */}
      <Blob className="top-0 left-0 w-72 h-72 bg-[#4AA171]/10 -translate-x-1/2 -translate-y-1/2" />
      {/* Forme beige en bas à droite */}
      <Blob className="bottom-0 right-0 w-96 h-96 bg-[#E8E4D9] translate-x-1/3 translate-y-1/3" />

      {/* Conteneur centré pour le contenu */}
      <div className="max-w-7xl mx-auto">
        
        {/* LA CARTE PRINCIPALE (Effet de verre)
            bg-white/80 + backdrop-blur-sm : Crée l'effet de transparence floutée
            rounded-[3rem] : Coins très arrondis pour le style moderne
        */}
        <div className="relative bg-white/80 backdrop-blur-sm rounded-[3rem] p-8 md:p-16 lg:p-24 shadow-xl shadow-[#4AA171]/5 border border-white/50 overflow-hidden">
          
          {/* Cercle décoratif subtil en haut à droite de la carte */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-[#F9F7F2] to-white rounded-bl-[10rem] -mr-10 -mt-10 z-0" />

          {/* CONTENU TEXTE (z-10 pour passer au-dessus des décorations) */}
          <div className="relative z-10 max-w-3xl">
            
            {/* Badge "Vainqueur" */}
            <span className="inline-block px-4 py-2 rounded-full bg-[#F9F7F2] text-[#4AA171] font-bold text-sm mb-6 tracking-wide border border-[#4AA171]/10">
              🏆 Vainqueur Challenge Innovation Sécurité Routière 2025
            </span>

            {/* Titre Principal (H1) */}
            <h1 className="text-5xl md:text-7xl font-bold text-gray-800 mb-8 leading-tight tracking-tight">
              Ne marchez plus,{' '}
              {/* Le mot "volez" avec le soulignement SVG personnalisé */}
              <span className="text-[#4AA171] relative inline-block">
                volez 
                {/* Le petit trait courbé sous le mot */}
                <svg className="absolute w-full h-3 -bottom-1 left-0 text-[#4AA171]/20" viewBox="0 0 100 10" preserveAspectRatio="none">
                  <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="8" fill="none" />
                </svg>
              </span>
              !
            </h1>

            {/* Paragraphe d'accroche */}
            <p className="text-xl md:text-2xl text-gray-600 mb-10 leading-relaxed max-w-2xl">
              PIAF rend la ville accessible à tous. Une application GPS communautaire couplée à un kit de capteurs intelligent pour détecter les obstacles invisibles.
            </p>

            {/* Boutons d'action (CTA) */}
            {/* Flex-col sur mobile (l'un sous l'autre) et row sur ordi (côte à côte) */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button icon>Découvrir le projet</Button>
              <Button variant="secondary">Comment ça marche ?</Button>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}