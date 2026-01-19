import React from 'react';

// ==================================================================================
// CONFIGURATION DE L'ÉQUIPE
// C'est ici qu'on modifie les membres, les rôles ou les photos
// ==================================================================================

const team = [
  /* Affichage et alignement des informations de l'équipe */
  {
    name: 'Orion Prudhomme',
    role: 'Président',
    color: 'bg-green-200', 
    image: '/code_site/images/orion.png'
  },
  {
    name: 'Rafaël Racz',
    role: 'Vice-Président',
    color: 'bg-blue-200', 
    image: '/code_site/images/rafael.png'
  },
  {
    name: 'Haitam Grine',
    role: 'Secrétaire',
    color: 'bg-purple-200', 
    image: '/code_site/images/haitam.png'
  },
  {
    name: 'Julien Aprin',
    role: 'Trésorier',
    color: 'bg-orange-200', // Orange : Dynamisme / Gestion
    image: '/code_site/images/julien.png'
  }
];

export function Team() {
  return (
    <section className="py-24 px-4 md:px-8 max-w-7xl mx-auto">
      
      {/* En-tête de section : Titre + Phrase d'accroche */}
      <div className="text-center mb-20">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
          La Direction PIAF
        </h2>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Une équipe taillée pour le défi et unie par une même ambition : faire de cette technologie la nouvelle référence du marché.
        </p>
      </div>

      {/* Grille des membres : 1 colonne (mobile), 2 (tablette), 4 (ordi) */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 md:gap-8">
        
        {/* On boucle sur chaque membre de l'équipe */}
        {team.map((member, index) => (
          <div key={index} className="relative group flex flex-col items-center">
            
            {/* 1. DÉCORATION D'ARRIÈRE-PLAN
                Il est en position absolute pour se mettre derrière la photo */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-48 h-48 -mt-4 z-0">
              <div className={`w-full h-full rounded-[60%_40%_30%_70%/60%_30%_70%_40%] ${member.color} opacity-40 group-hover:opacity-60 transition-opacity duration-500 animate-blob`} />
            </div>

            {/* 2. LA PHOTO DE PROFIL (Cercle blanc avec l'image dedans) */}
            <div className="relative z-10 w-40 h-40 rounded-full bg-white p-1 shadow-xl mb-6 group-hover:scale-105 transition-transform duration-300 overflow-hidden border-4 border-white">
              
              <img 
                src={member.image} 
                alt={member.name}
                className="w-full h-full object-cover rounded-full" // object-cover = recadre l'image pour qu'elle remplisse le rond sans s'écraser
                
                // Système de secours (Fallback) :
                // Si l'image n'est pas trouvée (ex: erreur de nom de fichier),
                // on cache l'image cassée et on affiche la première lettre du prénom à la place.
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                  e.currentTarget.parentElement.classList.add('flex', 'items-center', 'justify-center', 'bg-gray-100');
                  e.currentTarget.parentElement.innerText = member.name.charAt(0);
                }}
              />
            </div>

            {/* 3. INFO TEXTE */}
            <h3 className="text-xl font-bold text-gray-800 mb-1 relative z-10">{member.name}</h3>
            <p className="text-[#4AA171] font-medium relative z-10">{member.role}</p>
          
          </div>
        ))}
      </div>
    </section>
  );
}
