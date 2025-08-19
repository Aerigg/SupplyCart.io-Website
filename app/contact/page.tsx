import Link from 'next/link'
import Image from 'next/image'
import { Mail, MapPin } from 'lucide-react'

export default function Contact() {
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
            <div className="flex items-center space-x-8">
              <Link href="/#features" className="text-gray-700 hover:text-primary-600 transition">
                Features
              </Link>
              <Link href="/#vorteile" className="text-gray-700 hover:text-primary-600 transition">
                Vorteile
              </Link>
              <Link href="/#preise" className="text-gray-700 hover:text-primary-600 transition">
                Preise
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
            Kontakt aufnehmen
          </h1>
          <p className="text-xl text-navy-600 mb-8">
            Haben Sie Fragen zu SupplyCart.io? Wir helfen Ihnen gerne weiter.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-semibold text-navy-900 mb-8">
                Sprechen Sie mit uns
              </h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-primary-100 p-3 rounded-lg">
                    <Mail className="h-6 w-6 text-primary-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-navy-900 mb-1">E-Mail</h3>
                    <p className="text-navy-600 mb-2">
                      Für alle Anfragen zu SupplyCart.io
                    </p>
                    <a 
                      href="mailto:info@emit-solution.com" 
                      className="text-primary-600 hover:text-primary-700 font-medium"
                    >
                      info@emit-solution.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-primary-100 p-3 rounded-lg">
                    <MapPin className="h-6 w-6 text-primary-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-navy-900 mb-1">Adresse</h3>
                    <div className="text-navy-600">
                      <p>EMIT Solution</p>
                      <p>Eric Menge</p>
                      <p>Ottmannshausen 68</p>
                      <p>99439 Am Ettersberg</p>
                      <p>Deutschland</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-12 bg-gray-50 p-8 rounded-xl">
                <h3 className="text-xl font-semibold text-navy-900 mb-4">
                  Schneller Start gewünscht?
                </h3>
                <p className="text-navy-600 mb-6">
                  Nutzen Sie unseren kostenlosen Plan und erleben Sie SupplyCart.io selbst.
                </p>
                <Link 
                  href="/#preise"
                  className="inline-block bg-primary-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-700 transition"
                >
                  Kostenlos starten
                </Link>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-semibold text-navy-900 mb-8">
                Nachricht senden
              </h2>
              <form className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="vorname" className="block text-sm font-medium text-navy-700 mb-2">
                      Vorname *
                    </label>
                    <input
                      type="text"
                      id="vorname"
                      name="vorname"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                    />
                  </div>
                  <div>
                    <label htmlFor="nachname" className="block text-sm font-medium text-navy-700 mb-2">
                      Nachname *
                    </label>
                    <input
                      type="text"
                      id="nachname"
                      name="nachname"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-navy-700 mb-2">
                    E-Mail-Adresse *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                  />
                </div>

                <div>
                  <label htmlFor="unternehmen" className="block text-sm font-medium text-navy-700 mb-2">
                    Unternehmen
                  </label>
                  <input
                    type="text"
                    id="unternehmen"
                    name="unternehmen"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                  />
                </div>

                <div>
                  <label htmlFor="betreff" className="block text-sm font-medium text-navy-700 mb-2">
                    Betreff *
                  </label>
                  <select
                    id="betreff"
                    name="betreff"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                  >
                    <option value="">Bitte auswählen</option>
                    <option value="allgemeine-anfrage">Allgemeine Anfrage</option>
                    <option value="demo-termin">Demo-Termin vereinbaren</option>
                    <option value="support">Support-Anfrage</option>
                    <option value="enterprise">Enterprise-Lösung</option>
                    <option value="partnerschaft">Partnerschaft</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="nachricht" className="block text-sm font-medium text-navy-700 mb-2">
                    Ihre Nachricht *
                  </label>
                  <textarea
                    id="nachricht"
                    name="nachricht"
                    rows={6}
                    required
                    placeholder="Erzählen Sie uns von Ihrem Anliegen..."
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                  ></textarea>
                </div>

                <div className="flex items-start space-x-3">
                  <input
                    type="checkbox"
                    id="datenschutz"
                    name="datenschutz"
                    required
                    className="mt-1 h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded"
                  />
                  <label htmlFor="datenschutz" className="text-sm text-navy-600">
                    Ich habe die{' '}
                    <Link href="/datenschutz" className="text-primary-600 hover:text-primary-700">
                      Datenschutzerklärung
                    </Link>
                    {' '}gelesen und stimme der Verarbeitung meiner Daten zu. *
                  </label>
                </div>

                <button
                  type="submit"
                  className="w-full bg-primary-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-primary-700 transition-colors"
                >
                  Nachricht senden
                </button>
              </form>

              <p className="mt-6 text-sm text-navy-500">
                * Pflichtfelder - Wir antworten in der Regel innerhalb von 24 Stunden
              </p>
            </div>
          </div>
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
                <li><Link href="/#features" className="hover:text-white transition">Features</Link></li>
                <li><Link href="/#preise" className="hover:text-white transition">Preise</Link></li>
                <li><Link href="/#preise" className="hover:text-white transition">Kostenlos starten</Link></li>
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