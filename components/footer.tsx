"use client"

import { Github, Linkedin, Mail, Phone, Heart, ArrowUp, Code2 } from "lucide-react"
import { DownloadCvButton } from "@/components/download-cv-button"

const socialLinks = [
  { name: "GitHub", href: "https://github.com/panhavann09", icon: Github },
  { name: "LinkedIn", href: "https://linkedin.com", icon: Linkedin },
  { name: "Email", href: "mailto:panhavann09@gmail.com", icon: Mail },
  { name: "Phone", href: "tel:+85514699106", icon: Phone },
]

const quickLinks = [
  { name: "About", href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Skills", href: "#skills" },
  { name: "Contact", href: "#contact" },
]

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <footer className="relative pt-20 pb-8 px-6 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-card/50 to-transparent pointer-events-none" />
      
      <div className="mx-auto max-w-6xl relative z-10" data-aos="fade-up">
        {/* Top section with back to top */}
        <div className="flex justify-center mb-12">
          <button
            onClick={scrollToTop}
            className="group flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
          >
            <div className="w-12 h-12 rounded-full glass flex items-center justify-center group-hover:bg-primary/10 transition-all duration-300 group-hover:-translate-y-1">
              <ArrowUp className="w-5 h-5" />
            </div>
            <span className="text-xs font-mono">Back to top</span>
          </button>
        </div>

        {/* Main footer content */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                <Code2 className="w-5 h-5 text-primary" />
              </div>
              <span className="text-xl font-bold gradient-text">VP</span>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed max-w-sm mb-6">
              Robotics and Automation Engineer dedicated to designing innovative robotic systems 
              that solve real-world problems and push the boundaries of mechanical engineering.
            </p>
            <DownloadCvButton variant="glass" className="mb-6" />
            {/* Social Links */}
            <div className="flex gap-3">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  target={link.href.startsWith("http") ? "_blank" : undefined}
                  rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="group w-10 h-10 rounded-xl glass flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all duration-300"
                  aria-label={link.name}
                >
                  <link.icon className="h-4 w-4 group-hover:scale-110 transition-transform" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold text-foreground mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors underline-animate"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-sm font-semibold text-foreground mb-4">Get in Touch</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li>
                <a href="mailto:panhavann09@gmail.com" className="hover:text-primary transition-colors">
                  panhavann09@gmail.com
                </a>
              </li>
              <li>
                <a href="tel:+85514699106" className="hover:text-primary transition-colors">
                  +855 14699106
                </a>
              </li>
              <li>Battambang, Cambodia</li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-border/50">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-xs text-muted-foreground flex items-center gap-1">
              &copy; {new Date().getFullYear()} Vann Panha. Made with 
              <Heart className="w-3 h-3 text-red-500 fill-red-500 animate-pulse" />
            </p>
            <p className="text-xs text-muted-foreground font-mono">
              Built with Next.js + Tailwind CSS
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
