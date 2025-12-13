import Image from "next/image"
import { Building2, Mountain, Printer, Shield } from "lucide-react"

const highlights = [
  {
    icon: Building2,
    title: "Enterprise Experience",
    description: "Associate Director of Accounting overseeing month-end close, audits, and financial reporting across multiple entities.",
  },
  {
    icon: Shield,
    title: "Modern Tech Stack",
    description: "Hands-on expertise in NetSuite, QuickBooks, Sage Intacct, Bill.com, Coupa, and Adaptive Insights.",
  },
  {
    icon: Printer,
    title: "Founder Experience",
    description: "Ran a product-based business on Etsy—understands the real challenges of expense tracking, margins, and cash flow.",
  },
  {
    icon: Mountain,
    title: "Builder Mindset",
    description: "Rock climber, licensed drone pilot, and 3D printing enthusiast. Approaches problems with creativity and precision.",
  },
]

export function About() {
  return (
    <section id="about" className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-12 gap-8 lg:gap-16">
          {/* Left Column - Title and Intro */}
          <div className="col-span-12 lg:col-span-5">
            <h2 className="text-5xl md:text-6xl font-bold tracking-tighter mb-6">
              MEET
              <br />
              CHRIS
            </h2>

            {/* Photo */}
            <div className="mb-8 border-2 border-black">
              <Image
                src="/chris-ealy.jpg"
                alt="Christopher Ealy - Founder of EalyBooks"
                width={500}
                height={500}
                className="w-full aspect-square object-cover object-top"
                priority
              />
            </div>

            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <p>
                Christopher Ealy is an experienced accounting professional specializing in
                fintech- and SaaS-focused bookkeeping, with a strong foundation in nonprofit
                and small-business finance.
              </p>
              <p>
                He currently serves as an Associate Director of Accounting within a New York–based
                organization, where he oversees month-end close, audits, cash management, grant
                compliance, and financial reporting across multiple entities.
              </p>
              <p>
                Chris has hands-on experience supporting modern, growth-oriented businesses with
                recurring revenue models and complex financial operations.
              </p>
            </div>
          </div>

          {/* Right Column - Details */}
          <div className="col-span-12 lg:col-span-7">
            {/* Highlights Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
              {highlights.map((item) => (
                <div key={item.title} className="border-2 border-black p-6 hover:bg-secondary transition-colors">
                  <item.icon className="w-8 h-8 text-primary mb-4" />
                  <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>

            {/* Philosophy */}
            <div className="border-t-2 border-black pt-8">
              <p className="text-xl leading-relaxed mb-6">
                Known for his structured, detail-oriented approach and clear communication style,
                Chris helps founders gain confidence in their numbers and clarity in their financial decisions.
              </p>
              <div className="bg-primary text-white p-8">
                <p className="text-lg font-bold mb-2">His goal is simple:</p>
                <p className="text-2xl font-bold tracking-tight">
                  Clean books. Reliable systems. Financial visibility that supports growth.
                </p>
              </div>
            </div>

            {/* Specialization */}
            <div className="mt-8 pt-8 border-t-2 border-black">
              <p className="text-sm uppercase tracking-widest text-muted-foreground mb-4">
                Specializing in
              </p>
              <div className="flex flex-wrap gap-3">
                {["Fintech", "SaaS", "Product-Based Businesses", "Startups", "Small Business"].map((tag) => (
                  <span key={tag} className="border-2 border-black px-4 py-2 text-sm font-bold uppercase tracking-widest">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
