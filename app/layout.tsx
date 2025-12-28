import type React from "react"
import type { Metadata, Viewport } from "next"
import { DM_Sans } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const dmSans = DM_Sans({ subsets: ["latin"] })

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#0D9488",
}

export const metadata: Metadata = {
  title: "EalyBooks | Modern Bookkeeping for Growing Businesses",
  description: "EalyBooks is a modern bookkeeping firm. Real-time dashboard access, 24-hour response time, monthly financial reports. Based in New York City.",
  keywords: "bookkeeping firm, small business bookkeeping, virtual bookkeeper, outsourced bookkeeping, NYC bookkeeper, real-time dashboard",
  openGraph: {
    title: "EalyBooks - Modern Bookkeeping for Growing Businesses",
    description: "Real-time dashboard access, 24-hour response time, monthly financial reports. Based in New York City.",
    url: "https://ealybooks.com",
    siteName: "EalyBooks",
    type: "website",
    images: [
      {
        url: "https://ealybooks.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "EalyBooks - Modern Bookkeeping for Growing Businesses",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "EalyBooks - Modern Bookkeeping for Growing Businesses",
    description: "Real-time dashboard access, 24-hour response time, monthly financial reports. Based in New York City.",
    images: ["https://ealybooks.com/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
}

// Structured data for LocalBusiness (helps Google rich results)
const structuredData = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "name": "EalyBooks",
  "description": "Modern bookkeeping firm with real-time dashboard access, 24-hour response time, and monthly financial reports.",
  "url": "https://ealybooks.com",
  "logo": "https://ealybooks.com/logo-final.png",
  "image": "https://ealybooks.com/og-image.png",
  "telephone": "+1-347-313-8627",
  "email": "chris@ealybooks.com",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "New York",
    "addressRegion": "NY",
    "addressCountry": "US"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "40.7128",
    "longitude": "-74.0060"
  },
  "areaServed": {
    "@type": "Country",
    "name": "United States"
  },
  "priceRange": "$$",
  "serviceType": ["Bookkeeping", "Financial Reporting", "Bank Reconciliation", "Accounts Payable"],
  "founder": {
    "@type": "Person",
    "name": "Chris Ealy"
  },
  "sameAs": [
    "https://linkedin.com/in/christopherealy"
  ]
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body className={`${dmSans.className} antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
