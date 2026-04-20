import { Product, NavLink, Market } from './types';

export const NAVBAR_LINKS: NavLink[] = [
  { label: 'Home', href: '/' },
  { label: 'About Us', href: '/about' },
  { label: 'Products', href: '/products' },
  { label: 'Global Markets', href: '/markets' },
  { label: 'Contact', href: '/contact' },
];

export const COMPANY_DETAILS = {
  name: 'Xyntra Lifesciences Private Limited',
  address: 'Corporate Office Address Placeholder, India',
  email: 'info@xyntra.com',
  phone: '+91-XXXXXXXXXX',
  social: {
    instagram: 'https://instagram.com/xyntra',
    facebook: 'https://facebook.com/xyntra',
    twitter: 'https://twitter.com/xyntra',
    linkedin: 'https://linkedin.com/company/xyntra',
  }
};

export const PRODUCTS: Product[] = [
  {
    id: 'pharma',
    category: 'Pharmaceuticals',
    title: 'Pharmaceutical Formulations',
    description: 'High-quality formulations designed to support diverse therapeutic needs.',
    image: 'https://picsum.photos/seed/pharma/800/600',
    items: ['Tablets', 'Capsules', 'Injectables', 'Syrups & Suspensions', 'Topical formulations'],
  },
  {
    id: 'nutra',
    category: 'Nutraceuticals',
    title: 'Nutraceuticals & Dietary Supplements',
    description: 'Products focused on preventive healthcare and wellness.',
    image: 'https://picsum.photos/seed/vitamins/800/600',
    items: ['Vitamins & minerals', 'Immunity boosters', 'Herbal supplements', 'Energy & vitality products'],
  },
  {
    id: 'herbal',
    category: 'Herbal',
    title: 'Herbal & Wellness Products',
    description: 'Natural formulations combining traditional knowledge and modern science.',
    image: 'https://picsum.photos/seed/herbal/800/600',
    items: ['Plant-based supplements', 'Herbal health products', 'Natural wellness solutions'],
  },
  {
    id: 'cosmetics',
    category: 'Cosmetics',
    title: 'Cosmetics & Personal Care',
    description: 'Comprehensive range for skincare, haircare, and personal wellness.',
    image: 'https://picsum.photos/seed/beauty/800/600',
    items: ['Skincare (creams, serums, cleansers)', 'Haircare (shampoos, oils, treatments)', 'Beauty & grooming products'],
  },
];

export const MARKETS: Market[] = [
  {
    region: 'Asia',
    description: 'Serving diverse regulatory requirements across Asian nations.',
    countries: ['India', 'Vietnam', 'Philippines', 'Myanmar', 'Sri Lanka'],
  },
  {
    region: 'Africa',
    description: 'Providing accessible healthcare solutions across the African continent.',
    countries: ['Nigeria', 'Kenya', 'Ethiopia', 'Tanzania', 'Ghana'],
  },
  {
    region: 'Middle East',
    description: 'Supplying premium quality products to Middle Eastern partners.',
    countries: ['UAE', 'Saudi Arabia', 'Oman', 'Qatar', 'Jordan'],
  },
  {
    region: 'Europe & Others',
    description: 'Expanding presence in European and other emerging global markets.',
    countries: ['Germany', 'UK', 'Brazil', 'CIS Countries'],
  },
];

export const CERTIFICATIONS = [
  {
    title: 'WHO-GMP Certified',
    description: 'Ensuring products are consistently produced and controlled according to quality standards.',
    icon: 'ShieldCheck',
  },
  {
    title: 'ISO 9001:2015',
    description: 'International standard for quality management systems (QMS).',
    icon: 'Award',
  },
  {
    title: 'GDP Compliant',
    description: 'Good Distribution Practice ensures the integrity and quality of products during distribution.',
    icon: 'Truck',
  },
  {
    title: 'Lab Validated (USP/BP)',
    description: 'Products validated against United States and British Pharmacopeia standards.',
    icon: 'FlaskConical',
  },
  {
    title: 'FSSAI Accredited',
    description: 'Approved by Food Safety and Standards Authority of India for Nutraceutical exports.',
    icon: 'CheckCircle2',
  },
  {
    title: 'Import Export Code (IEC)',
    description: 'Authorized registered exporter with the Directorate General of Foreign Trade.',
    icon: 'FileText',
  },
];
