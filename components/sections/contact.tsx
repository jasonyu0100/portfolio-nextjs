"use client";

import { motion } from "framer-motion";
import { personalInfo, socialLinks } from "@/lib/constants";
import Section from "@/components/ui/section";

export default function Contact() {
  return (
    <Section
      id="contact"
      title="Get in Touch"
      subtitle="Let's discuss opportunities and collaborations"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto"
      >
        <div className="bg-white rounded-3xl p-10 shadow-2xl border border-gray-200 text-center max-w-2xl mx-auto hover:shadow-2xl transition-all duration-300">
          <h3 className="text-3xl font-bold text-gray-900 mb-2">
            Jason Yu
          </h3>
          <p className="text-xl text-gray-600 mb-8 font-medium">
            Full-Stack Software Engineer
          </p>
          
          <div className="space-y-3 mb-8">
            <a
              href={`mailto:${personalInfo.email}`}
              className="block text-lg text-blue-600 hover:text-blue-700 transition-colors font-semibold"
            >
              {personalInfo.email}
            </a>
            <p className="text-gray-600 text-lg">
              {personalInfo.phone}
            </p>
            <p className="text-gray-600 text-lg">
              {personalInfo.location}
            </p>
          </div>

          <div className="flex justify-center gap-4 mb-8">
            <a
              href={socialLinks.calendly}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold text-lg shadow-lg hover:scale-105 hover:shadow-xl transition-all duration-300"
            >
              Schedule a Meeting
            </a>
            <a
              href={socialLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-gray-900 px-8 py-4 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200"
            >
              LinkedIn
            </a>
          </div>

          <p className="text-gray-600 text-lg leading-relaxed">
            Open to discussing new opportunities and collaborations
          </p>
        </div>
      </motion.div>
    </Section>
  );
}