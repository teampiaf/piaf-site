import React from "react";

export function SecondaryBackground({
  variant = "project",
}: {
  variant?: "home" | "project" | "howitworks" | "download";
}) {
  const isHome = variant === "home";
  const isHow = variant === "howitworks";
  const isDownload = variant === "download";

  const topWash = isHome
    ? "rgba(74,161,113,0.14)"
    : isHow
    ? "rgba(74,161,113,0.16)"
    : isDownload
    ? "rgba(74,161,113,0.18)"
    : "rgba(74,161,113,0.13)";

  const warm = isHome ? "rgba(249,247,242,0.92)" : "rgba(249,247,242,0.86)";

  return (
    <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
      {/* Base premium (moins “uni”) */}
      <div
        className="absolute inset-0"
        style={{
          background: isHome
            ? `
              radial-gradient(1200px 700px at 15% 10%, ${topWash}, transparent 55%),
              radial-gradient(900px 520px at 85% 20%, rgba(155,227,193,0.22), transparent 55%),
              radial-gradient(800px 500px at 70% 85%, rgba(255,244,214,0.35), transparent 60%),
              linear-gradient(135deg, ${warm} 0%, rgba(255,255,255,1) 55%, rgba(239,252,246,0.85) 100%)
            `
            : `
              radial-gradient(1200px 600px at 20% 10%, ${topWash}, transparent 55%),
              radial-gradient(1000px 500px at 85% 30%, rgba(217,243,231,0.35), transparent 60%),
              linear-gradient(to bottom, ${warm}, white)
            `,
        }}
      />

      {/* Vignette très légère */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/[0.03] via-transparent to-black/[0.04]" />

      {/* Blobs arrondis */}
      <div
        className={`absolute -top-24 -left-24 w-[28rem] h-[28rem] rounded-full blur-[90px] ${
          isHome ? "bg-[#4AA171]/10" : "bg-[#4AA171]/15"
        }`}
      />
      <div
        className={`absolute top-16 -right-28 w-[34rem] h-[34rem] rounded-full blur-[110px] ${
          isHome ? "bg-emerald-300/14" : "bg-emerald-300/20"
        }`}
      />
      <div
        className={`absolute -bottom-44 left-1/3 w-[36rem] h-[36rem] rounded-full blur-[120px] ${
          isHome ? "bg-yellow-100/18" : "bg-yellow-100/30"
        }`}
      />

      {/* Grille subtile */}
      <div
        className="absolute inset-0"
        style={{
          opacity: isHome ? 0.07 : 0.1,
          backgroundImage:
            "linear-gradient(to right, rgba(74,161,113,0.18) 1px, transparent 1px), linear-gradient(to bottom, rgba(74,161,113,0.18) 1px, transparent 1px)",
          backgroundSize: isHome ? "110px 110px" : "84px 84px",
        }}
      />
    </div>
  );
}
