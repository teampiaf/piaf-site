import React from "react";

interface BlobProps {
  className?: string;
  color?: string;
}

export function Blob({ className = "", color = "bg-[#4AA171]/10" }: BlobProps) {
  return (
    <div
      className={`absolute rounded-[60%_40%_30%_70%/60%_30%_70%_40%] mix-blend-multiply filter blur-xl opacity-70 animate-blob ${color} ${className}`}
    />
  );
}
