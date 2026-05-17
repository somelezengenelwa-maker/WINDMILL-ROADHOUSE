import { Phone, ShoppingBag } from 'lucide-react';
import { Link } from 'react-router-dom';

export function StickyCTA() {
  return (
    <div className="h-10 bg-brand-red text-white flex items-center justify-center space-x-4 px-4 sticky top-0 z-50 text-[10px] sm:text-xs font-bold uppercase tracking-[0.15em]">
      <a href="tel:+27437229208" className="flex items-center hover:text-brand-yellow transition-colors whitespace-nowrap">
        <Phone size={14} className="mr-2" />
        Order Now: +27 43 722 9208
      </a>
      <span className="hidden sm:inline opacity-30">|</span>
      <Link to="/order" className="flex items-center hover:text-brand-yellow transition-colors whitespace-nowrap">
        <ShoppingBag size={14} className="mr-2" />
        Order Online
      </Link>
    </div>
  );
}
