import Link from 'next/link'
import Image from 'next/image'
import { Calendar, ArrowRight } from 'lucide-react'

export default function Blog() {
  const placeholderPosts = [
    {
      id: 1,
      title: "Die häufigsten Fehler bei der internen Beschaffung",
      excerpt: "Erfahren Sie, welche Stolpersteine bei der Beschaffung lauern und wie Sie diese vermeiden können.",
      date: "15. August 2025",
      readTime: "5 Min.",
      category: "Best Practices"
    },
    {
      id: 2,
      title: "Excel vs. professionelle Beschaffungs-Software",
      excerpt: "Warum Excel für die moderne Beschaffung nicht mehr ausreicht und wann der Umstieg sinnvoll ist.",
      date: "12. August 2025",
      readTime: "7 Min.",
      category: "Vergleich"
    },
    {
      id: 3,
      title: "Digitale Transformation in kleinen und mittleren Unternehmen",
      excerpt: "Wie KMUs von digitalen Beschaffungsprozessen profitieren und dabei Zeit und Geld sparen können.",
      date: "8. August 2025",
      readTime: "6 Min.",
      category: "Digital"
    }
  ]

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
            SupplyCart.io Blog
          </h1>
          <p className="text-xl text-navy-600 mb-8">
            Tipps, Insights und Best Practices für moderne Beschaffung
          </p>
        </div>
      </section>

      {/* Coming Soon Notice */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-primary-50 p-12 rounded-2xl">
            <h2 className="text-3xl font-semibold text-navy-900 mb-6">
              Unser Blog startet bald!
            </h2>
            <p className="text-lg text-navy-600 mb-8">
              Wir arbeiten gerade an wertvollen Inhalten rund um interne Beschaffung, 
              Lagerverwaltung und digitale Prozesse. Schauen Sie bald wieder vorbei!
            </p>
            <Link 
              href="/#preise"
              className="inline-block bg-primary-600 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-primary-700 transition"
            >
              Jetzt SupplyCart.io testen
            </Link>
          </div>
        </div>
      </section>

      {/* Preview of Upcoming Content */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-semibold text-navy-900 mb-4">
              Das erwartet Sie
            </h2>
            <p className="text-lg text-navy-600">
              Vorschau auf unsere geplanten Blog-Artikel
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {placeholderPosts.map((post) => (
              <article key={post.id} className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow p-6">
                <div className="flex items-center justify-between mb-4">
                  <span className="bg-primary-100 text-primary-600 text-sm font-medium px-3 py-1 rounded-full">
                    {post.category}
                  </span>
                  <div className="flex items-center text-gray-500 text-sm">
                    <Calendar className="h-4 w-4 mr-1" />
                    {post.readTime}
                  </div>
                </div>
                
                <h3 className="text-xl font-semibold text-navy-900 mb-3 line-clamp-2">
                  {post.title}
                </h3>
                
                <p className="text-navy-600 mb-4 line-clamp-3">
                  {post.excerpt}
                </p>
                
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">{post.date}</span>
                  <div className="flex items-center text-primary-600 font-medium text-sm">
                    Bald verfügbar
                    <ArrowRight className="h-4 w-4 ml-1" />
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-navy-600 mb-6">
              Möchten Sie informiert werden, sobald neue Artikel verfügbar sind?
            </p>
            <Link 
              href="/contact"
              className="inline-block bg-navy-900 text-white px-6 py-3 rounded-lg font-semibold hover:bg-navy-800 transition"
            >
              Kontakt aufnehmen
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}