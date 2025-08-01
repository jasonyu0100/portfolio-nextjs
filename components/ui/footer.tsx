import { Github, Linkedin, Mail, Phone, MapPin } from "lucide-react";
import { personalInfo, socialLinks } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">Jason Yu</h3>
            <p className="text-gray-400">Full-Stack Software Engineer</p>
          </div>

          <div>
            <h4 className="font-semibold mb-3">Contact</h4>
            <div className="space-y-2">
              <a
                href={`mailto:${personalInfo.email}`}
                className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
              >
                <Mail size={16} />
                {personalInfo.email}
              </a>
              <p className="flex items-center gap-2 text-gray-400">
                <Phone size={16} />
                {personalInfo.phone}
              </p>
              <p className="flex items-center gap-2 text-gray-400">
                <MapPin size={16} />
                {personalInfo.location}
              </p>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-3">Connect</h4>
            <div className="flex gap-4">
              <a
                href={socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="GitHub"
              >
                <Github size={24} />
              </a>
              <a
                href={socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={24} />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Jason Yu. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}