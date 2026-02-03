import React from "react";
import { ArrowLeft, MapPin, AlertTriangle, CheckCircle2, Route } from "lucide-react";
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
        <div className="mt-6 relative bg-white/20 backdrop-blur-2xl backdrop-saturate-150 rounded-[3rem] md:rounded-[4rem] p-8 md:p-14 border border-white/30 shadow-2xl shadow-black/10 overflow-hidden">
          {/* Lumières internes pour relief */}
          <div className="absolute -top-24 -right-24 w-[22rem] h-[22rem] bg-yellow-100/35 rounded-full blur-[80px]" />
          <div className="absolute -bottom-24 -left-24 w-[22rem] h-[22rem] bg-emerald-900/15 rounded-full blur-[90px]" />

          <div className="relative z-10">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/40 backdrop-blur-xl border border-white/30 text-[#4AA171] font-bold text-sm mb-6 shadow-sm shadow-black/10">
              <Route className="w-4 h-4" />
              Comment ça marche ?
            </div>

            <h1 className="text-4xl md:text-6xl font-bold text-gray-800 leading-tight">
              L’application PIAF, <span className="text-[#4AA171]">concrètement</span>
            </h1>

            <p className="mt-5 text-lg md:text-xl text-gray-600 leading-relaxed max-w-3xl">
              PIAF t’aide à choisir les trajets les plus fluides, en s’appuyant sur des
              informations terrain (obstacles + facilitateurs) et sur la communauté.
            </p>

            {/* ========================= */}
            {/* 1) Les signalements */}
            {/* Image : annonce_travaux.jpg */}
            {/* ========================= */}
            <div className="mt-10 bg-white/15 backdrop-blur-xl border border-white/25 rounded-[2.5rem] p-7 shadow-lg shadow-black/10">
              <div className="flex items-center gap-3 text-[#4AA171] font-bold mb-3">
                <MapPin className="w-5 h-5" />
                1) Les signalements (ex : travaux)
              </div>

              <p className="text-gray-600 text-lg leading-relaxed">
                Tu peux signaler un problème en quelques secondes : travaux, passage fermé,
                trottoir impraticable, zone dangereuse… L’info remonte immédiatement et peut
                être confirmée par les autres.
              </p>

              {/* IMAGE (dans la bulle) — affichage intégral (pas rogné) */}
              <div className="mt-6 w-full rounded-[1.75rem] overflow-hidden">
                {/* Astuce ratio : 16/9 sur desktop, un peu plus “haut” sur mobile */}
                <div className="w-full aspect-[4/3] md:aspect-[16/9]">
                  <img
                    src="/images/annonce_travaux.jpg"
                    alt="Signalement de travaux"
                    className="w-full h-full object-contain object-center"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>

            {/* ========================= */}
            {/* 2) Obstacles */}
            {/* Image : obstacle.jpg */}
            {/* ========================= */}
            <div className="mt-8 bg-white/15 backdrop-blur-xl border border-white/25 rounded-[2.5rem] p-7 shadow-lg shadow-black/10">
              <div className="flex items-center gap-3 text-[#4AA171] font-bold mb-3">
                <AlertTriangle className="w-5 h-5" />
                2) Obstacles : anticiper au lieu de subir
              </div>

              <p className="text-gray-600 text-lg leading-relaxed">
                PIAF met en avant les zones problématiques sur ton trajet pour éviter les détours
                imprévus. Le but : garder un parcours plus fluide et réduire le stress.
              </p>

              {/* IMAGE (dans la bulle) — affichage intégral */}
              <div className="mt-6 w-full rounded-[1.75rem] overflow-hidden">
                <div className="w-full aspect-[4/3] md:aspect-[16/9]">
                  <img
                    src="/images/obstacle.jpg"
                    alt="Exemple d'obstacle"
                    className="w-full h-full object-contain object-center"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>

            {/* ========================= */}
            {/* 3) Facilitateurs */}
            {/* Image : facilitateur.jpg */}
            {/* ========================= */}
            <div className="mt-8 bg-white/15 backdrop-blur-xl border border-white/25 rounded-[2.5rem] p-7 shadow-lg shadow-black/10">
              <div className="flex items-center gap-3 text-[#4AA171] font-bold mb-3">
                <CheckCircle2 className="w-5 h-5" />
                3) Facilitateurs : les bons passages
              </div>

              <p className="text-gray-600 text-lg leading-relaxed">
                Au-delà d’éviter les obstacles, PIAF met aussi en avant les accès qui simplifient
                réellement le déplacement : rampes, passages adaptés, cheminements plus confortables, etc.
              </p>

              {/* IMAGE (dans la bulle) — affichage intégral */}
              <div className="mt-6 w-full rounded-[1.75rem] overflow-hidden">
                <div className="w-full aspect-[4/3] md:aspect-[16/9]">
                  <img
                    src="/images/facilitateur.jpg"
                    alt="Exemple de facilitateur"
                    className="w-full h-full object-contain object-center"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>

            {/* ========================= */}
            {/* 4) Exemple de trajet */}
            {/* Image : trajet_exemple.jpg */}
            {/* ========================= */}
            <div className="mt-8 bg-white/15 backdrop-blur-xl border border-white/25 rounded-[2.5rem] p-7 shadow-lg shadow-black/10">
              <div className="flex items-center gap-3 text-[#4AA171] font-bold mb-3">
                <Route className="w-5 h-5" />
                4) Exemple de trajet (navigation)
              </div>

              <p className="text-gray-600 text-lg leading-relaxed">
                Tu visualises ton itinéraire, les zones à éviter, et les alternatives plus accessibles.
                Objectif : un trajet plus prévisible et plus “safe”.
              </p>

              {/* IMAGE (dans la bulle) — affichage intégral */}
              <div className="mt-6 w-full rounded-[1.75rem] overflow-hidden">
                {/* Si c'est un screenshot vertical, tu peux passer md:aspect-[16/9] en md:aspect-[3/2] ou md:aspect-[4/3] */}
                <div className="w-full aspect-[4/3] md:aspect-[16/9]">
                  <img
                    src="/images/trajet_exemple.jpg"
                    alt="Exemple de trajet"
                    className="w-full h-full object-contain object-center"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="mt-10 flex flex-col sm:flex-row gap-4 pt-2">
              <a
                href="/decouvrir-le-projet"
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
