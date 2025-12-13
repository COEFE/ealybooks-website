import type React from "react"
import type { Metadata } from "next"
import { DM_Sans } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const dmSans = DM_Sans({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "EalyBooks | AI-Powered Bookkeeping Firm - Stop Chasing Receipts",
  description: "EalyBooks is a modern bookkeeping firm powered by AI. Text us your receipts, we handle the rest. 98% accuracy, monthly reports, and real human support.",
  keywords: "bookkeeping firm, AI bookkeeping, receipt processing, small business bookkeeping, virtual bookkeeper, outsourced bookkeeping, Chattanooga bookkeeper",
  openGraph: {
    title: "EalyBooks - AI-Powered Bookkeeping Firm",
    description: "Stop chasing receipts. Text us a photo, we handle the rest. Modern bookkeeping for small businesses.",
    url: "https://ealybooks.com",
    siteName: "EalyBooks",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "EalyBooks - AI-Powered Bookkeeping Firm",
    description: "Stop chasing receipts. Text us a photo, we handle the rest. Modern bookkeeping for small businesses.",
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
