"use client";

import { motion } from "framer-motion";
import { skills } from "@/lib/constants";
import Section from "@/components/ui/section";

export default function Skills() {
  const skillCategories = [
    { title: "Languages", items: skills.languages, color: "blue" },
    { title: "Frontend", items: skills.frontend, color: "green" },
    { title: "Backend", items: skills.backend, color: "purple" },
    { title: "Tools & DevOps", items: skills.tools, color: "orange" },
    { title: "Concepts", items: skills.concepts, color: "pink" },
  ];

  return (
    <Section
      id="skills"
      title="Technical Skills"
      subtitle="Technologies and tools I work with"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {skillCategories.map((category, index) => (
          <motion.div
            key={category.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl p-5 hover:bg-white/20 transition-all shadow-xl"
          >
            <h3 className="text-lg font-bold text-white mb-3">
              {category.title}
            </h3>
            <div className="flex flex-wrap gap-1.5">
              {category.items.map((skill) => (
                <span
                  key={skill}
                  className="px-2 py-1 bg-white/20 text-white/90 rounded-full text-xs font-medium"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}