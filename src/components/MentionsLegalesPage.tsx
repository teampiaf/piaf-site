import React from "react";
import { ArrowLeft } from "lucide-react";
import { SecondaryBackground } from "./ui/SecondaryBackground";

export function MentionsLegalesPage() {
  return (
    <div className="min-h-screen relative overflow-hidden font-sans selection:bg-gray-50 selection:text-[#4AA171]">
      <SecondaryBackground variant="project" />

      {/* Bouton retour (haut gauche, hors bulle) */}
      <a
        href="/"
        className="absolute top-6 left-4 md:top-8 md:left-8 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/45 backdrop-blur-xl border border-white/35 text-gray-700 hover:text-[#4AA171] transition shadow-md shadow-black/10 z-20"
      >
        <ArrowLeft className="w-4 h-4" />
        Retour
      </a>

      <div className="relative z-10 px-4 md:px-8 py-16 max-w-5xl mx-auto">
        <div className="bg-white/16 backdrop-blur-2xl backdrop-saturate-150 rounded-[2.5rem] md:rounded-[3rem] p-8 md:p-12 shadow-2xl shadow-black/10 border border-white/25">
          <h1 className="text-3xl md:text-5xl font-bold text-gray-800 mb-8">
            Mentions légales
          </h1>

          <div className="space-y-10 text-left text-gray-800/90 leading-relaxed">
            {/* 1) Éditeur */}
            <section>
              <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-3">
                1) Éditeur du site
              </h2>
              <p>
                <strong>Association PIAF</strong> (association loi 1901)
                <br />
                <strong>SIRET :</strong> 988 846 408 00017
                <br />
                <strong>Siège social :</strong> 7 rue Saint Henri, 31000 Toulouse, Appt 10
                <br />
                <strong>Email :</strong> piaf.contact@gmail.com
                <br />
                <strong>Directeur / responsable de publication :</strong> Orion PRUDHOMME (Président)
              </p>
            </section>

            {/* 2) Objet du site */}
            <section>
              <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-3">
                2) Objet du site
              </h2>
              <p>
                Le site <strong>PIAF</strong> est un <strong>site vitrine</strong> présentant le projet
                et renvoyant vers des liens de téléchargement (App Store / Google Play) lorsque
                l’application est disponible. Aucune vente n’est réalisée directement sur ce site.
              </p>
            </section>

            {/* 3) Objet de l'association */}
            <section>
              <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-3">
                3) Objet de l’association
              </h2>
              <p>
                Favoriser l’inclusion et l’autonomie des personnes à mobilité réduite (PMR) à travers
                le développement, la promotion et la diffusion de solutions technologiques innovantes,
                notamment via une application mobile.
              </p>
            </section>

            {/* 4) Direction / Bureau */}
            <section>
              <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-3">
                4) Direction de l’association
              </h2>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Président :</strong> Orion PRUDHOMME</li>
                <li><strong>Vice-président :</strong> Rafael RACZ</li>
                <li><strong>Secrétaire :</strong> Haitam GRINE</li>
                <li><strong>Trésorier :</strong> Julien APRIN</li>
              </ul>
              <p className="mt-3 text-gray-700/90">
                (Mandat : 1 an, renouvelable.)
              </p>
            </section>

            {/* 5) Hébergement */}
            <section>
              <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-3">
                5) Hébergement
              </h2>
              <p>
                Le site est hébergé par <strong>Vercel Inc.</strong>
                <br />
                Adresse : 340 S Lemon Ave #4133, Walnut, CA 91789, USA
                <br />
                Site : <strong>vercel.com</strong>
              </p>
            </section>

            {/* 6) Propriété intellectuelle */}
            <section>
              <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-3">
                6) Propriété intellectuelle
              </h2>
              <p>
                L’ensemble des contenus (textes, visuels, logos, maquettes, éléments graphiques,
                vidéos, code, etc.) est protégé. Toute reproduction, représentation, modification ou
                diffusion, totale ou partielle, sans autorisation préalable écrite de l’éditeur, est interdite.
              </p>
            </section>

            {/* 7) Liens externes */}
            <section>
              <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-3">
                7) Liens externes (stores & réseaux)
              </h2>
              <p>
                Le site peut contenir des liens vers des sites tiers (App Store, Google Play, réseaux sociaux).
                L’association n’exerce aucun contrôle sur ces sites et décline toute responsabilité quant
                à leur contenu, leurs pratiques ou leur disponibilité.
              </p>
            </section>

            {/* 8) Données personnelles */}
            <section>
              <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-3">
                8) Données personnelles
              </h2>
              <p>
                Le site collecte des données uniquement via un formulaire <strong>Google Forms</strong>
                (donnée collectée : <strong>adresse email</strong>).
              </p>
              <ul className="list-disc pl-6 mt-3 space-y-2">
                <li><strong>Finalité :</strong> répondre aux demandes et assurer le suivi des échanges liés au projet PIAF.</li>
                <li><strong>Destinataires :</strong> Association PIAF (via Google Forms).</li>
                <li><strong>Durée de conservation :</strong> 12 mois après le dernier contact (sauf obligation légale contraire).</li>
                <li><strong>Exercice des droits :</strong> contactez <strong>piaf.contact@gmail.com</strong>.</li>
              </ul>
            </section>

            {/* 9) Cookies / analytics */}
            <section>
              <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-3">
                9) Cookies / mesure d’audience
              </h2>
              <p>
                Le site utilise des traceurs de mesure d’audience (ex : <strong>Google Analytics</strong> et/ou{" "}
                <strong>Vercel Analytics</strong>). Un <strong>bandeau de consentement cookies</strong> est affiché
                lors de votre première visite pour accepter/refuser les traceurs non essentiels.
              </p>
            </section>

            {/* 10) Historique de dénomination */}
            <section>
              <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-3">
                10) Historique de dénomination
              </h2>
              <p>
                L’association a adopté la dénomination <strong>« PIAF »</strong> le <strong>05/01/2026</strong>,
                en remplacement de <strong>« MOBILITY »</strong>.
              </p>
            </section>

            {/* 11) Responsabilité */}
            <section>
              <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-3">
                11) Responsabilité
              </h2>
              <p>
                L’association s’efforce de fournir des informations exactes et à jour, sans garantir l’absence
                d’erreurs. Elle ne pourra être tenue responsable en cas d’indisponibilité du site, de
                dysfonctionnement, ou de dommages indirects liés à son utilisation.
              </p>
            </section>

            {/* 12) Contact */}
            <section>
              <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-3">
                12) Contact
              </h2>
              <p>
                Pour toute question : <strong>piaf.contact@gmail.com</strong>
              </p>
            </section>
          </div>
        </div>

        <p className="mt-10 text-center text-gray-600/70 text-sm">
          © {new Date().getFullYear()} PIAF — Mentions légales
        </p>
      </div>
    </div>
  );
}
