"use client";

import { motion } from "framer-motion";

export default function Security() {
  const securityFeatures = [
    {
      title: "SOC 2 Type I",
      description: "Type I Certified",
      icon: "✓",
    },
    {
      title: "SOC 2 Type II",
      description: "Type II Certified",
      icon: "✓",
    },
    {
      title: "No Training on User Data",
      description: "Your data stays yours",
      icon: "📄",
    },
    {
      title: "Audited and Tested",
      description: "Regular security audits",
      icon: "🔒",
    },
  ];

  return (
    <section className="py-24 bg-[#0A0A0A] px-6">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="serif text-5xl md:text-6xl font-normal text-center mb-6 text-white"
        >
          Enterprise-grade security
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-xl text-gray-400 text-center mb-16 max-w-3xl mx-auto"
        >
          Ship faster without compromising trust, prioritizing the highest industry standards.
        </motion.p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {securityFeatures.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-gray-900 p-8 rounded-lg border border-gray-800 text-center"
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-lg font-semibold mb-2 text-white">
                {feature.title}
              </h3>
              <p className="text-gray-400 text-sm">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
