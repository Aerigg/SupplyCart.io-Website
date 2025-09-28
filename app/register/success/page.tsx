import { CheckCircle } from 'lucide-react'

export default function RegisterSuccess() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10 text-center">
          <CheckCircle className="mx-auto h-16 w-16 text-green-500 mb-6" />
          
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Registrierung erfolgreich!
          </h2>
          
          <p className="text-gray-600 mb-6">
            Wir haben Ihnen eine Bestätigungs-E-Mail gesendet. Bitte klicken Sie auf den Link in der E-Mail, um Ihr Konto zu aktivieren und Ihr Passwort festzulegen.
          </p>

          <div className="bg-blue-50 border border-blue-200 rounded-md p-4 mb-6">
            <p className="text-sm text-blue-800">
              <strong>Nächste Schritte:</strong>
              <br />
              1. Überprüfen Sie Ihr E-Mail-Postfach
              <br />
              2. Klicken Sie auf den Bestätigungslink
              <br />
              3. Legen Sie Ihr persönliches Passwort fest
              <br />
              4. Melden Sie sich mit Ihren Zugangsdaten an
            </p>
          </div>
          
          <a
            href="/login"
            className="inline-flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            Zur Anmeldung
          </a>
        </div>
      </div>
    </div>
  )
}