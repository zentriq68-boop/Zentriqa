"use client";
import Globe from "@/components/ui/globe";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import { Footer } from "@/components/ui/footer-section";

// Lazy load components that are not immediately visible
const AboutSection = dynamic(() => import("@/components/sections/about"), {
  loading: () => <div className="h-96 animate-pulse bg-gray-200 rounded-lg" />,
  ssr: true
});

const ContactSection = dynamic(() => import("@/components/sections/contact"), {
  loading: () => <div className="h-96 animate-pulse bg-gray-200 rounded-lg" />,
  ssr: true
});

const PortfolioSection = dynamic(() => import("@/components/sections/portfolio"), {
  loading: () => <div className="h-96 animate-pulse bg-gray-200 rounded-lg" />,
  ssr: true
});

const ServicesSection = dynamic(() => import("@/components/sections/services"), {
  loading: () => <div className="h-96 animate-pulse bg-gray-200 rounded-lg" />,
  ssr: true
});

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsMenuOpen(false);
    };
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", onKey);
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="flex items-center justify-between px-4 md:px-8 py-4 md:py-6 font-[var(--font-outfit)]">
        <div className="flex items-center space-x-2">
          <div className="w-9 h-9">
            <Image
              src="/zentriq-logo.png"
              alt="Zentriq logo"
              width={36}
              height={36}
              sizes="(max-width: 768px) 36px, 36px"
              priority
              className="w-full h-full object-contain"
            />
          </div>
          <span className="text-xl font-semibold tracking-wide">Zentriq</span>
        </div>
        
        {/* Oval Navigation */}
        <div className="hidden md:flex items-center bg-white/80 backdrop-blur-sm border border-gray-200/50 rounded-full px-6 py-3 shadow-lg">
          <div className="flex items-center space-x-1">
            <Link href="/" className="px-4 py-2 text-sm font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-full transition-colors">Home</Link>
            <a href="#about" className="px-4 py-2 text-sm font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-full transition-colors">About</a>
            <a href="#services" className="px-4 py-2 text-sm font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-full transition-colors">Services</a>
            <Link href="/pricing" className="px-4 py-2 text-sm font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-full transition-colors">Pricing</Link>
            <a href="#contact" className="px-4 py-2 text-sm font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-full transition-colors">Contact</a>
          </div>
        </div>
        {/* Mobile Menu Icon */}
        <div className="md:hidden">
          <button
            aria-label="Open menu"
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
            onClick={() => setIsMenuOpen(true)}
            className="p-2 rounded-full border border-gray-300 text-gray-700"
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="3" y1="6" x2="21" y2="6" />
              <line x1="3" y1="12" x2="21" y2="12" />
              <line x1="3" y1="18" x2="21" y2="18" />
            </svg>
          </button>
        </div>
        
        <div className="hidden md:block text-sm text-gray-500">
          Digital Agency
        </div>
      </nav>

      {/* Mobile full-screen menu (design-only on mobile) */}
      {isMenuOpen && (
        <div id="mobile-menu" className="fixed inset-0 z-50 md:hidden" role="dialog" aria-modal="true">
          {/* Full white canvas */}
          <div className="absolute inset-0 bg-white z-0" />

          {/* Close button */}
          <button
            aria-label="Close menu"
            onClick={() => setIsMenuOpen(false)}
            className="absolute top-4 right-4 z-50 p-2 rounded-full border border-gray-300 text-gray-700"
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>

          {/* Centered navigation items */}
          <nav className="relative h-full flex flex-col items-center justify-center gap-12 font-[var(--font-outfit)]">
            <Link href="/" onClick={() => setIsMenuOpen(false)} className="text-2xl text-gray-900">Home</Link>
            <a href="#about" onClick={() => setIsMenuOpen(false)} className="text-2xl text-gray-900">About</a>
            <a href="#services" onClick={() => setIsMenuOpen(false)} className="text-2xl text-gray-900">Services</a>
            <Link href="/pricing" onClick={() => setIsMenuOpen(false)} className="text-2xl text-gray-900">Pricing</Link>
            <a href="#contact" onClick={() => setIsMenuOpen(false)} className="text-2xl text-gray-900">Contact</a>
          </nav>
        </div>
      )}

      {/* Hero Section */}
      <main className="relative px-4 md:px-8 py-2 md:py-2">
        {/* Mobile layout */}
        <div className="block md:hidden">
          <div className="max-w-xl mx-auto">
            <h1 className="font-[var(--font-outfit)] text-3xl font-semibold leading-tight tracking-tight text-gray-900 text-center">
              Connecting your business
              <span className="inline"> to new opportunities</span>
            </h1>
            <p className="mt-2 text-center text-sm text-gray-600 font-[var(--font-inter)]">Global digital expertise for local growth</p>

            {/* Globe */}
            <div className="mt-3 flex justify-center">
              <Globe />
            </div>

            {/* Pill Buttons */}
            <div className="mt-3 flex flex-wrap items-center justify-center gap-3 gap-y-3">
              <button className="rounded-2xl border border-gray-200 bg-white px-4 py-3 text-xs font-semibold uppercase tracking-wide shadow-sm">Global Reach</button>
              <button className="rounded-2xl border border-gray-200 bg-white px-4 py-3 text-xs font-semibold uppercase tracking-wide shadow-sm">Local Impact</button>
              <button className="rounded-2xl border border-gray-200 bg-white px-4 py-3 text-xs font-semibold uppercase tracking-wide shadow-sm">Proven Results</button>
            </div>

            {/* Supporting Copy */}
            <p className="mt-3 font-[var(--font-inter)] text-base text-gray-700 text-center">
              We bring global digital expertise to your local market, helping
              small and medium businesses attract more customers, increase
              sales, and compete with confidence.
            </p>

            {/* CTA Buttons for Mobile */}
            <div className="mt-4 flex flex-row items-center justify-center gap-3">
              <a href="#contact" className="bg-black text-white px-4 py-2 rounded-full text-xs font-semibold hover:bg-gray-800 transition-colors font-[var(--font-outfit)] tracking-wide flex-1 text-center">
                Get Free Quote
              </a>
              <Link href="#portfolio">
                <button className="border border-gray-300 text-gray-700 px-4 py-2 rounded-full text-xs font-semibold hover:bg-gray-50 transition-colors font-[var(--font-outfit)] tracking-wide bg-white flex-1">
                  View Our Work
                </button>
              </Link>
            </div>

            {/* Bottom Tagline (removed on mobile as requested) */}
          </div>
        </div>

        {/* Desktop and Tablet view with simplified layout */}
        <div className="hidden md:block">
          <div className="max-w-6xl mx-auto py-2">
            {/* Content above globe */}
            <div className="text-center max-w-2xl mx-auto mb-2">
              <h1 className="font-[var(--font-outfit)] text-3xl md:text-4xl font-semibold leading-tight tracking-tight text-gray-900">
                Connecting your business to new opportunities
              </h1>
              <p className="mt-2 font-[var(--font-inter)] text-base text-gray-700">
                Global digital expertise for local growth
              </p>
            </div>
            
            {/* Central Globe */}
            <div className="flex items-center justify-center mb-2">
              <Globe />
            </div>
            
            {/* Description below globe */}
            <div className="text-center max-w-2xl mx-auto mb-2">
              <p className="font-[var(--font-inter)] text-base text-gray-700">
                We bring global digital expertise to small and medium businesses, attract more customers, increase sales, and compete with confidence.
              </p>
              
              {/* Pill Buttons */}
              <div className="mt-3 flex flex-wrap items-center justify-center gap-3">
                <button className="rounded-2xl border border-gray-200 bg-white px-4 py-3 text-xs font-semibold uppercase tracking-wide shadow-sm">Global Reach</button>
                <button className="rounded-2xl border border-gray-200 bg-white px-4 py-3 text-xs font-semibold uppercase tracking-wide shadow-sm">Local Impact</button>
                <button className="rounded-2xl border border-gray-200 bg-white px-4 py-3 text-xs font-semibold uppercase tracking-wide shadow-sm">Proven Results</button>
              </div>
            </div>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row justify-center gap-4 mt-4">
              <a href="#contact" className="bg-black text-white px-6 py-3 rounded-full text-sm md:text-base font-semibold hover:bg-gray-800 transition-colors font-[var(--font-outfit)] tracking-wide w-full sm:w-auto text-center">
                Get Free Quote
              </a>
              <Link href="#portfolio">
                <button className="border border-gray-300 text-gray-700 px-6 py-3 rounded-full text-sm md:text-base font-semibold hover:bg-gray-50 transition-colors font-[var(--font-outfit)] tracking-wide bg-white w-full sm:w-auto">
                  View Our Work
                </button>
              </Link>
            </div>
          </div>
        </div>

          {/* Bottom Left Heading moved out to page-level for baseline alignment */}

      </main>

      {/* About Section */}
      <AboutSection />

      {/* Services Section */}
      <ServicesSection />

      {/* Portfolio Section */}
      <section id="portfolio">
        <PortfolioSection />
      </section>
      


      {/* Contact Section */}
      <ContactSection />

      {/* Footer Section */}
      <Footer />
    </div>
  );
}