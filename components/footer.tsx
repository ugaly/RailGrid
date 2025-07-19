import Link from "next/link"
import { GalleryVerticalEnd, Linkedin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-muted py-12 md:py-16 lg:py-20 border-t bg-slate-300">
      <div className="container grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8 text-muted-foreground">
        {/* Column 1: Logo and Tagline */}
        <div className="flex flex-col items-start space-y-4">
          <Link href="/" className="flex items-center gap-2 group">
            <div className="p-1.5 rounded-lg bg-gradient-to-br from-railBlueStart to-railBlueEnd group-hover:from-railBlueEnd group-hover:to-railBlueStart transition-colors">
              <GalleryVerticalEnd className="h-6 w-6 text-white" />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-railBlueStart to-railBlueEnd bg-clip-text text-transparent">
              RailGrid
            </span>
          </Link>
          <p className="text-sm leading-relaxed">Pioneering Digital Solutions for Africa&apos;s Next-Gen Economy.</p>
          <p className="text-xs">&copy; {new Date().getFullYear()} Rail Grid</p>
        </div>

        {/* Column 2: Navigation */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-foreground">Navigation</h3>
          <nav className="flex flex-col space-y-2">
            <Link href="/solutions" className="hover:text-primary transition-colors">
              Solutions
            </Link>
            <Link href="/blog" className="hover:text-primary transition-colors">
              Blog
            </Link>
            <Link href="/#founder" className="hover:text-primary transition-colors">
              About Us
            </Link>
            <Link href="/contact" className="hover:text-primary transition-colors">
              Contact
            </Link>
          </nav>
        </div>

        {/* Column 3: Legal */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-foreground">Legal</h3>
          <nav className="flex flex-col space-y-2">
            <Link href="/privacy" className="hover:text-primary transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-primary transition-colors">
              Terms of Service
            </Link>
          </nav>
        </div>

        {/* Column 4: Connect */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-foreground">Connect</h3>
          <div className="flex space-x-4">
            <a
              href="https://linkedin.com/in/mohammed-saleh-cto"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="LinkedIn profile"
            >
              <Linkedin className="h-6 w-6" />
            </a>
            {/* Add more social icons here if needed */}
          </div>
          <p className="text-sm">
            Email:{" "}
            <a href="mailto:info@railgrid.com" className="hover:text-primary transition-colors">
              info@railgrid.com
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
