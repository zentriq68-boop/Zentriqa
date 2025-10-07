'use client';
import React from 'react';
import { motion } from 'motion/react';
import Link from 'next/link';

export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-white">
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
            About Zentriq
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto font-[var(--font-inter)]">
            We are a passionate team of digital innovators, dedicated to transforming 
            businesses through cutting-edge technology and creative solutions.
          </p>
        </motion.div>

        {/* Story Section */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 font-[var(--font-outfit)]">
              Our Story
            </h3>
            <p className="text-gray-600 mb-4 font-[var(--font-inter)]">
              Founded with a vision to bridge the gap between traditional business and 
              digital innovation, Zentriq has grown from a small startup to a trusted 
              partner for businesses worldwide.
            </p>
            <p className="text-gray-600 font-[var(--font-inter)]">
              We believe that every business deserves a digital presence that not only 
              looks great but also drives real results. Our team combines technical 
              expertise with creative thinking to deliver solutions that exceed expectations.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8 h-64 flex items-center justify-center">
              <div className="text-center">
                <div className="text-4xl font-bold text-gray-900 mb-2 font-[var(--font-outfit)]">50+</div>
                <div className="text-gray-600 font-[var(--font-inter)]">Projects Completed</div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Mission Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 font-[var(--font-outfit)]">
            Our Mission
          </h3>
          <p className="text-lg text-gray-600 max-w-4xl mx-auto font-[var(--font-inter)]">
            To empower businesses with innovative digital solutions that drive growth, 
            enhance user experiences, and create lasting value in an ever-evolving 
            digital landscape.
          </p>
        </motion.div>

        {/* What Drives Us */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {[
            {
              title: "Innovation",
              description: "We stay ahead of the curve, embracing new technologies and methodologies to deliver cutting-edge solutions."
            },
            {
              title: "Quality",
              description: "Every project is crafted with meticulous attention to detail, ensuring the highest standards of excellence."
            },
            {
              title: "Partnership",
              description: "We work closely with our clients, building long-term relationships based on trust and mutual success."
            }
          ].map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center p-6 rounded-xl bg-gray-50 hover:bg-gray-100 transition-colors"
            >
              <h4 className="text-xl font-bold text-gray-900 mb-4 font-[var(--font-outfit)]">
                {value.title}
              </h4>
              <p className="text-gray-600 font-[var(--font-inter)]">
                {value.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 font-[var(--font-outfit)]">
            Ready to Start Your Journey?
          </h3>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto font-[var(--font-inter)]">
            Let's discuss how we can help transform your business with innovative 
            digital solutions.
          </p>
          <Link href="#contact">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-black text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-800 transition-colors font-[var(--font-inter)]"
            >
              Get in Touch
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}