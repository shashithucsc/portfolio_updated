import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Shashith Rashmika - Full Stack Developer | Portfolio",
  description: "BSc. Information Systems undergraduate at UCSC specializing in full-stack development. Showcasing innovative web applications built with React, Next.js, Node.js, and modern technologies.",
  keywords: ["Shashith Rashmika", "Full Stack Developer", "UCSC", "React", "Next.js", "Node.js", "Web Developer", "Sri Lanka"],
  authors: [{ name: "Shashith Rashmika" }],
  openGraph: {
    title: "Shashith Rashmika - Full Stack Developer Portfolio",
    description: "BSc. Information Systems undergraduate showcasing innovative web applications and projects",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
