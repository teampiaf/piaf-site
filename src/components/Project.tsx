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
        Notre histoire
        </div>

        <h1 className="text-4xl md:text-6xl font-bold text-gray-800 leading-tight">
        Découvrir le projet <span className="text-[#4AA171]">PIAF</span>
        </h1>

        <p className="mt-6 text-lg md:text-xl text-gray-600 leading-relaxed max-w-3xl">
        PIAF est né d’un projet d’école : dans le cadre de notre spécialité S3E, nous devions imaginer une innovation utile et concrète.
        Très vite, l’idée a pris une dimension personnelle. Une amie commune à notre équipe a été victime d’un accident de voiture et s’est
        retrouvée paraplégique. Cet événement nous a profondément marqués — et nous a poussés à réfléchir à une solution qui pourrait réellement
        faciliter le quotidien des personnes à mobilité réduite.
        </p>

        <p className="mt-4 text-lg md:text-xl text-gray-600 leading-relaxed max-w-3xl">
        C’est là qu’est apparue l’idée d’un GPS interactif dédié à l’accessibilité : un outil capable d’aider les PMR à se déplacer plus librement,
        avec moins d’imprévus et plus de sérénité, en s’appuyant sur des informations terrain pertinentes.
        </p>

        {/* ========================================================= */}
        {/* IMAGE PLACEHOLDER #1 (à décommenter plus tard) */}
        {/* Idée: photo équipe / moment fondateur / atelier de travail */}
        {/*
        <div className="mt-10 rounded-[2.5rem] overflow-hidden border border-white/25 bg-white/10">
        <img
            src="/images/projet_origine.jpg"
            alt="Origine du projet PIAF"
            className="w-full h-[220px] md:h-[340px] object-cover"
        />
        </div>
        */}
        {/* ========================================================= */}

        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white/14 backdrop-blur-xl border border-white/25 rounded-[2rem] p-6 shadow-lg shadow-black/10">
            <div className="flex items-center gap-3 mb-3 text-[#4AA171]">
            <Trophy className="w-5 h-5" />
            <h2 className="font-bold text-gray-800">Le déclic : un concours national</h2>
            </div>
            <p className="text-gray-600 leading-relaxed">
            Quelques mois plus tard, nous recevons un appel à projets : un concours d’innovation autour de la sécurité routière,
            encadré au niveau institutionnel. On se lance sans prétention — à ce stade, ce n’était encore qu’une idée.
            </p>
        </div>

        <div className="bg-white/14 backdrop-blur-xl border border-white/25 rounded-[2rem] p-6 shadow-lg shadow-black/10">
            <div className="flex items-center gap-3 mb-3 text-[#4AA171]">
            <HeartHandshake className="w-5 h-5" />
            <h2 className="font-bold text-gray-800">Du pitch au Top 3</h2>
            </div>
            <p className="text-gray-600 leading-relaxed">
            De fil en aiguille, nous avons présenté PIAF en visioconférence devant un jury officiel.
            Puis l’annonce : nous faisons partie du Top 3 et sommes invités à Paris pour la remise des prix.
            </p>
        </div>

    <div className="bg-white/14 backdrop-blur-xl border border-white/25 rounded-[2rem] p-6 shadow-lg shadow-black/10">
        <div className="flex items-center gap-3 mb-3 text-[#4AA171]">
            <Rocket className="w-5 h-5" />
            <h2 className="font-bold text-gray-800">1er prix & dotation de 12 000€</h2>
            </div>
            <p className="text-gray-600 leading-relaxed">
            À Paris, nous découvrons que nous remportons le 1er prix, accompagné d’une dotation de 12 000€.
            Ce moment a tout changé : PIAF n’était plus une idée, mais un projet solide à construire.
            </p>
        </div>
    </div>

        {/* ========================================================= */}
        {/* IMAGE PLACEHOLDER #2 (à décommenter plus tard) */}
        {/* Idée: photo remise du prix à Paris / scène / trophée */}
        {/*
        <div className="mt-10 rounded-[2.5rem] overflow-hidden border border-white/25 bg-white/10">
        <img
            src="/images/projet_paris_prix.jpg"
            alt="Remise du prix à Paris"
            className="w-full h-[220px] md:h-[340px] object-cover"
        />
        </div>
        */}
        {/* ========================================================= */}

        <p className="mt-10 text-lg md:text-xl text-gray-600 leading-relaxed max-w-3xl">
        Depuis, nous développons PIAF avec une ambition claire : proposer une expérience de navigation plus accessible,
        plus fiable et plus rassurante au quotidien. Notre objectif est simple : permettre à chacun de se déplacer avec confiance,
        sans que la ville soit un obstacle.
        </p>

    {/* CTA — mêmes boutons que ton cadre vert */}
    <div className="mt-10 flex flex-col sm:flex-row gap-4 pt-2">
        <a
            href="/comment-ca-marche"
            className="px-8 py-4 rounded-full bg-white text-[#4AA171] font-bold text-lg shadow-lg hover:shadow-xl hover:bg-gray-50 transition-all transform hover:-translate-y-1 inline-block text-center"
        >
            Comment ça marche ?
        </a>

        <a
            href="/download"
            className="px-8 py-4 rounded-full bg-[#4AA171] border-2 border-white/30 text-white font-medium shadow-lg shadow-black/10 hover:shadow-xl hover:shadow-black/15 hover:bg-[#3d8c60] transition-all transform hover:-translate-y-1 inline-block text-center"
        >
            Télécharger l'App
        </a>
    </div>
