// galleryData.ts

// Wedding imports
import w01 from '../assets/wedding/10.jpg';
import w02 from '../assets/wedding/02.jpg';
import w03 from '../assets/wedding/03.jpg';
import w04 from '../assets/wedding/04.jpg';
import w05 from '../assets/wedding/05.jpg';
import w06 from '../assets/wedding/06.jpg';
import w07 from '../assets/wedding/07.jpg';
import w08 from '../assets/wedding/08.jpg';
import w09 from '../assets/wedding/09.jpg';
import w10 from '../assets/wedding/01.jpg';
import w11 from '../assets/wedding/11.jpg';
import w12 from '../assets/wedding/12.jpg';
import w13 from '../assets/wedding/13.jpg';
import w14 from '../assets/wedding/14.jpg';
import w15 from '../assets/wedding/15.jpg';
import w16 from '../assets/wedding/16.jpg';
import w17 from '../assets/wedding/17.jpg';
import w18 from '../assets/wedding/18.jpg';
import w19 from '../assets/wedding/19.jpg';
import w20 from '../assets/wedding/20.jpg';

// Portrait imports
import bp01 from '../assets/beauty_portrait/bp01.jpg';
import bp02 from '../assets/beauty_portrait/bp02.jpg';
import bp03 from '../assets/beauty_portrait/bp03.jpg';
import bp04 from '../assets/beauty_portrait/bp04.jpg';
import bp05 from '../assets/beauty_portrait/bp05.jpg';
import bp06 from '../assets/beauty_portrait/bp06.jpg';
import bp07 from '../assets/beauty_portrait/bp07.jpg';
import bp08 from '../assets/beauty_portrait/bp08.jpg';
import bp09 from '../assets/beauty_portrait/bp09.jpg';
import bp10 from '../assets/beauty_portrait/bp10.jpg';
import bp11 from '../assets/beauty_portrait/bp11.jpg';
import bp12 from '../assets/beauty_portrait/bp12.jpg';
import bp13 from '../assets/beauty_portrait/bp13.jpg';
import bp14 from '../assets/beauty_portrait/bp14.jpg';
import bp15 from '../assets/beauty_portrait/bp15.jpg';
import bp16 from '../assets/beauty_portrait/bp16.jpg';
import bp17 from '../assets/beauty_portrait/bp17.jpg';
import bp18 from '../assets/beauty_portrait/bp18.jpg';
import bp19 from '../assets/beauty_portrait/bp19.jpg';

// Family imports
import f01 from '../assets/family/f01.jpg';
import f02 from '../assets/family/f02.jpg';
import f03 from '../assets/family/f03.jpg';
import f04 from '../assets/family/f04.jpg';
import f05 from '../assets/family/f05.jpg';
import f06 from '../assets/family/f06.jpg';
import f07 from '../assets/family/f07.jpg';
import f08 from '../assets/family/f08.jpg';

export interface GalleryImage {
  id: number;
  category: 'weddings' | 'portraits' | 'family' | 'creative';
  image: string;
}

export const galleryData: GalleryImage[] = [
  // Weddings 01-20
  { id: 1, category: 'weddings', image: w01 },
  { id: 2, category: 'weddings', image: w02 },
  { id: 3, category: 'weddings', image: w03 },
  { id: 4, category: 'weddings', image: w04 },
  { id: 5, category: 'weddings', image: w05 },
  { id: 6, category: 'weddings', image: w06 },
  { id: 7, category: 'weddings', image: w07 },
  { id: 8, category: 'weddings', image: w08 },
  { id: 9, category: 'weddings', image: w09 },
  { id: 10, category: 'weddings', image: w10 },
  { id: 11, category: 'weddings', image: w11 },
  { id: 12, category: 'weddings', image: w12 },
  { id: 13, category: 'weddings', image: w13 },
  { id: 14, category: 'weddings', image: w14 },
  { id: 15, category: 'weddings', image: w15 },
  { id: 16, category: 'weddings', image: w16 },
  { id: 17, category: 'weddings', image: w17 },
  { id: 18, category: 'weddings', image: w18 },
  { id: 19, category: 'weddings', image: w19 },
  { id: 20, category: 'weddings', image: w20 },

  // Portraits bp01-bp19
  { id: 21, category: 'portraits', image: bp01 },
  { id: 22, category: 'portraits', image: bp02 },
  { id: 23, category: 'portraits', image: bp03 },
  { id: 24, category: 'portraits', image: bp04 },
  { id: 25, category: 'portraits', image: bp05 },
  { id: 26, category: 'portraits', image: bp06 },
  { id: 27, category: 'portraits', image: bp07 },
  { id: 28, category: 'portraits', image: bp08 },
  { id: 29, category: 'portraits', image: bp09 },
  { id: 30, category: 'portraits', image: bp10 },
  { id: 31, category: 'portraits', image: bp11 },
  { id: 32, category: 'portraits', image: bp12 },
  { id: 33, category: 'portraits', image: bp13 },
  { id: 34, category: 'portraits', image: bp14 },
  { id: 35, category: 'portraits', image: bp15 },
  { id: 36, category: 'portraits', image: bp16 },
  { id: 37, category: 'portraits', image: bp17 },
  { id: 38, category: 'portraits', image: bp18 },
  { id: 39, category: 'portraits', image: bp19 },

  // Family f01-f08
  { id: 40, category: 'family', image: f01 },
  { id: 41, category: 'family', image: f02 },
  { id: 42, category: 'family', image: f03 },
  { id: 43, category: 'family', image: f04 },
  { id: 44, category: 'family', image: f05 },
  { id: 45, category: 'family', image: f06 },
  { id: 46, category: 'family', image: f07 },
  { id: 47, category: 'family', image: f08 },
];

// Category labels
export const categoryLabels = {
  all: 'All Photos',
  weddings: 'Weddings',
  portraits: 'Portraits',
  family: 'Family',
};

export type CategoryType = keyof typeof categoryLabels;
