import { Link } from "react-router-dom";
import { cars } from "@/data/cars";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Cars = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <WhatsAppButton />

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Cars on Sale</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Browse our complete collection of quality used cars
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {cars.map((car) => (
              <Link key={car.id} to={`/cars/${car.id}`}>
                <Card className="group overflow-hidden hover:shadow-xl transition-shadow relative h-full">
                  {car.is_sold && (
                    <div className="absolute inset-0 bg-black/60 z-10 flex items-center justify-center">
                      <Badge variant="destructive" className="text-2xl px-6 py-2">SOLD</Badge>
                    </div>
                  )}
                  <img 
                    src={car.main_image} 
                    alt={car.title} 
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform" 
                  />
                  <CardContent className="p-6">
                    <h3 className="font-bold text-xl mb-2">{car.title}</h3>
                    <p className="text-2xl font-bold text-accent mb-2">
                      Rs. {car.price.toLocaleString()}
                    </p>
                    <p className="text-sm text-muted-foreground line-clamp-2 mb-4">
                      {car.short_description}
                    </p>
                    <div className="flex gap-4 text-sm text-muted-foreground mb-4">
                      <span>{car.year}</span>
                      <span>•</span>
                      <span>{car.transmission}</span>
                      <span>•</span>
                      <span>{car.fuel_type}</span>
                    </div>
                    <Button variant="default" className="w-full group-hover:bg-accent transition-colors">
                      View Details
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Cars;
