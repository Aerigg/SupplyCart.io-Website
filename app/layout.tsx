import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'SupplyCart.io - Modernes Bestell- und Lagerverwaltungssystem',
  description: 'Optimieren Sie Ihre Bestell- und Lagerprozesse mit SupplyCart.io - Die All-in-One Lösung für effizientes Supply Chain Management',
  keywords: 'Lagerverwaltung, Bestellsystem, Supply Chain, Inventar Management, B2B Software',
  authors: [{ name: 'SupplyCart.io' }],
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
  viewport: 'width=device-width, initial-scale=1',
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
        {children}
      </body>
    </html>
  )
}