import type { Metadata } from 'next'
import { Inter, DM_Serif_Display } from 'next/font/google'
import './globals.css'
import StructuredData from '@/components/StructuredData'

const inter = Inter({ 
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-inter',
})

const dmSerif = DM_Serif_Display({
  subsets: ['latin'],
  weight: '400',
  style: ['normal', 'italic'],
  variable: '--font-dm-serif',
})

// Aplica el tema guardado antes del primer pintado para evitar parpadeo
const themeScript = `try{if(localStorage.getItem('theme')==='light')document.documentElement.dataset.theme='light'}catch(e){}`

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
}

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'),
  title: {
    default: 'Julia Gómez — Product Builder, Creativa & Escritora',
    template: '%s | Julia Gómez'
  },
  description: 'Julia Gómez construye ecosistemas digitales desde cero — sitios, apps, sistemas y productos con identidad propia. Product builder, escritora y mentora desde Hermosillo, Sonora.',
  keywords: [
    'Julia Gómez',
    'AI researcher',
    'escritora',
    'desarrolladora',
    'inteligencia artificial',
    'machine learning',
    'narrativa digital',
    'tecnología',
    'impacto social',
    'Next.js',
    'TypeScript',
    'frontend development',
    'content generation',
    'bias detection',
    'AI ethics',
    'editorial AI',
    'storytelling',
    'tech mentoring'
  ],
  authors: [{ name: 'Julia Gómez', url: 'https://juliagomezg.dev' }],
  creator: 'Julia Gómez',
  publisher: 'Julia Gómez',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: process.env.GOOGLE_VERIFICATION,
  },
  alternates: {
    canonical: process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000',
  },
  openGraph: {
    type: 'website',
    locale: 'es_ES',
    alternateLocale: 'en_US',
    url: process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000',
    title: 'Julia Gómez - Editorial AI | Escritora & Desarrolladora IA',
    description: 'Explorando la intersección entre narrativa humana e inteligencia artificial. Especialista en machine learning, desarrollo frontend y contenido editorial con IA.',
    siteName: 'Julia Gómez Portfolio',
    images: [
      {
        url: '/img/cerebro.png',
        width: 1200,
        height: 630,
        alt: 'Julia Gómez - AI Researcher & Developer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Julia Gómez - Editorial AI',
    description: 'Escritora, desarrolladora e investigadora de IA. Creando contenido que conecta tecnología con propósito social.',
    creator: '@juliagomezg',
    images: ['/img/cerebro.png'],
  },
  category: 'Technology',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" className={`${inter.variable} ${dmSerif.variable}`} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className="font-sans overflow-x-hidden">
        <StructuredData />
        {children}
      </body>
    </html>
  )
} 