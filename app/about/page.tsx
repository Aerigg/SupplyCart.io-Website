import Link from 'next/link'
import Image from 'next/image'

export default function About() {
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
            <div className="flex items-center space-x-6">
              <Link href="/#features" className="text-gray-700 hover:text-primary-600 transition">
                Features
              </Link>
              <Link href="/#preise" className="text-gray-700 hover:text-primary-600 transition">
                Preise
              </Link>
              <Link href="/kontakt" className="text-gray-700 hover:text-primary-600 transition">
                Kontakt
              </Link>
              <Link 
                href="/#preise"
                className="bg-primary-600 text-white px-4 py-2 rounded-lg hover:bg-primary-700 transition"
              >
                Jetzt kostenlos starten
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary-50 to-white">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-navy-900 mb-6">
            Über SupplyCart.io
          </h1>
          <p className="text-xl text-navy-600 mb-8">
            Die Geschichte hinter der einfachsten Lösung für interne Beschaffung
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="prose prose-lg max-w-none text-navy-600">
            <h2 className="text-3xl font-semibold text-navy-900 mb-6">Die Idee</h2>
            <p className="text-lg mb-6">
              SupplyCart.io entstand aus einem echten Problem: Wie können Teams ihre interne Beschaffung 
              so einfach gestalten wie Online-Shopping? Schluss mit Excel-Listen, E-Mail-Chaos und 
              dem Zuruf über den Flur.
            </p>

            <h2 className="text-3xl font-semibold text-navy-900 mb-6 mt-12">Unsere Mission</h2>
            <p className="text-lg mb-6">
              Wir glauben, dass jedes Unternehmen – egal ob kleines Start-up oder große Organisation – 
              Zugang zu professionellen Tools für die interne Beschaffung haben sollte. Einfach, 
              transparent und ohne komplizierte Einrichtung.
            </p>

            <div className="bg-primary-50 p-8 rounded-xl my-12">
              <h3 className="text-2xl font-semibold text-navy-900 mb-4">Drei Prinzipien leiten uns:</h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div>
                  <h4 className="text-lg font-semibold text-primary-600 mb-2">Einfachheit</h4>
                  <p>So einfach wie Amazon – ohne Schulungsaufwand</p>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-primary-600 mb-2">Klarheit</h4>
                  <p>100% Transparenz über alle Bestände und Bestellungen</p>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-primary-600 mb-2">Kontrolle</h4>
                  <p>Volle Kontrolle über Ausgaben und Prozesse</p>
                </div>
              </div>
            </div>

            <h2 className="text-3xl font-semibold text-navy-900 mb-6">Das Team</h2>
            <p className="text-lg mb-6">
              SupplyCart.io wird entwickelt von EMIT Solution unter der Leitung von Eric Menge. 
              Unser Fokus liegt darauf, praktische Software-Lösungen zu schaffen, die echte 
              Probleme lösen.
            </p>

            <h2 className="text-3xl font-semibold text-navy-900 mb-6 mt-12">Warum SupplyCart.io?</h2>
            <p className="text-lg mb-6">
              Weil interne Beschaffung nicht kompliziert sein muss. Weil jedes Team die gleichen 
              professionellen Tools verdient. Und weil wir glauben, dass Software das Leben 
              einfacher machen sollte – nicht komplizierter.
            </p>

            <div className="bg-gray-50 p-8 rounded-xl mt-12 text-center">
              <h3 className="text-2xl font-semibold text-navy-900 mb-4">
                Bereit für einfachere Beschaffung?
              </h3>
              <p className="text-lg text-navy-600 mb-6">
                Testen Sie SupplyCart.io kostenlos und erleben Sie den Unterschied.
              </p>
              <Link 
                href="/#preise"
                className="inline-block bg-primary-600 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-primary-700 transition"
              >
                Jetzt kostenlos starten
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}