import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";

export const metadata: Metadata = {
  title: "Sabyasachi Upadhyay | Lead AI Product Manager",
  description: "Lead AI Product Manager with a decade of shipping GenAI and agentic products end-to-end, from prototype to production: RAG, evals, guardrails, and human-in-the-loop workflows.",
  keywords: ["AI Product Management", "GenAI", "Agentic AI", "RAG", "LLM Evals", "Guardrails", "Cognizant", "NITI Aayog", "Ola Foundation", "Sambodh IAS"],
  authors: [{ name: "Sabyasachi Upadhyay" }],
  openGraph: {
    title: "Sabyasachi Upadhyay | Lead AI Product Manager",
    description: "A decade of shipping GenAI and agentic products end-to-end, from prototype to production.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sabyasachi Upadhyay | Lead AI Product Manager",
    description: "A decade of shipping GenAI and agentic products end-to-end, from prototype to production.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth dark" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="antialiased">
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}

