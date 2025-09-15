import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Heart, Users, BookOpen, Music, Baby, HandHeart, Globe, Mic } from "lucide-react";
import { Link } from "react-router-dom";
import ProtectedRoute from "@/components/auth/ProtectedRoute";

const GetInvolved = () => {
  const ministries = [
    {
      icon: Music,
      title: "Worship Team",
      description: "Join our passionate worship team and help lead the congregation in praising God through music and song.",
      requirements: "Musical ability, heart for worship",
      commitment: "Weekly rehearsals, Sunday services"
    },
    {
      icon: BookOpen,
      title: "Teaching Ministry",
      description: "Share God's Word by teaching in our Sunday School, Bible studies, or youth programs.",
      requirements: "Biblical knowledge, teaching passion",
      commitment: "Weekly preparation, regular teaching"
    },
    {
      icon: Baby,
      title: "Children's Ministry",
      description: "Make a lasting impact on the next generation by serving in our children's programs and Sunday School.",
      requirements: "Love for children, patience",
      commitment: "Sunday mornings, special events"
    },
    {
      icon: Users,
      title: "Hospitality Team",
      description: "Welcome guests and members with warmth and help create a friendly atmosphere for all who visit.",
      requirements: "Friendly attitude, servant heart",
      commitment: "Sunday services, events"
    },
    {
      icon: HandHeart,
      title: "Prayer Ministry",
      description: "Intercede for the church, community, and global missions through organized prayer initiatives.",
      requirements: "Commitment to prayer, confidentiality",
      commitment: "Prayer meetings, on-call prayer"
    },
    {
      icon: Globe,
      title: "Outreach & Missions",
      description: "Reach out to the community through evangelism, crusades, and mission trips to spread the Gospel.",
      requirements: "Heart for evangelism, availability",
      commitment: "Outreach events, mission trips"
    },
    {
      icon: Mic,
      title: "Media Ministry",
      description: "Help broadcast our services and manage our online presence to reach people digitally.",
      requirements: "Technical skills, reliability",
      commitment: "Sunday services, online content"
    },
    {
      icon: Heart,
      title: "Counseling Ministry",
      description: "Provide spiritual guidance and support to members facing life challenges and decisions.",
      requirements: "Maturity in faith, listening skills",
      commitment: "Training required, scheduled sessions"
    }
  ];

  const volunteerOpportunities = [
    {
      title: "Event Setup Team",
      description: "Help set up and organize for special events, crusades, and conferences."
    },
    {
      title: "Transportation Ministry",
      description: "Assist with transportation for elderly members and those in need."
    },
    {
      title: "Food Ministry",
      description: "Help prepare and serve meals during fellowship events and community outreach."
    },
    {
      title: "Cleaning & Maintenance",
      description: "Keep our church facilities clean and well-maintained for worship and events."
    }
  ];

  const givingOptions = [
    {
      title: "Tithes & Offerings",
      description: "Support the ongoing ministry and operations of Kingdom Life Global.",
      frequency: "Weekly/Monthly"
    },
    {
      title: "Building Fund",
      description: "Contribute to facility improvements and expansion projects.",
      frequency: "One-time/Ongoing"
    },
    {
      title: "Mission Support",
      description: "Fund evangelistic outreach, crusades, and mission activities.",
      frequency: "Special Projects"
    },
    {
      title: "Community Outreach",
      description: "Support programs that help the less fortunate in our community.",
      frequency: "Monthly"
    }
  ];

  return (
    <ProtectedRoute requiredAction="involve">
      <div className="min-h-screen bg-background">
        <Navigation />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-primary/10 to-background">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-heading text-4xl md:text-6xl font-black mb-6 tracking-tight uppercase">
            Get{" "}
            <span className="bg-gradient-to-r from-primary to-gold bg-clip-text text-transparent">
              Involved
            </span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover your calling and make a difference in the Kingdom of God. 
            There's a place for everyone to serve and grow in our church family.
          </p>
        </div>
      </section>

      {/* Ministries */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-heading text-3xl md:text-5xl font-black mb-6 tracking-tight uppercase">
              Ministries
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Find your passion and purpose by joining one of our ministry teams. Each ministry offers unique opportunities to serve God and others.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {ministries.map((ministry, index) => {
              const IconComponent = ministry.icon;
              return (
                <Card key={index} className="church-card border-0 h-full hover:shadow-xl transition-all duration-300">
                  <CardHeader className="text-center pb-4">
                    <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-primary/10 to-gold/10 rounded-full flex items-center justify-center">
                      <IconComponent className="h-8 w-8 text-primary" />
                    </div>
                    <CardTitle className="text-lg font-semibold">
                      {ministry.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <CardDescription className="mb-4 leading-relaxed">
                      {ministry.description}
                    </CardDescription>
                    <div className="space-y-2 text-sm">
                      <div>
                        <span className="font-medium text-foreground">Requirements:</span>
                        <p className="text-muted-foreground">{ministry.requirements}</p>
                      </div>
                      <div>
                        <span className="font-medium text-foreground">Commitment:</span>
                        <p className="text-muted-foreground">{ministry.commitment}</p>
                      </div>
                    </div>
                    <Link to="/contact">
                      <Button className="w-full mt-4 font-semibold" variant="outline">
                        Join Ministry
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Volunteer Opportunities */}
      <section className="py-20 bg-secondary/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-heading text-3xl md:text-5xl font-black mb-6 tracking-tight uppercase">
              Volunteer Opportunities
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Short-term and flexible ways to serve and contribute to our church community.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {volunteerOpportunities.map((opportunity, index) => (
              <Card key={index} className="church-card border-0">
                <CardHeader>
                  <CardTitle className="text-lg font-semibold flex items-center gap-3">
                    <div className="w-3 h-3 bg-gradient-to-r from-primary to-gold rounded-full"></div>
                    {opportunity.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="leading-relaxed mb-4">
                    {opportunity.description}
                  </CardDescription>
                  <Button variant="outline" className="font-semibold">
                    Volunteer
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Giving & Partnership */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-heading text-3xl md:text-5xl font-black mb-6 tracking-tight uppercase">
              Partner With Us
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Your financial partnership enables us to reach nations with the Gospel and transform lives through God's Word.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {givingOptions.map((option, index) => (
              <Card key={index} className="church-card border-0">
                <CardHeader>
                  <CardTitle className="text-xl font-semibold">
                    {option.title}
                  </CardTitle>
                  <div className="text-primary font-medium text-sm">
                    {option.frequency}
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="leading-relaxed mb-6">
                    {option.description}
                  </CardDescription>
                  <Button className="btn-gold text-white font-semibold w-full">
                    <Heart className="h-4 w-4 mr-2" />
                    Give Now
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <div className="bg-card rounded-lg p-8 max-w-2xl mx-auto">
              <h3 className="text-xl font-semibold mb-4">Secure Online Giving</h3>
              <p className="text-muted-foreground mb-6">
                We use secure, encrypted payment processing to ensure your donations are safe and handled with complete confidentiality.
              </p>
              <Button className="btn-royal text-white font-semibold">
                Set Up Recurring Giving
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-b from-background to-secondary/20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-heading text-3xl md:text-5xl font-black mb-6 tracking-tight uppercase">
            Ready to Serve?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            Take the next step and join our ministry team. Contact us to learn more about volunteer opportunities and how you can make a difference.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="btn-royal text-white font-semibold">
              Contact Ministry Leader
            </Button>
            <Button variant="outline" className="font-semibold">
              Schedule a Meeting
            </Button>
          </div>
        </div>
      </section>

        <Footer />
      </div>
    </ProtectedRoute>
  );
};

export default GetInvolved;