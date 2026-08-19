import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Skills = () => {
  const skillCategories = [
    {
      title: "Web",
      skills: ["React", "JavaScript", "TypeScript", "HTML", "CSS", "React Router"],
      icon: "🌐"
    },
    {
      title: "APIs & Systèmes distribués",
      skills: ["REST", "SOAP", "gRPC", "Java RMI", "Architectures distribuées"],
      icon: "🔗"
    },
    {
      title: "Mobile",
      skills: ["Android", "Kotlin", "Java", "Développement mobile"],
      icon: "📱"
    },
    {
      title: "Jeu vidéo & Game Design",
      skills: ["Unity", "C#", "Game Design", "Worldbuilding", "Systèmes de gameplay", "VFX & Shaders"],
      icon: "🎮"
    },
    {
      title: "Langages & Bas niveau",
      skills: ["C", "C#", "Java", "Python", "Lua", "Luau", "Kotlin", "MIPS32", "Compilation"],
      icon: "⚙️"
    },
    {
      title: "Outils & Automatisation",
      skills: ["Git", "GitHub", "Automatisation", "Scripting", "CI"],
      icon: "🛠️"
    }
  ];

  return (
    <section className="py-24 px-6 bg-muted/20">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Compétences <span className="gradient-text">Techniques</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Domaines et technologies que j'utilise à travers mes projets personnels et universitaires
            </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <Card key={index} className="bg-gradient-card border-border/50 card-hover">
              <CardHeader className="pb-4">
                <CardTitle className="flex items-center gap-3">
                  <span className="text-2xl">{category.icon}</span>
                  <span className="text-lg">{category.title}</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <Badge 
                      key={skillIndex} 
                      variant="secondary" 
                      className="bg-primary/10 text-primary border-primary/20 hover:bg-primary/20 transition-colors"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;