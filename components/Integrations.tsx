"use client";

import { motion } from "framer-motion";

export default function Integrations() {
  const integrations = [
    { name: "Notion", status: "Connected" },
    { name: "Mixpanel", status: "Connected" },
    { name: "Slack", status: "Coming Soon" },
    { name: "Linear", status: "Coming Soon" },
    { name: "Figma", status: "Coming Soon" },
    { name: "GitHub", status: "Coming Soon" },
  ];

  return (
    <section className="py-24 bg-white px-6">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="serif text-5xl md:text-6xl font-normal text-center mb-6 text-[#0A0A0A]"
        >
          Integrates with tools you already trust
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-xl text-gray-600 text-center mb-16 max-w-3xl mx-auto"
        >
          Connect your stack and pull data directly into Atlas—Notion, Mixpanel, and more coming soon.
        </motion.p>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {integrations.map((integration, index) => (
            <motion.div
              key={integration.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="bg-gray-50 p-6 rounded-lg border border-gray-200 flex flex-col items-center justify-center text-center"
            >
              <div className="w-16 h-16 bg-gray-200 rounded-lg mb-3 flex items-center justify-center text-gray-400 text-xs">
                {integration.name}
              </div>
              <h3 className="font-semibold text-sm mb-1 text-[#0A0A0A]">
                {integration.name}
              </h3>
              <span
                className={`text-xs ${
                  integration.status === "Connected"
                    ? "text-green-600"
                    : "text-gray-500"
                }`}
              >
                {integration.status}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
