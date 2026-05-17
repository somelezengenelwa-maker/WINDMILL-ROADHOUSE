import { motion } from 'motion/react';
import { MENU_ITEMS } from '../constants';
import { SEO } from '../components/SEO';
import { ShoppingBag, ChevronRight, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';

const categories = [
  "Burgers", "Pizzas", "Toasted Sarmies", "Combos", "Chips & Sides", "Soft Serve & Desserts", "Milkshakes", "Drinks", "Breakfast"
];

export function Menu() {
  return (
    <div className="bg-cream min-h-screen pb-24">
      <SEO 
        title="Our Menu" 
        description="Explore the Windmill Roadhouse menu. Traditional South African burgers, stone-baked pizzas, mega milkshakes, and toasted sarmies. Real food, real value." 
      />

      {/* Page Header */}
      <section className="bg-brand-red text-white py-20 px-4 text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="grid grid-cols-6 gap-4">
             {[...Array(24)].map((_, i) => (
               <ShoppingBag key={i} size={80} className="rotate-12" />
             ))}
          </div>
        </div>
        <div className="relative z-10 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-display font-bold mb-4 italic tracking-tight">Our Menu</h1>
          <p className="text-cream/80 text-lg uppercase tracking-[0.3em] font-sans">Freshly Prepared Since 1946</p>
        </div>
      </section>

      {/* Category Jumper */}
      <div className="sticky top-[120px] md:top-[80.5px] z-30 bg-white border-b border-brand-yellow/30 shadow-md">
        <div className="max-w-7xl mx-auto px-4 overflow-x-auto no-scrollbar py-4">
          <div className="flex space-x-1 whitespace-nowrap">
            {categories.map((cat) => (
              <a 
                key={cat} 
                href={`#${cat.toLowerCase().replace(/ & /g, '-').replace(/ /g, '-')}`}
                className="px-4 py-2 text-xs font-bold uppercase tracking-widest text-slate-500 hover:text-brand-red hover:bg-cream rounded-full transition-all"
              >
                {cat}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Menu List */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 space-y-24">
        {categories.map((cat, catIdx) => {
          const items = MENU_ITEMS.filter(i => i.category === cat);
          if (items.length === 0 && cat !== 'Breakfast' && cat !== 'Drinks') return null;

          return (
            <motion.section 
              key={cat}
              id={cat.toLowerCase().replace(/ & /g, '-').replace(/ /g, '-')}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              className="scroll-mt-32"
            >
              <div className="flex items-center space-x-6 mb-12">
                <h2 className="heading-retro text-4xl whitespace-nowrap">{cat}</h2>
                <div className="h-px bg-brand-yellow/30 w-full" />
                {cat === 'Breakfast' && <span className="text-xs bg-brand-green text-white px-3 py-1 rounded-full uppercase tracking-tighter shrink-0">Until 11AM</span>}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
                {items.length > 0 ? items.map((item) => (
                  <div key={item.id} className="group flex justify-between items-start space-x-4 pb-4 border-b border-brand-yellow/10">
                    <div className="space-y-1">
                      <h3 className="font-bold text-lg text-slate-800 group-hover:text-brand-red transition-colors flex items-center">
                        {item.name}
                        {item.id === 'b2' && <span className="ml-3 text-[10px] bg-brand-yellow text-brand-red px-2 py-0.5 rounded uppercase font-black">Value</span>}
                      </h3>
                      {item.description && <p className="text-sm text-slate-500 leading-snug">{item.description}</p>}
                    </div>
                    <div className="shrink-0 flex flex-col items-end">
                      <span className="font-display font-bold text-xl text-brand-red">R{item.price}</span>
                      <button className="text-[10px] uppercase tracking-widest font-bold text-slate-400 mt-2 hover:text-brand-green flex items-center">
                        Add <ChevronRight size={12} />
                      </button>
                    </div>
                  </div>
                )) : (
                  <div className="col-span-full py-12 text-center bg-white/40 rounded-xl border-2 border-dashed border-brand-yellow/20">
                    <p className="text-slate-400 font-medium font-sans">Refreshing {cat} options... call for today's selection!</p>
                  </div>
                )}
              </div>
            </motion.section>
          );
        })}
      </div>

      {/* Floating CTA */}
      <section className="mt-32 bg-brand-green text-white py-16 text-center">
        <div className="max-w-2xl mx-auto px-4">
          <h2 className="text-3xl font-display font-bold mb-6 italic">Hungry yet?</h2>
          <p className="opacity-80 mb-10">Our kitchen is fired up and ready to serve you East London's finest. Order from your car or collect curbside.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
             <a href="tel:+27437229208" className="btn-secondary text-brand-red flex items-center justify-center">
                <Phone size={18} className="mr-2" /> Call Order
             </a>
             <Link to="/order" className="btn-primary border-2 border-white flex items-center justify-center">
                Order Online
             </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
