"use client"

import { useState, useEffect } from "react"
import { cn } from "@/lib/utils"
import { Menu, X, ChevronRight } from "lucide-react"
import { ThemeToggle } from "@/components/theme-toggle"
import { DownloadCvButton } from "@/components/download-cv-button"

const navItems = [
  { name: "About", href: "#about", number: "01" },
  { name: "Experience", href: "#experience", number: "02" },
  { name: "Projects", href: "#projects", number: "03" },
  { name: "Skills", href: "#skills", number: "04" },
  { name: "Education", href: "#education", number: "05" },
  { name: "Contact", href: "#contact", number: "06" },
]

export function Header() {
  const [activeSection, setActiveSection] = useState("")
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)

      const sections = navItems.map((item) => item.href.slice(1))
      const currentSection = sections.find((section) => {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          return rect.top <= 100 && rect.bottom >= 100
        }
        return false
      })
      if (currentSection) {
        setActiveSection(currentSection)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <>
      <header
        className={cn(
          "fixed top-0 z-50 w-full transition-all duration-500",
          isScrolled ? "glass-premium border-b border-primary/10" : "bg-transparent",
          mounted ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"
        )}
      >
        <nav className="mx-auto max-w-7xl px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <a 
              href="#" 
              className="group relative text-2xl font-bold text-primary transition-all duration-300 hover:scale-105"
            >
              <span className="relative z-10 flex items-center gap-1">
                <span className="text-primary">&lt;</span>
                <span className="gradient-text">VP</span>
                <span className="text-primary">/&gt;</span>
              </span>
              <span className="absolute -inset-2 rounded-lg bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity blur-sm" />
            </a>

            {/* Desktop Navigation */}
            <ul className="hidden md:flex items-center gap-1">
              {navItems.map((item, index) => (
                <li 
                  key={item.name}
                  className={cn(
                    "transition-all duration-500",
                    mounted ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"
                  )}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <a
                    href={item.href}
                    className={cn(
                      "group relative flex items-center gap-1 px-4 py-2 text-sm font-medium transition-all duration-300 rounded-lg",
                      activeSection === item.href.slice(1) 
                        ? "text-primary" 
                        : "text-muted-foreground hover:text-foreground"
                    )}
                  >
                    <span className="text-primary font-mono text-xs opacity-70 group-hover:opacity-100 transition-opacity">
                      {item.number}.
                    </span>
                    <span className="relative">
                      {item.name}
                      <span className={cn(
                        "absolute -bottom-1 left-0 h-0.5 bg-primary transition-all duration-300",
                        activeSection === item.href.slice(1) ? "w-full" : "w-0 group-hover:w-full"
                      )} />
                    </span>
                  </a>
                </li>
              ))}
            </ul>

            <div
              className={cn(
                "hidden md:flex items-center gap-3 transition-all duration-500",
                mounted ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"
              )}
              style={{ transitionDelay: "600ms" }}
            >
              <ThemeToggle />
              <DownloadCvButton variant="compact" />
              <a
                href="mailto:panhavann09@gmail.com"
                className="inline-flex items-center gap-2 rounded-lg border border-primary/50 px-5 py-2.5 text-sm font-medium text-primary transition-all duration-300 hover:bg-primary hover:text-primary-foreground hover:border-primary hover:shadow-lg hover:shadow-primary/25 group magnetic-btn"
              >
                <span>Get In Touch</span>
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden relative p-2 text-foreground rounded-lg glass hover:bg-primary/10 transition-colors"
              aria-label="Toggle menu"
            >
              <div className="relative w-6 h-6">
                <Menu className={cn(
                  "absolute inset-0 transition-all duration-300",
                  isMobileMenuOpen ? "opacity-0 rotate-90" : "opacity-100 rotate-0"
                )} />
                <X className={cn(
                  "absolute inset-0 transition-all duration-300",
                  isMobileMenuOpen ? "opacity-100 rotate-0" : "opacity-0 -rotate-90"
                )} />
              </div>
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Navigation Overlay */}
      <div
        className={cn(
          "fixed inset-0 z-40 md:hidden transition-all duration-500",
          isMobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        )}
      >
        {/* Backdrop */}
        <div 
          className="absolute inset-0 bg-background/80 backdrop-blur-xl"
          onClick={() => setIsMobileMenuOpen(false)}
        />
        
        {/* Menu Content */}
        <nav className={cn(
          "absolute right-0 top-0 h-full w-3/4 max-w-sm glass-premium border-l border-primary/10 p-8 pt-24 transition-transform duration-500",
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        )}>
          <ul className="flex flex-col gap-2">
            {navItems.map((item, index) => (
              <li 
                key={item.name}
                className={cn(
                  "transition-all duration-500",
                  isMobileMenuOpen ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
                )}
                style={{ transitionDelay: isMobileMenuOpen ? `${index * 100}ms` : "0ms" }}
              >
                <a
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={cn(
                    "group flex items-center gap-4 py-4 text-lg font-medium transition-all duration-300 rounded-lg px-4 hover:bg-primary/10",
                    activeSection === item.href.slice(1) ? "text-primary bg-primary/5" : "text-foreground"
                  )}
                >
                  <span className="text-primary font-mono text-sm">{item.number}.</span>
                  <span>{item.name}</span>
                  <ChevronRight className={cn(
                    "w-4 h-4 ml-auto transition-all duration-300",
                    activeSection === item.href.slice(1) ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0"
                  )} />
                </a>
              </li>
            ))}
          </ul>
          
          <div className={cn(
            "mt-8 flex flex-col gap-4 transition-all duration-500",
            isMobileMenuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          )}
          style={{ transitionDelay: isMobileMenuOpen ? "600ms" : "0ms" }}
          >
            <div className="flex justify-center">
              <ThemeToggle />
            </div>
            <DownloadCvButton variant="glass" className="w-full" />
            <a
              href="mailto:panhavann09@gmail.com"
              className="flex items-center justify-center gap-2 w-full rounded-lg border border-primary bg-primary/10 px-6 py-4 text-base font-medium text-primary transition-all hover:bg-primary hover:text-primary-foreground"
            >
              Get In Touch
              <ChevronRight className="w-4 h-4" />
            </a>
          </div>
        </nav>
      </div>
    </>
  )
}
