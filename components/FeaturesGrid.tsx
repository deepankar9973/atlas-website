"use client";

import { motion } from "framer-motion";

export default function FeaturesGrid() {
  const features = [
    {
      title: "Advanced Image Tools",
      description:
        "Generate images with Imagen 3 or Stable Diffusion. Remove backgrounds, upscale 4x, recolor objects, replace elements.",
    },
    {
      title: "Video Generation",
      description:
        "Create 4-8 second videos from text or images with Google Veo 3.1. Native audio generation for social content.",
    },
    {
      title: "Interactive Prototypes",
      description:
        "Generate production-ready React or vanilla JavaScript code. Live preview in iOS, Android, desktop, or tablet frames.",
    },
    {
      title: "Diagram Creation",
      description:
        "Flowcharts, sequence diagrams, user journeys, system architecture. 10+ Mermaid diagram types rendered instantly.",
    },
    {
      title: "Web Research",
      description:
        "Multi-provider search (Tavily, Brave, Google) with intelligent depth. Full content extraction, not just snippets.",
    },
    {
      title: "Live Integrations",
      description:
        "Query Notion databases, update pages, pull Mixpanel analytics—without leaving your workspace.",
    },
    {
      title: "Memory System",
      description:
        "RAG-powered conversation history. Atlas remembers your preferences, past decisions, and project context.",
    },
    {
      title: "Multi-Model AI",
      description:
        "Choose Claude 4.5 Sonnet, GPT-4o, or other models. Automatic model routing for optimal results.",
    },
  ];

  return (
    <section className="py-24 bg-gray-50 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="serif text-5xl md:text-6xl font-normal text-center mb-20 text-[#0A0A0A]"
        >
          Everything you need, connected
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="bg-white p-6 rounded-lg border border-gray-200"
            >
              <h3 className="text-xl font-semibold mb-3 text-[#0A0A0A]">
                {feature.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
