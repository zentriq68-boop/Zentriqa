'use client';
import React from 'react';
import { motion } from 'motion/react';
import Link from 'next/link';
import { FeatureCarouselDemo } from '@/components/ui/feature-carousel';

export default function ServicesSection() {
  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 font-[var(--font-outfit)]">
            Our Services
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto font-[var(--font-inter)]">
            We offer comprehensive digital solutions to help your business thrive 
            in the modern digital landscape.
          </p>
        </motion.div>

        {/* Feature Carousel */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <FeatureCarouselDemo />
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 font-[var(--font-outfit)]">
            Ready to Transform Your Business?
          </h3>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto font-[var(--font-inter)]">
            Let's discuss your project and create a solution that drives real results 
            for your business.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="#pricing">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-50 transition-colors font-[var(--font-inter)]"
              >
                View Pricing
              </motion.button>
            </Link>
            <Link href="#contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-black text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-800 transition-colors font-[var(--font-inter)]"
              >
                Get Started
              </motion.button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}