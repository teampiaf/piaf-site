import React from "react";

export function HowItWorksPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#f3f7ff] to-white px-4 py-10">
      <div className="max-w-4xl mx-auto bg-white/70 backdrop-blur-md border border-white/60 rounded-[2.5rem] p-8 md:p-12 shadow-xl">
        <div className="flex items-center justify-between gap-4 mb-10">
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
          Comment ça marche ?
        </h1>

        <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
          Ici tu expliques le fonctionnement : signalements, trajets, obstacles, facilitateurs, etc.
        </p>

        {/* 🔥 Placeholder images */}
        {/* <img src="/images/..." alt="..." className="mt-10 rounded-3xl w-full" /> */}
      </div>
    </div>
  );
}
