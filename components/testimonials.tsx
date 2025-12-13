import { Card, CardContent } from "@/components/ui/card"
import { Quote } from "lucide-react"
import Image from "next/image"

const testimonials = [
  {
    quote:
      "I was skeptical about AI handling my books, but Ledger & Co. proved me wrong. The technology saves time, but it's the personal touch that keeps me loyal.",
    name: "Sarah Chen",
    role: "Founder, Bloom Studio",
    image: "/professional-asian-woman-headshot-warm-smile.jpg",
  },
  {
    quote:
      "My last bookkeeper felt like a black box. Here, I actually understand my finances. The monthly calls have been invaluable for planning our growth.",
    name: "Marcus Thompson",
    role: "CEO, Thompson Construction",
    image: "/professional-black-man-headshot-friendly.jpg",
  },
  {
    quote:
      "The combination of instant AI processing and human oversight is perfect. Errors get caught immediately, and I always have someone to call.",
    name: "Elena Rodriguez",
    role: "Owner, Casa Verde Restaurant",
    image: "/professional-latina-woman-headshot-warm.jpg",
  },
]

export function Testimonials() {
  return (
    <section id="testimonials" className="py-24 px-6 bg-card">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-medium mb-4 text-balance">Trusted by business owners</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Real stories from real clients who've found the balance between efficiency and personal service.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.name} className="bg-background border-border">
              <CardContent className="pt-8">
                <Quote className="w-10 h-10 text-primary/20 mb-4" />
                <p className="text-foreground leading-relaxed mb-6">"{testimonial.quote}"</p>
                <div className="flex items-center gap-4">
                  <div className="relative w-12 h-12 rounded-full overflow-hidden bg-secondary">
                    <Image
                      src={testimonial.image || "/placeholder.svg"}
                      alt={testimonial.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
