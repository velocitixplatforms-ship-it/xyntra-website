import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Globe, Linkedin, Facebook, Twitter } from 'lucide-react';
import { COMPANY_DETAILS, NAVBAR_LINKS } from '../constants';
import CertificationsModal from './CertificationsModal';

export default function Footer() {
  const [isCertModalOpen, setIsCertModalOpen] = useState(false);

  return (
    <footer className="h-14 bg-slate-100 border-t border-slate-200 flex items-center shrink-0 font-medium">
      <div className="section-container w-full flex items-center justify-between text-[11px] text-slate-500 uppercase tracking-wider">
        <div className="flex gap-8">
          <span className="hidden sm:inline">GLOBAL EXPORT NETWORK</span>
          <span className="hidden sm:inline">QUALITY ASSURED</span>
          <span className="hidden sm:inline">RELIABLE SUPPLY CHAIN</span>
        </div>
        <div className="flex gap-6 items-center">
          <button 
            onClick={() => setIsCertModalOpen(true)}
            className="hover:text-brand-600 transition-colors cursor-pointer"
          >
            CERTIFICATIONS
          </button>
          <a href="#" className="hover:text-brand-600 transition-colors">PRIVACY POLICY</a>
          <span className="hidden lg:inline">&copy; {new Date().getFullYear()} XYNTRA LIFESCIENCES PVT LTD</span>
        </div>
      </div>
      <CertificationsModal 
        isOpen={isCertModalOpen} 
        onClose={() => setIsCertModalOpen(false)} 
      />
    </footer>
  );
}
