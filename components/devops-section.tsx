"use client"

import { useEffect, useRef, useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { SearchCode, Code, GitBranch, TestTube, Package, Rocket, Activity, Brain, Database } from "lucide-react"

const devopsStages = [
  {
    icon: TestTube,
    title: "QA & Agile Practices",
    description: "Functional, regression, smoke, exploratory, system, integration, and UAT testing with strong defect lifecycle management",
    color: "text-[var(--color-devops-qa)]",
    highlight: true,
    type: "both",
  },
  {
    icon: Code,
    title: "Automation & Frameworks",
    description: "Selenium WebDriver (Java), TestNG, JUnit, Cucumber (BDD), Playwright (JS/TS), POM/Factory, parallel and cross-browser execution",
    color: "text-foreground",
    type: "software",
  },
  {
    icon: Brain,
    title: "API & Performance Testing",
    description: "Postman/Newman for REST, SOAP, and GraphQL with OAuth 2.0, plus load and performance testing using Apache JMeter",
    color: "text-foreground",
    type: "software",
  },
  {
    icon: Database,
    title: "Programming & Databases",
    description: "Java, Python, JavaScript, SQL validation (Oracle/MySQL/JDBC) with backend verification and data testing",
    color: "text-foreground",
    type: "software",
  },
  {
    icon: Package,
    title: "DevOps & CI/CD",
    description: "Jenkins, Bamboo, Git/GitHub/Bitbucket, Docker, Kubernetes, Azure (ACR, File Sync), and JFrog Artifactory",
    color: "text-foreground",
    type: "both",
  },
  {
    icon: Activity,
    title: "Analytical & Collaboration",
    description: "Problem-solving, requirement validation, data analysis, communication, and Agile cross-team collaboration",
    color: "text-foreground",
    type: "software",
  },
]

export default function DevOpsSection() {
  const [isVisible, setIsVisible] = useState(false)
  const [currentHighlight, setCurrentHighlight] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
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

  useEffect(() => {
    if (!isVisible || isPaused) return

    const interval = setInterval(() => {
      setCurrentHighlight((prev) => (prev + 1) % devopsStages.length)
    }, 1000)

    return () => clearInterval(interval)
  }, [isVisible, isPaused])

  return (
    <section id="devops" ref={sectionRef} className="py-20 relative overflow-hidden">
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-accent/5 blur-[100px] -z-10" />

      <div className="container mx-auto px-4">
        <div
          className={`text-center mb-16 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <SearchCode className="w-8 h-8 text-primary hidden md:block" />
            <h2 className="text-4xl lg:text-5xl font-bold text-balance">
              QA Engineering{" "}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Core Skills
              </span>
            </h2>
          </div>

          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
            A snapshot of the QA capabilities I use to support stable enterprise delivery, including automation, API and
            performance validation, database testing, and CI/CD awareness.
          </p>
        </div>

        <div className="mb-16">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {devopsStages.map((stage, index) => {
              const wavePosition = (index - currentHighlight + devopsStages.length) % devopsStages.length
              const isInWave = wavePosition <= 2
              const waveIntensity = isInWave ? 3 - wavePosition : 0

              let waveClass = ""
              if (waveIntensity === 3) {
                waveClass = "border-2 border-primary shadow-lg shadow-primary/20 bg-gradient-to-br from-primary/5 to-accent/5"
              } else if (waveIntensity === 2) {
                waveClass = "border border-primary/50 shadow-md shadow-primary/10 bg-gradient-to-br from-primary/3 to-accent/3"
              } else if (waveIntensity === 1) {
                waveClass = "border border-primary/30 shadow-sm shadow-primary/5"
              }

              const cardClasses = `transition-all duration-700 hover:shadow-xl hover:border-primary hover:bg-gradient-to-br hover:from-primary/10 hover:to-accent/10 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              } ${waveClass}`

              let iconBgClasses = "bg-secondary"
              if (waveIntensity === 3) {
                iconBgClasses = "bg-primary/10"
              } else if (waveIntensity === 2) {
                iconBgClasses = "bg-primary/5"
              } else if (waveIntensity === 1) {
                iconBgClasses = "bg-primary/3"
              }

              return (
                <Card
                  key={index}
                  className={cardClasses}
                  style={{ transitionDelay: `${index * 100}ms` }}
                  onMouseEnter={() => setIsPaused(true)}
                  onMouseLeave={() => setIsPaused(false)}
                >
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className={`p-3 rounded-lg ${iconBgClasses}`}>
                        <stage.icon className={`w-6 h-6 ${stage.color}`} />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold mb-2">
                          {stage.title}
                        </h4>
                        <p className="text-sm text-muted-foreground">{stage.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>

        <div className="mt-12 text-center">
          <Card className="max-w-4xl mx-auto bg-gradient-to-r from-primary/5 to-accent/5 border-primary/20">
            <CardContent className="p-8">
              <p className="text-lg leading-relaxed text-pretty">
                <span className="font-semibold text-primary">Quality Assurance</span> is most effective when it is built
                into delivery. Strong test strategy, automation, backend validation, and CI-aware regression help teams
                ship with confidence across releases and upgrades.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
