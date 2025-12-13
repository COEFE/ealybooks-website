"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function Hero() {
  const scrollToContact = () => {
    const element = document.getElementById("contact")
    element?.scrollIntoView({ behavior: "smooth" })
  }

  const scrollToHowItWorks = () => {
    const element = document.getElementById("how-it-works")
    element?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section className="pt-32 pb-20 px-6 min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-[0.9]">
              BOOKKEEPING
              <br />
              <span className="text-primary">THAT WORKS</span>
              <br />
              LIKE YOU DO.
            </h1>

            <p className="text-xl text-muted-foreground max-w-xl leading-relaxed">
              Text us a receipt, get a fast confirmation. Check your dashboard anytime.
              We use modern tools—including AI—to deliver accurate books faster.
              No portals, no paper, no waiting.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="text-sm uppercase tracking-widest px-8 bg-black text-white hover:bg-primary"
                onClick={scrollToContact}
              >
                Schedule a Free Call
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-sm uppercase tracking-widest px-8 border-2 border-black bg-transparent hover:bg-black hover:text-white"
                onClick={scrollToHowItWorks}
              >
                See How It Works
              </Button>
            </div>

            <div className="flex items-center gap-8 pt-8 border-t-2 border-black">
              <div>
                <p className="text-4xl font-bold tracking-tighter">10</p>
                <p className="text-sm uppercase tracking-widest text-muted-foreground">Days to Close</p>
              </div>
              <div className="w-px h-16 bg-black" />
              <div>
                <p className="text-4xl font-bold tracking-tighter">24hr</p>
                <p className="text-sm uppercase tracking-widest text-muted-foreground">Response Time</p>
              </div>
              <div className="w-px h-16 bg-black" />
              <div>
                <p className="text-4xl font-bold tracking-tighter">100%</p>
                <p className="text-sm uppercase tracking-widest text-muted-foreground">Human Reviewed</p>
              </div>
            </div>
          </div>

          <div className="relative hidden lg:block">
            {/* Swiss design geometric composition */}
            <div className="aspect-square bg-secondary relative">
              <div className="absolute inset-8 border-2 border-black"></div>
              <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-primary"></div>

              {/* SMS mockup */}
              <div className="absolute top-12 left-12 bg-white border-2 border-black p-4 shadow-lg max-w-[240px]">
                <div className="text-xs uppercase tracking-widest text-muted-foreground mb-3">Text Message</div>
                <div className="space-y-3">
                  <div className="bg-black text-white p-3 text-sm">
                    <div className="w-20 h-16 bg-white/20 mb-2 flex items-center justify-center text-xs">
                      [Receipt]
                    </div>
                  </div>
                  <div className="border-2 border-black p-3 text-sm">
                    <span className="font-bold">EalyBooks:</span> Got it! Office Depot $127.43 matched and filed. ✓
                  </div>
                </div>
              </div>

              {/* Dashboard indicator */}
              <div className="absolute bottom-16 right-16 bg-black text-white px-4 py-2">
                <p className="text-xs uppercase tracking-widest">Dashboard</p>
                <p className="text-lg font-bold">Live Access</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
