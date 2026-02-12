"use client"

import { useRef, useEffect, useState } from "react"
import { Canvas } from "@react-three/fiber"
import { OrbitControls, PerspectiveCamera } from "@react-three/drei"
import { Button } from "@/components/ui/button"
import DragonInfinity from "./logos-spiral"
import { useIsMobile } from "@/hooks/use-mobile"

export default function HeroSection() {
  const controlsRef = useRef<any>(null)
  let resetTimeout: NodeJS.Timeout
  const [currentTitleIndex, setCurrentTitleIndex] = useState(0)
  const [displayedText, setDisplayedText] = useState("")
  const [isTyping, setIsTyping] = useState(true)
  const [charIndex, setCharIndex] = useState(0)
  const [scramblingChar, setScramblingChar] = useState("")
  const [scrambleSteps, setScrambleSteps] = useState(0)
  const scrambleIntervalRef = useRef<NodeJS.Timeout | null>(null)
  const isMobile = useIsMobile()

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })
  }

  // Animated titles that cycle through
  const titles = [
    "Ravindu Haputhanthri",
    "a Software Engineer - Quality Assurance",
    "an ISTQB Certified Tester",
    "a DevOps Enthusiast",
  ]

  // Characters for code encrypting effect
  const codeChars =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+-=[]{}|;:,.<>?"

  // Cleanup interval on unmount
  useEffect(() => {
    return () => {
      if (scrambleIntervalRef.current) {
        clearInterval(scrambleIntervalRef.current)
      }
    }
  }, [])

  // Code encrypting typewriter effect
  useEffect(() => {
    const currentTitle = titles[currentTitleIndex]

    if (isTyping) {
      if (charIndex < currentTitle.length) {
        if (!scrambleIntervalRef.current) {
          scrambleIntervalRef.current = setInterval(() => {
            setScrambleSteps((prev) => {
              if (prev < 10) {
                const randomChar = codeChars[Math.floor(Math.random() * codeChars.length)]
                setScramblingChar(randomChar)
                setDisplayedText(currentTitle.slice(0, charIndex) + randomChar)
                return prev + 1
              } else {
                clearInterval(scrambleIntervalRef.current!)
                scrambleIntervalRef.current = null
                setDisplayedText(currentTitle.slice(0, charIndex + 1))
                setCharIndex((prevCharIndex) => prevCharIndex + 1)
                return 0
              }
            })
          }, 20)
        }
      } else {
        // Finished typing, wait before starting to delete
        const timeout = setTimeout(() => {
          setIsTyping(false)
        }, 2000) // Pause before deleting
        return () => clearTimeout(timeout)
      }
    } else {
      // Deleting effect
      if (charIndex > 0) {
        const timeout = setTimeout(() => {
          setDisplayedText(currentTitle.slice(0, charIndex - 1))
          setCharIndex(charIndex - 1)
        }, 50) // Deleting speed (faster than typing)
        return () => clearTimeout(timeout)
      } else {
        // Finished deleting, move to next title
        const timeout = setTimeout(() => {
          setCurrentTitleIndex((prev) => (prev + 1) % titles.length)
          setIsTyping(true)
        }, 500) // Brief pause before next title
        return () => clearTimeout(timeout)
      }
    }
  }, [charIndex, isTyping, currentTitleIndex, titles, codeChars])

  // Auto-reset to default position after user interaction
  useEffect(() => {
    const handleInteractionEnd = () => {
      // Clear any existing timeout
      if (resetTimeout) clearTimeout(resetTimeout)

      // Wait 3 seconds after user stops interacting, then smoothly reset
      resetTimeout = setTimeout(() => {
        if (controlsRef.current) {
          controlsRef.current.reset()
        }
      }, 3000)
    }

    return () => {
      if (resetTimeout) clearTimeout(resetTimeout)
    }
  }, [])

  return (
    <section id="home" className="min-h-screen flex items-center pt-20 relative z-40">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="h-[400px] sm:h-[500px] lg:h-[600px] relative">
            <Canvas>
              <PerspectiveCamera makeDefault position={[0, 0, 8]} />
              <ambientLight intensity={0.5} />
              <pointLight position={[10, 10, 10]} intensity={1} />
              <pointLight position={[-10, -10, -10]} intensity={0.5} color="#ff6b6b" />
              <DragonInfinity isDark={true} />
              <OrbitControls
                ref={controlsRef}
                enableZoom={false}
                enablePan={false}
                enableRotate={!isMobile}
                minPolarAngle={Math.PI / 3}
                maxPolarAngle={Math.PI / 1.5}
                enableDamping={true}
                dampingFactor={0.05}
                autoRotate={false}
                onEnd={() => {
                  // Trigger reset after user stops interacting
                  if (resetTimeout) clearTimeout(resetTimeout)
                  resetTimeout = setTimeout(() => {
                    if (controlsRef.current) {
                      // Smoothly animate back to default position
                      controlsRef.current.reset()
                    }
                  }, 3000)
                }}
              />
            </Canvas>
          </div>

          {/* Content */}
          <div className="space-y-6">
            <h1 className="text-4xl lg:text-6xl font-bold leading-tight text-balance min-h-[90px] mb-4">
              Hi, I'm{" "}
              <span className="bg-linear-to-r from-primary via-(--color-devops-flow) to-accent bg-clip-text text-transparent">
                {displayedText}
                <span className="animate-pulse text-primary">|</span>
              </span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed text-pretty">
              ISTQB-CTFL certified Software Quality Assurance Engineer with over 1.5 years of industry experience delivering quality assurance for enterprise cloud-based systems in the Aviation Maintenance and Supply Chain domain. Alongside my full-time role, I provide freelance QA services to international and local clients, supporting projects across diverse industries. My expertise spans manual and exploratory testing, test automation, API validation, performance testing, and release and upgrade validation to ensure stable, reliable, and high-quality software delivery.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button
                size="lg"
                onClick={() => scrollToSection("projects")}
                className="bg-primary text-primary-foreground hover:bg-primary/90"
              >
                View My Work
              </Button>
              <a href="https://www.linkedin.com/in/ravindu-haputhanthri-307b23213/" target="_blank" rel="noopener noreferrer">
                <Button size="lg" variant="outline" className="hover:text-(--color-devops-deploy)">
                  Get In Touch
                </Button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
