"use client"

import { useEffect, useRef, useState } from "react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github, ChevronDown, ChevronUp, Rocket } from "lucide-react"

const projects = [
  {
    title: "Enterprise Selenium Java BDD Automation Framework",
    description:
      "Enterprise-style Selenium automation framework built from scratch using Java, Cucumber BDD, TestNG, and Maven. Designed with clean architecture, parallel execution, robust reporting, and Jenkins-ready CI/CD execution.",
    image: "projects/Enterprise Selenium Java BDD Automation Framework.png",
    tags: [
      "Selenium WebDriver",
      "Java",
      "Cucumber BDD",
      "TestNG",
      "Maven",
      "Jenkins",
      "POM",
      "Parallel Execution",
      "ExtentReports",
      "CI/CD",
    ],
    demo: "https://www.upwork.com/freelancers/~01b219cb54a8fcc78f?p=1946625157008801792",
    source: "https://github.com/ravinduheshan99/BDD-with-Java-MasterClass-Selenium-Framework-TestNG",
  },
  {
    title: "API Automation & Testing with Postman",
    description:
      "API testing and automation using Postman for REST, SOAP, and GraphQL services. Covers OAuth 2.0, scripting with JavaScript, data-driven workflows, schema validation, and CI-ready execution using Newman with Jenkins reporting.",
    image: "projects/API Automation & Testing with Postman.png",
    tags: [
      "Postman",
      "REST",
      "SOAP",
      "GraphQL",
      "OAuth 2.0",
      "JavaScript",
      "Newman",
      "Data-Driven Testing",
      "Schema Validation",
      "Jenkins",
    ],
    demo: "https://www.upwork.com/freelancers/~01b219cb54a8fcc78f?p=2014228276147093504",
    source: "https://github.com/ravinduheshan99/Postman-API-Automation-From-Scratch-with-CI-CD-Integration.git",
  },
  {
    title: "Performance Testing & Load Analysis with Apache JMeter",
    description:
      "Performance and load testing using Apache JMeter for web applications and REST APIs. Includes realistic load modeling, correlation with regex extractors, data-driven execution, non-GUI runs, and metrics analysis to identify stability risks and bottlenecks.",
    image: "projects/Performance Testing & Load Analysis with Apache JMeter.png",
    tags: [
      "Apache JMeter",
      "Load Testing",
      "Stress Testing",
      "REST API Performance",
      "Thread Groups",
      "Correlation (Regex)",
      "CSV Data Set Config",
      "Beanshell",
      "Non-GUI Execution",
      "Metrics Analysis",
    ],
    demo: "https://www.upwork.com/freelancers/~01b219cb54a8fcc78f?p=1991575202229141504",
    source: "https://github.com/ravinduheshan99/Performance-Testing-With-JMeter-Load-Testing-From-Scratch.git",
  },
  {
    title: "ETL Testing & Data Warehouse Validation",
    description:
      "End-to-end ETL testing and data warehouse validation using Pentaho and SQL. Covers extraction and staging checks, transformation and business rule validation, star schema verification, reconciliation, referential integrity, and Slowly Changing Dimensions (SCD Type 1 and Type 2).",
    image: "projects/ETL Testing & Data Warehouse Validation.png",
    tags: [
      "ETL Testing",
      "Data Warehousing",
      "Pentaho",
      "MySQL",
      "SQL Validation",
      "Star Schema",
      "Fact & Dimension Tables",
      "SCD Type 1/2",
      "Reconciliation",
      "Referential Integrity",
    ],
    demo: "https://www.upwork.com/freelancers/~01b219cb54a8fcc78f?p=2014590072651792384",
    source: "https://github.com/ravinduheshan99/ETL-Testing-and-Data-Warehouse-Fundamentals.git",
  },
  {
    title: "Modern Web Automation Framework – Playwright (Ongoing)",
    description:
      "Modern Playwright automation work focused on end-to-end web testing with UI and API coverage, network interception, advanced framework patterns (Page Objects, data-driven execution), rich reporting, and CI execution with Jenkins and Docker.",
    image: "projects/Modern Web Automation Framework – Playwright (Ongoing).png",
    tags: [
      "Playwright",
      "JavaScript",
      "TypeScript",
      "UI Automation",
      "API Testing",
      "Network Mocking",
      "Page Object Model",
      "Data-Driven Testing",
      "HTML/Allure Reports",
      "Jenkins",
      "Docker",
    ],
    demo: "https://github.com/ravinduheshan99/Playwright-JS-TS-Automation-Testing-from-Scratch-Framework.git",
    source: "https://github.com/ravinduheshan99/Playwright-JS-TS-Automation-Testing-from-Scratch-Framework.git",
  },
  {
    title: "Selenium Excel-Driven Testing and File Automation Framework",
    description:
      "Enterprise-grade data-driven framework that reads test data from Excel using Apache POI and executes parameterized TestNG runs. Automates file download, Excel updates, and upload flows with reliable explicit waits, toast validations, and dynamic table verification.",
    image: "projects/Selenium Excel-Driven Testing and File Automation Framework.png",
    tags: [
      "Selenium WebDriver",
      "Java",
      "Apache POI",
      "TestNG",
      "Maven",
      "Data-Driven Testing",
      "Excel Integration",
      "File Upload/Download",
      "Explicit Waits",
      "Dynamic XPath",
    ],
    demo: "https://www.upwork.com/freelancers/~01b219cb54a8fcc78f?p=1946631655292018688",
    source: "https://github.com/ravinduheshan99/06-Selenium-Excel-Driven-Testing-and-File-Automation.git",
  },
  {
    title: "Advanced Test Automation with Selenium CDP Integration",
    description:
      "Advanced Selenium automation using Chrome DevTools Protocol (CDP) for network interception, request blocking and throttling, device emulation, authentication flows, console error capture, and location override. Built to validate edge cases and improve test reliability with deeper browser-level control.",
    image: "projects/Advanced Test Automation with Selenium CDP Integration.png",
    tags: [
      "Selenium WebDriver",
      "Chrome DevTools Protocol",
      "Java",
      "TestNG",
      "Maven",
      "Device Emulation",
      "Network Interception",
      "Request Blocking",
      "Network Throttling",
      "Console Error Logging",
      "Geolocation Override",
    ],
    demo: "https://www.upwork.com/freelancers/~01b219cb54a8fcc78f?p=1946636016002490368",
    source: "https://github.com/ravinduheshan99/07-Selenium-Chrome-Dev-Tools-Protocol-Integration-Concepts.git",
  },
  {
    title: "Database-Driven Test Automation – MySQL + Selenium (JDBC)",
    description:
      "Database-driven Selenium automation using MySQL with JDBC for runtime test data. Includes programmatic database and table setup, structured scenario tables, centralized credential management, and data-driven workflows for flexible, scalable test execution.",
    image: "projects/Database-Driven Test Automation.png",
    tags: [
      "Selenium WebDriver",
      "MySQL",
      "JDBC",
      "Java",
      "SQL",
      "Data-Driven Testing",
      "Credential Management",
      "Schema Design",
      "Scenario-Based Testing",
    ],
    demo: "https://www.upwork.com/freelancers/~01b219cb54a8fcc78f?p=1946637210867613696",
    source: "https://github.com/ravinduheshan99/08-Database-Connection-Selenium-Testcases.git",
  },
  {
    title: "Cross-Browser Testing with Selenium Grid",
    description:
      "Distributed cross-browser test automation using Selenium Grid with a hub-and-node setup. Supports RemoteWebDriver execution with DesiredCapabilities, parallel TestNG suites (5+ threads), and reporting for scalable cross-browser validation.",
    image: "projects/Cross-Browser Testing with Selenium Grid.png",
    tags: [
      "Selenium Grid",
      "Selenium WebDriver",
      "RemoteWebDriver",
      "DesiredCapabilities",
      "TestNG",
      "Parallel Execution",
      "Cross-Browser Testing",
      "Distributed Testing",
      "Hub & Node Architecture",
      "HTML Reports",
    ],
    demo: "https://www.upwork.com/freelancers/~01b219cb54a8fcc78f?p=1946629892734533632",
    source: "https://github.com/ravinduheshan99/05-Cross-Browser-Testing-with-Selenium-Grid.git",
  },
]

