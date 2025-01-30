import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function Header() {
  return (
    <header className="w-full px-6 py-4">
      <nav className="max-w-7xl mx-auto flex items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <span className="text-xl font-semibold text-white">neura labs</span>
        </Link>

        <div className="flex items-center space-x-6">
          <Button variant="ghost" className="text-white hover:text-white/80">
            whitepaper
          </Button>
          <Button variant="ghost" className="text-white hover:text-white/80">
            docs
          </Button>
          <Button variant="ghost" className="text-white hover:text-white/80">
            roadmap
          </Button>
          <Button variant="ghost" className="text-white hover:text-white/80">
            github
          </Button>
        </div>
      </nav>
    </header>
  )
}

