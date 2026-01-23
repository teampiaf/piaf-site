import React from "react";
import { Map, Users, Shield, Route } from "lucide-react";

// Configuration des données : Je modifie les textes ici pour ne pas toucher au HTML en bas
const features = [
  {
    title: "Navigation Adaptée",
    description:
      "Un GPS pensé pour l’accessibilité. Il privilégie les trajets les plus fluides et évite les zones à risque pour limiter les imprévus.",
    icon: Map,
    delay: "0ms",
  },
  {
    title: "Signalements en temps réel",
    description:
      "Un clic pour signaler un obstacle ou un passage difficile. Une info utile pour toi, et pour tous les autres.",
    icon: Route,
    delay: "100ms",
  },
  {
    title: "Communauté Solidaire",
    description:
      "PIAF s’appuie sur une communauté active : signaler, confirmer, améliorer — pour une ville plus lisible au quotidien.",
    icon: Users,
    delay: "200ms",
  },
  {
    title: "Données Fiables",
    description:
      "Les informations gagnent en fiabilité grâce aux validations. Objectif : zéro mauvaise surprise sur le trajet.",
    icon: Shield,
    delay: "300ms",
  },
];

export function Features() {
  return (
    <section className="py-12 px-4 md:px-8 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
          Parcours Interactifs et Accessibles Facilement
        </h2>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Plus qu'une application, PIAF est votre copilote urbain pour une autonomie retrouvée.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {features.map((feature, index) => (
          <div
            key={index}
            className="group relative bg-gradient-to-br from-[#F9F7F2] to-white p-8 rounded-[2.5rem] shadow-lg shadow-[#4AA171]/5 hover:shadow-xl hover:shadow-[#4AA171]/10 transition-all duration-500 hover:-translate-y-2 border border-white"
            style={{ animationDelay: feature.delay }}
          >
            <div className="w-20 h-20 bg-white rounded-2xl flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition-transform duration-300 text-[#4AA171]">
              <feature.icon size={40} />
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-[#4AA171] transition-colors">
              {feature.title}
            </h3>
            <p className="text-gray-600 leading-relaxed">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
