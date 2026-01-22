import React from "react";
import { ArrowLeft, Trophy, HeartHandshake, Rocket, Sparkles } from "lucide-react";
import { Blob } from "./ui/Blob";

export function ProjectPage() {
  return (
    <section className="relative w-full px-4 py-10 md:py-14 overflow-hidden">
      {/* ============================= */}
      {/* FOND DYNAMIQUE (spécifique /projet) */}
      {/* ============================= */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-[#effcf6] via-[#F9F7F2] to-white" />

      {/* Blobs derrière (ne floutent pas le contenu, ils sont en arrière-plan) */}
      <Blob className="-top-12 -left-12 w-[28rem] h-[28rem] bg-[#4AA171]/12" />
      <Blob className="top-32 -right-24 w-[34rem] h-[34rem] bg-[#E8E4D9] opacity-60" />
      <Blob className="bottom-0 left-1/2 w-[40rem] h-[40rem] bg-[#4AA171]/10 -translate-x-1/2 translate-y-1/3" />

      <div className="max-w-7xl mx-auto">
        {/* ============================= */}
        {/* BOUTON RETOUR (style glass léger) */}
        {/* ============================= */}
        <a
          href="/"
          className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-white/40 backdrop-blur-xl border border-white/35 text-gray-700 hover:text-[#4AA171] transition shadow-md shadow-black/10"
        >
          <ArrowLeft className="w-4 h-4" />
          Retour
        </a>

        {/* ============================= */}
        {/* BLOC PRINCIPAL (Liquid Glass) */}
        {/* ============================= */}
        <div className="mt-6 relative bg-white/16 backdrop-blur-2xl backdrop-saturate-150 rounded-[3rem] md:rounded-[4rem] p-8 md:p-14 border border-white/28 shadow-2xl shadow-black/10 overflow-hidden">
          {/* petites lumières internes pour relief */}
          <div className="absolute -top-24 -right-24 w-[22rem] h-[22rem] bg-yellow-100/35 rounded-full blur-[80px]" />
          <div className="absolute -bottom-24 -left-24 w-[22rem] h-[22rem] bg-emerald-900/15 rounded-full blur-[90px]" />

          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/35 backdrop-blur-xl border border-white/30 text-[#4AA171] font-bold text-sm mb-6 shadow-sm shadow-black/10">
              <Sparkles className="w-4 h-4" />
              L’histoire du projet
            </div>

            <h1 className="text-4xl md:text-6xl font-bold text-gray-800 leading-tight">
              Découvrir <span className="text-[#4AA171]">PIAF</span>
            </h1>

            <p className="mt-6 text-lg md:text-xl text-gray-600 leading-relaxed max-w-3xl">
              PIAF est né d’un constat simple : l’accessibilité en ville peut changer d’une rue à l’autre, et trop souvent
              on le découvre trop tard. On veut rendre les trajets plus lisibles, plus fluides et plus sûrs au quotidien.
            </p>

            {/* ========================================================= */}
            {/* IMAGE PLACEHOLDER #1 (à décommenter plus tard) */}
            {/* Idée: photo du Challenge / de votre équipe / moment marquant */}
            {/* 
            <div className="mt-10 rounded-[2.5rem] overflow-hidden border border-white/25 bg-white/10">
              <img
                src="/images/projet_challenge.jpg"
                alt="PIAF - Challenge Innovation"
                className="w-full h-[220px] md:h-[340px] object-cover"
              />
            </div>
            */}
            {/* ========================================================= */}

            <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white/14 backdrop-blur-xl border border-white/25 rounded-[2rem] p-6 shadow-lg shadow-black/10">
                <div className="flex items-center gap-3 mb-3 text-[#4AA171]">
                  <Trophy className="w-5 h-5" />
                  <h2 className="font-bold text-gray-800">Challenge Innovation</h2>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  Un accélérateur : retours terrain, cadrage, validation du besoin. Ça a transformé une idée en vraie direction produit.
                </p>
              </div>

              <div className="bg-white/14 backdrop-blur-xl border border-white/25 rounded-[2rem] p-6 shadow-lg shadow-black/10">
                <div className="flex items-center gap-3 mb-3 text-[#4AA171]">
                  <HeartHandshake className="w-5 h-5" />
                  <h2 className="font-bold text-gray-800">Notre motivation</h2>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  Une démarche humaine : simplifier le quotidien et réduire le stress lié aux imprévus, inspiré par une histoire proche.
                </p>
              </div>

              <div className="bg-white/14 backdrop-blur-xl border border-white/25 rounded-[2rem] p-6 shadow-lg shadow-black/10">
                <div className="flex items-center gap-3 mb-3 text-[#4AA171]">
                  <Rocket className="w-5 h-5" />
                  <h2 className="font-bold text-gray-800">Où on en est</h2>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  On consolide le contenu, on travaille la fiabilité, et on prépare une expérience claire, agréable et utile dès la première utilisation.
                </p>
              </div>
            </div>

            {/* ========================================================= */}
            {/* IMAGE PLACEHOLDER #2 (à décommenter plus tard) */}
            {/* Idée: timeline visuelle, carte de Toulouse, ou capture d'un post/présentation */}
            {/* 
            <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="rounded-[2.5rem] overflow-hidden border border-white/25 bg-white/10 min-h-[220px]" />
              <div className="rounded-[2.5rem] overflow-hidden border border-white/25 bg-white/10 min-h-[220px]" />
            </div>
            */}
            {/* ========================================================= */}

            {/* ============================= */}
            {/* CTA — mêmes boutons que ton cadre vert */}
            {/* ============================= */}
            <div className="mt-10 flex flex-col sm:flex-row gap-4 pt-2">
              <a
                href="/comment-ca-marche"
                className="px-8 py-4 rounded-full bg-white text-[#4AA171] font-bold text-lg shadow-lg hover:shadow-xl hover:bg-gray-50 transition-all transform hover:-translate-y-1 inline-block text-center"
              >
                Comment ça marche ?
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
