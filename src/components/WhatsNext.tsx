import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Wand2, MessageCircle, Database } from "lucide-react";

const WhatsNext = () => {
  const cards = [
    {
      icon: Wand2,
      title: "Refine & Customize",
      description: "Tweak the design, animations, and layouts using quick prompts or visual edits in the canvas.",
      buttonText: "Refine the Design",
      buttonAction: () => {
        // This would trigger visual editor panel
        console.log("Open visual editor");
      }
    },
    {
      icon: MessageCircle,
      title: "Master Prompting", 
      description: "Switch to Chat Mode to plan your project without changing the canvas. Use clear, detailed, and iterative prompts for the best results.",
      buttonText: "Open Chat Mode",
      buttonAction: () => {
        // This would switch to chat mode
        console.log("Switch to chat mode");
      }
    },
    {
      icon: Database,
      title: "Add Data & Accounts (Supabase)",
      description: "Need to save information, add user accounts, or connect with other services? Supabase makes it simple—no complex setup required.",
      buttonText: "Connect Supabase",
      buttonAction: () => {
        // This would open Supabase integration
        window.open("https://docs.lovable.dev/integrations/supabase/", "_blank");
      }
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-background to-secondary/10">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="font-heading text-4xl md:text-6xl font-black mb-6 tracking-tight uppercase">
            What's{" "}
            <span className="bg-gradient-to-r from-primary to-gold bg-clip-text text-transparent">
              Next?
            </span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-4">
            Keep building with simple steps that make a big difference.
          </p>
          <p className="text-sm text-muted-foreground/80 italic">
            Tip: Try prompts like 'tighten card spacing by 8%' or 'add a 250ms fade-up on hero elements.'
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cards.map((card, index) => {
            const IconComponent = card.icon;
            return (
              <Card 
                key={index} 
                className="church-card group hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer bg-card border-0 h-full"
                onClick={card.buttonAction}
              >
                <CardHeader className="text-center pb-4">
                  <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-primary/10 to-gold/10 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <IconComponent className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="text-xl font-semibold text-foreground">
                    {card.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-center pt-0">
                  <CardDescription className="text-muted-foreground mb-6 leading-relaxed">
                    {card.description}
                  </CardDescription>
                  <Button 
                    className="w-full font-semibold group-hover:bg-primary/90 transition-colors duration-200"
                    aria-label={card.buttonText}
                    onClick={(e) => {
                      e.stopPropagation();
                      card.buttonAction();
                    }}
                  >
                    {card.buttonText}
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Helper Link */}
        <div className="text-center mt-8">
          <a 
            href="https://docs.lovable.dev/integrations/supabase/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200 underline-offset-4 hover:underline"
          >
            View Supabase quick start →
          </a>
        </div>
      </div>
    </section>
  );
};

export default WhatsNext;