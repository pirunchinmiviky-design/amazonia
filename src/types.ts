export interface Destination {
  id: string;
  name: string;
  subtitle: string;
  icon: string;
  image: string;
  description: string;
  location: string;
  duration: string;
  difficulty: 'Fácil' | 'Moderado' | 'Aventura';
  highlights: string[];
  included: string[];
  priceUSD: number;
}

export interface WildlifeSpecies {
  id: string;
  commonName: string;
  scientificName: string;
  status: string;
  habitat: string;
  description: string;
  curiosity: string;
  image: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'paisajes' | 'fauna' | 'cultura' | 'cascadas';
  categoryLabel: string;
  location: string;
  image: string;
  caption: string;
}

export interface BookingFormData {
  destinationId: string;
  fullName: string;
  email: string;
  phone: string;
  date: string;
  travelers: number;
  packageType: 'standard' | 'premium' | 'cultural';
  specialRequests: string;
}
