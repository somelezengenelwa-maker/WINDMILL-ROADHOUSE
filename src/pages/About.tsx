import { motion } from 'motion/react';
import { SEO } from '../components/SEO';
import { History, Heart, Award, Utensils } from 'lucide-react';

export function About() {
  return (
    <div className="bg-white min-h-screen">
      <SEO 
        title="About Our Legacy" 
        description="Founded in 1946, the Windmill Roadhouse is an East London institution. 80 years of authentic South African roadhouse tradition and family dining." 
      />

      {/* Hero */}
      <section className="relative py-32 bg-cream overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.h1 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-6xl md:text-8xl font-display font-bold text-brand-red italic mb-8"
          >
            Our Story
          </motion.h1>
          <p className="max-w-2xl mx-auto text-lg text-slate-600 font-sans leading-relaxed">
            From a small beach-side stall to an East London landmark. For 80 years, we've been the heart of the Quigney community.
          </p>
        </div>
        <div className="absolute top-0 right-0 w-64 h-64 bg-brand-yellow/10 rounded-full -mr-32 -mt-32" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-red/5 rounded-full -ml-40 -mb-40" />
      </section>

      {/* Legacy Stats */}
      <section className="border-y border-cream py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { label: "Founded", val: "1946", icon: <History /> },
              { label: "Community", val: "80 Yrs", icon: <Award /> },
              { label: "Ingredients", val: "Local", icon: <Utensils /> },
              { label: "Legacy", val: "Family", icon: <Heart /> },
            ].map((stat, i) => (
              <div key={i} className="text-center group">
                 <div className="mx-auto w-12 h-12 flex items-center justify-center text-brand-red bg-cream rounded-full mb-4 group-hover:scale-110 transition-transform">
                   {stat.icon}
                 </div>
                 <p className="text-4xl font-display font-black text-slate-800">{stat.val}</p>
                 <p className="text-xs uppercase tracking-widest font-bold text-slate-400 mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Narrative Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <h2 className="heading-retro text-4xl">South African Roadhouse Tradition</h2>
              <div className="space-y-6 text-slate-600 leading-relaxed text-lg font-sans">
                <p>
                  At the Windmill, we don't just serve food; we serve memories. Since opening our doors in 1946, we've remained true to the classic "eat-in-your-car" curbside culture that defined an era of South African hospitality.
                </p>
                <p>
                  While the world around Quigney Beach has changed, our commitment to no-frills, high-quality, locally sourced ingredients hasn't wavered. We believe in bold flavours, generous portions, and values that respect your hard-earned Rand.
                </p>
                <p>
                  Today, we're proud to be a multi-generational destination where grandparents bring their grandchildren to experience the same Munch Burger they loved forty years ago.
                </p>
              </div>
              <div className="pt-6 border-t border-cream">
                 <p className="font-display italic text-2xl text-brand-red">"Pull up, park, and eat with us. Same spot since the beginning."</p>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-[4/5] bg-cream rounded-3xl overflow-hidden shadow-2xl relative z-10 border-4 border-white">
                <img 
                  src="https://images.unsplash.com/photo-1541167760496-162955ed8a9f?auto=format&fit=crop&q=80&w=800" 
                  alt="Retro Cafe" 
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" 
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -bottom-8 -right-8 w-48 h-48 border-8 border-brand-yellow rounded-3xl z-0" />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 bg-brand-green text-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4 italic">The Windmill Way</h2>
          <div className="h-1 w-24 bg-brand-yellow mx-auto" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-12">
          {[
            { title: "No Corporate Frills", desc: "We focus on what matters: the food and the people. No generic chain vibe here." },
            { title: "Locally Sourced", desc: "Our beef, potatoes, and produce come from Eastern Cape farmers we've known for years." },
            { title: "Ocean Brewed", desc: "The salt air at Quigney Beach is part of the secret recipe. Unmatched atmosphere." }
          ].map((v, i) => (
            <div key={i} className="p-8 border border-white/10 rounded-2xl bg-white/5 backdrop-blur-sm shadow-xl">
               <h3 className="text-brand-yellow font-display text-2xl font-bold mb-4">{v.title}</h3>
               <p className="opacity-80 leading-relaxed font-sans">{v.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
