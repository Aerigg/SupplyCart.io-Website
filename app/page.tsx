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
              Drei Module – eine Lösung
            </h2>
            <p className="text-lg text-navy-600 max-w-2xl mx-auto">
              Entdecken Sie die drei Kernbereiche von SupplyCart.io
            </p>
          </div>

          {/* Tab Navigation */}
          <div className="flex flex-wrap justify-center mb-8 border-b border-gray-200">
            <button 
              className="tab-button active px-6 py-3 text-lg font-medium border-b-2 transition-colors"
              data-tab="bestellportal"
            >
              Bestellportal
            </button>
            <button 
              className="tab-button px-6 py-3 text-lg font-medium border-b-2 transition-colors"
              data-tab="lager"
            >
              Lager & Wareneingang
            </button>
            <button 
              className="tab-button px-6 py-3 text-lg font-medium border-b-2 transition-colors"
              data-tab="verwaltung"
            >
              Verwaltungsportal
            </button>
          </div>

          {/* Tab Content */}
          <div className="tab-content-container">
            {/* Bestellportal Tab */}
            <div className="tab-content active" id="bestellportal-content">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                  <h3 className="text-2xl font-bold text-navy-900 mb-6">Bestellportal für Mitarbeiter</h3>
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-primary-100 rounded-full flex items-center justify-center mt-1">
                        <svg className="w-3 h-3 text-primary-600" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-semibold text-navy-900">Shop-ähnliche Benutzeroberfläche</h4>
                        <p className="text-navy-600">Intuitiv wie Amazon – Artikel suchen, vergleichen und bestellen</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-primary-100 rounded-full flex items-center justify-center mt-1">
                        <svg className="w-3 h-3 text-primary-600" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-semibold text-navy-900">Warenkorb & Bestellanfragen</h4>
                        <p className="text-navy-600">Mehrere Artikel sammeln und mit einem Klick anfragen</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-primary-100 rounded-full flex items-center justify-center mt-1">
                        <svg className="w-3 h-3 text-primary-600" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-semibold text-navy-900">Bestellstatus verfolgen</h4>
                        <p className="text-navy-600">Transparente Verfolgung vom Antrag bis zur Lieferung</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-gray-100 rounded-xl h-64 flex items-center justify-center">
                  <p className="text-gray-500 text-lg">Screenshot kommt hier</p>
                </div>
              </div>
            </div>

            {/* Lager & Wareneingang Tab */}
            <div className="tab-content hidden" id="lager-content">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                  <h3 className="text-2xl font-bold text-navy-900 mb-6">Lager & Wareneingang</h3>
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-primary-100 rounded-full flex items-center justify-center mt-1">
                        <svg className="w-3 h-3 text-primary-600" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-semibold text-navy-900">Zentrale Bestandsübersicht</h4>
                        <p className="text-navy-600">Alle Lagerbestände auf einen Blick – immer aktuell</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-primary-100 rounded-full flex items-center justify-center mt-1">
                        <svg className="w-3 h-3 text-primary-600" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-semibold text-navy-900">Tablet-optimierte Entnahme</h4>
                        <p className="text-navy-600">Einfache Buchung von Entnahmen direkt am Lager</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-primary-100 rounded-full flex items-center justify-center mt-1">
                        <svg className="w-3 h-3 text-primary-600" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-semibold text-navy-900">Automatischer Wareneingang</h4>
                        <p className="text-navy-600">Gelieferte Waren einfach einbuchen und verteilen</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-gray-100 rounded-xl h-64 flex items-center justify-center">
                  <p className="text-gray-500 text-lg">Screenshot kommt hier</p>
                </div>
              </div>
            </div>

            {/* Verwaltungsportal Tab */}
            <div className="tab-content hidden" id="verwaltung-content">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                  <h3 className="text-2xl font-bold text-navy-900 mb-6">Verwaltungsportal</h3>
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-primary-100 rounded-full flex items-center justify-center mt-1">
                        <svg className="w-3 h-3 text-primary-600" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-semibold text-navy-900">Lieferanten- & Artikelverwaltung</h4>
                        <p className="text-navy-600">Zentrale Pflege aller Lieferanten und Produktkataloge</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-primary-100 rounded-full flex items-center justify-center mt-1">
                        <svg className="w-3 h-3 text-primary-600" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-semibold text-navy-900">Freigabe-Workflows</h4>
                        <p className="text-navy-600">Flexible Genehmigungsprozesse je nach Betrag und Kategorie</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-primary-100 rounded-full flex items-center justify-center mt-1">
                        <svg className="w-3 h-3 text-primary-600" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-semibold text-navy-900">Kosten & Reporting</h4>
                        <p className="text-navy-600">Detaillierte Auswertungen und Budgetüberwachung</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-gray-100 rounded-xl h-64 flex items-center justify-center">
                  <p className="text-gray-500 text-lg">Screenshot kommt hier</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* JavaScript for Tabs */}
      <script dangerouslySetInnerHTML={{
        __html: `
          document.addEventListener('DOMContentLoaded', function() {
            const tabButtons = document.querySelectorAll('.tab-button');
            const tabContents = document.querySelectorAll('.tab-content');
            
            tabButtons.forEach(button => {
              button.addEventListener('click', function() {
                const targetTab = this.getAttribute('data-tab');
                
                // Remove active class from all buttons
                tabButtons.forEach(btn => {
                  btn.classList.remove('active', 'border-primary-600', 'text-primary-600');
                  btn.classList.add('border-transparent', 'text-gray-500', 'hover:text-gray-700', 'hover:border-gray-300');
                });
                
                // Add active class to clicked button
                this.classList.add('active', 'border-primary-600', 'text-primary-600');
                this.classList.remove('border-transparent', 'text-gray-500', 'hover:text-gray-700', 'hover:border-gray-300');
                
                // Hide all tab contents
                tabContents.forEach(content => {
                  content.classList.add('hidden');
                  content.classList.remove('active');
                });
                
                // Show target tab content
                const targetContent = document.getElementById(targetTab + '-content');
                if (targetContent) {
                  targetContent.classList.remove('hidden');
                  targetContent.classList.add('active');
                }
              });
            });
            
            // Set initial state
            const firstButton = tabButtons[0];
            if (firstButton) {
              firstButton.classList.add('border-primary-600', 'text-primary-600');
              firstButton.classList.remove('border-transparent', 'text-gray-500');
            }
          });
        `
      }} />

      {/* Vorteile Section */}
      <section id="vorteile" className="py-16 px-4 sm:px-6 lg:px-8 bg-primary-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-navy-900 mb-4">
              Warum SupplyCart.io?
            </h2>
            <p className="text-lg text-navy-600 max-w-2xl mx-auto">
              Die Vorteile, die Ihr Unternehmen sofort spüren wird
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-navy-900">Einfachheit</h3>
              <p className="text-navy-600">
                So einfach wie Amazon: Hohe Akzeptanz bei Mitarbeitern, minimaler Schulungsaufwand
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-navy-900">Transparenz</h3>
              <p className="text-navy-600">
                100% Klarheit: Jeder weiß jederzeit, was bestellt wurde, was auf Lager ist und was im Zulauf ist
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-navy-900">Kontrolle</h3>
              <p className="text-navy-600">
                Volle Kontrolle über Ausgaben und Bestände durch smarte Freigabe-Workflows und detaillierte Auswertungen
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-navy-900">Geschwindigkeit</h3>
              <p className="text-navy-600">
                Drastisch verkürzte Bestellzeiten: Von der Anfrage bis zur Lieferung – alles läuft schneller und reibungsloser
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-navy-900">Zeitersparnis</h3>
              <p className="text-navy-600">
                Massive Effizienzsteigerung: Inventuren könnten der Vergangenheit angehören – das System weiß immer, was wo ist
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-navy-900">Digitalisierung</h3>
              <p className="text-navy-600">
                Moderner Arbeitsplatz: Schluss mit Excel-Chaos und Papierkram – willkommen in der digitalen Zukunft
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
              <Link href="/contact" className="w-full bg-gray-600 text-white py-2 px-4 rounded-lg hover:bg-gray-700 transition font-semibold inline-block text-center mt-auto">
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

      {/* FAQ Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-navy-900 mb-4">
              Häufig gestellte Fragen
            </h2>
            <p className="text-lg text-navy-600">
              Alles was Sie über SupplyCart.io wissen müssen
            </p>
          </div>

          <div className="space-y-6">
            <div className="faq-item bg-white rounded-xl shadow-lg p-6">
              <button className="faq-question w-full text-left flex justify-between items-center py-2" data-target="faq-1">
                <h3 className="text-lg font-semibold text-navy-900">Wie schnell kann ich mit SupplyCart.io starten?</h3>
                <svg className="faq-icon w-6 h-6 text-primary-600 transform transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className="faq-answer hidden pt-4" id="faq-1">
                <p className="text-navy-600">
                  Sie können sofort starten! Registrieren Sie sich kostenlos, laden Sie Ihr Team ein und beginnen Sie mit dem Anlegen Ihrer ersten Artikel. Die meisten Unternehmen sind innerhalb einer Stunde einsatzbereit.
                </p>
              </div>
            </div>

            <div className="faq-item bg-white rounded-xl shadow-lg p-6">
              <button className="faq-question w-full text-left flex justify-between items-center py-2" data-target="faq-2">
                <h3 className="text-lg font-semibold text-navy-900">Brauche ich technisches Know-how für die Einrichtung?</h3>
                <svg className="faq-icon w-6 h-6 text-primary-600 transform transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className="faq-answer hidden pt-4" id="faq-2">
                <p className="text-navy-600">
                  Nein, überhaupt nicht! SupplyCart.io ist so einfach zu bedienen wie ein Online-Shop. Wir haben bewusst auf komplizierte Einstellungen verzichtet. Falls Sie doch Hilfe benötigen, steht Ihnen unser Support gerne zur Verfügung.
                </p>
              </div>
            </div>

            <div className="faq-item bg-white rounded-xl shadow-lg p-6">
              <button className="faq-question w-full text-left flex justify-between items-center py-2" data-target="faq-3">
                <h3 className="text-lg font-semibold text-navy-900">Kann ich meine bestehenden Lieferanten weiter nutzen?</h3>
                <svg className="faq-icon w-6 h-6 text-primary-600 transform transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className="faq-answer hidden pt-4" id="faq-3">
                <p className="text-navy-600">
                  Ja, auf jeden Fall! SupplyCart.io ersetzt nicht Ihre Lieferanten, sondern organisiert nur Ihre internen Prozesse. Sie können alle Ihre bewährten Lieferantenbeziehungen beibehalten und einfach über das System verwalten.
                </p>
              </div>
            </div>

            <div className="faq-item bg-white rounded-xl shadow-lg p-6">
              <button className="faq-question w-full text-left flex justify-between items-center py-2" data-target="faq-4">
                <h3 className="text-lg font-semibold text-navy-900">Was passiert mit meinen Daten?</h3>
                <svg className="faq-icon w-6 h-6 text-primary-600 transform transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className="faq-answer hidden pt-4" id="faq-4">
                <p className="text-navy-600">
                  Ihre Daten sind sicher! Wir hosten in Deutschland, verschlüsseln alle Daten und erstellen täglich Backups. Sie behalten jederzeit die volle Kontrolle über Ihre Daten und können diese jederzeit exportieren.
                </p>
              </div>
            </div>

            <div className="faq-item bg-white rounded-xl shadow-lg p-6">
              <button className="faq-question w-full text-left flex justify-between items-center py-2" data-target="faq-5">
                <h3 className="text-lg font-semibold text-navy-900">Ist der Free Plan wirklich kostenlos?</h3>
                <svg className="faq-icon w-6 h-6 text-primary-600 transform transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className="faq-answer hidden pt-4" id="faq-5">
                <p className="text-navy-600">
                  Ja, wirklich! Bis zu 3 Benutzer und 20 Bestellungen pro Monat sind dauerhaft kostenlos. Keine versteckten Kosten, keine Kreditkarte erforderlich. Sie zahlen nur, wenn Sie mehr Benutzer oder Bestellungen benötigen.
                </p>
              </div>
            </div>

            <div className="faq-item bg-white rounded-xl shadow-lg p-6">
              <button className="faq-question w-full text-left flex justify-between items-center py-2" data-target="faq-6">
                <h3 className="text-lg font-semibold text-navy-900">Kann ich jederzeit kündigen?</h3>
                <svg className="faq-icon w-6 h-6 text-primary-600 transform transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className="faq-answer hidden pt-4" id="faq-6">
                <p className="text-navy-600">
                  Ja, Sie können jederzeit mit einem Klick kündigen. Keine Mindestlaufzeit, keine Kündigungsfristen.
                </p>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <p className="text-navy-600 mb-6">
              Weitere Fragen? Wir helfen gerne weiter!
            </p>
            <Link 
              href="/contact"
              className="inline-block bg-primary-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary-700 transition"
            >
              Kontakt aufnehmen
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ JavaScript */}
      <script dangerouslySetInnerHTML={{
        __html: `
          document.addEventListener('DOMContentLoaded', function() {
            const faqQuestions = document.querySelectorAll('.faq-question');
            
            faqQuestions.forEach(question => {
              question.addEventListener('click', function() {
                const targetId = this.getAttribute('data-target');
                const answer = document.getElementById(targetId);
                const icon = this.querySelector('.faq-icon');
                
                // Toggle the answer
                if (answer.classList.contains('hidden')) {
                  // Close all other answers
                  document.querySelectorAll('.faq-answer').forEach(otherAnswer => {
                    otherAnswer.classList.add('hidden');
                  });
                  document.querySelectorAll('.faq-icon').forEach(otherIcon => {
                    otherIcon.classList.remove('rotate-180');
                  });
                  
                  // Open this answer
                  answer.classList.remove('hidden');
                  icon.classList.add('rotate-180');
                } else {
                  // Close this answer
                  answer.classList.add('hidden');
                  icon.classList.remove('rotate-180');
                }
              });
            });
          });
        `
      }} />

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