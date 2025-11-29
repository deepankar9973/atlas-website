"use client";

import { motion } from "framer-motion";
import { useState } from "react";

export default function InteractivePreview() {
  const [inputValue, setInputValue] = useState("");

  const templates = [
    "Product Research",
    "UX Planning",
    "Campaign Design",
    "System Architecture",
    "Pitch Deck",
  ];

  return (
    <section className="py-24 bg-white px-6">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="serif text-5xl md:text-6xl font-normal text-center mb-6 text-[#0A0A0A]"
        >
          Try a preview now
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-xl text-gray-600 text-center mb-12"
        >
          Turn any idea into visual artifacts. Create a workspace—no account needed.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="relative"
        >
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Create a product roadmap for a fitness app with competitor analysis"
            className="w-full px-6 py-5 text-lg border-2 border-gray-300 rounded-lg focus:outline-none focus:border-[#0A0A0A] transition-colors"
          />
          <button className="absolute right-3 top-1/2 -translate-y-1/2 bg-[#0A0A0A] text-white px-6 py-2 rounded-md hover:bg-gray-800 transition-colors">
            →
          </button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="flex flex-wrap gap-3 justify-center mt-8"
        >
          {templates.map((template) => (
            <button
              key={template}
              onClick={() => setInputValue(template)}
              className="px-4 py-2 border border-gray-300 rounded-full text-sm hover:border-[#0A0A0A] hover:bg-gray-50 transition-colors"
            >
              {template}
            </button>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
