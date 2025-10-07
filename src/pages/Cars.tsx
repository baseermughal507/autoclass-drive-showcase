import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { fetchCars } from "@/lib/api";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CarCard from "@/components/CarCard";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, SlidersHorizontal } from "lucide-react";
import { Skeleton } from "@/components/ui/skeleton";
import { CarFilters } from "@/types/car";

const Cars = () => {
  const [filters, setFilters] = useState<CarFilters>({
    search: "",
    minPrice: "",
    maxPrice: "",
    minYear: "",
    maxYear: "",
  });

  const { data: cars, isLoading, error } = useQuery({
    queryKey: ["cars"],
    queryFn: fetchCars,
  });

  const filteredCars = cars?.filter((car) => {
    const title = car.title.rendered.toLowerCase();
    const searchTerm = filters.search.toLowerCase();
    const price = Number(car.acf?.price) || 0;
    const year = Number(car.acf?.year) || 0;

    const matchesSearch = !filters.search || title.includes(searchTerm);
    const matchesMinPrice = !filters.minPrice || price >= Number(filters.minPrice);
    const matchesMaxPrice = !filters.maxPrice || price <= Number(filters.maxPrice);
    const matchesMinYear = !filters.minYear || year >= Number(filters.minYear);
    const matchesMaxYear = !filters.maxYear || year <= Number(filters.maxYear);

    return matchesSearch && matchesMinPrice && matchesMaxPrice && matchesMinYear && matchesMaxYear;
  });

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Header */}
      <section className="pt-32 pb-12 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-4" style={{ fontFamily: "'Bebas Neue', sans-serif" }}>
            Cars for Sale
          </h1>
          <p className="text-lg text-secondary">
            Browse our complete collection of premium vehicles
          </p>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8 bg-muted border-b">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            <div className="md:col-span-2 relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search by make, model..."
                className="pl-10 bg-background"
                value={filters.search}
                onChange={(e) => setFilters({ ...filters, search: e.target.value })}
              />
            </div>
            <Input
              type="number"
              placeholder="Min Price"
              className="bg-background"
              value={filters.minPrice}
              onChange={(e) => setFilters({ ...filters, minPrice: e.target.value })}
            />
            <Input
              type="number"
              placeholder="Max Price"
              className="bg-background"
              value={filters.maxPrice}
              onChange={(e) => setFilters({ ...filters, maxPrice: e.target.value })}
            />
            <Button
              variant="outline"
              className="border-2"
              onClick={() =>
                setFilters({
                  search: "",
                  minPrice: "",
                  maxPrice: "",
                  minYear: "",
                  maxYear: "",
                })
              }
            >
              <SlidersHorizontal className="mr-2 h-4 w-4" />
              Reset
            </Button>
          </div>
        </div>
      </section>

      {/* Cars Grid */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          {isLoading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <div key={i} className="space-y-4">
                  <Skeleton className="h-64 w-full rounded-lg" />
                  <Skeleton className="h-6 w-3/4" />
                  <Skeleton className="h-4 w-1/2" />
                </div>
              ))}
            </div>
          ) : error ? (
            <div className="text-center py-12">
              <p className="text-lg text-destructive">Failed to load cars. Please try again later.</p>
            </div>
          ) : filteredCars && filteredCars.length > 0 ? (
            <>
              <p className="text-muted-foreground mb-6">
                Showing {filteredCars.length} {filteredCars.length === 1 ? "car" : "cars"}
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredCars.map((car) => (
                  <div key={car.id} className="animate-fade-in">
                    <CarCard car={car} />
                  </div>
                ))}
              </div>
            </>
          ) : (
            <div className="text-center py-12">
              <p className="text-lg text-muted-foreground">No cars found matching your criteria.</p>
              <Button
                variant="outline"
                className="mt-4"
                onClick={() =>
                  setFilters({
                    search: "",
                    minPrice: "",
                    maxPrice: "",
                    minYear: "",
                    maxYear: "",
                  })
                }
              >
                Clear Filters
              </Button>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Cars;
