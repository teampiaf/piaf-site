import React from "react";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { Button } from "./ui/Button";
import { SecondaryBackground } from "./ui/SecondaryBackground";

export function ProjectPage() {
  return (
    <div className="min-h-screen relative overflow-hidden font-sans selection:bg-gray-50 selection:text-[#4AA171]">
      <SecondaryBackground variant="project" />

      {/* Bouton retour */}
      <a
        href="/"
        className="absolute top-6 left-6 z-20 inline-flex items-center justify-center rounded-full bg-white/60 backdrop-blur-md border border-white/60 shadow-md hover:shadow-lg transition-all hover:-translate-y-0.5 w-11 h-11"
        aria-label="Retour"
      >
        <ArrowLeft className="w-5 h-5 text-gray-700" />
      </a>

      <div className="relative z-10 px-4 md:px-8 py-12 max-w-5xl mx-auto">
        {/* Intro */}
        <div className="bg-white/50 backdrop-blur-md border border-white/60 shadow-xl rounded-[2.5rem] p-6 md:p-10">
          <h1 className="text-3xl md:text-5xl font-bold text-gray-800 mb-4">
            Découvrir le projet
          </h1>
          <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
            PIAF est né d’un projet d’école en S3E, porté par une motivation
            simple : aider concrètement les personnes à mobilité réduite à se
            déplacer plus librement.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mt-8">
            <a href="/download" className="no-underline">
              <Button icon>Télécharger l'app</Button>
            </a>
            <a href="/how-it-works" className="no-underline">
              <Button variant="secondary">Comment ça marche ?</Button>
            </a>
          </div>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
          <div className="bg-white/45 backdrop-blur-md border border-white/60 shadow-lg rounded-[2.5rem] p-6 md:p-8">
            <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-3">
              Notre déclencheur
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Une amie commune a été victime d’un accident de voiture et s’est
              retrouvée paraplégique. On s’est demandé : “comment on peut
              l’aider, pour de vrai ?”
            </p>

            {/* TEMPLATE IMAGE */}
            {/*
              <img
                src="/images/placeholder_trigger.png"
                alt="Déclencheur du projet"
                className="mt-5 rounded-2xl w-full"
              />
            */}
          </div>

          <div className="bg-white/45 backdrop-blur-md border border-white/60 shadow-lg rounded-[2.5rem] p-6 md:p-8">
            <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-3">
              Le Challenge Innovation
            </h2>
            <p className="text-gray-600 leading-relaxed">
              On a candidaté au concours encadré par le ministère français.
              Résultat : Top 3, invitation à Paris… puis 1er prix.
            </p>

            <a
              href="https://www.securite-routiere.gouv.fr/challenge-innovation/candidater-au-challenge-innovation"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex items-center gap-2 text-[#4AA171] font-semibold hover:underline"
            >
              Voir la page officielle <ExternalLink className="w-4 h-4" />
            </a>
          </div>

          <div className="bg-white/45 backdrop-blur-md border border-white/60 shadow-lg rounded-[2.5rem] p-6 md:p-8">
            <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-3">
              La remise de prix
            </h2>
            <p className="text-gray-600 leading-relaxed">
              La remise a eu lieu au ministère : on a compris que ce n’était pas
              “juste une idée”, mais un vrai projet à construire.
            </p>

            {/* TEMPLATE IMAGE */}
            {/*
              <img
                src="/images/placeholder_ministere.png"
                alt="Remise de prix"
                className="mt-5 rounded-2xl w-full"
              />
            */}
          </div>

          <div className="bg-white/45 backdrop-blur-md border border-white/60 shadow-lg rounded-[2.5rem] p-6 md:p-8">
            <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-3">
              Où on va
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Notre objectif : faire de PIAF une référence de navigation
              accessible, utile au quotidien et portée par sa communauté.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
