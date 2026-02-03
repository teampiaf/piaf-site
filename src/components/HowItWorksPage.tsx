import React from "react";
import { ArrowLeft, MapPin, AlertTriangle, CheckCircle2, Route } from "lucide-react";
import { SecondaryBackground } from "./ui/SecondaryBackground";

/**
 * ✅ IMPORTANT
 * Ici je n'ai PAS tes anciens textes exacts dans ce message.
 * Donc je t'ai mis des constantes "OLD_TEXT_*" : tu remplaces leur contenu
 * par tes anciens paragraphes (copier/coller) SANS toucher au layout.
 */
const OLD_INTRO =
  "PIAF rend la ville plus accessible grâce à un GPS communautaire et des informations terrain, pour des trajets plus fluides et plus prévisibles.";

const OLD_TEXT_SIGNAL =
  "👉 Colle ici ton ancien texte sur les signalements (sans réécriture).";

const OLD_TEXT_OBSTACLE =
  "👉 Colle ici ton ancien texte sur les obstacles (sans réécriture).";

const OLD_TEXT_FACILITATOR =
  "👉 Colle ici ton ancien texte sur les facilitateurs (sans réécriture).";

const OLD_TEXT_ROUTE =
  "👉 Colle ici ton ancien texte sur l’exemple de trajet / trajets piétons (sans réécriture).";

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
          {/* Lumières internes */}
          <div className="absolute -top-24 -right-24 w-[22rem] h-[22rem] bg-yellow-100/35 rounded-full blur-[80px]" />
          <div className="absolute -bottom-24 -left-24 w-[22rem] h-[22rem] bg-emerald-900/15 rounded-full blur-[90px]" />

          <div className="relative z-10">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/40 backdrop-blur-xl border border-white/30 text-[#4AA171] font-bold text-sm mb-6 shadow-sm shadow-black/10">
              <Route className="w-4 h-4" />
              Comment ça marche ?
            </div>

            <h1 className="text-4xl md:text-6xl font-bold text-gray-800 leading-tight">
              Comment ça marche <span className="text-[#4AA171]">PIAF</span>
            </h1>

            {/* INTRO (anciens textes) */}
            <p className="mt-5 text-lg md:text-xl text-gray-600 leading-relaxed max-w-3xl">
              {OLD_INTRO}
            </p>

            {/* ===================================================== */}
            {/* BULLE 1 — SIGNAL / TRAVAUX (annonce_travaux.jpg)       */}
            {/* ===================================================== */}
            <div className="mt-10 bg-white/15 backdrop-blur-xl border border-white/25 rounded-[2.5rem] p-7 shadow-lg shadow-black/10">
              <div className="flex items-center gap-3 text-[#4AA171] font-bold mb-3">
                <MapPin className="w-5 h-5" />
                Les signalements
              </div>

              {/* ✅ ANCIEN TEXTE À GARDER */}
              <p className="text-gray-600 text-lg leading-relaxed">{OLD_TEXT_SIGNAL}</p>

              {/* ✅ IMAGE DANS LA BULLE — FORMAT “ON VOIT TOUTE L’IMAGE” */}
              <div className="mt-6 w-full rounded-[1.75rem] overflow-hidden">
                <div className="w-full aspect-[4/3] md:aspect-[16/9]">
                  <img
                    src="/images/annonce_travaux.jpg"
                    alt="Annonce travaux / signalement"
                    className="w-full h-full object-contain object-center"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>

            {/* ===================================================== */}
            {/* BULLE 2 — OBSTACLE (obstacle.jpg)                      */}
            {/* ===================================================== */}
            <div className="mt-8 bg-white/15 backdrop-blur-xl border border-white/25 rounded-[2.5rem] p-7 shadow-lg shadow-black/10">
              <div className="flex items-center gap-3 text-[#4AA171] font-bold mb-3">
                <AlertTriangle className="w-5 h-5" />
                Les obstacles
              </div>

              {/* ✅ ANCIEN TEXTE À GARDER */}
              <p className="text-gray-600 text-lg leading-relaxed">{OLD_TEXT_OBSTACLE}</p>

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

            {/* ===================================================== */}
            {/* BULLE 3 — FACILITATEUR (facilitateur.jpg)              */}
            {/* ===================================================== */}
            <div className="mt-8 bg-white/15 backdrop-blur-xl border border-white/25 rounded-[2.5rem] p-7 shadow-lg shadow-black/10">
              <div className="flex items-center gap-3 text-[#4AA171] font-bold mb-3">
                <CheckCircle2 className="w-5 h-5" />
                Les facilitateurs
              </div>

              {/* ✅ ANCIEN TEXTE À GARDER */}
              <p className="text-gray-600 text-lg leading-relaxed">{OLD_TEXT_FACILITATOR}</p>

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

            {/* ===================================================== */}
            {/* BULLE 4 — EXEMPLE TRAJET (trajet_exemple.jpg)           */}
            {/* ===================================================== */}
            <div className="mt-8 bg-white/15 backdrop-blur-xl border border-white/25 rounded-[2.5rem] p-7 shadow-lg shadow-black/10">
              <div className="flex items-center gap-3 text-[#4AA171] font-bold mb-3">
                <Route className="w-5 h-5" />
                Exemple de trajet
              </div>

              {/* ✅ ANCIEN TEXTE À GARDER */}
              <p className="text-gray-600 text-lg leading-relaxed">{OLD_TEXT_ROUTE}</p>

              <div className="mt-6 w-full rounded-[1.75rem] overflow-hidden">
                {/* Si ton screenshot est très vertical et parait petit,
                    passe md:aspect-[16/9] -> md:aspect-[4/3] */}
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
