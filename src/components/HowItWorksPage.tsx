import React from "react";
import { SecondaryBackground } from "./ui/SecondaryBackground";

export function HowItWorksPage() {
  return (
    <div className="min-h-screen relative overflow-hidden bg-white px-4 py-10">
      <SecondaryBackground variant="howitworks" />

      <div className="relative z-10 max-w-5xl mx-auto">
        <div className="bg-white/65 backdrop-blur-md border border-white/60 rounded-[2.5rem] p-8 md:p-12 shadow-xl">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-10">
            <a
              href="/"
              className="px-6 py-3 rounded-full bg-white/70 backdrop-blur-md border border-white/60 text-[#4AA171] font-bold hover:bg-white transition-all"
            >
              ← Retour
            </a>

            <a
              href="/download"
              className="px-6 py-3 rounded-full bg-[#4AA171] text-white font-bold hover:bg-[#3d8c60] transition-all shadow-lg shadow-[#4AA171]/20"
            >
              Télécharger l’app
            </a>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Comment ça marche ?
          </h1>

          <p className="text-lg md:text-xl text-gray-600 leading-relaxed mb-8">
            PIAF fonctionne comme un copilote urbain : il te guide sur des itinéraires plus fluides et
            t’informe des obstacles signalés ou confirmés par la communauté.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white/55 backdrop-blur-md border border-white/60 rounded-[2rem] p-6 shadow-lg">
              <h2 className="text-xl font-bold text-gray-800 mb-2">1) Itinéraires</h2>
              <p className="text-gray-600 leading-relaxed">
                L’application privilégie les chemins les plus praticables et évite les zones souvent problématiques.
              </p>

              {/* TEMPLATE IMAGE */}
              {/*
              <img src="/images/placeholder_itineraire.jpg" alt="" className="mt-5 rounded-2xl w-full" />
              */}
            </div>

            <div className="bg-white/55 backdrop-blur-md border border-white/60 rounded-[2rem] p-6 shadow-lg">
              <h2 className="text-xl font-bold text-gray-800 mb-2">2) Signalements</h2>
              <p className="text-gray-600 leading-relaxed">
                Un clic pour signaler un obstacle (travaux, trottoir impraticable, passage fermé…) ou un point facilitateur.
              </p>
            </div>

            <div className="bg-white/55 backdrop-blur-md border border-white/60 rounded-[2rem] p-6 shadow-lg">
              <h2 className="text-xl font-bold text-gray-800 mb-2">3) Validation</h2>
              <p className="text-gray-600 leading-relaxed">
                Les infos deviennent fiables quand elles sont confirmées : moins de surprises, plus de confiance.
              </p>
            </div>

            <div className="bg-white/55 backdrop-blur-md border border-white/60 rounded-[2rem] p-6 shadow-lg">
              <h2 className="text-xl font-bold text-gray-800 mb-2">4) Amélioration continue</h2>
              <p className="text-gray-600 leading-relaxed">
                Plus l’app est utilisée, plus la carte devient pertinente. L’objectif : une ville plus lisible pour tous.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
