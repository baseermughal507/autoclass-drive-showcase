import { useParams, Link, Navigate } from "react-router-dom";
import { cars } from "@/data/cars";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Phone, Mail, MessageSquare, Calendar, Gauge, Fuel, Settings, MapPin, Palette, Factory, Car as CarIcon } from "lucide-react";

const CarDetails = () => {
  const { id } = useParams();
  
  const car = cars.find(c => c.id === id);

  if (!car) {
    return <Navigate to="/" replace />;
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <div className="container mx-auto px-4 py-8">
        <Link to="/">
          <Button variant="ghost" className="mb-6">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Cars
          </Button>
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="relative mb-6">
              {car.is_sold && (
                <div className="absolute top-4 right-4 z-10">
                  <Badge variant="destructive" className="text-xl px-6 py-3">SOLD</Badge>
                </div>
              )}
              <img
                src={car.main_image}
                alt={car.title}
                className="w-full h-[500px] object-cover rounded-lg"
              />
            </div>

            <div className="mb-6">
              <h1 className="text-4xl font-bold mb-4">{car.title}</h1>
              <p className="text-3xl font-bold text-accent mb-2">
                Rs. {car.price.toLocaleString()}
              </p>
              <p className="text-muted-foreground">{car.short_description}</p>
            </div>

            <Card className="p-6 mb-6">
              <h2 className="text-2xl font-bold mb-6">Specifications</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                <div className="flex items-start gap-3">
                  <Calendar className="h-5 w-5 text-accent mt-1" />
                  <div>
                    <p className="text-sm text-muted-foreground">Year</p>
                    <p className="font-semibold">{car.year}</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Gauge className="h-5 w-5 text-accent mt-1" />
                  <div>
                    <p className="text-sm text-muted-foreground">Mileage</p>
                    <p className="font-semibold">{car.mileage}</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Fuel className="h-5 w-5 text-accent mt-1" />
                  <div>
                    <p className="text-sm text-muted-foreground">Fuel Type</p>
                    <p className="font-semibold">{car.fuel_type}</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Settings className="h-5 w-5 text-accent mt-1" />
                  <div>
                    <p className="text-sm text-muted-foreground">Transmission</p>
                    <p className="font-semibold">{car.transmission}</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CarIcon className="h-5 w-5 text-accent mt-1" />
                  <div>
                    <p className="text-sm text-muted-foreground">Engine</p>
                    <p className="font-semibold">{car.engine_capacity}</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Palette className="h-5 w-5 text-accent mt-1" />
                  <div>
                    <p className="text-sm text-muted-foreground">Color</p>
                    <p className="font-semibold">{car.color}</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 text-accent mt-1" />
                  <div>
                    <p className="text-sm text-muted-foreground">Location</p>
                    <p className="font-semibold">{car.city}, {car.province}</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Factory className="h-5 w-5 text-accent mt-1" />
                  <div>
                    <p className="text-sm text-muted-foreground">Assembly</p>
                    <p className="font-semibold">{car.assembly}</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CarIcon className="h-5 w-5 text-accent mt-1" />
                  <div>
                    <p className="text-sm text-muted-foreground">Body Type</p>
                    <p className="font-semibold">{car.body_type}</p>
                  </div>
                </div>
              </div>
              <div className="mt-6 pt-6 border-t">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Ad Reference: {car.ad_reference}</span>
                  <span className="text-muted-foreground">Updated: {car.updated_at}</span>
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <h2 className="text-2xl font-bold mb-4">Description</h2>
              <p className="text-muted-foreground leading-relaxed">{car.description}</p>
            </Card>
          </div>

          <div className="lg:col-span-1">
            <Card className="p-6 sticky top-4">
              <h2 className="text-2xl font-bold mb-4">Contact Seller</h2>
              <div className="space-y-4">
                <Button className="w-full" size="lg">
                  <MessageSquare className="mr-2 h-5 w-5" />
                  Send Message
                </Button>
                <Button className="w-full" variant="outline" size="lg">
                  <Phone className="mr-2 h-5 w-5" />
                  Call Now
                </Button>
                <Button className="w-full bg-green-600 hover:bg-green-700 text-white" size="lg">
                  <MessageSquare className="mr-2 h-5 w-5" />
                  WhatsApp
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default CarDetails;
