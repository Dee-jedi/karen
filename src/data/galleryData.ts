// galleryData.ts
export interface GalleryImage {
  id: number;
  title: string;
  category: 'weddings' | 'portraits' | 'events' | 'creative';
  image: string;
  description?: string;
}

export const galleryData: GalleryImage[] = [
  // Weddings
  {
    id: 1,
    title: 'Garden Ceremony',
    category: 'weddings',
    image:
      'https://images.unsplash.com/photo-1519741497674-611481863552?w=800&auto=format&fit=crop',
    description: 'Outdoor garden wedding ceremony',
  },
  {
    id: 2,
    title: 'First Dance',
    category: 'weddings',
    image:
      'https://images.unsplash.com/photo-1606800052052-a08af7148866?w=800&auto=format&fit=crop',
    description: 'Magical first dance moment',
  },
  {
    id: 3,
    title: 'Bride Portrait',
    category: 'weddings',
    image:
      'https://images.unsplash.com/photo-1591604466107-ec97de577aff?w=800&auto=format&fit=crop',
    description: 'Elegant bridal portrait',
  },
  {
    id: 4,
    title: 'Wedding Vows',
    category: 'weddings',
    image:
      'https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=800&auto=format&fit=crop',
    description: 'Intimate vow exchange',
  },
  {
    id: 5,
    title: 'Reception Joy',
    category: 'weddings',
    image:
      'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=800&auto=format&fit=crop',
    description: 'Celebration at reception',
  },
  {
    id: 6,
    title: 'Rings Close-up',
    category: 'weddings',
    image:
      'https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?w=800&auto=format&fit=crop',
    description: 'Wedding rings detail shot',
  },

  // Portraits
  {
    id: 7,
    title: 'Professional Headshot',
    category: 'portraits',
    image:
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&auto=format&fit=crop',
    description: 'Corporate headshot photography',
  },
  {
    id: 8,
    title: 'Natural Light Portrait',
    category: 'portraits',
    image:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=800&auto=format&fit=crop',
    description: 'Soft natural lighting',
  },
  {
    id: 9,
    title: 'Studio Portrait',
    category: 'portraits',
    image:
      'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=800&auto=format&fit=crop',
    description: 'Professional studio setup',
  },
  {
    id: 10,
    title: 'Fashion Portrait',
    category: 'portraits',
    image:
      'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=800&auto=format&fit=crop',
    description: 'Editorial fashion style',
  },
  {
    id: 11,
    title: 'Outdoor Portrait',
    category: 'portraits',
    image:
      'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=800&auto=format&fit=crop',
    description: 'Environmental portrait',
  },
  {
    id: 12,
    title: 'Creative Headshot',
    category: 'portraits',
    image:
      'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=800&auto=format&fit=crop',
    description: 'Artistic headshot style',
  },

  // Events
  {
    id: 13,
    title: 'Corporate Gala',
    category: 'events',
    image:
      'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=800&auto=format&fit=crop',
    description: 'Corporate event coverage',
  },
  {
    id: 14,
    title: 'Birthday Celebration',
    category: 'events',
    image:
      'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=800&auto=format&fit=crop',
    description: 'Birthday party moments',
  },
  {
    id: 15,
    title: 'Conference Speaker',
    category: 'events',
    image:
      'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&auto=format&fit=crop',
    description: 'Professional event speaker',
  },
  {
    id: 16,
    title: 'Concert Performance',
    category: 'events',
    image:
      'https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=800&auto=format&fit=crop',
    description: 'Live music performance',
  },
  {
    id: 17,
    title: 'Team Building',
    category: 'events',
    image:
      'https://images.unsplash.com/photo-1543269664-647b2d794d50?w=800&auto=format&fit=crop',
    description: 'Corporate team event',
  },
  {
    id: 18,
    title: 'Award Ceremony',
    category: 'events',
    image:
      'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=800&auto=format&fit=crop',
    description: 'Awards night coverage',
  },

  // Creative
  {
    id: 19,
    title: 'Abstract Art',
    category: 'creative',
    image:
      'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=800&auto=format&fit=crop',
    description: 'Artistic conceptual shot',
  },
  {
    id: 20,
    title: 'Fashion Editorial',
    category: 'creative',
    image:
      'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=800&auto=format&fit=crop',
    description: 'High fashion editorial',
  },
  {
    id: 21,
    title: 'Urban Photography',
    category: 'creative',
    image:
      'https://images.unsplash.com/photo-1519681393784-d120267933ba?w=800&auto=format&fit=crop',
    description: 'City landscape art',
  },
  {
    id: 22,
    title: 'Conceptual Portrait',
    category: 'creative',
    image:
      'https://images.unsplash.com/photo-1509909756405-be0199881695?w=800&auto=format&fit=crop',
    description: 'Artistic concept photography',
  },
  {
    id: 23,
    title: 'Product Photography',
    category: 'creative',
    image:
      'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800&auto=format&fit=crop',
    description: 'Commercial product shots',
  },
  {
    id: 24,
    title: 'Fine Art',
    category: 'creative',
    image:
      'https://images.unsplash.com/photo-1518998053901-5348d3961a04?w=800&auto=format&fit=crop',
    description: 'Fine art photography',
  },
];

export const categoryLabels = {
  all: 'All Photos',
  weddings: 'Weddings',
  portraits: 'Portraits',
  events: 'Events',
  creative: 'Creative',
};

export type CategoryType = keyof typeof categoryLabels;
