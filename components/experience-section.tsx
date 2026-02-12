"use client"

import { useEffect, useRef, useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Briefcase, ChevronDown, ChevronUp } from "lucide-react"

const experience = [
  {
    company: "Upwork",
    position: "Freelance QA Engineer (Part-time)",
    employmentType: "Part-time",
    location: "Remote",
    duration: "Jul 2025 - Present",
    description:
      "Deliver freelance QA services for international and local clients, performing functional, regression, exploratory, and end-to-end testing for healthcare and enterprise web applications. Create detailed test cases, log and verify defects in Jira, validate UI against Figma designs, and suggest practical usability improvements. Recognized with the Upwork Rising Talent badge for delivery quality.",
    tags: [
      "Functional Testing",
      "Regression Testing",
      "Exploratory Testing",
      "End-to-End Testing",
      "Test Case Design",
      "Jira Defect Management",
      "UI Validation (Figma)",
      "Client Collaboration",
    ],
  },
  {
    company: "IFS R&D International",
    position: "Software Engineer – Quality Assurance (Trainee → Associate)",
    employmentType: "Full-time",
    location: "Colombo, Sri Lanka",
    duration: "Sep 2024 - Dec 2025",
    description:
      "Worked in the Aerospace & Defense domain, supporting Aviation Maintenance and Supply Chain solutions used by global customers. Started as an Undergraduate Trainee Software Engineer in QA and later progressed to Associate Software Engineer in QA. Contributed across multiple release cycles by executing end-to-end manual testing (smoke, regression, system, UAT, and exploratory), supporting CI-integrated automation and regression coverage, performing API validation with Postman, and conducting performance and load testing using Apache JMeter. Supported deployment, service update, release, and upgrade testing with strong attention to artifact validation, environment setup, and post-deployment sanity checks. Collaborated closely with developers, DevOps engineers, and product teams to ensure stable, high-quality deliveries.",
    tags: [
      "Manual & Exploratory Testing",
      "Regression / Smoke / System / UAT",
      "Automation Support (Selenium, Java)",
      "API Testing (Postman)",
      "Performance Testing (JMeter)",
      "Oracle PL/SQL / SQL Validation",
      "Release / Upgrade Validation",
      "Agile Collaboration",
      "Cross-Team Communication",
    ],
  },
  {
    company: "Vithanage Enterprises Pvt (Ltd)",
    position: "Branch Manager",
    employmentType: "Full-time",
    location: "Kandy District, Central Province, Sri Lanka (On-site)",
    duration: "Jul 2020 - Jul 2021",
    description:
      "Managed branch operations including distribution, customer service, administration, and sales. Coordinated day-to-day activities to ensure efficient execution, consistent service standards, and smooth branch performance.",
    tags: [
      "Operations Management",
      "Customer Service",
      "Administration",
      "Sales Coordination",
      "Team Coordination",
    ],
  },
  {
    company: "ESOFT Metro Campus",
    position: "IT Lab Instructor",
    employmentType: "Full-time",
    location: "Kandy District, Central Province, Sri Lanka (On-site)",
    duration: "Feb 2020 - May 2020",
    description:
      "Supported student lab activities by supervising and scheduling exams, assisting students with C# programming project issues, and maintaining lab facilities to ensure a smooth learning environment.",
    tags: [
      "Lab Supervision",
      "Exam Coordination",
      "Student Support",
      "C# Support",
      "IT Lab Maintenance",
    ],
  },
]

export default function ExperienceSection() {
  const [isVisible, setIsVisible] = useState(false)
  const [expandedItems, setExpandedItems] = useState<Record<number, boolean>>({})
  const sectionRef = useRef<HTMLElement>(null)

  const toggleExpand = (index: number) => {
    setExpandedItems(prev => ({
      ...prev,
      [index]: !prev[index]
    }))
  }

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
    <section id="experience" ref={sectionRef} className="py-20">
      <div className="container mx-auto px-4">
        <div
          className={`text-center mb-12 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <Briefcase className="w-8 h-8 text-primary hidden md:block" />
            <h2 className="text-4xl lg:text-5xl font-bold text-balance">Work Experience</h2>
          </div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
            My professional journey and key accomplishments
          </p>
        </div>

        <div className="space-y-6 max-w-4xl mx-auto">
          {experience.map((item, index) => (
            <Card
              key={index}
              className={`transition-all duration-500 hover:shadow-lg ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <CardHeader>
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div className="flex-1">
                    <CardTitle className="text-2xl mb-2">{item.position}</CardTitle>
                    <CardDescription className="text-base mb-2">{item.company}</CardDescription>
                    <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <span className="font-medium">Type:</span> {item.employmentType}
                      </span>
                      <span className="flex items-center gap-1">
                        <span className="font-medium">Location:</span> {item.location}
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="text-sm font-semibold text-primary whitespace-nowrap">{item.duration}</div>

                    {/* Mobile toggle button */}
                    <div className="md:hidden">
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => toggleExpand(index)}
                        className="flex items-center p-1"
                      >
                        {expandedItems[index] ? (
                          <ChevronUp className="w-4 h-4" />
                        ) : (
                          <ChevronDown className="w-4 h-4" />
                        )}
                      </Button>
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                {/* Details section - hidden on mobile by default, always visible on desktop */}
                <div className={`${expandedItems[index] ? "block" : "hidden"} md:block`}>
                  <p className="text-muted-foreground mb-4">{item.description}</p>
                  <div className="grid md:grid-cols-1 gap-4 mb-4">
                    <div>
                      <h4 className="font-semibold mb-2 text-sm">Skills:</h4>
                      <div className="flex flex-wrap gap-2">
                        {item.tags.map((tag, i) => (
                          <Badge key={i} variant="secondary">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
