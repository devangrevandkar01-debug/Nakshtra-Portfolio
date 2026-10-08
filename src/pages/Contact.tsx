import React, { useState } from 'react';
import { Mail, Phone, MapPin, Linkedin, ArrowUpRight, Send, CheckCircle2, Copy, Check } from 'lucide-react';
import { profileData } from '../data/profile';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    projectType: 'Marketing Strategy',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const projectTypes = [
    'Marketing Strategy',
    'Brand Strategy',
    'Digital Marketing',
    'Social Media',
    'Market Research',
    'SEO',
    'Other',
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    setSubmitted(true);
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(profileData.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(profileData.phone);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2000);
  };

  return (
    <div className="pt-28 pb-20 space-y-16 max-w-7xl mx-auto px-6 md:px-10">
      {/* Header */}
      <section className="space-y-6 max-w-3xl border-b border-[#1C1917]/10 pb-12">
        <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-[#8B2616] font-semibold">
          <span>Get in Touch</span>
          <span className="text-[#A8A29E]">·</span>
          <span>Initiate Collaboration</span>
        </div>

        <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-normal tracking-tight text-[#1C1917] leading-[1.12]">
          Have a brand challenge?{' '}
          <span className="italic font-serif text-[#8B2616]">Let's talk.</span>
        </h1>

        <p className="text-base sm:text-lg text-[#57534E] leading-relaxed">
          Open to marketing opportunities, brand strategy projects, digital marketing collaborations, research projects, and meaningful conversations around consumer growth.
        </p>
      </section>

      {/* Main Grid: Contact Channels (Left) & Form (Right) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
        {/* Left Column: Direct Contact & Channels */}
        <div className="lg:col-span-5 space-y-8">
          <div className="p-6 bg-[#F4EFEB] border border-[#1C1917]/10 space-y-6">
            <span className="text-xs uppercase tracking-widest text-[#8B2616] font-semibold block border-b border-[#1C1917]/10 pb-2">
              Direct Communication Channels
            </span>

            {/* Email */}
            <div className="space-y-1">
              <span className="text-[11px] uppercase tracking-wider text-[#78716C] block">
                Email Inquiries
              </span>
              <div className="flex items-center justify-between gap-2">
                <a
                  href={`mailto:${profileData.email}`}
                  className="text-sm font-medium text-[#1C1917] hover:text-[#8B2616] transition-colors break-all"
                >
                  {profileData.email}
                </a>
                <button
                  onClick={handleCopyEmail}
                  className="p-1.5 text-[#57534E] hover:text-[#1C1917] transition-colors shrink-0"
                  title="Copy email address"
                >
                  {copiedEmail ? <Check className="w-4 h-4 text-green-600" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>
            </div>

            {/* Phone */}
            <div className="space-y-1 pt-2 border-t border-[#1C1917]/10">
              <span className="text-[11px] uppercase tracking-wider text-[#78716C] block">
                Direct Phone
              </span>
              <div className="flex items-center justify-between gap-2">
                <a
                  href={`tel:${profileData.phone}`}
                  className="text-sm font-medium text-[#1C1917] hover:text-[#8B2616] transition-colors"
                >
                  {profileData.phone}
                </a>
                <button
                  onClick={handleCopyPhone}
                  className="p-1.5 text-[#57534E] hover:text-[#1C1917] transition-colors shrink-0"
                  title="Copy phone number"
                >
                  {copiedPhone ? <Check className="w-4 h-4 text-green-600" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>
            </div>

            {/* Location */}
            <div className="space-y-1 pt-2 border-t border-[#1C1917]/10">
              <span className="text-[11px] uppercase tracking-wider text-[#78716C] block">
                Current Location
              </span>
              <div className="flex items-center gap-2 text-sm text-[#1C1917]">
                <MapPin className="w-4 h-4 text-[#8B2616] shrink-0" />
                <span>{profileData.location}</span>
              </div>
            </div>

            {/* LinkedIn Network */}
            <div className="space-y-1 pt-2 border-t border-[#1C1917]/10">
              <span className="text-[11px] uppercase tracking-wider text-[#78716C] block">
                Professional Network
              </span>
              <a
                href={profileData.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-[#8B2616] font-semibold hover:underline"
              >
                <Linkedin className="w-4 h-4" />
                <span>{profileData.linkedinDisplay}</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
              <p className="text-[11px] text-[#78716C] pt-1">
                2,000+ marketers, brand strategists &amp; founders
              </p>
            </div>
          </div>

          {/* Quick FAQ / Note */}
          <div className="p-6 bg-[#FAF8F5] border border-[#1C1917]/10 space-y-2">
            <h3 className="text-xs uppercase tracking-widest font-semibold text-[#1C1917]">
              Availability &amp; Response
            </h3>
            <p className="text-xs text-[#57534E] leading-relaxed">
              Typically responding within 24 to 48 hours for marketing internships, freelance consulting projects, and research partnerships.
            </p>
          </div>
        </div>

        {/* Right Column: Contact Form */}
        <div className="lg:col-span-7 bg-[#FAF8F5] border border-[#1C1917]/10 p-6 sm:p-10 shadow-sm">
          {submitted ? (
            <div className="py-12 text-center space-y-4 animate-in fade-in duration-300">
              <CheckCircle2 className="w-12 h-12 text-[#8B2616] mx-auto" />
              <h2 className="font-serif text-2xl font-normal text-[#1C1917]">
                Message Received
              </h2>
              <p className="text-sm text-[#57534E] max-w-md mx-auto leading-relaxed">
                Thank you for reaching out. Your inquiry has been documented, and I will be in touch promptly to discuss potential collaboration.
              </p>
              <div className="pt-4">
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({
                      name: '',
                      email: '',
                      company: '',
                      projectType: 'Marketing Strategy',
                      message: '',
                    });
                  }}
                  className="px-4 py-2 border border-[#1C1917]/20 text-xs uppercase tracking-wider font-semibold hover:bg-[#F4EFEB] transition-colors"
                >
                  Send Another Message
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="border-b border-[#1C1917]/10 pb-4">
                <h2 className="font-serif text-2xl font-medium text-[#1C1917]">
                  Send a Detailed Inquiry
                </h2>
                <p className="text-xs text-[#78716C] mt-1">
                  Fill out the parameters below to explore a strategic engagement.
                </p>
              </div>

              {/* Name */}
              <div className="space-y-1.5">
                <label
                  htmlFor="name"
                  className="block text-xs uppercase tracking-wider font-semibold text-[#1C1917]"
                >
                  Your Name <span className="text-[#8B2616]">*</span>
                </label>
                <input
                  id="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="e.g. Rahul Sharma"
                  className="w-full px-4 py-2.5 bg-white border border-[#1C1917]/15 text-sm text-[#1C1917] placeholder:text-[#A8A29E] focus:outline-none focus:border-[#8B2616] rounded-sm"
                />
              </div>

              {/* Email */}
              <div className="space-y-1.5">
                <label
                  htmlFor="email"
                  className="block text-xs uppercase tracking-wider font-semibold text-[#1C1917]"
                >
                  Email Address <span className="text-[#8B2616]">*</span>
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="e.g. rahul@company.com"
                  className="w-full px-4 py-2.5 bg-white border border-[#1C1917]/15 text-sm text-[#1C1917] placeholder:text-[#A8A29E] focus:outline-none focus:border-[#8B2616] rounded-sm"
                />
              </div>

              {/* Company / Organization */}
              <div className="space-y-1.5">
                <label
                  htmlFor="company"
                  className="block text-xs uppercase tracking-wider font-semibold text-[#1C1917]"
                >
                  Company / Organization
                </label>
                <input
                  id="company"
                  type="text"
                  value={formData.company}
                  onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  placeholder="e.g. Brand Studio / Startup Name"
                  className="w-full px-4 py-2.5 bg-white border border-[#1C1917]/15 text-sm text-[#1C1917] placeholder:text-[#A8A29E] focus:outline-none focus:border-[#8B2616] rounded-sm"
                />
              </div>

              {/* Project Type Dropdown */}
              <div className="space-y-1.5">
                <label
                  htmlFor="projectType"
                  className="block text-xs uppercase tracking-wider font-semibold text-[#1C1917]"
                >
                  Project Type
                </label>
                <select
                  id="projectType"
                  value={formData.projectType}
                  onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                  className="w-full px-4 py-2.5 bg-white border border-[#1C1917]/15 text-sm text-[#1C1917] focus:outline-none focus:border-[#8B2616] rounded-sm cursor-pointer"
                >
                  {projectTypes.map((type) => (
                    <option key={type} value={type}>
                      {type}
                    </option>
                  ))}
                </select>
              </div>

              {/* Message */}
              <div className="space-y-1.5">
                <label
                  htmlFor="message"
                  className="block text-xs uppercase tracking-wider font-semibold text-[#1C1917]"
                >
                  Project Scope &amp; Context <span className="text-[#8B2616]">*</span>
                </label>
                <textarea
                  id="message"
                  required
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Briefly describe your objectives, target audience, or the marketing challenge you are looking to address..."
                  className="w-full px-4 py-2.5 bg-white border border-[#1C1917]/15 text-sm text-[#1C1917] placeholder:text-[#A8A29E] focus:outline-none focus:border-[#8B2616] rounded-sm"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-[#1C1917] text-[#FAF8F5] text-xs uppercase tracking-widest font-semibold hover:bg-[#8B2616] transition-colors rounded-sm cursor-pointer shadow-sm"
              >
                <span>Send Message</span>
                <Send className="w-3.5 h-3.5" />
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
