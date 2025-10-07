"use client";
import React from "react";
import Link from "next/link";
import { ThreeDPhotoCarousel } from "@/components/ui/3d-carousel";

export default function PortfolioSection() {
  return (
    <section id="portfolio" className="py-8 md:py-10 lg:py-12 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-6 md:mb-8 lg:mb-10">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-2">Our Portfolio</h2>
          <p className="text-gray-600 text-sm md:text-base lg:text-lg max-w-2xl mx-auto">
            Discover our latest projects and creative solutions
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          {/* Replace curved image arc with 3D photo carousel */}
          <ThreeDPhotoCarousel />

          {/* Enhanced CTA Section */}
          <div className="mt-8 md:mt-10 text-center">
            <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">
              Inspired by Our Work?
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Let's create something amazing for your business. Every project starts with a conversation.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/portfolio">
                <button className="px-6 py-3 border-2 border-gray-300 text-gray-700 rounded-full hover:bg-gray-50 transition-all duration-200">
                  View All Projects
                </button>
              </Link>
              <a href="#contact" className="px-6 py-3 rounded-full bg-black text-white hover:bg-gray-800 transition-all duration-200">
                Start Your Project
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}