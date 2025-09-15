import { Button } from "@/components/ui/button";
import { Play, Calendar } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-4 sm:px-6 lg:px-8">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/worship-hero.jpg"
          alt="Kingdom Life Global Worship Service - People raising hands in praise and worship"
          className="w-full h-full object-cover"
          style={{
            objectPosition: 'center center',
            filter: 'brightness(0.7)'
          }}
        />
        <div className="absolute inset-0 hero-overlay"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <div className="max-w-4xl mx-auto fade-in-up">
          {/* Church Name */}
          <h1 className="font-heading text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-black mb-6 leading-tight tracking-tight uppercase">
            Kingdom Life
            <span className="block bg-gradient-to-r from-gold-light to-gold bg-clip-text text-transparent">
              Global
            </span>
          </h1>

          {/* Subtitle */}
          <p className="font-heading text-sm sm:text-base md:text-lg lg:text-xl mb-4 text-white/90 font-medium tracking-wide uppercase">
            611 Church
          </p>

          {/* Slogan */}
          <p className="text-base sm:text-lg md:text-xl mb-12 text-white/95 font-normal max-w-3xl mx-auto leading-relaxed">
            Where your life is given a{" "}
            <span className="text-gold-light font-semibold">new meaning</span>
          </p>

          {/* Call to Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <Button 
              size="lg" 
              className="btn-gold text-white font-semibold px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg"
              onClick={() => window.location.href = '/contact'}
            >
              <Calendar className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
              <span className="text-xs sm:text-sm md:text-base lg:text-lg">Join Us This Sunday</span>
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-white/30 text-black bg-white/90 hover:bg-white hover:text-black font-semibold px-6 sm:px-8 py-3 sm:py-4 backdrop-blur-sm transition-all duration-200"
              onClick={() => window.open('https://youtube.com/@kingdommindedworshipminist8528', '_blank')}
            >
              <Play className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
              <span className="text-xs sm:text-sm md:text-base lg:text-lg">Watch Online</span>
            </Button>
          </div>

          {/* Service Times */}
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 sm:p-6 max-w-2xl mx-auto border border-white/20">
            <h3 className="text-lg sm:text-xl font-semibold mb-4 text-gold-light">Service Times</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="text-center">
                <div className="text-base sm:text-lg font-semibold">Friday Service</div>
                <div className="text-sm sm:text-base text-white/80">18:00 - 20:00</div>
              </div>
              <div className="text-center">
                <div className="text-base sm:text-lg font-semibold">Sunday Service</div>
                <div className="text-sm sm:text-base text-white/80">10:00 - 13:00</div>
              </div>
            </div>
            <div className="mt-4 pt-4 border-t border-white/20">
              <div className="text-center">
                <div className="text-xs sm:text-sm text-white/70">Location</div>
                <div className="text-sm sm:text-base text-white/90">4545 Langeni Street, Daveyton, Benoni</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <button
          type="button"
          aria-label="Scroll to Welcome section"
          onClick={() => {
            const target = document.getElementById('welcome');
            if (target) {
              target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
          }}
          className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center items-start hover:border-white focus:outline-none focus:ring-2 focus:ring-white/60"
        >
          <span className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse"></span>
        </button>
      </div>
    </section>
  );
};

export default Hero;