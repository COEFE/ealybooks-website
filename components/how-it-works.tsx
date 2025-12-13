"use client"

import { Phone, Users, FileText, MessageSquare } from "lucide-react"

const steps = [
  {
    number: "01",
    icon: Phone,
    title: "Free Consultation",
    description:
      "We start with a 15-minute call to understand your business. We'll review your current setup, discuss your needs, and give you an honest assessment of whether we're a good fit.",
  },
  {
    number: "02",
    icon: Users,
    title: "Onboarding",
    description:
      "We connect to your bank and credit card accounts (read-only access). If your books need cleanup, we'll handle that first. No work begins until you've signed our agreement and setup is complete.",
  },
  {
    number: "03",
    icon: FileText,
    title: "Monthly Bookkeeping",
    description:
      "Each month, we reconcile your accounts, categorize every transaction, and deliver your P&L and Balance Sheet. Books are closed within 10 days of month-end. Every transaction is reviewed by a real person.",
  },
  {
    number: "04",
    icon: MessageSquare,
    title: "Ongoing Support",
    description:
      "Questions? Just text or email us. Need a report for your bank or accountant? We've got you. We're here to make your financial life easier—not just at month-end, but whenever you need us.",
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
              HOW WE
              <br />
              WORK
              <br />
              TOGETHER
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed mb-8">
              Simple process. Clear communication.
              No surprises. Here's what working with us looks like.
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

        {/* Receipt texting feature */}
        <div className="mt-20 pt-20 border-t-2 border-black">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-4xl font-bold tracking-tighter mb-6">
                RECEIPTS? JUST TEXT US.
              </h3>
              <p className="text-xl text-muted-foreground leading-relaxed mb-8">
                No apps to download. No folders to organize.
                Just snap a photo and text it to us. We'll match it to the right transaction
                and store it for tax time.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-black text-white flex items-center justify-center text-sm font-bold">
                    1
                  </div>
                  <p>Take a photo of your receipt</p>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-black text-white flex items-center justify-center text-sm font-bold">
                    2
                  </div>
                  <p>Text it to (646) 540-9940</p>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-black text-white flex items-center justify-center text-sm font-bold">
                    3
                  </div>
                  <p>We match it and file it for you</p>
                </div>
              </div>
            </div>
            <div className="bg-secondary p-8">
              {/* Phone mockup */}
              <div className="bg-white border-2 border-black p-4 max-w-xs mx-auto">
                <div className="bg-secondary p-4 space-y-4">
                  {/* Sent message */}
                  <div className="flex justify-end">
                    <div className="bg-black text-white px-4 py-2 max-w-[80%]">
                      <div className="w-32 h-40 bg-white/20 mb-2 flex items-center justify-center text-xs">
                        [Receipt Image]
                      </div>
                    </div>
                  </div>
                  {/* Response */}
                  <div className="flex justify-start">
                    <div className="bg-white border-2 border-black px-4 py-3 max-w-[80%]">
                      <p className="text-sm font-bold mb-1">EalyBooks</p>
                      <p className="text-sm">
                        Got it! I'll match this to your Home Depot transaction from yesterday.
                      </p>
                    </div>
                  </div>
                  {/* Confirmation */}
                  <div className="flex justify-start">
                    <div className="bg-white border-2 border-black px-4 py-3 max-w-[80%]">
                      <p className="text-sm">
                        ✓ Receipt matched and filed.
                        <br />
                        Office Supplies: $127.43
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
