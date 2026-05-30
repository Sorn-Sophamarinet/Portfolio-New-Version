"use client"

import { useEffect, useRef, useState } from "react"
import { GraduationCap, Calendar, MapPin } from "@/components/fa-icons"

const educationList = [
  {
    degree: "Bachelor of Computer Science",
    school: "Royal University of Phnom Penh",
    location: "Phnom Penh, Cambodia",
    period: "2022 - 2025",
    description:
      "Comprehensive study of computer science fundamentals including algorithms, data structures, software engineering, database concepts, and web development foundations.",
    highlights: ["Computer Science", "Software Engineering", "Database Fundamentals", "Web Development"]
  },
  {
    degree: "Advanced Development Program - DevOps & Full Stack",
    school: "Institute of Science Technology Advanced Development (ISTAD)",
    location: "Phnom Penh, Cambodia",
    period: "2024 - 2025",
    description:
      "Intensive ISTAD program focused on modern full-stack development and DevOps practices, including containerization, deployment workflows, backend services, and production-oriented development tools.",
    highlights: ["Docker", "Kubernetes", "CI/CD", "Deployment", "Java Spring Framework", "PostgreSQL"],
  },
  {
    degree: "Australian Center For Education",
    school: "ACE",
    location: "Phnom Penh, Cambodia",
    period: "2022 - 2025",
    description:
      "English language proficiency and communication skills development program, enhancing professional communication abilities for the global workplace.",
    highlights: ["English Proficiency", "Professional Communication", "Academic Writing"],
  },
  {
    degree: "High School Diploma",
    school: "Chruh Busra High School",
    location: "Mondolkiri Province, Cambodia",
    period: "2019 - 2021",
    description:
      "Completed secondary education with focus on mathematics and sciences, laying the foundation for further studies in computer science.",
    highlights: ["Mathematics", "Sciences", "Computer Fundamentals"],
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
