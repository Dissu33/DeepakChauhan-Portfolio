import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "./globals.css";
import { ThemeProvider } from "./provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Deepak Chauhan | Full Stack Developer Portfolio",
  description: "Deepak Chauhan - Full Stack Developer from Tosham, Haryana. Passionate about building scalable web applications. Student at CGC Landran.",
  keywords: [
    "Deepak Chauhan",
    "Deepak Chauhan Tosham",
    "Deepak Chauhan CGC Landran",
    "Full Stack Developer Portfolio",
    "Web Developer Tosham",
    "Tosham",
    "CGC Landran Developer",
    "MERN Stack Developer India",
    "Deepak Chauhan Web Developer"
  ],
  authors: [{ name: "Deepak Chauhan" }],
  openGraph: {
    title: "Deepak Chauhan | Full Stack Developer Portfolio",
    description: "Deepak Chauhan - Full Stack Developer from Tosham, Haryana. Passionate about building scalable web applications. Student at CGC Landran.",
    url: "https://deepak-chauhan-portfolio-flax.vercel.app/",
    siteName: "Deepak Chauhan Portfolio",
    images: [
      {
        url: "/portfolio.png",
        width: 1200,
        height: 630,
        alt: "Deepak Chauhan Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Deepak Chauhan | Full Stack Developer",
    description: "Full Stack Developer from Tosham, Haryana. Specialized in React, Node.js, and scalable web solutions.",
    images: ["/portfolio.png"],
  },
  alternates: {
    canonical: "https://deepak-chauhan-portfolio-flax.vercel.app/",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/jsm-logo.png" sizes="any" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Deepak Chauhan",
              "url": "https://deepak-chauhan-portfolio-flax.vercel.app/",
              "jobTitle": "Full Stack Developer",
              "alumniOf": {
                "@type": "CollegeOrUniversity",
                "name": "CGC Landran"
              },
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Tosham",
                "addressRegion": "Haryana",
                "addressCountry": "India"
              },
              "sameAs": [
                "https://github.com/Dissu33",
                "https://www.linkedin.com/in/deepak-chauhan-a67a4a396",
                "https://www.instagram.com/dpx.k",
                "https://deepak-chauhan-portfolio-flax.vercel.app/"
              ]
            }),
          }}
        />
      </head>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
