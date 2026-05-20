"use client"

import { useEffect, useRef, useState } from "react"
import { ExternalLink, Briefcase, Code2, Heart, ChevronRight } from "lucide-react"

const experiences = [
  {
    title: "Small Project Developer",
    company: "Institute of Science and Technology Advanced Development (ISTAD)",
    companyShort: "ISTAD",
    companyUrl: "https://istad.co",
    period: "2022 - Present",
    description: [
      "Developed multiple web applications using modern technologies including WordPress, OpenCart, and Joomla for content management systems.",
      "Built full-stack e-commerce solutions using React.js with Laravel backend, implementing robust shopping cart and payment features.",
      "Worked on PHP-based e-commerce projects, focusing on secure transactions and user experience optimization.",
    ],
    technologies: ["WordPress", "OpenCart", "Joomla", "React.js", "Laravel", "PHP"],
    icon: Code2,
    color: "from-cyan-500/20 to-blue-500/20",
  },
  {
    title: "Full Stack Developer",
    company: "Royal University of Phnom Penh",
    companyShort: "RUPP",
    companyUrl: "https://rupp.edu.kh",
    period: "2022 - 2025",
    description: [
      "Designed and developed mechanism parts for university projects, focusing on user interaction and system architecture.",
      "Created frontend interfaces and UX/UI designs using Figma, ensuring intuitive user experiences.",
      "Managed databases with PostgreSQL and developed basic backend functionality with Java Spring Framework.",
      "Implemented containerization and deployment strategies using Docker for consistent development environments.",
    ],
    technologies: ["Figma", "PostgreSQL", "Java", "Spring Framework", "Docker", "Frontend Development"],
    icon: Briefcase,
    color: "from-purple-500/20 to-pink-500/20",
  },
  {
    title: "Volunteer Member",
    company: "Youth League of Peace Lover at Mondolkiri",
    companyShort: "YLPL",
    companyUrl: "#",
    period: "2019 - 2020",
    description: [
      "Advertised and disseminated important COVID-19 information to local communities during the pandemic.",
      "Organized and participated in initiatives to support underprivileged communities in the region.",
      "Collaborated with team members to plan and execute community outreach programs.",
    ],
    technologies: ["Community Outreach", "Team Leadership", "Public Speaking"],
    icon: Heart,
    color: "from-orange-500/20 to-red-500/20",
  },
]

export function Experience() {
  const [isVisible, setIsVisible] = useState(false)
  const [activeIndex, setActiveIndex] = useState(0)
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
    <section id="experience" ref={sectionRef} className="py-32 px-6 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2" />
      
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
              02. Experience
            </span>
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">
              <span className="gradient-text">Where I&apos;ve Worked</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              My professional journey and the places that shaped my skills
            </p>
          </div>

          {/* Experience Content */}
          <div className="grid lg:grid-cols-12 gap-8">
            {/* Tab Navigation */}
            <div className="lg:col-span-4">
              <div className="glass rounded-2xl p-2 lg:sticky lg:top-24">
                {experiences.map((exp, index) => {
                  const Icon = exp.icon
                  return (
                    <button
                      key={index}
                      onClick={() => setActiveIndex(index)}
                      className={`w-full flex items-center gap-3 p-4 rounded-xl text-left transition-all duration-300 ${
                        activeIndex === index
                          ? "bg-primary/10 text-foreground"
                          : "text-muted-foreground hover:text-foreground hover:bg-secondary/50"
                      }`}
                    >
                      <div className={`w-10 h-10 rounded-lg flex items-center justify-center shrink-0 transition-all duration-300 ${
                        activeIndex === index ? "bg-primary/20" : "bg-secondary/50"
                      }`}>
                        <Icon className={`w-5 h-5 ${activeIndex === index ? "text-primary" : "text-muted-foreground"}`} />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className={`font-medium truncate ${activeIndex === index ? "text-foreground" : ""}`}>
                          {exp.companyShort}
                        </p>
                        <p className="text-xs text-muted-foreground">{exp.period}</p>
                      </div>
                      <ChevronRight className={`w-4 h-4 shrink-0 transition-transform duration-300 ${
                        activeIndex === index ? "text-primary translate-x-1" : ""
                      }`} />
                    </button>
                  )
                })}
              </div>
            </div>

            {/* Tab Content */}
            <div className="lg:col-span-8">
              {experiences.map((exp, index) => {
                const Icon = exp.icon
                return (
                  <div
                    key={index}
                    className={`transition-all duration-500 ${
                      activeIndex === index
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 translate-y-4 absolute pointer-events-none"
                    }`}
                  >
                    {activeIndex === index && (
                      <div className="glass rounded-2xl p-8 animate-scale-in">
                        {/* Header */}
                        <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
                          <div className="flex items-center gap-4">
                            <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${exp.color} flex items-center justify-center`}>
                              <Icon className="w-7 h-7 text-foreground" />
                            </div>
                            <div>
                              <h3 className="text-xl font-bold text-foreground">{exp.title}</h3>
                              <a
                                href={exp.companyUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-primary hover:underline inline-flex items-center gap-1 text-sm"
                              >
                                {exp.company}
                                {exp.companyUrl !== "#" && <ExternalLink className="h-3 w-3" />}
                              </a>
                            </div>
                          </div>
                          <span className="px-4 py-1.5 rounded-full bg-secondary/50 text-sm font-mono text-muted-foreground">
                            {exp.period}
                          </span>
                        </div>

                        {/* Description */}
                        <ul className="space-y-4 mb-6">
                          {exp.description.map((item, i) => (
                            <li 
                              key={i} 
                              className="flex gap-3 text-muted-foreground leading-relaxed animate-slide-up"
                              style={{ animationDelay: `${i * 100}ms` }}
                            >
                              <span className="text-primary mt-1.5 flex-shrink-0">
                                <ChevronRight className="w-4 h-4" />
                              </span>
                              {item}
                            </li>
                          ))}
                        </ul>

                        {/* Technologies */}
                        <div className="pt-4 border-t border-border/50">
                          <p className="text-sm font-mono text-primary mb-3">Technologies used:</p>
                          <div className="flex flex-wrap gap-2">
                            {exp.technologies.map((tech, i) => (
                              <span
                                key={tech}
                                className="px-3 py-1.5 text-sm rounded-lg bg-primary/10 text-primary hover:bg-primary/20 transition-colors cursor-default animate-scale-in"
                                style={{ animationDelay: `${i * 50}ms` }}
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                )
              })}
            </div>
          </div>

          {/* Timeline Visual (Mobile) */}
          <div className="mt-16 lg:hidden">
            <div className="relative">
              {/* Vertical line */}
              <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-primary/50 to-transparent" />

              {/* Timeline Items */}
              <div className="space-y-8">
                {experiences.map((exp, index) => {
                  const Icon = exp.icon
                  return (
                    <div
                      key={index}
                      className="relative pl-12"
                      style={{ animationDelay: `${index * 150}ms` }}
                    >
                      {/* Timeline dot */}
                      <div className="absolute left-0 w-8 h-8 rounded-full bg-card border-2 border-primary flex items-center justify-center">
                        <Icon className="w-4 h-4 text-primary" />
                      </div>

                      {/* Content */}
                      <div className="glass rounded-xl p-4">
                        <p className="text-xs font-mono text-primary mb-1">{exp.period}</p>
                        <h4 className="font-semibold text-foreground">{exp.title}</h4>
                        <p className="text-sm text-muted-foreground">{exp.companyShort}</p>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
