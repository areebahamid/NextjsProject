"use client"

import type React from "react"

import { useRef, useState } from "react"
import emailjs from "@emailjs/browser"
import { motion } from "framer-motion"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import AnimatedBackground from "@/components/animated-background"
import Card3D from "@/components/3d-card"

export default function ContactPage() {
  const formRef = useRef<HTMLFormElement>(null)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [message, setMessage] = useState<string | null>(null)
  const [messageType, setMessageType] = useState<"success" | "error" | null>(null)

  const sendEmail = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const serviceId = "service_cxq6jko"
      const templateId = "template_bwlrsbb"
      const publicKey = "mkDNFNGhQCZDfnYUO"

      if (!formRef.current) return

      await emailjs.sendForm(serviceId, templateId, formRef.current, publicKey)

      setMessage("✅ Message sent successfully!")
      setMessageType("success")
      formRef.current.reset()
    } catch (error) {
      console.error("❌ Email sending error:", error)
      setMessage("⚠️ Something went wrong. Please try again.")
      setMessageType("error")
    }

    setIsSubmitting(false)
  }

  return (
    <div className="min-h-screen bg-background">
      <AnimatedBackground />
      <Navigation />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="max-w-lg mx-auto"
        >
          <Card3D className="glass-card p-8 rounded-3xl shadow-xl" disableEffect={true}>
            <div className="flex flex-col items-center mb-6">
              <div className="highlight-gradient"></div>
              <h2 className="text-center text-3xl font-bold gradient-text mb-4">Get in Touch</h2>
            </div>
            <p className="text-center text-gray-600 dark:text-gray-300 mb-6">
              I'd love to hear from you! Send me a message below.
            </p>

            {message && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className={`text-center text-white p-3 rounded-md mb-4 ${
                  messageType === "success"
                    ? "bg-gradient-to-r from-green-500 to-emerald-500"
                    : "bg-gradient-to-r from-red-500 to-pink-500"
                }`}
              >
                {message}
              </motion.div>
            )}

            <form ref={formRef} onSubmit={sendEmail} className="space-y-4">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  required
                  className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary transition duration-300 bg-white/70 dark:bg-slate-800/70 backdrop-blur-sm"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  required
                  className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary transition duration-300 bg-white/70 dark:bg-slate-800/70 backdrop-blur-sm"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium">
                  Message
                </label>
                <textarea
                  name="message"
                  placeholder="Your Message"
                  required
                  className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary transition duration-300 bg-white/70 dark:bg-slate-800/70 backdrop-blur-sm"
                  rows={5}
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full btn-gradient py-3 rounded-lg transition-all shadow-lg hover:shadow-xl"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </button>
            </form>
          </Card3D>
        </motion.div>
      </div>

      <Footer />
    </div>
  )
}

