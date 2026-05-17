export interface MenuItem {
  id: string;
  name: string;
  description?: string;
  price: number;
  category: string;
  image?: string;
}

export interface Special {
  id: string;
  title: string;
  description: string;
  price: number;
  day?: string;
}

export interface Testimony {
  id: string;
  name: string;
  rating: number;
  text: string;
  source: string;
}
