"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-white px-6 py-20">
      <div className="max-w-5xl mx-auto text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="serif text-6xl md:text-7xl lg:text-8xl font-normal mb-8 text-[#0A0A0A] leading-tight"
        >
          Your AI workspace for ideas that ship
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-xl md:text-2xl text-gray-700 mb-12 max-w-3xl mx-auto leading-relaxed"
        >
          A canvas to create, research, and build with AI—moving from concept to execution with human-level precision.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <button className="bg-[#0A0A0A] text-white px-8 py-4 rounded-lg text-lg font-medium hover:bg-gray-800 transition-colors">
            Try it now
          </button>
          <button className="border-2 border-[#0A0A0A] text-[#0A0A0A] px-8 py-4 rounded-lg text-lg font-medium hover:bg-gray-50 transition-colors">
            Request a Demo →
          </button>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 text-sm text-gray-500"
        >
          Trusted by product teams at leading companies
        </motion.p>
      </div>
    </section>
  );
}
