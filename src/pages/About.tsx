import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Users, Target, Award, TrendingUp } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-12 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-4" style={{ fontFamily: "'Bebas Neue', sans-serif" }}>
            About Autoclass Motors
          </h1>
          <p className="text-lg text-secondary max-w-2xl">
            Your trusted partner in premium automotive retail
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Story</h2>
              <p className="text-lg text-muted-foreground mb-4">
                Founded with a passion for automotive excellence, Autoclass Motors has been serving customers with premium new and pre-owned vehicles for years. We believe that buying a car should be an exciting and transparent experience.
              </p>
              <p className="text-lg text-muted-foreground mb-4">
                Our mission is simple: to provide our customers with the finest selection of vehicles, backed by exceptional service and expert knowledge. Every car in our showroom is carefully inspected and verified to meet our high standards.
              </p>
              <p className="text-lg text-muted-foreground">
                Whether you're looking for a brand-new luxury vehicle or a quality pre-owned car, Autoclass Motors is your destination for automotive excellence.
              </p>
            </div>
            <div className="rounded-xl overflow-hidden shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1562911791-c7a97b729ec5?w=800"
                alt="Showroom"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-card p-6 rounded-xl text-center hover:shadow-lg transition-shadow">
              <div className="bg-accent/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-accent" />
              </div>
              <h3 className="text-xl font-bold mb-3">Customer First</h3>
              <p className="text-muted-foreground">
                Your satisfaction and trust are our top priorities in every transaction.
              </p>
            </div>
            <div className="bg-card p-6 rounded-xl text-center hover:shadow-lg transition-shadow">
              <div className="bg-accent/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="h-8 w-8 text-accent" />
              </div>
              <h3 className="text-xl font-bold mb-3">Quality Focus</h3>
              <p className="text-muted-foreground">
                Every vehicle is thoroughly inspected to ensure the highest quality standards.
              </p>
            </div>
            <div className="bg-card p-6 rounded-xl text-center hover:shadow-lg transition-shadow">
              <div className="bg-accent/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-accent" />
              </div>
              <h3 className="text-xl font-bold mb-3">Excellence</h3>
              <p className="text-muted-foreground">
                We strive for excellence in everything we do, from sales to after-sales service.
              </p>
            </div>
            <div className="bg-card p-6 rounded-xl text-center hover:shadow-lg transition-shadow">
              <div className="bg-accent/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="h-8 w-8 text-accent" />
              </div>
              <h3 className="text-xl font-bold mb-3">Innovation</h3>
              <p className="text-muted-foreground">
                Continuously improving our processes to serve you better every day.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">What We Offer</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-card p-8 rounded-xl border hover:border-accent transition-colors">
              <h3 className="text-2xl font-bold mb-4 text-accent">New Cars</h3>
              <p className="text-muted-foreground">
                Browse the latest models from top manufacturers with full warranty and dealer support.
              </p>
            </div>
            <div className="bg-card p-8 rounded-xl border hover:border-accent transition-colors">
              <h3 className="text-2xl font-bold mb-4 text-accent">Pre-Owned Cars</h3>
              <p className="text-muted-foreground">
                Quality certified pre-owned vehicles that have been thoroughly inspected and verified.
              </p>
            </div>
            <div className="bg-card p-8 rounded-xl border hover:border-accent transition-colors">
              <h3 className="text-2xl font-bold mb-4 text-accent">Financing</h3>
              <p className="text-muted-foreground">
                Flexible financing options to help you drive your dream car home today.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Visit Our Showroom</h2>
          <p className="text-lg text-secondary mb-8 max-w-2xl mx-auto">
            Experience the Autoclass Motors difference. Visit us today and let our expert team help you find your perfect vehicle.
          </p>
          <a href="/contact">
            <button className="bg-accent hover:bg-accent/90 text-primary-foreground px-8 py-4 rounded-lg font-bold text-lg transition-colors">
              Get in Touch
            </button>
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
