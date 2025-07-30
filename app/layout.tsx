// app/layout.tsx

import type React from "react"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { Metadata } from "next"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Saavik Solutions | Premier IT Services & Software Development",
  description:
    "Empowering businesses with cutting-edge IT solutions, software development, staffing, CRM, ERP, and digital marketing services. Transform your business with Saavik Solutions.",
  keywords:
    "IT solutions, software development, web development, staffing solutions, CRM, ERP, digital marketing, Saavik Solutions",
  authors: [{ name: "Saavik Solutions" }],
  creator: "Saavik Solutions",
  publisher: "Saavik Solutions",
  formatDetection: {
    email: false,
    telephone: false,
    address: false,
  },
  metadataBase: new URL("https://saaviksolutions.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://saaviksolutions.com",
    title: "Saavik Solutions | Premier IT Services & Software Development",
    description:
      "Empowering businesses with cutting-edge IT solutions, software development, staffing, CRM, ERP, and digital marketing services.",
    siteName: "Saavik Solutions",
    images: [
      {
        url: "https://saavik-solutions-assets.s3.ap-south-1.amazonaws.com/saavik-og-img.jpg",
        width: 1200,
        height: 630,
        alt: "Saavik Solutions – Premier IT Services & Software Development",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Saavik Solutions | Premier IT Services & Software Development",
    description:
      "Empowering businesses with cutting-edge IT solutions and services.",
    images: [
      "https://saavik-solutions-assets.s3.ap-south-1.amazonaws.com/saavik-og-img.jpg",
    ],
    creator: "@saaviksolutions",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [
      {
        url: "/apple-touch-icon.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],
    other: [
      {
        rel: "mask-icon",
        url: "/safari-pinned-tab.svg",
      },
    ],
  },
  manifest: "/site.webmanifest",
  verification: {
    google: "google-site-verification-code",
    yandex: "yandex-verification-code",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark" style={{ colorScheme: "dark" }}>
      <head>
        <meta name="theme-color" content="#000000" />
        <link rel="canonical" href="https://saaviksolutions.com" />
        {/* Google Analytics 4 (GA4) Tracking Code */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-K9592N0DQT"></script>
        <script>
          {
            `window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-K9592N0DQT');`
          }
        </script>
        {/* Microsoft Clarity Tracking Code */}
        <script type="text/javascript">
          {
            `(function(c,l,a,r,i,t,y){` +
            `c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};` +
            `t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;` +
            `y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);` +
            `})(window, document, "clarity", "script", "sn458hp0e8");`
          }
        </script>
      </head>
      <body className={`${inter.className} overflow-x-hidden`}>
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
