"use client"
import Header from "@/components/header"
import HeroSection from "@/components/hero-section"
import AboutSection from "@/components/about-section"
import DevOpsSection from "@/components/devops-section"
import OpenSourceSection from "@/components/opensource-section"
import ProjectsSection from "@/components/projects-section"
import EducationSection from "@/components/education-section"
import ExperienceSection from "@/components/experience-section"
import CertificationsSection from "@/components/certifications-section"
import ContactSection from "@/components/contact-section"
import Footer from "@/components/footer"
import { ThemeProvider } from "@/components/theme-provider"

export default function Portfolio() {
  return (
    <ThemeProvider>
      <div className="min-h-screen text-foreground">
        {/* Background effects */}
        <div className="fixed inset-0 -z-10">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]" />
          <div className="absolute left-0 top-0 h-[500px] w-[500px] rounded-full bg-primary/10 blur-[120px]" />
        </div>

        <Header />
        <main>
          <HeroSection />
          <AboutSection />
          <DevOpsSection />
          <ExperienceSection />
          <OpenSourceSection />
          <EducationSection />
          <ProjectsSection />
          <CertificationsSection />
          <ContactSection />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  )
}
