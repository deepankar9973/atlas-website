"use client";

import { motion } from "framer-motion";

export default function Testimonials() {
  const testimonials = [
    {
      quote:
        "Atlas is the most interesting way I've seen AI and visual thinking combined. It's like having a design team that never sleeps.",
      author: "Sarah Chen",
      role: "VP of Product",
      company: "TechCorp",
    },
    {
      quote:
        "We've tried every AI tool. Atlas is the only one that actually ships—from research to working prototypes in minutes, not days.",
      author: "Michael Rodriguez",
      role: "Founder",
      company: "StartupXYZ",
    },
  ];

  return (
    <section className="py-24 bg-gray-50 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="bg-white p-10 rounded-2xl border border-gray-200"
            >
              <p className="text-2xl text-gray-800 mb-8 leading-relaxed">
                "{testimonial.quote}"
              </p>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center text-gray-500">
                  {testimonial.author.charAt(0)}
                </div>
                <div>
                  <p className="font-semibold text-[#0A0A0A]">
                    {testimonial.author}
                  </p>
                  <p className="text-sm text-gray-600">
                    {testimonial.role} at {testimonial.company}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
