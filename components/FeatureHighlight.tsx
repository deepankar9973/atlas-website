"use client";

import { motion } from "framer-motion";

interface FeatureHighlightProps {
  title: string;
  description: string;
  imagePosition: "left" | "right";
  bgColor?: string;
}

export default function FeatureHighlight({
  title,
  description,
  imagePosition,
  bgColor = "bg-white",
}: FeatureHighlightProps) {
  return (
    <section className={`py-24 ${bgColor} px-6`}>
      <div className="max-w-7xl mx-auto">
        <div
          className={`grid md:grid-cols-2 gap-16 items-center ${
            imagePosition === "right" ? "" : "md:grid-flow-dense"
          }`}
        >
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: imagePosition === "left" ? -30 : 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className={`${
              imagePosition === "right" ? "md:col-start-2" : "md:col-start-1"
            }`}
          >
            <div className="aspect-video bg-gray-200 rounded-lg flex items-center justify-center text-gray-400">
              Screenshot: {title}
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: imagePosition === "left" ? 30 : -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className={
              imagePosition === "right" ? "md:col-start-1" : "md:col-start-2"
            }
          >
            <h2 className="serif text-4xl md:text-5xl font-normal mb-6 text-[#0A0A0A]">
              {title}
            </h2>
            <div className="text-lg text-gray-600 leading-relaxed space-y-4">
              {description.split("\n\n").map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
