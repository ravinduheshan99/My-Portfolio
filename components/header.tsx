"use client"

import { useState, useEffect } from "react"
import { ExternalLink, Menu, X } from "lucide-react"

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const heroSection = document.getElementById("home")
      if (heroSection) {
        const targetElement = heroSection.querySelector(".space-y-6")
        if (targetElement) {
          const threshold = 100 // Adjust this value as needed
          const targetTop = targetElement.getBoundingClientRect().top + window.scrollY - threshold
          const scrollPosition = window.scrollY

          // Activate navbar when reaching the `space-y-6` area with threshold
          setScrolled(scrollPosition >= targetTop)
        }
      }
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-background/15 backdrop-blur-lg shadow-sm border-b border-border" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <button
          onClick={() => scrollToSection("home")}
          className="w-10 h-10 rounded-full relative"
          style={{
            perspective: "1000px",
          }}
        >
          <div
            className="relative w-full h-full transition-transform duration-600"
            style={{
              transformStyle: "preserve-3d",
              transform: scrolled ? "rotateY(180deg)" : "rotateY(0deg)",
            }}
          >
            {/* Front - Logo */}
            <div
              className="absolute inset-0 w-full h-full rounded-full p-1 bg-gradient-to-r from-primary to-accent"
              style={{
                backfaceVisibility: "hidden",
              }}
            >
              <img src="/logo.png" alt="YK Logo" className="w-full h-full rounded-full" />
            </div>

            {/* Back - Photo */}
            <div
              className="absolute inset-0 w-full h-full rounded-full p-1 bg-gradient-to-r from-accent to-primary"
              style={{
                backfaceVisibility: "hidden",
                transform: "rotateY(180deg)",
              }}
            >
              <img src="/me.jpg" alt="Your Photo" className="w-full h-full rounded-full object-cover" />
            </div>
          </div>
        </button>

        <nav className="hidden md:flex items-center gap-8">
          <button
            onClick={() => scrollToSection("about")}
            className="text-sm font-medium hover:text-[var(--color-devops-qa)] transition-colors"
          >
            About
          </button>
          <button
            onClick={() => scrollToSection("opensource")}
            className="text-sm font-medium hover:text-[var(--color-devops-flow)] transition-colors"
          >
            Freelance Journey
          </button>
          <button
            onClick={() => scrollToSection("projects")}
            className="text-sm font-medium hover:text-accent transition-colors"
          >
            Projects
          </button>
          <button
            onClick={() => scrollToSection("certifications")}
            className="text-sm font-medium hover:text-[var(--color-chart-3)] transition-colors"
          >
            Certifications
          </button>
          <button
            onClick={() => scrollToSection("contact")}
            className="text-sm font-medium hover:text-primary transition-colors"
          >
            Contact
          </button>
          <a
            href="https://www.upwork.com/freelancers/~01b219cb54a8fcc78f?mp_source=share"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium hover:text-[var(--color-chart-2)] transition-colors flex items-center gap-1"
          >
            Upwork
            <ExternalLink className="w-3 h-3" />
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 rounded-md hover:bg-accent transition-colors"
          aria-label="Toggle mobile menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>

        {/* Mobile Menu */}
        <div
          className={`md:hidden absolute top-full left-0 right-0 bg-background/95 backdrop-blur-lg border-b border-border shadow-lg transition-all duration-300 ease-out ${
            mobileMenuOpen
              ? 'opacity-100 translate-y-0 scale-100'
              : 'opacity-0 -translate-y-2 scale-95 pointer-events-none'
          }`}
        >
          <nav className="container mx-auto px-4 py-4 flex flex-col gap-4">
            <button
              onClick={() => {
                scrollToSection("about")
                setMobileMenuOpen(false)
              }}
              className="text-sm font-medium hover:text-[var(--color-devops-qa)] transition-colors text-left"
            >
              About
            </button>
            <button
              onClick={() => {
                scrollToSection("opensource")
                setMobileMenuOpen(false)
              }}
              className="text-sm font-medium hover:text-[var(--color-devops-flow)] transition-colors text-left"
            >
              Freelance Journey
            </button>
            <button
              onClick={() => {
                scrollToSection("projects")
                setMobileMenuOpen(false)
              }}
              className="text-sm font-medium hover:text-accent transition-colors text-left"
            >
              Projects
            </button>
            <button
              onClick={() => {
                scrollToSection("certifications")
                setMobileMenuOpen(false)
              }}
              className="text-sm font-medium hover:text-[var(--color-chart-3)] transition-colors text-left"
            >
              Certifications
            </button>
            <button
              onClick={() => {
                scrollToSection("contact")
                setMobileMenuOpen(false)
              }}
              className="text-sm font-medium hover:text-primary transition-colors text-left"
            >
              Contact
            </button>
            <a
              href="https://www.upwork.com/freelancers/~01b219cb54a8fcc78f?mp_source=share"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium hover:text-[var(--color-chart-2)] transition-colors flex items-center gap-1"
              onClick={() => setMobileMenuOpen(false)}
            >
              Upwork
              <ExternalLink className="w-3 h-3" />
            </a>
          </nav>
        </div>
      </div>
    </header>
  )
}
