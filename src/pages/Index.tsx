import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Button } from "@/components/ui/button";
import { ArrowRight, Star, Shield, Award } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { cars } from "@/data/cars";

const Index = () => {
  const availableCars = cars.filter(car => !car.is_sold).slice(0, 6);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <WhatsAppButton />

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
            <h1 className="text-5xl md:text-7xl font-bold text-primary-foreground mb-6 leading-tight">
              Drive Luxury.
              <br />
              <span className="text-accent">Drive Smart.</span>
            </h1>
            <p className="text-lg md:text-xl text-secondary mb-8 max-w-2xl">
              Buy and sell quality used cars with confidence at Autoclass Motors.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/#cars">
                <Button size="lg" className="bg-accent hover:bg-accent/90 text-primary-foreground group text-lg px-8 py-6">
                  View Our Collection
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link to="/contact">
                <Button size="lg" variant="outline" className="border-2 border-white text-black bg-white hover:bg-transparent hover:text-white text-lg px-8 py-6">
                  Contact Us
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Cars Section */}
      <section id="cars" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Featured Vehicles</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Explore our latest arrivals and most popular cars
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {availableCars.map((car) => (
              <Link key={car.id} to={`/cars/${car.id}`}>
                <Card className="group overflow-hidden hover:shadow-xl transition-shadow relative">
                  {car.is_sold && (
                    <div className="absolute inset-0 bg-black/60 z-10 flex items-center justify-center">
                      <Badge variant="destructive" className="text-2xl px-6 py-2">SOLD</Badge>
                    </div>
                  )}
                  <img src={car.main_image} alt={car.title} className="w-full h-48 object-cover group-hover:scale-105 transition-transform" />
                  <CardContent className="p-6">
                    <h3 className="font-bold text-xl mb-2">{car.title}</h3>
                    <p className="text-2xl font-bold text-accent mb-2">Rs. {car.price.toLocaleString()}</p>
                    <p className="text-sm text-muted-foreground line-clamp-2 mb-4">{car.short_description}</p>
                    <div className="flex gap-4 text-sm text-muted-foreground">
                      <span>{car.year}</span>
                      <span>•</span>
                      <span>{car.transmission}</span>
                      <span>•</span>
                      <span>{car.fuel_type}</span>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
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
              <p className="text-muted-foreground">Handpicked collection of finest pre-owned vehicles</p>
            </div>
            <div className="text-center p-8 bg-card rounded-xl hover:shadow-lg transition-shadow">
              <div className="bg-accent/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-accent" />
              </div>
              <h3 className="text-xl font-bold mb-3">Trusted Service</h3>
              <p className="text-muted-foreground">Years of experience with transparency and satisfaction</p>
            </div>
            <div className="text-center p-8 bg-card rounded-xl hover:shadow-lg transition-shadow">
              <div className="bg-accent/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-accent" />
              </div>
              <h3 className="text-xl font-bold mb-3">Best Deals</h3>
              <p className="text-muted-foreground">Competitive prices for buying or selling cars</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
