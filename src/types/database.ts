export interface Car {
  id: string;
  title: string;
  main_image: string | null;
  price: number;
  description: string | null;
  short_description: string | null;
  is_sold: boolean;
  year: number;
  mileage: string | null;
  fuel_type: 'Petrol' | 'Diesel' | 'Hybrid' | 'Electric' | 'CNG' | 'LPG';
  transmission: 'Automatic' | 'Manual';
  city: string | null;
  province: string | null;
  color: string | null;
  assembly: 'Local' | 'Imported' | null;
  engine_capacity: string | null;
  body_type: 'Sedan' | 'Hatchback' | 'SUV' | 'Crossover' | 'Coupe' | 'Convertible' | 'Wagon' | 'Van' | 'Pickup' | null;
  ad_reference: string | null;
  created_by: string | null;
  created_at: string;
  updated_at: string;
}

export interface UserRole {
  id: string;
  user_id: string;
  role: 'admin' | 'user';
  created_at: string;
}
