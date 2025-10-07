import { Link } from "react-router-dom";
import { Car } from "@/types/car";
import { Calendar, Gauge, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

interface CarCardProps {
  car: Car;
}

const CarCard = ({ car }: CarCardProps) => {
  const imageUrl =
    car._embedded?.["wp:featuredmedia"]?.[0]?.source_url ||
    "https://images.unsplash.com/photo-1494976388531-d1058494cdd8?w=800";
  
  const title = car.title.rendered;
  const price = car.acf?.price || "Contact for Price";
  const year = car.acf?.year || "N/A";
  const mileage = car.acf?.mileage || "N/A";

  return (
    <Card className="group overflow-hidden hover:shadow-xl transition-all duration-300 border-border">
      <div className="relative overflow-hidden aspect-[4/3]">
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute top-4 right-4 bg-accent text-primary-foreground px-3 py-1 rounded-full text-sm font-bold">
          ${typeof price === 'number' ? price.toLocaleString() : price}
        </div>
      </div>
      
      <CardContent className="p-6">
        <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-accent transition-colors">
          {title}
        </h3>
        
        <div className="flex items-center gap-4 mb-4 text-sm text-muted-foreground">
          <div className="flex items-center gap-1">
            <Calendar className="h-4 w-4" />
            <span>{year}</span>
          </div>
          <div className="flex items-center gap-1">
            <Gauge className="h-4 w-4" />
            <span>{mileage}</span>
          </div>
        </div>

        <Link to={`/cars/${car.id}`}>
          <Button 
            variant="default" 
            className="w-full bg-primary hover:bg-accent group/btn text-primary-foreground"
          >
            View Details
            <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
          </Button>
        </Link>
      </CardContent>
    </Card>
  );
};

export default CarCard;
