"use client";

import { motion } from "framer-motion";

export default function SocialProof() {
  // Placeholder company names - replace with actual logos
  const companies = [
    "Company A",
    "Company B",
    "Company C",
    "Company D",
    "Company E",
    "Company F",
  ];

  return (
    <section className="py-16 bg-gray-50 border-y border-gray-200">
      <div className="max-w-7xl mx-auto px-6">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-sm text-gray-500 mb-8"
        >
          Trusted by builders at
        </motion.p>

        <div className="flex flex-wrap justify-center items-center gap-12">
          {companies.map((company, index) => (
            <motion.div
              key={company}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-gray-400 text-lg font-medium grayscale"
            >
              {company}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
