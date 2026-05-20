"use client"

import { useEffect, useRef, useState } from "react"
import { Github, ExternalLink, Folder, ArrowRight, Code2, Layers, Database, Palette, Bot } from "lucide-react"

const featuredProjects = [
  {
    title: "Autonomous Project",
    description:
      "An autonomous web application focused on intelligent workflow automation, combining a responsive user interface with backend services for managing data, actions, and real-time project behavior.",
    technologies: ["Next.js", "React.js", "TypeScript", "Spring Boot", "PostgreSQL", "Tailwind CSS"],
    github: "#",
    external: "https://autonomous-istad.com/home",
    icon: Bot,
    color: "from-emerald-500/20 to-cyan-500/20",
  },
  {
    title: "E-Commerce Platform",
    description:
      "A full-featured e-commerce platform built with React.js and Laravel, featuring product management, shopping cart, secure checkout, and admin dashboard for managing orders and inventory.",
    technologies: ["React.js", "Laravel", "PostgreSQL", "Tailwind CSS", "Docker"],
    github: "#",
    external: "#",
    icon: Layers,
    color: "from-cyan-500/20 to-blue-500/20",
  },
  {
    title: "WordPress Custom Theme",
    description:
      "Custom WordPress theme development for business websites, including responsive design, SEO optimization, and integration with popular plugins for enhanced functionality.",
    technologies: ["WordPress", "PHP", "JavaScript", "CSS", "MySQL"],
    github: "#",
    external: "#",
    icon: Palette,
    color: "from-purple-500/20 to-pink-500/20",
  },
  {
    title: "OpenCart Store Setup",
    description:
      "Complete OpenCart e-commerce store setup with custom extensions, payment gateway integration, and inventory management system for small to medium businesses.",
    technologies: ["OpenCart", "PHP", "MySQL", "Bootstrap", "REST API"],
    github: "#",
    external: "#",
    icon: Database,
    color: "from-orange-500/20 to-red-500/20",
  },
]

const otherProjects = [
  {
    title: "Joomla CMS Website",
    description: "Custom Joomla website with advanced content management features and user authentication system.",
    technologies: ["Joomla", "PHP", "MySQL"],
    github: "#",
    external: "#",
  },
  {
    title: "PHP E-Commerce",
    description: "Pure PHP e-commerce solution with secure payment processing and inventory tracking.",
    technologies: ["PHP", "MySQL", "JavaScript"],
    github: "#",
    external: "#",
  },
  {
    title: "UX/UI Design Portfolio",
    description: "Collection of UI/UX designs created in Figma for various web and mobile applications.",
    technologies: ["Figma", "UI/UX", "Prototyping"],
    github: "#",
    external: "#",
  },
  {
    title: "Spring Boot API",
    description: "RESTful API built with Java Spring Framework for handling backend operations and data management.",
    technologies: ["Java", "Spring Boot", "PostgreSQL"],
    github: "#",
    external: "#",
  },
  {
    title: "Docker Dev Environment",
    description: "Containerized development environment setup for consistent deployment across different machines.",
    technologies: ["Docker", "Docker Compose", "Linux"],
    github: "#",
    external: "#",
  },
  {
    title: "Database Architecture",
    description: "Complex database architecture design with optimized queries and proper indexing for performance.",
    technologies: ["PostgreSQL", "Database Design", "SQL"],
    github: "#",
    external: "#",
  },
]

