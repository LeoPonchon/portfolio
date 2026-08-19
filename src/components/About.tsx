import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap, Code, Lightbulb } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-24 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            À propos de <span className="gradient-text">moi</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Développeur curieux, je touche volontairement à plusieurs domaines — du web au jeu vidéo,
            en passant par le mobile, les API et quelques sujets plus bas niveau. Ce qui m'intéresse,
            c'est de partir d'une idée et d'aller jusqu'au concret.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <Card className="bg-gradient-card border-border/50 card-hover">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-6 shadow-glow">
                <GraduationCap className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Projets variés</h3>
              <p className="text-muted-foreground leading-relaxed">
                Applications web, mobile, jeux, outils et automatisations. Certains viennent de mes
                études, d'autres d'un jeu auquel je joue, d'un besoin ou simplement d'une idée à tester.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-card border-border/50 card-hover">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-6 shadow-glow">
                <Code className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Savoir-faire technique</h3>
              <p className="text-muted-foreground leading-relaxed">
                À l'aise sur du développement web et mobile, des API, du jeu vidéo en Unity/C#
                et quelques sujets bas niveau comme la compilation et l'architecture MIPS32.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-card border-border/50 card-hover">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-6 shadow-glow">
                <Lightbulb className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Game design & Univers</h3>
              <p className="text-muted-foreground leading-relaxed">
                Au-delà du code, je travaille sur les mécaniques, la progression, l'expérience
                utilisateur et la cohérence globale de mes projets de jeu et de leur worldbuilding.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;