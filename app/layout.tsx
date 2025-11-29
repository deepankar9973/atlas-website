import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Atlas - Your AI workspace for ideas that ship",
  description: "A canvas to create, research, and build with AI—moving from concept to execution with human-level precision.",
  keywords: ["AI", "workspace", "productivity", "research", "prototyping", "design"],
  authors: [{ name: "Atlas" }],
  openGraph: {
    title: "Atlas - Your AI workspace for ideas that ship",
    description: "A canvas to create, research, and build with AI—moving from concept to execution with human-level precision.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Playfair+Display:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
