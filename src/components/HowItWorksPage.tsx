import React from "react";
import {
  ArrowLeft,
  Map,
  AlertTriangle,
  CheckCircle2,
  ShieldCheck,
  Route,
  Sparkles,
} from "lucide-react";
import { SecondaryBackground } from "./ui/SecondaryBackground";

export function HowItWorksPage() {
  return (
    <div className="min-h-screen relative overflow-hidden font-sans selection:bg-gray-50 selection:text-[#4AA171]">
      <SecondaryBackground variant="howitworks" />

      <div className="relative z-10 px-4 md:px-8 py-10 max-w-6xl mx-auto">
        {/* RETOUR */}
        <a
          href="/"
          className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-white/45 backdrop-blur-xl border border-white/35 text-gray-700 hover:text-[#4AA171] transition shadow-md shadow-black/10"
        >
          <ArrowLeft className="w-4 h-4" />
          Retour
        </a>

        {/* BLOC PRINCIPAL */}
        <div className="mt-6 relative bg-white/16 backdrop-blur-2xl backdrop-saturate-150 rounded-[3rem] md:rounded-[4rem] p-8 md:p-14 border border-white/28 shadow-2xl shadow-black/10 overflow-hidden">
          {/* Lumières internes */}
          <div className="absolute -top-24 -left-24 w-[22rem] h-[22rem] bg-emerald-900/12 rounded-full blur-[90px]" />
          <div className="absolute -bottom-24 -right-24 w-[22rem] h-[22rem] bg-yellow-100/30 rounded-full blur-[80px]" />

          <div className="relative z-10">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/40 backdrop-blur-xl border border-white/30 text-[#4AA171] font-bold text-sm mb-6 shadow-sm shadow-black/10">
              <Route className="w-4 h-4" />
              Fonctionnement
            </div>

            <h1 className="text-4xl md:text-6xl font-bold text-gray-800 leading-tight">
              Comment ça <span className="text-[#4AA171]">marche</span> ?
            </h1>

            <p className="mt-6 text-lg md:text-xl text-gray-600 leading-relaxed max-w-3xl">
              PIAF est une application de navigation pensée pour rendre les déplacements plus simples et plus prévisibles.
              Elle s’appuie sur des informations terrain et une logique communautaire pour limiter les imprévus.
            </p>

            {/* IMAGE PLACEHOLDER */}
            {/*
            <div className="mt-10 rounded-[2.5rem] overflow-hidden border border-white/25 bg-white/10">
              <img
                src="/images/mockup_trajet.png"
                alt="PIAF - Trajet"
                className="w-full h-[220px] md:h-[340px] object-cover"
              />
            </div>
            */}

            {/* 4 BLOCS */}
            <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="bg-white/14 backdrop-blur-xl border border-white/25 rounded-[2rem] p-6 shadow-lg shadow-black/10">
                <div className="flex items-center gap-3 mb-3 text-[#4AA171]">
                  <Map className="w-5 h-5" />
                  <h2 className="font-bold text-gray-800">Trajets piétons adaptés</h2>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  L’app propose des itinéraires plus cohérents avec la réalité : réduire les galères,
                  éviter les zones inutiles et privilégier les passages plus fluides.
                </p>
              </div>

              <div className="bg-white/14 backdrop-blur-xl border border-white/25 rounded-[2rem] p-6 shadow-lg shadow-black/10">
                <div className="flex items-center gap-3 mb-3 text-[#4AA171]">
                  <AlertTriangle className="w-5 h-5" />
                  <h2 className="font-bold text-gray-800">Signalements</h2>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  Signaler ce qui bloque (travaux, trottoir impraticable, passage fermé…) et ce qui aide
                  (accès dégagé, traversée plus simple…). C’est ce qui rend la carte utile au quotidien.
                </p>
              </div>

              <div className="bg-white/14 backdrop-blur-xl border border-white/25 rounded-[2rem] p-6 shadow-lg shadow-black/10">
                <div className="flex items-center gap-3 mb-3 text-[#4AA171]">
                  <CheckCircle2 className="w-5 h-5" />
                  <h2 className="font-bold text-gray-800">Validation = fiabilité</h2>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  Les informations deviennent fiables quand elles sont confirmées : objectif zéro surprise,
                  et des données vivantes, utiles et à jour.
                </p>
              </div>

              <div className="bg-white/14 backdrop-blur-xl border border-white/25 rounded-[2rem] p-6 shadow-lg shadow-black/10">
                <div className="flex items-center gap-3 mb-3 text-[#4AA171]">
                  <ShieldCheck className="w-5 h-5" />
                  <h2 className="font-bold text-gray-800">Simple, clair, efficace</h2>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  Une interface conçue pour être comprise en quelques secondes : voir, décider, avancer.
                </p>
              </div>
            </div>

            {/* Mini bloc objectif */}
            <div className="mt-10 bg-white/18 backdrop-blur-xl border border-white/25 rounded-[2rem] p-6 shadow-lg shadow-black/10">
              <div className="flex items-center gap-2 text-[#4AA171] font-bold mb-2">
                <Sparkles className="w-4 h-4" />
                L’objectif
              </div>
              <p className="text-gray-600 leading-relaxed">
                Te permettre de te déplacer avec plus de confiance : moins d’imprévus, plus de fluidité,
                et une ville plus lisible au quotidien.
              </p>
            </div>

            {/* CTA */}
            <div className="mt-10 flex flex-col sm:flex-row gap-4 pt-2">
              <a
                href="/projet"
                className="px-8 py-4 rounded-full bg-white text-[#4AA171] font-bold text-lg shadow-lg hover:shadow-xl hover:bg-gray-50 transition-all transform hover:-translate-y-1 inline-block text-center"
              >
                Découvrir le projet
              </a>

              <a
                href="/download"
                className="px-8 py-4 rounded-full bg-[#4AA171] border-2 border-white/30 text-white font-medium shadow-lg shadow-black/10 hover:shadow-xl hover:shadow-black/15 hover:bg-[#3d8c60] transition-all transform hover:-translate-y-1 inline-block text-center"
              >
                Télécharger l&apos;App
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
