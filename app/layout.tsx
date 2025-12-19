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
  },
  twitter: {
    card: "summary_large_image",
    title: "EalyBooks - Modern Bookkeeping for Growing Businesses",
    description: "Real-time dashboard access, 24-hour response time, monthly financial reports. Based in New York City.",
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${dmSans.className} antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
