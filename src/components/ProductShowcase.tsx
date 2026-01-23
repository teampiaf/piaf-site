import React from "react";

export function ProductShowcase() {
  return (
    <section className="py-12 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="relative bg-[#4AA171] rounded-[3rem] md:rounded-[4rem] p-8 md:p-20 overflow-hidden text-white shadow-2xl shadow-[#4AA171]/20">
          <div className="absolute top-0 right-0 w-[35rem] h-[35rem] bg-yellow-100 opacity-20 mix-blend-overlay rounded-full blur-[80px] -translate-y-1/2 translate-x-1/3" />
          <div className="absolute bottom-0 left-0 w-[35rem] h-[35rem] bg-emerald-900 opacity-20 mix-blend-multiply rounded-full blur-[80px] translate-y-1/3 -translate-x-1/3" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <h2 className="text-4xl md:text-6xl font-bold leading-tight">
                L'innovation au service <br />
                <span className="text-[#F9F7F2]">de votre liberté</span>
              </h2>

              {/* ✅ KIT supprimé */}
              <p className="text-lg md:text-xl text-white/90 leading-relaxed max-w-lg">
                PIAF simplifie les déplacements en ville grâce à une navigation orientée accessibilité,
                enrichie par des signalements et des validations communautaires.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                {/* ✅ Google Forms */}
                <a
                  href="https://forms.gle/q9sZciSAgYV8XawJ8"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-4 rounded-full bg-white text-[#4AA171] font-bold text-lg shadow-lg hover:shadow-xl hover:bg-gray-50 transition-all transform hover:-translate-y-1 inline-block text-center"
                >
                  Rejoindre la bêta
                </a>

                {/* ✅ Download */}
                <a
                  href="/download"
                  className="px-8 py-4 rounded-full bg-white/10 backdrop-blur-md border-2 border-white/30 text-white font-semibold shadow-lg shadow-black/10 hover:bg-white/15 hover:shadow-xl transition-all transform hover:-translate-y-1 inline-block text-center"
                >
                  Télécharger l'App
                </a>
              </div>
            </div>

            {/* Mockup */}
            <div className="relative flex justify-center lg:justify-end">
              <div className="relative w-full max-w-md transform rotate-3 hover:rotate-0 transition-transform duration-500 ease-out">
                <img
                  src="/images/mockup_3D_navigation.png"
                  alt="Interface Application PIAF"
                  className="w-full h-auto object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
