import { motion } from 'motion/react';
import { Target, Eye, ShieldCheck, Globe, Users, Trophy, CheckCircle2 } from 'lucide-react';

export default function About() {
  return (
    <div className="pt-24 min-h-screen pb-24">
      {/* Brand Header */}
      <section className="relative py-32 mb-12 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-slate-50/50 -z-10 blur-3xl rounded-full"></div>
        <div className="section-container text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="max-w-3xl mx-auto space-y-8"
          >
            <div className="inline-block px-4 py-1.5 bg-brand-50 text-brand-600 rounded-full text-[10px] font-black uppercase tracking-[0.3em]">
              The Enterprise
            </div>
            <h1 className="text-5xl md:text-7xl font-display font-black text-slate-900 leading-[0.95] tracking-tighter">
              Clinical Quality & <br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-600 to-brand-400">Global Accessibility.</span>
            </h1>
            <p className="text-xl text-slate-500 leading-relaxed max-w-2xl mx-auto font-medium">
              Xyntra Lifesciences is a premier export partner delivering high-impact healthcare solutions to international markets.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Corporate Overview */}
      <section className="section-container mb-24">
        <div className="brand-card p-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="space-y-6">
                <p className="text-lg text-slate-600 leading-relaxed">
                  With a commitment to innovation and strict regulatory compliance, we bridge the gap between innovation and patient care across Asia, Africa, and Europe.
                </p>
                <div className="grid grid-cols-2 gap-8 pt-8 border-t border-slate-100">
                  <div className="space-y-2">
                    <h3 className="text-4xl font-display font-bold text-brand-600">50+</h3>
                    <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Global Partners</p>
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-4xl font-display font-bold text-brand-600">20+</h3>
                    <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Nations Served</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src="https://picsum.photos/seed/corporate-hq/800/600"
                  alt="Operations"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="bg-brand-900 overflow-hidden relative py-24 mb-24">
        <div className="section-container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="bg-brand-800/50 p-12 rounded-[2.5rem] border border-brand-700 relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:scale-110 transition-transform">
                <Eye className="w-32 h-32" />
              </div>
              <div className="relative z-10 space-y-6">
                <div className="w-16 h-16 bg-brand-600 rounded-xl flex items-center justify-center text-white mb-8 shadow-xl shadow-brand-900/50">
                  <Eye className="w-8 h-8" />
                </div>
                <h2 className="text-3xl font-display font-bold text-white">Our Vision</h2>
                <p className="text-brand-100 text-lg leading-relaxed">
                  To become a globally trusted healthcare company recognized for delivering high-quality products that improve lives worldwide.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-white p-12 rounded-[2.5rem] border border-slate-200 relative overflow-hidden group text-slate-900 shadow-xl"
            >
              <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:scale-110 transition-transform text-brand-600">
                <Target className="w-32 h-32" />
              </div>
              <div className="relative z-10 space-y-6">
                <div className="w-16 h-16 bg-brand-600 rounded-xl flex items-center justify-center text-white mb-8 shadow-xl shadow-brand-100">
                  <Target className="w-8 h-8" />
                </div>
                <h2 className="text-3xl font-display font-bold text-slate-800">Our Mission</h2>
                <ul className="space-y-4">
                  {[
                    'Deliver high-quality healthcare products globally',
                    'Build long-term international partnerships',
                    'Maintain strict quality and regulatory standards',
                    'Promote healthier lifestyles through innovation'
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start space-x-3 text-slate-600">
                      <CheckCircle2 className="w-5 h-5 text-brand-600 shrink-0 mt-0.5" />
                      <span className="font-medium text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="section-container pb-24">
        <div className="flex justify-between items-end mb-16 px-4">
          <div className="space-y-4">
             <h2 className="text-xs uppercase font-black text-brand-600 tracking-[0.3em]">Core Values</h2>
             <h3 className="text-4xl font-bold text-slate-900">What Drives Our <br/>Success</h3>
          </div>
          <p className="text-slate-500 max-w-xs text-sm hidden md:block">Our values are deeply rooted in the clinical efficacy and corporate transparency of our operations.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { icon: ShieldCheck, title: 'Integrity', desc: 'Trust and transparency in every global transaction.' },
            { icon: Globe, title: 'Accessibility', desc: 'Making healthcare reachable across every border.' },
            { icon: Users, title: 'Partnership', desc: 'Distributor success is the core of our business model.' },
            { icon: Trophy, title: 'Excellence', desc: 'Rigorous quality standards across all categories.' }
          ].map((value, idx) => (
            <div key={idx} className="bg-white p-8 rounded-[2rem] border border-slate-100 shadow-sm hover:shadow-md transition-all group">
              <div className="w-14 h-14 bg-slate-50 rounded-xl flex items-center justify-center text-brand-600 mb-6 group-hover:bg-brand-600 group-hover:text-white transition-colors">
                <value.icon className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-display font-bold text-slate-800 mb-3">{value.title}</h3>
              <p className="text-sm text-slate-500 leading-relaxed">{value.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
