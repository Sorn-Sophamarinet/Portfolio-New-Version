"use client"

import { useEffect, useRef, useState } from "react"
import { GraduationCap, Calendar, MapPin } from "lucide-react"

const educationList = [
  {
    degree: "Master of Robotics and Automation Engineering",
    school: "ECAM LaSalle Phnom Penh",
    location: "Phnom Penh, Cambodia",
    period: "2023 - 2025",
    description:
      "Specialized graduate program in robotics and automation engineering. Focused on advanced topics including motion planning, control systems, robotic vision, and autonomous systems design with hands-on laboratory work.",
    highlights: ["ROS2", "Motion Planning", "Control Systems", "Robotic Vision", "Kinematics", "MoveIt2"]
  },
  {
    degree: "Bachelor of Mechanical and Industrial Engineering",
    school: "Institute of Technology of Cambodia",
    location: "Phnom Penh, Cambodia",
    period: "2020 - 2025",
    description:
      "Comprehensive engineering program covering mechanical design, dynamics, control systems, manufacturing processes, and robotics. Completed thesis project on 4-DOF SCARA robot with kinematics and trajectory planning.",
    highlights: [ "SolidWorks", "MATLAB", "Robotics", "Kinematics", "CAD Design", "Systems Engineering"],
  },
  {
    degree: "English Language & Communication",
    school: "Presh Monyvong High School",
    location: "Battambang, Cambodia",
    period: "2015 - 2020",
    description:
      "Secondary education with strong emphasis on mathematics, sciences, and English language proficiency, preparing foundation for higher engineering studies.",
    highlights: ["Mathematics", "Physics", "Chemistry", "English Proficiency", "Technical Fundamentals"],
  },
]

export function Education() {
  const [isVisible, setIsVisible] = useState(false)
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
    <section id="education" ref={sectionRef} className="py-24 px-6">
      <div className="mx-auto max-w-4xl">
        <div
          data-aos="fade-up"
          className={`transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {/* Section Header */}
          <div className="flex items-center gap-4 mb-12">
            <span className="text-primary font-mono text-sm">05.</span>
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground">Education</h2>
            <div className="flex-1 h-px bg-border" />
          </div>

          {/* Education Timeline */}
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-6 top-0 bottom-0 w-px bg-border hidden md:block" />

            {/* Education Items */}
            <div className="space-y-8">
              {educationList.map((edu, index) => (
                <div
                  key={index}
                  className="relative md:pl-16"
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  {/* Timeline icon */}
                  <div className="absolute left-0 hidden md:flex w-12 h-12 rounded-full bg-card border border-primary/30 items-center justify-center">
                    <GraduationCap className="w-5 h-5 text-primary" />
                  </div>

                  {/* Content Card */}
                  <div className="group p-6 rounded-lg bg-card border border-border hover:border-primary/30 transition-all duration-300">
                    <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                      <div>
                        <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                          {edu.degree}
                        </h3>
                        <p className="text-primary font-medium">{edu.school}</p>
                      </div>
                      <div className="flex flex-col items-end gap-1 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          {edu.period}
                        </div>
                        <div className="flex items-center gap-1">
                          <MapPin className="w-4 h-4" />
                          {edu.location}
                        </div>
                      </div>
                    </div>

                    <p className="text-muted-foreground text-sm leading-relaxed mb-4">{edu.description}</p>

                    {/* Highlights */}
                    <div className="flex flex-wrap gap-2">
                      {edu.highlights.map((highlight) => (
                        <span
                          key={highlight}
                          className="px-2 py-1 text-xs font-mono rounded bg-primary/10 text-primary"
                        >
                          {highlight}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
