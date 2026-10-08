import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ArrowUpRight, FileText } from 'lucide-react';
import { profileData } from '../data/profile';

interface NavbarProps {
  onOpenResume: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenResume }) => {
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Experience', path: '/experience' },
    { name: 'Case Studies', path: '/case-studies' },
    { name: 'Skills', path: '/skills' },
    { name: 'Certifications', path: '/certifications' },
    { name: 'Personal Brand', path: '/personal-brand' },
    { name: 'Contact', path: '/contact' },
  ];

  const isActive = (path: string) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname.startsWith(path);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#FAF8F5]/90 backdrop-blur-md border-b border-[#1C1917]/10 py-3 shadow-[0_4px_20px_-10px_rgba(28,25,23,0.05)]'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10 flex items-center justify-between">
        {/* Zone 1: Single text element wordmark in display face */}
        <Link
          to="/"
          className="font-serif text-lg md:text-xl font-semibold tracking-tight text-[#1C1917] hover:text-[#8B2616] transition-colors"
        >
          NAKSHATRA PACHPUND
        </Link>

        {/* Zone 2: Clean text navigation links with subtle underline */}
        <nav className="hidden lg:flex items-center gap-7 text-xs tracking-wider uppercase font-medium text-[#57534E]">
          {navLinks.map((link) => {
            const active = isActive(link.path);
            return (
              <Link
                key={link.path}
                to={link.path}
                className={`relative py-1 transition-colors hover:text-[#1C1917] ${
                  active ? 'text-[#8B2616] font-semibold' : ''
                }`}
              >
                {link.name}
                {active && (
                  <span className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-[#8B2616]" />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Zone 3: Primary action & Resume trigger */}
        <div className="hidden sm:flex items-center gap-4">
          <button
            onClick={onOpenResume}
            className="flex items-center gap-1.5 text-xs uppercase tracking-wider font-medium text-[#57534E] hover:text-[#1C1917] transition-colors py-2 px-1 cursor-pointer"
            title="View Professional Resume"
          >
            <FileText className="w-3.5 h-3.5" />
            <span>Resume</span>
          </button>

          <Link
            to="/contact"
            className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-white bg-[#1C1917] hover:bg-[#8B2616] transition-colors duration-200 whitespace-nowrap rounded-sm"
          >
            <span>Let's Collaborate</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* Mobile menu button */}
        <div className="flex sm:hidden items-center gap-2">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-[#1C1917] hover:text-[#8B2616] focus:outline-none"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#FAF8F5] border-b border-[#1C1917]/10 px-6 py-6 shadow-xl animate-in fade-in slide-in-from-top-2 duration-200">
          <nav className="flex flex-col gap-4 text-sm font-medium text-[#57534E]">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`py-1.5 uppercase text-xs tracking-wider transition-colors hover:text-[#1C1917] ${
                  isActive(link.path) ? 'text-[#8B2616] font-semibold' : ''
                }`}
              >
                {link.name}
              </Link>
            ))}
            <div className="pt-4 border-t border-[#1C1917]/10 flex flex-col gap-3">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenResume();
                }}
                className="flex items-center justify-center gap-2 py-2.5 text-xs uppercase tracking-wider font-semibold border border-[#1C1917]/20 text-[#1C1917] hover:bg-[#F3EFEA]"
              >
                <FileText className="w-4 h-4" />
                <span>View Full Resume</span>
              </button>
              <Link
                to="/contact"
                className="flex items-center justify-center gap-2 py-2.5 text-xs uppercase tracking-wider font-semibold bg-[#1C1917] text-white hover:bg-[#8B2616]"
              >
                <span>Let's Collaborate</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
