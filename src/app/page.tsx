"use client"

import Header from "@/components/ui/header"
import Footer from "@/components/ui/footer"
import { motion } from "framer-motion"

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col relative bg-gradient-to-br from-cyan-400 via-teal-500 to-emerald-600">
      {/* Background image overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{
          backgroundImage: `url('${process.env.NEXT_PUBLIC_BACKGROUND_URL || "https://sjc.microlink.io/ungCeSkIG7nA46KpKdK3yDlz3PtWk7chj7Ci8y-b9S8lyTrQPg0iwi4RLHbCBS_rwE38_iYtu2iefKQ7lvy4aA.jpeg"}')`,
          opacity: 0.6,
          mixBlendMode: "overlay",
        }}
      />

      {/* Content */}
      <div className="relative z-10 flex flex-col min-h-screen">
        <Header />
        <div className="flex-grow flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center"
          >
            <motion.h1
              className="text-4xl md:text-6xl font-bold text-white mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              Building the future of AI
            </motion.h1>
            <motion.p
              className="text-xl text-white/80"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              Open source AI development for everyone
            </motion.p>
          </motion.div>
        </div>
        <Footer />
      </div>
    </main>
  )
}

