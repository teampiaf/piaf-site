import React from "react";
import { ArrowLeft } from "lucide-react";
import { Button } from "./ui/Button";
import { SecondaryBackground } from "./ui/SecondaryBackground";

export function HowItWorksPage() {
  return (
    <div className="min-h-screen relative overflow-hidden font-sans selection:bg-gray-50 selection:text-[#4AA171]">
      <SecondaryBackground variant="howitworks" />

      {/* Bouton retour */}
      <a
        href="/"
        className="absolute top-6 left-6 z-20 inline-flex items-center justify-center rounded-full bg-white/60 backdrop-blur-md border border-white/60 shadow-md hover:shadow-lg transition-all hover:-translate-y-0.5 w-11 h-11"
        aria-label="Retour"
      >
        <ArrowLeft className="w-5 h-5 text-gray-700" />
      </a>

      <div className="relative z-10 px-4 md:px-8 py-12 max-w-5xl mx-auto">
        {/* HERO / Intro */}
        <div className="bg-white/50 backdrop-blur-md border border-white/60 shadow-xl rounded-[2.5rem] p-6 md:p-10">
          <h1 className="text-3xl md:text-5xl font-bold text-gray-800 mb-4">
            Comment ça marche ?
          </h1>
          <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
            PIAF t’aide à choisir des itinéraires plus accessibles, grâce aux
            signalements et aux retours de la communauté.
          </p>

          {/* CTAs (même style que ton cadre vert via Button.tsx) */}
          <div className="flex flex-col sm:flex-row gap-4 mt-8">
            <a href="/download" className="no-underline">
              <Button icon>Télécharger l'app</Button>
            </a>
            <a href="/project" className="no-underline">
              <Button variant="secondary">Découvrir le projet</Button>
            </a>
          </div>
        </div>

        {/* Sections */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
          <div className="bg-white/45 backdrop-blur-md border border-white/60 shadow-lg rounded-[2.5rem] p-6 md:p-8">
            <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-3">
              1) Tu choisis ton trajet
            </h2>
            <p className="text-gray-600 leading-relaxed">
              L’app privilégie les chemins plus fluides et évite les zones
              souvent problématiques selon les retours terrain.
            </p>

            {/* TEMPLATE IMAGE (à activer plus tard) */}
            {/*
              <img
                src="/images/placeholder_trajet.png"
                alt="Exemple de trajet"
                className="mt-5 rounded-2xl w-full"
              />
            */}
          </div>

          <div className="bg-white/45 backdrop-blur-md border border-white/60 shadow-lg rounded-[2.5rem] p-6 md:p-8">
            <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-3">
              2) Tu vois les infos utiles
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Obstacles, passages étroits, pentes… l’objectif c’est “zéro
              mauvaise surprise” avant de t’engager.
            </p>

            {/* TEMPLATE IMAGE */}
            {/*
              <img
                src="/images/placeholder_infos.png"
                alt="Infos d'accessibilité"
                className="mt-5 rounded-2xl w-full"
              />
            */}
          </div>

          <div className="bg-white/45 backdrop-blur-md border border-white/60 shadow-lg rounded-[2.5rem] p-6 md:p-8">
            <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-3">
              3) Tu signales en 1 clic
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Tu peux remonter un souci (travaux, trottoir impraticable…) ou au
              contraire valider qu’un passage est OK.
            </p>
          </div>

          <div className="bg-white/45 backdrop-blur-md border border-white/60 shadow-lg rounded-[2.5rem] p-6 md:p-8">
            <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-3">
              4) La communauté fiabilise
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Les infos sont confirmées au fil des usages : plus il y a
              d’activité, plus les trajets deviennent fiables.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
