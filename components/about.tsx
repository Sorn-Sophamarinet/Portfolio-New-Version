"use client"

import { useEffect, useRef, useState } from "react"
import { User, Briefcase, GraduationCap, Heart } from "lucide-react"

const techStack = [
  "ROS2",
  "MoveIt2",
  "Python",
  "C++",
  "MATLAB",
  "Arduino IDE",
  "Kicad",
  "SolidWorks",
  "Solid Edge",
  "STM32CubeIDE",
  "Ubuntu Linux",
  "Git/GitHub",
]

const softSkills = [
  { name: "Problem-Solving", icon: "🧩" },
  { name: "Mechanical Design", icon: "⚙️" },
  { name: "Kinematics & Dynamics", icon: "🔧" },
  { name: "Team Collaboration", icon: "🤝" },
  { name: "Technical Analysis", icon: "📊" },
  { name: "Organization & Multitasking", icon: "📋" },
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
    { icon: Heart, label: "Languages" },
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
              Mechanical engineer specializing in robotics design, kinematics, and embedded control systems
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
                      <span className="text-4xl font-bold gradient-text">VP</span>
                    </div>
                  </div>
                  
                  <div className="text-center">
                    <h3 className="text-xl font-bold text-foreground mb-1">Vann Panha</h3>
                    <p className="text-primary font-mono text-sm mb-4">Robotics Engineer</p>
                    
                    {/* Stats */}
                    <div className="grid grid-cols-3 gap-4 py-4 border-t border-b border-border/50">
                      <div>
                        <div className="text-2xl font-bold text-primary">4+</div>
                        <div className="text-xs text-muted-foreground">Projects</div>
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-primary">10+</div>
                        <div className="text-xs text-muted-foreground">Skills</div>
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-primary">2</div>
                        <div className="text-xs text-muted-foreground">Awards</div>
                      </div>
                    </div>
                    
                    {/* Location */}
                    <div className="mt-4 text-sm text-muted-foreground">
                      📍 Battambang, Cambodia
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
                      I&apos;m <span className="text-primary font-medium">Vann Panha</span>, a mechanical engineer focused on robotics design and autonomous systems. 
                      I specialize in precision mechanical design, kinematics modeling, embedded control systems, and bringing complex engineering concepts 
                      from CAD to real-world functional robots.
                    </p>
                    <p className="text-muted-foreground leading-relaxed">
                      Currently pursuing a Master's in <span className="text-primary font-medium">Robotics and Automation Engineering</span> at 
                      ECAM LaSalle Phnom Penh, with a Bachelor's in Mechanical Engineering from the Institute of Technology of Cambodia. 
                      My work bridges mechanical design, electrical integration, and control system implementation.
                    </p>
                    <p className="text-muted-foreground leading-relaxed">
                      Technical background spans <span className="text-primary font-medium">4-DOF SCARA robot kinematics, mechanical design with SolidWorks/Solid Edge, 
                      PCB layout and electronics design, embedded firmware, and motion planning algorithms</span>. I approach every project with precision 
                      engineering principles and a commitment to reliable, manufacturable solutions.
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
                        <h4 className="font-semibold text-foreground">Engineer Intern</h4>
                        <p className="text-primary text-sm">AI Farm Robotics Factory</p>
                        <p className="text-muted-foreground text-sm mt-2">
                          Designed stepper motor driver PCBs and Battery Management System for autonomous robots. 
                          Tested control systems using STM32CubeIDE.
                        </p>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                        <Heart className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground">Volunteer English Teacher</h4>
                        <p className="text-primary text-sm">Taramana</p>
                        <p className="text-muted-foreground text-sm mt-2">
                          Co-taught beginner English evening classes with Khmer and French volunteers. 
                          Developed tailored lesson plans for approximately 20 students.
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
                        <h4 className="font-semibold text-foreground">Master of Robotics & Automation</h4>
                        <p className="text-primary text-sm">ECAM LaSalle Phnom Penh</p>
                        <p className="text-muted-foreground text-sm">2023 - 2025</p>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                        <GraduationCap className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground">Bachelor of Mechanical Engineering</h4>
                        <p className="text-primary text-sm">Institute of Technology of Cambodia</p>
                        <p className="text-muted-foreground text-sm">2020 - 2025</p>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                        <GraduationCap className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground">High School Diploma</h4>
                        <p className="text-primary text-sm">Presh Monyvong High School</p>
                        <p className="text-muted-foreground text-sm">2015 - 2020</p>
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === 3 && (
                  <div className="space-y-6 animate-scale-in">
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="font-semibold text-foreground">Khmer</h4>
                        <span className="text-xs px-2 py-1 rounded bg-primary/20 text-primary font-medium">Native</span>
                      </div>
                      <div className="w-full bg-secondary/50 rounded-full h-2">
                        <div className="bg-primary h-2 rounded-full w-full" />
                      </div>
                    </div>
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="font-semibold text-foreground">English</h4>
                        <span className="text-xs px-2 py-1 rounded bg-primary/20 text-primary font-medium">Good</span>
                      </div>
                      <div className="w-full bg-secondary/50 rounded-full h-2">
                        <div className="bg-primary h-2 rounded-full w-4/5" />
                      </div>
                    </div>
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="font-semibold text-foreground">French</h4>
                        <span className="text-xs px-2 py-1 rounded bg-primary/20 text-primary font-medium">Average</span>
                      </div>
                      <div className="w-full bg-secondary/50 rounded-full h-2">
                        <div className="bg-primary h-2 rounded-full w-3/5" />
                      </div>
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
