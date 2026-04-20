import { motion, AnimatePresence } from 'motion/react';
import { X, ShieldCheck, Award, Truck, FlaskConical, CheckCircle2, FileText } from 'lucide-react';
import { CERTIFICATIONS } from '../constants';

interface CertificationsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const iconMap: Record<string, any> = {
  ShieldCheck,
  Award,
  Truck,
  FlaskConical,
  CheckCircle2,
  FileText,
};

export default function CertificationsModal({ isOpen, onClose }: CertificationsModalProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm z-[100] cursor-pointer"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-2xl bg-white rounded-[2.5rem] shadow-2xl z-[101] overflow-hidden"
          >
            <div className="p-8 md:p-12">
              <div className="flex justify-between items-start mb-10">
                <div className="space-y-4">
                  <div className="inline-block px-3 py-1 bg-brand-50 text-brand-600 rounded-full text-[10px] font-black uppercase tracking-[0.2em]">
                    Quality Standards
                  </div>
                  <h2 className="text-3xl font-black text-slate-900 tracking-tighter">
                    Global Certifications & <br/>
                    <span className="text-brand-600">Regulatory Compliance</span>
                  </h2>
                </div>
                <button
                  onClick={onClose}
                  className="p-3 bg-slate-50 text-slate-400 hover:text-slate-900 hover:bg-slate-100 rounded-2xl transition-all"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {CERTIFICATIONS.map((cert, idx) => {
                  const Icon = iconMap[cert.icon];
                  return (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: idx * 0.05 }}
                      className="flex items-start space-x-4 p-4 rounded-2xl border border-slate-50 hover:border-brand-100 hover:bg-brand-50/10 transition-all group"
                    >
                      <div className="w-12 h-12 bg-slate-50 rounded-xl flex items-center justify-center text-slate-900 group-hover:bg-brand-600 group-hover:text-white transition-all">
                        <Icon className="w-6 h-6" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-black text-slate-900 text-sm mb-1 tracking-tight">{cert.title}</h4>
                        <p className="text-[11px] text-slate-500 leading-relaxed">{cert.description}</p>
                      </div>
                    </motion.div>
                  );
                })}
              </div>

              <div className="mt-12 pt-8 border-t border-slate-50 flex items-center justify-between text-[10px] text-slate-400 font-black uppercase tracking-widest">
                <span>Verified Exporter Status</span>
                <span className="text-brand-600">Xyntra Lifesciences Pvt Ltd</span>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
