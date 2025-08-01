"use client";

import { motion } from "framer-motion";
import { workExperience } from "@/lib/constants";
import Section from "@/components/ui/section";

export default function Experience() {
  return (
    <Section
      id="experience"
      title="Work Experience"
      subtitle="Building products at scale across different industries"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {workExperience.map((job, index) => (
          <motion.div
            key={job.company}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 shadow-lg group hover:scale-[1.02]"
          >
            <div className="mb-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                {job.position}
              </h3>
              <p className="text-xl text-blue-600 font-semibold mb-3">
                {job.company}
              </p>
              <p className="text-gray-600">
                {job.period} • {job.location}
              </p>
            </div>
            
            <ul className="space-y-3">
              {job.highlights.map((highlight, i) => (
                <li key={i} className="flex items-start">
                  <span className="text-blue-600 mr-3 mt-1 text-lg">→</span>
                  <span className="text-gray-700 leading-relaxed">{highlight}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}