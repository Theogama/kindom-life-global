import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import QuickIntro from "@/components/QuickIntro";
import CallToAction from "@/components/CallToAction";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <QuickIntro />
      <CallToAction />
      <Footer />
    </div>
  );
};

export default Index;
