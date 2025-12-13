"use client"

import { Button } from "@/components/ui/button"
import { Check } from "lucide-react"

const plans = [
  {
    name: "Starter",
    price: "$300",
    period: "per month",
    description: "For freelancers and solopreneurs",
    transactionRange: "Up to 100 transactions",
    features: [
      "Bank & credit card reconciliation",
      "Transaction categorization",
      "Monthly P&L & Balance Sheet",
      "Text-based receipt capture",
      "Real-time dashboard access",
      "24hr response time",
    ],
    popular: false,
  },
  {
    name: "Growth",
    price: "$500",
    period: "per month",
    description: "For growing small businesses",
    transactionRange: "Up to 250 transactions",
    features: [
      "Everything in Starter",
      "Accounts Payable tracking",
      "Bill payment reminders",
      "Multi-account reconciliation",
      "Priority support",
      "QuickBooks Online sync",
    ],
    popular: true,
  },
  {
    name: "Scale",
    price: "Custom",
    period: "let's talk",
    description: "For established businesses",
    transactionRange: "Unlimited transactions",
    features: [
      "Everything in Growth",
      "Dedicated bookkeeper",
      "Custom integrations",
      "Advanced reporting",
      "Phone support",
      "Quarterly strategy calls",
    ],
    popular: false,
  },
]

export function Pricing() {
  const scrollToContact = () => {
    const element = document.getElementById("contact")
    element?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section id="pricing" className="py-24 px-6 bg-secondary">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold tracking-tighter mb-4">
            SIMPLE PRICING
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Fixed monthly fees based on transaction volume.
            No hourly billing. No surprise invoices. Know what you'll pay.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
          {plans.map((plan, index) => (
            <div
              key={plan.name}
              className={`bg-white border-2 ${
                plan.popular ? "border-primary" : "border-black"
              } relative ${index > 0 ? "md:-ml-0.5" : ""}`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-primary text-white text-xs font-bold px-4 py-2 uppercase tracking-widest">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="p-8">
                <h3 className="text-sm uppercase tracking-widest text-muted-foreground mb-2">
                  {plan.name}
                </h3>
                <div className="mb-4">
                  <span className="text-5xl font-bold tracking-tighter">
                    {plan.price}
                  </span>
                  <span className="text-muted-foreground ml-2">/{plan.period}</span>
                </div>
                <p className="text-muted-foreground mb-2">{plan.description}</p>
                <p className="text-sm uppercase tracking-widest text-primary mb-6">
                  {plan.transactionRange}
                </p>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button
                  onClick={scrollToContact}
                  className={`w-full py-6 text-sm uppercase tracking-widest ${
                    plan.popular
                      ? "bg-primary text-white hover:bg-black"
                      : "bg-black text-white hover:bg-primary"
                  }`}
                >
                  {plan.price === "Custom" ? "Let's Talk" : "Get Started"}
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-16 text-center">
          <p className="text-muted-foreground mb-4">
            Behind on your books? We'll quote cleanup separately based on backlog size.
          </p>
          <button
            onClick={scrollToContact}
            className="text-sm uppercase tracking-widest hover:text-primary transition-colors underline underline-offset-4"
          >
            Get a free quote
          </button>
        </div>

        {/* Value comparison */}
        <div className="mt-20 pt-20 border-t-2 border-black">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold tracking-tighter mb-4">
                WHAT'S INCLUDED
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Every plan includes real-time dashboard access, text-based receipt capture,
                and 24-hour response times. We use modern tools to work efficiently—you
                get the benefits without paying hourly rates.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                If your transaction volume grows significantly, we'll talk about
                moving to the next tier. No surprises, no retroactive billing.
              </p>
            </div>
            <div className="bg-white border-2 border-black p-8">
              <div className="space-y-6">
                <div className="flex justify-between items-center pb-4 border-b border-black/20">
                  <span className="font-bold">Every Plan Includes</span>
                </div>
                <div className="space-y-4 text-muted-foreground">
                  <div className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Real-time financial dashboard</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Text-based receipt capture</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Books closed within 10 days</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>24-hour response guarantee</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Human review on every transaction</span>
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
