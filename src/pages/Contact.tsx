import { motion } from 'motion/react';
import { SEO } from '../components/SEO';
import { Phone, MapPin, Clock, MessageSquare, Navigation, Share2 } from 'lucide-react';

export function Contact() {
  return (
    <div className="bg-cream min-h-screen">
      <SEO 
        title="Contact Us" 
        description="Find our location at 128 Moore Street, Quigney Beach, East London. Get directions, view trading hours, or call us directly at +27 43 722 9208." 
      />

      {/* Hero Header */}
      <section className="bg-brand-red text-white py-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 text-center relative z-10">
          <h1 className="text-6xl md:text-8xl font-display font-bold italic tracking-tight mb-4">Pull Up.</h1>
          <p className="text-lg opacity-80 uppercase tracking-[0.4em] font-sans">We're Waiting For You At The Beach</p>
        </div>
        <div className="absolute inset-0 opacity-20 grayscale pointer-events-none">
           <img 
            src="https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&q=80&w=1920" 
            alt="Beach Background" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
           />
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-20 relative z-20 pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Main Info Columns */}
          <div className="lg:col-span-8 flex flex-col space-y-12">
            
            {/* Quick Contact Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <motion.a 
                href="tel:+27437229208"
                whileHover={{ scale: 1.02 }}
                className="bg-white p-8 rounded-3xl shadow-xl flex items-center space-x-6 group border border-brand-yellow/10"
              >
                <div className="p-5 bg-brand-red text-white rounded-2xl shadow-lg group-hover:rotate-12 transition-transform">
                  <Phone size={28}/>
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Call Orders</p>
                  <p className="text-2xl font-bold text-slate-800 tracking-tight">+27 43 722 9208</p>
                </div>
              </motion.a>
              <motion.a 
                href="https://wa.me/27437229208"
                whileHover={{ scale: 1.02 }}
                className="bg-white p-8 rounded-3xl shadow-xl flex items-center space-x-6 group border border-brand-yellow/10"
              >
                <div className="p-5 bg-[#25D366] text-white rounded-2xl shadow-lg group-hover:-rotate-12 transition-transform">
                  <MessageSquare size={28}/>
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">WhatsApp Us</p>
                  <p className="text-2xl font-bold text-slate-800 tracking-tight">Chat Now</p>
                </div>
              </motion.a>
            </div>

            {/* Map Section */}
            <div className="bg-white p-4 rounded-[40px] shadow-2xl h-[500px] overflow-hidden border border-brand-yellow/20 relative group">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3312.247657934444!2d27.9150033!3d-33.016335!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1e66e10bad5e36cf%3A0x6a0c0b8b8b8b8b8b!2sThe%20Windmill%20Roadhouse!5e0!3m2!1sen!2sza!4v1715880000000!5m2!1sen!2sza" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={true} 
                loading="lazy"
                title="Quigney Beach Location"
                className="grayscale group-hover:grayscale-0 transition-all duration-1000"
              />
              <div className="absolute top-8 left-8 bg-brand-red text-white p-6 rounded-2xl shadow-2xl flex items-start space-x-4 max-w-sm pointer-events-none group-hover:translate-x-4 transition-transform">
                 <MapPin className="shrink-0 text-brand-yellow" size={24} />
                 <p className="font-bold text-sm leading-relaxed">
                   128 Moore Street, Quigney Beach,<br/>East London, 5201
                 </p>
              </div>
            </div>

            {/* Directions */}
            <div className="bg-brand-green text-white p-12 rounded-[40px] shadow-xl">
              <div className="flex items-center space-x-4 mb-8">
                 <Navigation size={32} className="text-brand-yellow" />
                 <h2 className="font-display text-3xl font-bold italic">Getting Here</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 font-sans">
                 <div className="space-y-4">
                    <h4 className="font-bold text-brand-yellow uppercase tracking-widest text-xs">From EL CBD</h4>
                    <p className="opacity-80 text-sm leading-relaxed">Head south on Oxford St toward Buxton St. Turn left onto Fleet St. Continue onto Currie St. Turn right onto Moore St. We're on your left just before the beach.</p>
                 </div>
                 <div className="space-y-4">
                    <h4 className="font-bold text-brand-yellow uppercase tracking-widest text-xs">From Beachfront Hotels</h4>
                    <p className="opacity-80 text-sm leading-relaxed">Head southwest on Esplanade toward Currie St. Turn right onto Currie St. Turn left at the first cross street onto Moore St. You can't miss our iconic signage!</p>
                 </div>
              </div>
            </div>
          </div>

          {/* Sidebar Hours / Info */}
          <div className="lg:col-span-4 space-y-8">
            <div className="bg-white p-8 rounded-[40px] shadow-xl border border-brand-yellow/10">
               <h3 className="flex items-center font-bold text-slate-800 mb-8 border-b border-cream pb-4">
                 <Clock className="mr-3 text-brand-red" size={20} /> Trading Hours
               </h3>
               <div className="space-y-4 font-sans uppercase tracking-[0.05em] text-sm">
                  {[
                    { day: "Monday", hours: "07:00 - 22:00" },
                    { day: "Tuesday", hours: "07:00 - 22:00" },
                    { day: "Wednesday", hours: "07:00 - 22:00" },
                    { day: "Thursday", hours: "07:00 - 22:00" },
                    { day: "Friday", hours: "07:00 - 23:00" },
                    { day: "Saturday", hours: "07:00 - 23:00" },
                    { day: "Sunday", hours: "07:00 - 22:00" }
                  ].map((h, i) => (
                    <div key={i} className="flex justify-between items-center group">
                       <span className="font-bold text-slate-500 group-hover:text-brand-red transition-colors">{h.day}</span>
                       <span className="text-slate-700 font-bold">{h.hours}</span>
                    </div>
                  ))}
               </div>
               <div className="mt-8 p-4 bg-brand-yellow/10 rounded-2xl border border-brand-yellow/20 text-xs text-brand-red font-bold text-center">
                  * Kitchen closes 15 minutes before closing time.
               </div>
            </div>

            <div className="bg-brand-yellow p-8 rounded-[40px] shadow-xl text-brand-red">
               <h3 className="font-bold mb-6 flex items-center">
                 <Share2 className="mr-3" size={20} /> Parking & Service
               </h3>
               <ul className="space-y-4 font-bold text-sm tracking-tight opacity-90 font-sans">
                 <li className="flex items-start space-x-3">
                   <div className="w-2 h-2 bg-brand-red rounded-full mt-1.5 shrink-0" />
                   <span>Dedicated curbside ordering bays available.</span>
                 </li>
                 <li className="flex items-start space-x-3">
                   <div className="w-2 h-2 bg-brand-red rounded-full mt-1.5 shrink-0" />
                   <span>Safe secure parking area at 128 Moore Street.</span>
                 </li>
                 <li className="flex items-start space-x-3">
                   <div className="w-2 h-2 bg-brand-red rounded-full mt-1.5 shrink-0" />
                   <span>Outdoor seating area with ocean views.</span>
                 </li>
                 <li className="flex items-start space-x-3">
                   <div className="w-2 h-2 bg-brand-red rounded-full mt-1.5 shrink-0" />
                   <span>Wheelchair accessible service window.</span>
                 </li>
               </ul>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
