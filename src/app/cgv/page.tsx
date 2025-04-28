import React from 'react';
import Link from 'next/link';

export const metadata = {
  title: "Conditions Générales de Vente (CGV) | Portfolio",
  description: "Conditions Générales de Vente de Amdjad AHMOD ALI, prestataire en formation, conseil et développement numérique.",
};

export default function CGVPage() {
  return (
    <main className="pt-24 pb-16 min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-8">
          <h1 className="text-3xl font-bold mb-6 text-gray-800 dark:text-white">
            Conditions Générales de Vente (CGV)
          </h1>

          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-3 text-gray-800 dark:text-white">
              Prestataire
            </h2>
            <p className="text-gray-700 dark:text-gray-300 mb-2">Amdjad AHMOD ALI</p>
            <p className="text-gray-700 dark:text-gray-300 mb-2">Micro-entreprise – SIRET 94376857200019</p>
            <p className="text-gray-700 dark:text-gray-300 mb-2">Email : amdjad.freelance@gmail.com</p>
            <p className="text-gray-700 dark:text-gray-300">TVA non applicable, art. 293 B du CGI.</p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-3 text-gray-800 dark:text-white">
              Objet
            </h2>
            <p className="text-gray-700 dark:text-gray-300 mb-2">Les présentes CGV régissent la vente de prestations de :</p>
            <ul className="list-disc ml-5 text-gray-700 dark:text-gray-300">
              <li className="mb-1">Formation professionnelle et individuelle,</li>
              <li className="mb-1">Conseil aux entreprises et particuliers,</li>
              <li>Développement et production numérique (sites web, applications, logiciels).</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-3 text-gray-800 dark:text-white">
              Commande
            </h2>
            <p className="text-gray-700 dark:text-gray-300 mb-2">Toute commande est confirmée par signature du devis ou acceptation écrite (email).</p>
            <p className="text-gray-700 dark:text-gray-300">Pour les particuliers, un délai de rétractation de 14 jours est applicable sauf si la prestation débute avant la fin de ce délai avec l&apos;accord du client.</p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-3 text-gray-800 dark:text-white">
              Prix et Paiement
            </h2>
            <p className="text-gray-700 dark:text-gray-300 mb-2">Les prix sont exprimés en euros et hors taxes.</p>
            <p className="text-gray-700 dark:text-gray-300 mb-2">Les paiements s&apos;effectuent par virement bancaire.</p>
            <p className="text-gray-700 dark:text-gray-300">Délai de paiement : immédiat pour les particuliers, 30 jours pour les professionnels sauf mention contraire.</p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-3 text-gray-800 dark:text-white">
              Droit de Rétractation (BtoC uniquement)
            </h2>
            <p className="text-gray-700 dark:text-gray-300 mb-2">Conformément aux articles L.221-18 et suivants du Code de la consommation, le client particulier dispose d&apos;un délai de rétractation de 14 jours.</p>
            <p className="text-gray-700 dark:text-gray-300">Le client peut demander à ce que l&apos;exécution de la prestation commence avant la fin du délai ; dans ce cas, le droit de rétractation est limité aux prestations non exécutées.</p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-3 text-gray-800 dark:text-white">
              Retard de Paiement
            </h2>
            <p className="text-gray-700 dark:text-gray-300">Toute somme non payée à l&apos;échéance entraîne l&apos;application de pénalités de retard égales à 3 fois le taux d&apos;intérêt légal, ainsi qu&apos;une indemnité forfaitaire de 40 € pour frais de recouvrement (art. D.441-5 du Code de commerce).</p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-3 text-gray-800 dark:text-white">
              Propriété Intellectuelle
            </h2>
            <p className="text-gray-700 dark:text-gray-300 mb-2">Les livrables restent la propriété du prestataire jusqu&apos;au paiement intégral de la facture.</p>
            <p className="text-gray-700 dark:text-gray-300">Après paiement, le client bénéficie d&apos;un droit d&apos;usage personnel non exclusif sur les livrables.</p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-3 text-gray-800 dark:text-white">
              Responsabilité
            </h2>
            <p className="text-gray-700 dark:text-gray-300 mb-2">Le prestataire est responsable uniquement en cas de faute prouvée et dans les limites convenues contractuellement.</p>
            <p className="text-gray-700 dark:text-gray-300">Il ne pourra être tenu responsable des problèmes résultant de l&apos;intervention de tiers ou de la force majeure.</p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-3 text-gray-800 dark:text-white">
              Médiation de la Consommation
            </h2>
            <p className="text-gray-700 dark:text-gray-300">En cas de litige, le consommateur peut saisir gratuitement le médiateur de la consommation CNPM Mediation Consommation : <a href="https://www.cnpm-mediation-consommation.eu" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">CNPM Mediation consommation</a></p>
          </section>

          <div className="mt-10">
            <Link 
              href="/"
              className="px-6 py-2 rounded-full bg-blue-600 text-white font-medium hover:bg-blue-700 transition-colors shadow-sm"
            >
              Retour à l&apos;accueil
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
