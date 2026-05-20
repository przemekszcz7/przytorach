export interface MenuItem {
  name: string;
  description?: string;
  isDailySpecial?: boolean;
  isEveryday?: boolean;
  tag?: 'Ostre' | 'Łagodne' | 'Klasyk' | 'Polecamy' | 'Zupa';
  price?: string;
}

export interface GalleryImage {
  url: string;
  caption: string;
  category: 'jedzenie' | 'klimat' | 'receptura';
}
