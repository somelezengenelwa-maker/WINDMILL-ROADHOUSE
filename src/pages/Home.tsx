import { motion } from 'motion/react';
import { ArrowRight, Star, Clock, MapPin, Phone, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { SEO } from '../components/SEO';

const reviews = [
  { id: 1, name: "Leigh-Anne V.", rating: 5, text: "Best milkshakes in East London! Been coming here since I was a kid." },
  { id: 2, name: "Thabo M.", rating: 4, text: "Authentic roadhouse vibes. The Munch Burger is still a classic." },
  { id: 3, name: "Kevin S.", rating: 5, text: "#1 fast food in EL for a reason. Great value for money." },
  { id: 4, name: "Sarah G.", rating: 5, text: "Love the curbside service. Perfect for a quick family dinner by the beach." },
];

export function Home() {
  return (
    <div className="overflow-x-hidden">
      <SEO 
        title="Home" 
        description="East London's traditional choice since 1946. Authentic roadhouse burgers, pizzas, and milkshakes at Quigney Beach. Order from your car!" 
      />

      {/* Hero Section */}
      <section className="relative h-[85vh] flex items-center justify-center text-center px-4 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&q=80&w=1920" 
            alt="Windmill Roadhouse Vibe" 
            className="w-full h-full object-cover brightness-[0.55]"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-red/40 to-transparent" />
        </div>
        
        <div className="relative z-10 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-8xl font-display font-bold text-white mb-6 drop-shadow-2xl">
              East London's Traditional Choice <span className="text-brand-yellow">Since 1946</span>
            </h1>
            <p className="text-lg md:text-2xl text-cream font-medium mb-10 max-w-2xl mx-auto drop-shadow-md">
              Great Food. Great Value. 80 Years Strong.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/menu" className="btn-primary flex items-center justify-center text-lg px-8 py-4">
                View Full Menu <ArrowRight className="ml-2" size={20} />
              </Link>
              <Link to="/order" className="btn-secondary flex items-center justify-center text-lg px-8 py-4 text-brand-red bg-white border-2 border-white hover:bg-transparent hover:text-white transition-all">
                Order Online
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Floating Specials Badge */}
        <motion.div 
          initial={{ scale: 0, rotate: -20 }}
          animate={{ scale: 1, rotate: 12 }}
          transition={{ delay: 0.5, type: 'spring' }}
          className="absolute top-24 right-4 md:right-12 bg-brand-yellow text-brand-red font-display p-6 rounded-full shadow-2xl flex flex-col items-center justify-center border-4 border-white z-20"
        >
          <span className="text-xs font-bold uppercase tracking-widest">Today's Deal</span>
          <span className="text-2xl font-black">R59</span>
          <span className="text-[10px] font-bold uppercase">Cheese Burger Combo</span>
        </motion.div>
      </section>

      {/* Social Proof Strip */}
      <div className="bg-brand-green py-4 text-cream overflow-hidden whitespace-nowrap border-y border-brand-yellow/30">
        <div className="flex animate-marquee-slower space-x-12 uppercase tracking-[0.2em] font-bold text-sm items-center">
          {[...Array(3)].map((_, i) => (
            <div key={i} className="flex space-x-12 items-center">
              <span className="flex items-center"><Star className="mr-2 text-brand-yellow fill-brand-yellow" size={16}/> 4.3 Google Rating</span>
              <span className="flex items-center"><Star className="mr-2 text-brand-yellow fill-brand-yellow" size={16}/> 7,000+ Reviews</span>
              <span className="flex items-center"><Star className="mr-2 text-brand-yellow fill-brand-yellow" size={16}/> #1 Fast Food in EL</span>
              <span className="flex items-center"><Star className="mr-2 text-brand-yellow fill-brand-yellow" size={16}/> Established 1946</span>
              <span className="flex items-center"><Star className="mr-2 text-brand-yellow fill-brand-yellow" size={16}/> South African Tradition</span>
            </div>
          ))}
        </div>
      </div>

      {/* Curbside Highlight */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <h2 className="heading-retro text-4xl md:text-5xl border-l-8 border-brand-yellow pl-6">
                Order From Your Car
              </h2>
              <p className="text-lg text-slate-600 leading-relaxed">
                Experience the authentic South African roadhouse tradition. No need to get out—just pull up at Quigney Beach, and our friendly staff will come to your car for that classic curbside service.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="flex items-start space-x-4 p-4 border border-cream rounded-lg bg-cream/30">
                  <Clock className="text-brand-red mt-1" size={24} />
                  <div>
                    <h4 className="font-bold">Fast Service</h4>
                    <p className="text-sm opacity-70">Hot food delivered to your window in minutes.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4 p-4 border border-cream rounded-lg bg-cream/30">
                  <MapPin className="text-brand-red mt-1" size={24} />
                  <div>
                    <h4 className="font-bold">Ocean Views</h4>
                    <p className="text-sm opacity-70">Enjoy your meal with a Quigney sea breeze.</p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <a href="tel:+27437229208" className="btn-primary flex items-center justify-center">
                  <Phone className="mr-2" size={18} /> Call to Order
                </a>
                <a href="https://wa.me/27437229208" className="btn-secondary flex items-center justify-center bg-[#25D366] border-[#25D366]">
                  <MessageCircle className="mr-2" size={18} /> WhatsApp Order
                </a>
              </div>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative rounded-2xl overflow-hidden shadow-2xl h-[500px]"
            >
              <img 
                src="https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&q=80&w=800" 
                alt="Classic Diner Interior" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute bottom-6 right-6 bg-brand-red text-white p-6 rounded-lg font-display text-center shadow-2xl max-w-[200px]">
                <p className="text-xs uppercase tracking-widest mb-1 opacity-80">Serving Since</p>
                <p className="text-4xl font-black italic">1946</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured Menu Teasers */}
      <section className="py-20 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-12">
          <h2 className="heading-retro text-4xl mb-4">The Fan Favourites</h2>
          <p className="text-slate-600 max-w-xl mx-auto">From our famous Munch Burger to our double-thick milkshakes, discover what's made us an East London institution.</p>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { name: "Famous Burgers", img: "https://images.unsplash.com/photo-1547584370-2cc98b8b8dc8?auto=format&fit=crop&q=80&w=600", desc: "100% Beef patties with our secret sauces." },
            { name: "Stone-Baked Pizza", img: "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&q=80&w=600", desc: "Loaded with mozzarella and original Napolitana sauce." },
            { name: "Mega Milkshakes", img: "https://images.unsplash.com/photo-1572490122747-3968b75cc699?auto=format&fit=crop&q=80&w=600", desc: "Double-thick and speciality flavours." }
          ].map((item, id) => (
            <motion.div 
              key={id}
              whileHover={{ y: -10 }}
              className="card-retro group"
            >
              <div className="h-64 overflow-hidden relative">
                <img 
                  src={item.img} 
                  alt={item.name} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" 
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-red/60 to-transparent" />
                <h3 className="absolute bottom-4 left-4 text-white font-display text-2xl font-bold">{item.name}</h3>
              </div>
              <div className="p-6">
                <p className="text-slate-600 text-sm mb-4">{item.desc}</p>
                <Link to="/menu" className="text-brand-red font-bold text-sm uppercase tracking-widest flex items-center hover:opacity-80">
                  Explore Category <ArrowRight className="ml-2" size={16} />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Reviews Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-12">
          <h2 className="heading-retro text-4xl mb-4">Legendary Reputation</h2>
          <p className="text-slate-600">Loved by multiple generations of East Londoners.</p>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-4 gap-6">
          {reviews.map((review) => (
            <div key={review.id} className="p-8 border border-cream bg-cream/10 rounded-2xl flex flex-col justify-between">
              <div>
                <div className="flex text-brand-yellow mb-4">
                  {[...Array(review.rating)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
                </div>
                <p className="text-slate-700 italic text-sm mb-6 leading-relaxed">"{review.text}"</p>
              </div>
              <p className="font-bold text-brand-red text-xs uppercase tracking-widest">— {review.name}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Visit Section with Mini Map */}
      <section className="py-20 bg-brand-red text-white overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="font-display text-4xl md:text-5xl font-bold">Find Us at Quigney Beach</h2>
              <p className="text-lg opacity-80">
                Located just steps away from the sand. Whether you're coming from the CBD or the beachfront hotels, the Windmill is your local North Star.
              </p>
              <div className="space-y-4 pt-4">
                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-white/10 rounded-full"><MapPin size={24} /></div>
                  <p>128 Moore Street, Quigney Beach, East London</p>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-white/10 rounded-full"><Clock size={24} /></div>
                  <p>Open Daily from 07:00 AM</p>
                </div>
              </div>
              <Link to="/contact" className="inline-block btn-secondary mt-8 text-brand-red">
                Get Directions
              </Link>
            </div>
            <div className="h-[400px] bg-white/5 rounded-2xl border border-white/20 overflow-hidden shadow-2xl grayscale group">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3312.247657934444!2d27.9150033!3d-33.016335!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1e66e10bad5e36cf%3A0x6a0c0b8b8b8b8b8b!2sThe%20Windmill%20Roadhouse!5e0!3m2!1sen!2sza!4v1715880000000!5m2!1sen!2sza" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={true} 
                loading="lazy"
                title="Google Maps Location"
                className="group-hover:grayscale-0 transition-all duration-700"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
