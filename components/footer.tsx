import Link from "next/link"

export function Footer() {
  return (
    <footer className="py-8 px-6 bg-black text-white">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm">
            &copy; {new Date().getFullYear()} EalyBooks. All rights reserved.
          </p>
          <div className="flex items-center space-x-8">
            <Link
              href="/privacy"
              className="text-sm uppercase tracking-widest hover:text-primary transition-colors"
            >
              Privacy
            </Link>
            <Link
              href="/terms"
              className="text-sm uppercase tracking-widest hover:text-primary transition-colors"
            >
              Terms
            </Link>
            <a
              href="https://linkedin.com/in/christopherealy"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm uppercase tracking-widest hover:text-primary transition-colors"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
