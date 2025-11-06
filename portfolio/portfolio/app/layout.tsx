import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Sabyasachi Upadhyay | Product Leader & AI for Good Advocate",
  description: "Product Leader, Growth Strategist, and AI for Good advocate. Building innovative products that drive growth and create meaningful impact through technology.",
  keywords: ["Product Management", "AI for Good", "Growth Strategy", "GenAI", "Social Impact", "Technology", "NITI Aayog", "Ola Foundation"],
  authors: [{ name: "Sabyasachi Upadhyay" }],
  openGraph: {
    title: "Sabyasachi Upadhyay | Product Leader & AI for Good Advocate",
    description: "Building innovative products that drive growth and create meaningful impact through technology.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sabyasachi Upadhyay | Product Leader & AI for Good Advocate",
    description: "Building innovative products that drive growth and create meaningful impact through technology.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}

