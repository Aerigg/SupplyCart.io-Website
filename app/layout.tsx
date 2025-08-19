import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { AuthProvider } from '@/lib/auth-context'

const inter = Inter({ subsets: ['latin'] })

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
}

export const metadata: Metadata = {
  title: 'SupplyCart.io - Modernes Bestell- und Lagerverwaltungssystem',
  description: 'Optimieren Sie Ihre Bestell- und Lagerprozesse mit SupplyCart.io - Die All-in-One Lösung für effizientes Supply Chain Management',
  keywords: 'Lagerverwaltung, Bestellsystem, Supply Chain, Inventar Management, B2B Software',
  authors: [{ name: 'SupplyCart.io' }],
  icons: {
    icon: '/images/favicon.ico',
    shortcut: '/images/favicon.png',
    apple: '/images/favicon.png',
  },
  openGraph: {
    title: 'SupplyCart.io - Modernes Bestell- und Lagerverwaltungssystem',
    description: 'Optimieren Sie Ihre Bestell- und Lagerprozesse mit SupplyCart.io',
    type: 'website',
    locale: 'de_DE',
    url: 'https://supplycart.io',
    siteName: 'SupplyCart.io',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SupplyCart.io',
    description: 'Modernes Bestell- und Lagerverwaltungssystem',
  },
  robots: 'index, follow',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="de" suppressHydrationWarning>
      <body className={inter.className}>
        <AuthProvider>
          {children}
        </AuthProvider>
      </body>
    </html>
  )
}