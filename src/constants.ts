import { MenuItem, Special } from './types';

export const COLORS = {
  cream: '#F5ECD7',
  red: '#8B1A1A',
  green: '#2D4A2D',
  yellow: '#D4A017',
  white: '#FFFFFF',
};

export const MENU_ITEMS: MenuItem[] = [
  // Burgers
  { id: 'b1', name: 'Munch Burger', description: 'Beef patty, tomato sauce, sweet & sour dill cucumbers', price: 49, category: 'Burgers' },
  { id: 'b2', name: 'Cheese Burger', description: '100g beef, cheese sauce, fresh tomato, dill cucumbers, Windmill burger sauce', price: 59, category: 'Burgers' },
  { id: 'b3', name: 'Bacon Cheese Burger', description: 'Our signature cheese burger with crispy bacon', price: 69, category: 'Burgers' },
  { id: 'b4', name: 'Hawaiian Burger', description: 'Pineapple and island sauce', price: 65, category: 'Burgers' },
  { id: 'b5', name: 'Pepper Mushroom Burger', description: 'Creamy pepper and mushroom sauce', price: 72, category: 'Burgers' },
  { id: 'b6', name: 'Mega Dagwood', description: 'Bacon, egg, cheese, fresh tomato, fried onion, dill cucumbers', price: 95, category: 'Burgers' },
  { id: 'b7', name: 'Chicken Fillet Burger', description: 'Succulent chicken breast fillet', price: 55, category: 'Burgers' },
  { id: 'b8', name: 'Chili Burger', description: 'For those who like it hot', price: 58, category: 'Burgers' },

  // Pizzas
  { id: 'p1', name: 'Mushroom & Cheese', description: 'Medium base, original napolitana sauce, heaps of mozzarella', price: 85, category: 'Pizzas' },
  { id: 'p2', name: 'Ham & Cheese', description: 'Classic ham and mozzarella', price: 92, category: 'Pizzas' },

  // Toasted Sarmies
  { id: 's1', name: 'Bacon Egg Cheese Toastie', description: 'Generously filled to order', price: 45, category: 'Toasted Sarmies' },

  // Combos
  { id: 'c1', name: 'Cheese Burger Combo', description: 'Cheese burger + small chips + 330ml soda', price: 89, category: 'Combos' },

  // Sides
  { id: 'sd1', name: 'Hand-Cut Chips', price: 25, category: 'Chips & Sides' },
  { id: 'sd2', name: 'Lamb Chops and Chips', price: 125, category: 'Chips & Sides' },

  // Soft Serve
  { id: 'ss1', name: 'Vanilla Soft Serve', price: 15, category: 'Soft Serve & Desserts' },
  { id: 'ss2', name: 'Choc Sundae', price: 28, category: 'Soft Serve & Desserts' },
  { id: 'ss3', name: 'Oreo Soft Serve', price: 32, category: 'Soft Serve & Desserts' },
  { id: 'ss4', name: 'Biscoff Soft Serve', price: 35, category: 'Soft Serve & Desserts' },

  // Milkshakes
  { id: 'm1', name: 'Thick Mega Shake', description: 'Chocolate, Strawberry, Vanilla', price: 42, category: 'Milkshakes' },
  { id: 'm2', name: 'Double-Thick Mega', price: 48, category: 'Milkshakes' },
  { id: 'm3', name: 'Speciality Shake (Horlicks)', price: 52, category: 'Milkshakes' },
];

export const SPECIALS: Special[] = [
  { id: 'sp1', title: 'Value Anchor', description: 'Cheese Burger Combo with chips and drink', price: 59, day: 'Daily' },
  { id: 'sp2', title: 'Family Bundle', description: '4x Munch Burgers + Large Chips + 2L Coke', price: 249, day: 'Weekend' },
];
