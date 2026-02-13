"use client"

import { Github, Linkedin, Download } from "lucide-react"
import { SiStackoverflow, SiUpwork } from "react-icons/si"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"

const socials = [
  {
    icon: Github,
    label: "GitHub",
    href: "https://github.com/ravinduheshan99",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/ravindu-haputhanthri-307b23213/",
  },
  {
    icon: SiStackoverflow,
    label: "Stack Overflow",
    href: "https://stackoverflow.com/users/31926856/ravindu-haputhanthri",
  },
  {
    icon: SiUpwork,
    label: "Upwork",
    href: "https://www.upwork.com/freelancers/~01b219cb54a8fcc78f",
  },
]

const cvDownloads = [
  { label: "QA Engineer CV", href: "CV/Ravindu Haputhanthri - QA Engineer.pdf" },
]

export default function ContactSection() {
  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-balance bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              Contact Me
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              I provide freelance Quality Assurance services including manual testing, automation framework
              development, API validation, performance testing, and release verification. If you need reliable QA
              support for your web product, feel free to reach out.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 items-start">
            {/* Contact Form */}
            <Card className="border-2">
              <CardHeader>
                <CardTitle className="text-xl">Send a Message</CardTitle>
              </CardHeader>
              <CardContent>
                <form
                  className="space-y-5"
                  action="https://formspree.io/f/xbdagagr"
                  method="POST"
                >
                  <input
                    type="hidden"
                    name="_subject"
                    value="New message from Ravindu Portfolio"
                  />

                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name</Label>
                    <Input id="name" name="name" required />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address</Label>
                    <Input id="email" name="email" type="email" required />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject</Label>
                    <Input id="subject" name="subject" required />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      name="message"
                      className="min-h-[140px]"
                      required
                    />
                  </div>

                  <Button type="submit" size="lg" className="w-full">
                    Submit
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* CV + Social Links */}
            <div className="space-y-8">
              <Card className="border-2">
                <CardHeader>
                  <CardTitle className="text-xl">Download CV</CardTitle>
                </CardHeader>
                <CardContent>
                  {cvDownloads.map((cv, index) => (
                    <Button
                      key={index}
                      variant="outline"
                      size="lg"
                      className="hover:scale-105 transition-all duration-300 bg-transparent border-2"
                      asChild
                    >
                      <a href={cv.href} download>
                        <Download className="w-6 h-6 mr-2" />
                        {cv.label}
                      </a>
                    </Button>
                  ))}
                </CardContent>
              </Card>

              <Card className="border-2">
                <CardHeader>
                  <CardTitle className="text-xl">Connect</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-4">
                    {socials.map((social, index) => (
                      <Button
                        key={index}
                        variant="outline"
                        size="lg"
                        className="hover:scale-110 transition-all duration-300 bg-transparent border-2 h-12 w-12 md:h-16 md:w-16"
                        asChild
                      >
                        <a
                          href={social.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={social.label}
                        >
                          <social.icon className="size-6 md:size-8" />
                        </a>
                      </Button>
                    ))}
                  </div>

                  <div className="mt-6 text-sm text-muted-foreground">
                    <p>
                      <span className="font-medium text-foreground">
                        Availability:
                      </span>{" "}
                      Open for freelance QA projects and automation consulting.
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
