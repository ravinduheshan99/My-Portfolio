"use client"

import { Github, Linkedin, Mail, Download } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"

const socials = [
  { icon: Github, label: "GitHub", href: "https://github.com/ravinduheshan99" },
  { icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/ravindu-haputhanthri/" },
  { icon: Mail, label: "Email", href: "mailto:ravinduheshan99@gmail.com" },
]

const cvDownloads = [{ label: "QA Engineer CV", href: "CV/Ravindu Haputhanthri - QA Engineer.pdf" }]

export default function ContactSection() {
  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-balance bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent relative">
              Contact Me
            </h2>
            <p className="text-xl text-muted-foreground text-pretty leading-relaxed max-w-3xl mx-auto">
              If you need reliable QA support for a web product, I can help with manual and exploratory testing, test
              automation, API validation, performance checks, and release readiness. I work with both local and
              international clients and keep communication clear, practical, and outcome-focused.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 items-start">
            {/* Left: Contact form */}
            <Card className="border-2">
              <CardHeader>
                <CardTitle className="text-xl">Send a message</CardTitle>
              </CardHeader>
              <CardContent>
                <form
                  className="space-y-5"
                  action="https://formspree.io/f/yourFormId"
                  method="POST"
                >
                  <div className="space-y-2">
                    <Label htmlFor="name">Full name</Label>
                    <Input id="name" name="name" placeholder="Your name" required />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email address</Label>
                    <Input id="email" name="email" type="email" placeholder="you@example.com" required />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject</Label>
                    <Input id="subject" name="subject" placeholder="Project inquiry" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Tell me about the product, timelines, and what you need tested."
                      className="min-h-[140px]"
                      required
                    />
                  </div>

                  <Button type="submit" size="lg" className="w-full">
                    Submit
                  </Button>
                </form>

                <p className="text-xs text-muted-foreground mt-4">
                  Tip: Replace <span className="font-medium">yourFormId</span> with your Formspree form ID (or swap the
                  action URL for your preferred form backend).
                </p>
              </CardContent>
            </Card>

            {/* Right: CV + socials */}
            <div className="space-y-8">
              <Card className="border-2">
                <CardHeader>
                  <CardTitle className="text-xl">Download CV</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-4">
                    {cvDownloads.map((cv, index) => (
                      <Button
                        key={index}
                        variant="outline"
                        size="lg"
                        className="hover:scale-110 transition-all duration-300 bg-transparent border-2 hover:text-[var(--color-devops-qa)] hover:bg-[var(--color-devops-qa)]/10"
                        asChild
                      >
                        <a href={cv.href} download aria-label={`Download ${cv.label}`}>
                          <Download className="w-6 h-6 mr-2" />
                          {cv.label}
                        </a>
                      </Button>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="border-2">
                <CardHeader>
                  <CardTitle className="text-xl">Connect</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap justify-start gap-4">
                    {socials.map((social, index) => {
                      const colors = [
                        "hover:text-[var(--color-devops-qa)] hover:bg-[var(--color-devops-qa)]/10",
                        "hover:text-[var(--color-devops-deploy)] hover:bg-[var(--color-devops-deploy)]/10",
                        "hover:text-[var(--color-devops-flow)] hover:bg-[var(--color-devops-flow)]/10",
                      ]
                      return (
                        <Button
                          key={index}
                          variant="outline"
                          size="lg"
                          className={`hover:scale-110 transition-all duration-300 bg-transparent border-2 h-10 w-10 md:h-20 md:w-20 ${
                            colors[index] || "hover:text-accent hover:bg-accent/10"
                          }`}
                          asChild
                        >
                          <a href={social.href} target="_blank" rel="noopener noreferrer" aria-label={social.label}>
                            <social.icon className="size-7 md:size-12" />
                          </a>
                        </Button>
                      )
                    })}
                  </div>

                  <div className="mt-6 space-y-2 text-sm text-muted-foreground">
                    <p>
                      <span className="font-medium text-foreground">Email:</span>{" "}
                      <a className="underline underline-offset-4" href="mailto:ravinduheshan99@gmail.com">
                        ravinduheshan99@gmail.com
                      </a>
                    </p>
                    <p>
                      <span className="font-medium text-foreground">Availability:</span> Freelance QA support for web
                      apps, API testing, and automation work.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
