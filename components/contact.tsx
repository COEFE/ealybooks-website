"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Loader2 } from "lucide-react"

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    business: "",
    message: "",
  })
  const [loading, setLoading] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const [error, setError] = useState<string | null>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError(null)

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (!response.ok) {
        throw new Error('Failed to submit form')
      }

      setSubmitted(true)
    } catch (err) {
      setError('Something went wrong. Please try again or email us directly.')
      console.error('Form submission error:', err)
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="contact" className="py-24 px-6 bg-primary text-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Left Column */}
          <div>
            <h2 className="text-5xl md:text-6xl font-bold tracking-tighter mb-8">
              LET'S TALK
            </h2>
            <p className="text-xl mb-8 leading-relaxed opacity-90">
              Whether you need monthly bookkeeping, a cleanup, or you're just exploring
              your options—let's have a conversation. No pressure, no sales pitch.
              Just an honest discussion about whether we're a good fit.
            </p>
            <p className="text-lg mb-12 opacity-90">
              Most calls take about 15 minutes. We'll ask about your business,
              review your current setup, and give you a clear quote.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <span className="w-24 text-sm uppercase tracking-widest opacity-70">
                  Email
                </span>
                <a
                  href="mailto:chris@ealybooks.com"
                  className="hover:underline underline-offset-4"
                >
                  chris@ealybooks.com
                </a>
              </div>
              <div className="flex items-start gap-4">
                <span className="w-24 text-sm uppercase tracking-widest opacity-70">
                  Phone
                </span>
                <a
                  href="tel:+13473138627"
                  className="hover:underline underline-offset-4"
                >
                  (347) 313-8627
                </a>
              </div>
              <div className="flex items-start gap-4">
                <span className="w-24 text-sm uppercase tracking-widest opacity-70">
                  Based in
                </span>
                <span>New York City</span>
              </div>
            </div>

            {/* What to expect */}
            <div className="mt-16 pt-8 border-t border-white/20">
              <p className="text-sm uppercase tracking-widest opacity-70 mb-4">
                What to expect
              </p>
              <div className="space-y-3 text-sm opacity-90">
                <p>→ 15-minute intro call to understand your needs</p>
                <p>→ Clear quote based on your transaction volume</p>
                <p>→ No long-term contracts required</p>
                <p>→ Response within 24 hours</p>
              </div>
            </div>
          </div>

          {/* Right Column - Form */}
          <div>
            {!submitted ? (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Label
                    htmlFor="name"
                    className="block text-sm uppercase tracking-widest mb-2 opacity-70"
                  >
                    Name
                  </Label>
                  <Input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    required
                    className="w-full bg-transparent border-0 border-b-2 border-white/50 rounded-none py-3 focus:outline-none focus:border-white placeholder-white/50 transition-colors text-white"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <Label
                    htmlFor="email"
                    className="block text-sm uppercase tracking-widest mb-2 opacity-70"
                  >
                    Email
                  </Label>
                  <Input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    required
                    className="w-full bg-transparent border-0 border-b-2 border-white/50 rounded-none py-3 focus:outline-none focus:border-white placeholder-white/50 transition-colors text-white"
                    placeholder="you@example.com"
                  />
                </div>
                <div>
                  <Label
                    htmlFor="business"
                    className="block text-sm uppercase tracking-widest mb-2 opacity-70"
                  >
                    Business Type
                  </Label>
                  <Input
                    type="text"
                    id="business"
                    value={formData.business}
                    onChange={(e) =>
                      setFormData({ ...formData, business: e.target.value })
                    }
                    className="w-full bg-transparent border-0 border-b-2 border-white/50 rounded-none py-3 focus:outline-none focus:border-white placeholder-white/50 transition-colors text-white"
                    placeholder="e.g., Real Estate, Construction, E-commerce"
                  />
                </div>
                <div>
                  <Label
                    htmlFor="message"
                    className="block text-sm uppercase tracking-widest mb-2 opacity-70"
                  >
                    Tell us about your situation
                  </Label>
                  <Textarea
                    id="message"
                    rows={4}
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    className="w-full bg-transparent border-0 border-b-2 border-white/50 rounded-none py-3 focus:outline-none focus:border-white placeholder-white/50 transition-colors resize-none text-white"
                    placeholder="Are you current on your books? Need a cleanup? Just exploring options?"
                  />
                </div>
                {error && (
                  <div className="bg-red-500/20 border border-red-300 text-white px-4 py-3 rounded">
                    {error}
                  </div>
                )}
                <Button
                  type="submit"
                  disabled={loading}
                  className="mt-4 px-8 py-6 bg-black text-white text-sm uppercase tracking-widest hover:bg-white hover:text-black transition-colors disabled:opacity-50 flex items-center justify-center gap-2"
                >
                  {loading ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    "Request a Call"
                  )}
                </Button>
              </form>
            ) : (
              <div className="bg-white/10 p-12 text-center">
                <h3 className="text-3xl font-bold mb-4">Got It!</h3>
                <p className="text-xl opacity-90 mb-8">
                  Thanks for reaching out. We'll get back to you within 24 hours
                  to schedule a time to chat.
                </p>
                <button
                  onClick={() => {
                    setSubmitted(false)
                    setFormData({ name: "", email: "", business: "", message: "" })
                  }}
                  className="text-sm uppercase tracking-widest hover:underline underline-offset-4"
                >
                  Send Another Message
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
