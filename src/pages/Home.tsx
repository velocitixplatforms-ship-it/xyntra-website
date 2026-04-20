import { motion } from 'motion/react';
import { ChevronRight, ShieldCheck, Globe, Truck, Award, FlaskConical, HeartPulse, Sparkles, Sprout } from 'lucide-react';
import { Link } from 'react-router-dom';
import { PRODUCTS, COMPANY_DETAILS } from '../constants';

export default function Home() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="flex flex-col min-h-screen pt-24 bg-white overflow-hidden">
      {/* Sleek Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center pt-20">
        {/* Abstract Background Elements */}
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-brand-50 rounded-full blur-[120px] opacity-60 mix-blend-multiply animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-brand-100 rounded-full blur-[100px] opacity-40 mix-blend-multiply"></div>
        
        <div className="section-container relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-4xl mx-auto space-y-10"
          >
            <div className="inline-flex items-center space-x-2 px-4 py-2 bg-slate-50 border border-slate-100 rounded-full shadow-sm">
              <Sparkles className="w-4 h-4 text-brand-600" />
              <span className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-500">Innovation in Global Healthcare</span>
            </div>
            
            <h1 className="text-6xl md:text-8xl font-black font-display text-slate-900 leading-[0.9] tracking-tighter">
              Global Healthcare <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-600 to-brand-400">Redefined.</span>
            </h1>
            
            <p className="text-xl text-slate-500 leading-relaxed max-w-2xl mx-auto font-medium">
              Xyntra Lifesciences is your premier global trade partner for high-impact pharmaceutical, nutraceutical, and wellness solutions.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-6">
              <Link
                to="/products"
                className="w-full sm:w-auto px-12 py-5 bg-slate-900 text-white font-black text-xs uppercase tracking-[0.2em] rounded-2xl hover:bg-brand-600 transition-all shadow-2xl shadow-slate-200 hover:shadow-brand-500/40"
              >
                Browse Portfolio
              </Link>
              <Link
                to="/contact"
                className="w-full sm:w-auto px-12 py-5 bg-white border border-slate-200 text-slate-800 font-black text-xs uppercase tracking-[0.2em] rounded-2xl hover:bg-slate-50 transition-all group"
              >
                Global Trade Desk <ChevronRight className="inline-block ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </motion.div>
          
          {/* Floating Hero Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="mt-24 relative max-w-5xl mx-auto"
          >
            <div className="aspect-[21/9] rounded-[3rem] overflow-hidden shadow-[0_40px_100px_rgba(0,0,0,0.1)] border border-white/20">
              <img
                src="https://picsum.photos/seed/healthcare-sleek/1200/600"
                alt="Healthcare Excellence"
                className="w-full h-full object-cover grayscale-[0.2] hover:grayscale-0 transition-all duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent"></div>
            </div>
            {/* Stats Overlay Cards */}
            <div className="absolute -bottom-10 -left-10 hidden lg:block">
              <div className="brand-card p-8 bg-white/80 backdrop-blur-md">
                <p className="text-4xl font-black text-slate-900 leading-none">20+</p>
                <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 mt-2">Active Regions</p>
              </div>
            </div>
            <div className="absolute -top-10 -right-10 hidden lg:block">
              <div className="brand-card p-8 bg-white/80 backdrop-blur-md">
                <Award className="w-8 h-8 text-brand-600 mb-2" />
                <p className="text-xs font-black uppercase tracking-widest text-slate-900">Certified Excellence</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Trust Bar - Minimalist */}
      <section className="py-24 border-b border-slate-100 bg-slate-50/50">
        <div className="section-container">
          <p className="text-[10px] font-black uppercase tracking-[0.4em] text-center text-slate-400 mb-12">Authorized Global Standards</p>
          <div className="flex flex-wrap justify-center items-center gap-16 md:gap-24 opacity-40 hover:opacity-100 transition-opacity duration-500">
             <div className="flex flex-col items-center gap-4">
               <ShieldCheck className="w-10 h-10 text-slate-900" />
               <span className="font-black uppercase tracking-widest text-[9px]">GMP Certified</span>
             </div>
             <div className="flex flex-col items-center gap-4">
               <Award className="w-10 h-10 text-slate-900" />
               <span className="font-black uppercase tracking-widest text-[9px]">ISO 9001:2015</span>
             </div>
             <div className="flex flex-col items-center gap-4">
               <Truck className="w-10 h-10 text-slate-900" />
               <span className="font-black uppercase tracking-widest text-[9px]">GDP Compliant</span>
             </div>
             <div className="flex flex-col items-center gap-4">
               <FlaskConical className="w-10 h-10 text-slate-900" />
               <span className="font-black uppercase tracking-widest text-[9px]">USP/BP Validated</span>
             </div>
          </div>
        </div>
      </section>

      {/* Product Segments Showcase */}
      <section className="py-32 section-container">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="space-y-4">
            <h2 className="text-xs uppercase font-black text-brand-600 tracking-[0.3em]">Core Portfolio</h2>
            <h3 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tighter">Diversified Global <br/>Healthcare Catalog</h3>
          </div>
          <p className="text-slate-500 max-w-sm text-sm font-medium leading-relaxed mb-1">
            From critical life-saving pharmaceuticals to premium cosmetic formulations, our portfolio covers the full spectrum of modern wellness.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {PRODUCTS.map((product, idx) => {
             const icons = [HeartPulse, FlaskConical, Sprout, Sparkles];
             const Icon = icons[idx % icons.length];
             return (
              <motion.div
                key={idx}
                whileHover={{ y: -10 }}
                className="brand-card group p-10 flex flex-col h-full border-slate-100 hover:border-brand-100 cursor-pointer"
              >
                <div className="w-16 h-16 bg-slate-50 rounded-3xl flex items-center justify-center text-slate-900 mb-8 group-hover:bg-brand-600 group-hover:text-white transition-all duration-500 shadow-sm">
                  <Icon className="w-8 h-8" />
                </div>
                <h4 className="text-2xl font-black text-slate-900 mb-4 tracking-tight group-hover:text-brand-600 transition-colors">{product.category}</h4>
                <p className="text-sm text-slate-500 leading-relaxed flex-1">{product.description}</p>
                <div className="mt-8 pt-8 border-t border-slate-50 flex items-center justify-between">
                   <Link to="/products" className="text-[10px] font-black uppercase tracking-widest text-slate-400 group-hover:text-brand-600 transition-colors">Explore</Link>
                   <ChevronRight className="w-4 h-4 text-slate-300 group-hover:text-brand-600 transition-all opacity-0 group-hover:opacity-100" />
                </div>
              </motion.div>
             );
          })}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 section-container">
        <div className="bg-slate-900 rounded-[4rem] p-16 md:p-24 relative overflow-hidden text-center shadow-3xl">
          <div className="absolute top-0 right-0 w-96 h-96 bg-brand-600/20 rounded-full blur-[100px]"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-400/10 rounded-full blur-[100px]"></div>
          
          <div className="relative z-10 max-w-3xl mx-auto space-y-10">
            <h2 className="text-4xl md:text-6xl font-black text-white leading-none tracking-tighter">Ready to Expand Your <br/><span className="text-brand-500">Global Horizon?</span></h2>
            <p className="text-lg text-slate-400 font-medium leading-relaxed">
              Join our network of elite distribution partners and experience a seamless trade relationship built on compliance, trust, and shared growth.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-6">
              <Link
                to="/contact"
                className="w-full sm:w-auto px-12 py-5 bg-brand-600 text-white font-black text-xs uppercase tracking-[0.2em] rounded-2xl hover:bg-white hover:text-slate-900 transition-all shadow-xl shadow-brand-600/20"
              >
                Inquiry Trading Desk
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
