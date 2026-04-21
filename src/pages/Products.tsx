import { motion } from 'motion/react';
import { Pill, Heart, Leaf, Sparkles, AlertCircle, ChevronRight, CheckCircle2 } from 'lucide-react';
import { PRODUCTS } from '../constants';

const categoryIcons: Record<string, any> = {
  Pharmaceuticals: Pill,
  Nutraceuticals: Heart,
  Herbal: Leaf,
  Cosmetics: Sparkles,
};

export default function Products() {
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
              Product Portfolio
            </div>
            <h1 className="text-5xl md:text-7xl font-display font-black text-slate-950 leading-[0.95] tracking-tighter">
              Clinical Quality & <br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-600 to-brand-400">Global Solutions.</span>
            </h1>
            <p className="text-xl text-slate-700 leading-relaxed max-w-2xl mx-auto font-semibold">
              Advancing global health through a diverse range of certified pharmaceutical and wellness products.
            </p>
          </motion.div>
        </div>
      </section>

      <div className="section-container">
        <div className="space-y-32">
          {PRODUCTS.map((product, idx) => {
            const Icon = categoryIcons[product.category];
            return (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-center ${
                  idx % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                <div className={`space-y-8 ${idx % 2 === 1 ? 'lg:order-2' : ''}`}>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3 text-brand-600">
                      <Icon className="w-8 h-8" />
                      <span className="text-xs font-black uppercase tracking-[0.2em]">{product.category}</span>
                    </div>
                    <h2 className="text-4xl font-display font-black text-slate-900 leading-[1.1]">
                      {product.title}
                    </h2>
                    <p className="text-lg text-slate-700 font-medium leading-relaxed">
                      {product.description}
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {product.items?.map((item, i) => (
                      <div key={i} className="flex items-center space-x-3 p-4 bg-slate-50 rounded-2xl border border-slate-200 shadow-inner">
                        <CheckCircle2 className="w-5 h-5 text-brand-600 shrink-0" />
                        <span className="text-slate-900 font-bold text-sm">{item}</span>
                      </div>
                    ))}
                  </div>

                  <div className="pt-4">
                    <button className="bg-brand-900 text-white px-10 py-4 rounded-2xl font-bold text-sm uppercase tracking-widest hover:bg-brand-800 transition-all shadow-xl flex items-center group">
                      Send Catalog Inquiry <ChevronRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>

                <div className={`relative ${idx % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <div className="aspect-[4/3] rounded-[2.5rem] overflow-hidden shadow-2xl relative z-10 group border-4 border-white">
                    <img
                      src={product.image}
                      alt={product.title}
                      className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-brand-900/5 group-hover:bg-brand-900/0 transition-colors" />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Trust & Quality Section */}
      <section className="section-container mb-24">
        <div className="brand-card p-12 border-slate-200 shadow-2xl">
          <div className="max-w-4xl mx-auto space-y-12">
            <div className="space-y-4 text-center">
              <h2 className="text-xs uppercase font-black text-brand-600 tracking-[0.3em]">Quality Assurance</h2>
              <h3 className="text-4xl font-display font-black text-slate-950">Regulatory Excellence</h3>
              <p className="text-lg text-slate-700 font-semibold leading-relaxed max-w-2xl mx-auto">
                Quality is at the core of everything we do. We ensure that all products meet stringent international quality standards and regulatory requirements.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { title: 'GMP Certified', desc: 'Adhering to Good Manufacturing Practices' },
                { title: 'ISO Compliant', desc: 'Global quality management standards' },
                { title: 'WHO Standards', desc: 'Meeting world healthcare requirements' }
              ].map((cert, i) => (
                <div key={i} className="bg-slate-50 p-8 rounded-3xl border border-slate-200 text-center group hover:bg-brand-50 hover:border-brand-100 transition-all duration-300">
                  <h4 className="font-display font-black text-brand-600 text-lg mb-2">{cert.title}</h4>
                  <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest leading-relaxed">
                    {cert.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
