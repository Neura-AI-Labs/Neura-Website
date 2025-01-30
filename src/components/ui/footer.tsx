import Link from "next/link"

export default function Footer() {
  return (
    <footer className="w-full px-6 py-4 backdrop-blur-sm bg-black/10">
      <div className="max-w-7xl mx-auto flex items-center justify-between text-white/80 text-sm">
        <div>© 2025 neura labs</div>

        <div className="flex items-center space-x-4">
          <Link href="/privacy" className="hover:text-white">
            privacy
          </Link>
          <Link href="/terms" className="hover:text-white">
            terms
          </Link>
          <span>x</span>
          <Link href="/discord" className="hover:text-white">
            discord
          </Link>
        </div>
      </div>
    </footer>
  )
}

