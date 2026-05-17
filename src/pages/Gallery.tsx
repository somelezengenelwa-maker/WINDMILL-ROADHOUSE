import { motion } from 'motion/react';
import { SEO } from '../components/SEO';
import { Instagram, Facebook, Camera, ExternalLink } from 'lucide-react';

const galleryImages = [
  "https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1572490122747-3968b75cc699?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1541167760496-162955ed8a9f?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1547584370-2cc98b8b8dc8?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?auto=format&fit=crop&q=80&w=800",
];

export function Gallery() {
  return (
    <div className="bg-white min-h-screen pb-24">
      <SEO 
        title="Gallery & Lifestyle" 
        description="See The Windmill Roadhouse in action. Food photography, ocean views, and curbside moments from our East London Quigney Beach location." 
      />

      {/* Header */}
      <section className="bg-brand-green text-cream py-24 text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-5 pointer-events-none">
          <div className="grid grid-cols-4 gap-8">
            {[...Array(12)].map((_, i) => <Camera key={i} size={150} />)}
          </div>
        </div>
        <div className="max-w-4xl mx-auto px-4 relative z-10">
          <h1 className="text-6xl md:text-8xl font-display font-bold italic mb-6">Flash & Flavor</h1>
          <p className="text-lg opacity-80 font-sans tracking-wide">Capturing 80 Years of Roadhouse Tradition</p>
        </div>
      </section>

      {/* Main Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-12 mb-24 relative z-20">
        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {galleryImages.map((src, i) => (
            <motion.div 
              key={i} 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
              className="rounded-3xl overflow-hidden shadow-xl border-4 border-white group relative"
            >
              <img 
                src={src} 
                alt={`Roadhouse Vibe ${i + 1}`} 
                className="w-full object-cover group-hover:brightness-75 transition-all duration-500" 
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                <Instagram className="text-white" size={40} />
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Social Wall */}
      <section className="bg-cream py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <div className="max-w-xl">
              <h2 className="heading-retro text-4xl mb-4 italic">Join the Conversation</h2>
              <p className="text-slate-600 text-lg">Tag us in your photos @WindmillRoadhouseEL and join over 25,000 followers on social media. Share your roadhouse moment!</p>
            </div>
            <div className="flex space-x-4">
              <a href="https://facebook.com" className="btn-primary bg-[#1877F2] border-[#1877F2] flex items-center">
                 <Facebook className="mr-2" size={18} /> 25k+ Followers
              </a>
              <a href="https://instagram.com" className="btn-primary bg-gradient-to-tr from-[#f9ce34] via-[#ee2a7b] to-[#6228d7] border-transparent flex items-center">
                 <Instagram className="mr-2" size={18} /> Follow Us
              </a>
            </div>
          </div>

          {/* Social UGC Wall Embed Placeholder */}
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
             {[...Array(12)].map((_, i) => (
               <div key={i} className="aspect-square bg-white rounded-xl shadow-sm flex items-center justify-center border border-slate-100 group cursor-pointer hover:border-brand-red transition-all">
                  <div className="opacity-10 group-hover:opacity-100 group-hover:text-brand-red transition-all">
                    <Facebook size={24} />
                  </div>
               </div>
             ))}
          </div>
          
          <div className="text-center mt-12">
             <button className="text-brand-red font-bold uppercase tracking-widest text-sm flex items-center mx-auto hover:opacity-80">
               Load More Moments <ExternalLink size={16} className="ml-2" />
             </button>
          </div>
        </div>
      </section>
    </div>
  );
}
