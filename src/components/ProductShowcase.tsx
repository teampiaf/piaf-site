import React from 'react';

export function ProductShowcase() {
  return (
    // SECTION PRINCIPALE
    <section className="py-20 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        
        {/* =========================================
            LA CARTE VERTE (Fond principal)
            rounded-[3rem] : Coins très arrondis
            overflow-hidden : Coupe tout ce qui dépasse (les cercles flous)
        ========================================= */}

        <div className="relative bg-[#4AA171] rounded-[3rem] md:rounded-[4rem] p-8 md:p-20 overflow-hidden text-white shadow-2xl shadow-[#4AA171]/20">
          
          {/* DÉCORATIONS D'ARRIÈRE-PLAN (Lumières floues) */}
          <div className="absolute top-0 right-0 w-[35rem] h-[35rem] bg-yellow-100 opacity-20 mix-blend-overlay rounded-full blur-[80px] -translate-y-1/2 translate-x-1/3" />
          <div className="absolute bottom-0 left-0 w-[35rem] h-[35rem] bg-emerald-900 opacity-20 mix-blend-multiply rounded-full blur-[80px] translate-y-1/3 -translate-x-1/3" />

          {/* GRILLE DU CONTENU (2 colonnes sur ordi, 1 sur mobile) 
              z-10 : Pour passer au-dessus des lumières floues
          */}
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            {/* --------------------------------------
                COLONNE GAUCHE : TEXTE & BOUTONS
            -------------------------------------- */}
            <div className="space-y-8">
              
              {/* Titre */}
              <h2 className="text-4xl md:text-6xl font-bold leading-tight">
                L'innovation au service <br />
                <span className="text-[#F9F7F2]">de votre liberté</span>
              </h2>
              
              {/* Paragraphe */}
              <p className="text-lg md:text-xl text-white/90 leading-relaxed max-w-lg">
                Combinez la puissance de notre application communautaire avec le kit de capteurs à installer sur votre fauteuil. Détectez, signalez et évitez les obstacles en temps réel.
              </p>
              
              {/* Boutons d'action */}
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a
                href="mailto:piaf.contact@gmail.com"
                className="px-8 py-4 rounded-full bg-white text-[#4AA171] font-bold text-lg shadow-lg hover:shadow-xl hover:bg-gray-50 transition-all transform hover:-translate-y-1 inline-block text-center"
              >
                Demander une démo
              </a>
              <a
                href="/download"
                className="px-8 py-4 rounded-full bg-[#4AA171] border-2 border-white/30 text-white font-medium hover:bg-white/10 transition-colors inline-block text-center"
              >
                Télécharger l'App
              </a>
              </div>

            </div>

            {/* --------------------------------------
                COLONNE DROITE : IMAGE APPLICATION
            -------------------------------------- */}
            <div className="relative flex justify-center lg:justify-end">
          
              {/* CONTENEUR D'ANIMATION (Rotation légère) */}
              <div className="relative w-full max-w-md transform rotate-3 hover:rotate-0 transition-transform duration-500 ease-out">
              <img 
                src="/images/mockup_3D_navigation.png" 
                alt="Interface Application PIAF" 
                className="w-full h-auto object-contain" 
              />
          </div>
            </div>
            
          </div> {/* Fin de la grille */}
        </div> {/* Fin de la carte verte */}
      </div>
    </section>
  );
}