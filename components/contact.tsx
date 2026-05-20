"use client"

import { useEffect, useRef, useState } from "react"
import { Mail, Phone, MapPin, Send, User, MessageSquare, Sparkles, ArrowUpRight, Github, Linkedin } from "lucide-react"
import { DownloadCvButton } from "@/components/download-cv-button"

const socialLinks = [
  { icon: Github, href: "https://github.com", label: "GitHub" },
  { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
  { icon: Mail, href: "mailto:netsorn7777@gmail.com", label: "Email" },
]

export function Contact() {
  const [isVisible, setIsVisible] = useState(false)
  const [formFocused, setFormFocused] = useState<string | null>(null)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section id="contact" ref={sectionRef} className="py-32 px-6 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      </div>
      
      <div className="mx-auto max-w-5xl relative z-10">
        <div
          data-aos="fade-up"
          className={`transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          }`}
        >
          {/* Section Header */}
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full glass text-primary text-sm font-mono mb-4">
              06. Contact
            </span>
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">
              <span className="gradient-text">Get In Touch</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              I&apos;m currently looking for new opportunities. Whether you have a question 
              or just want to say hi, I&apos;ll try my best to get back to you!
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Left side - Contact Info */}
            <div className="space-y-8">
              {/* Quick Contact Cards */}
              <div className="space-y-4">
                <a
                  href="mailto:netsorn7777@gmail.com"
                  className="group flex items-center gap-4 p-5 glass rounded-2xl hover-lift"
                >
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm text-muted-foreground mb-1">Email me at</p>
                    <p className="text-foreground font-medium group-hover:text-primary transition-colors">
                      netsorn7777@gmail.com
                    </p>
                  </div>
                  <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                </a>

                <a
                  href="tel:+855889203806"
                  className="group flex items-center gap-4 p-5 glass rounded-2xl hover-lift"
                >
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm text-muted-foreground mb-1">Call me at</p>
                    <p className="text-foreground font-medium group-hover:text-primary transition-colors">
                      +855 889203806
                    </p>
                  </div>
                  <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                </a>

                <div className="flex items-center gap-4 p-5 glass rounded-2xl">
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm text-muted-foreground mb-1">Located in</p>
                    <p className="text-foreground font-medium">
                      Toul Kork, Phnom Penh, Cambodia
                    </p>
                  </div>
                </div>

                <div className="p-5 glass rounded-2xl">
                  <p className="text-sm text-muted-foreground mb-4">Need a quick overview?</p>
                  <DownloadCvButton variant="glass" className="w-full" />
                </div>
              </div>

              {/* Social Links */}
              <div className="glass rounded-2xl p-6">
                <h4 className="text-sm font-mono text-primary mb-4">Connect with me</h4>
                <div className="flex gap-3">
                  {socialLinks.map(({ icon: Icon, href, label }) => (
                    <a
                      key={label}
                      href={href}
                      target={href.startsWith("http") ? "_blank" : undefined}
                      rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                      className="group w-12 h-12 rounded-xl bg-secondary/50 flex items-center justify-center hover:bg-primary/20 transition-all duration-300 hover-lift"
                      aria-label={label}
                    >
                      <Icon className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:scale-110 transition-all" />
                    </a>
                  ))}
                </div>
              </div>

            </div>

            {/* Right side - Contact Form */}
            <div className="glass rounded-2xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                  <MessageSquare className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">Send a Message</h4>
                  <p className="text-sm text-muted-foreground">I&apos;ll respond as soon as possible</p>
                </div>
              </div>
              
              <form className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div className="relative">
                    <label htmlFor="name" className="block text-sm font-medium text-muted-foreground mb-2">
                      Your Name
                    </label>
                    <div className={`relative rounded-xl transition-all duration-300 ${formFocused === 'name' ? 'ring-2 ring-primary/50' : ''}`}>
                      <User className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                      <input
                        type="text"
                        id="name"
                        name="name"
                        placeholder="John Doe"
                        onFocus={() => setFormFocused('name')}
                        onBlur={() => setFormFocused(null)}
                        className="w-full pl-11 pr-4 py-3.5 rounded-xl bg-secondary/50 border-0 text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:bg-secondary transition-colors"
                      />
                    </div>
                  </div>
                  <div className="relative">
                    <label htmlFor="email" className="block text-sm font-medium text-muted-foreground mb-2">
                      Your Email
                    </label>
                    <div className={`relative rounded-xl transition-all duration-300 ${formFocused === 'email' ? 'ring-2 ring-primary/50' : ''}`}>
                      <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                      <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="john@example.com"
                        onFocus={() => setFormFocused('email')}
                        onBlur={() => setFormFocused(null)}
                        className="w-full pl-11 pr-4 py-3.5 rounded-xl bg-secondary/50 border-0 text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:bg-secondary transition-colors"
                      />
                    </div>
                  </div>
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-muted-foreground mb-2">
                    Subject
                  </label>
                  <div className={`relative rounded-xl transition-all duration-300 ${formFocused === 'subject' ? 'ring-2 ring-primary/50' : ''}`}>
                    <Sparkles className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      placeholder="What's this about?"
                      onFocus={() => setFormFocused('subject')}
                      onBlur={() => setFormFocused(null)}
                      className="w-full pl-11 pr-4 py-3.5 rounded-xl bg-secondary/50 border-0 text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:bg-secondary transition-colors"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-muted-foreground mb-2">
                    Message
                  </label>
                  <div className={`relative rounded-xl transition-all duration-300 ${formFocused === 'message' ? 'ring-2 ring-primary/50' : ''}`}>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      placeholder="Your message here..."
                      onFocus={() => setFormFocused('message')}
                      onBlur={() => setFormFocused(null)}
                      className="w-full px-4 py-3.5 rounded-xl bg-secondary/50 border-0 text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:bg-secondary transition-colors resize-none"
                    />
                  </div>
                </div>
                
                <button
                  type="submit"
                  className="w-full group flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-primary text-primary-foreground font-medium hover:shadow-lg hover:shadow-primary/25 transition-all duration-300 hover-lift"
                >
                  <Send className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
