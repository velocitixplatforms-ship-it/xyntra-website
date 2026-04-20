export interface NavLink {
  label: string;
  href: string;
}

export interface Product {
  id: string;
  category: 'Pharmaceuticals' | 'Nutraceuticals' | 'Herbal' | 'Cosmetics';
  title: string;
  description: string;
  image: string;
  items?: string[];
}

export interface Market {
  region: string;
  description: string;
  countries: string[];
}
