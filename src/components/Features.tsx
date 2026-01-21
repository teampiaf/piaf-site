import React from 'react';
// J'importe les icônes de la librairie Lucide pour illustrer les 4 piliers
import { Map, Zap, Users, Shield } from 'lucide-react';

// Configuration des données : Je modifie les textes ici pour ne pas toucher au HTML en bas
const features = [
  {
    title: 'Navigation Adaptée',
    description: "Un GPS qui connaît vos limites. Il calcule le trajet le plus fluide et contourne les obstacles en temps réel pour ne plus jamais être stoppé.",
    icon: Map, // Icone Carte pour le GPS
    delay: '0ms' // Pas de délai, s'affiche tout de suite
  },
  {
    title: 'Détection Obstacles',
    description: 'Ne subissez plus les obstacles. Détectez-les avant l\'impact grâce à notre kit de capteurs complet.',
    icon: Zap, // Icone Éclair pour la rapidité/technologie
    delay: '100ms' // Petit délai pour l'effet "cascade"
  },
  {
    title: 'Communauté Solidaire',
    description: 'Veillez les uns sur les autres. Un clic pour signaler ou valider un danger, c\'est un trajet sécurisé pour tous.',
    icon: Users, // Icone Groupe pour l'aspect social
    delay: '200ms'
  },
  {
    title: 'Données Fiables',
    description: 'Partez l\'esprit tranquille. Nos données sont vérifiées par la communauté pour zéro mauvaise surprise.',
    icon: Shield, // Icone Bouclier pour la sécurité/confiance
    delay: '300ms'
  }
];

export function Features() {
  return (
    // Section principale avec marge verticale (py-20) et centrée
    <section className="py-12 px-4 md:px-8 max-w-7xl mx-auto overflow-hidden">
      
      {/* En-tête de la section : Titre + Sous-titre */}
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
          Parcours Interactifs et Accessibles Facilement
        </h2>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Plus qu'une application, PIAF est votre copilote urbain pour une autonomie retrouvée.
        </p>
      </div>

      {/* Grille responsive : 1 colonne sur mobile, 2 sur tablette, 4 sur ordi */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        
        {/* Je boucle sur ma liste 'features' pour créer les 4 cartes automatiquement */}
        {features.map((feature, index) => (
          <div 
            key={index} 
            // Design de la carte : Dégradé subtil, bords arrondis, et ombre verte au survol
            className="group relative bg-white/14 backdrop-blur-2xl backdrop-saturate-150 p-8 rounded-[3rem] md:rounded-[4rem] shadow-xl shadow-black/10 hover:shadow-2xl hover:shadow-black/12 transition-all duration-500 hover:-translate-y-1 border border-white/25"
            style={{ animationDelay: feature.delay }}
          >
            {/* Le conteneur de l'icône (CARRÉ BLANC)
               Note : J'ai passé la taille à w-20 h-20 (80px) pour que ce soit plus imposant 
            */}
            <div className="w-20 h-20 bg-white/18 backdrop-blur-xl border border-white/25 rounded-2xl flex items-center justify-center mb-6 shadow-sm shadow-black/10 group-hover:scale-110 transition-transform duration-300 text-[#4AA171]">
              
              {/* L'icône elle-même : taille fixée à 40px */}
              <feature.icon size={40} />
            
            </div>

            {/* Titre de la fonctionnalité */}
            <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-[#4AA171] transition-colors">
              {feature.title}
            </h3>

            {/* Description courte */}
            <p className="text-gray-600 leading-relaxed">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
