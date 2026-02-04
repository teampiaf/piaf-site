import React from "react";
import {
  ArrowLeft,
  Sparkles,
  MapPin,
  Users,
  AlertTriangle,
  CheckCircle2,
} from "lucide-react";
import { SecondaryBackground } from "./ui/SecondaryBackground";

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

        {/* BLOC PRINCIPAL (Liquid Glass) */}
        <div className="mt-6 relative bg-white/20 backdrop-blur-2xl backdrop-saturate-150 rounded-[3rem] md:rounded-[4rem] p-8 md:p-14 border border-white/30 shadow-2xl shadow-black/10 overflow-hidden">
          {/* Lumières internes pour relief */}
          <div className="absolute -top-24 -right-24 w-[22rem] h-[22rem] bg-emerald-200/35 rounded-full blur-[90px]" />
          <div className="absolute -bottom-24 -left-24 w-[22rem] h-[22rem] bg-yellow-100/35 rounded-full blur-[90px]" />

          <div className="relative z-10">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/40 backdrop-blur-xl border border-white/30 text-[#4AA171] font-bold text-sm mb-6 shadow-sm shadow-black/10">
              <Sparkles className="w-4 h-4" />
              Comment ça marche ?
            </div>

            <h1 className="text-4xl md:text-6xl font-bold text-gray-800 leading-tight">
              Le fonctionnement de <span className="text-[#4AA171]">PIAF</span>
            </h1>

            <p className="mt-5 text-lg md:text-xl text-gray-600 leading-relaxed max-w-3xl">
              Tu signales, la communauté confirme, et PIAF te guide en privilégiant les trajets les plus fluides.
              <br className="hidden md:block" />
              <strong>Moins d’imprévus, plus d’autonomie.</strong>
            </p>

            {/* STEPS */}
            <div className="mt-10 space-y-8">
              {/* 1) Signalements */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-center">
                {/* Texte */}
                <div className="lg:col-span-6 bg-white/15 backdrop-blur-xl border border-white/25 rounded-[2.5rem] p-7 shadow-lg shadow-black/10">
                  <div className="flex items-center gap-3 text-[#4AA171] mb-3">
                    <MapPin className="w-5 h-5" />
                    <h2 className="text-xl md:text-2xl font-bold text-gray-800">
                      1) Les signalements
                    </h2>
                  </div>

                  <p className="text-gray-600 leading-relaxed text-lg">
                    Tu peux signaler en quelques secondes un obstacle ou une situation temporaire (travaux,
                    passage fermé, trottoir impraticable…). Les autres utilisateurs peuvent confirmer/actualiser
                    pour garder une donnée fiable.
                  </p>
                </div>

                {/* Image (full visible) */}
                <div className="lg:col-span-6">
                  {/* Image verticale : on voit tout, sans rognage */}
                  <div className="w-full rounded-[2.5rem] overflow-hidden">
                    <img
                      src="/images/mockup_travaux.jpg"
                      alt="Exemple de signalement (travaux)"
                      className="w-full h-[420px] sm:h-[520px] md:h-[600px] object-contain"
                    />
                  </div>
                </div>
              </div>

              {/* 2) Validation communautaire */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-center">
                {/* Image (full visible) */}
                <div className="lg:col-span-6 order-2 lg:order-1">
                  <div className="w-full rounded-[2.5rem] overflow-hidden">
                    <img
                      src="/images/mockup_trajet.jpg"
                      alt="Exemple de trajet et navigation"
                      className="w-full h-[420px] sm:h-[520px] md:h-[600px] object-contain"
                    />
                  </div>
                </div>

                {/* Texte */}
                <div className="lg:col-span-6 order-1 lg:order-2 bg-white/15 backdrop-blur-xl border border-white/25 rounded-[2.5rem] p-7 shadow-lg shadow-black/10">
                  <div className="flex items-center gap-3 text-[#4AA171] mb-3">
                    <Users className="w-5 h-5" />
                    <h2 className="text-xl md:text-2xl font-bold text-gray-800">
                      2) Validation communautaire
                    </h2>
                  </div>

                  <p className="text-gray-600 leading-relaxed text-lg">
                    Plus une info est confirmée, plus elle devient prioritaire dans la navigation. Objectif :
                    éviter les “mauvaises surprises” au dernier moment.
                  </p>
                </div>
              </div>

              {/* 3) Obstacles */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-center">
                {/* Texte */}
                <div className="lg:col-span-6 bg-white/15 backdrop-blur-xl border border-white/25 rounded-[2.5rem] p-7 shadow-lg shadow-black/10">
                  <div className="flex items-center gap-3 text-[#4AA171] mb-3">
                    <AlertTriangle className="w-5 h-5" />
                    <h2 className="text-xl md:text-2xl font-bold text-gray-800">
                      3) Obstacles : anticiper plutôt que subir
                    </h2>
                  </div>

                  <p className="text-gray-600 leading-relaxed text-lg">
                    PIAF identifie les zones à risque sur l’itinéraire. Tu vois ce qui t’attend avant d’y être,
                    et tu peux choisir un passage plus fluide.
                  </p>
                </div>

                {/* Image (full visible) */}
                <div className="lg:col-span-6">
                  <div className="w-full rounded-[2.5rem] overflow-hidden">
                    <img
                      src="/images/mockup_obstacle.jpg"
                      alt="Exemple d'obstacles détectés"
                      className="w-full h-[420px] sm:h-[520px] md:h-[600px] object-contain"
                    />
                  </div>
                </div>
              </div>

              {/* 4) Facilitateurs */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-center">
                {/* Image (full visible) */}
                <div className="lg:col-span-6 order-2 lg:order-1">
                  <div className="w-full rounded-[2.5rem] overflow-hidden">
                    <img
                      src="/images/mockup_facilitateur.jpg"
                      alt="Exemple de facilitateurs (rampe, ascenseur, etc.)"
                      className="w-full h-[420px] sm:h-[520px] md:h-[600px] object-contain"
                    />
                  </div>
                </div>

                {/* Texte */}
                <div className="lg:col-span-6 order-1 lg:order-2 bg-white/15 backdrop-blur-xl border border-white/25 rounded-[2.5rem] p-7 shadow-lg shadow-black/10">
                  <div className="flex items-center gap-3 text-[#4AA171] mb-3">
                    <CheckCircle2 className="w-5 h-5" />
                    <h2 className="text-xl md:text-2xl font-bold text-gray-800">
                      4) Facilitateurs : les “bons passages”
                    </h2>
                  </div>

                  <p className="text-gray-600 leading-relaxed text-lg">
                    Au-delà d’éviter les obstacles, PIAF met en avant les passages qui facilitent réellement la
                    mobilité (rampe, accès PMR, cheminement plus large, zone plus roulante…).
                  </p>
                </div>
              </div>
            </div>

            {/* RÉSUMÉ */}
            <div className="mt-12 bg-white/15 backdrop-blur-xl border border-white/25 rounded-[2.5rem] p-7 shadow-lg shadow-black/10">
              <h3 className="text-xl md:text-2xl font-bold text-gray-800 flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-[#4AA171]" />
                En résumé
              </h3>
              <p className="mt-3 text-gray-600 leading-relaxed text-lg max-w-4xl">
                Tu signales, la communauté confirme, et PIAF te guide en privilégiant les trajets les plus fluides.
                <br className="hidden md:block" />
                <strong>Moins d’imprévus, plus d’autonomie.</strong>
              </p>
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