export function Projects() {
  const [isVisible, setIsVisible] = useState(false)
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
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
    <section id="projects" ref={sectionRef} className="py-32 px-6 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl" />
      
      <div className="mx-auto max-w-6xl relative z-10">
        <div
          data-aos="fade-up"
          className={`transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          }`}
        >
          {/* Section Header */}
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full glass text-primary text-sm font-mono mb-4">
              03. My Work
            </span>
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">
              <span className="gradient-text">Featured Projects</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              A selection of projects I&apos;ve worked on, showcasing my skills in full-stack development
            </p>
          </div>

          {/* Featured Projects */}
          <div className="space-y-8 mb-24">
            {featuredProjects.map((project, index) => {
              const Icon = project.icon
              return (
                <div
                  key={index}
                  className={`group relative transition-all duration-700 ${
                    isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                  }`}
                  style={{ transitionDelay: `${index * 150}ms` }}
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                >
                  <div className="relative glass rounded-2xl p-8 overflow-hidden hover-lift">
                    {/* Gradient background */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                    
                    {/* Content */}
                    <div className="relative z-10 grid md:grid-cols-2 gap-8 items-center">
                      {/* Left side - Info */}
                      <div className={`space-y-4 ${index % 2 === 1 ? "md:order-2" : ""}`}>
                        <div className="flex items-center gap-3">
                          <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                            <Icon className="w-6 h-6 text-primary" />
                          </div>
                          <div>
                            <p className="text-primary font-mono text-xs">Featured Project</p>
                            <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                              {project.title}
                            </h3>
                          </div>
                        </div>
                        
                        <p className="text-muted-foreground leading-relaxed">
                          {project.description}
                        </p>
                        
                        <div className="flex flex-wrap gap-2">
                          {project.technologies.map((tech) => (
                            <span
                              key={tech}
                              className="px-3 py-1 rounded-full text-xs font-mono bg-secondary/50 text-foreground"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                        
                        <div className="flex gap-4 pt-2">
                          <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors group/link"
                          >
                            <Github className="h-5 w-5" />
                            <span className="underline-animate">Code</span>
                          </a>
                          <a
                            href={project.external}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors group/link"
                          >
                            <ExternalLink className="h-5 w-5" />
                            <span className="underline-animate">Live Demo</span>
                          </a>
                        </div>
                      </div>
                      
                      {/* Right side - Visual */}
                      <div className={`${index % 2 === 1 ? "md:order-1" : ""}`}>
                        <div className="relative aspect-video rounded-xl overflow-hidden bg-card border border-border/50 group-hover:border-primary/30 transition-colors">
                          {/* Placeholder visual */}
                          <div className="absolute inset-0 flex items-center justify-center">
                            <div className="text-center">
                              <div className={`w-20 h-20 mx-auto rounded-2xl bg-gradient-to-br ${project.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-500`}>
                                <Icon className="w-10 h-10 text-foreground" />
                              </div>
                              <p className="text-sm font-mono text-muted-foreground">{project.title}</p>
                            </div>
                          </div>
                          
                          {/* Animated border */}
                          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity">
                            <div className="absolute inset-0 animate-shimmer" />
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Hover arrow indicator */}
                    <div className="absolute right-8 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 group-hover:translate-x-2 transition-all duration-300">
                      <ArrowRight className="w-6 h-6 text-primary" />
                    </div>
                  </div>
                </div>
              )
            })}
          </div>

          {/* Other Projects Header */}
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold text-foreground mb-2">Other Noteworthy Projects</h3>
            <p className="text-muted-foreground">A collection of smaller projects worth mentioning</p>
          </div>

          {/* Other Projects Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {otherProjects.map((project, index) => (
              <div
                key={index}
                className={`group glass rounded-xl p-6 hover-lift card-glow transition-all duration-500 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: `${(index + 3) * 100}ms` }}
              >
                {/* Header */}
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                    <Folder className="h-6 w-6 text-primary" />
                  </div>
                  <div className="flex gap-3">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-primary transition-colors hover:scale-110"
                      aria-label="GitHub"
                    >
                      <Github className="h-5 w-5" />
                    </a>
                    <a
                      href={project.external}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-primary transition-colors hover:scale-110"
                      aria-label="External Link"
                    >
                      <ExternalLink className="h-5 w-5" />
                    </a>
                  </div>
                </div>

                {/* Content */}
                <h4 className="text-lg font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                  {project.title}
                </h4>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">{project.description}</p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs font-mono text-primary/70"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* View More Button */}
          <div className="text-center mt-12">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl glass text-foreground font-medium hover:text-primary hover:border-primary/50 transition-all duration-300 hover-lift group"
            >
              <Code2 className="w-5 h-5" />
              View More on GitHub
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
