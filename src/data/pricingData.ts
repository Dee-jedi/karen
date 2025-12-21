export interface PricingPackage {
  id: string;
  name: string;
  price: string;
  color: string;
  gradient: string;
  imagePlaceholder: string;
  features: string[];
  highlighted?: boolean;
}

export const pricingPackages: PricingPackage[] = [
  {
    id: 'standard',
    name: 'Standard',
    price: '550k',
    color: 'blue',
    gradient: 'from-blue-500 to-blue-600',
    imagePlaceholder:
      'https://images.unsplash.com/photo-1519741497674-611481863552?w=800&auto=format&fit=crop',
    features: [
      'Full day Wedding Photography',
      'Complimentary Prewedding Session (limited to two dress)',
      '12x24 Wedding Photobook',
      '16x20 Wedding frame',
      'All Soft copies in flash drive',
      'Edited soft copies for social media upload',
      'One photographer with assistant',
    ],
  },
  {
    id: 'classic',
    name: 'Classic',
    price: '670k',
    color: 'pink',
    gradient: 'from-pink-500 to-rose-600',
    imagePlaceholder:
      'https://images.unsplash.com/photo-1606800052052-a08af7148866?w=800&auto=format&fit=crop',
    features: [
      'Full day Wedding Photography',
      'Complimentary Prewedding Session (2 outfit)',
      '12x24 Wedding Photobook (synthetic)',
      '20x30 Wedding frame',
      'Soft copies in flash drive',
      'Edited images for social media upload',
      'Two 12x15 frames',
      'Two Photographers',
    ],
    highlighted: true,
  },
  {
    id: 'premium',
    name: 'Premium',
    price: '850k',
    color: 'cyan',
    gradient: 'from-cyan-500 to-blue-600',
    imagePlaceholder:
      'https://images.unsplash.com/photo-1591604466107-ec97de577aff?w=800&auto=format&fit=crop',
    features: [
      'Full day Wedding Photography',
      'Complimentary Prewedding Session (up to 3 dress)',
      '12x28 Wedding Photobook',
      '24x36 Wedding frame',
      'Soft copies in flash drive',
      'Parent Photobook (8x20)',
      'Two 12x15 Frames',
      'Two Photographers',
    ],
  },
];

export const additionalInfo = {
  note: 'Event outside ABUJA, client shall take care of transportation and accommodation',
  contact: {
    phone: '08127754589',
    email: 'ekarikaukeme9@gmail.com',
    instagram: '@karen_pictures',
  },
};
