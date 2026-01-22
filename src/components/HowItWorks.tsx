import React from "react";
import { ArrowLeft, Map, ShieldCheck, AlertTriangle, CheckCircle2 } from "lucide-react";

export function HowItWorksPage() {
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
          Comment ça <span className="text-[#4AA171]">marche</span> ?
        </h1>

        <p className="mt-6 text-lg md:text-xl text-gray-600 leading-relaxed max-w-3xl">
          PIAF combine une navigation piétonne pensée “accessibilité” et une couche communautaire pour
          rendre les trajets plus fluides, plus sûrs et plus prévisibles.
        </p>

        <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-white/16 backdrop-blur-xl border border-white/25 rounded-[2rem] p-6">
            <div className="flex items-center gap-3 mb-3 text-[#4AA171]">
              <Map className="w-5 h-5" />
              <h2 className="font-bold text-gray-800">Trajets piétons & itinéraires adaptés</h2>
            </div>
            <p className="text-gray-600 leading-relaxed">
              L’app propose des trajets plus cohérents avec le terrain : éviter les zones pénibles,
              privilégier les passages plus simples et améliorer la fluidité globale.
            </p>
          </div>

          <div className="bg-white/16 backdrop-blur-xl border border-white/25 rounded-[2rem] p-6">
            <div className="flex items-center gap-3 mb-3 text-[#4AA171]">
              <AlertTriangle className="w-5 h-5" />
              <h2 className="font-bold text-gray-800">Signalements : obstacles & facilitateurs</h2>
            </div>
            <p className="text-gray-600 leading-relaxed">
              La communauté peut signaler ce qui bloque (travaux, trottoir impraticable, passage fermé…)
              et aussi ce qui aide (rampe, accès dégagé, passage plus simple).
            </p>
          </div>

          <div className="bg-white/16 backdrop-blur-xl border border-white/25 rounded-[2rem] p-6">
            <div className="flex items-center gap-3 mb-3 text-[#4AA171]">
              <CheckCircle2 className="w-5 h-5" />
              <h2 className="font-bold text-gray-800">Fiabilité : validation & mise à jour</h2>
            </div>
            <p className="text-gray-600 leading-relaxed">
              Les infos gagnent en confiance quand elles sont confirmées. L’idée : réduire les mauvaises surprises
              et garder une base utile, vivante et à jour.
            </p>
          </div>

          <div className="bg-white/16 backdrop-blur-xl border border-white/25 rounded-[2rem] p-6">
            <div className="flex items-center gap-3 mb-3 text-[#4AA171]">
              <ShieldCheck className="w-5 h-5" />
              <h2 className="font-bold text-gray-800">Simplicité & sécurité</h2>
            </div>
            <p className="text-gray-600 leading-relaxed">
              PIAF vise une expérience claire : comprendre vite, agir vite, et se déplacer avec plus de sérénité.
              L’app est conçue pour être utile dès la première utilisation.
            </p>
          </div>
        </div>

        <div className="mt-10 flex flex-col sm:flex-row gap-4">
          <a
            href="/projet"
            className="px-7 py-3 rounded-full bg-white/35 backdrop-blur-xl border border-white/30 text-gray-800 hover:text-[#4AA171] transition text-center"
          >
            Découvrir le projet
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
