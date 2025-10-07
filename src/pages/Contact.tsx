import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Error",
        description: "Please fill in all required fields",
        variant: "destructive",
      });
      return;
    }

    // Success message
    toast({
      title: "Message Sent!",
      description: "Thank you for contacting us. We'll get back to you soon.",
    });

    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      message: "",
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-12 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-4" style={{ fontFamily: "'Bebas Neue', sans-serif" }}>
            Contact Us
          </h1>
          <p className="text-lg text-secondary">
            Get in touch with our team - we're here to help
          </p>
        </div>
      </section>

    <section className="py-16">
  <div className="container mx-auto px-4">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
      {/* Contact Form */}
      <div className="bg-card p-8 rounded-xl shadow-md h-full flex flex-col justify-between">
        <div>
          <h2 className="text-3xl font-bold mb-6">Send us a Message</h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-2">
                Full Name *
              </label>
              <Input
                id="name"
                type="text"
                placeholder="Enter Your Name"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-2">
                Email Address *
              </label>
              <Input
                id="email"
                type="email"
                placeholder="Enter your Email Address"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                required
              />
            </div>
            <div>
              <label htmlFor="phone" className="block text-sm font-medium mb-2">
                Phone Number
              </label>
              <Input
                id="phone"
                type="tel"
                value={formData.phone}
                onChange={(e) =>
                  setFormData({ ...formData, phone: e.target.value })
                }
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-2">
                Message *
              </label>
              <Textarea
                id="message"
                placeholder="Tell us how we can help you..."
                rows={6}
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                required
              />
            </div>
            <Button
              type="submit"
              className="w-full bg-accent hover:bg-accent/90 text-primary-foreground"
            >
              Send Message
            </Button>
          </form>
        </div>
      </div>

      {/* Contact Info */}
      <div className="bg-card p-8 rounded-xl shadow-md h-full flex flex-col justify-between">
        <div>
          <h2 className="text-3xl font-bold mb-8">Get in Touch</h2>
          <div className="space-y-10">
            <div className="flex items-start space-x-5">
              <div className="bg-accent/10 p-4 rounded-lg">
                <MapPin className="h-7 w-7 text-accent" />
              </div>
              <div>
                <h3 className="font-bold mb-1">Visit Our Showroom</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Main Service Road Near Kashmir Highway <br />
                  Islamabad, Pakistan
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-5">
              <div className="bg-accent/10 p-4 rounded-lg">
                <Phone className="h-7 w-7 text-accent" />
              </div>
              <div>
                <h3 className="font-bold mb-1">Call Us</h3>
                <p className="text-muted-foreground text-lg font-medium">+92 334 5215337</p>
                <a
                  href="https://wa.me/923345215337"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent hover:underline text-sm"
                >
                  WhatsApp Available
                </a>
              </div>
            </div>

            <div className="flex items-start space-x-5">
              <div className="bg-accent/10 p-4 rounded-lg">
                <Mail className="h-7 w-7 text-accent" />
              </div>
              <div>
                <h3 className="font-bold mb-1">Email Us</h3>
                <p className="text-muted-foreground text-lg font-medium">
                  info@autoclassmotors.com
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-5">
              <div className="bg-accent/10 p-4 rounded-lg">
                <Clock className="h-7 w-7 text-accent" />
              </div>
              <div>
                <h3 className="font-bold mb-1">Business Hours</h3>
                <p className="text-muted-foreground text-lg font-medium">
                  Monday - Sunday: 1:00 PM - 11:00 PM
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
      {/* Map Section */}
<section className="py-20 bg-muted">
  <div className="container mx-auto px-4 text-center">
    <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ fontFamily: "'Bebas Neue', sans-serif" }}>
      Visit Our Showroom
    </h2>
    <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
      Find us easily at Autoclass Motors & Real Estate. We’re located in a prime area, ready to help you find your perfect car.
    </p>
    <div className="flex justify-center">
      <iframe
        title="Autoclass Motors Location"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3949.477893439137!2d72.98396726779075!3d33.654523977355566!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38df977d644d463b%3A0x85990a70bb5d6d7d!2sAUTO%20CLASS%20MOTORS%20%26%20REAL%20ESTATE!5e0!3m2!1sen!2s!4v1759851093011!5m2!1sen!2s"
        width="100%"
        height="450"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="rounded-2xl shadow-lg max-w-5xl w-full"
      ></iframe>
    </div>
  </div>
</section>


      

      <Footer />
    </div>
  );
};

export default Contact;
