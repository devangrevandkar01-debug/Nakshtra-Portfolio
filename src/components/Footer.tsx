import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Mail, Phone, MapPin, Linkedin } from 'lucide-react';
import { profileData } from '../data/profile';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#181615] text-[#FAF8F5] pt-16 pb-12 border-t border-[#2C2927]">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-16 border-b border-[#2C2927]">
          {/* Brand lockup */}
          <div className="md:col-span-5 space-y-4">
            <span className="font-serif text-2xl md:text-3xl font-normal tracking-tight text-white block">
              NAKSHATRA PACHPUND
            </span>
            <p className="text-xs uppercase tracking-widest text-[#A8A29E] font-medium">
              Marketing Strategist · Brand Strategy · Digital Marketing · Consumer Insights
            </p>
            <p className="text-sm text-[#A8A29E] max-w-sm leading-relaxed pt-2">
              "Understand the audience. Find the insight. Build the strategy. Create the connection."
            </p>
            <div className="pt-2">
              <a
                href={profileData.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs uppercase tracking-wider text-[#FAF8F5] hover:text-[#D97706] transition-colors py-1"
              >
                <Linkedin className="w-4 h-4 text-[#D97706]" />
                <span>Connect on LinkedIn (2,000+ Network)</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs uppercase tracking-widest text-[#78716C] font-semibold">
              Exploration
            </h4>
            <ul className="space-y-2.5 text-sm text-[#D6D3D1]">
              <li>
                <Link to="/" className="hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-white transition-colors">
                  About Philosophy
                </Link>
              </li>
              <li>
                <Link to="/experience" className="hover:text-white transition-colors">
                  Professional Experience
                </Link>
              </li>
              <li>
                <Link to="/case-studies" className="hover:text-white transition-colors">
                  Case Studies &amp; Research
                </Link>
              </li>
              <li>
                <Link to="/skills" className="hover:text-white transition-colors">
                  Skills &amp; Strategy Framework
                </Link>
              </li>
              <li>
                <Link to="/certifications" className="hover:text-white transition-colors">
                  Certifications &amp; Education
                </Link>
              </li>
              <li>
                <Link to="/personal-brand" className="hover:text-white transition-colors">
                  Personal Brand &amp; LinkedIn
                </Link>
              </li>
            </ul>
          </div>

          {/* Direct Contact Details */}
          <div className="md:col-span-4 space-y-4">
            <h4 className="text-xs uppercase tracking-widest text-[#78716C] font-semibold">
              Direct Contact
            </h4>
            <ul className="space-y-3 text-sm text-[#D6D3D1]">
              <li className="flex items-start gap-3">
                <Mail className="w-4 h-4 text-[#A8A29E] mt-0.5 shrink-0" />
                <a
                  href={`mailto:${profileData.email}`}
                  className="hover:text-white transition-colors"
                >
                  {profileData.email}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-[#A8A29E] mt-0.5 shrink-0" />
                <a
                  href={`tel:${profileData.phone}`}
                  className="hover:text-white transition-colors"
                >
                  {profileData.phone}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#A8A29E] mt-0.5 shrink-0" />
                <span>{profileData.location}</span>
              </li>
            </ul>

            <div className="pt-2">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-4 py-2.5 bg-[#FAF8F5] text-[#181615] text-xs font-semibold uppercase tracking-wider hover:bg-[#EBE5DE] transition-colors"
              >
                <span>Start a Conversation</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-[#78716C] gap-4">
          <p>© 2026 Nakshatra Jaysing Pachpund. All rights reserved.</p>
          <p className="tracking-wide">
            Strategy · Brand Positioning · Consumer Insights · Digital Execution
          </p>
        </div>
      </div>
    </footer>
  );
};
