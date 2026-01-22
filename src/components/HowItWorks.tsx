import React from "react";
import { ArrowLeft, Map, AlertTriangle, CheckCircle2, ShieldCheck, Route } from "lucide-react";
import { Blob } from "./ui/Blob";

export function HowItWorksPage() {
  return (
    <section className="relative w-full px-4 py-10 md:py-14 overflow-hidden">
      {/* ============================= */}
      {/* FOND DYNAMIQUE (spécifique /comment-ca-marche) */}
      {/* ============================= */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-[#E8F5EE] via-[#F7F4EA] to-white" />

      <Blob className="-top-16 right-0 w-[30rem] h-[30rem] bg-[#4AA171]/14 translate-x-1/3" />
      <Blob className="top-48 -left-24 w-[34rem] h-[34rem] bg-[#E8E4D9] opacity-70" />
      <Blob className="bottom-0 right-1/2 w-[44rem] h-[44rem] bg-[#4AA171]/10 translate-x-1/2 translate-y-1/3" />

      <div className="max-w-7xl mx-auto">
        <a
          href="/"
          className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-white/40 backdrop-blur-xl border border-white/35 text-gray-700 hover:text-[#4AA171] transition shadow-md shadow-black/10"
        >
          <ArrowLeft className="w-4 h-4" />
          Retour
        </a>

        <div className="mt-6 relative bg-white/16 backdrop-blur-2xl backdrop-saturate-150 rounded-[3rem] md:rounded-[4rem] p-8 md:p-14 border border-white/28 shadow-2xl shadow-black/10 overflow-hidden">
          <div className="absolute -top-24 -left-24 w-[22rem] h-[22rem] bg-emerald-900/12 rounded-full blur-[90px]" />
          <div className="absolute -bottom-24 -right-24 w-[22rem] h-[22rem] bg-yellow-100/30 rounded-full blur-[80px]" />

          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/35 backdrop-blur-xl border border-white/30 text-[#4AA171] font-bold text-sm mb-6 shadow-sm shadow-black/10">
              <Route className="w-4 h-4" />
              Le fonctionnement de l’app
            </div>

            <h1 className="text-4xl md:text-6xl font-bold text-gray-800 leading-tight">
              Comment ça <span className="text-[#4AA171]">marche</span> ?
            </h1>

            <p className="mt-6 text-lg md:text-xl text-gray-600 leading-relaxed max-w-3xl">
              PIAF combine une navigation piétonne pensée “accessibilité” et une couche communautaire.
              L’objectif : des trajets plus fluides, plus sûrs et plus prévisibles.
            </p>

            {/* ========================================================= */}
            {/* IMAGE PLACEHOLDER #1 (à décommenter plus tard) */}
            {/* Idée: mockup de l’écran “carte / trajet” */}
            {/* 
            <div className="mt-10 rounded-[2.5rem] overflow-hidden border border-white/25 bg-white/10">
              <img
                src="/images/mockup_trajet.png"
                alt="PIAF - Trajet"
                className="w-full h-[220px] md:h-[340px] object-cover"
              />
            </div>
            */}
            {/* ========================================================= */}

            <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="bg-white/14 backdrop-blur-xl border border-white/25 rounded-[2rem] p-6 shadow-lg shadow-black/10">
                <div className="flex items-center gap-3 mb-3 text-[#4AA171]">
                  <Map className="w-5 h-5" />
                  <h2 className="font-bold text-gray-800">Trajets piétons adaptés</h2>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  L’app propose des itinéraires plus cohérents avec le terrain : plus simples, plus fluides, moins d’imprévus.
                </p>

                {/* IMAGE PLACEHOLDER (petit) */}
                {/*
                <div className="mt-5 rounded-[1.75rem] overflow-hidden border border-white/25 bg-white/10 min-h-[160px]">
                  <img src="/images/mini_trajet.png" alt="Exemple trajet" className="w-full h-full object-cover" />
                </div>
                */}
              </div>

              <div className="bg-white/14 backdrop-blur-xl border border-white/25 rounded-[2rem] p-6 shadow-lg shadow-black/10">
                <div className="flex items-center gap-3 mb-3 text-[#4AA171]">
                  <AlertTriangle className="w-5 h-5" />
                  <h2 className="font-bold text-gray-800">Signalements : obstacles & facilitateurs</h2>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  La communauté signale ce qui bloque (travaux, passage fermé…) et ce qui aide (rampe, accès dégagé…).
                </p>

                {/* IMAGE PLACEHOLDER (petit) */}
                {/*
                <div className="mt-5 rounded-[1.75rem] overflow-hidden border border-white/25 bg-white/10 min-h-[160px]">
                  <img src="/images/mini_signalement.png" alt="Signalement" className="w-full h-full object-cover" />
                </div>
                */}
              </div>

              <div className="bg-white/14 backdrop-blur-xl border border-white/25 rounded-[2rem] p-6 shadow-lg shadow-black/10">
                <div className="flex items-center gap-3 mb-3 text-[#4AA171]">
                  <CheckCircle2 className="w-5 h-5" />
                  <h2 className="font-bold text-gray-800">Validation = fiabilité</h2>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  Les infos gagnent en confiance quand elles sont confirmées : moins de mauvaises surprises, plus de sérénité.
                </p>
              </div>

              <div className="bg-white/14 backdrop-blur-xl border border-white/25 rounded-[2rem] p-6 shadow-lg shadow-black/10">
                <div className="flex items-center gap-3 mb-3 text-[#4AA171]">
                  <ShieldCheck className="w-5 h-5" />
                  <h2 className="font-bold text-gray-800">Simple, clair, utile</h2>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  L’objectif : comprendre vite, agir vite, et se déplacer avec plus de confiance dès la première utilisation.
                </p>
              </div>
            </div>

            {/* ========================================================= */}
            {/* IMAGE PLACEHOLDER #2 (à décommenter plus tard) */}
            {/* Idée: 2 mockups côte à côte (signalement + confirmation) */}
            {/* 
            <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="rounded-[2.5rem] overflow-hidden border border-white/25 bg-white/10 min-h-[220px]" />
              <div className="rounded-[2.5rem] overflow-hidden border border-white/25 bg-white/10 min-h-[220px]" />
            </div>
            */}
            {/* ========================================================= */}

            {/* CTA — mêmes boutons que ton cadre vert */}
            <div className="mt-10 flex flex-col sm:flex-row gap-4 pt-2">
              <a
                href="/projet"
                className="px-8 py-4 rounded-full bg-white text-[#4AA171] font-bold text-lg shadow-lg hover:shadow-xl hover:bg-gray-50 transition-all transform hover:-translate-y-1 inline-block text-center"
              >
                Découvrir le projet
              </a>

              <a
                href="/download"
                className="px-8 py-4 rounded-full bg-[#4AA171] border-2 border-white/30 text-white font-medium hover:bg-white/10 transition-colors inline-block text-center"
              >
                Télécharger l'App
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
