import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Send, MessageSquare, Instagram, Facebook, Twitter, Linkedin } from 'lucide-react';
import { COMPANY_DETAILS } from '../constants';

export default function Contact() {
  const socialPlatforms = [
    { icon: Instagram, label: 'Instagram', href: COMPANY_DETAILS.social.instagram, color: 'hover:text-pink-600' },
    { icon: Facebook, label: 'Facebook', href: COMPANY_DETAILS.social.facebook, color: 'hover:text-blue-600' },
    { icon: Twitter, label: 'Twitter', href: COMPANY_DETAILS.social.twitter, color: 'hover:text-sky-500' },
    { icon: Linkedin, label: 'LinkedIn', href: COMPANY_DETAILS.social.linkedin, color: 'hover:text-blue-700' },
  ];

  return (
    <div className="pt-24 min-h-screen pb-24">
      {/* Header */}
      <section className="relative py-32 mb-16 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-slate-50/50 -z-10 blur-3xl rounded-full"></div>
        <div className="section-container text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="max-w-3xl mx-auto space-y-8"
          >
            <div className="inline-block px-4 py-1.5 bg-brand-50 text-brand-600 rounded-full text-[10px] font-black uppercase tracking-[0.3em]">
              Trade Desk
            </div>
            <h1 className="text-5xl md:text-7xl font-display font-black text-slate-900 leading-[0.95] tracking-tighter">
              Build a Growth <br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-600 to-brand-400">Partnership.</span>
            </h1>
            <p className="text-xl text-slate-500 leading-relaxed max-w-2xl mx-auto font-medium">
              Have questions about our products or interested in becoming a distribution partner? Get in touch with our global trade desk.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <div className="space-y-12">
            <div className="space-y-6">
              <h2 className="text-xs uppercase font-black text-slate-400 tracking-[0.3em]">Communication Channels</h2>
              <h3 className="text-3xl font-bold text-slate-800">Global Contact <br/>Points</h3>
            </div>

            <div className="space-y-6">
              <div className="flex items-start space-x-6 group brand-card p-6 border-slate-100 shadow-sm hover:border-brand-200 transition-all">
                <div className="w-14 h-14 bg-slate-50 rounded-xl flex items-center justify-center text-brand-600 group-hover:bg-brand-600 group-hover:text-white transition-colors">
                  <MapPin className="w-7 h-7" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-slate-800 mb-1">Corporate Office</h4>
                  <p className="text-sm text-slate-500 max-w-xs leading-relaxed">{COMPANY_DETAILS.address}</p>
                </div>
              </div>

              <div className="flex items-start space-x-6 group brand-card p-6 border-slate-100 shadow-sm hover:border-brand-200 transition-all">
                <div className="w-14 h-14 bg-slate-50 rounded-xl flex items-center justify-center text-brand-600 group-hover:bg-brand-600 group-hover:text-white transition-colors">
                  <Mail className="w-7 h-7" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-slate-800 mb-1">Email Us</h4>
                  <a href={`mailto:${COMPANY_DETAILS.email}`} className="text-sm text-slate-500 hover:text-brand-600 transition-colors">{COMPANY_DETAILS.email}</a>
                </div>
              </div>

              <div className="flex items-start space-x-6 group brand-card p-6 border-slate-100 shadow-sm hover:border-brand-200 transition-all">
                <div className="w-14 h-14 bg-slate-50 rounded-xl flex items-center justify-center text-brand-600 group-hover:bg-brand-600 group-hover:text-white transition-colors">
                  <Phone className="w-7 h-7" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-slate-800 mb-1">Call Us</h4>
                  <a href={`tel:${COMPANY_DETAILS.phone}`} className="text-sm text-slate-500 hover:text-brand-600 transition-colors uppercase font-mono">{COMPANY_DETAILS.phone}</a>
                </div>
              </div>
            </div>

            {/* Social Media Grid */}
            <div className="space-y-6">
              <h2 className="text-xs uppercase font-black text-slate-400 tracking-[0.3em]">Social Connect</h2>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {socialPlatforms.map((platform, idx) => (
                  <a
                    key={idx}
                    href={platform.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`brand-card p-6 flex flex-col items-center justify-center space-y-3 transition-all duration-300 group ${platform.color}`}
                  >
                    <div className="w-12 h-12 bg-slate-50 rounded-2xl flex items-center justify-center text-slate-400 group-hover:bg-current group-hover:text-white transition-all duration-300">
                      <platform.icon className="w-6 h-6" />
                    </div>
                    <span className="text-[10px] font-black uppercase tracking-widest text-slate-400 group-hover:text-current">
                      {platform.label}
                    </span>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Inquiry Form */}
          <div className="relative">
            <div className="brand-card p-10 md:p-12 shadow-2xl relative z-10 border-slate-200 h-full">
              <div className="mb-10">
                <h3 className="text-2xl font-display font-bold text-slate-800 mb-2">Trade Inquiry Form</h3>
                <p className="text-sm text-slate-500">Fill out the secure form below and our global trade experts will contact you within 24 business hours.</p>
              </div>

              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest pl-1">Exporter Name</label>
                    <input
                      type="text"
                      placeholder="Your Name"
                      className="w-full bg-slate-50 border-slate-200 rounded-xl px-5 py-4 focus:bg-white focus:ring-1 focus:ring-brand-600 focus:outline-none transition-all placeholder:text-slate-300 text-sm"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest pl-1">Company Entity</label>
                    <input
                      type="text"
                      placeholder="Company Name"
                      className="w-full bg-slate-50 border-slate-200 rounded-xl px-5 py-4 focus:bg-white focus:ring-1 focus:ring-brand-600 focus:outline-none transition-all placeholder:text-slate-300 text-sm"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest pl-1">Territory</label>
                    <input
                      type="text"
                      placeholder="Your Country"
                      className="w-full bg-slate-50 border-slate-200 rounded-xl px-5 py-4 focus:bg-white focus:ring-1 focus:ring-brand-600 focus:outline-none transition-all placeholder:text-slate-300 text-sm"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest pl-1">Official Email</label>
                    <input
                      type="email"
                      placeholder="Email Address"
                      className="w-full bg-slate-50 border-slate-200 rounded-xl px-5 py-4 focus:bg-white focus:ring-1 focus:ring-brand-600 focus:outline-none transition-all placeholder:text-slate-300 text-sm"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest pl-1">Requirement Details</label>
                  <textarea
                    placeholder="Describe your pharmaceutical or nutraceutical requirement..."
                    rows={5}
                    className="w-full bg-slate-50 border-slate-200 rounded-xl px-5 py-4 focus:bg-white focus:ring-1 focus:ring-brand-600 focus:outline-none transition-all placeholder:text-slate-300 text-sm resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-brand-900 text-white font-black text-xs uppercase tracking-widest py-6 rounded-2xl hover:bg-brand-800 transition-all shadow-xl flex items-center justify-center"
                >
                  Submit Inquiry <Send className="ml-3 w-4 h-4" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Global Partnership Strip */}
      <section className="py-12 bg-slate-100 mt-12 border-y border-slate-200">
        <div className="section-container flex flex-col md:flex-row items-center justify-between space-y-6 md:space-y-0 text-slate-800">
          <div className="flex items-center space-x-4">
            <div className="p-3 bg-white rounded-xl text-brand-600 shadow-sm border border-slate-200">
              <MessageSquare className="w-6 h-6" />
            </div>
            <div>
              <p className="font-bold text-lg">Prefer instant communication?</p>
              <p className="text-sm text-slate-500 font-medium">Our trade team is also available via WhatsApp Business desk.</p>
            </div>
          </div>
          <button className="bg-brand-900 text-white px-10 py-3 rounded-xl font-black text-xs uppercase tracking-widest hover:bg-brand-800 transition-all shadow-xl">
            WhatsApp Trade Desk
          </button>
        </div>
      </section>
    </div>
  );
}
