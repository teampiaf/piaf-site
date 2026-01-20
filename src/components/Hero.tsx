import React from 'react';
// Import des composants UI réutilisables
import { Button } from './ui/Button';
import { Blob } from './ui/Blob';

export function Hero() {
  return (
    // CONTENEUR PRINCIPAL
    <section className="relative w-full px-4 pb-8 pt-0 overflow-hidden">
      
      {/* --------------------  DÉCORATION D'ARRIÈRE-PLAN (Les "Blobs")  -------------------- */}
      <Blob className="top-0 left-0 w-72 h-72 bg-[#4AA171]/10 -translate-x-1/2 -translate-y-1/2" />
      <Blob className="bottom-0 right-0 w-96 h-96 bg-[#E8E4D9] translate-x-1/3 translate-y-1/3" />

      {/* Conteneur centré pour le contenu */}
      <div className="max-w-7xl mx-auto">
        
        {/* LA CARTE PRINCIPALE */}
        <div className="relative bg-white/80 backdrop-blur-sm rounded-[3rem] p-8 md:p-16 lg:p-24 shadow-xl shadow-[#4AA171]/5 border border-white/50 overflow-hidden">
          
          {/* Cercle décoratif */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-[#F9F7F2] to-white rounded-bl-[10rem] -mr-10 -mt-10 z-0" />

          {/* CONTENU TEXTE */}
          <div className="relative z-10 max-w-3xl">
            
            {/* Badge "Vainqueur" */}
            <span className="inline-block px-4 py-2 rounded-full bg-[#F9F7F2] text-[#4AA171] font-bold text-sm mb-6 tracking-wide border border-[#4AA171]/10">
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

            {/* --- C'EST ICI QUE J'AI CORRIGÉ LES LIENS --- */}
            <div className="flex flex-col sm:flex-row gap-4">
              
              {/* Bouton 1 : Scroll vers le bas de la page */}
              {/* Remplace '#le-projet' par l'ID de la section où tu veux aller */}
              <a href="#le-projet" className="no-underline"> 
                <Button icon>Découvrir le projet</Button>
              </a>

              {/* Bouton 2 : Scroll vers une autre section ou page externe */}
              <a href="#comment-ca-marche" className="no-underline">
                <Button variant="secondary">Comment ça marche ?</Button>
              </a>

            </div>
            {/* --------------------------------------------- */}

          </div>
        </div>
      </div>
    </section>
  );
}