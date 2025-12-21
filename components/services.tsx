import { BookOpen, Wrench, Receipt, Clock } from "lucide-react"

const services = [
  {
    number: "01",
    icon: BookOpen,
    title: "Monthly Bookkeeping",
    description:
      "Bank and credit card reconciliation, transaction categorization, and monthly P&L and Balance Sheet reports. Reliable, accurate books you can count on.",
    outcome: "Monthly reports delivered",
  },
  {
    number: "02",
    icon: Wrench,
    title: "Catch-Up & Cleanup",
    description:
      "Behind on your books? We'll clean up months or years of backlog so you can start fresh. Most cleanups done in 1-2 weeks—so you're ready for tax time or that investor meeting.",
    outcome: "Start fresh in 1-2 weeks",
  },
  {
    number: "03",
    icon: Receipt,
    title: "Receipt Matching",
    description:
      "Text us a photo of any receipt. We'll match it to the right transaction and store it for tax time. No apps to download, no folders to organize.",
    outcome: "Receipts stored for audit",
  },
  {
    number: "04",
    icon: Clock,
    title: "Fast Response Time",
    description:
      "Questions answered within 24 hours. Need a report for a loan application or investor? We'll get it to you fast. No chasing, no waiting, no excuses.",
    outcome: "24hr response guarantee",
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
              Modern bookkeeping for businesses that expect more. Fast turnaround,
              real-time access, and an experience that doesn't feel stuck in 2005.
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
                  <p className="text-white/70">Clunky portals that feel like they were built in 2008?</p>
                </div>
                <div className="border-l-2 border-primary pl-4">
                  <p className="text-white/70">Waiting weeks to see your own financial data?</p>
                </div>
                <div className="border-l-2 border-primary pl-4">
                  <p className="text-white/70">Bookkeepers who don't respond to texts?</p>
                </div>
                <div className="border-l-2 border-primary pl-4">
                  <p className="text-white/70">Doing it yourself because hiring feels like a hassle?</p>
                </div>
              </div>
              <p className="text-xl text-white mt-8">
                We built EalyBooks for people like us—people who expect their vendors
                to be as tech-forward as they are.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
