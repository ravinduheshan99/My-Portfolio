"use client"

import { useEffect, useMemo, useRef, useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { GraduationCap, ChevronDown, ChevronUp } from "lucide-react"

const education = [
  {
    institution: "University of Kelaniya, Sri Lanka",
    degree: "Bachelor of Science in Computer Science (Hons)",
    field: "Computer Science, Pure Mathematics and Applied Mathematics",
    duration: "Jul 2021 - Apr 2025",
    description:
      "Completed an honours degree specializing in Computer Science, with Pure and Applied Mathematics as secondary subjects during the first two academic years. Built a strong foundation in algorithms, software engineering, and analytical problem-solving.",
    achievements: [
      "Second Class (Upper Division) Honours | GPA: 3.61",
      "Dean’s List (2 consecutive years) | GPA: 3.78 and 3.76",
      "Final Year Research: ML model for narcissistic trait detection from social media bios (86.5% accuracy)",
      "Vice President, Statistics and Computer Science Student’s Association (SCSSA)",
    ],
    tags: ["Computer Science", "Algorithms", "Software Engineering", "Machine Learning", "Data Analysis", "Leadership"],
    logo: "/education/UOK.png",
  },
  {
    institution: "Institute of Computer Engineering Technology (iCET)",
    degree: "iCET Certified Developer (iCD)",
    field: "Computer Software Engineering",
    duration: "Nov 2023 - Jul 2025",
    description:
      "Completed an industry-oriented diploma focused on practical software development and enterprise application design, with strong hands-on project exposure and structured engineering practices.",
    achievements: ["Completed"],
    tags: ["Java", "OOP", "Design Patterns", "DSA", "MySQL", "REST APIs", "JDBC", "SDLC"],
    logo: "/education/iCET.png",
  },
  {
    institution: "ESOFT Metro Campus",
    degree: "Diploma in Information Technology (DiTEC)",
    field: "Information Technology",
    duration: "Sep 2019 - Feb 2020",
    description:
      "Completed a foundational IT diploma with extensive practical exposure across core IT modules and programming fundamentals, including a mandatory Windows application project using C#.NET.",
    achievements: ["Completed | 242 theory hours and 220 practical hours", "Final Project: Windows application using C#.NET"],
    tags: ["IT Fundamentals", "Networking", "Python", "Database Concepts", "C#.NET", "Web Design Basics"],
    logo: "/education/ESOFT.png",
  },
  {
    institution: "ESOFT Metro Campus",
    degree: "Diploma in English (DiE)",
    field: "English Language and Literature (General)",
    duration: "Sep 2019 - Feb 2020",
    description:
      "Strengthened academic and professional English communication skills, including structured writing, presentations, and business-oriented communication.",
    achievements: ["Completed"],
    tags: ["Professional Communication", "Presentation Skills", "Business English", "Writing"],
    logo: "/education/ESOFT.png",
  },
  {
    institution: "St. Anthony's College, Kandy",
    degree: "Primary and Secondary Education",
    field: "Mathematics and Science Stream",
    duration: "Jan 2005 - Aug 2019",
    description:
      "Completed primary and secondary education with strong academic performance and active involvement in leadership, societies, and competitive sports.",
    achievements: [
      "GCE O/L: 8 A grades and 1 B",
      "GCE A/L (Science): 2 C grades and 1 B",
      "Division I All Island Best Bowler Runner-up (2014)",
      "Represented Kandy District and Central Province cricket teams | School First XI Cricket Team (2014 - 2016)",
      "Secretary, Science and Mathematics Society",
    ],
    tags: ["Leadership", "Teamwork", "Cricket", "Discipline", "Communication"],
    logo: "/education/SACK.png",
  },
]

export default function EducationSection() {
  const [isVisible, setIsVisible] = useState(false)
  const [expandedItems, setExpandedItems] = useState<Record<number, boolean>>({})
  const sectionRef = useRef<HTMLElement>(null)

  const toggleExpand = (index: number) => {
    setExpandedItems((prev) => ({
      ...prev,
      [index]: !prev[index],
    }))
  }

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true)
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  const title = useMemo(() => "Education", [])

  return (
    <section id="education" ref={sectionRef} className="py-20">
      <div className="container mx-auto px-4">
        <div
          className={`text-center mb-12 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <GraduationCap className="w-10 h-10 text-primary hidden md:block" />
            <h2 className="text-4xl lg:text-5xl font-bold text-balance">{title}</h2>
          </div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
            My academic background and professional certifications
          </p>
        </div>

        <div className="space-y-6 max-w-4xl mx-auto">
          {education.map((item, index) => (
            <Card
              key={index}
              className={`transition-all duration-500 hover:shadow-lg ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <CardHeader>
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                  <div className="flex gap-4 flex-1">
                    {/* Institute logo */}
                    <div className="w-12 h-12 md:w-14 md:h-14 rounded-lg border bg-background overflow-hidden flex items-center justify-center shrink-0">
                      <img
                        src={item.logo}
                        alt={`${item.institution} logo`}
                        className="w-full h-full object-contain p-2"
                        loading="lazy"
                      />
                    </div>

                    <div className="flex-1">
                      <CardTitle className="text-2xl mb-1">{item.degree}</CardTitle>
                      <CardDescription className="text-base">{item.institution}</CardDescription>
                      <p className="text-sm text-muted-foreground mt-2">{item.field}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 md:pt-1">
                    <div className="text-sm font-semibold text-primary whitespace-nowrap">{item.duration}</div>

                    {/* Mobile toggle button */}
                    <div className="md:hidden">
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => toggleExpand(index)}
                        className="flex items-center p-1"
                        aria-label={expandedItems[index] ? "Collapse details" : "Expand details"}
                      >
                        {expandedItems[index] ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                      </Button>
                    </div>
                  </div>
                </div>
              </CardHeader>

              <CardContent>
                {/* Details section - hidden on mobile by default, always visible on desktop */}
                <div className={`${expandedItems[index] ? "block" : "hidden"} md:block`}>
                  <p className="text-muted-foreground mb-4">{item.description}</p>

                  <div className="grid md:grid-cols-2 gap-4 mb-4">
                    <div>
                      <h4 className="font-semibold mb-2 text-sm">Achievements:</h4>
                      <ul className="space-y-1">
                        {item.achievements.map((achievement, i) => (
                          <li key={i} className="text-sm text-muted-foreground flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>

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
