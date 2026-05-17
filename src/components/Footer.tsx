import { Phone, Navigation, Clock, Instagram, Facebook } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Footer() {
  return (
    <footer className="bg-brand-green text-cream pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 border-b border-cream/10 pb-12">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="font-display text-2xl font-bold tracking-tight">THE WINDMILL</h3>
            <p className="text-sm opacity-80 leading-relaxed font-sans">
              East London's traditional choice since 1946. Proudly serving the Quigney community for 80 years.
            </p>
            <div className="flex space-x-4 pt-4">
              <a href="https://facebook.com" className="hover:text-brand-yellow transition-colors"><Facebook size={20} /></a>
              <a href="https://instagram.com" className="hover:text-brand-yellow transition-colors"><Instagram size={20} /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-bold uppercase tracking-widest text-xs text-brand-yellow">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/menu" className="hover:text-brand-yellow transition-colors">Full Menu</Link></li>
              <li><Link to="/specials" className="hover:text-brand-yellow transition-colors">Daily Specials</Link></li>
              <li><Link to="/about" className="hover:text-brand-yellow transition-colors">Our History</Link></li>
              <li><Link to="/order" className="hover:text-brand-yellow transition-colors">Order Online</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="font-bold uppercase tracking-widest text-xs text-brand-yellow">Visit Us</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start space-x-3">
                <Navigation size={18} className="shrink-0 mt-0.5 text-brand-yellow" />
                <span>128 Moore Street, Quigney Beach,<br />East London, 5201</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone size={18} className="shrink-0 text-brand-yellow" />
                <a href="tel:+27437229208" className="hover:text-brand-yellow transition-all">+27 43 722 9208</a>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div className="space-y-4">
            <h4 className="font-bold uppercase tracking-widest text-xs text-brand-yellow">Trading Hours</h4>
            <ul className="space-y-2 text-sm">
              <li className="flex justify-between"><span>Mon - Thu:</span> <span>07:00 - 22:00</span></li>
              <li className="flex justify-between"><span>Fri - Sat:</span> <span>07:00 - 23:00</span></li>
              <li className="flex justify-between font-bold text-brand-yellow"><span>Sun:</span> <span>07:00 - 22:00</span></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 flex flex-col md:flex-row justify-between items-center text-xs opacity-60 font-sans">
          <p>© {new Date().getFullYear()} The Windmill Roadhouse. All Rights Reserved.</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <Link to="/privacy" className="hover:underline">Privacy Policy</Link>
            <Link to="/terms" className="hover:underline">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
