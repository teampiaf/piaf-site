import React from "react";

export function SecondaryBackground({
  variant = "project",
}: {
  variant?: "project" | "howitworks";
}) {
  const accent =
    variant === "howitworks"
      ? {
          a: "from-[#4AA171]/20",
          b: "via-[#D9F3E7]/30",
          c: "to-[#F5F2EA]/70",
          wave1: "#4AA171",
          wave2: "#7FD6AE",
        }
      : {
          a: "from-[#4AA171]/15",
          b: "via-[#E8E4D9]/50",
          c: "to-[#F5F2EA]/75",
          wave1: "#4AA171",
          wave2: "#9BE3C1",
        };

  return (
    <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
      {/* Base soft gradient */}
      <div
        className={[
          "absolute inset-0",
          "bg-gradient-to-b",
          accent.a,
          accent.b,
          accent.c,
        ].join(" ")}
      />

      {/* Relief : 2 “blobs” flous */}
      <div className="absolute -top-40 -left-40 h-[520px] w-[520px] rounded-full bg-[#4AA171]/20 blur-[90px]" />
      <div className="absolute -bottom-56 -right-56 h-[620px] w-[620px] rounded-full bg-[#D9F3E7]/40 blur-[110px]" />

      {/* Traits très subtils */}
      <div className="absolute inset-0 opacity-[0.10] [background-image:linear-gradient(to_right,#4AA171_1px,transparent_1px),linear-gradient(to_bottom,#4AA171_1px,transparent_1px)] [background-size:72px_72px]" />

      {/* Vagues en bas */}
      <svg
        className="absolute -bottom-16 left-1/2 w-[1300px] -translate-x-1/2 opacity-40"
        viewBox="0 0 1200 240"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M-50 160 C 150 90, 350 210, 550 140 C 750 70, 950 200, 1250 110"
          stroke={accent.wave1}
          strokeWidth="14"
          strokeLinecap="round"
          opacity="0.25"
        />
        <path
          d="M-80 200 C 140 120, 360 250, 580 160 C 800 70, 980 230, 1280 140"
          stroke={accent.wave2}
          strokeWidth="10"
          strokeLinecap="round"
          opacity="0.22"
        />
        <path
          d="M-60 120 C 170 40, 380 190, 610 120 C 840 50, 990 150, 1260 70"
          stroke={accent.wave2}
          strokeWidth="6"
          strokeLinecap="round"
          opacity="0.14"
        />
      </svg>
    </div>
  );
}
