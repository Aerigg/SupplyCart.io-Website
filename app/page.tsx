import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Image
                src="/images/sc-logo.png"
                alt="SupplyCart.io Logo"
                width={150}
                height={40}
                className="h-8 w-auto"
                priority
              />
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <Link href="#features" className="text-gray-700 hover:text-primary-600 transition">
                Features
              </Link>
              <Link href="#vorteile" className="text-gray-700 hover:text-primary-600 transition">
                Vorteile
              </Link>
              <Link href="#preise" className="text-gray-700 hover:text-primary-600 transition">
                Preise
              </Link>
              <Link 
                href="#preise" 
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
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-navy-900 mb-6">
              Interne Beschaffung
              <span className="text-primary-500 block mt-2">neu gedacht</span>
            </h1>
            <p className="text-xl text-navy-600 mb-8 max-w-3xl mx-auto">
              SupplyCart macht interne Bestellungen und Lagerverwaltung so einfach wie Online-Shopping. 
              Schluss mit Excel-Listen, E-Mail-Chaos und Zuruf über den Flur – für Unternehmen jeder Größe.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="#preise"
                className="bg-primary-600 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-primary-700 transition shadow-lg"
              >
                Jetzt kostenlos starten
              </Link>
              <Link 
                href="#features"
                className="bg-white text-primary-600 px-8 py-3 rounded-lg text-lg font-semibold hover:bg-gray-50 transition border-2 border-primary-600"
              >
                Mehr erfahren
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-navy-900 mb-4">
              Drei einfache Bereiche – ein klarer Prozess
            </h2>
            <p className="text-lg text-navy-600 max-w-2xl mx-auto">
              Von chaotischen Excel-Listen zu professioneller interner Beschaffung in wenigen Minuten
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition">
              <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Bestellportal für Mitarbeiter</h3>
              <p className="text-navy-600">
                Shop-ähnliche Oberfläche: Artikel finden, in den Warenkorb legen, Bestellanfrage stellen – einfacher geht&apos;s nicht
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition">
              <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Lagerportal für Teams</h3>
              <p className="text-navy-600">
                Zentrale Bestandsübersicht mit einfacher Tablet-Ansicht für Entnahmen und interne Umlagerungen
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition">
              <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Management-Portal für Admins</h3>
              <p className="text-navy-600">
                Die Kommandozentrale: Lieferanten pflegen, Freigaben erteilen, Kosten analysieren – volle Kontrolle
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition">
              <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Einfachheit</h3>
              <p className="text-navy-600">
                So einfach wie Amazon: Hohe Akzeptanz bei Mitarbeitern, minimaler Schulungsaufwand
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition">
              <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Klarheit</h3>
              <p className="text-navy-600">
                100% Transparenz: Jeder weiß jederzeit, was bestellt wurde, was auf Lager ist und was im Zulauf ist
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition">
              <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Kontrolle</h3>
              <p className="text-navy-600">
                Volle Kontrolle über Ausgaben und Bestände durch smarte Freigabe-Workflows und übersichtliche Auswertungen
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="preise" className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-navy-900 mb-4">
              Für Unternehmen jeder Größe
            </h2>
            <p className="text-lg text-navy-600 max-w-2xl mx-auto">
              Kostenlos starten – von kleinen Teams bis zu großen Organisationen
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Free Plan */}
            <div className="bg-white p-6 rounded-xl shadow-lg border-2 border-green-200 relative flex flex-col">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold">Beliebt</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Free</h3>
              <p className="text-navy-600 mb-4">Kleine Teams & Start-ups</p>
              <div className="mb-6">
                <span className="text-3xl font-bold">0 €</span>
                <span className="text-navy-600">/Monat</span>
              </div>
              <ul className="space-y-3 mb-6 text-sm flex-grow">
                <li className="flex items-center"><span className="text-green-500 mr-2">✓</span>Bis zu 3 Benutzer</li>
                <li className="flex items-center"><span className="text-green-500 mr-2">✓</span>20 Bestellungen/Monat</li>
                <li className="flex items-center"><span className="text-green-500 mr-2">✓</span>1 Abteilung</li>
                <li className="flex items-center"><span className="text-green-500 mr-2">✓</span>1 Lagerort</li>
                <li className="flex items-center"><span className="text-gray-400 mr-2">✗</span>Freigabe-Workflows</li>
                <li className="text-xs text-navy-500">&quot;Powered by SupplyCart&quot; Branding</li>
              </ul>
              <Link href="/register" className="w-full bg-primary-600 text-white py-2 px-4 rounded-lg hover:bg-primary-700 transition font-semibold inline-block text-center mt-auto">
                Kostenlos starten
              </Link>
            </div>

            {/* Professional Plan */}
            <div className="bg-white p-6 rounded-xl shadow-lg border-2 border-gray-200 flex flex-col">
              <h3 className="text-xl font-bold mb-2">Professional</h3>
              <p className="text-navy-600 mb-4">Wachsende Unternehmen</p>
              <div className="mb-6">
                <span className="text-3xl font-bold">79 €</span>
                <span className="text-navy-600">/Monat</span>
              </div>
              <ul className="space-y-3 mb-6 text-sm flex-grow">
                <li className="flex items-center"><span className="text-green-500 mr-2">✓</span>Bis zu 10 Benutzer</li>
                <li className="flex items-center"><span className="text-green-500 mr-2">✓</span>Unbegrenzte Bestellungen</li>
                <li className="flex items-center"><span className="text-green-500 mr-2">✓</span>Bis zu 5 Abteilungen</li>
                <li className="flex items-center"><span className="text-green-500 mr-2">✓</span>Bis zu 5 Lagerorte</li>
                <li className="flex items-center"><span className="text-green-500 mr-2">✓</span>Einfache Freigaben</li>
                <li className="flex items-center"><span className="text-green-500 mr-2">✓</span>Standard Reports</li>
                <li className="text-xs text-navy-500">Eigenes Logo + &quot;Powered by&quot; Vermerk</li>
              </ul>
              <Link href="/register?plan=professional" className="w-full bg-gray-600 text-white py-2 px-4 rounded-lg hover:bg-gray-700 transition font-semibold inline-block text-center mt-auto">
                Plan wählen
              </Link>
            </div>

            {/* Business Plan */}
            <div className="bg-white p-6 rounded-xl shadow-lg border-2 border-primary-200 relative flex flex-col">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                <span className="bg-primary-600 text-white px-3 py-1 rounded-full text-sm font-semibold">Empfohlen</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Business</h3>
              <p className="text-navy-600 mb-4">Etablierte Unternehmen</p>
              <div className="mb-6">
                <span className="text-3xl font-bold">199 €</span>
                <span className="text-navy-600">/Monat</span>
              </div>
              <ul className="space-y-3 mb-6 text-sm flex-grow">
                <li className="flex items-center"><span className="text-green-500 mr-2">✓</span>Bis zu 30 Benutzer</li>
                <li className="flex items-center"><span className="text-green-500 mr-2">✓</span>Unbegrenzte Bestellungen</li>
                <li className="flex items-center"><span className="text-green-500 mr-2">✓</span>Unbegrenzte Abteilungen</li>
                <li className="flex items-center"><span className="text-green-500 mr-2">✓</span>Unbegrenzte Lagerorte</li>
                <li className="flex items-center"><span className="text-green-500 mr-2">✓</span>Mehrstufige Freigaben</li>
                <li className="flex items-center"><span className="text-green-500 mr-2">✓</span>Daueraufträge</li>
                <li className="flex items-center"><span className="text-green-500 mr-2">✓</span>Erweiterte Reports</li>
                <li className="text-xs text-navy-500">Vollständig markenfrei</li>
              </ul>
              <Link href="/register?plan=business" className="w-full bg-primary-600 text-white py-2 px-4 rounded-lg hover:bg-primary-700 transition font-semibold inline-block text-center mt-auto">
                Plan wählen
              </Link>
            </div>

            {/* Enterprise Plan */}
            <div className="bg-white p-6 rounded-xl shadow-lg border-2 border-gray-200 flex flex-col">
              <h3 className="text-xl font-bold mb-2">Enterprise</h3>
              <p className="text-navy-600 mb-4">Große Organisationen</p>
              <div className="mb-6">
                <span className="text-3xl font-bold">Auf Anfrage</span>
              </div>
              <ul className="space-y-3 mb-6 text-sm flex-grow">
                <li className="flex items-center"><span className="text-green-500 mr-2">✓</span>Unbegrenzte Benutzer</li>
                <li className="flex items-center"><span className="text-green-500 mr-2">✓</span>Komplexe Freigaberegeln</li>
                <li className="flex items-center"><span className="text-green-500 mr-2">✓</span>Individuelle Dashboards</li>
                <li className="flex items-center"><span className="text-green-500 mr-2">✓</span>Vollständiges Whitelabel</li>
                <li className="flex items-center"><span className="text-green-500 mr-2">✓</span>Eigene E-Mail-Domain</li>
                <li className="flex items-center"><span className="text-green-500 mr-2">✓</span>SSO-Integration</li>
                <li className="flex items-center"><span className="text-green-500 mr-2">✓</span>API-Zugriff</li>
                <li className="flex items-center"><span className="text-green-500 mr-2">✓</span>On-Premise Option</li>
              </ul>
              <Link href="/kontakt" className="w-full bg-gray-600 text-white py-2 px-4 rounded-lg hover:bg-gray-700 transition font-semibold inline-block text-center mt-auto">
                Kontakt aufnehmen
              </Link>
            </div>
          </div>

          <div className="mt-12 text-center">
            <p className="text-navy-600 mb-4">
              Alle Pläne beinhalten: SSL-Verschlüsselung, automatische Backups, 99.9% Uptime-Garantie
            </p>
            <p className="text-sm text-navy-500">
              Preise zzgl. MwSt. Jederzeit kündbar.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-primary-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Schluss mit dem Beschaffungs-Chaos!
          </h2>
          <p className="text-xl text-primary-100 mb-8">
            Machen Sie Ihre interne Beschaffung so professionell wie Ihr Kerngeschäft – starten Sie kostenlos
          </p>
          <Link 
            href="#preise"
            className="inline-block bg-white text-primary-600 px-8 py-3 rounded-lg text-lg font-semibold hover:bg-gray-100 transition shadow-lg"
          >
            Jetzt kostenlos starten
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-navy-900 text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <Image
                src="/images/sc-logo.png"
                alt="SupplyCart.io"
                width={120}
                height={32}
                className="h-8 w-auto mb-4 brightness-0 invert"
              />
              <p className="text-gray-400">
                Interne Beschaffung so einfach wie Online-Shopping
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Produkt</h3>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="#features" className="hover:text-white transition">Features</Link></li>
                <li><Link href="#preise" className="hover:text-white transition">Preise</Link></li>
                <li><Link href="#preise" className="hover:text-white transition">Kostenlos starten</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Unternehmen</h3>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/about" className="hover:text-white transition">Über uns</Link></li>
                <li><Link href="/contact" className="hover:text-white transition">Kontakt</Link></li>
                <li><Link href="/blog" className="hover:text-white transition">Blog</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Rechtliches</h3>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/datenschutz" className="hover:text-white transition">Datenschutz</Link></li>
                <li><Link href="/impressum" className="hover:text-white transition">Impressum</Link></li>
                <li><Link href="/agb" className="hover:text-white transition">AGB</Link></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 SupplyCart.io. Alle Rechte vorbehalten.</p>
          </div>
        </div>
      </footer>
    </main>
  )
}