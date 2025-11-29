# Atlas Landing Page

A beautiful, production-ready landing page for Atlas built with Next.js 15, Tailwind CSS 4, TypeScript, and Framer Motion.

## Design Philosophy

This landing page is inspired by Paradigm's elegant, minimalist approach, featuring:
- Clean serif typography (Playfair Display) for headlines
- Modern sans-serif (Inter) for body copy
- Dark/light aesthetic with high contrast
- Smooth animations and transitions
- Interactive preview system
- Tab-based use case exploration
- Fully responsive design

## Tech Stack

- **Next.js 15** - React framework with App Router
- **TypeScript** - Type safety and better developer experience
- **Tailwind CSS 4** - Utility-first CSS framework
- **Framer Motion** - Production-ready animation library
- **Google Fonts** - Playfair Display (serif) and Inter (sans-serif)

## Getting Started

### Prerequisites

- Node.js 18.17 or later
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd atlas-website
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
atlas-website/
├── app/
│   ├── layout.tsx          # Root layout with fonts and metadata
│   ├── page.tsx            # Main landing page
│   └── globals.css         # Global styles and Tailwind imports
├── components/
│   ├── Hero.tsx            # Hero section
│   ├── SocialProof.tsx     # Company logos carousel
│   ├── InteractivePreview.tsx  # Try it now section
│   ├── HowItWorks.tsx      # 3-step process
│   ├── FeatureHighlight.tsx    # Reusable feature section
│   ├── UseCases.tsx        # Tabbed use cases
│   ├── FeaturesGrid.tsx    # 8-feature grid
│   ├── Integrations.tsx    # Integration cards
│   ├── Security.tsx        # Enterprise security
│   ├── Testimonials.tsx    # Customer quotes
│   ├── FinalCTA.tsx        # Bottom CTA
│   └── Footer.tsx          # Site footer
├── landing-page-copy/
│   ├── paradigm-inspired-option.md  # Original copy document
│   └── README.md           # Copy strategy guide
└── public/
    └── fonts/              # Custom font files (if needed)
```

## Landing Page Sections

1. **Hero** - Main value proposition with dual CTAs
2. **Social Proof** - Company logo carousel
3. **Interactive Preview** - Try-it-now input with templates
4. **How It Works** - 3-step visual process (Chat → Create → Iterate)
5. **Deep Research** - Feature highlight with side-by-side layout
6. **AI Creation** - Feature highlight showcasing artifact generation
7. **Use Cases** - Interactive tabs for different personas
8. **Intelligent Canvas** - Visual workspace organization
9. **Features Grid** - 8 core capabilities
10. **Integrations** - Tool connections
11. **Security** - Enterprise-grade trust signals
12. **Testimonials** - Customer quotes with attribution
13. **Final CTA** - Dark background conversion section
14. **Footer** - Site navigation and links

## Customization

### Typography

Fonts are loaded via Google Fonts in `app/layout.tsx`:
- **Serif**: Playfair Display (headlines)
- **Sans**: Inter (body copy)

To change fonts, update the Google Fonts link and CSS variables in `app/globals.css`.

### Colors

Primary color palette is defined in `app/globals.css`:
- Background: `#ffffff` (white)
- Foreground: `#0A0A0A` (near black)
- Accents: Customizable via Tailwind utilities

### Content

All content can be edited directly in the component files:
- Copy text is in each component
- Placeholder visuals marked with "Visual:" labels
- Template pills and use cases in `UseCases.tsx`
- Company names in `SocialProof.tsx`

### Adding Real Images

Replace placeholder divs with actual images:

```tsx
// Before
<div className="h-64 bg-gray-200 rounded-lg">
  Visual: Screenshot
</div>

// After
<Image
  src="/images/screenshot.png"
  alt="Description"
  width={800}
  height={600}
  className="rounded-lg"
/>
```

## Performance

- Static site generation (SSG) for optimal performance
- Lazy loading of images (when added)
- Framer Motion animations optimized for 60fps
- Tailwind CSS purges unused styles in production
- Font preloading for faster initial render

## Deployment

### Vercel (Recommended)

1. Push to GitHub
2. Import project in Vercel
3. Deploy automatically

### Other Platforms

Build the static site:
```bash
npm run build
```

Serve the `.next` output directory.

## Browser Support

- Chrome (last 2 versions)
- Firefox (last 2 versions)
- Safari (last 2 versions)
- Edge (last 2 versions)

## License

[Your License Here]

## Credits

Design inspired by Paradigm's landing page aesthetics.
Built with ❤️ for Atlas.
