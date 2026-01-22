import React from "react";
import {
  ArrowLeft,
  Trophy,
  HeartHandshake,
  Rocket,
  Sparkles,
  Quote,
  BadgeCheck,
  Link as LinkIcon,
} from "lucide-react";
import { SecondaryBackground } from "./ui/SecondaryBackground";

export function ProjectPage() {
  return (
    <div className="min-h-screen relative overflow-hidden font-sans selection:bg-gray-50 selection:text-[#4AA171]">
      <SecondaryBackground variant="project" />
      <div className="relative z-10 px-4 md:px-8 py-10 max-w-6xl mx-auto">
        {/* RETOUR */}
        <a
          href="/"
          className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-white/45 backdrop-blur-xl border border-white/35 text-gray-700 hover:text-[#4AA171] transition shadow-md shadow-black/10"
        >
          <ArrowLeft className="w-4 h-4" />
          Retour
        </a>

        {/* BLOC PRINCIPAL (Liquid Glass) */}
        <div className="mt-6 relative bg-white/16 backdrop-blur-2xl backdrop-saturate-150 rounded-[3rem] md:rounded-[4rem] p-8 md:p-14 border border-white/28 shadow-2xl shadow-black/10 overflow-hidden">
          {/* Lumières internes pour relief */}
          <div className="absolute -top-24 -right-24 w-[22rem] h-[22rem] bg-yellow-100/35 rounded-full blur-[80px]" />
          <div className="absolute -bottom-24 -left-24 w-[22rem] h-[22rem] bg-emerald-900/14 rounded-full blur-[90px]" />

          <div className="relative z-10">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/40 backdrop-blur-xl border border-white/30 text-[#4AA171] font-bold text-sm mb-6 shadow-sm shadow-black/10">
              <Sparkles className="w-4 h-4" />
              Découvrir le projet
            </div>

            <h1 className="text-4xl md:text-6xl font-bold text-gray-800 leading-tight">
              Le projet <span className="text-[#4AA171]">PIAF</span>
            </h1>

            {/* INTRO (aérée) */}
            <div className="mt-8 grid grid-cols-1 lg:grid-cols-12 gap-8">
              <div className="lg:col-span-7 bg-white/14 backdrop-blur-xl border border-white/25 rounded-[2.5rem] p-7 shadow-lg shadow-black/10">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
                  Les points clés
                </h2>

                <ul className="mt-5 space-y-3 text-gray-600 text-lg leading-relaxed">
                  <li className="flex gap-3">
                    <span className="mt-2 w-2 h-2 rounded-full bg-[#4AA171]" />
                    <span>
                      <strong>Origine :</strong> projet d’école (spécialité S3E) → obligation de proposer une innovation utile et réaliste.
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <span className="mt-2 w-2 h-2 rounded-full bg-[#4AA171]" />
                    <span>
                      <strong>Déclencheur :</strong> une amie commune a eu un accident de voiture et s’est retrouvée paraplégique.
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <span className="mt-2 w-2 h-2 rounded-full bg-[#4AA171]" />
                    <span>
                      <strong>Idée :</strong> un GPS interactif orienté accessibilité, pour aider les PMR à se déplacer plus librement avec moins d’imprévus.
                    </span>
                  </li>
                </ul>

                {/* IMAGE PLACEHOLDER #1 */}
                {/*
                <div className="mt-7 rounded-[2rem] overflow-hidden border border-white/25 bg-white/10">
                  <img
                    src="/images/projet_origine.jpg"
                    alt="Origine du projet PIAF"
                    className="w-full h-[240px] md:h-[320px] object-cover"
                  />
                </div>
                */}
              </div>

              <div className="lg:col-span-5 space-y-6">
                <div className="bg-white/14 backdrop-blur-xl border border-white/25 rounded-[2.5rem] p-7 shadow-lg shadow-black/10">
                  <div className="flex items-center gap-2 text-[#4AA171] font-bold mb-2">
                    <Quote className="w-4 h-4" />
                    Notre objectif
                  </div>
                  <p className="text-gray-600 leading-relaxed text-lg">
                    Rendre la ville plus lisible et les trajets plus prévisibles, pour limiter le stress et les mauvaises surprises au quotidien.
                  </p>
                </div>

                <div className="bg-white/14 backdrop-blur-xl border border-white/25 rounded-[2.5rem] p-7 shadow-lg shadow-black/10">
                  <div className="flex items-center gap-2 text-[#4AA171] font-bold mb-2">
                    <BadgeCheck className="w-4 h-4" />
                    Ce qui a tout accéléré
                  </div>
                  <p className="text-gray-600 leading-relaxed text-lg">
                    La reconnaissance officielle via le Challenge Innovation : un passage net de “l’idée” au “projet”.
                  </p>

                  {/* IMAGE PLACEHOLDER #2 */}
                  {/*
                  <div className="mt-6 rounded-[2rem] overflow-hidden border border-white/25 bg-white/10">
                    <img
                      src="/images/projet_paris_ministere.jpg"
                      alt="Remise de prix au ministère"
                      className="w-full h-[200px] object-cover"
                    />
                  </div>
                  */}
                </div>
              </div>
            </div>

            {/* SECTION VALIDATION (3 cases par points) */}
            <div className="mt-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">
                Validation officielle
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Case 1 */}
                <div className="bg-white/14 backdrop-blur-xl border border-white/25 rounded-[2rem] p-6 shadow-lg shadow-black/10">
                  <div className="flex items-center gap-3 mb-3 text-[#4AA171]">
                    <Trophy className="w-5 h-5" />
                    <h3 className="font-bold text-gray-800">Le Challenge (État français)</h3>
                  </div>

                  <p className="text-gray-600 leading-relaxed">
                    Candidature au <strong>Challenge Innovation – Sécurité routière</strong>, porté par l’État français.
                  </p>

                  <ul className="mt-4 space-y-2 text-gray-600">
                    <li className="flex gap-3">
                      <span className="mt-2 w-2 h-2 rounded-full bg-[#4AA171]" />
                      <span>Cadre officiel, exigences claires et orientées impact.</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="mt-2 w-2 h-2 rounded-full bg-[#4AA171]" />
                      <span>Une étape clé pour structurer notre proposition.</span>
                    </li>
                  </ul>

                  <a
                    href="https://www.securite-routiere.gouv.fr/challenge-innovation/candidater-au-challenge-innovation"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-flex items-center gap-2 text-[#4AA171] font-bold hover:underline"
                  >
                    <LinkIcon className="w-4 h-4" />
                    Page officielle du Challenge
                  </a>
                </div>

                {/* Case 2 */}
                <div className="bg-white/14 backdrop-blur-xl border border-white/25 rounded-[2rem] p-6 shadow-lg shadow-black/10">
                  <div className="flex items-center gap-3 mb-3 text-[#4AA171]">
                    <HeartHandshake className="w-5 h-5" />
                    <h3 className="font-bold text-gray-800">Le pitch (jury officiel)</h3>
                  </div>

                  <p className="text-gray-600 leading-relaxed">
                    Présentation en visioconférence : on transforme l’idée en démonstration claire.
                  </p>

                  <ul className="mt-4 space-y-2 text-gray-600">
                    <li className="flex gap-3">
                      <span className="mt-2 w-2 h-2 rounded-full bg-[#4AA171]" />
                      <span>Problème : accessibilité variable, imprévus fréquents selon les rues.</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="mt-2 w-2 h-2 rounded-full bg-[#4AA171]" />
                      <span>Résultat : <strong>Top 3</strong> + invitation à Paris.</span>
                    </li>
                  </ul>
                </div>

                {/* Case 3 */}
                <div className="bg-white/14 backdrop-blur-xl border border-white/25 rounded-[2rem] p-6 shadow-lg shadow-black/10">
                  <div className="flex items-center gap-3 mb-3 text-[#4AA171]">
                    <Rocket className="w-5 h-5" />
                    <h3 className="font-bold text-gray-800">1er prix (au ministère)</h3>
                  </div>

                  <p className="text-gray-600 leading-relaxed">
                    Remise de prix <strong>au ministère</strong> à Paris : PIAF remporte le <strong>1er prix</strong>.
                  </p>

                  <ul className="mt-4 space-y-2 text-gray-600">
                    <li className="flex gap-3">
                      <span className="mt-2 w-2 h-2 rounded-full bg-[#4AA171]" />
                      <span>Dotation : <strong>12 000€</strong> pour accélérer la concrétisation.</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="mt-2 w-2 h-2 rounded-full bg-[#4AA171]" />
                      <span>Déclic : passage à une vraie trajectoire produit.</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* CONCLUSION */}
            <div className="mt-12 bg-white/14 backdrop-blur-xl border border-white/25 rounded-[2.5rem] p-7 shadow-lg shadow-black/10">
              <h3 className="text-xl md:text-2xl font-bold text-gray-800">Et maintenant ?</h3>
              <p className="mt-3 text-gray-600 leading-relaxed text-lg max-w-4xl">
                Notre priorité : transformer PIAF en une expérience simple et fiable — claire dès la première utilisation, et pensée pour aider à se déplacer avec plus de confiance.
              </p>
            </div>

            {/* CTA */}
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
    </div>
  );
}
