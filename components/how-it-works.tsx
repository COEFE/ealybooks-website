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
      "We connect to your accounts (read-only) and handle any cleanup. Most clients are fully onboarded within a week.",
  },
  {
    number: "03",
    icon: FileText,
    title: "Monthly Close",
    description:
      "Each month: reconciliation, categorization, and your reports delivered. Books closed within 10 days of month-end.",
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

      </div>
    </section>
  )
}
