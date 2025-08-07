"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, ChevronDown, ChevronUp } from "lucide-react";
import { projects } from "@/lib/constants";
import Section from "@/components/ui/section";
import Image from "next/image";

export default function Projects() {
  const [expandedProject, setExpandedProject] = useState<string | null>(null);

  const toggleProject = (projectName: string) => {
    setExpandedProject(expandedProject === projectName ? null : projectName);
  };

  return (
    <Section
      id="projects"
      title="Featured Projects"
      subtitle="Innovative solutions built with modern technologies"
      className="max-w-7xl mx-auto"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={project.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl border border-gray-200 hover:shadow-xl transition-all duration-300 overflow-hidden shadow-lg group hover:scale-[1.02]"
          >
            {project.video && (
              <div className="relative bg-gradient-to-br from-blue-50 to-indigo-50 group-hover:from-blue-100 group-hover:to-indigo-100 transition-all duration-300">
                {project.video.includes('youtu') ? (
                  <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
                    <iframe
                      src={`https://www.youtube.com/embed/${project.video.split('/').pop()?.split('?')[0]}`}
                      className="absolute inset-0 w-full h-full"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  </div>
                ) : project.video.endsWith('.mp4') ? (
                  <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
                    <video
                      src={project.video}
                      className="absolute inset-0 w-full h-full object-cover"
                      controls
                      preload="metadata"
                    />
                  </div>
                ) : (
                  <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
                    <Image
                      src={project.video}
                      alt={project.name}
                      fill
                      className="absolute inset-0 object-contain p-6"
                    />
                  </div>
                )}
              </div>
            )}
            <div className="p-6">
              <div className="mb-4">
                <div className="flex items-start justify-between">
                  <h3 className="text-2xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                    {project.name}
                  </h3>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-blue-600 transition-colors"
                    aria-label={`Visit ${project.name}`}
                  >
                    <ExternalLink size={20} />
                  </a>
                </div>
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-gray-500 hover:text-blue-600 transition-colors mt-1 inline-block"
                  >
                    {project.link.replace('https://', '')}
                  </a>
                )}
              </div>

              <p className="text-gray-600 mb-4 leading-relaxed">{project.description}</p>

              <div className="flex flex-wrap gap-2 mb-6">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1.5 bg-gray-100 text-gray-700 rounded-lg text-sm font-medium hover:bg-gray-200 transition-colors"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <button
                onClick={() => toggleProject(project.name)}
                className="flex items-center gap-2 text-blue-600 hover:text-blue-700 transition-colors font-semibold"
              >
                {expandedProject === project.name ? "Show Less" : "Learn More"}
                {expandedProject === project.name ? (
                  <ChevronUp size={14} />
                ) : (
                  <ChevronDown size={14} />
                )}
              </button>

              <AnimatePresence>
                {expandedProject === project.name && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <ul className="mt-3 space-y-1">
                      {project.highlights.map((highlight, i) => (
                        <li key={i} className="flex items-start text-sm">
                          <span className="text-blue-600 mr-2">✓</span>
                          <span className="text-gray-700">{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}