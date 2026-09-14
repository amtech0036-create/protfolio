import { Linkedin, Facebook, Github, Mail } from "lucide-react";
import { profile } from "../data/profile";

const socialLinks = [
  { icon: Linkedin, href: `https://${profile.linkedin}`, label: "LinkedIn" },
  { icon: Facebook, href: `https://${profile.facebook}`, label: "Facebook" },
  { icon: Mail, href: `mailto:${profile.email}`, label: "Email" },
];

export default function Footer() {
  return (
    <footer className="bg-gray-50 dark:bg-gray-900/50 border-t border-gray-200/50 dark:border-gray-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center">
          {/* Name */}
          <a
            href="#home"
            className="inline-block font-bold text-xl text-gray-900 dark:text-white hover:text-primary-600 dark:hover:text-primary-400 transition-colors mb-2"
          >
            {profile.name.split(" ")[0]}
            <span className="text-primary-600 dark:text-primary-400">.</span>
          </a>

          {/* Title */}
          <p className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-1">
            ERP Software Developer | Web Developer
          </p>
          <p className="text-sm text-gray-400 dark:text-gray-500 mb-6">
            Building practical technology solutions for real-world businesses.
          </p>

          {/* Social Links */}
          <div className="flex items-center justify-center gap-3 mb-8">
            {socialLinks.map((social) => {
              const Icon = social.icon;
              return (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-lg text-gray-400 dark:text-gray-500 hover:text-primary-600 dark:hover:text-primary-400 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                  aria-label={social.label}
                >
                  <Icon size={18} />
                </a>
              );
            })}
          </div>

          {/* Copyright */}
          <p className="text-xs text-gray-400 dark:text-gray-500">
            &copy; {new Date().getFullYear()} {profile.name}. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
