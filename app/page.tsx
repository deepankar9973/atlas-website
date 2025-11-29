import Hero from "@/components/Hero";
import SocialProof from "@/components/SocialProof";
import InteractivePreview from "@/components/InteractivePreview";
import HowItWorks from "@/components/HowItWorks";
import FeatureHighlight from "@/components/FeatureHighlight";
import UseCases from "@/components/UseCases";
import FeaturesGrid from "@/components/FeaturesGrid";
import Integrations from "@/components/Integrations";
import Security from "@/components/Security";
import Testimonials from "@/components/Testimonials";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Section 1: Hero */}
      <Hero />

      {/* Section 2: Social Proof */}
      <SocialProof />

      {/* Section 3: Interactive Preview */}
      <InteractivePreview />

      {/* Section 4: How It Works */}
      <HowItWorks />

      {/* Section 5: Deep Research Feature */}
      <FeatureHighlight
        title="Deep research, not surface snippets"
        description={`Standard AI tools give you 3-5 search results with brief excerpts.\n\nAtlas intelligently pulls 5-20 full sources based on your query's complexity—extracting complete articles, competitor pricing pages, technical docs, and reviews.\n\nYou get 100x more context for strategic decisions.`}
        imagePosition="left"
        bgColor="bg-white"
      />

      {/* Section 6: AI Creation Feature */}
      <FeatureHighlight
        title="AI that creates, not just responds"
        description={`Ask for a user flow diagram—Atlas generates it with Mermaid and places it on your canvas.\n\nRequest competitor research—Atlas creates a comparison table with data from 15 sources.\n\nNeed a prototype—Atlas builds React components and renders them in device frames.\n\nEvery conversation produces visual artifacts, not just text.`}
        imagePosition="right"
        bgColor="bg-gray-50"
      />

      {/* Section 7: Use Cases */}
      <UseCases />

      {/* Section 8: Organize with Canvas (could add another FeatureHighlight here) */}
      <FeatureHighlight
        title="Organize with intelligent canvas"
        description={`Build your workspace using frames, shapes, text, and AI-generated content. Connect ideas visually. Track iteration history with node-based lineage. Every artifact knows its parent.\n\nUse Atlas's contextual AI to query your workspace like a conversation. "Find all competitor pricing research" or "Generate a prototype based on Frame 3"`}
        imagePosition="left"
        bgColor="bg-white"
      />

      {/* Section 9: Features Grid */}
      <FeaturesGrid />

      {/* Section 10: Integrations */}
      <Integrations />

      {/* Section 12: Security */}
      <Security />

      {/* Section 14: Testimonials */}
      <Testimonials />

      {/* Section 15: Final CTA */}
      <FinalCTA />

      {/* Section 16: Footer */}
      <Footer />
    </main>
  );
}
