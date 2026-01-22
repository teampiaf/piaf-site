import React from "react";
import {
  ArrowLeft,
  Trophy,
  HeartHandshake,
  Rocket,
  Sparkles,
  Quote,
  MapPinned,
} from "lucide-react";
import { Blob } from "./ui/Blob";

export function ProjectPage() {
  return (
    <section className="relative w-full px-4 py-10 md:py-14 overflow-hidden">
      {/* ============================= */}
      {/* FOND DYNAMIQUE (spécifique /projet) */}
      {/* ============================= */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-[#effcf6] via-[#F7F4EA] to-white" />

      {/* Blobs décoratifs en arrière-plan (ne floutent PAS le contenu) */}
      <Blob className="-top-16 -left-16 w-[30rem] h-[30rem] bg-[#4AA171]/15" />
      <Blob className="top-36 -right-24 w-[34rem] h-[34rem] bg-[#E8E4D9] opacity-70" />
      <Blob className="bottom-0 left-1/2 w-[46rem] h-[46rem] bg-[#4AA171]/12 -translate-x-1/2 translate-y-1/3" />

      <div className="max-w-7xl mx-auto">
        {/* ============================= */}
        {/* RETOUR */}
        {/* ============================= */}
        <a
          href="/"
          className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-white/45 backdrop-blur-xl border border-white/35 text-gray-700 hover:text-[#4AA171] transition shadow-md shadow-black/10"
        >
          <ArrowLeft className="w-4 h-4" />
          Retour
        </a>

        {/* ============================= */}
        {/* BLOC PRINCIPAL (Liquid Glass) */}
        {/* ============================= */}
        <div className="mt-6 relative bg-white/16 backdrop-blur-2xl backdrop-saturate-150 rounded-[3rem] md:rounded-[4rem] p-8 md:p-14 border border-white/28 shadow-2xl shadow-black/10 overflow-hidden">
          {/* Lumières internes pour relief */}
          <div className="absolute -top-24 -right-24 w-[22rem] h-[22rem] bg-yellow-100/35 rounded-full blur-[80px]" />
          <div className="absolute -bottom-24 -left-24 w-[22rem] h-[22rem] bg-emerald-900/14 rounded-full blur-[90px]" />

          <div className="relative z-10">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/40 backdrop-blur-xl border border-white/30 text-[#4AA171] font-bold text-sm mb-6 shadow-sm shadow-black/10">
              <Sparkles className="w-4 h-4" />
              Notre histoire
            </div>

            <h1 className="text-4xl md:text-6xl font-bold text-gray-800 leading-tight">
              Découvrir le projet <span className="text-[#4AA171]">PIAF</span>
            </h1>

            {/* ============================= */}
            {/* INTRO AÉRÉE (2 colonnes) */}
            {/* ============================= */}
            <div className="mt-8 grid grid-cols-1 lg:grid-cols-12 gap-8">
              {/* Colonne gauche : récit structuré */}
              <div className="lg:col-span-7 space-y-7">
                <div className="bg-white/14 backdrop-blur-xl border border-white/25 rounded-[2.25rem] p-6 shadow-lg shadow-black/10">
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
                    Une innovation née à l’école
                  </h2>
                  <p className="mt-3 text-gray-600 leading-relaxed text-lg">
                    PIAF a commencé comme un projet d’école : dans le cadre de notre spécialité S3E,
                    nous devions imaginer une innovation concrète, utile et réaliste.
                  </p>
                </div>

                <div className="bg-white/14 backdrop-blur-xl border border-white/25 rounded-[2.25rem] p-6 shadow-lg shadow-black/10">
                  <h3 className="text-xl md:text-2xl font-bold text-gray-800">
                    Le déclencheur humain
                  </h3>
                  <p className="mt-3 text-gray-600 leading-relaxed text-lg">
                    Une amie commune à notre équipe a été victime d’un accident de voiture et s’est retrouvée paraplégique.
                    Cet événement nous a profondément marqués et nous a poussés à réfléchir à une solution qui puisse réellement
                    faciliter les déplacements des personnes à mobilité réduite.
                  </p>
                </div>

                <div className="bg-white/14 backdrop-blur-xl border border-white/25 rounded-[2.25rem] p-6 shadow-lg shadow-black/10">
                  <h3 className="text-xl md:text-2xl font-bold text-gray-800">
                    L’idée : un GPS interactif dédié à l’accessibilité
                  </h3>
                  <p className="mt-3 text-gray-600 leading-relaxed text-lg">
                    C’est là qu’est née l’idée d’un GPS interactif dédié à l’accessibilité :
                    un outil qui rend la ville plus lisible, anticipe les difficultés et aide à planifier un trajet
                    avec plus de sérénité.
                  </p>
                </div>

                {/* ========================================================= */}
                {/* IMAGE PLACEHOLDER #1 (à décommenter plus tard) */}
                {/* Idée: photo équipe / moment fondateur / atelier de travail */}
                {/*
                <div className="rounded-[2.5rem] overflow-hidden border border-white/25 bg-white/10 shadow-lg shadow-black/10">
                  <img
                    src="/images/projet_origine.jpg"
                    alt="Origine du projet PIAF"
                    className="w-full h-[240px] md:h-[360px] object-cover"
                  />
                </div>
                */}
                {/* ========================================================= */}
              </div>

              {/* Colonne droite : repères + mini citation */}
              <div className="lg:col-span-5 space-y-6">
                <div className="bg-white/18 backdrop-blur-xl border border-white/25 rounded-[2.25rem] p-6 shadow-lg shadow-black/10">
                  <div className="flex items-center gap-2 text-[#4AA171] font-bold mb-3">
                    <MapPinned className="w-4 h-4" />
                    Repères rapides
                  </div>

                  <ul className="space-y-3 text-gray-700">
                    <li className="flex gap-3">
                      <span className="mt-1 w-2 h-2 rounded-full bg-[#4AA171]" />
                      <span>
                        <strong>Origine :</strong> projet S3E (innovation)
                      </span>
                    </li>
                    <li className="flex gap-3">
                      <span className="mt-1 w-2 h-2 rounded-full bg-[#4AA171]" />
                      <span>
                        <strong>Déclencheur :</strong> accident d’une amie, paraplégie
                      </span>
                    </li>
                    <li className="flex gap-3">
                      <span className="mt-1 w-2 h-2 rounded-full bg-[#4AA171]" />
                      <span>
                        <strong>Idée :</strong> GPS interactif pour déplacements PMR
                      </span>
                    </li>
                    <li className="flex gap-3">
                      <span className="mt-1 w-2 h-2 rounded-full bg-[#4AA171]" />
                      <span>
                        <strong>Concours :</strong> Innovation Sécurité Routière (encadré)
                      </span>
                    </li>
                    <li className="flex gap-3">
                      <span className="mt-1 w-2 h-2 rounded-full bg-[#4AA171]" />
                      <span>
                        <strong>Résultat :</strong> Top 3 → Paris → <strong>1er prix</strong> (12 000€)
                      </span>
                    </li>
                  </ul>
                </div>

                <div className="bg-white/18 backdrop-blur-xl border border-white/25 rounded-[2.25rem] p-6 shadow-lg shadow-black/10">
                  <div className="flex items-center gap-2 text-[#4AA171] font-bold mb-2">
                    <Quote className="w-4 h-4" />
                    Notre promesse
                  </div>
                  <p className="text-gray-600 leading-relaxed">
                    Construire un outil simple, fiable et rassurant pour que chacun puisse se déplacer avec plus de confiance,
                    et que la ville soit moins un obstacle au quotidien.
                  </p>
                </div>

                {/* ========================================================= */}
                {/* IMAGE PLACEHOLDER #2 (à décommenter plus tard) */}
                {/* Idée: petit visuel “prix / Paris / trophée” */}
                {/*
                <div className="rounded-[2.5rem] overflow-hidden border border-white/25 bg-white/10 shadow-lg shadow-black/10">
                  <img
                    src="/images/projet_paris_prix.jpg"
                    alt="Remise de prix à Paris"
                    className="w-full h-[220px] object-cover"
                  />
                </div>
                */}
                {/* ========================================================= */}
              </div>
            </div>

            {/* ============================= */}
            {/* SECTION TIMELINE (3 cartes) */}
            {/* ============================= */}
            <div className="mt-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">
                Du concept au projet concret
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white/14 backdrop-blur-xl border border-white/25 rounded-[2rem] p-6 shadow-lg shadow-black/10">
                  <div className="flex items-center gap-3 mb-3 text-[#4AA171]">
                    <Trophy className="w-5 h-5" />
                    <h3 className="font-bold text-gray-800">Le concours</h3>
                  </div>
                  <p className="text-gray-600 leading-relaxed">
                    Quelques mois après, nous recevons un e-mail pour participer à un concours
                    « Innovation pour la sécurité routière », encadré au niveau institutionnel.
                    On tente notre chance sans prétention : à ce stade, ce n’était qu’une idée.
                  </p>
                </div>

                <div className="bg-white/14 backdrop-blur-xl border border-white/25 rounded-[2rem] p-6 shadow-lg shadow-black/10">
                  <div className="flex items-center gap-3 mb-3 text-[#4AA171]">
                    <HeartHandshake className="w-5 h-5" />
                    <h3 className="font-bold text-gray-800">Le pitch</h3>
                  </div>
                  <p className="text-gray-600 leading-relaxed">
                    De fil en aiguille, nous présentons PIAF en visioconférence devant un jury officiel.
                    Puis l’annonce : nous sommes sélectionnés dans le Top 3 et invités à Paris
                    pour la remise des prix.
                  </p>
                </div>

                <div className="bg-white/14 backdrop-blur-xl border border-white/25 rounded-[2rem] p-6 shadow-lg shadow-black/10">
                  <div className="flex items-center gap-3 mb-3 text-[#4AA171]">
                    <Rocket className="w-5 h-5" />
                    <h3 className="font-bold text-gray-800">Le 1er prix</h3>
                  </div>
                  <p className="text-gray-600 leading-relaxed">
                    À Paris, nous découvrons que nous remportons le 1er prix et une dotation de 12 000€.
                    Ce jour-là, on comprend que PIAF n’est pas “juste une idée” : c’est un vrai projet à construire.
                  </p>
                </div>
              </div>

              {/* ========================================================= */}
              {/* IMAGE PLACEHOLDER #3 (à décommenter plus tard) */}
              {/* Idée: 2 visuels côte à côte (Paris / mockup) */}
              {/*
              <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="rounded-[2.5rem] overflow-hidden border border-white/25 bg-white/10 min-h-[240px]" />
                <div className="rounded-[2.5rem] overflow-hidden border border-white/25 bg-white/10 min-h-[240px]" />
              </div>
              */}
              {/* ========================================================= */}
            </div>

            {/* ============================= */}
            {/* CONCLUSION */}
            {/* ============================= */}
            <div className="mt-12 bg-white/18 backdrop-blur-xl border border-white/25 rounded-[2.25rem] p-6 shadow-lg shadow-black/10">
              <h3 className="text-xl md:text-2xl font-bold text-gray-800">
                Aujourd’hui, PIAF avance avec une ambition claire
              </h3>
              <p className="mt-3 text-gray-600 leading-relaxed text-lg max-w-4xl">
                Depuis, nous développons PIAF pour proposer une expérience de navigation plus accessible, plus fiable
                et plus rassurante. L’objectif est simple : permettre à chacun de se déplacer avec confiance, en limitant
                au maximum les mauvaises surprises.
              </p>
            </div>

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
