import Link from 'next/link'
import Image from 'next/image'

export default function Impressum() {
  return (
    <main className="min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="flex items-center">
              <Image
                src="/images/sc-logo.png"
                alt="SupplyCart.io Logo"
                width={150}
                height={40}
                className="h-8 w-auto"
                priority
              />
            </Link>
            <Link 
              href="/"
              className="text-gray-700 hover:text-primary-600 transition"
            >
              Zurück zur Startseite
            </Link>
          </div>
        </div>
      </nav>

      <section className="pt-24 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-navy-900 mb-8">Impressum</h1>
          
          <div className="prose prose-lg max-w-none text-navy-600">
            <h2 className="text-2xl font-semibold text-navy-900 mt-8 mb-4">Angaben gemäß § 5 TMG</h2>
            <p>
              EMIT Solution<br />
              Eric Menge<br />
              Ottmannshausen 68<br />
              99439 Am Ettersberg<br />
              Deutschland
            </p>

            <h2 className="text-2xl font-semibold text-navy-900 mt-8 mb-4">Kontakt</h2>
            <p>
              E-Mail: info@emit-solution.com
            </p>

            <h2 className="text-2xl font-semibold text-navy-900 mt-8 mb-4">Redaktionell verantwortlich</h2>
            <p>
              Eric Menge<br />
              Ottmannshausen 68<br />
              99439 Am Ettersberg
            </p>

            <h2 className="text-2xl font-semibold text-navy-900 mt-8 mb-4">EU-Streitschlichtung</h2>
            <p>
              Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit: 
              <a href="https://ec.europa.eu/consumers/odr/" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:underline ml-1">
                https://ec.europa.eu/consumers/odr/
              </a>
              <br />
              Unsere E-Mail-Adresse finden Sie oben im Impressum.
            </p>

            <h2 className="text-2xl font-semibold text-navy-900 mt-8 mb-4">Verbraucherstreitbeilegung/Universalschlichtungsstelle</h2>
            <p>
              Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer 
              Verbraucherschlichtungsstelle teilzunehmen.
            </p>

            <h2 className="text-2xl font-semibold text-navy-900 mt-8 mb-4">Haftung für Inhalte</h2>
            <p>
              Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den 
              allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht 
              verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen 
              zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.
            </p>

            <h2 className="text-2xl font-semibold text-navy-900 mt-8 mb-4">Haftung für Links</h2>
            <p>
              Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. 
              Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten 
              Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich.
            </p>

            <h2 className="text-2xl font-semibold text-navy-900 mt-8 mb-4">Urheberrecht</h2>
            <p>
              Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen 
              Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der 
              Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
            </p>
          </div>
        </div>
      </section>
    </main>
  )
}