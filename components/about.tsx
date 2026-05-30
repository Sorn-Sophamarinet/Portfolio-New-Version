"use client"

import { useEffect, useRef, useState } from "react"
import { User, Briefcase, GraduationCap, Heart } from "@/components/fa-icons"

const techStack = [
  "React.js",
  "Next.js",
  "Laravel",
  "Java (Spring)",
  "PostgreSQL",
  "Docker",
  "TypeScript",
  "Figma",
  "Kubernetes",
  "AWS",
]

const softSkills = [
  { name: "Good Communication", icon: "💬" },
  { name: "Problem-Solving", icon: "🧩" },
  { name: "Time Management", icon: "⏰" },
  { name: "Presentation Skills", icon: "🎯" },
  { name: "Team Collaboration", icon: "🤝" },
]

export function About() {
  const [isVisible, setIsVisible] = useState(false)
  const [activeTab, setActiveTab] = useState(0)
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

  const tabs = [
    { icon: User, label: "About" },
    { icon: Briefcase, label: "Experience" },
    { icon: GraduationCap, label: "Education" },
    { icon: Heart, label: "Interests" },
  ]

  return (
    <section
      id="about"
      ref={sectionRef}
      className="py-32 px-6 relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      
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
              01. About Me
            </span>
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">
              <span className="gradient-text">Who I Am</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              A passionate developer dedicated to creating impactful digital experiences
            </p>
          </div>

          <div className="grid lg:grid-cols-5 gap-12 items-start">
            {/* Profile Card */}
            <div className="lg:col-span-2">
              <div className="relative group">
                <div className="absolute -inset-4 bg-primary/10 rounded-2xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative glass rounded-2xl p-6 hover-lift">
                  {/* Avatar */}
                  <div className="relative mx-auto w-32 h-32 mb-6">
                    <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary to-primary/50 animate-morph" />
                    <div className="absolute inset-1 rounded-full bg-card flex items-center justify-center">
                      <span className="text-4xl font-bold gradient-text">SM</span>
                    </div>
                  </div>
                  
                  <div className="text-center">
                    <h3 className="text-xl font-bold text-foreground mb-1">Sorn Sophamarinet</h3>
                    <p className="text-primary font-mono text-sm mb-4">DevOps Engineer</p>
                    
                    {/* Stats */}
                    <div className="grid grid-cols-3 gap-4 py-4 border-t border-b border-border/50">
                      <div>
                        <div className="text-2xl font-bold text-primary">3+</div>
                        <div className="text-xs text-muted-foreground">Projects</div>
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-primary">10+</div>
                        <div className="text-xs text-muted-foreground">Skills</div>
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-primary">2</div>
                        <div className="text-xs text-muted-foreground">Certs</div>
                      </div>
                    </div>
                    
                    {/* Location */}
                    <div className="mt-4 text-sm text-muted-foreground">
                      📍 Phnom Penh, Cambodia
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="lg:col-span-3 space-y-8">
              {/* Tab Navigation */}
              <div className="flex gap-2 p-1 glass rounded-xl">
                {tabs.map((tab, index) => (
                  <button
                    key={tab.label}
                    onClick={() => setActiveTab(index)}
                    className={`flex-1 flex items-center justify-center gap-2 px-4 py-3 rounded-lg text-sm font-medium transition-all duration-300 ${
                      activeTab === index
                        ? "bg-primary text-primary-foreground"
                        : "text-muted-foreground hover:text-foreground hover:bg-secondary/50"
                    }`}
                  >
                    <tab.icon className="w-4 h-4" />
                    <span className="hidden sm:inline">{tab.label}</span>
                  </button>
                ))}
              </div>

              {/* Tab Content */}
              <div className="glass rounded-2xl p-6 min-h-[300px]">
                {activeTab === 0 && (
                  <div className="space-y-4 animate-scale-in">
                    <p className="text-muted-foreground leading-relaxed">
                      Hello! I&apos;m <span className="text-primary font-medium">Sophamarinet</span>, 
                      a passionate DevOps engineer based in Phnom Penh, Cambodia. 
                      I enjoy creating things that live on the internet, whether that be websites, 
                      applications, or anything in between.
                    </p>
                    <p className="text-muted-foreground leading-relaxed">
                      I am a fresh graduate in <span className="text-primary font-medium">Computer Science</span> from 
                      the Royal University of Phnom Penh, with strong interests in web development, 
                      UX/UI design, and database management.
                    </p>
                    <p className="text-muted-foreground leading-relaxed">
                      I also completed an <span className="text-primary font-medium">Advanced Development Program</span> at 
                      the Institute of Science Technology Advanced Development (ISTAD), where I deepened 
                      my knowledge in modern web technologies and best practices.
                    </p>
                  </div>
                )}

                {activeTab === 1 && (
                  <div className="space-y-4 animate-scale-in">
                    <div className="flex gap-4">
                      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                        <Briefcase className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground">Web Development Internship</h4>
                        <p className="text-primary text-sm">ISTAD</p>
                        <p className="text-muted-foreground text-sm mt-2">
                          Built e-commerce platforms using React.js and Laravel. Collaborated with teams 
                          to deliver scalable web solutions.
                        </p>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                        <Heart className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground">Volunteer IT Support</h4>
                        <p className="text-primary text-sm">KPJ Charity Organization</p>
                        <p className="text-muted-foreground text-sm mt-2">
                          Provided technical support and helped with digital literacy programs 
                          for underprivileged communities.
                        </p>
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === 2 && (
                  <div className="space-y-4 animate-scale-in">
                    <div className="flex gap-4">
                      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                        <GraduationCap className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground">Bachelor of Computer Science</h4>
                        <p className="text-primary text-sm">Royal University of Phnom Penh</p>
                        <p className="text-muted-foreground text-sm">2021 - 2025</p>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                        <GraduationCap className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground">Advanced Development Program</h4>
                        <p className="text-primary text-sm">ISTAD</p>
                        <p className="text-muted-foreground text-sm">2024 - 2026</p>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                        <GraduationCap className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground">Australian Center For Education</h4>
                        <p className="text-primary text-sm">ACE</p>
                        <p className="text-muted-foreground text-sm">2021 - 2025</p>
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === 3 && (
                  <div className="space-y-4 animate-scale-in">
                    <p className="text-muted-foreground">
                      When I&apos;m not coding, I enjoy:
                    </p>
                    <div className="grid grid-cols-2 gap-3">
                      {["🎮 Gaming", "📚 Learning New Tech", "🎬 Movies", "🏃 Exercise", "☕ Coffee", "🎵 Music"].map((interest) => (
                        <div key={interest} className="flex items-center gap-2 p-3 rounded-lg bg-secondary/50 text-sm">
                          {interest}
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Tech Stack */}
              <div className="glass rounded-2xl p-6">
                <h3 className="text-sm font-mono text-primary mb-4">Technologies I work with:</h3>
                <div className="flex flex-wrap gap-2">
                  {techStack.map((tech, index) => (
                    <span
                      key={tech}
                      className="px-3 py-1.5 rounded-lg text-sm bg-secondary/50 text-foreground hover:bg-primary/20 hover:text-primary transition-colors cursor-default"
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Soft Skills */}
              <div className="glass rounded-2xl p-6">
                <h3 className="text-sm font-mono text-primary mb-4">Soft Skills:</h3>
                <div className="flex flex-wrap gap-3">
                  {softSkills.map((skill) => (
                    <span
                      key={skill.name}
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary border border-primary/20 text-sm hover:bg-primary/20 transition-colors"
                    >
                      <span>{skill.icon}</span>
                      {skill.name}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
