import { Link } from "react-router-dom";
import { Car, Facebook, Instagram, Twitter, Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <div className="bg-accent p-2 rounded-lg">
                <Car className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-lg font-bold">AUTOCLASS MOTORS</h3>
                <p className="text-xs text-secondary">Drive Luxury. Drive Smart.</p>
              </div>
            </div>
            <p className="text-sm text-muted-foreground">
              Your trusted partner for premium new and used cars. Quality vehicles, exceptional service.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-bold mb-4 text-accent">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-sm hover:text-accent transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/cars" className="text-sm hover:text-accent transition-colors">
                  Cars for Sale
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-sm hover:text-accent transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-sm hover:text-accent transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-sm font-bold mb-4 text-accent">Services</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>New Cars</li>
              <li>Used Cars</li>
              <li>Test Drives</li>
              <li>Trade-In</li>
              <li>Financing</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-bold mb-4 text-accent">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <Phone className="h-4 w-4 mt-1 text-accent flex-shrink-0" />
                <span className="text-sm">+92 334 5215337</span>
              </li>
              <li className="flex items-start space-x-3">
                <Mail className="h-4 w-4 mt-1 text-accent flex-shrink-0" />
                <span className="text-sm">info@autoclassmotors.com</span>
              </li>
              <li className="flex items-start space-x-3">
                <MapPin className="h-4 w-4 mt-1 text-accent flex-shrink-0" />
                <span className="text-sm">Main Service Road Near Kashmir Highway Islamabad, Pakistan</span>
              </li>
            </ul>
            <div className="flex space-x-4 mt-4">
              <a href="#" className="hover:text-accent transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-accent transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-accent transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Autoclass Motors. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
