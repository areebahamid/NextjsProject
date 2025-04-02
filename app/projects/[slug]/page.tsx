import { ArrowLeft } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import Card3D from "@/components/3d-card"
import AnimatedBackground from "@/components/animated-background"

// This would typically come from a CMS or database
const projects = [
  {
    slug: "ecommerce-website",
    title: "E-commerce Website",
    client: "Fashion Retailer",
    year: "2023",
    role: "Lead UI/UX Designer",
    description: "A modern e-commerce website with a clean design and intuitive user interface.",
    challenge:
      "The client needed a complete redesign of their outdated e-commerce platform to improve user engagement and increase conversion rates.",
    solution:
      "I created a modern, mobile-first design with intuitive navigation, streamlined checkout process, and visually appealing product displays.",
    process: [
      "User Research and Competitive Analysis",
      "Information Architecture and User Flows",
      "Wireframing and Prototyping",
      "Visual Design and UI Components",
      "Usability Testing and Iteration",
    ],
    results: "The redesigned website led to a 35% increase in conversion rate and a 28% decrease in cart abandonment.",
    images: [
      "/placeholder.svg?height=800&width=1200",
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
    ],
  },
  {
    slug: "mobile-banking-app",
    title: "Mobile Banking App",
    client: "FinTech Startup",
    year: "2022",
    role: "UI/UX Designer",
    description:
      "A user-friendly mobile banking app with features like account management, transfers, and bill payments.",
    challenge:
      "The client wanted to create a mobile banking app that would stand out in a crowded market by offering superior user experience and innovative features.",
    solution:
      "I designed a clean, intuitive interface with a focus on security, ease of use, and quick access to common banking tasks.",
    process: [
      "User Interviews and Persona Development",
      "Feature Prioritization",
      "Low and High-Fidelity Wireframes",
      "Interactive Prototyping",
      "User Testing and Refinement",
    ],
    results:
      "The app received a 4.8/5 rating on app stores and was featured as 'App of the Day' on the Apple App Store.",
    images: [
      "/placeholder.svg?height=800&width=1200",
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
    ],
  },
  {
    slug: "fitness-tracking-app",
    title: "Fitness Tracking App",
    client: "Health & Wellness Company",
    year: "2023",
    role: "UI/UX Designer",
    description: "An engaging fitness tracking app with personalized workout plans and progress tracking.",
    challenge:
      "The client needed an app that would motivate users to stay consistent with their fitness routines and provide valuable insights into their progress.",
    solution:
      "I created a gamified fitness experience with personalized workout recommendations, progress visualization, and social features to keep users engaged.",
    process: [
      "User Research and Behavior Analysis",
      "Journey Mapping",
      "Wireframing and UI Design",
      "Animation and Interaction Design",
      "A/B Testing and Optimization",
    ],
    results:
      "The app achieved a 45% higher retention rate compared to industry average and received positive feedback for its intuitive design.",
    images: [
      "/placeholder.svg?height=800&width=1200",
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
    ],
  },
]

export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }))
}

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const project = projects.find((p) => p.slug === params.slug)

  if (!project) {
    return <div>Project not found</div>
  }

  return (
    <div className="min-h-screen bg-background">
      <AnimatedBackground />
      <Navigation />

      <div className="container py-12">
        <Link href="/#projects" className="inline-flex items-center text-muted-foreground hover:text-foreground mb-8">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to all projects
        </Link>

        <div className="space-y-12">
          {/* Project Header */}
          <div>
            <h1 className="font-playfair text-4xl md:text-6xl font-bold mb-6 gradient-text">{project.title}</h1>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
              <div>
                <h3 className="text-sm text-muted-foreground">CLIENT</h3>
                <p className="font-medium">{project.client}</p>
              </div>
              <div>
                <h3 className="text-sm text-muted-foreground">YEAR</h3>
                <p className="font-medium">{project.year}</p>
              </div>
              <div>
                <h3 className="text-sm text-muted-foreground">ROLE</h3>
                <p className="font-medium">{project.role}</p>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <Card3D className="rounded-2xl">
            <Image
              src={project.images[0] || "/placeholder.svg"}
              width={1200}
              height={800}
              alt={project.title}
              className="rounded-2xl shadow-xl w-full"
            />
          </Card3D>

          {/* Project Overview */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <h2 className="font-playfair text-3xl font-bold mb-6 gradient-text">Overview</h2>
              <p className="text-lg mb-6">{project.description}</p>
              <h3 className="text-xl font-bold mb-4 text-primary">The Challenge</h3>
              <p className="mb-6">{project.challenge}</p>
              <h3 className="text-xl font-bold mb-4 text-primary">The Solution</h3>
              <p>{project.solution}</p>
            </div>
            <div className="bg-gradient-to-br from-primary/10 to-accent/10 p-6 rounded-xl h-fit backdrop-blur-sm">
              <h3 className="text-xl font-bold mb-4 text-primary">Process</h3>
              <ul className="space-y-2">
                {project.process.map((step, index) => (
                  <li key={index} className="flex items-start">
                    <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-primary text-primary-foreground text-xs mr-3 mt-0.5">
                      {index + 1}
                    </span>
                    {step}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Additional Images */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {project.images.slice(1).map((image, index) => (
              <Card3D key={index} className="rounded-xl">
                <Image
                  src={image || "/placeholder.svg"}
                  width={800}
                  height={600}
                  alt={`${project.title} - Image ${index + 2}`}
                  className="rounded-xl shadow-lg w-full"
                />
              </Card3D>
            ))}
          </div>

          {/* Results */}
          <div className="bg-gradient-to-br from-primary/10 to-accent/10 p-8 md:p-12 rounded-2xl backdrop-blur-sm">
            <h2 className="font-playfair text-3xl font-bold mb-6 gradient-text">Results</h2>
            <p className="text-lg">{project.results}</p>
          </div>

          {/* Next Project */}
          <div className="pt-12 border-t">
            <h3 className="text-sm text-muted-foreground mb-4">NEXT PROJECT</h3>
            <Link
              href={`/projects/${projects[(projects.findIndex((p) => p.slug === params.slug) + 1) % projects.length].slug}`}
              className="font-playfair text-3xl font-bold hover:text-primary transition-colors gradient-text"
            >
              {projects[(projects.findIndex((p) => p.slug === params.slug) + 1) % projects.length].title}
            </Link>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}

