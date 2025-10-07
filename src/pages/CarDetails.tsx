import { useParams, Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { fetchCarById } from "@/lib/api";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Phone, Mail, Calendar, Gauge, Fuel, Settings } from "lucide-react";
import { Skeleton } from "@/components/ui/skeleton";

const CarDetails = () => {
  const { id } = useParams<{ id: string }>();

  const { data: car, isLoading, error } = useQuery({
    queryKey: ["car", id],
    queryFn: () => fetchCarById(id!),
    enabled: !!id,
  });

  if (isLoading) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <div className="container mx-auto px-4 pt-32 pb-12">
          <Skeleton className="h-96 w-full mb-8 rounded-lg" />
          <Skeleton className="h-12 w-3/4 mb-4" />
          <Skeleton className="h-6 w-1/2 mb-8" />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[1, 2, 3, 4].map((i) => (
              <Skeleton key={i} className="h-24 rounded-lg" />
            ))}
          </div>
        </div>
      </div>
    );
  }

  if (error || !car) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <div className="container mx-auto px-4 pt-32 pb-12 text-center">
          <p className="text-lg text-destructive mb-4">Failed to load car details.</p>
          <Link to="/cars">
            <Button variant="outline">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Cars
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  const imageUrl =
    car._embedded?.["wp:featuredmedia"]?.[0]?.source_url ||
    "https://images.unsplash.com/photo-1494976388531-d1058494cdd8?w=1920";

  const title = car.title.rendered;
  const price = car.acf?.price || "Contact for Price";
  const year = car.acf?.year || "N/A";
  const mileage = car.acf?.mileage || "N/A";
  const fuelType = car.acf?.fuel_type || "N/A";
  const transmission = car.acf?.transmission || "N/A";
  const engine = car.acf?.engine || "N/A";
  const color = car.acf?.color || "N/A";

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <div className="pt-32 pb-12">
        <div className="container mx-auto px-4">
          <Link to="/cars">
            <Button variant="ghost" className="mb-6">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Cars
            </Button>
          </Link>

          {/* Main Image */}
          <div className="rounded-xl overflow-hidden mb-8 shadow-lg">
            <img
              src={imageUrl}
              alt={title}
              className="w-full h-[500px] object-cover"
            />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Details */}
            <div className="lg:col-span-2">
              <h1 className="text-4xl md:text-5xl font-bold mb-4" style={{ fontFamily: "'Bebas Neue', sans-serif" }}>
                {title}
              </h1>
              <p className="text-3xl font-bold text-accent mb-6">
                ${typeof price === 'number' ? price.toLocaleString() : price}
              </p>

              {/* Specifications Grid */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                <div className="bg-muted p-4 rounded-lg">
                  <Calendar className="h-6 w-6 text-accent mb-2" />
                  <p className="text-sm text-muted-foreground">Year</p>
                  <p className="font-bold">{year}</p>
                </div>
                <div className="bg-muted p-4 rounded-lg">
                  <Gauge className="h-6 w-6 text-accent mb-2" />
                  <p className="text-sm text-muted-foreground">Mileage</p>
                  <p className="font-bold">{mileage}</p>
                </div>
                <div className="bg-muted p-4 rounded-lg">
                  <Fuel className="h-6 w-6 text-accent mb-2" />
                  <p className="text-sm text-muted-foreground">Fuel</p>
                  <p className="font-bold">{fuelType}</p>
                </div>
                <div className="bg-muted p-4 rounded-lg">
                  <Settings className="h-6 w-6 text-accent mb-2" />
                  <p className="text-sm text-muted-foreground">Transmission</p>
                  <p className="font-bold">{transmission}</p>
                </div>
              </div>

              {/* Additional Details */}
              <div className="bg-card p-6 rounded-lg border mb-8">
                <h2 className="text-2xl font-bold mb-4">Specifications</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex justify-between py-2 border-b">
                    <span className="text-muted-foreground">Engine</span>
                    <span className="font-medium">{engine}</span>
                  </div>
                  <div className="flex justify-between py-2 border-b">
                    <span className="text-muted-foreground">Color</span>
                    <span className="font-medium">{color}</span>
                  </div>
                  <div className="flex justify-between py-2 border-b">
                    <span className="text-muted-foreground">Transmission</span>
                    <span className="font-medium">{transmission}</span>
                  </div>
                  <div className="flex justify-between py-2 border-b">
                    <span className="text-muted-foreground">Fuel Type</span>
                    <span className="font-medium">{fuelType}</span>
                  </div>
                </div>
              </div>

              {/* Description */}
              <div className="bg-card p-6 rounded-lg border">
                <h2 className="text-2xl font-bold mb-4">Description</h2>
                <div
                  className="prose prose-sm max-w-none"
                  dangerouslySetInnerHTML={{ __html: car.content.rendered }}
                />
              </div>
            </div>

            {/* Contact Sidebar */}
            <div className="lg:col-span-1">
              <div className="bg-primary text-primary-foreground p-6 rounded-lg sticky top-24">
                <h3 className="text-2xl font-bold mb-4">Interested?</h3>
                <p className="text-secondary mb-6">
                  Contact us today to schedule a test drive or get more information about this vehicle.
                </p>
                <div className="space-y-3">
                  <Link to="/contact">
                    <Button className="w-full bg-accent hover:bg-accent/90 text-primary-foreground">
                      <Mail className="mr-2 h-4 w-4" />
                      Send Message
                    </Button>
                  </Link>
                  <a href="tel:+923001234567">
                    <Button variant="outline" className="w-full border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                      <Phone className="mr-2 h-4 w-4" />
                      Call Now
                    </Button>
                  </a>
                  <a href="https://wa.me/923001234567" target="_blank" rel="noopener noreferrer">
                    <Button variant="outline" className="w-full border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                      WhatsApp
                    </Button>
                  </a>
                </div>
                <div className="mt-6 pt-6 border-t border-primary-foreground/20">
                  <p className="text-sm text-secondary">
                    📍 123 Main Street, Karachi
                  </p>
                  <p className="text-sm text-secondary mt-2">
                    📞 +92 300 1234567
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default CarDetails;
