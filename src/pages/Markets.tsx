import { motion } from 'motion/react';
import { Globe, MapPin, ShieldCheck, Ship, Info } from 'lucide-react';
import { MARKETS } from '../constants';

export default function Markets() {
  return (
    <div className="pt-24 min-h-screen pb-24">
      {/* Hero */}
      <section className="bg-white border-b border-slate-200 py-20 mb-16">
        <div className="section-container">
          <div className="max-w-4xl space-y-6">
            <div className="flex justify-between items-start">
              <h2 className="text-xs uppercase font-black text-brand-600 tracking-[0.3em]">Geographic Influence</h2>
              <span className="text-[10px] font-mono text-slate-400">GLOBAL NETWORK</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-display font-bold text-slate-900 leading-tight">
              A Truly <br/><span className="text-brand-600">Global Presence</span>
            </h1>
            <p className="text-xl text-slate-600 leading-relaxed max-w-2xl">
              Xyntra Lifesciences operates across multiple international markets, delivering healthcare solutions through reliable distribution networks.
            </p>
          </div>
        </div>
      </section>

      {/* Market Segments */}
      <section className="section-container mb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {MARKETS.map((market, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="brand-card p-10 group hover:border-brand-200 transition-all duration-500"
            >
              <div className="space-y-6">
                <div className="w-14 h-14 bg-slate-50 rounded-xl flex items-center justify-center text-brand-600 transition-colors group-hover:bg-brand-600 group-hover:text-white">
                  <MapPin className="w-7 h-7" />
                </div>
                <div>
                  <h3 className="text-xl font-display font-bold text-slate-800 mb-2">{market.region}</h3>
                  <p className="text-xs text-slate-500 leading-relaxed mb-6 h-12">{market.description}</p>
                  <div className="flex flex-wrap gap-1.5 pt-4 border-t border-slate-100">
                    {market.countries.map((country, i) => (
                      <span key={i} className="text-[9px] font-black uppercase tracking-wider bg-slate-100 text-slate-500 px-2.5 py-1 rounded">
                        {country}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Expertise Section */}
      <section className="section-container mb-24">
        <div className="brand-card p-12 overflow-hidden relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h2 className="text-xs uppercase font-black text-brand-600 tracking-[0.3em]">Compliance & Logistics</h2>
                <h3 className="text-3xl font-display font-bold text-slate-800">Regulatory Excellence</h3>
                <p className="text-lg text-slate-600 leading-relaxed">
                  We understand complex regional regulatory requirements and ensure smooth export operations and compliance across all territories.
                </p>
              </div>
              <div className="space-y-6">
                {[
                  { icon: ShieldCheck, title: 'Compliance Excellence', desc: 'Strict adherence to local healthcare laws and global standards.' },
                  { icon: Ship, title: 'Logistics Network', desc: 'Optimized supply chain for timely and safe cross-border delivery.' },
                  { icon: Info, title: 'Market Insight', desc: 'Deep understanding of healthcare trends in emerging markets.' }
                ].map((feat, i) => (
                  <div key={i} className="flex items-start space-x-4 group">
                    <div className="p-3 bg-slate-50 rounded-xl text-brand-600 shrink-0 group-hover:bg-brand-600 group-hover:text-white transition-colors">
                      <feat.icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-800 group-hover:text-brand-700 transition-colors">{feat.title}</h4>
                      <p className="text-sm text-slate-500">{feat.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src="https://picsum.photos/seed/global-trade-map/800/800"
                  alt="Global Hub"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Growth Section */}
      <section className="section-container text-center pb-24">
        <div className="max-w-4xl mx-auto brand-card p-16">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="space-y-8"
          >
            <h2 className="text-xs uppercase font-black text-brand-600 tracking-[0.3em]">Expansion Roadmap</h2>
            <h3 className="text-4xl md:text-5xl font-display font-bold text-slate-800 leading-tight">Actively Expanding across Europe & Africa</h3>
            <p className="text-lg text-slate-600 leading-relaxed">
              We are constantly scouting for new opportunities and distribution partners in Europe and other emerging markets. Our goal is to bring high-quality healthcare products to every corner of the globe.
            </p>
            <div className="pt-8 flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-12">
              <div className="flex items-center justify-center space-x-3 text-slate-400">
                <MapPin className="w-6 h-6 text-brand-600" />
                <span className="font-black text-xs uppercase tracking-widest">20+ Countries</span>
              </div>
              <div className="flex items-center justify-center space-x-3 text-slate-400">
                <Globe className="w-6 h-6 text-brand-600" />
                <span className="font-black text-xs uppercase tracking-widest">4 Major Regions</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
