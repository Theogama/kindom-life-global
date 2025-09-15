import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Heart, Users, Globe, BookOpen, Target, Eye } from "lucide-react";

const About = () => {
  const leadership = [
    {
      name: "Apostle Michael Rhema",
      role: "Senior Pastor & Founder",
      description: "Leading Kingdom Life Global with passion and vision since 2014."
    },
    {
      name: "Refiloe Rhema", 
      role: "Co-Pastor",
      description: "Partnering in ministry with love, wisdom, and dedication to God's people."
    }
  ];

  const values = [
    {
      icon: Heart,
      title: "Love",
      description: "We show Christ's love through genuine care and compassion for all people."
    },
    {
      icon: BookOpen,
      title: "Truth",
      description: "We stand on God's Word as our foundation for life and ministry."
    },
    {
      icon: Users,
      title: "Community",
      description: "We believe in the power of fellowship and supporting one another."
    },
    {
      icon: Globe,
      title: "Mission",
      description: "We are committed to reaching nations with the Gospel message."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary/5 to-gold/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Our{" "}
              <span className="bg-gradient-to-r from-primary to-gold bg-clip-text text-transparent">
                Story
              </span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Since 2014, Kingdom Life Global has been transforming lives and bringing 
              the mind of Christ to nations through God's powerful word.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-bold mb-6 text-foreground">
                  Founded in Faith, Growing in Grace
                </h2>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    Kingdom Life Global began its journey in 2014 in Ebumnandini Tsepisong, 
                    Johannesburg, with a simple but powerful vision: to bring the mind of 
                    Christ to nations through God's word.
                  </p>
                  <p>
                    What started as a small gathering has grown into a thriving ministry 
                    that impacts lives across South Africa. Our main branch in Daveyton 
                    serves as a beacon of hope and transformation in the community.
                  </p>
                  <p>
                    Through radio, television, crusades, and various platforms, we continue 
                    to fulfill our mission of winning souls, discipling them with love, and 
                    sending them as messengers of the Gospel.
                  </p>
                </div>
              </div>
              <div className="bg-gradient-to-br from-primary/10 to-gold/10 rounded-2xl p-8">
                <div className="space-y-6">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-primary">2014</div>
                    <div className="text-muted-foreground">Founded</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-gold">10+</div>
                    <div className="text-muted-foreground">Years of Ministry</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-primary">1000+</div>
                    <div className="text-muted-foreground">Lives Transformed</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-20 bg-secondary/20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Vision */}
              <Card className="church-card p-8 bg-card border-0">
                <div className="text-center mb-6">
                  <div className="w-20 h-20 mx-auto mb-4 bg-gradient-to-br from-primary to-primary-dark rounded-full flex items-center justify-center">
                    <Eye className="h-10 w-10 text-white" />
                  </div>
                  <h3 className="text-3xl font-bold text-foreground">Our Vision</h3>
                </div>
                <p className="text-lg text-muted-foreground text-center leading-relaxed">
                  To bring the mind of Christ to nations through God's word, transforming 
                  communities and impacting lives across the globe with the message of hope 
                  and salvation.
                </p>
              </Card>

              {/* Mission */}
              <Card className="church-card p-8 bg-card border-0">
                <div className="text-center mb-6">
                  <div className="w-20 h-20 mx-auto mb-4 bg-gradient-to-br from-gold to-gold-dark rounded-full flex items-center justify-center">
                    <Target className="h-10 w-10 text-white" />
                  </div>
                  <h3 className="text-3xl font-bold text-foreground">Our Mission</h3>
                </div>
                <p className="text-lg text-muted-foreground text-center leading-relaxed">
                  To win souls, disciple them with love, and send them as messengers of the 
                  Gospel through radio, TV, crusades, and all available platforms to reach 
                  every nation.
                </p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Our{" "}
              <span className="bg-gradient-to-r from-primary to-gold bg-clip-text text-transparent">
                Leadership
              </span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Meet the passionate leaders called to shepherd Kingdom Life Global.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            {leadership.map((leader, index) => (
              <Card key={index} className="church-card p-8 text-center bg-card border-0">
                <div className="w-32 h-32 mx-auto mb-6 bg-gradient-to-br from-primary/20 to-gold/20 rounded-full flex items-center justify-center">
                  <Users className="h-16 w-16 text-primary" />
                </div>
                <h3 className="text-2xl font-bold mb-2 text-foreground">{leader.name}</h3>
                <div className="text-gold font-semibold mb-4">{leader.role}</div>
                <p className="text-muted-foreground leading-relaxed">
                  {leader.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-secondary/20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Our{" "}
              <span className="bg-gradient-to-r from-primary to-gold bg-clip-text text-transparent">
                Values
              </span>
            </h2>
            <p className="text-lg text-muted-foreground">
              The principles that guide everything we do at Kingdom Life Global.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <Card key={index} className="church-card p-6 text-center bg-card border-0">
                  <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-primary to-gold rounded-full flex items-center justify-center">
                    <IconComponent className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-foreground">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {value.description}
                  </p>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6 text-foreground">
              Be Part of Our Story
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Join us as we continue to impact lives and reach nations with the Gospel. 
              Your life can have new meaning at Kingdom Life Global.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="btn-royal text-white font-semibold">
                Visit Us This Sunday
              </Button>
              <Button size="lg" variant="outline" className="font-semibold">
                Contact Us
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;