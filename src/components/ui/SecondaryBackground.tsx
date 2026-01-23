import React from "react";

export function SecondaryBackground({
  variant = "project",
}: {
  variant?: "project" | "howitworks" | "download";
}) {
  const isHow = variant === "howitworks";
  const isDownload = variant === "download";

  const green = isHow
    ? "rgba(74,161,113,0.16)"
    : isDownload
    ? "rgba(74,161,113,0.18)"
    : "rgba(74,161,113,0.13)";

  const beige = isHow
    ? "rgba(245,242,234,0.80)"
    : isDownload
    ? "rgba(249,247,242,0.92)"
    : "rgba(249,247,242,0.85)";

  return (
    <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
      {/* Base */}
      <div
        className="absolute inset-0"
        style={{
          background: `radial-gradient(1200px 600px at 20% 10%, ${green}, transparent 55%),
                       radial-gradient(1000px 500px at 85% 30%, rgba(217,243,231,0.35), transparent 60%),
                       linear-gradient(to bottom, ${beige}, white)`,
        }}
      />

      {/* Formes arrondies (blobs) */}
      <div className="absolute -top-24 -left-24 w-[28rem] h-[28rem] rounded-full bg-[#4AA171]/15 blur-[70px]" />
      <div className="absolute top-24 -right-28 w-[32rem] h-[32rem] rounded-full bg-emerald-300/20 blur-[90px]" />
      <div className="absolute -bottom-40 left-1/3 w-[34rem] h-[34rem] rounded-full bg-yellow-100/30 blur-[110px]" />

      {/* Grid subtil */}
      <div
        className="absolute inset-0 opacity-[0.10]"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(74,161,113,0.18) 1px, transparent 1px), linear-gradient(to bottom, rgba(74,161,113,0.18) 1px, transparent 1px)",
          backgroundSize: "84px 84px",
        }}
      />

      {/* Flow lines */}
      <svg
        className="absolute -bottom-20 left-1/2 w-[1300px] -translate-x-1/2 opacity-40"
        viewBox="0 0 1200 240"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M-50 160 C 150 90, 350 210, 550 140 C 750 70, 950 200, 1250 110"
          stroke="#4AA171"
          strokeWidth="14"
          strokeLinecap="round"
          opacity="0.22"
        />
        <path
          d="M-80 200 C 140 120, 360 250, 580 160 C 800 70, 980 230, 1280 140"
          stroke="#9BE3C1"
          strokeWidth="10"
          strokeLinecap="round"
          opacity="0.20"
        />
        <path
          d="M-60 120 C 170 40, 380 190, 610 120 C 840 50, 990 150, 1260 70"
          stroke="#9BE3C1"
          strokeWidth="6"
          strokeLinecap="round"
          opacity="0.12"
        />
      </svg>
    </div>
  );
}
