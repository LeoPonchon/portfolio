import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Code2, ArrowDown } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroBg} 
          alt="Hero background" 
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-background/90 via-background/70 to-background/90" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 bg-card/50 backdrop-blur-sm px-4 py-2 rounded-full border border-border/50">
              <Code2 className="w-4 h-4 text-primary" />
              <span className="text-sm text-muted-foreground">Développeur polyvalent</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
              Léo <span className="gradient-text">Ponchon</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Je construis des projets volontairement variés : applications web, mobile, jeux,
              outils et automatisations. J'aime particulièrement le <span className="text-primary font-medium">game design</span>
              et la création d'univers, du prototype jusqu'à quelque chose de concret.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <Button 
              size="lg" 
              className="bg-gradient-primary hover:opacity-90 transition-all duration-300 shadow-elegant"
            >
              <Mail className="w-5 h-5 mr-2" />
              Me contacter
            </Button>
            
            <Button 
              variant="outline" 
              size="lg" 
              className="border-border/50 bg-card/50 backdrop-blur-sm hover:bg-card/80 transition-all duration-300"
            >
              <Github className="w-5 h-5 mr-2" />
              GitHub
            </Button>
            
            <Button 
              variant="outline" 
              size="lg" 
              className="border-border/50 bg-card/50 backdrop-blur-sm hover:bg-card/80 transition-all duration-300"
            >
              <Linkedin className="w-5 h-5 mr-2" />
              LinkedIn
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <button 
        onClick={scrollToAbout}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce"
      >
        <ArrowDown className="w-6 h-6 text-primary" />
      </button>
    </section>
  );
};

export default Hero;