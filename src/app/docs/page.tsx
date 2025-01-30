"use client"

import { cn } from "@/lib/utils"
import Link from "next/link"
import { usePathname } from "next/navigation"

const sidebarItems = {
  overview: "Overview",
  neura: {
    purpose: "Purpose",
    projects: {
      zen: "Zen",
      hana: "Hana",
      toolkit: "Toolkit",
      "solana-toolkit": "Solana Toolkit",
    },
  },
}

export default function DocsPage() {
  const pathname = usePathname()

  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <div className="w-64 bg-white/10 backdrop-blur-sm p-6">
        <h2 className="text-xl font-semibold text-white mb-4">Documentation</h2>
        <nav className="space-y-2">
          <Link
            href="/docs"
            className={cn(
              "block text-white/70 hover:text-white transition-colors",
              pathname === "/docs" && "text-white",
            )}
          >
            overview
          </Link>
          <div className="pl-4 space-y-2">
            {Object.entries(sidebarItems.neura.projects).map(([key, value]) => (
              <Link
                key={key}
                href={`/docs/${key}`}
                className={cn(
                  "block text-white/70 hover:text-white transition-colors",
                  pathname === `/docs/${key}` && "text-white",
                )}
              >
                {value.toString().toLowerCase()}
              </Link>
            ))}
          </div>
        </nav>
      </div>

      {/* Main content */}
      <div className="flex-1 p-8">
        <div className="max-w-3xl mx-auto">
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 text-white">
            <h1 className="text-2xl font-bold mb-6">Overview</h1>
            <div className="space-y-4">
              <p>
                Hi, we're Neura Labs, an organization focused on AI development and innovation. We are building products
                that leverage the power of AI to create new experiences and opportunities for developers and users.
              </p>
              <p>
                Our main product is the Neura Framework, an advanced AI system designed to make powerful and easy to
                build applications. We're also developing various tools and frameworks to support AI development across
                different platforms.
              </p>
              <h2 className="text-xl font-semibold mt-8 mb-4">Open Source</h2>
              <p>
                As discussed in our whitepaper, we truly believe in decentralization, so we will be open sourcing all of
                our projects, not just our products. We believe in creating everything ourselves and not relying on
                third parties.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

