import Link from 'next/link'
import Image from 'next/image'

export default function Datenschutz() {
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
          <h1 className="text-4xl font-bold text-navy-900 mb-8">Datenschutzerklärung</h1>
          
          <div className="prose prose-lg max-w-none text-navy-600">
            <h2 className="text-2xl font-semibold text-navy-900 mt-8 mb-4">1. Datenschutz auf einen Blick</h2>
            
            <h3 className="text-xl font-semibold text-navy-900 mt-6 mb-3">Allgemeine Hinweise</h3>
            <p>
              Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten 
              passiert, wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie 
              persönlich identifiziert werden können.
            </p>

            <h3 className="text-xl font-semibold text-navy-900 mt-6 mb-3">Datenerfassung auf dieser Website</h3>
            <p>
              <strong>Wer ist verantwortlich für die Datenerfassung auf dieser Website?</strong><br />
              Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. Dessen Kontaktdaten 
              können Sie dem Abschnitt &bdquo;Hinweis zur Verantwortlichen Stelle&ldquo; in dieser Datenschutzerklärung entnehmen.
            </p>

            <p>
              <strong>Wie erfassen wir Ihre Daten?</strong><br />
              Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese mitteilen. Hierbei kann es sich z.B. 
              um Daten handeln, die Sie in ein Kontaktformular eingeben. Andere Daten werden automatisch oder nach 
              Ihrer Einwilligung beim Besuch der Website durch unsere IT-Systeme erfasst. Das sind vor allem technische 
              Daten (z.B. Internetbrowser, Betriebssystem oder Uhrzeit des Seitenaufrufs).
            </p>

            <p>
              <strong>Wofür nutzen wir Ihre Daten?</strong><br />
              Ein Teil der Daten wird erhoben, um eine fehlerfreie Bereitstellung der Website zu gewährleisten. 
              Andere Daten können zur Analyse Ihres Nutzerverhaltens verwendet werden.
            </p>

            <h2 className="text-2xl font-semibold text-navy-900 mt-8 mb-4">2. Allgemeine Hinweise und Pflichtinformationen</h2>
            
            <h3 className="text-xl font-semibold text-navy-900 mt-6 mb-3">Datenschutz</h3>
            <p>
              Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Wir behandeln Ihre 
              personenbezogenen Daten vertraulich und entsprechend der gesetzlichen Datenschutzvorschriften sowie 
              dieser Datenschutzerklärung.
            </p>

            <h3 className="text-xl font-semibold text-navy-900 mt-6 mb-3">Hinweis zur verantwortlichen Stelle</h3>
            <p>
              Die verantwortliche Stelle für die Datenverarbeitung auf dieser Website ist:<br /><br />
              EMIT Solution<br />
              Eric Menge<br />
              Ottmannshausen 68<br />
              99439 Am Ettersberg<br />
              Deutschland<br /><br />
              Telefon: +49 36452 140003<br />
              E-Mail: info@emit-solution.com
            </p>

            <h3 className="text-xl font-semibold text-navy-900 mt-6 mb-3">Speicherdauer</h3>
            <p>
              Soweit innerhalb dieser Datenschutzerklärung keine speziellere Speicherdauer genannt wurde, 
              verbleiben Ihre personenbezogenen Daten bei uns, bis der Zweck für die Datenverarbeitung entfällt. 
              Wenn Sie ein berechtigtes Löschersuchen geltend machen oder eine Einwilligung zur Datenverarbeitung 
              widerrufen, werden Ihre Daten gelöscht, sofern wir keine anderen rechtlich zulässigen Gründe für die 
              Speicherung Ihrer personenbezogenen Daten haben.
            </p>

            <h3 className="text-xl font-semibold text-navy-900 mt-6 mb-3">Widerruf Ihrer Einwilligung zur Datenverarbeitung</h3>
            <p>
              Viele Datenverarbeitungsvorgänge sind nur mit Ihrer ausdrücklichen Einwilligung möglich. Sie können 
              eine bereits erteilte Einwilligung jederzeit widerrufen. Die Rechtmäßigkeit der bis zum Widerruf 
              erfolgten Datenverarbeitung bleibt vom Widerruf unberührt.
            </p>

            <h3 className="text-xl font-semibold text-navy-900 mt-6 mb-3">Recht auf Datenübertragbarkeit</h3>
            <p>
              Sie haben das Recht, Daten, die wir auf Grundlage Ihrer Einwilligung oder in Erfüllung eines Vertrags 
              automatisiert verarbeiten, an sich oder an einen Dritten in einem gängigen, maschinenlesbaren Format 
              aushändigen zu lassen.
            </p>

            <h2 className="text-2xl font-semibold text-navy-900 mt-8 mb-4">3. Datenerfassung auf dieser Website</h2>
            
            <h3 className="text-xl font-semibold text-navy-900 mt-6 mb-3">Cookies</h3>
            <p>
              Unsere Internetseiten verwenden sogenannte &bdquo;Cookies&ldquo;. Cookies sind kleine Datenpakete und richten auf 
              Ihrem Endgerät keinen Schaden an. Sie werden entweder vorübergehend für die Dauer einer Sitzung 
              (Session-Cookies) oder dauerhaft (permanente Cookies) auf Ihrem Endgerät gespeichert. Session-Cookies 
              werden nach Ende Ihres Besuchs automatisch gelöscht. Permanente Cookies bleiben auf Ihrem Endgerät 
              gespeichert, bis Sie diese selbst löschen oder eine automatische Löschung durch Ihren Webbrowser erfolgt.
            </p>

            <h3 className="text-xl font-semibold text-navy-900 mt-6 mb-3">Server-Log-Dateien</h3>
            <p>
              Der Provider der Seiten erhebt und speichert automatisch Informationen in so genannten Server-Log-Dateien, 
              die Ihr Browser automatisch an uns übermittelt. Dies sind:
            </p>
            <ul className="list-disc ml-6 mt-2">
              <li>Browsertyp und Browserversion</li>
              <li>verwendetes Betriebssystem</li>
              <li>Referrer URL</li>
              <li>Hostname des zugreifenden Rechners</li>
              <li>Uhrzeit der Serveranfrage</li>
              <li>IP-Adresse</li>
            </ul>
            <p className="mt-3">
              Eine Zusammenführung dieser Daten mit anderen Datenquellen wird nicht vorgenommen. Die Erfassung dieser 
              Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO.
            </p>

            <h3 className="text-xl font-semibold text-navy-900 mt-6 mb-3">Kontaktformular</h3>
            <p>
              Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben aus dem Anfrageformular 
              inklusive der von Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung der Anfrage und für den Fall 
              von Anschlussfragen bei uns gespeichert. Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.
            </p>

            <h3 className="text-xl font-semibold text-navy-900 mt-6 mb-3">Anfrage per E-Mail, Telefon oder Telefax</h3>
            <p>
              Wenn Sie uns per E-Mail, Telefon oder Telefax kontaktieren, wird Ihre Anfrage inklusive aller daraus 
              hervorgehenden personenbezogenen Daten (Name, Anfrage) zum Zwecke der Bearbeitung Ihres Anliegens bei 
              uns gespeichert und verarbeitet. Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.
            </p>

            <h2 className="text-2xl font-semibold text-navy-900 mt-8 mb-4">4. Hosting</h2>
            
            <h3 className="text-xl font-semibold text-navy-900 mt-6 mb-3">Externes Hosting</h3>
            <p>
              Diese Website wird bei einem externen Dienstleister gehostet (Hoster). Die personenbezogenen Daten, 
              die auf dieser Website erfasst werden, werden auf den Servern des Hosters gespeichert. Hierbei kann 
              es sich v. a. um IP-Adressen, Kontaktanfragen, Meta- und Kommunikationsdaten, Vertragsdaten, 
              Kontaktdaten, Namen, Websitezugriffe und sonstige Daten, die über eine Website generiert werden, handeln.
            </p>

            <h2 className="text-2xl font-semibold text-navy-900 mt-8 mb-4">5. Ihre Rechte</h2>
            <p>
              Sie haben jederzeit das Recht, unentgeltlich Auskunft über Herkunft, Empfänger und Zweck Ihrer 
              gespeicherten personenbezogenen Daten zu erhalten. Sie haben außerdem ein Recht, die Berichtigung 
              oder Löschung dieser Daten zu verlangen. Wenn Sie eine Einwilligung zur Datenverarbeitung erteilt 
              haben, können Sie diese Einwilligung jederzeit für die Zukunft widerrufen. Außerdem haben Sie das 
              Recht, unter bestimmten Umständen die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten 
              zu verlangen. Des Weiteren steht Ihnen ein Beschwerderecht bei der zuständigen Aufsichtsbehörde zu.
            </p>

            <p className="mt-6 text-sm text-navy-500">
              Stand: Januar 2025
            </p>
          </div>
        </div>
      </section>
    </main>
  )
}