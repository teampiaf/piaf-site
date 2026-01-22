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
import { Blob } from "./ui/Blob";

export function HowItWorksPage() {
  return (
    <section className="relative w-full px-4 py-10 md:py-14 overflow-hidden">
      {/* ============================= */}
      {/* FOND DYNAMIQUE (spécifique /comment-ca-marche) */}
      {/* ============================= */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-[#E8F5EE] via-[#F7F4EA] to-white" />

      {/* Blobs décoratifs en arrière-plan (ne floutent pas le contenu) */}
      <Blob className="-top-16 right-0 w-[30rem] h-[30rem] bg-[#4AA171]/15 translate-x-1/3" />
      <Blob className="top-48 -left-24 w-[34rem] h-[34rem] bg-[#E8E4D9] opacity-70" />
      <Blob className="bottom-0 right-1/2 w-[44rem] h-[44rem] bg-[#4AA171]/12 translate-x-1/2 translate-y-1/3" />

      <div className="max-w-7xl mx-auto">
        {/* ============================= */}
        {/* RETOUR */}
        {/* ============================= */}
        <a
          href="/"
          className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-white/[0.45] backdrop-blur-xl border border-white/[0.35] text-gray-700 hover:text-[#4AA171] transition shadow-md shadow-black/10"
        >
          <ArrowLeft className="w-4 h-4" />
          Retour
        </a>

        {/* ============================= */}
        {/* BLOC PRINCIPAL (Liquid Glass) */}
        {/* ============================= */}
        <div className="mt-6 relative bg-white/[0.16] backdrop-blur-2xl backdrop-saturate-150 rounded-[3rem] md:rounded-[4rem] p-8 md:p-14 border border-white/[0.28] shadow-2xl shadow-black/10 overflow-hidden">
          {/* Lumières internes pour relief */}
          <div className="absolute -top-24 -left-24 w-[22rem] h-[22rem] bg-emerald-900/12 rounded-full blur-[90px]" />
          <div className="absolute -bottom-24 -right-24 w-[22rem] h-[22rem] bg-yellow-100/30 rounded-full blur-[80px]" />

          <div className="relative z-10">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.40] backdrop-blur-xl border border-white/[0.30] text-[#4AA171] font-bold text-sm mb-6 shadow-sm shadow-black/10">
              <Route className="w-4 h-4" />
              Le fonctionnement de l’app
            </div>

            <h1 className="text-4xl md:text-6xl font-bold text-gray-800 leading-tight">
              Comment ça <span className="text-[#4AA171]">marche</span> ?
            </h1>

            <p className="mt-6 text-lg md:text-xl text-gray-600 leading-relaxed max-w-3xl">
              PIAF est une application de navigation pensée pour rendre les déplacements plus simples et plus
              prévisibles. Elle s’appuie sur des informations terrain et une logique communautaire pour limiter
              les imprévus et sécuriser les trajets.
            </p>

            {/* ========================================================= */}
            {/* IMAGE PLACEHOLDER #1 (à décommenter plus tard) */}
            {/* Idée: mockup de l’écran “carte / trajet” */}
            {/*
            <div className="mt-10 rounded-[2.5rem] overflow-hidden border border-white/[0.25] bg-white/[0.10]">
              <img
                src="/images/mockup_trajet.png"
                alt="PIAF - Trajet"
                className="w-full h-[220px] md:h-[340px] object-cover"
              />
            </div>
            */}
            {/* ========================================================= */}

            {/* ============================= */}
            {/* 4 BLOCS EXPLICATIFS */}
            {/* ============================= */}
            <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Bloc 1 */}
              <div className="bg-white/[0.14] backdrop-blur-xl border border-white/[0.25] rounded-[2rem] p-6 shadow-lg shadow-black/10">
                <div className="flex items-center gap-3 mb-3 text-[#4AA171]">
                  <Map className="w-5 h-5" />
                  <h2 className="font-bold text-gray-800">Trajets piétons adaptés</h2>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  L’app propose des itinéraires plus cohérents avec la réalité : réduire les galères, éviter les zones
                  inutiles, et privilégier les passages plus fluides quand c’est possible.
                </p>

                {/* IMAGE PLACEHOLDER (petit) */}
                {/*
                <div className="mt-5 rounded-[1.75rem] overflow-hidden border border-white/[0.25] bg-white/[0.10] min-h-[160px]">
                  <img
                    src="/images/mini_trajet.png"
                    alt="Exemple de trajet"
                    className="w-full h-full object-cover"
                  />
                </div>
                */}
              </div>

              {/* Bloc 2 */}
              <div className="bg-white/[0.14] backdrop-blur-xl border border-white/[0.25] rounded-[2rem] p-6 shadow-lg shadow-black/10">
                <div className="flex items-center gap-3 mb-3 text-[#4AA171]">
                  <AlertTriangle className="w-5 h-5" />
                  <h2 className="font-bold text-gray-800">Signalements : obstacles & facilitateurs</h2>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  Chacun peut signaler ce qui bloque (travaux, trottoir impraticable, passage fermé…) et aussi ce qui aide
                  (rampe, accès dégagé, traversée plus simple). C’est ce qui rend la carte vraiment utile au quotidien.
                </p>

                {/* IMAGE PLACEHOLDER (petit) */}
                {/*
                <div className="mt-5 rounded-[1.75rem] overflow-hidden border border-white/[0.25] bg-white/[0.10] min-h-[160px]">
                  <img
                    src="/images/mini_signalement.png"
                    alt="Signalement"
                    className="w-full h-full object-cover"
                  />
                </div>
                */}
              </div>

              {/* Bloc 3 */}
              <div className="bg-white/[0.14] backdrop-blur-xl border border-white/[0.25] rounded-[2rem] p-6 shadow-lg shadow-black/10">
                <div className="flex items-center gap-3 mb-3 text-[#4AA171]">
                  <CheckCircle2 className="w-5 h-5" />
                  <h2 className="font-bold text-gray-800">Validation = fiabilité</h2>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  Les informations gagnent en confiance quand elles sont confirmées. L’objectif est simple : réduire les
                  mauvaises surprises et garder des données vivantes, utiles et à jour.
                </p>
              </div>

              {/* Bloc 4 */}
              <div className="bg-white/[0.14] backdrop-blur-xl border border-white/[0.25] rounded-[2rem] p-6 shadow-lg shadow-black/10">
                <div className="flex items-center gap-3 mb-3 text-[#4AA171]">
                  <ShieldCheck className="w-5 h-5" />
                  <h2 className="font-bold text-gray-800">Simple, clair, efficace</h2>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  PIAF est conçu pour être compréhensible en quelques secondes : voir, décider, avancer. Une expérience
                  agréable qui vise la sérénité avant tout.
                </p>
              </div>
            </div>

            {/* ========================================================= */}
            {/* IMAGE PLACEHOLDER #2 (à décommenter plus tard) */}
            {/* Idée: 2 mockups côte à côte (signalement + validation) */}
            {/*
            <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="rounded-[2.5rem] overflow-hidden border border-white/[0.25] bg-white/[0.10] min-h-[220px]">
                <img src="/images/mockup_signalement.png" alt="Signalement" className="w-full h-full object-cover" />
              </div>
              <div className="rounded-[2.5rem] overflow-hidden border border-white/[0.25] bg-white/[0.10] min-h-[220px]">
                <img src="/images/mockup_validation.png" alt="Validation" className="w-full h-full object-cover" />
              </div>
            </div>
            */}
            {/* ========================================================= */}

            {/* Mini bloc “promesse” (facultatif, mais très joli) */}
            <div className="mt-10 bg-white/[0.18] backdrop-blur-xl border border-white/[0.25] rounded-[2rem] p-6 shadow-lg shadow-black/10">
              <div className="flex items-center gap-2 text-[#4AA171] font-bold mb-2">
                <Sparkles className="w-4 h-4" />
                L’objectif
              </div>
              <p className="text-gray-600 leading-relaxed">
                Te permettre de te déplacer avec plus de confiance : moins d’imprévus, plus de fluidité, et une ville qui
                devient plus lisible au quotidien.
              </p>
            </div>

            {/* ============================= */}
            {/* CTA — mêmes boutons que ton cadre vert */}
            {/* ============================= */}
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
    </section>
  );
}
