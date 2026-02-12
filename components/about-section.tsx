"use client"

import { useEffect, useRef, useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { TestTube, Rocket, Settings, ChartNoAxesCombined, GitBranch, Server, Cloud, Database, CircleUserRound } from "lucide-react"

const skills = [
  { name: "Manual QA Testing", icon: TestTube },
  { name: "Test Automation", icon: Rocket },
  { name: "API Testing", icon: Settings },
  { name: "Performance Testing", icon: ChartNoAxesCombined },
  { name: "Databases & SQL", icon: Database },
  { name: "Git & Version Control", icon: GitBranch },
  { name: "Release Validation", icon: Server },
  { name: "DevOps Enthusiast", icon: Cloud },
]

export default function AboutSection() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section id="about" ref={sectionRef} className="py-12 md:py-20 relative">
      <div className="container mx-auto px-4">
        <div
          className={`mb-12 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="flex items-center justify-center gap-3 mb-6">
            <CircleUserRound className="w-8 h-8 text-primary hidden md:block" />
            <h2 className="text-4xl lg:text-5xl font-bold text-balance">
              About Me
            </h2>
          </div>

          <p className="text-lg text-muted-foreground leading-relaxed text-pretty text-justify">
            I'm a Computer Science graduate from the University of Kelaniya, Sri Lanka and an ISTQB-CTFL certified QA
            Engineer. I worked at IFS R&D International for 1 year and 04 months in the Aviation Maintenance and Supply
            Chain domain, starting as an Undergraduate Trainee Software Engineer in Quality Assurance and later
            progressing to Associate Software Engineer in Quality Assurance. My experience covers manual and exploratory
            testing, test automation, API validation, performance testing, and release and upgrade testing with Agile and
            cross-team collaboration, including DevOps exposure. In parallel, I work as a part-time freelance QA Engineer
            on Upwork, supporting both local and international clients. I am also a DevOps enthusiast and plan to
            transition into a DevOps role in the future.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-6">
          {skills.map((skill, index) => (
            <Card
              key={index}
              className={`transition-all duration-500 hover:scale-105 hover:shadow-lg ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <CardContent className="p-1 md:p-6 text-center">
                <skill.icon className="w-6 h-6 md:w-12 md:h-12 mx-auto mb-4 text-primary" />
                <h3 className="text-sm md:text-base font-semibold">{skill.name}</h3>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
