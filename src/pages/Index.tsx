import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { fetchCars } from "@/lib/api";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CarCard from "@/components/CarCard";
import { Button } from "@/components/ui/button";
import { ArrowRight, Star, Shield, Award } from "lucide-react";
import { Skeleton } from "@/components/ui/skeleton";

const Index = () => {
  const { data: cars, isLoading } = useQuery({
    queryKey: ["cars"],
    queryFn: fetchCars,
  });

  const featuredCars = cars?.slice(0, 6) || [];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=1920')",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/70 to-transparent" />
        </div>

        <div className="relative z-10 container mx-auto px-4 text-center md:text-left">
          <div className="max-w-3xl animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold text-primary-foreground mb-6 leading-tight" style={{ fontFamily: "'Bebas Neue', sans-serif" }}>
              Drive Luxury.
              <br />
              <span className="text-accent">Drive Smart.</span>
            </h1>
            <p className="text-lg md:text-xl text-secondary mb-8 max-w-2xl">
              Buy and sell quality used cars with confidence at Autoclass Motors. Explore our carefully inspected vehicles and enjoy a trusted, hassle-free car trading experience.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/cars">
                <Button size="lg" className="bg-accent hover:bg-accent/90 text-primary-foreground group text-lg px-8 py-6">
                  View Our Collection
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link to="/contact">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-white text-black bg-white hover:bg-transparent hover:text-white hover:shadow-[0_0_15px_rgba(255,255,255,0.5)] transition-all text-lg px-8 py-6"
                >
                  Contact Us
                </Button>

              </Link>
            </div>
          </div>
        </div>
      </section>

      

      {/* Featured Cars Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ fontFamily: "'Bebas Neue', sans-serif" }}>
              Featured Vehicles
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Explore our latest arrivals and most popular cars
            </p>
          </div>

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
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredCars.map((car) => (
                <div key={car.id} className="animate-zoom-in">
                  <CarCard car={car} />
                </div>
              ))}
            </div>
          )}

          <div className="text-center mt-12">
            <Link to="/cars">
              <Button size="lg" variant="outline" className="border-2 group text-lg px-8">
                View All Cars
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-8 bg-card rounded-xl hover:shadow-lg transition-shadow">
              <div className="bg-accent/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="h-8 w-8 text-accent" />
              </div>
              <h3 className="text-xl font-bold mb-3">Premium Selection</h3>
              <p className="text-muted-foreground">
                Handpicked collection of the finest pre-owned vehicles, carefully inspected for quality and reliability
              </p>
            </div>
            <div className="text-center p-8 bg-card rounded-xl hover:shadow-lg transition-shadow">
              <div className="bg-accent/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-accent" />
              </div>
              <h3 className="text-xl font-bold mb-3">Trusted Service</h3>
              <p className="text-muted-foreground">
                Years of experience in buying and selling cars with honesty, transparency, and customer satisfaction at heart
              </p>
            </div>
            <div className="text-center p-8 bg-card rounded-xl hover:shadow-lg transition-shadow">
              <div className="bg-accent/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-accent" />
              </div>
              <h3 className="text-xl font-bold mb-3">Best Deals</h3>
              <p className="text-muted-foreground">
                Get the most competitive prices for your car — whether you’re buying or selling. Fair, fast, and hassle-free
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ fontFamily: "'Bebas Neue', sans-serif" }}>
            Ready to Find Your Dream Car?
          </h2>
          <p className="text-lg text-secondary mb-8 max-w-2xl mx-auto">
            Visit our showroom today to explore top-quality used cars.Find the perfect vehicle that matches your style, budget, and lifestyle — all under one roof at Autoclass Motors
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/cars">
              <Button size="lg" className="bg-accent hover:bg-accent/90 text-primary-foreground text-lg px-8">
                View Cars for Sale
              </Button>
            </Link>
            <Link to="/contact">
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-white text-black bg-white hover:bg-transparent hover:text-white hover:shadow-[0_0_15px_rgba(255,255,255,0.5)] transition-all text-lg px-8"
              >
                Contact Us
              </Button>




            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
