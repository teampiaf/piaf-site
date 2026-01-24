import React from "react";
import { ArrowLeft } from "lucide-react";
import { SecondaryBackground } from "./ui/SecondaryBackground";

export function MentionsLegalesPage() {
  return (
    <div className="min-h-screen relative overflow-hidden font-sans selection:bg-gray-50 selection:text-[#4AA171]">
      <SecondaryBackground variant="project" />

      {/* Bouton retour (en haut à gauche de la page) */}
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

          <div className="space-y-10 text-left text-gray-700/90 leading-relaxed">
            <section>
              <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-3">
                1) Éditeur du site
              </h2>
              <p>
                <strong>PIAF</strong> — [Projet étudiant / Association / Société]
                <br />
                Responsable de publication : <strong>[Nom Prénom]</strong> — [Rôle]
                <br />
                Adresse : <strong>[Adresse complète]</strong>
                <br />
                Email : <strong>piaf.contact@gmail.com</strong>
                <br />
                Téléphone : <strong>[Optionnel]</strong>
                <br />
                SIRET / RCS : <strong>[Si applicable]</strong>
                <br />
                TVA intracommunautaire : <strong>[Si applicable]</strong>
              </p>
            </section>

            <section>
              <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-3">
                2) Objet du site
              </h2>
              <p>
                Le site <strong>PIAF</strong> est un <strong>site vitrine</strong> présentant le
                projet et renvoyant vers des plateformes de téléchargement (App Store / Google
                Play) lorsque l’application est disponible. Aucune vente n’est réalisée
                directement sur ce site.
              </p>
            </section>

            <section>
              <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-3">
                3) Hébergement
              </h2>
              <p>
                Le site est hébergé par <strong>Vercel Inc.</strong>
                <br />
                Adresse : 340 S Lemon Ave #4133, Walnut, CA 91789, USA
                <br />
                Site : <strong>vercel.com</strong>
              </p>
            </section>

            <section>
              <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-3">
                4) Propriété intellectuelle
              </h2>
              <p>
                L’ensemble des contenus du site (textes, visuels, logos, maquettes, éléments
                graphiques, code, etc.) est protégé. Toute reproduction, modification ou diffusion
                sans autorisation préalable écrite de l’éditeur est interdite.
              </p>
            </section>

            <section>
              <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-3">
                5) Liens externes (App Store / Google Play et réseaux)
              </h2>
              <p>
                Le site peut contenir des liens vers des sites tiers (App Store, Google Play,
                réseaux sociaux). L’éditeur n’exerce aucun contrôle sur ces sites et décline toute
                responsabilité quant à leur contenu, leurs pratiques ou leur disponibilité.
              </p>
            </section>

            <section>
              <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-3">
                6) Données personnelles
              </h2>
              <p>
                Le site peut collecter des données uniquement via :{" "}
                <strong>[ex : formulaire / email / Google Forms]</strong>.
              </p>
              <ul className="list-disc pl-6 mt-3 space-y-2">
                <li>
                  <strong>Finalité :</strong> répondre aux demandes et échanges liés au projet PIAF.
                </li>
                <li>
                  <strong>Base légale :</strong> intérêt légitime et/ou consentement lorsque requis.
                </li>
                <li>
                  <strong>Durée de conservation :</strong> <strong>[ex : 12 mois]</strong> après le
                  dernier contact (sauf obligation légale contraire).
                </li>
                <li>
                  <strong>Destinataires :</strong> équipe PIAF et prestataires strictement nécessaires.
                </li>
              </ul>
              <p className="mt-4">
                <strong>Vos droits :</strong> accès, rectification, effacement, opposition, limitation,
                portabilité (selon cas). Contact : <strong>piaf.contact@gmail.com</strong>.
              </p>
            </section>

            <section>
              <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-3">
                7) Cookies / traceurs
              </h2>
              <p>
                Le site peut utiliser des cookies/traceurs nécessaires au fonctionnement et/ou de
                mesure d’audience. Si des traceurs soumis au consentement sont utilisés, un bandeau
                de gestion du consentement est affiché lors de votre première visite.
              </p>
            </section>

            <section>
              <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-3">
                8) Responsabilité
              </h2>
              <p>
                L’éditeur met tout en œuvre pour fournir des informations exactes et à jour, sans
                garantir l’absence d’erreurs. L’éditeur ne pourra être tenu responsable en cas
                d’indisponibilité du site ou de dommages indirects liés à son utilisation.
              </p>
            </section>

            <section>
              <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-3">
                9) Contact
              </h2>
              <p>
                Pour toute question : <strong>piaf.contact@gmail.com</strong>
              </p>
            </section>
          </div>
        </div>

        <p className="mt-10 text-center text-gray-600/70 text-sm">
          © 2026 PIAF — Mentions légales
        </p>
      </div>
    </div>
  );
}
