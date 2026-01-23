import React from "react";
import { SecondaryBackground } from "./ui/SecondaryBackground";

export function ProjectPage() {
  return (
    <div className="min-h-screen relative overflow-hidden bg-white px-4 py-10">
      <SecondaryBackground variant="project" />

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
            Découvrir le projet PIAF
          </h1>

          <p className="text-lg md:text-xl text-gray-600 leading-relaxed mb-8">
            PIAF est né d’un projet d’école (spécialité S3E) et d’une envie simple :
            rendre les déplacements en ville plus accessibles et plus prévisibles.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white/55 backdrop-blur-md border border-white/60 rounded-[2rem] p-6 shadow-lg">
              <h2 className="text-xl font-bold text-gray-800 mb-2">Origine</h2>
              <p className="text-gray-600 leading-relaxed">
                Une innovation à concevoir dans notre spécialité. On a choisi un sujet à impact direct,
                ancré dans le réel.
              </p>

              {/* TEMPLATE IMAGE */}
              {/*
              <img src="/images/placeholder_origine.jpg" alt="" className="mt-5 rounded-2xl w-full" />
              */}
            </div>

            <div className="bg-white/55 backdrop-blur-md border border-white/60 rounded-[2rem] p-6 shadow-lg">
              <h2 className="text-xl font-bold text-gray-800 mb-2">Déclencheur humain</h2>
              <p className="text-gray-600 leading-relaxed">
                Une amie commune a eu un accident de voiture et s’est retrouvée paraplégique.
                Ça nous a poussé à chercher une solution concrète.
              </p>
            </div>

            <div className="bg-white/55 backdrop-blur-md border border-white/60 rounded-[2rem] p-6 shadow-lg">
              <h2 className="text-xl font-bold text-gray-800 mb-2">Le Challenge Innovation</h2>
              <p className="text-gray-600 leading-relaxed">
                Quelques mois plus tard, on candidate au concours encadré par l’État français
                dans le domaine de la sécurité routière.
              </p>

              <a
                href="https://www.securite-routiere.gouv.fr/challenge-innovation/candidater-au-challenge-innovation"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-4 font-bold text-[#4AA171] hover:underline"
              >
                Voir la page officielle →
              </a>
            </div>

            <div className="bg-white/55 backdrop-blur-md border border-white/60 rounded-[2rem] p-6 shadow-lg">
              <h2 className="text-xl font-bold text-gray-800 mb-2">Remise de prix au ministère</h2>
              <p className="text-gray-600 leading-relaxed">
                Après un pitch devant le jury, on apprend qu’on est Top 3, puis à Paris :
                1er prix et une dotation de 12 000€.
              </p>
            </div>
          </div>

          <div className="mt-10 bg-white/55 backdrop-blur-md border border-white/60 rounded-[2rem] p-6 shadow-lg">
            <h2 className="text-xl font-bold text-gray-800 mb-2">Aujourd’hui</h2>
            <p className="text-gray-600 leading-relaxed">
              PIAF est passé d’une idée à un projet concret. Notre objectif : proposer une application
              fiable, simple et utile, qui facilite la mobilité au quotidien.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
