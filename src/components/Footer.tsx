import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { MapPin, Phone, Mail, Clock, Facebook, Instagram, Youtube, Twitter } from "lucide-react";

const Footer = () => {
  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Youtube, href: "#", label: "YouTube" },
    { icon: Twitter, href: "#", label: "Twitter" }
  ];

  const quickLinks = [
    { name: "About Us", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Media", href: "/media" },
    { name: "Contact", href: "/contact" }
  ];

  const ministries = [
    "Youth Ministry",
    "Women's Ministry",
    "Men's Ministry",
    "Children's Ministry"
  ];

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
          {/* Church Info */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-gold-light to-gold bg-clip-text text-transparent">
              Kingdom Life Global
            </h3>
            <p className="text-primary-foreground/80 leading-relaxed">
              Bringing the mind of Christ to nations through God's word. Join our community 
              and experience life-changing transformation.
            </p>
            <div className="space-y-2">
              <div className="flex items-start gap-2">
                <MapPin className="h-5 w-5 mt-0.5 text-gold-light" />
                <span className="text-sm">
                  4545 Langeni Street<br />
                  Daveyton, Benoni<br />
                  South Africa
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-5 w-5 text-gold-light" />
                <span className="text-sm">kingdomlifeglobal@gmail.com</span>
              </div>
            </div>
          </div>

          {/* Service Times */}
          <div className="space-y-4">
            <h4 className="text-xl font-semibold text-gold-light">Service Times</h4>
            <div className="space-y-3">
              <div className="flex items-start gap-2">
                <Clock className="h-5 w-5 mt-0.5 text-gold-light" />
                <div>
                  <div className="font-medium">Friday Service</div>
                  <div className="text-sm text-primary-foreground/80">18:00 - 20:00</div>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <Clock className="h-5 w-5 mt-0.5 text-gold-light" />
                <div>
                  <div className="font-medium">Sunday Service</div>
                  <div className="text-sm text-primary-foreground/80">10:00 - 13:00</div>
                </div>
              </div>
            </div>
            <Link to="/plan-visit">
              <Button 
                variant="secondary" 
                size="sm" 
                className="mt-4"
              >
                Plan Your Visit
              </Button>
            </Link>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-xl font-semibold text-gold-light">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.href} 
                    className="text-primary-foreground/80 hover:text-gold-light transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="pt-4">
              <h5 className="font-semibold mb-2 text-gold-light">Ministries</h5>
              <ul className="space-y-1">
                {ministries.map((ministry) => (
                  <li key={ministry} className="text-sm text-primary-foreground/80">
                    {ministry}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Connect & Give */}
          <div className="space-y-4">
            <h4 className="text-xl font-semibold text-gold-light">Stay Connected</h4>
            <p className="text-sm text-primary-foreground/80">
              Follow us on social media for updates, inspiration, and community highlights.
            </p>
            
            {/* Social Links */}
            <div className="flex gap-3">
              {socialLinks.map((social) => {
                const IconComponent = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    className="w-10 h-10 bg-primary-foreground/10 hover:bg-gold/20 rounded-full flex items-center justify-center transition-colors group"
                    aria-label={social.label}
                  >
                    <IconComponent className="h-5 w-5 text-primary-foreground/80 group-hover:text-gold-light" />
                  </a>
                );
              })}
            </div>

            {/* Newsletter */}
            <div className="pt-4">
            <Link to="/give">
              <Button 
                className="btn-gold text-white font-semibold w-full"
              >
                Give Online
              </Button>
            </Link>
              <Button 
                variant="outline" 
                className="w-full mt-2 border-primary-foreground/20 text-black bg-primary-foreground hover:bg-primary-foreground/90"
                onClick={() => {
                  const email = prompt("Enter your email address:");
                  if (email && email.includes('@')) {
                    alert("Thank you for subscribing! You'll receive notifications about updates.");
                  } else if (email) {
                    alert("Please enter a valid email address.");
                  }
                }}
              >
                Newsletter Signup
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-foreground/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex flex-wrap justify-center md:justify-start gap-6 text-sm">
              <Link 
                to="/terms" 
                className="text-primary-foreground/60 hover:text-gold-light transition-colors"
              >
                Terms of Service
              </Link>
              <Link 
                to="/privacy" 
                className="text-primary-foreground/60 hover:text-gold-light transition-colors"
              >
                Privacy Policy
              </Link>
              <Link 
                to="/contact" 
                className="text-primary-foreground/60 hover:text-gold-light transition-colors"
              >
                Contact Us
              </Link>
            </div>
            <p className="text-primary-foreground/60 text-sm text-center md:text-right">
              © 2024 Kingdom Life Global (611 Church). All rights reserved.
            </p>
          </div>
          <div className="text-center mt-4">
            <p className="text-gold-light text-sm">
              Where your life is given a new meaning
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;