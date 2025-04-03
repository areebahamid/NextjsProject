"use client"

import { Download } from "lucide-react"
import { motion } from "framer-motion"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import AnimatedBackground from "@/components/animated-background"
import Card3D from "@/components/3d-card"

// Animation variants
const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
}

export default function ResumePage() {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <AnimatedBackground />
      <Navigation />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
        <motion.div
          className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12"
          initial="hidden"
          animate="visible"
          variants={fadeIn}
        >
          <div>
            <div className="highlight-gradient"></div>
            <h1 className="font-playfair text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-0 gradient-text">
              Resume
            </h1>
          </div>
          <Button className="btn-gradient shadow-lg hover:shadow-xl transition-all mt-4 md:mt-0">
            <a href="/AreebaHamid Resume.pdf" download className="inline-flex items-center">
              <Download className="mr-2 h-4 w-4" />
              Download PDF
            </a>
          </Button>
        </motion.div>

        <motion.div initial="hidden" animate="visible" variants={fadeIn} transition={{ delay: 0.2 }}>
          <Card3D className="glass-card p-6 md:p-8 rounded-2xl shadow-lg mb-12" disableEffect={true}>
            <div className="space-y-8 md:space-y-12 max-w-4xl">
              {/* Profile Summary */}
              <section>
                <h2 className="text-xl md:text-2xl font-bold mb-4 gradient-text">Profile</h2>
                <p className="text-base md:text-lg">
                  UI/UX Designer with 3+ years of experience creating intuitive and visually appealing digital
                  experiences. Proficient in Figma, Framer, Webflow, Lottie Design, Adobe InDesign, and Adobe Photoshop.
                  Skilled in auto-layout, components, interactive prototypes, user flows, usability principles, and
                  data-driven design decisions.
                </p>
              </section>

              {/* Experience */}
              <section>
                <h2 className="text-xl md:text-2xl font-bold mb-6 gradient-text">Experience</h2>
                <div className="space-y-8">
                  <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-4">
                    <div>
                      <p className="text-muted-foreground">2022 - Present</p>
                    </div>
                    <div>
                      <h3 className="text-lg md:text-xl font-bold gradient-text">Lead UI/UX Designer</h3>
                      <p className="text-primary mb-2">DotLabs inc.</p>
                      <ul className="list-disc pl-5 space-y-2">
                        <li>
                          Led the redesign of a major e-commerce platform, resulting in a 35% increase in conversion
                          rates
                        </li>
                        <li>
                          Created comprehensive design systems for 50+ clients, improving design consistency and
                          development efficiency
                        </li>
                        <li>Conducted user research and usability testing to inform design decisions</li>
                        <li>Mentored junior designers and provided art direction for client projects</li>
                      </ul>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-4">
                    <div>
                      <p className="text-muted-foreground">2020 - 2022</p>
                    </div>
                    <div>
                      <h3 className="text-lg md:text-xl font-bold gradient-text">UI/UX Designer</h3>
                      <p className="text-primary mb-2">Freelancing</p>
                      <ul className="list-disc pl-5 space-y-2">
                        <li>Designed user interfaces for web and mobile applications</li>
                        <li>Created wireframes, prototypes, and high-fidelity mockups</li>
                        <li>Collaborated with product managers and developers to implement designs</li>
                        <li>Participated in agile development processes and sprint planning</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </section>

              {/* Education */}
              <section>
                <h2 className="text-xl md:text-2xl font-bold mb-6 gradient-text">Education</h2>
                <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-4">
                  <div>
                    <p className="text-muted-foreground">2022-2026</p>
                  </div>
                  <div>
                    <h3 className="text-lg md:text-xl font-bold gradient-text">
                      Bachelor of Science in COMPUTER SCIENCE
                    </h3>
                    <p className="text-primary">Comsats University, Lahore</p>
                    <p className="text-primary">CGPA: 3.34</p>
                  </div>
                </div>
              </section>
            </div>
          </Card3D>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          <motion.div initial="hidden" animate="visible" variants={fadeIn} transition={{ delay: 0.4 }}>
            <Card3D className="glass-card p-6 md:p-8 rounded-2xl shadow-lg h-full" disableEffect={true}>
              <section>
                <h2 className="text-xl md:text-2xl font-bold mb-6 gradient-text">Skills</h2>
                <div className="grid grid-cols-1 gap-y-4">
                  <div>
                    <h3 className="font-bold mb-2 text-accent">Design</h3>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>UI/UX Design</li>
                      <li>Interaction Design</li>
                      <li>Visual Design</li>
                      <li>Wireframing & Prototyping</li>
                      <li>Design Systems</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-bold mb-2 text-accent">Tools</h3>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>Figma</li>
                      <li>Lottie Design</li>
                      <li>Framer</li>
                      <li>Webflow</li>
                      <li>Adobe InDesign</li>
                      <li>Adobe Photoshop</li>
                    </ul>
                  </div>
                </div>
              </section>
            </Card3D>
          </motion.div>

          <motion.div initial="hidden" animate="visible" variants={fadeIn} transition={{ delay: 0.6 }}>
            <Card3D className="glass-card p-6 md:p-8 rounded-2xl shadow-lg h-full" disableEffect={true}>
              <section>
                <h2 className="text-xl md:text-2xl font-bold mb-6 gradient-text">Certifications</h2>
                <ul className="space-y-4">
                  <li>
                    <h3 className="font-bold gradient-text">Google UX Design Professional Certificate</h3>
                    <p className="text-muted-foreground">Google, 2023</p>
                  </li>
                  <li>
                    <h3 className="font-bold gradient-text">Advanced Figma for UX Design</h3>
                    <p className="text-muted-foreground">Figma, 2024</p>
                  </li>
                </ul>

                <h2 className="text-xl md:text-2xl font-bold my-6 gradient-text">Languages</h2>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <h3 className="font-bold">Urdu</h3>
                    <p className="text-muted-foreground">Native</p>
                  </div>
                  <div>
                    <h3 className="font-bold">English</h3>
                    <p className="text-muted-foreground">Fluent/Expert</p>
                  </div>
                </div>
              </section>
            </Card3D>
          </motion.div>
        </div>
      </div>

      <Footer />
    </div>
  )
}

