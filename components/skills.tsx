"use client"

import { useEffect, useRef, useState } from "react"
import { Code2, Server, Cloud, Database, GitBranch, Palette, Globe, Github, Gitlab, Figma, Terminal, Boxes, Braces, Wrench } from "lucide-react"

const skillCategories = [
  {
    title: "Mechanical Design",
    icon: Cloud,
    color: "from-orange-500 to-red-500",
    skills: [
      { name: "SolidWorks", level: 90 },
      { name: "Solid Edge", level: 75 },
      { name: "3D CAD Modeling", level: 90 },
      { name: "Robot Framework Design", level: 85 },
    ],
  },
  {
    title: "Electrical Design",
    icon: Database,
    color: "from-green-500 to-emerald-500",
    skills: [
      { name: "Kicad", level: 85 },
      { name: "PCB Design", level: 85 },
      { name: "Schematic Design", level: 85 },
      { name: "BMS Design", level: 80 },
    ],
  },
  {
    title: "Coding",
    icon: Code2,
    color: "from-cyan-500 to-blue-500",
    skills: [
      { name: "MATLAB", level: 80 },
      { name: "Arduino IDE", level: 85 },
      { name: "Python", level: 85 },
      { name: "C/C++", level: 80 },
    ],
  },
  {
    title: "Robotics & Control",
    icon: GitBranch,
    color: "from-purple-500 to-pink-500",
    skills: [
      { name: "ROS2", level: 85 },
      { name: "MoveIt2", level: 80 },
      { name: "Forward/Inverse Kinematics", level: 85 },
      { name: "Trajectory Generation", level: 80 },
    ],
  },
  {
    title: "Operating Systems",
    icon: Palette,
    color: "from-yellow-500 to-orange-500",
    skills: [
      { name: "Linux (Ubuntu)", level: 85 },
      { name: "STM32CubeIDE", level: 80 },
      { name: "System Configuration", level: 75 },
      { name: "Embedded Programming", level: 80 },
    ],
  },
  {
    title: "Soft Skills",
    icon: Server,
    color: "from-pink-500 to-rose-500",
    skills: [
      { name: "Problem-Solving", level: 90 },
      { name: "Organization & Multitasking", level: 85 },
      { name: "Communication", level: 80 },
      { name: "Team Collaboration", level: 85 },
    ],
  },
]

const languages = [
  { name: "Khmer", level: "Native", percentage: 100, flag: "KH" },
  { name: "English", level: "Good", percentage: 80, flag: "US" },
  { name: "French", level: "Average", percentage: 60, flag: "FR" },
]

const tools = [
  { name: "SolidWorks", logo: "SW", icon: Code2, color: "from-cyan-500/20 to-blue-500/20" },
  { name: "Solid Edge", logo: "SE", icon: Code2, color: "from-orange-500/20 to-red-500/20" },
  { name: "Kicad", logo: "KC", icon: Braces, color: "from-green-500/20 to-emerald-500/20" },
  { name: "MATLAB", logo: "ML", icon: Terminal, color: "from-red-500/20 to-pink-500/20" },
  { name: "Arduino IDE", logo: "ARD", icon: Boxes, color: "from-sky-500/20 to-cyan-500/20" },
  { name: "ROS2", logo: "ROS", icon: Wrench, color: "from-purple-500/20 to-pink-500/20" },
  { name: "STM32 IDE", logo: "ST", icon: Terminal, color: "from-yellow-500/20 to-orange-500/20" },
  { name: "Linux/Ubuntu", logo: "LX", icon: Github, color: "from-red-500/20 to-orange-500/20" },
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
              04. Engineering Expertise
            </span>
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">
              <span className="gradient-text">Technical Capabilities</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Comprehensive engineering skills covering mechanical design, CAD modeling, electrical systems, robotics control, and embedded programming
            </p>
          </div>

          {/* Skills Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {skillCategories.map((category, categoryIndex) => {
              const Icon = category.icon
              return (
                <div
                  key={categoryIndex}
                  data-aos="fade-up"
                  data-aos-delay={categoryIndex * 80}
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

          {/* Tools Logos Section */}
          <div className="mb-16">
            <div className="mb-8 text-center" data-aos="fade-up">
              <span className="inline-block px-4 py-1.5 rounded-full glass text-primary text-sm font-mono mb-4">
                Tools & Platforms
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold text-foreground">Key Tools & Software</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Essential tools used for mechanical design, electrical design, coding, and robotics development
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-4">
              {tools.map((tool, index) => {
                const Icon = tool.icon
                return (
                  <div
                    key={tool.name}
                    data-aos="zoom-in"
                    data-aos-delay={index * 70}
                    className="group relative min-h-32 rounded-2xl glass p-4 text-center hover-lift overflow-hidden"
                  >
                    <div className={`absolute inset-0 bg-gradient-to-br ${tool.color} opacity-0 transition-opacity duration-500 group-hover:opacity-100`} />
                    <div className="relative z-10 flex h-full flex-col items-center justify-center gap-3">
                      <div className={`relative flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${tool.color} ring-1 ring-primary/10 transition-transform duration-300 group-hover:scale-110`}>
                        <Icon className="h-6 w-6 text-primary" />
                        <span className="absolute -right-2 -top-2 rounded-lg bg-background px-1.5 py-0.5 text-[10px] font-bold text-primary shadow-sm ring-1 ring-primary/10">
                          {tool.logo}
                        </span>
                      </div>
                      <p className="text-sm font-medium text-foreground">{tool.name}</p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>

          {/* Languages Section */}
          <div
            data-aos="fade-up"
            data-aos-delay="120"
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
                      <span className="text-2xl">{lang.flag === "KH" ? "🇰🇭" : lang.flag === "US" ? "🇺🇸" : "🇫🇷"}</span>
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
