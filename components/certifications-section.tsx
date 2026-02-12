"use client"

import { useEffect, useRef, useState } from "react"
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink, Award } from "lucide-react"

const certifications = [
  {
    title: "ISTQB - CTFL",
    issuer: "ISTQB",
    date: "Credential Verification",
    verifyLink: "https://scr.istqb.org/?name=Ravindu+Heshan+Haputhanthri&number=SL-CTFL-2505-6265",
  },
  {
    title: "Selenium WebDriver with Java",
    issuer: "Udemy",
    date: "Certificate",
    verifyLink: "https://www.udemy.com/certificate/UC-fab94232-7469-4a96-b53b-a16d42c50710/",
  },
  {
    title: "Cucumber BDD with Java",
    issuer: "Udemy",
    date: "Certificate",
    verifyLink: "https://www.udemy.com/certificate/UC-9b41ab81-d9e4-43f4-9c36-d07428ff948f/",
  },
  {
    title: "JMeter from Scratch",
    issuer: "Udemy",
    date: "Certificate",
    verifyLink: "https://www.udemy.com/certificate/UC-263c33d1-636f-4703-a4d6-e9ef9d75395c/",
  },
  {
    title: "Postman API Testing",
    issuer: "Udemy",
    date: "Certificate",
    verifyLink: "https://www.udemy.com/certificate/UC-060e6199-13f7-4130-ba33-61f83df5bf9b/",
  },
  {
    title: "ETL & Data Warehousing",
    issuer: "Udemy",
    date: "Certificate",
    verifyLink: "https://www.udemy.com/certificate/UC-25e55701-b094-4ea4-8db5-20a11de492e5/",
  },
  {
    title: "MySQL Certified Associate",
    issuer: "Oracle",
    date: "Digital Badge",
    verifyLink:
      "https://catalog-education.oracle.com/ords/certview/sharebadge?id=DBE3884CF8ED30CE9318A24CE0B1D85D57AA33DFCD3F2E7ECF2386F78423D008",
  },
  {
    title: "Docker Training",
    issuer: "KodeKloud",
    date: "Certificate",
    verifyLink: "https://learn.kodekloud.com/user/certificate/a77369f5-84b8-45dd-80b1-c7c36b2a4e31",
  },
  {
    title: "AWS Cloud Quest",
    issuer: "AWS (Credly)",
    date: "Digital Badge",
    verifyLink: "https://www.credly.com/badges/df785279-a4e0-419c-8bfb-6c096b44c5d9/linked_in_profile",
  },
  {
    title: "12 Factor App",
    issuer: "KodeKloud",
    date: "Certificate",
    verifyLink: "https://learn.kodekloud.com/certificate/266b0eac-6433-4d5d-8cb2-e54637068cfd",
  },
  {
    title: "Software Engineer Intern Certificate",
    issuer: "HackerRank",
    date: "Certificate",
    verifyLink: "https://www.hackerrank.com/certificates/23224133b801",
  },
  {
    title: "Java (Basic) Certificate",
    issuer: "HackerRank",
    date: "Certificate",
    verifyLink: "https://www.hackerrank.com/certificates/174c5d9e55d3",
  },
  // Note: this list shows 12 items. The flip grid rotates through items automatically.
]

export default function CertificationsSection() {
  const [isVisible, setIsVisible] = useState(false)
  const [cardStates, setCardStates] = useState([
    { frontIndex: 0, backIndex: 4, isFlipped: false },
    { frontIndex: 1, backIndex: 5, isFlipped: false },
    { frontIndex: 2, backIndex: 6, isFlipped: false },
    { frontIndex: 3, backIndex: 7, isFlipped: false },
  ])
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
      setCardStates((prevStates) =>
        prevStates.map((state) => {
          // If card is not flipped, flip it to show back side
          if (!state.isFlipped) {
            return { ...state, isFlipped: true }
          } else {
            // If card is flipped, update indices and flip back
            const newFrontIndex = (state.backIndex + 4) % certifications.length
            const newBackIndex = (newFrontIndex + 4) % certifications.length
            return {
              frontIndex: newFrontIndex,
              backIndex: newBackIndex,
              isFlipped: false,
            }
          }
        }),
      )
    }, 3000) // Show each side for 3 seconds

    return () => clearInterval(interval)
  }, [isVisible, isPaused])

  return (
    <section id="certifications" ref={sectionRef} className="py-20">
      <div className="container mx-auto px-4">
        <div
          className={`text-center mb-12 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-4 text-balance">Certifications</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
            Professional certifications that validate my expertise in software testing, automation, API validation,
            performance testing, data validation, and delivery fundamentals
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {cardStates.map((cardState, i) => {
            const frontCert = certifications[cardState.frontIndex]
            const backCert = certifications[cardState.backIndex]

            return (
              <div
                key={i}
                className={`h-80 md:h-96 transition-all duration-700 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
                style={{
                  perspective: "1000px",
                  transitionDelay: `${i * 150}ms`,
                }}
                onMouseEnter={() => setIsPaused(true)}
                onMouseLeave={() => setIsPaused(false)}
              >
                <div
                  className="relative w-full h-full transition-transform duration-600"
                  style={{
                    transformStyle: "preserve-3d",
                    transform: cardState.isFlipped ? "rotateY(180deg)" : "rotateY(0deg)",
                  }}
                >
                  {/* Front of card */}
                  <Card
                    className="absolute inset-0 w-full h-full backface-hidden hover:shadow-xl"
                    style={{
                      backfaceVisibility: "hidden",
                    }}
                  >
                    <div className="relative overflow-hidden group p-6 lg:block hidden">
                      <Award className="w-16 h-16 mx-auto text-primary mb-4" />
                    </div>
                    <CardHeader className="lg:pt-0 pt-6">
                      <CardTitle className="text-center text-base">{frontCert.title}</CardTitle>
                      <CardDescription className="text-center text-sm">
                        {frontCert.issuer}
                        <br />
                        {frontCert.date}
                      </CardDescription>
                    </CardHeader>
                    <CardFooter className="justify-center">
                      <Button
                        variant="secondary"
                        size="sm"
                        className="hover:bg-primary hover:text-primary-foreground transition-colors"
                        asChild
                      >
                        <a href={frontCert.verifyLink} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="w-4 h-4 mr-2" />
                          Verify
                        </a>
                      </Button>
                    </CardFooter>
                  </Card>

                  {/* Back of card */}
                  <Card
                    className="absolute inset-0 w-full h-full backface-hidden hover:shadow-xl"
                    style={{
                      backfaceVisibility: "hidden",
                      transform: "rotateY(180deg)",
                    }}
                  >
                    <div className="relative overflow-hidden group p-6 lg:block hidden">
                      <Award className="w-16 h-16 mx-auto text-primary mb-4" />
                    </div>
                    <CardHeader className="lg:pt-0 pt-6">
                      <CardTitle className="text-center text-base">{backCert.title}</CardTitle>
                      <CardDescription className="text-center text-sm">
                        {backCert.issuer}
                        <br />
                        {backCert.date}
                      </CardDescription>
                    </CardHeader>
                    <CardFooter className="justify-center">
                      <Button
                        variant="secondary"
                        size="sm"
                        className="hover:bg-primary hover:text-primary-foreground transition-colors"
                        asChild
                      >
                        <a href={backCert.verifyLink} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="w-4 h-4 mr-2" />
                          Verify
                        </a>
                      </Button>
                    </CardFooter>
                  </Card>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
