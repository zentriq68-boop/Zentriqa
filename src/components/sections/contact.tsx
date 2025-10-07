'use client';
import React from 'react';
import { motion } from 'motion/react';
import { Mail, Phone } from 'lucide-react';
import { FaFacebook, FaTwitter, FaInstagram, FaWhatsapp } from 'react-icons/fa';

export default function ContactSection() {
  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 font-[var(--font-outfit)]">
            Get in Touch
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto font-[var(--font-inter)]">
            Ready to transform your digital presence? Let's discuss how we can help your 
            business grow and succeed in the digital landscape.
          </p>
        </motion.div>

        {/* Contact Details */}
        <div className="grid md:grid-cols-2 gap-8 mb-16 max-w-2xl mx-auto">
          {/* Email */}
          <motion.a
            href="mailto:zentriq68@gmail.com"
            className="flex flex-col items-center p-4 transition-all duration-300"
            whileHover={{ y: -2 }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mb-4">
              <Mail className="w-6 h-6 text-gray-600" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2 font-[var(--font-outfit)]">Email</h3>
            <p className="text-gray-600 font-[var(--font-inter)]">zentriq68@gmail.com</p>
          </motion.a>

          {/* Phone */}
          <motion.a
            href="tel:+27608179852"
            className="flex flex-col items-center p-4 transition-all duration-300"
            whileHover={{ y: -2 }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mb-4">
              <Phone className="w-6 h-6 text-gray-600" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2 font-[var(--font-outfit)]">Phone</h3>
            <p className="text-gray-600 font-[var(--font-inter)]">060 817 9852</p>
          </motion.a>
        </div>

        {/* Follow Us Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <h3 className="text-lg font-semibold text-gray-900 mb-6 font-[var(--font-outfit)]">
            Follow Us
          </h3>
          <div className="flex justify-center space-x-6">
            <motion.a
              href="https://www.facebook.com/share/17PiUbDxFq/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaFacebook className="w-5 h-5 text-gray-600" />
            </motion.a>
            <motion.a
              href="https://x.com/_Zentriq_?t=PobBl-A5Exh55ULwOlETcA&s=09"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaTwitter className="w-5 h-5 text-gray-600" />
            </motion.a>
            <motion.a
              href="https://www.instagram.com/_zentriq_?igsh=bHYyemZ5d2hvdHU1"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaInstagram className="w-5 h-5 text-gray-600" />
            </motion.a>
            <motion.a
              href="https://wa.me/27608179852"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaWhatsapp className="w-5 h-5 text-gray-600" />
            </motion.a>
          </div>
        </motion.div>
      </div>

      {/* Floating WhatsApp Button */}
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
        className="fixed bottom-6 right-6 z-50"
      >
        <motion.a
          href="https://wa.me/27608179852"
          target="_blank"
          rel="noopener noreferrer"
          className="w-14 h-14 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center group"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          aria-label="Contact us on WhatsApp"
        >
          <FaWhatsapp className="w-7 h-7 group-hover:scale-110 transition-transform" />
        </motion.a>
      </motion.div>
    </section>
  );
}