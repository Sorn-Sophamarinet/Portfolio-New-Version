"use client"

import { useEffect, useState, useRef } from "react"
import { Github, Linkedin, Mail, Phone, MapPin, ArrowDown, Code2, Sparkles, Terminal, Zap } from "@/components/fa-icons"
import { DownloadCvButton } from "@/components/download-cv-button"

const TECH_STACK = ["React.js", "Next.js", "Laravel", "TypeScript", "Docker", "PostgreSQL"]

export function Hero() {
  const [mounted, setMounted] = useState(false)
  const [typedText, setTypedText] = useState("")
  const [currentTechIndex, setCurrentTechIndex] = useState(0)
  const fullText = "DevOps Engineer"
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    setMounted(true)
    let index = 0
    const timer = setInterval(() => {
      if (index <= fullText.length) {
        setTypedText(fullText.slice(0, index))
        index++
      } else {
        clearInterval(timer)
      }
    }, 80)
    return () => clearInterval(timer)
  }, [])

  useEffect(() => {
    const techTimer = setInterval(() => {
      setCurrentTechIndex((prev) => (prev + 1) % TECH_STACK.length)
    }, 2000)
    return () => clearInterval(techTimer)
  }, [])

  return (
    <section ref={containerRef} className="relative min-h-screen flex items-center justify-center px-6 pt-20 overflow-hidden noise-overlay">
      {/* Animated background elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Gradient orbs */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-float" style={{ animationDelay: "0s" }} />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary/15 rounded-full blur-3xl animate-float" style={{ animationDelay: "2s" }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl animate-morph" />
        
        {/* Cyber grid */}
        <div className="absolute inset-0 cyber-grid opacity-50" />
        
        {/* Floating tech icons */}
        <div className="absolute top-1/4 left-1/4 w-8 h-8 rounded-lg glass flex items-center justify-center animate-float opacity-40" style={{ animationDelay: "0.5s" }}>
          <Terminal className="w-4 h-4 text-primary" />
        </div>
        <div className="absolute top-1/3 right-1/4 w-8 h-8 rounded-lg glass flex items-center justify-center animate-float opacity-40" style={{ animationDelay: "1s" }}>
          <Code2 className="w-4 h-4 text-primary" />
        </div>
        <div className="absolute bottom-1/3 left-1/3 w-8 h-8 rounded-lg glass flex items-center justify-center animate-float opacity-40" style={{ animationDelay: "1.5s" }}>
          <Zap className="w-4 h-4 text-primary" />
        </div>
      </div>

      <div className="mx-auto max-w-7xl w-full relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Text Content */}
          <div
            className={`space-y-8 transition-all duration-1000 ${
              mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
            }`}
          >
            {/* Status badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-premium text-primary text-sm font-mono animate-blur-in">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              <span>Available for opportunities</span>
            </div>
            
            <div className="space-y-4">
              <p className="text-primary font-mono text-sm tracking-wider animate-slide-from-left" style={{ animationDelay: "0.2s" }}>
                {"<"}Hello World{"/>"}
              </p>
              
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight">
                <span className="block text-foreground mb-2 animate-blur-in" style={{ animationDelay: "0.3s" }}>
                  I&apos;m
                </span>
                <span
                  className="hero-name-gradient animate-blur-in"
                  data-aos="zoom-in"
                  data-aos-delay="220"
                  data-aos-duration="900"
                  style={{ animationDelay: "0.5s" }}
                >
                  <span>Sorn</span>
                  <span>Sophamarinet</span>
                </span>
              </h1>
              
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-muted-foreground leading-tight flex items-center gap-2 animate-blur-in" style={{ animationDelay: "0.7s" }}>
                <span className="text-primary font-mono">{">"}</span>
                <span>{typedText}</span>
                <span className="w-0.5 h-8 bg-primary animate-pulse" />
              </h2>
            </div>
            
            <p className="text-muted-foreground max-w-xl text-lg leading-relaxed animate-slide-from-left" style={{ animationDelay: "0.9s" }}>
              A passionate developer and fresh graduate in Computer Science 
              from the <span className="text-primary font-medium hover:neon-glow transition-all cursor-default">Royal University of Phnom Penh</span>, 
              specializing in building exceptional digital experiences with modern technologies.
            </p>

            {/* Rotating tech stack */}
            <div className="flex items-center gap-3 font-mono text-sm animate-slide-from-left" style={{ animationDelay: "1s" }}>
              <span className="text-muted-foreground">Currently working with:</span>
              <div className="relative h-6 overflow-hidden">
                <div
                  className="transition-transform duration-500 ease-out"
                  style={{ transform: `translateY(-${currentTechIndex * 24}px)` }}
                >
                  {TECH_STACK.map((tech, i) => (
                    <div key={i} className="h-6 flex items-center text-primary font-semibold">
                      {tech}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Contact Info */}
            <div className="flex flex-wrap gap-4 text-sm text-muted-foreground animate-slide-from-left" style={{ animationDelay: "1.1s" }}>
              <a href="mailto:netsorn7777@gmail.com" className="flex items-center gap-2 hover:text-primary transition-colors group magnetic-btn">
                <Mail className="h-4 w-4 group-hover:scale-110 transition-transform" />
                <span className="underline-animate">netsorn7777@gmail.com</span>
              </a>
              <a href="tel:+855889203806" className="flex items-center gap-2 hover:text-primary transition-colors group magnetic-btn">
                <Phone className="h-4 w-4 group-hover:scale-110 transition-transform" />
                <span className="underline-animate">+855 889203806</span>
              </a>
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground animate-slide-from-left" style={{ animationDelay: "1.2s" }}>
              <MapPin className="h-4 w-4 text-primary animate-bounce-subtle" />
              St.289, Toul Kork, Phnom Penh, Cambodia
            </div>

            {/* Social Links */}
            <div className="flex gap-4 pt-2 animate-slide-from-left" style={{ animationDelay: "1.3s" }}>
              {[
                { icon: Github, href: "https://github.com", label: "GitHub" },
                { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
                { icon: Mail, href: "mailto:netsorn7777@gmail.com", label: "Email" },
              ].map(({ icon: Icon, href, label }, index) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="group p-3 rounded-xl glass-premium text-muted-foreground hover:text-primary hover:border-primary/50 transition-all duration-300 hover-lift spotlight"
                  aria-label={label}
                  style={{ animationDelay: `${1.3 + index * 0.1}s` }}
                >
                  <Icon className="h-5 w-5 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300" />
                </a>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 pt-4 animate-slide-from-left" style={{ animationDelay: "1.5s" }}>
              <DownloadCvButton />
              <a
                href="#projects"
                className="group inline-flex items-center gap-2 glass-premium text-foreground px-8 py-4 rounded-xl font-medium hover:border-primary/50 hover:text-primary transition-all duration-300 magnetic-btn spotlight"
              >
                View My Work
                <ArrowDown className="h-4 w-4 group-hover:translate-y-1 transition-transform" />
              </a>
              <a
                href="#contact"
                className="group inline-flex items-center gap-2 glass-premium text-foreground px-8 py-4 rounded-xl font-medium hover:border-primary/50 transition-all duration-300 magnetic-btn spotlight"
              >
                <Sparkles className="h-4 w-4 group-hover:rotate-12 transition-transform" />
                Get In Touch
              </a>
            </div>
          </div>

          {/* Profile Visual */}
          <div
            className={`relative flex justify-center lg:justify-end transition-all duration-1000 delay-500 ${
              mounted ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-12 scale-95"
            }`}
          >
            <div className="relative">
              {/* Multiple glow layers */}
              <div className="absolute -inset-12 rounded-3xl bg-primary/20 blur-3xl animate-glow-pulse" />
              <div className="absolute -inset-8 rounded-3xl bg-primary/10 blur-2xl animate-glow-pulse" style={{ animationDelay: "0.5s" }} />
              
              {/* Main card */}
              <div className="relative w-80 h-96 sm:w-96 sm:h-[450px] rounded-3xl overflow-hidden glass-premium tilt-card scanline">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-primary/10" />
                
                {/* Animated corners */}
                <div className="absolute top-0 left-0 w-20 h-20 border-l-2 border-t-2 border-primary/50 rounded-tl-3xl animate-border-glow" />
                <div className="absolute top-0 right-0 w-20 h-20 border-r-2 border-t-2 border-primary/50 rounded-tr-3xl animate-border-glow" style={{ animationDelay: "0.5s" }} />
                <div className="absolute bottom-0 left-0 w-20 h-20 border-l-2 border-b-2 border-primary/50 rounded-bl-3xl animate-border-glow" style={{ animationDelay: "1s" }} />
                <div className="absolute bottom-0 right-0 w-20 h-20 border-r-2 border-b-2 border-primary/50 rounded-br-3xl animate-border-glow" style={{ animationDelay: "1.5s" }} />
                
                {/* Code display */}
                <div className="absolute inset-6 font-mono text-xs overflow-hidden">
                  <div className="flex items-center gap-2 text-primary mb-4">
                    <div className="flex gap-1.5">
                      <div className="w-3 h-3 rounded-full bg-red-500/80" />
                      <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                      <div className="w-3 h-3 rounded-full bg-green-500/80" />
                    </div>
                    <span className="text-muted-foreground ml-2">developer.ts</span>
                  </div>
                  <pre className="text-primary/70 leading-loose">
                    <code className="block animate-reveal" style={{ animationDelay: "0.5s" }}>
                      <span className="text-pink-400">const</span> <span className="text-cyan-400">developer</span> = {"{"}
                    </code>
                    <code className="block animate-reveal" style={{ animationDelay: "0.6s" }}>
                      {"  "}<span className="text-purple-400">name</span>: <span className="text-green-400">&quot;Sophamarinet&quot;</span>,
                    </code>
                    <code className="block animate-reveal" style={{ animationDelay: "0.7s" }}>
                      {"  "}<span className="text-purple-400">role</span>: <span className="text-green-400">&quot;DevOps Engineer&quot;</span>,
                    </code>
                    <code className="block animate-reveal" style={{ animationDelay: "0.8s" }}>
                      {"  "}<span className="text-purple-400">skills</span>: [
                    </code>
                    <code className="block animate-reveal" style={{ animationDelay: "0.9s" }}>
                      {"    "}<span className="text-green-400">&quot;React.js&quot;</span>,
                    </code>
                    <code className="block animate-reveal" style={{ animationDelay: "1s" }}>
                      {"    "}<span className="text-green-400">&quot;Next.js&quot;</span>,
                    </code>
                    <code className="block animate-reveal" style={{ animationDelay: "1.1s" }}>
                      {"    "}<span className="text-green-400">&quot;Laravel&quot;</span>,
                    </code>
                    <code className="block animate-reveal" style={{ animationDelay: "1.2s" }}>
                      {"    "}<span className="text-green-400">&quot;Java Spring&quot;</span>,
                    </code>
                    <code className="block animate-reveal" style={{ animationDelay: "1.3s" }}>
                      {"    "}<span className="text-green-400">&quot;Docker&quot;</span>,
                    </code>
                    <code className="block animate-reveal" style={{ animationDelay: "1.4s" }}>
                      {"  "}],
                    </code>
                    <code className="block animate-reveal" style={{ animationDelay: "1.5s" }}>
                      {"  "}<span className="text-purple-400">passion</span>: <span className="text-green-400">&quot;Building&quot;</span>
                    </code>
                    <code className="block animate-reveal" style={{ animationDelay: "1.6s" }}>
                      {"    "}<span className="text-green-400">&quot;amazing apps&quot;</span>
                    </code>
                    <code className="block animate-reveal" style={{ animationDelay: "1.7s" }}>
                      {"}"};
                    </code>
                  </pre>
                </div>
                
                {/* Shimmer overlay */}
                <div className="absolute inset-0 animate-shimmer opacity-20" />
              </div>
              
              {/* Floating badges with better animations */}
              <div className="absolute -top-6 -right-6 px-4 py-2 rounded-xl glass-premium text-sm font-medium text-primary animate-float hover-lift" style={{ animationDelay: "0s" }}>
                <span className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                  React.js
                </span>
              </div>
              <div className="absolute -bottom-4 -left-6 px-4 py-2 rounded-xl glass-premium text-sm font-medium text-primary animate-float hover-lift" style={{ animationDelay: "1s" }}>
                <span className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
                  Next.js
                </span>
              </div>
              <div className="absolute top-1/2 -right-10 px-4 py-2 rounded-xl glass-premium text-sm font-medium text-primary animate-float hover-lift" style={{ animationDelay: "2s" }}>
                <span className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                  Laravel
                </span>
              </div>
              <div className="absolute top-1/4 -left-8 px-4 py-2 rounded-xl glass-premium text-sm font-medium text-primary animate-float hover-lift" style={{ animationDelay: "3s" }}>
                <span className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-cyan-500 animate-pulse" />
                  Docker
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-3">
          <span className="text-xs text-muted-foreground font-mono animate-bounce-subtle">Scroll to explore</span>
          <div className="w-6 h-12 rounded-full border-2 border-primary/30 flex items-start justify-center pt-2 relative overflow-hidden">
            <div className="w-1.5 h-3 rounded-full bg-primary animate-bounce" />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/10 to-transparent animate-shimmer" />
          </div>
        </div>
      </div>
    </section>
  )
}
