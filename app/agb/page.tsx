import Link from 'next/link'
import Image from 'next/image'

export default function AGB() {
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
          <h1 className="text-4xl font-bold text-navy-900 mb-8">Allgemeine Geschäftsbedingungen (AGB)</h1>
          
          <div className="prose prose-lg max-w-none text-navy-600">
            <h2 className="text-2xl font-semibold text-navy-900 mt-8 mb-4">§ 1 Geltungsbereich</h2>
            <p>
              (1) Diese Allgemeinen Geschäftsbedingungen (nachfolgend "AGB") gelten für alle Verträge über die 
              Nutzung der Software-as-a-Service-Lösung "SupplyCart.io" (nachfolgend "Software"), die zwischen 
              EMIT Solution, Eric Menge, Ottmannshausen 68, 99439 Am Ettersberg (nachfolgend "Anbieter") und 
              dem Kunden (nachfolgend "Kunde") geschlossen werden.
            </p>
            <p>
              (2) Geschäftsbedingungen des Kunden finden keine Anwendung, auch wenn der Anbieter ihrer Geltung 
              im Einzelfall nicht gesondert widerspricht.
            </p>

            <h2 className="text-2xl font-semibold text-navy-900 mt-8 mb-4">§ 2 Vertragsgegenstand</h2>
            <p>
              (1) Der Anbieter stellt dem Kunden die Software SupplyCart.io als webbasierte Anwendung zur 
              Verwaltung interner Beschaffungsprozesse und Lagerbestände zur Verfügung.
            </p>
            <p>
              (2) Der konkrete Funktionsumfang ergibt sich aus der jeweiligen Leistungsbeschreibung des 
              gewählten Tarifmodells (Free, Professional, Business, Enterprise).
            </p>
            <p>
              (3) Die Software wird als Software-as-a-Service (SaaS) über das Internet bereitgestellt. 
              Der Kunde erhält keinen Anspruch auf Überlassung der Software in objektcodeform oder sourcecodeform.
            </p>

            <h2 className="text-2xl font-semibold text-navy-900 mt-8 mb-4">§ 3 Vertragsschluss</h2>
            <p>
              (1) Die Präsentation der Software auf der Website stellt kein bindendes Angebot dar, sondern 
              eine Aufforderung zur Abgabe eines Angebots.
            </p>
            <p>
              (2) Der Kunde gibt durch die Registrierung und Auswahl eines Tarifs ein verbindliches Angebot 
              zum Abschluss eines Nutzungsvertrages ab.
            </p>
            <p>
              (3) Der Anbieter kann das Angebot des Kunden innerhalb von 5 Werktagen annehmen durch:
            </p>
            <ul className="list-disc ml-6 mt-2">
              <li>Zusendung einer Auftragsbestätigung per E-Mail oder</li>
              <li>Freischaltung des Zugangs zur Software</li>
            </ul>

            <h2 className="text-2xl font-semibold text-navy-900 mt-8 mb-4">§ 4 Leistungen des Anbieters</h2>
            <p>
              (1) Der Anbieter stellt die Software mit einer durchschnittlichen Verfügbarkeit von 99% im 
              Jahresmittel zur Verfügung.
            </p>
            <p>
              (2) Die Verfügbarkeit bezieht sich auf den Zeitpunkt der Übergabe der Daten vom Server des 
              Anbieters an das Internet. Nicht in die Berechnung der Verfügbarkeit fallen:
            </p>
            <ul className="list-disc ml-6 mt-2">
              <li>Geplante Wartungsfenster (werden 48h vorher angekündigt)</li>
              <li>Störungen außerhalb des Einflussbereichs des Anbieters</li>
              <li>Höhere Gewalt</li>
            </ul>
            <p>
              (3) Der Anbieter führt regelmäßige Datensicherungen durch. Die Sicherungen erfolgen täglich.
            </p>

            <h2 className="text-2xl font-semibold text-navy-900 mt-8 mb-4">§ 5 Pflichten des Kunden</h2>
            <p>
              (1) Der Kunde ist verpflichtet, die Zugangsdaten zur Software geheim zu halten und vor dem 
              Zugriff Dritter zu schützen.
            </p>
            <p>
              (2) Der Kunde wird die Software nur für eigene geschäftliche Zwecke nutzen und nicht an 
              Dritte weitergeben oder diesen zur Nutzung überlassen.
            </p>
            <p>
              (3) Der Kunde ist für die von ihm eingegebenen Daten selbst verantwortlich und stellt 
              sicher, dass diese nicht gegen geltendes Recht verstoßen.
            </p>

            <h2 className="text-2xl font-semibold text-navy-900 mt-8 mb-4">§ 6 Preise und Zahlung</h2>
            <p>
              (1) Die Preise ergeben sich aus der aktuellen Preisliste auf der Website. Alle Preise 
              verstehen sich zuzüglich der gesetzlichen Mehrwertsteuer.
            </p>
            <p>
              (2) Die Abrechnung erfolgt monatlich im Voraus. Die Zahlung ist innerhalb von 14 Tagen 
              nach Rechnungsstellung fällig.
            </p>
            <p>
              (3) Bei Zahlungsverzug ist der Anbieter berechtigt, den Zugang zur Software zu sperren.
            </p>

            <h2 className="text-2xl font-semibold text-navy-900 mt-8 mb-4">§ 7 Vertragslaufzeit und Kündigung</h2>
            <p>
              (1) Der Vertrag wird auf unbestimmte Zeit geschlossen.
            </p>
            <p>
              (2) Der Vertrag kann von beiden Parteien mit einer Frist von einem Monat zum Monatsende 
              gekündigt werden.
            </p>
            <p>
              (3) Das Recht zur außerordentlichen Kündigung aus wichtigem Grund bleibt unberührt.
            </p>
            <p>
              (4) Kündigungen bedürfen der Textform (E-Mail genügt).
            </p>

            <h2 className="text-2xl font-semibold text-navy-900 mt-8 mb-4">§ 8 Haftung</h2>
            <p>
              (1) Der Anbieter haftet unbeschränkt für Vorsatz und grobe Fahrlässigkeit sowie nach 
              Maßgabe des Produkthaftungsgesetzes.
            </p>
            <p>
              (2) Bei leicht fahrlässiger Verletzung wesentlicher Vertragspflichten ist die Haftung 
              auf den vertragstypischen, vorhersehbaren Schaden begrenzt.
            </p>
            <p>
              (3) Im Übrigen ist die Haftung ausgeschlossen.
            </p>

            <h2 className="text-2xl font-semibold text-navy-900 mt-8 mb-4">§ 9 Datenschutz</h2>
            <p>
              (1) Der Anbieter verarbeitet personenbezogene Daten des Kunden und seiner Mitarbeiter 
              ausschließlich im Rahmen der Datenschutzerklärung und nach den Vorgaben der DSGVO.
            </p>
            <p>
              (2) Soweit erforderlich, schließen die Parteien eine separate Vereinbarung zur 
              Auftragsverarbeitung ab.
            </p>

            <h2 className="text-2xl font-semibold text-navy-900 mt-8 mb-4">§ 10 Änderungen der AGB</h2>
            <p>
              (1) Der Anbieter behält sich vor, diese AGB jederzeit mit Wirkung für die Zukunft zu ändern.
            </p>
            <p>
              (2) Über Änderungen wird der Kunde per E-Mail informiert. Die Änderungen gelten als 
              genehmigt, wenn der Kunde nicht innerhalb von vier Wochen nach Zugang der Mitteilung 
              widerspricht.
            </p>

            <h2 className="text-2xl font-semibold text-navy-900 mt-8 mb-4">§ 11 Schlussbestimmungen</h2>
            <p>
              (1) Es gilt das Recht der Bundesrepublik Deutschland unter Ausschluss des UN-Kaufrechts.
            </p>
            <p>
              (2) Gerichtsstand für alle Streitigkeiten aus diesem Vertrag ist, soweit der Kunde 
              Kaufmann, juristische Person des öffentlichen Rechts oder öffentlich-rechtliches 
              Sondervermögen ist, der Sitz des Anbieters.
            </p>
            <p>
              (3) Sollten einzelne Bestimmungen dieser AGB unwirksam sein oder werden, berührt dies 
              die Wirksamkeit der übrigen Bestimmungen nicht.
            </p>

            <p className="mt-8 text-sm text-navy-500">
              Stand: Januar 2025<br />
              EMIT Solution<br />
              Eric Menge<br />
              Ottmannshausen 68<br />
              99439 Am Ettersberg
            </p>
          </div>
        </div>
      </section>
    </main>
  )
}