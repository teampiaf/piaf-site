import React from "react";
import { ArrowLeft, Trophy, HeartHandshake, Rocket } from "lucide-react";

export function ProjectPage() {
  return (
    <section className="py-10 md:py-14 px-4 md:px-8 max-w-7xl mx-auto">
      <div className="flex items-center gap-3 mb-8">
        <a
          href="/"
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/35 backdrop-blur-xl border border-white/30 text-gray-700 hover:text-[#4AA171] transition"
        >
          <ArrowLeft className="w-4 h-4" />
          Retour
        </a>
      </div>

      <div className="bg-white/14 backdrop-blur-2xl backdrop-saturate-150 rounded-[3rem] md:rounded-[4rem] p-7 md:p-12 border border-white/25 shadow-2xl shadow-black/10">
        <h1 className="text-4xl md:text-6xl font-bold text-gray-800 leading-tight">
          Le projet <span className="text-[#4AA171]">PIAF</span>
        </h1>

        <p className="mt-6 text-lg md:text-xl text-gray-600 leading-relaxed max-w-3xl">
          PIAF est né d’un constat simple : dans la ville, l’accessibilité peut changer d’une rue à l’autre,
          et trop souvent au dernier moment. Notre objectif : redonner de la fluidité, de la confiance et
          de l’autonomie grâce à une navigation pensée pour la vraie vie.
        </p>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white/16 backdrop-blur-xl border border-white/25 rounded-[2rem] p-6">
            <div className="flex items-center gap-3 mb-3 text-[#4AA171]">
              <Trophy className="w-5 h-5" />
              <h2 className="font-bold text-gray-800">Challenge Innovation</h2>
            </div>
            <p className="text-gray-600 leading-relaxed">
              Le projet a pris une accélération majeure avec le Challenge Innovation : une validation terrain,
              des retours concrets et la preuve que l’idée répond à un besoin réel.
            </p>
          </div>

          <div className="bg-white/16 backdrop-blur-xl border border-white/25 rounded-[2rem] p-6">
            <div className="flex items-center gap-3 mb-3 text-[#4AA171]">
              <HeartHandshake className="w-5 h-5" />
              <h2 className="font-bold text-gray-800">Notre motivation</h2>
            </div>
            <p className="text-gray-600 leading-relaxed">
              PIAF est aussi une histoire humaine : l’envie de construire quelque chose d’utile, inspiré par
              une expérience proche (et cette amie commune qui nous a fait ouvrir les yeux sur le quotidien).
            </p>
          </div>

          <div className="bg-white/16 backdrop-blur-xl border border-white/25 rounded-[2rem] p-6">
            <div className="flex items-center gap-3 mb-3 text-[#4AA171]">
              <Rocket className="w-5 h-5" />
              <h2 className="font-bold text-gray-800">Où on en est</h2>
            </div>
            <p className="text-gray-600 leading-relaxed">
              Aujourd’hui, on structure l’app, on consolide les parcours, et on prépare la sortie.
              L’objectif : un service clair, fiable et agréable à utiliser au quotidien.
            </p>
          </div>
        </div>

        <div className="mt-10 flex flex-col sm:flex-row gap-4">
          <a
            href="/comment-ca-marche"
            className="px-7 py-3 rounded-full bg-white/35 backdrop-blur-xl border border-white/30 text-gray-800 hover:text-[#4AA171] transition text-center"
          >
            Voir comment ça marche
          </a>
          <a
            href="/download"
            className="px-7 py-3 rounded-full bg-[#4AA171] text-white shadow-lg shadow-black/10 hover:bg-[#3d8c60] transition text-center"
          >
            Télécharger
          </a>
        </div>
      </div>
    </section>
  );
}