export default function ProjectsSection() {
  const [isVisible, setIsVisible] = useState(false)
  const [expandedProjects, setExpandedProjects] = useState<Record<number, boolean>>({})
  const sectionRef = useRef<HTMLElement>(null)

  const toggleExpand = (index: number) => {
    setExpandedProjects(prev => ({
      ...prev,
      [index]: !prev[index],
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
    <section id="projects" ref={sectionRef} className="py-20">
      <div className="container mx-auto px-4">
        <div
          className={`text-center mb-12 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <Rocket className="w-8 h-8 text-primary hidden md:block" />
            <h2 className="text-4xl lg:text-5xl font-bold text-balance">My Projects</h2>
          </div>

          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
            A selection of QA automation and testing projects I’ve built, including framework development, API testing,
            performance validation, and ETL testing work.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className={`overflow-hidden transition-all duration-500 hover:scale-105 hover:shadow-xl ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="relative overflow-hidden group">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                />
              </div>

              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="flex-1">{project.title}</CardTitle>

                  <div className="md:hidden">
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => toggleExpand(index)}
                      className="flex items-center p-1"
                    >
                      {expandedProjects[index] ? (
                        <ChevronUp className="w-4 h-4" />
                      ) : (
                        <ChevronDown className="w-4 h-4" />
                      )}
                    </Button>
                  </div>
                </div>

                <CardDescription className={`${expandedProjects[index] ? "block" : "hidden"} md:block`}>
                  {project.description}
                </CardDescription>
              </CardHeader>

              <CardContent>
                <div className={`flex flex-wrap gap-2 ${expandedProjects[index] ? "flex" : "hidden"} md:flex`}>
                  {project.tags.map((tag, i) => (
                    <Badge key={i} variant="secondary">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>

              <CardFooter className="gap-2">
                <Button variant="default" size="sm" asChild>
                  <a href={project.demo} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Live Demo
                  </a>
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  className="hover:bg-primary hover:text-[var(--color-devops-qa)]"
                  asChild
                >
                  <a href={project.source} target="_blank" rel="noopener noreferrer">
                    <Github className="w-4 h-4 mr-2" />
                    Source Code
                  </a>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
