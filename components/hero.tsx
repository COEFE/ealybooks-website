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
              See your financials anytime on a real-time dashboard. Get responses in 24 hours,
              not days. We use modern tools—including AI—to close your books faster and
              keep you in the loop.
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

              {/* Dashboard mockup */}
              <div className="absolute top-12 left-12 bg-white border-2 border-black p-6 shadow-lg max-w-[220px]">
                <div className="text-xs uppercase tracking-widest text-muted-foreground mb-2">Dashboard</div>
                <div className="text-sm font-bold mb-1">December 2025</div>
                <div className="text-xs text-muted-foreground mb-3">P&L Summary</div>
                <div className="space-y-2 text-xs border-t border-black pt-2">
                  <div className="flex justify-between">
                    <span>Revenue</span>
                    <span className="font-bold">$24,500</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Expenses</span>
                    <span>$18,230</span>
                  </div>
                  <div className="flex justify-between font-bold pt-1 border-t border-black text-primary">
                    <span>Net Profit</span>
                    <span>$6,270</span>
                  </div>
                </div>
              </div>

              {/* Status indicator */}
              <div className="absolute bottom-16 right-16 bg-black text-white px-4 py-2">
                <p className="text-xs uppercase tracking-widest">Books Closed</p>
                <p className="text-lg font-bold">Dec 10, 2025</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
