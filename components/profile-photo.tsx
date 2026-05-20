"use client"

import { Camera, MapPin, Sparkles } from "lucide-react"

export function ProfilePhoto() {
  return (
    <section id="profile-photo" className="relative overflow-hidden px-6 py-24">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-1/2 top-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/5 blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="relative mx-auto w-full max-w-sm" data-aos="fade-right">
          <div className="absolute -inset-6 rounded-3xl bg-primary/10 blur-2xl" />
          <div className="group relative overflow-hidden rounded-3xl glass-premium p-3 hover-lift">
            <div className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-card">
              <img
                src="/sorn-sophamarinet.jpg"
                alt="Sorn Sophamarinet portrait"
                className="h-full w-full object-cover object-[center_18%] transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 rounded-2xl border border-primary/20 bg-background/80 p-4 backdrop-blur-xl">
                <p className="text-xs font-mono text-primary">Sorn Sophamarinet</p>
                <p className="mt-1 text-sm text-muted-foreground">Full Stack Web Developer</p>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-6" data-aos="fade-left" data-aos-delay="150">
          <span className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-sm font-mono text-primary">
            <Camera className="h-4 w-4" />
            Profile
          </span>
          <div className="space-y-4">
            <h2 className="text-4xl font-bold leading-tight sm:text-5xl">
              <span className="gradient-text">A face behind the code</span>
            </h2>
            <p className="max-w-2xl text-lg leading-relaxed text-muted-foreground">
              I build clean, practical web experiences with a focus on modern frontend
              workflows, reliable backend foundations, and thoughtful user interfaces.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="glass rounded-2xl p-5">
              <Sparkles className="mb-3 h-5 w-5 text-primary" />
              <p className="font-medium text-foreground">Open to opportunities</p>
              <p className="mt-1 text-sm text-muted-foreground">Ready for junior and full stack roles.</p>
            </div>
            <div className="glass rounded-2xl p-5">
              <MapPin className="mb-3 h-5 w-5 text-primary" />
              <p className="font-medium text-foreground">Based in Phnom Penh</p>
              <p className="mt-1 text-sm text-muted-foreground">Available for local or remote work.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
