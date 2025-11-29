"use client";

import { motion } from "framer-motion";
import { useState } from "react";

export default function UseCases() {
  const [activeTab, setActiveTab] = useState("Product Management");

  const tabs = [
    "Product Management",
    "Marketing",
    "UX Design",
    "Development",
    "Founders",
  ];

  const useCases: Record<string, any> = {
    "Product Management": {
      title: "Product Roadmap Planning",
      prompt:
        '"Build a product roadmap for our mobile app with Q1-Q4 milestones, competitor features, and user research insights"',
      items: [
        "Product Research List",
        "Feature Comparison Matrix",
        "User Journey Map",
        "Competitive Analysis Board",
        "PRD Generator",
      ],
    },
    Marketing: {
      title: "Campaign Strategy",
      prompt:
        '"Create a go-to-market campaign for our B2B SaaS product with messaging, channels, and timeline"',
      items: [
        "Audience Research",
        "Messaging Framework",
        "Content Calendar",
        "Channel Strategy",
        "Performance Metrics",
      ],
    },
    "UX Design": {
      title: "User Experience Research",
      prompt:
        '"Design a mobile app checkout flow with user research, wireframes, and interaction patterns"',
      items: [
        "User Research Board",
        "Journey Mapping",
        "Wireframe Generator",
        "Prototype Builder",
        "Usability Testing",
      ],
    },
    Development: {
      title: "System Architecture",
      prompt:
        '"Design a scalable microservices architecture with database schema and API specifications"',
      items: [
        "Architecture Diagrams",
        "Database Schema",
        "API Documentation",
        "Tech Stack Analysis",
        "Code Generator",
      ],
    },
    Founders: {
      title: "Startup Validation",
      prompt:
        '"Validate my startup idea with market research, competitive analysis, and business model canvas"',
      items: [
        "Market Research",
        "Competitor Analysis",
        "Business Model Canvas",
        "Pitch Deck Builder",
        "Financial Projections",
      ],
    },
  };

  return (
    <section className="py-24 bg-white px-6">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="serif text-5xl md:text-6xl font-normal text-center mb-4 text-[#0A0A0A]"
        >
          One platform,
          <br />
          Endless solutions
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-xl text-gray-600 text-center mb-16 max-w-3xl mx-auto"
        >
          Create anything from research boards to interactive prototypes—all in one workspace.
        </motion.p>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {tabs.map((tab, index) => (
            <motion.button
              key={tab}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-3 rounded-lg font-medium transition-all ${
                activeTab === tab
                  ? "bg-[#0A0A0A] text-white"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              {tab}
            </motion.button>
          ))}
        </div>

        {/* Tab Content */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="bg-gray-50 rounded-2xl p-8 md:p-12"
        >
          <h3 className="text-3xl font-semibold mb-4 text-[#0A0A0A]">
            {useCases[activeTab].title}
          </h3>

          <p className="text-lg text-gray-600 mb-8">
            {useCases[activeTab].prompt}
          </p>

          {/* Visual placeholder */}
          <div className="h-80 bg-gray-200 rounded-lg mb-8 flex items-center justify-center text-gray-400">
            Visual: Example workspace for {activeTab}
          </div>

          <button className="bg-[#0A0A0A] text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition-colors">
            → Try this template
          </button>

          {/* Grid items */}
          <div className="mt-8 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {useCases[activeTab].items.map((item: string) => (
              <div
                key={item}
                className="bg-white p-4 rounded-lg border border-gray-200 text-sm text-gray-700"
              >
                {item}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
