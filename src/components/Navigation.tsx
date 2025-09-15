import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, MapPin, Clock } from "lucide-react";
import { Link } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import UserProfile from "@/components/auth/UserProfile";
import AuthModal from "@/components/auth/AuthModal";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showAuthModal, setShowAuthModal] = useState(false);
  const { user } = useAuth();

  const navItems = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Media", href: "/media" },
    { name: "Get Involved", href: "/get-involved" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <>
      {/* Top Info Bar */}
      <div className="bg-primary text-primary-foreground py-2 px-4">
        <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center text-sm">
          <div className="flex items-center gap-4 mb-2 sm:mb-0">
            <div className="flex items-center gap-1">
              <Clock className="h-4 w-4" />
              <span>Fri 18:00-20:00 | Sun 10:00-13:00</span>
            </div>
            <div className="flex items-center gap-1">
              <MapPin className="h-4 w-4" />
              <span>4545 Langeni St, Daveyton</span>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <span>kingdomlifeglobal@gmail.com</span>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="bg-background/95 backdrop-blur-md border-b sticky top-0 z-50">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center">
              <h1 className="font-heading text-2xl font-black tracking-tight uppercase bg-gradient-to-r from-primary to-gold bg-clip-text text-transparent">
                Kingdom Life Global
              </h1>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className="text-foreground hover:text-primary transition-colors font-medium"
                >
                  {item.name}
                </Link>
              ))}
              <Link to="/give">
                <Button className="btn-gold text-white mb-3 font-semibold">
                  Give Online
                </Button>
              </Link>
              {user ? (
                <UserProfile />
              ) : (
                <Button 
                  variant="outline" 
                  onClick={() => setShowAuthModal(true)}
                >
                  Sign In
                </Button>
              )}
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsOpen(!isOpen)}
              >
                {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </Button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isOpen && (
            <div className="md:hidden py-4 border-t">
              <div className="flex flex-col space-y-2">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    className="px-4 py-2 text-foreground hover:text-primary transition-colors font-medium"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
                <div className="px-4 pt-2 space-y-2">
                  <Link to="/give">
                    <Button className="btn-gold text-white mb-3 font-semibold w-full">
                      Give Online
                    </Button>
                  </Link>
                  {user ? (
                    <div className="flex justify-center">
                      <UserProfile />
                    </div>
                  ) : (
                    <Button 
                      variant="outline" 
                      className="w-full"
                      onClick={() => setShowAuthModal(true)}
                    >
                      Sign In
                    </Button>
                  )}
                </div>
              </div>
            </div>
          )}
        </div>
      </nav>
      
      <AuthModal 
        isOpen={showAuthModal} 
        onClose={() => setShowAuthModal(false)}
        defaultTab="signin"
      />
    </>
  );
};

export default Navigation;