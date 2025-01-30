"use client"

import { motion } from "framer-motion"
import cn from "classnames"

const roadmapItems = [
  {
    quarter: "Q1 2025",
    title: "Framework Release",
    description: "Initial release of the Neura Framework.",
    status: "completed",
  },
  {
    quarter: "Q1 2025",
    title: "Core Toolkit",
    description: "Release of the core development toolkit.",
    status: "in-progress",
  },
  {
    quarter: "Q1 2025",
    title: "AI Integration Suite",
    description: "Full release of AI-specific tools and integrations.",
    status: "in-progress",
  },
  {
    quarter: "Q2 2025",
    title: "Product Launch",
    description: "Consumer facing product release.",
    status: "planned",
  },
]

const statusColors = {
  completed: "bg-emerald-400",
  "in-progress": "bg-blue-400",
  planned: "bg-gray-400",
}

export default function RoadmapPage() {
  return (
    <div className="min-h-screen p-8">
      <div className="max-w-3xl mx-auto">
        <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 text-white">
          <h1 className="text-2xl font-bold mb-6">Roadmap</h1>
          <p className="mb-8 text-white/80">
            This roadmap shows our current plans, but we're just getting started. All completed features are actively
            maintained and updated.
          </p>

          {/* Status indicators */}
          <div className="flex gap-4 mb-8">
            {Object.entries(statusColors).map(([status, color]) => (
              <div key={status} className="flex items-center gap-2">
                <div className={`w-3 h-3 rounded-full ${color}`} />
                <span className="text-sm capitalize">{status}</span>
              </div>
            ))}
          </div>

          {/* Timeline */}
          <div className="relative">
            <div className="absolute left-[7px] top-0 bottom-0 w-[2px] bg-white/20" />

            <div className="space-y-12">
              {roadmapItems.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.2 }}
                  className="relative pl-8"
                >
                  <div
                    className={cn(
                      "absolute left-0 w-4 h-4 rounded-full border-2 border-white",
                      statusColors[item.status as keyof typeof statusColors],
                    )}
                  />
                  <div className="text-sm text-white/60 mb-1">{item.quarter}</div>
                  <h3 className="text-lg font-semibold mb-1">{item.title}</h3>
                  <p className="text-white/80">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

