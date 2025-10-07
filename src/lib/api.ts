import { Car } from "@/types/car";

const API_BASE_URL = "https://autoclassmotors.infinityfreeapp.com/wp-json/wp/v2";
const CORS_PROXY = "https://api.allorigins.win/raw?url=";

const fetchWithProxy = async (url: string) => {
  try {
    // Try direct fetch first
    const response = await fetch(url);
    if (response.ok) return response;
  } catch (error) {
    console.log("Direct fetch failed, trying with CORS proxy...");
  }
  
  // Fallback to CORS proxy
  const proxyUrl = `${CORS_PROXY}${encodeURIComponent(url)}`;
  return fetch(proxyUrl);
};

export const fetchCars = async (): Promise<Car[]> => {
  const url = `${API_BASE_URL}/cars?_embed&per_page=100`;
  const response = await fetchWithProxy(url);
  
  if (!response.ok) {
    throw new Error("Failed to fetch cars");
  }
  return response.json();
};

export const fetchCarById = async (id: string): Promise<Car> => {
  const url = `${API_BASE_URL}/cars/${id}?_embed`;
  const response = await fetchWithProxy(url);
  
  if (!response.ok) {
    throw new Error("Failed to fetch car details");
  }
  return response.json();
};
