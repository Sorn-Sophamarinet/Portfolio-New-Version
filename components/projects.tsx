"use client"

import { useEffect, useRef, useState } from "react"
import { Github, ExternalLink, Folder, ArrowRight, Code2, Layers, Database, Palette, Bot } from "lucide-react"

const featuredProjects = [
  {
    title: "4-DOF SCARA Robot Thesis",
    description:
      "Master's thesis: Engineered a 4-DOF selective compliant articulated robot with stepper and BLDC motors, FDM 3D-printed components, and harmonic drive reducers. Integrated pneumatic vacuum gripper for precise object manipulation. Implemented complete kinematic analysis with forward/inverse kinematics algorithms. Developed real-time motion planning and trajectory generation using ROS2 with MoveIt2 for autonomous robot operation.",
    technologies: ["ROS2", "MoveIt2", "Python", "C++", "SolidWorks", "Kinematics"],
    github: "https://github.com/panhavann09/thesis-SCARA-2025",
    external: "https://github.com/panhavann09/thesis-SCARA-2025",
    icon: Bot,
    color: "from-emerald-500/20 to-cyan-500/20",
  },
  {
    title: "PCB Control Board - Robocon 2022",
    description:
      "Designed main PCB control board for national robot competition. Integrated stepper motor drivers, power management circuits, sensor conditioning interfaces, and microcontroller connections. Optimized PCB layout using Kicad for minimal noise and reliable operation under dynamic competition conditions with real-time control requirements.",
    technologies: ["Kicad", "PCB Design", "Schematic Design", "Motor Control", "Electronics"],
    github: "https://github.com/panhavann09/PCB-Board-2022",
    external: "https://github.com/panhavann09/PCB-Board-2022",
    icon: Layers,
    color: "from-cyan-500/20 to-blue-500/20",
  },
  {
    title: "Robocon 2023 Mechanical Design",
    description:
      "Mechanical design lead for Cambodia's 10th National Robot Competition entry. Created comprehensive 3D CAD models using SolidWorks including robot frame structure, transmission systems, joint assemblies, and load-bearing components. Optimized designs for manufacturability and competition requirements. Team achieved 2nd Runner-Up award through innovative mechanical engineering.",
    technologies: ["SolidWorks", "CAD Design", "3D Modeling", "Mechanical Assembly", "Engineering Design"],
    github: "https://github.com/panhavann09/robocon-2023",
    external: "https://github.com/panhavann09/robocon-2023",
    icon: Palette,
    color: "from-purple-500/20 to-pink-500/20",
  },
  {
    title: "Battery Management System (BMS)",
    description:
      "Internship project at AI Farm Robotics Factory: Designed and tested Battery Management System for autonomous quadruped robot. Implemented cell voltage monitoring, charging protection logic, current limiting, and cell balancing circuits. Ensured safe reliable operation of lithium battery packs under continuous autonomous robot operation and charging cycles.",
    technologies: ["Kicad", "STM32CubeIDE", "Power Management", "Battery Design", "C++"],
    github: "https://github.com/panhavann09",
    external: "https://github.com/panhavann09",
    icon: Database,
    color: "from-orange-500/20 to-red-500/20",
  },
]

const otherProjects = [
  {
    title: "Motor Driver Circuits",
    description: "Designed stepper and BLDC motor driver circuits with current limiting, thermal protection, and PWM control. Implemented using discrete MOSFETs and integrated driver ICs with proper heat dissipation design.",
    technologies: ["Kicad", "Electronics", "Motor Control", "Power Design"],
    github: "#",
    external: "#",
  },
  {
    title: "ROS2 Node Development",
    description: "Developed custom ROS2 nodes for robot perception, planning, and control. Implemented message passing, service calls, and parameter servers for distributed robotic system architecture.",
    technologies: ["ROS2", "Python", "C++", "Robot Middleware"],
    github: "#",
    external: "#",
  },
  {
    title: "3D Printed Robot Parts",
    description: "Designed FDM 3D-printable mechanical components including motor mounts, brackets, joints, and enclosures. Optimized for strength-to-weight ratio and assembly with commercial components.",
    technologies: ["SolidWorks", "CAD", "3D Printing", "Design for Manufacturing"],
    github: "#",
    external: "#",
  },
  {
    title: "STM32 Embedded Programming",
    description: "Developed firmware for STM32 microcontrollers including GPIO control, PWM generation, ADC sampling, and I2C/SPI communication for real-time robotic applications.",
    technologies: ["STM32CubeIDE", "C", "Embedded Systems", "Firmware"],
    github: "#",
    external: "#",
  },
  {
    title: "Sensor Interfacing",
    description: "Integrated encoders, IMU sensors, and distance sensors with microcontrollers for real-time feedback in robotic systems. Implemented calibration and filtering algorithms for sensor data.",
    technologies: ["Arduino", "Sensors", "Signal Processing", "Data Acquisition"],
    github: "#",
    external: "#",
  },
  {
    title: "MATLAB Robot Simulation",
    description: "Developed MATLAB/Simulink models for robot kinematics, dynamics, and trajectory planning. Validated control algorithms before hardware implementation to ensure safety and performance.",
    technologies: ["MATLAB", "Simulink", "Kinematics", "Control Design"],
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
              03. Engineering Projects
            </span>
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">
              <span className="gradient-text">Design & Implementation</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Featured robotics and mechanical engineering projects demonstrating CAD design, kinematics analysis, PCB development, and system integration
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
              href="https://github.com/panhavann09"
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
