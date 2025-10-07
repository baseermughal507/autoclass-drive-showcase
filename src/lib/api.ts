import { Car } from "@/types/car";

const API_BASE_URL = "https://autoclassmotors.infinityfreeapp.com/wp-json/wp/v2";

export const fetchCars = async (): Promise<Car[]> => {
  const response = await fetch(`${API_BASE_URL}/cars?_embed&per_page=100`);
  if (!response.ok) {
    throw new Error("Failed to fetch cars");
  }
  return response.json();
};

export const fetchCarById = async (id: string): Promise<Car> => {
  const response = await fetch(`${API_BASE_URL}/cars/${id}?_embed`);
  if (!response.ok) {
    throw new Error("Failed to fetch car details");
  }
  return response.json();
};
