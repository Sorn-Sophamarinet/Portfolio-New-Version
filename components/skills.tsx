"use client"

import { useEffect, useRef, useState } from "react"
import { Code2, Server, Cloud, Database, GitBranch, Palette, Globe } from "lucide-react"

const skillCategories = [
  {
    title: "Frontend",
    icon: Code2,
    color: "from-cyan-500 to-blue-500",
    skills: [
      { name: "React.js", level: 70 },
      { name: "Next.js", level: 75 },
      { name: "TypeScript", level: 60 },
      { name: "Tailwind CSS", level: 80 },
    ],
  },
  {
    title: "Backend",
    icon: Server,
    color: "from-purple-500 to-pink-500",
    skills: [
      { name: "PHP/Laravel", level: 50 },
      { name: "Java Spring", level: 60 },
      { name: "Node.js", level: 40 },
    ],
  },
  {
    title: "DevOps & Cloud",
    icon: Cloud,
    color: "from-orange-500 to-red-500",
    skills: [
      { name: "Docker", level: 75 },
      { name: "Kubernetes", level: 60 },
      { name: "CI/CD", level: 65 },
      { name: "AWS", level: 45 },
    ],
  },
  {
    title: "Database",
    icon: Database,
    color: "from-green-500 to-emerald-500",
    skills: [
      { name: "PostgreSQL", level: 70 },
      { name: "MySQL", level: 70 },
      { name: "MongoDB", level: 30 },
      { name: "Redis", level: 20 },
    ],
  },
  {
    title: "Tools & VCS",
    icon: GitBranch,
    color: "from-yellow-500 to-orange-500",
    skills: [
      { name: "Git/GitHub", level: 70 },
      { name: "GitLab", level: 50 },
      { name: "Jira", level: 30 },
      { name: "Linux", level: 65 },
    ],
  },
  {
    title: "Design & CMS",
    icon: Palette,
    color: "from-pink-500 to-rose-500",
    skills: [
      { name: "Figma", level: 70 },
      { name: "UI/UX", level: 65},
      { name: "WordPress", level: 30 },
      { name: "OpenCart", level: 30 },
    ],
  },
]

const languages = [
  { name: "Khmer", level: "Native", percentage: 100, flag: "KH" },
  { name: "English", level: "Professional", percentage: 75, flag: "US" },
]

export function Skills() {
  const [isVisible, setIsVisible] = useState(false)
  const [activeCategory, setActiveCategory] = useState<number | null>(null)
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
    <section id="skills" ref={sectionRef} className="py-32 px-6 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      </div>

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
              04. Skills
            </span>
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">
              <span className="gradient-text">Technical Expertise</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              A comprehensive overview of my technical skills and proficiency levels
            </p>
          </div>

          {/* Skills Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {skillCategories.map((category, categoryIndex) => {
              const Icon = category.icon
              return (
                <div
                  key={categoryIndex}
                  className={`group relative transition-all duration-700 ${
                    isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
                  }`}
                  style={{ transitionDelay: `${categoryIndex * 100}ms` }}
                  onMouseEnter={() => setActiveCategory(categoryIndex)}
                  onMouseLeave={() => setActiveCategory(null)}
                >
                  <div className="relative glass rounded-2xl p-6 h-full hover-lift overflow-hidden">
                    {/* Gradient background on hover */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
                    
                    {/* Header */}
                    <div className="relative flex items-center gap-3 mb-6">
                      <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${category.color} p-0.5`}>
                        <div className="w-full h-full rounded-[10px] bg-card flex items-center justify-center group-hover:bg-transparent transition-colors duration-300">
                          <Icon className="w-5 h-5 text-foreground" />
                        </div>
                      </div>
                      <h3 className="text-lg font-semibold text-foreground">{category.title}</h3>
                    </div>

                    {/* Skills */}
                    <div className="relative space-y-4">
                      {category.skills.map((skill, skillIndex) => (
                        <div
                          key={skillIndex}
                          className={`transition-all duration-500 ${
                            isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4"
                          }`}
                          style={{ transitionDelay: `${categoryIndex * 100 + skillIndex * 50}ms` }}
                        >
                          <div className="flex justify-between items-center mb-1.5">
                            <span className="text-sm text-muted-foreground">{skill.name}</span>
                            <span className={`text-xs font-mono transition-all duration-300 ${
                              activeCategory === categoryIndex ? "text-foreground scale-110" : "text-primary/70"
                            }`}>
                              {skill.level}%
                            </span>
                          </div>
                          <div className="h-2 rounded-full bg-secondary/50 overflow-hidden">
                            <div
                              className={`h-full rounded-full bg-gradient-to-r ${category.color} transition-all duration-1000 ease-out relative`}
                              style={{
                                width: isVisible ? `${skill.level}%` : "0%",
                                transitionDelay: `${categoryIndex * 100 + skillIndex * 50 + 300}ms`,
                              }}
                            >
                              {/* Shine effect */}
                              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )
            })}
          </div>

          {/* Languages Section */}
          <div
            className={`glass rounded-2xl p-8 transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
            }`}
            style={{ transitionDelay: "600ms" }}
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                <Globe className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-foreground">Languages</h3>
                <p className="text-sm text-muted-foreground">Communication proficiency</p>
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-8">
              {languages.map((lang, index) => (
                <div
                  key={index}
                  className={`group flex items-center gap-6 p-6 rounded-xl bg-secondary/30 hover:bg-secondary/50 transition-all duration-500 ${
                    isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
                  }`}
                  style={{ transitionDelay: `${700 + index * 100}ms` }}
                >
                  {/* Circular Progress */}
                  <div className="relative w-24 h-24 flex-shrink-0">
                    <svg className="w-24 h-24 transform -rotate-90">
                      {/* Background Circle */}
                      <circle
                        cx="48"
                        cy="48"
                        r="40"
                        stroke="currentColor"
                        strokeWidth="8"
                        fill="none"
                        className="text-secondary"
                      />
                      {/* Progress Circle */}
                      <circle
                        cx="48"
                        cy="48"
                        r="40"
                        stroke="url(#gradient)"
                        strokeWidth="8"
                        fill="none"
                        strokeDasharray={`${2 * Math.PI * 40}`}
                        strokeDashoffset={`${2 * Math.PI * 40 * (1 - (isVisible ? lang.percentage / 100 : 0))}`}
                        className="transition-all duration-1500 ease-out"
                        style={{ transitionDelay: `${800 + index * 150}ms` }}
                        strokeLinecap="round"
                      />
                      <defs>
                        <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                          <stop offset="0%" stopColor="oklch(0.72 0.12 180)" />
                          <stop offset="100%" stopColor="oklch(0.85 0.15 200)" />
                        </linearGradient>
                      </defs>
                    </svg>
                    {/* Percentage */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-xl font-bold text-primary group-hover:scale-110 transition-transform">
                        {lang.percentage}%
                      </span>
                    </div>
                  </div>

                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-2xl">{lang.flag === "KH" ? "🇰🇭" : "🇺🇸"}</span>
                      <h4 className="text-xl font-semibold text-foreground">{lang.name}</h4>
                    </div>
                    <p className="text-primary font-medium">{lang.level}</p>
                    <div className="mt-3 h-1.5 rounded-full bg-secondary overflow-hidden">
                      <div
                        className="h-full rounded-full bg-gradient-to-r from-primary to-primary/70 transition-all duration-1000"
                        style={{
                          width: isVisible ? `${lang.percentage}%` : "0%",
                          transitionDelay: `${900 + index * 150}ms`,
                        }}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .duration-1500 {
          transition-duration: 1500ms;
        }
      `}</style>
    </section>
  )
}
