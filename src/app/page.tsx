"use client"

import { motion } from "framer-motion"
import { Hammer, Clock, HardHat } from "lucide-react"
import { ThemeToggle } from '@/app/components'

export default function Home() {
  return (
    <main className="relative min-h-screen">
      {/* Theme Toggle */}
      <div className="fixed top-6 left-6 z-50">
        <ThemeToggle />
      </div>

      {/* Coming Soon Section */}
      <section className="section-padding bg-gradient-light dark:bg-gradient-dark min-h-screen flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="text-center px-6"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="flex justify-center mb-6"
          >
            <HardHat className="w-16 h-16 text-primary-pink animate-bounce-gentle" />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-4xl lg:text-6xl font-bold mb-4"
          >
            Hold Tight! 🛠️
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="text-lg lg:text-xl text-gray-700 dark:text-gray-300 mb-8 max-w-xl mx-auto"
          >
            I&apos;m still piecing this place together — with duct tape and JavaScript. Check back soon!
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="flex justify-center gap-4"
          >
            <span className="flex items-center gap-2 text-text-gray dark:text-gray-300">
              <Hammer className="w-5 h-5" />
              Building in progress...
            </span>
            <span className="flex items-center gap-2 text-text-gray dark:text-gray-300">
              <Clock className="w-5 h-5" />
              ETA: a week (or two) ⏳
            </span>
          </motion.div>
        </motion.div>
      </section>
    </main>
  )
}
