import type { Metadata } from "next"
import { Inter, Outfit, Fraunces, Geist_Mono } from "next/font/google"
import Script from "next/script"

import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  preload: true,
})

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
  preload: false,
})

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
  preload: false,
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "Zentriq Digital Agency | Web Development, App Development & Design Services in Lamberts Bay",
  description: "Professional digital agency in Lamberts Bay serving clients worldwide. Expert web development, mobile app development, graphic design, and photo editing services for small to medium businesses.",
  keywords: "digital agency Lamberts Bay, web development, app development, graphic design, photo editing, small business websites, mobile apps, professional design services",
  authors: [{ name: "Zentriq Digital Agency" }],
  creator: "Zentriq Digital Agency",
  publisher: "Zentriq Digital Agency",
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://zentriq.com",
    siteName: "Zentriq Digital Agency",
    title: "Zentriq Digital Agency | Professional Web Development & Design Services",
    description: "Transform your business with professional web development, app development, graphic design, and photo editing services. Based in Lamberts Bay, serving clients worldwide.",
    images: [
      {
        url: "/zentriq-logo.png",
        width: 1200,
        height: 630,
        alt: "Zentriq Digital Agency - Professional Web Development & Design Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Zentriq Digital Agency | Professional Web Development & Design Services",
    description: "Transform your business with professional web development, app development, graphic design, and photo editing services.",
    images: ["/zentriq-logo.png"],
  },
  alternates: {
    canonical: "https://zentriq.com",
  },
  other: {
    "geo.region": "ZA-WC",
    "geo.placename": "Lamberts Bay",
    "geo.position": "-32.0833;18.3000",
    "ICBM": "-32.0833, 18.3000",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://pub-940ccf6255b54fa799a9b01050e6c227.r2.dev" />
        
        {/* Schema.org structured data for Local Business */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "@id": "https://zentriq.com/#organization",
              "name": "Zentriq Digital Agency",
              "alternateName": "Zentriq",
              "description": "Professional digital agency specializing in web development, mobile app development, graphic design, and photo editing services for small to medium businesses.",
              "url": "https://zentriq.com",
              "logo": "https://zentriq.com/zentriq-logo.png",
              "image": "https://zentriq.com/zentriq-logo.png",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Lamberts Bay",
                "addressRegion": "Western Cape",
                "addressCountry": "ZA"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": "-32.0833",
                "longitude": "18.3000"
              },
              "areaServed": [
                {
                  "@type": "Country",
                  "name": "South Africa"
                },
                {
                  "@type": "Place",
                  "name": "Worldwide"
                }
              ],
              "serviceType": "Digital Agency Services",
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "Digital Services",
                "itemListElement": [
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Web Development",
                      "description": "Custom website development using modern technologies like Next.js, React, and responsive design"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Mobile App Development",
                      "description": "Native and cross-platform mobile application development for iOS and Android"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Graphic Design",
                      "description": "Professional graphic design services including branding, logos, marketing materials, and visual identity"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Photo Editing",
                      "description": "Professional photo editing and retouching services including background removal, object removal, and enhancement"
                    }
                  }
                ]
              },
              "sameAs": [],
              "contactPoint": {
                "@type": "ContactPoint",
                "contactType": "customer service",
                "availableLanguage": "English"
              }
            })
          }}
        />
        
        {/* Website schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "@id": "https://zentriq.com/#website",
              "url": "https://zentriq.com",
              "name": "Zentriq Digital Agency",
              "description": "Professional digital agency in Lamberts Bay serving clients worldwide with web development, app development, graphic design, and photo editing services.",
              "publisher": {
                "@id": "https://zentriq.com/#organization"
              },
              "potentialAction": [
                {
                  "@type": "SearchAction",
                  "target": {
                    "@type": "EntryPoint",
                    "urlTemplate": "https://zentriq.com/search?q={search_term_string}"
                  },
                  "query-input": "required name=search_term_string"
                }
              ]
            })
          }}
        />
      </head>
      <body
        className={`${inter.variable} ${outfit.variable} ${fraunces.variable} ${geistMono.variable} antialiased overflow-x-hidden`}
        style={{
          scrollBehavior: 'smooth',
          WebkitFontSmoothing: 'antialiased',
          MozOsxFontSmoothing: 'grayscale',
        }}
      >
        {children}
        
        {/* Performance monitoring script */}
        <Script
          id="performance-monitor"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              if (typeof window !== 'undefined') {
                // Initialize performance monitoring
                window.addEventListener('load', () => {
                  // Monitor Core Web Vitals
                  if ('PerformanceObserver' in window) {
                    // LCP
                    new PerformanceObserver((entryList) => {
                      const entries = entryList.getEntries();
                      const lastEntry = entries[entries.length - 1];
                      console.log('LCP:', lastEntry.startTime);
                    }).observe({ entryTypes: ['largest-contentful-paint'] });
                    
                    // FID
                    new PerformanceObserver((entryList) => {
                      const entries = entryList.getEntries();
                      entries.forEach((entry) => {
                        console.log('FID:', entry.processingStart - entry.startTime);
                      });
                    }).observe({ entryTypes: ['first-input'] });
                  }
                });
              }
            `,
          }}
        />
      </body>
    </html>
  )
}