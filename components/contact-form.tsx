"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/hooks/use-toast"

export default function ContactForm() {
  const { toast } = useToast()
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)

      // Show toast notification
      toast({
        title: "Message sent!",
        description: "Thank you for your message. I'll get back to you soon.",
      })

      // Show alert
      alert("Message sent successfully! Thank you for your message.")

      // Reset form
      const form = e.target as HTMLFormElement
      form.reset()
    }, 1500)
  }

  // Add this error handling code for demonstration
  // In a real implementation, this would be in a try/catch block
  const handleError = () => {
    setIsSubmitting(false)
    toast({
      title: "Error",
      description: "There was an error sending your message. Please try again.",
      variant: "destructive",
    })
    alert("Error: There was a problem sending your message. Please try again later.")
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label htmlFor="name" className="text-sm font-medium">
            Name
          </label>
          <Input
            id="name"
            name="name"
            placeholder="Your name"
            required
            className="bg-white/70 dark:bg-slate-800/70 backdrop-blur-sm border-primary/20 focus:border-primary"
          />
        </div>
        <div className="space-y-2">
          <label htmlFor="email" className="text-sm font-medium">
            Email
          </label>
          <Input
            id="email"
            name="email"
            type="email"
            placeholder="Your email"
            required
            className="bg-white/70 dark:bg-slate-800/70 backdrop-blur-sm border-primary/20 focus:border-primary"
          />
        </div>
      </div>
      <div className="space-y-2">
        <label htmlFor="subject" className="text-sm font-medium">
          Subject
        </label>
        <Input
          id="subject"
          name="subject"
          placeholder="Subject"
          required
          className="bg-white/70 dark:bg-slate-800/70 backdrop-blur-sm border-primary/20 focus:border-primary"
        />
      </div>
      <div className="space-y-2">
        <label htmlFor="message" className="text-sm font-medium">
          Message
        </label>
        <Textarea
          id="message"
          name="message"
          placeholder="Your message"
          rows={6}
          required
          className="bg-white/70 dark:bg-slate-800/70 backdrop-blur-sm border-primary/20 focus:border-primary"
        />
      </div>
      <Button type="submit" className="w-full btn-gradient" disabled={isSubmitting}>
        {isSubmitting ? "Sending..." : "Send Message"}
      </Button>
    </form>
  )
}

