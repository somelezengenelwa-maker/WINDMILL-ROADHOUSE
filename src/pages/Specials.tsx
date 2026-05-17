import { motion } from 'motion/react';
import { SEO } from '../components/SEO';
import { Tag, Users, Calendar, TrendingUp } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Specials() {
  return (
    <div className="bg-cream min-h-screen">
      <SEO 
        title="Daily Specials & Deals" 
        description="Check out current deals at The Windmill Roadhouse. Family meal bundles, daily combo specials, and seasonal promotions in East London." 
      />

      {/* Header */}
      <section className="bg-brand-yellow text-brand-red py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5 pointer-events-none">
           <div className="flex flex-wrap gap-12">
             {[...Array(20)].map((_, i) => <Tag key={i} size={100} className="rotate-45" />)}
           </div>
        </div>
        <div className="max-w-7xl mx-auto px-4 text-center relative z-10">
          <h1 className="text-6xl md:text-8xl font-display font-black italic tracking-tighter mb-4">LEKKER DEALS</h1>
          <p className="text-lg md:text-xl font-bold uppercase tracking-[0.4em] mb-8">Saving You Rand Every Single Day</p>
          <div className="inline-block bg-brand-red text-white px-8 py-2 rounded-full font-bold text-sm tracking-widest animate-bounce">
            SCROLL FOR SAVINGS
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 space-y-24">
        
        {/* Daily Anchor Deal */}
        <section className="bg-white rounded-[40px] shadow-2xl overflow-hidden grid grid-cols-1 lg:grid-cols-2 group border-4 border-brand-red">
          <div className="h-[400px] overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?auto=format&fit=crop&q=80&w=800" 
              alt="Cheese Burger Combo" 
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="p-10 md:p-16 flex flex-col justify-center">
            <div className="flex items-center space-x-3 mb-6">
              <div className="p-2 bg-brand-red text-white rounded-lg"><Calendar size={20} /></div>
              <span className="font-bold text-brand-red uppercase tracking-widest text-sm">The Daily Anchor</span>
            </div>
            <h2 className="heading-retro text-5xl mb-4 italic">Cheese Burger Combo</h2>
            <p className="text-slate-600 mb-8 text-lg font-sans">Our #1 best-selling value deal. A juicy 100g beef cheese burger, hand-cut chips, and a crisp 330ml soft drink.</p>
            <div className="flex items-baseline space-x-4 mb-10">
              <span className="text-5xl font-black text-brand-red font-display">R59</span>
              <span className="text-slate-400 line-through text-xl">R89</span>
            </div>
            <Link to="/order" className="btn-primary py-4 text-xl">Order This Deal</Link>
          </div>
        </section>

        {/* Family Bundles */}
        <section>
          <div className="flex items-center space-x-6 mb-12">
            <h2 className="heading-retro text-4xl whitespace-nowrap">Feed The Family</h2>
            <div className="h-px bg-brand-yellow/30 w-full" />
            <Users className="text-brand-red" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-brand-green text-white p-10 rounded-3xl shadow-xl relative overflow-hidden">
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-brand-yellow rounded-full flex items-center justify-center text-brand-red font-black text-xl rotate-12 shadow-lg">Save 20%</div>
              <h3 className="font-display text-3xl font-bold mb-4 italic">The Quigney Feast</h3>
              <p className="opacity-80 mb-8 text-lg">4x Munch Burgers, 2x Large Chips, and a 2L Coca-Cola. Perfection for the Friday night drive to the beach.</p>
              <p className="text-4xl font-display font-black text-brand-yellow mb-8 tracking-tighter">ONLY R249</p>
              <Link to="/order" className="inline-block btn-secondary bg-white text-brand-green hover:bg-white/90">Add to Car</Link>
            </div>
            <div className="bg-white border-4 border-brand-green p-10 rounded-3xl shadow-xl text-slate-800">
              <h3 className="font-display text-3xl font-bold mb-4 text-brand-green italic">Pizza Party Bundle</h3>
              <p className="text-slate-500 mb-8 text-lg">Any 3 Large Pizzas from our selected range. Stone-baked and loaded with mozzarella.</p>
              <p className="text-4xl font-display font-black text-brand-green mb-8 tracking-tighter">ONLY R299</p>
              <Link to="/order" className="inline-block btn-primary bg-brand-green">Order Now</Link>
            </div>
          </div>
        </section>

        {/* Trending Promotions */}
        <section className="bg-cream border-2 border-brand-yellow/50 p-12 rounded-[40px] text-center">
            <TrendingUp size={48} className="mx-auto text-brand-red mb-6" />
            <h2 className="heading-retro text-5xl mb-6">Seasonal Specials</h2>
            <p className="max-w-2xl mx-auto text-slate-600 text-lg mb-12 leading-relaxed">
              From our festive December hampers to our winter warming coffee & donut combos, we always have something new on the grill. Ask our friendly staff about our <span className="text-brand-red font-bold underline">Off-Menu Specials</span>.
            </p>
            <div className="flex justify-center flex-wrap gap-4">
               {[
                 "Pensioner's Tuesday (10% Off)",
                 "Beachfront Coffee Club",
                 "Nugget Munch Meal Toy Bonus",
                 "Student Burger Combo"
               ].map((tag, i) => (
                 <span key={i} className="px-5 py-2 bg-white text-slate-700 rounded-full font-bold text-sm border border-brand-yellow/30 shadow-sm">{tag}</span>
               ))}
            </div>
        </section>

      </div>
    </div>
  );
}
