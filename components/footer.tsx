import Link from "next/link"
import { Linkedin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="py-12 border-t glass-effect">
      <div className="container">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <Link href="/" className="font-playfair text-xl font-bold gradient-text">
              Areeba Hamid
            </Link>
            <p className="text-sm text-muted-foreground mt-2">UI/UX Designer</p>
          </div>

          <div className="flex items-center space-x-6">
            <a
              href="https://www.linkedin.com/in/areebahamid22/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5" />
            </a>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Areeba Hamid. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

