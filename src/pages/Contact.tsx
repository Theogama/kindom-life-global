import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { MapPin, Phone, Mail, Clock, Facebook, Instagram, Youtube, Twitter } from "lucide-react";
import BackButton from "@/components/BackButton";
import { useState } from "react";
import { sendContactEmail } from "@/lib/email";

const Contact = () => {
  const contactInfo = [
    {
      icon: MapPin,
      title: "Visit Us",
      details: [
        "4545 Langeni Street",
        "Daveyton, Benoni",
        "South Africa"
      ]
    },
    {
      icon: Mail,
      title: "Email Us",
      details: ["kingdomlifeglobal@gmail.com"]
    },
    {
      icon: Clock,
      title: "Service Times",
      details: [
        "Friday: 18:00 - 20:00",
        "Sunday: 10:00 - 13:00"
      ]
    }
  ];

  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook", color: "text-blue-600" },
    { icon: Instagram, href: "#", label: "Instagram", color: "text-pink-600" },
    { icon: Youtube, href: "#", label: "YouTube", color: "text-red-600" },
    { icon: Twitter, href: "#", label: "Twitter", color: "text-blue-400" }
  ];

  const [form, setForm] = useState({ firstName: "", lastName: "", email: "", phone: "", subject: "", message: "" });
  const [submitting, setSubmitting] = useState(false);

  const submitContact = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      await sendContactEmail({
        firstName: form.firstName,
        lastName: form.lastName,
        email: form.email,
        phone: form.phone,
        subject: form.subject,
        message: form.message,
      });
      alert("Thank you! Your message has been sent.");
      setForm({ firstName: "", lastName: "", email: "", phone: "", subject: "", message: "" });
    } catch (err) {
      console.error(err);
      alert("Sorry, we couldn't send your message. Please try again later.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary/5 to-gold/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Get In{" "}
              <span className="bg-gradient-to-r from-primary to-gold bg-clip-text text-transparent">
                Touch
              </span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              We'd love to hear from you. Reach out with any questions, prayer requests, 
              or to learn more about joining our community.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-20">
            {contactInfo.map((info, index) => {
              const IconComponent = info.icon;
              return (
                <Card key={index} className="church-card p-8 text-center bg-card border-0">
                  <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-primary to-gold rounded-full flex items-center justify-center">
                    <IconComponent className="h-10 w-10 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4 text-foreground">
                    {info.title}
                  </h3>
                  <div className="space-y-1">
                    {info.details.map((detail, idx) => (
                      <p key={idx} className="text-muted-foreground">
                        {detail}
                      </p>
                    ))}
                  </div>
                </Card>
              );
            })}
          </div>

          {/* Contact Form & Map */}
          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Form */}
            <Card className="p-8 bg-card border-0 church-card">
              <h2 className="text-3xl font-bold mb-6 text-foreground">Send Us a Message</h2>
              <form className="space-y-6" onSubmit={submitContact}>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">First Name</Label>
                    <Input id="firstName" placeholder="Your first name" value={form.firstName} onChange={(e) => setForm({ ...form, firstName: e.target.value })} />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input id="lastName" placeholder="Your last name" value={form.lastName} onChange={(e) => setForm({ ...form, lastName: e.target.value })} />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="your.email@example.com" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone (Optional)</Label>
                  <Input id="phone" type="tel" placeholder="+27 XX XXX XXXX" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="subject">Subject</Label>
                  <Input id="subject" placeholder="What's this about?" value={form.subject} onChange={(e) => setForm({ ...form, subject: e.target.value })} />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea 
                    id="message" 
                    placeholder="Tell us how we can help you or share your prayer request..."
                    rows={5}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                  />
                </div>
                
                <Button size="lg" className="btn-royal text-white font-semibold w-full" type="submit" disabled={submitting}>
                  {submitting ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </Card>

            {/* Map & Location Info */}
            <div className="space-y-8">
              {/* Map Placeholder */}
              <Card className="p-8 bg-card border-0 church-card">
                <h3 className="text-2xl font-semibold mb-4 text-foreground">Find Us</h3>
                <div className="bg-gradient-to-br from-primary/10 to-gold/10 rounded-lg h-64 flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="h-16 w-16 text-primary mx-auto mb-4" />
                    <p className="text-muted-foreground">
                      Interactive map integration<br />
                      4545 Langeni Street, Daveyton
                    </p>
                  </div>
                </div>
                <div className="mt-6 space-y-2">
                  <h4 className="font-semibold text-foreground">Directions</h4>
                  <p className="text-muted-foreground text-sm">
                    Located in the heart of Daveyton, we're easily accessible by public 
                    transport and have parking available on Sundays.
                  </p>
                  <Button 
                    variant="outline" 
                    className="mt-3 font-semibold"
                    onClick={() => {
                      const addr = encodeURIComponent('4545 Langeni Street, Daveyton, Benoni, South Africa');
                      window.open(`https://www.google.com/maps?q=${addr}`, '_blank');
                    }}
                  >
                    <MapPin className="h-4 w-4 mr-2" />
                    Get Directions
                  </Button>
                </div>
              </Card>

              {/* Social Media */}
              <Card className="p-8 bg-card border-0 church-card">
                <h3 className="text-2xl font-semibold mb-4 text-foreground">Connect Online</h3>
                <p className="text-muted-foreground mb-6">
                  Follow us on social media for updates, inspirational content, and live services.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  {socialLinks.map((social) => {
                    const IconComponent = social.icon;
                    return (
                      <a
                        key={social.label}
                        href={social.href}
                        className="flex items-center gap-3 p-3 rounded-lg bg-secondary/50 hover:bg-secondary transition-colors group"
                      >
                        <IconComponent className={`h-6 w-6 ${social.color}`} />
                        <span className="font-medium text-foreground group-hover:text-primary">
                          {social.label}
                        </span>
                      </a>
                    );
                  })}
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Contact */}
      <section className="py-16 bg-gradient-to-r from-primary to-primary-dark text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Need Prayer or Pastoral Care?</h2>
          <p className="text-lg text-white/90 mb-6 max-w-2xl mx-auto">
            If you're going through a difficult time and need immediate prayer or pastoral 
            support, don't hesitate to reach out to us.
          </p>
          <Button size="lg" variant="secondary" className="font-semibold">
            Request Prayer
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;