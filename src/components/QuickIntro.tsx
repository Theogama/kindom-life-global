import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { Heart, Users, Globe, BookOpen } from "lucide-react";

const QuickIntro = () => {
  const features = [
    {
      icon: Heart,
      title: "Life Transformation",
      description: "Experience the power of God's love and find new meaning in your life."
    },
    {
      icon: Users,
      title: "Community",
      description: "Join a loving family that supports and encourages spiritual growth."
    },
    {
      icon: Globe,
      title: "Global Impact",
      description: "Be part of a ministry that reaches nations with the Gospel message."
    },
    {
      icon: BookOpen,
      title: "Biblical Teaching",
      description: "Receive sound doctrine and practical wisdom from God's Word."
    }
  ];

  return (
    <section id="welcome" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="font-heading text-4xl md:text-6xl font-black mb-6 text-foreground tracking-tight uppercase">
            Welcome to{" "}
            <span className="bg-gradient-to-r from-primary to-gold bg-clip-text text-transparent">
              Kingdom Life Global
            </span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8">
            Founded in 2014 in Ebumnandini Tsepisong, Johannesburg, Kingdom Life Global has grown 
            to impact lives across South Africa. Our main branch in Daveyton serves as a beacon 
            of hope, bringing the mind of Christ to nations through God's word.
          </p>
          <Link to="/about">
            <Button size="lg" variant="outline" className="font-semibold">
              Learn More About Us
            </Button>
          </Link>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <Card 
                key={index} 
                className="church-card p-6 text-center bg-card border-0 hover:border-primary/20"
              >
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-primary to-gold rounded-full flex items-center justify-center">
                  <IconComponent className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-foreground">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground">
                  {feature.description}
                </p>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default QuickIntro;