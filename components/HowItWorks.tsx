"use client";

import { motion } from "framer-motion";

export default function HowItWorks() {
  const steps = [
    {
      number: "1",
      title: "Chat",
      description:
        "Describe what you need in plain language. AI understands context from your conversation, selected frames, and workspace history.",
    },
    {
      number: "2",
      title: "Create",
      description:
        "Atlas uses 20+ tools intelligently: deep research with 20 sources, image generation, video creation, diagram rendering, prototype building, and live integrations.",
    },
    {
      number: "3",
      title: "Iterate",
      description:
        "Everything lives on your canvas—fully editable, connected, and ready to build on. Regenerate, refine, or remix with full context.",
    },
  ];

  return (
    <section className="py-24 bg-gray-50 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="serif text-5xl md:text-6xl font-normal text-center mb-6 text-[#0A0A0A]"
        >
          A workspace to transform your ideas
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-xl text-gray-600 text-center mb-20 max-w-3xl mx-auto"
        >
          Chat with AI and watch it create diagrams, images, prototypes, and research—all on your infinite canvas.
        </motion.p>

        <div className="grid md:grid-cols-3 gap-12">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              className="relative"
            >
              <div className="mb-6">
                <div className="w-16 h-16 rounded-full bg-[#0A0A0A] text-white flex items-center justify-center text-2xl font-medium">
                  {step.number}
                </div>
              </div>

              <h3 className="text-2xl font-semibold mb-4 text-[#0A0A0A]">
                {step.title}
              </h3>

              <p className="text-gray-600 leading-relaxed">
                {step.description}
              </p>

              {/* Visual placeholder */}
              <div className="mt-8 h-64 bg-gray-200 rounded-lg flex items-center justify-center text-gray-400">
                Visual: {step.title}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
