import React from 'react';
import { Facebook, Twitter, Instagram, Youtube } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#002C5F] text-white py-8">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center space-y-6">
          
          {/* Navigation Links - Evenly Spaced */}
          <nav className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
            <a 
              href="#about" 
              className="text-white hover:text-gray-300 transition-colors duration-200 uppercase font-medium tracking-wide text-sm md:text-base"
            >
              À PROPOS
            </a>
            <a 
              href="#platform" 
              className="text-white hover:text-gray-300 transition-colors duration-200 uppercase font-medium tracking-wide text-sm md:text-base"
            >
              PLATEFORME
            </a>
            <a 
              href="#endorsements" 
              className="text-white hover:text-gray-300 transition-colors duration-200 uppercase font-medium tracking-wide text-sm md:text-base"
            >
              ENDORSEMENTS
            </a>
            <a 
              href="#press" 
              className="text-white hover:text-gray-300 transition-colors duration-200 uppercase font-medium tracking-wide text-sm md:text-base"
            >
              PRESSE
            </a>
            <a 
              href="#volunteer" 
              className="text-white hover:text-gray-300 transition-colors duration-200 uppercase font-medium tracking-wide text-sm md:text-base"
            >
              BÉNÉVOLE
            </a>
          </nav>

          {/* Social Icons Placeholders */}
          <div className="flex items-center space-x-6">
            <a 
              href="#" 
              className="text-white hover:text-gray-300 transition-colors duration-200"
              aria-label="Facebook"
            >
              <Facebook size={24} />
            </a>
            <a 
              href="#" 
              className="text-white hover:text-gray-300 transition-colors duration-200"
              aria-label="Twitter"
            >
              <Twitter size={24} />
            </a>
            <a 
              href="#" 
              className="text-white hover:text-gray-300 transition-colors duration-200"
              aria-label="Instagram"
            >
              <Instagram size={24} />
            </a>
            <a 
              href="#" 
              className="text-white hover:text-gray-300 transition-colors duration-200"
              aria-label="YouTube"
            >
              <Youtube size={24} />
            </a>
          </div>

          {/* Divider Line */}
          <div className="w-full max-w-4xl border-t border-white/20"></div>

          {/* Centered Copyright */}
          <div className="text-center text-white/80 text-sm">
            <p className="uppercase tracking-wide">
              © 2024 ZOHRAN MAMDANI FOR MAYOR. ALL RIGHTS RESERVED.
            </p>
            <p className="mt-1 text-xs text-white/60">
              Paid for by Zohran Mamdani for Mayor
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;