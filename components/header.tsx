"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

export function Header() {
  const [isOpen, setIsOpen] = useState(false)

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    element?.scrollIntoView({ behavior: "smooth" })
    setIsOpen(false)
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b-2 border-black">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center">
          <Image
            src="/logo.png"
            alt="EalyBooks Bookkeeping"
            width={180}
            height={50}
            className="h-10 w-auto"
            priority
          />
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          <button
            onClick={() => scrollToSection("services")}
            className="text-sm uppercase tracking-widest text-muted-foreground hover:text-foreground transition-colors"
          >
            Services
          </button>
          <button
            onClick={() => scrollToSection("how-it-works")}
            className="text-sm uppercase tracking-widest text-muted-foreground hover:text-foreground transition-colors"
          >
            How It Works
          </button>
          <button
            onClick={() => scrollToSection("pricing")}
            className="text-sm uppercase tracking-widest text-muted-foreground hover:text-foreground transition-colors"
          >
            Pricing
          </button>
          <button
            onClick={() => scrollToSection("contact")}
            className="text-sm uppercase tracking-widest text-muted-foreground hover:text-foreground transition-colors"
          >
            Contact
          </button>
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <Link href="https://app.penny-sense.com/login">
            <Button variant="ghost" className="text-sm uppercase tracking-widest">
              Client Portal
            </Button>
          </Link>
          <Button
            onClick={() => scrollToSection("contact")}
            className="text-sm uppercase tracking-widest bg-black text-white hover:bg-primary"
          >
            Get Started
          </Button>
        </div>

        <button className="md:hidden p-2" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white border-b-2 border-black">
          <nav className="flex flex-col px-6 py-4 gap-4">
            <button
              onClick={() => scrollToSection("services")}
              className="text-sm uppercase tracking-widest text-muted-foreground hover:text-foreground transition-colors text-left"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection("how-it-works")}
              className="text-sm uppercase tracking-widest text-muted-foreground hover:text-foreground transition-colors text-left"
            >
              How It Works
            </button>
            <button
              onClick={() => scrollToSection("pricing")}
              className="text-sm uppercase tracking-widest text-muted-foreground hover:text-foreground transition-colors text-left"
            >
              Pricing
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-sm uppercase tracking-widest text-muted-foreground hover:text-foreground transition-colors text-left"
            >
              Contact
            </button>
            <div className="flex flex-col gap-2 pt-4 border-t border-black">
              <Link href="https://app.penny-sense.com/login">
                <Button variant="ghost" className="justify-start text-sm uppercase tracking-widest w-full">
                  Client Portal
                </Button>
              </Link>
              <Button
                onClick={() => scrollToSection("contact")}
                className="text-sm uppercase tracking-widest bg-black text-white hover:bg-primary w-full"
              >
                Get Started
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}
