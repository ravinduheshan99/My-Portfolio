"use client"

import { useEffect, useRef, useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Star, ExternalLink } from "lucide-react"

const projects = [
  {
    name: "Scan2Lab Manual Website QA Testing for Bugs and User Flow Improvements",
    description: "Manual QA testing for a lab test booking website, focused on defect logging and user flow improvements.",
    role: "Freelance QA Engineer (Upwork)",
    contributions:
      "Performed manual functional testing across the website, logged defects with clear reproduction steps, reviewed usability and user flows, validated screens against Figma designs, and executed cross-browser testing on desktop and mobile. Also reviewed application code to help narrow fix time.",
    tags: [
      "Manual Testing",
      "Web Testing",
      "Usability Testing",
      "Bug Logging",
      "User Flow Review",
      "Figma Validation",
      "Cross-Browser Testing",
      "Test Case Design",
    ],
    portfolioLink: "https://www.upwork.com/freelancers/~01b219cb54a8fcc78f?p=2013609062355103744",
  },
]

const feedback = {
  rating: 5,
  quote:
    '"Ravindu is an exceptional highly impactful QA tester. He approached testing with a deep sense of ownership, curiosity, and responsibility toward the end user, not just the product. What truly sets his work apart is his ability to think like a real user while testing like an engineer. You didn’t just identify issues, you helped the team understand why they matter and how they affect user confidence and flow. Also looked into application code that helped in narrowing fix time."',
  profileLink: "https://www.upwork.com/freelancers/~01b219cb54a8fcc78f?mp_source=share",
}

function UpworkIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 256 256"
      role="img"
      aria-label="Upwork"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill="currentColor"
        d="M201.6 72c-20.9 0-37.6 16.8-37.6 37.6c0 18.7 13.4 34.3 31.1 37.2c-4.3 21.7-19.7 37.2-40.6 37.2c-18.4 0-33.6-12.1-38.7-34.2l-7.6-32.7V72H88v56.9c0 23.6-14.3 38.5-34.7 38.5C32.5 167.4 20 152.6 20 129V72h20v56.9c0 11.6 6.2 18.5 16.4 18.5c10.4 0 16.3-7 16.3-18.5V72h47.4l9.4 40.9c7.4 32.1 28.8 54.8 62.8 54.8c34 0 58.2-25.5 61.7-60.5c21-3 37.1-21.1 37.1-43.1C242 88.8 224.8 72 201.6 72Zm0 55.2c-9.7 0-17.6-7.9-17.6-17.6s7.9-17.6 17.6-17.6s17.6 7.9 17.6 17.6s-7.9 17.6-17.6 17.6Z"
      />
    </svg>
  )
}

export default function OpenSourceSection() {
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
    <section id="opensource" ref={sectionRef} className="py-20 relative overflow-hidden">
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary/5 blur-[100px] -z-10" />

      <div className="container mx-auto px-4">
        <div
          className={`text-center mb-16 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <UpworkIcon className="w-10 h-10 text-primary hidden md:block" />
            <h2 className="text-4xl lg:text-5xl font-bold text-balance">
              Freelance{" "}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Journey
              </span>
            </h2>
          </div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
            A curated view of freelance QA work, including project outcomes and verified client feedback.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <Card
              key={index}
              className={`transition-all duration-500 hover:shadow-xl group ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${(index + 4) * 100}ms` }}
            >
              <CardHeader>
                <div className="flex items-start justify-between mb-2">
                  <UpworkIcon className="w-8 h-8 text-muted-foreground group-hover:text-primary transition-colors" />
                  <Badge variant="secondary" className="text-xs">
                    {project.role}
                  </Badge>
                </div>
                <CardTitle className="text-lg group-hover:text-primary transition-colors">
                  {project.name}
                </CardTitle>
                <CardDescription className="text-sm">
                  {project.description}
                </CardDescription>
              </CardHeader>

              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  {project.contributions}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, i) => (
                    <Badge key={i} variant="outline" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>

                <Button
                  variant="ghost"
                  size="sm"
                  className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors"
                  asChild
                >
                  <a href={project.portfolioLink} target="_blank" rel="noopener noreferrer">
                    View Upwork Portfolio Item
                    <ExternalLink className="w-4 h-4 ml-2" />
                  </a>
                </Button>
              </CardContent>
            </Card>
          ))}

          {/* Client Feedback Card */}
          <Card
            className={`transition-all duration-500 hover:shadow-xl ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
            style={{ transitionDelay: `${(projects.length + 5) * 100}ms` }}
          >
            <CardHeader>
              <div className="flex items-start justify-between mb-2">
                <UpworkIcon className="w-8 h-8 text-muted-foreground" />
                <Badge variant="secondary" className="text-xs">
                  Client Feedback
                </Badge>
              </div>
              <CardTitle className="text-lg">Upwork Review</CardTitle>
              <CardDescription className="text-sm">
                Verified 5-Star Rating
              </CardDescription>
            </CardHeader>

            <CardContent>
              {/* 5 Filled Stars */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: feedback.rating }).map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 text-yellow-500 fill-yellow-500"
                  />
                ))}
              </div>

              <p className="text-sm text-muted-foreground mb-4">
                {feedback.quote}
              </p>

              <Button
                variant="ghost"
                size="sm"
                className="w-full hover:bg-primary hover:text-primary-foreground transition-colors"
                asChild
              >
                <a href={feedback.profileLink} target="_blank" rel="noopener noreferrer">
                  View Feedback on Upwork
                  <ExternalLink className="w-4 h-4 ml-2" />
                </a>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
