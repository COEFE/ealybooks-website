import { BookOpen, Wrench, Receipt, FileText } from "lucide-react"

const services = [
  {
    number: "01",
    icon: BookOpen,
    title: "Monthly Bookkeeping",
    description:
      "We reconcile your bank and credit card accounts, categorize every transaction, and deliver monthly P&L and Balance Sheet reports. You'll always know exactly where your business stands.",
    outcome: "Books closed within 10 days",
  },
  {
    number: "02",
    icon: Wrench,
    title: "Catch-Up & Cleanup",
    description:
      "Behind on your books? We'll clean up months (or years) of backlog so you can start fresh. Most cleanups take 1-2 weeks, and you'll finally have accurate financials for tax time.",
    outcome: "Start fresh in 1-2 weeks",
  },
  {
    number: "03",
    icon: Receipt,
    title: "Receipt Matching",
    description:
      "Text us a photo of any receipt. We'll match it to the right transaction and store it for tax time. No apps to download, no folders to organize—just text like you would a friend.",
    outcome: "Receipts stored for audit",
  },
  {
    number: "04",
    icon: FileText,
    title: "Accounts Payable",
    description:
      "Forward your bills to us. We'll track what's due, remind you before deadlines, and help you stay on top of vendor payments. Never miss a payment or lose track of what you owe.",
    outcome: "Zero missed payments",
  },
]

export function Services() {
  return (
    <section id="services" className="py-24 px-6 bg-black text-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-12 gap-8 mb-16">
          <div className="col-span-12 lg:col-span-6">
            <h2 className="text-5xl md:text-6xl font-bold tracking-tighter">
              WHAT WE DO
            </h2>
          </div>
          <div className="col-span-12 lg:col-span-6 flex items-end">
            <p className="text-xl text-white/70 leading-relaxed">
              We handle your books so you can focus on running your business.
              Every transaction is reviewed by a real person—we just use smart tools
              to work faster.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-0">
          {services.map((service, index) => (
            <div
              key={service.title}
              className={`p-8 border-t-2 border-white/20 ${
                index % 2 === 0 ? "md:border-r-2" : ""
              } hover:bg-white/5 transition-colors group`}
            >
              <div className="flex items-start justify-between mb-6">
                <span className="text-sm uppercase tracking-widest text-white/40">
                  {service.number}
                </span>
                <service.icon className="w-8 h-8 text-primary" />
              </div>

              <h3 className="text-2xl font-bold tracking-tight mb-4">
                {service.title}
              </h3>

              <p className="text-white/70 leading-relaxed mb-6">
                {service.description}
              </p>

              <div className="pt-4 border-t border-white/20">
                <p className="text-sm uppercase tracking-widest text-primary">
                  {service.outcome}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Tired of section */}
        <div className="mt-20 pt-12 border-t-2 border-white/20">
          <div className="grid grid-cols-12 gap-8">
            <div className="col-span-12 lg:col-span-4">
              <h3 className="text-3xl font-bold tracking-tighter mb-4">
                TIRED OF...
              </h3>
            </div>
            <div className="col-span-12 lg:col-span-8">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="border-l-2 border-primary pl-4">
                  <p className="text-white/70">Bookkeepers who take weeks to close the month?</p>
                </div>
                <div className="border-l-2 border-primary pl-4">
                  <p className="text-white/70">Chasing down someone who never responds?</p>
                </div>
                <div className="border-l-2 border-primary pl-4">
                  <p className="text-white/70">Doing it yourself because hiring feels complicated?</p>
                </div>
                <div className="border-l-2 border-primary pl-4">
                  <p className="text-white/70">Messy books that stress you out at tax time?</p>
                </div>
              </div>
              <p className="text-xl text-white mt-8">
                We're different. Your books closed in 10 days. Responses within 24 hours.
                Simple pricing. A real person on every transaction.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
