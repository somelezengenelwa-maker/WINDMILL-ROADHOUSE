import { motion } from 'motion/react';
import { SEO } from '../components/SEO';
import { Phone, ExternalLink, MapPin, Car, Info } from 'lucide-react';

export function Order() {
  return (
    <div className="bg-cream min-h-screen">
      <SEO 
        title="Order Online" 
        description="Order from The Windmill Roadhouse online. Order via Mr D Delivery, call for curbside pickup, or find our delivery radius in East London." 
      />

      {/* Header */}
      <section className="bg-white py-20 border-b border-brand-yellow/20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="heading-retro text-5xl md:text-7xl mb-4 italic">Easy Ordering</h1>
          <p className="text-slate-500 font-sans uppercase tracking-[0.2em] font-semibold text-sm">Choose Your Delivery or Pickup Method</p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Mr D Integration */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="lg:col-span-2 space-y-8"
          >
            <div className="bg-white p-8 rounded-3xl shadow-xl border border-brand-yellow/10 relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-48 h-48 bg-[#F37021]/5 rounded-bl-full pointer-events-none group-hover:bg-[#F37021]/10 transition-all" />
              <div className="flex flex-col md:flex-row items-center md:items-start space-y-6 md:space-y-0 md:space-x-8">
                <div className="w-24 h-24 bg-[#F37021] rounded-2xl flex items-center justify-center text-white shrink-0 shadow-lg">
                  <span className="text-3xl font-black italic">MRD</span>
                </div>
                <div className="flex-grow text-center md:text-left">
                  <h2 className="text-2xl font-display font-bold text-slate-800 mb-2">Order via <span className="text-[#F37021]">Mr D Food</span></h2>
                  <p className="text-slate-600 mb-6 font-sans">The fastest way to get your roadhouse favorites delivered straight to your door in East London. Track your Munch Burger in real-time.</p>
                  <a 
                    href="https://www.mrdfood.com" 
                    target="_blank" 
                    rel="noreferrer"
                    className="inline-flex items-center px-6 py-3 bg-[#F37021] text-white rounded-xl font-bold hover:scale-105 transition-all shadow-lg"
                  >
                    Launch Mr D App <ExternalLink size={18} className="ml-2" />
                  </a>
                </div>
              </div>
            </div>

            {/* Curbside Instructions */}
            <div className="bg-brand-red text-white p-8 rounded-3xl shadow-xl space-y-6">
              <div className="flex items-center space-x-4 mb-4">
                 <div className="p-3 bg-white/10 rounded-full"><Car size={24} /></div>
                 <h2 className="font-display text-3xl font-bold italic">Curbside Pickup</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                 {[
                   { step: "01", text: "Phone your order to +27 43 722 9208 before you leave." },
                   { step: "02", text: "Pull up into any marked ordering bay at 128 Moore Street." },
                   { step: "03", text: "Wait for a friendly staff member to bring your hot meal out." }
                 ].map((s, i) => (
                   <div key={i} className="p-4 bg-white/5 rounded-xl border border-white/10">
                     <span className="text-brand-yellow font-black text-xl mb-2 block">{s.step}</span>
                     <p className="text-sm opacity-90">{s.text}</p>
                   </div>
                 ))}
              </div>
            </div>
          </motion.div>

          {/* Sidebar Info */}
          <div className="space-y-8">
            <div className="bg-white p-6 rounded-3xl shadow-lg border border-brand-yellow/10">
              <h3 className="font-bold text-slate-800 mb-4 flex items-center">
                <Phone size={18} className="mr-2 text-brand-red" /> Contact Details
              </h3>
              <div className="space-y-4">
                 <a href="tel:+27437229208" className="block p-4 bg-cream/30 rounded-xl hover:bg-cream/50 transition-all group">
                   <p className="text-xs font-bold uppercase text-brand-red tracking-widest mb-1">Click to Call</p>
                   <p className="text-lg font-bold text-slate-700 group-hover:translate-x-1 transition-transform">+27 43 722 9208</p>
                 </a>
                 <a href="https://wa.me/27437229208" className="block p-4 bg-cream/30 rounded-xl hover:bg-cream/50 transition-all group">
                   <p className="text-xs font-bold uppercase text-brand-green tracking-widest mb-1">WhatsApp Order</p>
                   <p className="text-lg font-bold text-slate-700 group-hover:translate-x-1 transition-transform">+27 43 722 9208</p>
                 </a>
              </div>
            </div>

            <div className="bg-brand-green text-white p-6 rounded-3xl shadow-lg overflow-hidden relative">
              <div className="absolute inset-0 opacity-10 pointer-events-none">
                 <MapPin size={200} className="-ml-16 -mt-16" />
              </div>
              <h3 className="font-bold mb-4 relative z-10 flex items-center">
                <Info size={18} className="mr-2 text-brand-yellow" /> Delivery Info
              </h3>
              <ul className="space-y-3 pb-4 border-b border-white/10 text-sm relative z-10 opacity-80">
                <li>• Quigney & Beachfront (5 mins)</li>
                <li>• East London CBD (10 mins)</li>
                <li>• Nahoon & Selborne (15 mins)</li>
                <li>• Beacon Bay (20-25 mins)</li>
              </ul>
              <div className="pt-4 relative z-10">
                <p className="text-[10px] uppercase font-bold text-brand-yellow tracking-[0.2em]">Note:</p>
                <p className="text-xs opacity-60 italic mt-1 leading-relaxed">Delivery radius is approximately 8km from Quigney Beach via Mr D Food app.</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
