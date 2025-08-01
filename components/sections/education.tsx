"use client";

import { motion } from "framer-motion";
import { GraduationCap, Award } from "lucide-react";
import { education } from "@/lib/constants";
import Section from "@/components/ui/section";

export default function Education() {
  return (
    <Section
      id="education"
      title="Education"
      subtitle="Academic journey and achievements"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {education.map((edu, index) => (
          <motion.div
            key={edu.institution}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 shadow-lg group hover:scale-[1.02]"
          >
            <div className="flex items-start gap-5 mb-6">
              <div className="p-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl">
                <GraduationCap className="text-white" size={28} />
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                  {edu.degree}
                </h3>
                <p className="text-xl text-blue-600 font-semibold mb-2">
                  {edu.institution}
                </p>
                <p className="text-gray-600">{edu.period}</p>
              </div>
            </div>

            {edu.highlights.length > 0 && (
              <div className="space-y-3">
                {edu.highlights.map((highlight, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <Award className="text-yellow-500 mt-1" size={18} />
                    <span className="text-gray-700 leading-relaxed">{highlight}</span>
                  </div>
                ))}
              </div>
            )}
          </motion.div>
        ))}
      </div>
    </Section>
  );
}