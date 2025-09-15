import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { Heart, Handshake, Calendar, Users } from "lucide-react";

const CallToAction = () => {
  const actions = [
    {
      icon: Calendar,
      title: "Visit Us",
      description: "Join our vibrant community this Sunday",
      buttonText: "Plan Your Visit",
      variant: "primary"
    },
    {
      icon: Heart,
      title: "Partner With Us",
      description: "Support our mission to reach nations",
      buttonText: "Give Online",
      variant: "gold"
    },
    {
      icon: Handshake,
      title: "Get Involved",
      description: "Discover ways to serve and grow",
      buttonText: "Volunteer",
      variant: "outline"
    },
    {
      icon: Users,
      title: "Stay Connected",
      description: "Never miss updates and events",
      buttonText: "Join Newsletter",
      variant: "outline"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-background to-secondary/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-heading text-4xl md:text-6xl font-black mb-6 tracking-tight uppercase">
            Take Your{" "}
            <span className="bg-gradient-to-r from-primary to-gold bg-clip-text text-transparent">
              Next Step
            </span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Whether you're visiting for the first time or looking to deepen your faith, 
            we have opportunities for you to connect and grow.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {actions.map((action, index) => {
            const IconComponent = action.icon;
            return (
              <Card key={index} className="church-card p-8 text-center bg-card border-0">
                <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-primary/10 to-gold/10 rounded-full flex items-center justify-center">
                  <IconComponent className="h-10 w-10 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-foreground">
                  {action.title}
                </h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {action.description}
                </p>
                {action.buttonText === 'Give Online' ? (
                  <Link to="/give">
                    <Button 
                      className={`w-full font-semibold ${
                        action.variant === 'gold' ? 'btn-gold text-white' : 
                        action.variant === 'primary' ? 'btn-royal text-white' : ''
                      }`}
                      variant={action.variant === 'outline' ? 'outline' : 'default'}
                    >
                      {action.buttonText}
                    </Button>
                  </Link>
                ) : action.buttonText === 'Plan Your Visit' ? (
                  <Link to="/plan-visit">
                    <Button 
                      className={`w-full font-semibold ${
                        action.variant === 'gold' ? 'btn-gold text-white' : 
                        action.variant === 'primary' ? 'btn-royal text-white' : ''
                      }`}
                      variant={action.variant === 'outline' ? 'outline' : 'default'}
                    >
                      {action.buttonText}
                    </Button>
                  </Link>
                ) : (
                  <Button 
                    className={`w-full font-semibold ${
                      action.variant === 'gold' ? 'btn-gold text-white' : 
                      action.variant === 'primary' ? 'btn-royal text-white' : ''
                    }`}
                    variant={action.variant === 'outline' ? 'outline' : 'default'}
                  >
                    {action.buttonText}
                  </Button>
                )}
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CallToAction;