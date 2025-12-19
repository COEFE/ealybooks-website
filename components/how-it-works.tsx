"use client"

import { Phone, Zap, FileText, MessageSquare } from "lucide-react"

const steps = [
  {
    number: "01",
    icon: Phone,
    title: "Quick Intro Call",
    description:
      "15 minutes to understand your business and current setup. We'll tell you honestly if we're a good fit—no hard sell.",
  },
  {
    number: "02",
    icon: Zap,
    title: "Fast Onboarding",
    description:
      "We connect to your accounts (read-only), set up your dashboard, and handle any cleanup. Most clients are fully onboarded within a week.",
  },
  {
    number: "03",
    icon: FileText,
    title: "Monthly Close",
    description:
      "Each month: reconciliation, categorization, and your reports delivered. Dashboard updated in real-time as we work.",
  },
  {
    number: "04",
    icon: MessageSquare,
    title: "Always Available",
    description:
      "Text us anytime. Need a report for a loan application? Done. Question about a transaction? We respond within 24 hours.",
  },
]

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-12 gap-8">
          {/* Left Column - Title */}
          <div className="col-span-12 lg:col-span-4">
            <h2 className="text-5xl md:text-6xl font-bold tracking-tighter mb-6">
              HOW IT
              <br />
              WORKS
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed mb-8">
              Simple onboarding. Fast setup.
              No lengthy implementations or confusing processes.
            </p>
            <div className="hidden lg:block">
              <div className="aspect-[4/3] bg-secondary relative">
                <div className="absolute inset-8 border-2 border-black"></div>
                <div className="absolute bottom-4 right-4 w-20 h-20 bg-primary"></div>
              </div>
            </div>
          </div>

          {/* Right Column - Steps */}
          <div className="col-span-12 lg:col-span-8">
            <div className="space-y-0">
              {steps.map((step) => (
                <div
                  key={step.number}
                  className="border-t-2 border-black py-8 grid grid-cols-12 gap-4 md:gap-8 items-start group hover:bg-secondary transition-colors px-4 -mx-4"
                >
                  <div className="col-span-2 md:col-span-1">
                    <span className="text-sm uppercase tracking-widest text-muted-foreground group-hover:text-primary transition-colors">
                      {step.number}
                    </span>
                  </div>
                  <div className="col-span-10 md:col-span-3">
                    <div className="flex items-center gap-3">
                      <step.icon className="w-6 h-6 text-primary" />
                      <h3 className="text-xl font-bold">{step.title}</h3>
                    </div>
                  </div>
                  <div className="col-span-12 md:col-span-8 md:col-start-5">
                    <p className="text-muted-foreground leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
              {/* Final border */}
              <div className="border-t-2 border-black"></div>
            </div>
          </div>
        </div>

        {/* Dashboard feature */}
        <div className="mt-20 pt-20 border-t-2 border-black">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-4xl font-bold tracking-tighter mb-6">
                YOUR NUMBERS. ANYTIME.
              </h3>
              <p className="text-xl text-muted-foreground leading-relaxed mb-8">
                No more waiting for monthly emails or chasing down your bookkeeper
                for a report. Your dashboard is always up to date.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-black text-white flex items-center justify-center text-sm font-bold">
                    ✓
                  </div>
                  <p>P&L and Balance Sheet updated in real-time</p>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-black text-white flex items-center justify-center text-sm font-bold">
                    ✓
                  </div>
                  <p>Cash position and runway at a glance</p>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-black text-white flex items-center justify-center text-sm font-bold">
                    ✓
                  </div>
                  <p>Export reports anytime you need them</p>
                </div>
              </div>
            </div>
            <div className="bg-secondary p-8">
              {/* Dashboard mockup */}
              <div className="bg-white border-2 border-black p-6 max-w-xs mx-auto">
                <div className="text-xs uppercase tracking-widest text-muted-foreground mb-4">Live Dashboard</div>
                <div className="space-y-4">
                  <div className="border-b border-black/20 pb-3">
                    <p className="text-xs text-muted-foreground">Revenue (MTD)</p>
                    <p className="text-2xl font-bold">$24,500</p>
                  </div>
                  <div className="border-b border-black/20 pb-3">
                    <p className="text-xs text-muted-foreground">Expenses (MTD)</p>
                    <p className="text-2xl font-bold">$18,230</p>
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">Net Profit</p>
                    <p className="text-2xl font-bold text-primary">$6,270</p>
                  </div>
                </div>
                <div className="mt-4 pt-4 border-t border-black/20 text-xs text-muted-foreground">
                  Last updated: 2 hours ago
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
