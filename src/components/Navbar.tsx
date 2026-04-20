import { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { NAVBAR_LINKS } from '../constants';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled 
          ? 'bg-white/80 backdrop-blur-md shadow-lg shadow-slate-200/20 py-3' 
          : 'bg-white/50 backdrop-blur-sm py-5'
      }`}
    >
      <div className="section-container flex items-center justify-between">
        <Link to="/" className="flex items-center space-x-3 group">
          <div className="w-10 h-10 bg-brand-600 rounded-xl flex items-center justify-center text-white font-bold text-xl transition-transform group-hover:scale-110">X</div>
          <div className="flex flex-col">
            <span className="font-bold text-lg tracking-tight leading-none text-slate-800">XYNTRA <span className="text-brand-600">LIFESCIENCES</span></span>
            <span className="text-[10px] uppercase tracking-widest text-slate-400 font-black">Global Trade</span>
          </div>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          <div className="flex space-x-8 mr-8">
            {NAVBAR_LINKS.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className={`text-[11px] font-black uppercase tracking-[0.2em] transition-all hover:text-brand-600 relative overflow-hidden group ${
                  location.pathname === link.href ? 'text-brand-600' : 'text-slate-500'
                }`}
              >
                {link.label}
                <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-brand-600 transition-transform duration-300 ${location.pathname === link.href ? 'translate-x-0' : '-translate-x-full group-hover:translate-x-0'}`} />
              </Link>
            ))}
          </div>
          
          <div className="hidden lg:flex items-center gap-8">
            <Link
              to="/contact"
              className="bg-slate-900 text-white px-8 py-3 rounded-xl font-black text-[10px] uppercase tracking-[0.2em] hover:bg-brand-600 transition-all shadow-xl shadow-slate-200/10 hover:shadow-brand-500/20"
            >
              Get Started
            </Link>
          </div>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 text-brand-900 hover:text-brand-600 transition-colors"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-gray-100 overflow-hidden"
          >
            <div className="section-container py-4 flex flex-col space-y-4">
              {NAVBAR_LINKS.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  className={`text-base font-medium py-2 ${
                    location.pathname === link.href ? 'text-brand-600' : 'text-gray-800'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                to="/contact"
                className="bg-brand-600 text-white px-5 py-3 rounded-lg text-center font-semibold hover:bg-brand-700 transition-colors"
              >
                Inquiry Now
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
