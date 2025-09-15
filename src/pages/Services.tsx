import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Clock, MapPin, Calendar, Users, Heart, BookOpen } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Users,
      title: "Sunday Service",
      time: "10:00 AM - 1:00 PM",
      description: "Join us for worship, fellowship, and powerful teaching from God's Word. Experience life-changing moments in the presence of God.",
      features: ["Worship & Praise", "Biblical Teaching", "Prayer Ministry", "Fellowship"]
    },
    {
      icon: Heart,
      title: "Friday Prayer & Fellowship",
      time: "6:00 PM - 8:00 PM", 
      description: "Come together for intimate prayer, worship, and community building. A time to seek God's face and connect with fellow believers.",
      features: ["Corporate Prayer", "Worship", "Testimonies", "Community Building"]
    },
    {
      icon: BookOpen,
      title: "Bible Study",
      time: "Various Times",
      description: "Dive deeper into God's Word through our weekly Bible study sessions. Grow in knowledge and spiritual maturity.",
      features: ["Expository Teaching", "Group Discussion", "Practical Application", "Prayer"]
    }
  ];

  const specialEvents = [
    "Crusades & Outreach Events",
    "Leadership Conferences", 
    "Youth & Children Programs",
    "Marriage & Family Seminars",
    "Healing & Deliverance Services",
    "Community Outreach Programs"
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-primary/10 to-background">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-heading text-4xl md:text-6xl font-black mb-6 tracking-tight uppercase">
            Our{" "}
            <span className="bg-gradient-to-r from-primary to-gold bg-clip-text text-transparent">
              Services
            </span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Join us as we gather to worship, learn, and grow together in faith. 
            Every service is designed to bring you closer to God and community.
          </p>
        </div>
      </section>

      {/* Service Times */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-heading text-3xl md:text-5xl font-black mb-6 tracking-tight uppercase">
              Service Times
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <Card key={index} className="church-card border-0 h-full">
                  <CardHeader className="text-center">
                    <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-primary/10 to-gold/10 rounded-full flex items-center justify-center">
                      <IconComponent className="h-8 w-8 text-primary" />
                    </div>
                    <CardTitle className="text-xl font-semibold">
                      {service.title}
                    </CardTitle>
                    <div className="flex items-center justify-center gap-2 text-primary font-semibold">
                      <Clock className="h-4 w-4" />
                      {service.time}
                    </div>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-center mb-6 leading-relaxed">
                      {service.description}
                    </CardDescription>
                    <div className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-sm">
                          <div className="w-2 h-2 bg-primary rounded-full"></div>
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Location */}
      <section className="py-20 bg-secondary/20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-heading text-3xl md:text-5xl font-black mb-6 tracking-tight uppercase">
              Location
            </h2>
            <div className="bg-card rounded-lg p-8 shadow-lg">
              <div className="flex items-center justify-center gap-2 mb-4 text-primary">
                <MapPin className="h-6 w-6" />
                <span className="text-lg font-semibold">4545 Langeni Street</span>
              </div>
              <p className="text-muted-foreground mb-6">
                Daveyton, Benoni, South Africa
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <Link to="/plan-visit">
                  <Button className="btn-royal text-white font-semibold">
                    <Calendar className="h-4 w-4 mr-2" />
                    Plan Your Visit
                  </Button>
                </Link>
                <Button 
                  variant="outline" 
                  className="font-semibold"
                  onClick={() => {
                    const addr = encodeURIComponent('4545 Langeni Street, Daveyton, Benoni, South Africa');
                    window.open(`https://www.google.com/maps?q=${addr}`, '_blank');
                  }}
                >
                  <MapPin className="h-4 w-4 mr-2" />
                  Get Directions
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Special Events */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-heading text-3xl md:text-5xl font-black mb-6 tracking-tight uppercase">
            Special Events
          </h2>
          <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto">
            Beyond our regular services, we host special events throughout the year 
            to strengthen our community and reach out to others.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
            {specialEvents.map((event, index) => (
              <div key={index} className="bg-card rounded-lg p-6 border">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-gradient-to-r from-primary to-gold rounded-full"></div>
                  <span className="font-medium">{event}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;