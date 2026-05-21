"use client"

import { useEffect, useRef, useState } from "react"
import { ExternalLink, Briefcase, Code2, Heart, ChevronRight } from "lucide-react"

const experiences = [
  {
    title: "Engineer Intern",
    company: "AI Farm Robotics Factory",
    companyShort: "AIRF",
    companyUrl: "#",
    period: "June 2024 - September 2024",
    description: [
      "Designed and tested stepper motor driver PCB boards used in the 3DOF robot arm for agricultural automation.",
      "Designed and implemented Battery Management System (BMS) for dog robot, ensuring safe operation and battery longevity.",
      "Tested and validated control systems using STM32CubeIDE, ensuring proper motor performance and system reliability.",
      "Collaborated with electrical and mechanical teams to integrate PCB designs with robotic systems.",
    ],
    technologies: ["Kicad", "STM32CubeIDE", "PCB Design", "BMS", "Motor Control", "C++"],
    icon: Code2,
    color: "from-cyan-500/20 to-blue-500/20",
  },
  {
    title: "Thesis Project",
    company: "Institute of Technology of Cambodia",
    companyShort: "ITC",
    companyUrl: "https://itc.edu.kh",
    period: "2024 - 2025",
    description: [
      "Engineered a 4-DOF SCARA robot using stepper motors, BLDC motors, 3D printed parts, and harmonic drives.",
      "Integrated pneumatic vacuum gripper end-effector for delicate object manipulation and handling.",
      "Developed forward/inverse kinematics algorithms and trajectory generation for precise robot motion.",
      "Implemented real-time motion planning in ROS2 with MoveIt2 for autonomous path planning.",
    ],
    technologies: ["ROS2", "MoveIt2", "Python", "Kinematics", "SCARA Robot", "SolidWorks"],
    icon: Briefcase,
    color: "from-purple-500/20 to-pink-500/20",
  },
  {
    title: "Volunteer English Teacher",
    company: "Taramana",
    companyShort: "Taramana",
    companyUrl: "#",
    period: "January 2024 - April 2024",
    description: [
      "Co-taught beginner English evening classes alongside Khmer and French volunteers.",
      "Organized and delivered lesson plans tailored to student proficiency levels for two groups of approximately ten students each.",
      "Developed interactive teaching materials and assessment methods for effective language learning.",
    ],
    technologies: ["English Teaching", "Communication", "Team Collaboration", "Curriculum Design"],
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
