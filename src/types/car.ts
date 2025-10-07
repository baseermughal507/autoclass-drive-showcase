export interface Car {
  id: number;
  title: {
    rendered: string;
  };
  content: {
    rendered: string;
  };
  acf?: {
    price?: string | number;
    year?: string | number;
    model?: string;
    mileage?: string;
    fuel_type?: string;
    transmission?: string;
    engine?: string;
    color?: string;
  };
  featured_media?: number;
  _embedded?: {
    'wp:featuredmedia'?: Array<{
      source_url: string;
      alt_text?: string;
    }>;
  };
}

export interface CarFilters {
  search: string;
  minPrice: string;
  maxPrice: string;
  minYear: string;
  maxYear: string;
}
