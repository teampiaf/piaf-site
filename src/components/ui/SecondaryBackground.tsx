import React from "react";

type Variant = "project" | "howitworks" | "download" | "default";

export function SecondaryBackground({ variant = "default" }: { variant?: Variant }) {
  const base =
    variant === "project"
      ? "bg-gradient-to-b from-[#effcf6] via-[#F7F4EA] to-white"
      : variant === "howitworks"
      ? "bg-gradient-to-b from-[#E8F5EE] via-[#F7F4EA] to-white"
      : variant === "download"
      ? "bg-gradient-to-b from-[#F7F4EA] via-white to-[#effcf6]"
      : "bg-gradient-to-b from-[#effcf6] via-[#F7F4EA] to-white";

  // Traits : on garde très léger + premium
  const stripesOpacity = variant === "howitworks" ? 0.22 : 0.18;

  return (
    <div className="pointer-events-none absolute inset-0 -z-10">
      {/* Base */}
      <div className={`absolute inset-0 ${base}`} />

      {/* Traits diagonaux (très fins) */}
      <div
        className="absolute inset-0"
        style={{
          opacity: stripesOpacity,
          background:
            "repeating-linear-gradient(135deg, rgba(74,161,113,0.22) 0px, rgba(74,161,113,0.22) 1px, transparent 1px, transparent 14px)",
        }}
      />

      {/* Deuxième couche de traits plus larges (profondeur) */}
      <div
        className="absolute inset-0"
        style={{
          opacity: 0.08,
          background:
            "repeating-linear-gradient(45deg, rgba(0,0,0,0.10) 0px, rgba(0,0,0,0.10) 1px, transparent 1px, transparent 26px)",
        }}
      />

      {/* Glows / relief */}
      <div className="absolute -top-28 left-1/2 h-[520px] w-[980px] -translate-x-1/2 rotate-[-12deg] rounded-full bg-[#4AA171]/12 blur-3xl" />
      <div className="absolute top-[30%] -left-44 h-[440px] w-[440px] rounded-full bg-[#E8E4D9] opacity-70 blur-2xl" />
      <div className="absolute bottom-[-190px] right-[-190px] h-[560px] w-[560px] rounded-full bg-[#4AA171]/10 blur-3xl" />

      {/* Petites formes (accent) */}
      <div className="absolute top-24 right-10 h-20 w-20 rotate-12 rounded-3xl bg-white/35 border border-white/30 shadow-sm shadow-black/10 backdrop-blur-md" />
      <div className="absolute bottom-28 left-10 h-16 w-16 -rotate-6 rounded-full bg-white/30 border border-white/25 shadow-sm shadow-black/10 backdrop-blur-md" />
    </div>
  );
}
