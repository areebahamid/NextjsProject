"use client"

import type React from "react"
import { useEffect, useRef } from "react"
import { ArrowRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { motion, useInView, useAnimation, useScroll, useTransform } from "framer-motion"
import Navigation from "@/components/navigation"
import ProjectCard from "@/components/project-card"
import SkillBar from "@/components/skill-bar"
import ContactForm from "@/components/contact-form"
import Footer from "@/components/footer"
import HeroScene from "@/components/hero-scene"
import AnimatedBackground from "@/components/animated-background"
import Card3D from "@/components/3d-card"

// Animation variants for sections
const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
}

// Component for animated sections
function AnimatedSection({
  children,
  className = "",
  delay = 0,
}: {
  children: React.ReactNode
  className?: string
  delay?: number
}) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px 0px" })

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={fadeIn}
      transition={{ delay }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

// Letter animation for name
const LetterAnimation = ({
  children,
  index,
}: {
  children: React.ReactNode
  index: number
}) => {
  return (
    <motion.span
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.5,
        delay: index * 0.1,
        ease: [0.2, 0.65, 0.3, 0.9],
      }}
      className="inline-block"
    >
      {children}
    </motion.span>
  )
}

export default function Home() {
  const { scrollY } = useScroll()
  const nameControls = useAnimation()
  const nameRef = useRef(null)
  const nameIsInView = useInView(nameRef, { once: true })

  // Parallax effect for hero section
  const y = useTransform(scrollY, [0, 500], [0, -150])
  const opacity = useTransform(scrollY, [0, 300], [1, 0])

  useEffect(() => {
    if (nameIsInView) {
      nameControls.start("visible")
    }
  }, [nameControls, nameIsInView])

  const nameVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const letterVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
  }

  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <AnimatedBackground />

      {/* Animated background elements */}
      <div className="animated-bg">
        <span></span>
        <span></span>
        <span></span>
      </div>

      <Navigation />

      {/* Hero Section */}
      <section className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative py-12 md:py-24 overflow-hidden min-h-[90vh] flex items-center">
        <HeroScene />
        <motion.div
          style={{ y, opacity }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center justify-center relative z-10 w-full"
        >
          {/* Left Text Section - Moved higher */}
          <motion.div
            className="space-y-6 lg:mt-[-100px]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <div className="highlight-gradient"></div>

            {/* Animated name with letter-by-letter animation */}
            <motion.h1
              ref={nameRef}
              className="font-playfair text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-shimmer relative break-words"
              initial="hidden"
              animate={nameControls}
              variants={nameVariants}
            >
              <div className="overflow-hidden">
                {Array.from("Areeba").map((letter, index) => (
                  <motion.span key={index} variants={letterVariants} className="inline-block">
                    {letter}
                  </motion.span>
                ))}
              </div>
              <div className="overflow-hidden">
                {Array.from("Hamid").map((letter, index) => (
                  <motion.span key={index} variants={letterVariants} className="inline-block">
                    {letter}
                  </motion.span>
                ))}
              </div>
            </motion.h1>

            <motion.p
              className="text-lg md:text-xl lg:text-2xl text-muted-foreground"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.8 }}
            >
              UI/UX Designer crafting beautiful digital experiences that solve real problems.
            </motion.p>

            <motion.div
              className="pt-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 0.8 }}
            >
              <Link
                href="#projects"
                className="inline-flex items-center text-lg font-medium btn-gradient px-6 py-3 rounded-full transition-all shadow-lg hover:shadow-xl"
              >
                View my work
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </motion.div>
          </motion.div>

          {/* Right Image Section */}
          <motion.div
            className="relative flex justify-center"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <div className="absolute -z-10 w-full h-full bg-primary/20 rounded-full blur-3xl animate-pulse-slow"></div>
            <motion.div
              className="transform rotate-3 hover:rotate-0 transition-transform duration-500 animate-glow"
              animate={{
                y: [0, -15, 0],
              }}
              transition={{
                duration: 6,
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "reverse",
                ease: "easeInOut",
              }}
            >
              <Image
                src="/WhatsApp Image 2025-04-01 at 11.18.17_8f98f3e4.jpg?height=600&width=800"
                width={500}
                height={800}
                alt="Areeba Hamid"
                className="rounded-2xl shadow-2xl max-w-full h-auto"
              />
            </motion.div>
          </motion.div>
        </motion.div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 md:py-20 gradient-bg-subtle">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="flex flex-col items-center mb-12">
            <div className="highlight-gradient"></div>
            <h2 className="font-playfair text-3xl md:text-4xl lg:text-5xl font-bold text-center gradient-text">
              About Me
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
            {/* Large Mockup Image with Bouncing Animation */}
            <AnimatedSection delay={0.2}>
              <motion.div
                className="w-full flex justify-center items-center"
                animate={{
                  y: [0, -20, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Number.POSITIVE_INFINITY,
                  repeatType: "reverse",
                  ease: "easeInOut",
                }}
              >
                <Image
                  src="/Screenshot-iPhone15 Pro Max.png"
                  width={500}
                  height={1000}
                  alt="App Mockup"
                  className="shadow-none drop-shadow-lg max-w-full h-auto"
                  priority
                />
              </motion.div>
            </AnimatedSection>

            {/* Text Section with Modern Glass Effect */}
            <AnimatedSection delay={0.4}>
              <div className="relative">
                <div className="relative z-10 p-6 md:p-8 glass-card rounded-xl">
                  <p className="text-base md:text-lg mb-4">
                    With over 3 years of experience in UI/UX design, I specialize in creating intuitive and visually
                    appealing digital experiences. My expertise lies in Figma, Framer, Canva, Webflow, and Adobe
                    InDesign.
                  </p>
                  <p className="text-base md:text-lg mb-4">
                    I'm passionate about auto-layout, components, and interactive prototypes that bring designs to life.
                    My approach combines user flows, usability principles, and data-driven design decisions.
                  </p>
                  <p className="text-base md:text-lg mb-6">
                    When I'm not designing, you can find me exploring new design trends, attending UX workshops, or
                    sketching new interface ideas.
                  </p>
                  <div className="pt-4">
                    <Link
                      href="/resume"
                      className="inline-flex items-center text-base md:text-lg font-medium btn-gradient px-4 md:px-6 py-2 md:py-3 rounded-full transition-all shadow-lg hover:shadow-xl"
                    >
                      View my resume
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-16 md:py-20 mesh-bg">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="flex flex-col items-center mb-12">
            <div className="highlight-gradient"></div>
            <h2 className="font-playfair text-3xl md:text-4xl lg:text-5xl font-bold text-center gradient-text">
              My Skills
            </h2>
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-3xl mx-auto">
            <AnimatedSection delay={0.1}>
              <SkillBar skill="UI/UX Design" percentage={100} />
            </AnimatedSection>
            <AnimatedSection delay={0.2}>
              <SkillBar skill="Figma" percentage={100} />
            </AnimatedSection>
            <AnimatedSection delay={0.3}>
              <SkillBar skill="Framer" percentage={100} />
            </AnimatedSection>
            <AnimatedSection delay={0.4}>
              <SkillBar skill="Webflow" percentage={100} />
            </AnimatedSection>
            <AnimatedSection delay={0.5}>
              <SkillBar skill="Lottie Design" percentage={100} />
            </AnimatedSection>
            <AnimatedSection delay={0.6}>
              <SkillBar skill="User Research" percentage={100} />
            </AnimatedSection>
            <AnimatedSection delay={0.7}>
              <SkillBar skill="Prototyping" percentage={100} />
            </AnimatedSection>
            <AnimatedSection delay={0.8}>
              <SkillBar skill="Adobe InDesign" percentage={85} />
            </AnimatedSection>
            <AnimatedSection delay={0.9}>
              <SkillBar skill="Interaction Design" percentage={100} />
            </AnimatedSection>
            <AnimatedSection delay={1.0}>
              <SkillBar skill="Visual Design" percentage={100} />
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section id="projects" className="py-16 md:py-20 gradient-bg-subtle">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="flex flex-col items-center mb-12">
            <div className="highlight-gradient"></div>
            <h2 className="font-playfair text-3xl md:text-4xl lg:text-5xl font-bold text-center gradient-text">
              Featured Projects
            </h2>
          </AnimatedSection>
          <div className="grid grid-cols-1 gap-16 md:gap-20">
            <AnimatedSection delay={0.2}>
              <ProjectCard
                title="Prepium"
                description="I'm currently the lead designer of Prepium, a modern e-learning website with a clean design and intuitive user interface."
                imageSrc="/Screenshot-MacBook Pro (16inch).png?height=600&width=800"
                projectUrl="https://www.prepium.org"
                index={1}
              />
            </AnimatedSection>
            <AnimatedSection delay={0.4}>
              <ProjectCard
                title="DotLabs Website"
                description="A user-friendly website for a software company, showcasing their services and projects."
                imageSrc="/Screenshot-MacBook Pro 2 (16inch).png?height=600&width=800"
                projectUrl="https://www.dotlabs.online"
                index={2}
                reversed
              />
            </AnimatedSection>
            <AnimatedSection delay={0.6}>
            <ProjectCard
                title="Ecommerce App"
                description="A full-featured online shopping platform with product listings, cart functionality, secure checkout, and user account management."
                imageSrc="/mockuperrands.png?height=400&width=800"
                index={3}
              />
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-16 md:py-20 mesh-bg">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="flex flex-col items-center mb-12">
            <div className="highlight-gradient"></div>
            <h2 className="font-playfair text-3xl md:text-4xl lg:text-5xl font-bold text-center gradient-text">
              Testimonials
            </h2>
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            <AnimatedSection delay={0.2}>
              <Card3D className="glass-card p-6 md:p-8 rounded-2xl shadow-lg">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full gradient-bg-blue flex items-center justify-center mr-4">
                    <span className="text-white font-bold">JD</span>
                  </div>
                  <div>
                    <h4 className="font-bold">Abdullah amir</h4>
                    <p className="text-sm text-muted-foreground">Product Manager</p>
                  </div>
                </div>
                <p className="italic">
                  "Working with Areeba was a game-changer for our product. Her attention to detail and user-centered
                  approach resulted in a significant improvement in our user engagement metrics."
                </p>
              </Card3D>
            </AnimatedSection>
            <AnimatedSection delay={0.4}>
              <Card3D className="glass-card p-6 md:p-8 rounded-2xl shadow-lg">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full gradient-bg-teal flex items-center justify-center mr-4">
                    <span className="text-white font-bold">JS</span>
                  </div>
                  <div>
                    <h4 className="font-bold">Abdul Majid</h4>
                    <p className="text-sm text-muted-foreground">CEO, Dotlabsinc</p>
                  </div>
                </div>
                <p className="italic">
                  "Areeba's designs are not only beautiful but also highly functional. She has a unique ability to
                  translate complex requirements into intuitive interfaces that users love."
                </p>
              </Card3D>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 md:py-20 gradient-bg-subtle">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="flex flex-col items-center mb-6">
            <div className="highlight-gradient"></div>
            <h2 className="font-playfair text-3xl md:text-4xl lg:text-5xl font-bold text-center gradient-text">
              Get In Touch
            </h2>
          </AnimatedSection>
          <p className="text-center text-base md:text-lg mb-8 md:mb-12 max-w-2xl mx-auto">
            I'm always open to discussing new projects, creative ideas or opportunities to be part of your vision.
          </p>
          <div className="max-w-2xl mx-auto">
            <AnimatedSection delay={0.2}>
              <Card3D className="glass-card p-6 md:p-8 rounded-2xl shadow-lg" disableEffect={true}>
                <ContactForm />
              </Card3D>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

