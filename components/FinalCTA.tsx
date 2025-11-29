"use client";

import { motion } from "framer-motion";

export default function FinalCTA() {
  return (
    <section className="py-32 bg-[#0A0A0A] px-6">
      <div className="max-w-4xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="serif text-5xl md:text-7xl font-normal mb-8 text-white leading-tight"
        >
          Enter a new era of
          <br />
          creative work
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto"
        >
          Atlas is an AI-first workspace that enables fast, accurate creation from ideas to execution.
        </motion.p>

        <motion.button
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="bg-white text-[#0A0A0A] px-8 py-4 rounded-lg text-lg font-medium hover:bg-gray-100 transition-colors"
        >
          Request a Demo →
        </motion.button>
      </div>
    </section>
  );
}
