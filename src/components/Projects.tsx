import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink, Gamepad2, Smartphone, Globe, Cpu, Bot, Boxes } from "lucide-react";

type ProjectLink = { label: string; url: string };

type Project = {
  title: string;
  category: string;
  icon: React.ReactNode;
  description: string;
  tags: string[];
  links: ProjectLink[];
  featured?: boolean;
};

const Projects = () => {
  const projects: Project[] = [
    {
      title: "Mythos",
      category: "Action-RPG · Unity",
      icon: <Gamepad2 className="w-5 h-5" />,
      featured: true,
      description:
        "Action-RPG en monde ouvert inspiré de Genshin Impact, avec son propre univers, ses personnages et ses mécaniques. Je travaille autant sur le développement (locomotion avancée : glisse, wall-run, ledge hang, vault, nage ; combat à 5 styles ; sauvegarde, quêtes, dialogues, téléportation) que sur la conception : game design, narration et worldbuilding.",
      tags: ["Unity", "C#", "Game Design", "Worldbuilding", "Combat", "Locomotion", "Systèmes de jeu"],
      links: [
        { label: "Site officiel", url: "" },
        { label: "Discord", url: "https://discord.gg/mythos" }
      ]
    },
    {
      title: "Oniric Streams",
      category: "Jeu · Farm + Roguelike",
      icon: <Gamepad2 className="w-5 h-5" />,
      description:
        "Jeu mêlant gestion de ferme en vue du dessus et éléments roguelike, avec une boucle entre calme et exploration/prise de risque. Développé côté gameplay, univers et identité visuelle, accompagné d'un site web React dédié au projet.",
      tags: ["Unity", "C#", "Game Dev", "React", "React Router", "JavaScript", "Game Design"],
      links: [
        { label: "Jeu", url: "https://github.com/LeoPonchon/Oniric-Streams" },
        { label: "Site web", url: "https://github.com/LeoPonchon/oniric-streams-website" }
      ]
    },
    {
      title: "Traveling",
      category: "Application mobile",
      icon: <Smartphone className="w-5 h-5" />,
      description:
        "Application mobile Android autour du voyage, permettant de structurer un projet d'application plus complet : UI, données, navigation et différents aspects du développement mobile.",
      tags: ["Android", "Kotlin", "Java", "Mobile"],
      links: [{ label: "GitHub", url: "https://github.com/LeoPonchon/Depot-final-traveling" }]
    },
    {
      title: "Fruit Odyssey",
      category: "Jeu · Expérimentation",
      icon: <Gamepad2 className="w-5 h-5" />,
      description:
        "Projet orienté jeu vidéo pour expérimenter des mécaniques de gameplay et la programmation d'expériences interactives, en itérant sur des systèmes de jeu.",
      tags: ["Lua", "LÖVE", "Game Dev"],
      links: [{ label: "GitHub", url: "https://github.com/LeoPonchon/Fruit-Odyssey" }]
    },
    {
      title: "Wuthering Waves Helper",
      category: "Outil · Automatisation",
      icon: <Bot className="w-5 h-5" />,
      description:
        "Outil créé autour de Wuthering Waves : typique de mes projets qui partent d'un besoin d'automatiser ou simplifier quelque chose, puis je construis mon propre outil pour le faire.",
      tags: ["Web", "CSS", "Automatisation", "Tooling"],
      links: [{ label: "GitHub", url: "https://github.com/LeoPonchon/Wuthering-Waves-Helper" }]
    },
    {
      title: "Systèmes distribués",
      category: "REST · SOAP · gRPC · RMI",
      icon: <Globe className="w-5 h-5" />,
      description:
        "Comparaison d'approches de communication entre applications et d'architectures distribuées : REST, SOAP, gRPC et Java RMI, utilisées et mesurées sur plusieurs projets dédiés.",
      tags: ["REST", "SOAP", "gRPC", "Java RMI", "Distributed Systems", "Java"],
      links: [
        { label: "REST", url: "https://github.com/LeoPonchon/Depot-TP-3-REST" },
        { label: "SOAP", url: "https://github.com/LeoPonchon/Depot-TP-2-SOAP" },
        { label: "RMI", url: "https://github.com/LeoPonchon/Depot-TP-1-RMI" }
      ]
    },
    {
      title: "Compilation & MIPS32",
      category: "Bas niveau",
      icon: <Cpu className="w-5 h-5" />,
      description:
        "Sujets proches du fonctionnement bas niveau des programmes : projets autour de la compilation et de l'architecture MIPS32 (Mars), ainsi qu'un compilateur en Common Lisp.",
      tags: ["Compilation", "MIPS32", "Assembly", "Common Lisp", "C"],
      links: [
        { label: "Mars MIPS32", url: "https://github.com/LeoPonchon/Mars-MIPS32-Compilation" },
        { label: "Compilateur (Lisp)", url: "https://github.com/LeoPonchon/depot-tp-compilation" }
      ]
    },
    {
      title: "Terraria Clone",
      category: "Jeu · Sandbox · Unity",
      icon: <Gamepad2 className="w-5 h-5" />,
      description:
        "Clone sandbox inspiré de Terraria, pour explorer la génération de monde et les systèmes de jeu en Unity / C#.",
      tags: ["Unity", "C#", "Game Dev"],
      links: [{ label: "GitHub", url: "https://github.com/LeoPonchon/terraria-clone-unity" }]
    },
    {
      title: "Aethelgard",
      category: "Jeu · Roblox (Luau)",
      icon: <Boxes className="w-5 h-5" />,
      description:
        "RPG développé sur Roblox (Luau) avec Rojo, explorant la conception de systèmes de jeu, de progression et d'univers.",
      tags: ["Roblox", "Luau", "Game Dev", "Game Design"],
      links: [
        { label: "Aethelgard", url: "https://github.com/LeoPonchon/Aethelgard" },
        { label: "roblox-rpg-rojo", url: "https://github.com/LeoPonchon/roblox-rpg-rojo" }
      ]
    },
    {
      title: "Bots & Automatisation",
      category: "Scripts · IA",
      icon: <Bot className="w-5 h-5" />,
      description:
        "Plusieurs outils et scripts d'automatisation (Python, JavaScript) et expérimentations IA, nés d'un besoin concret ou d'une idée à tester.",
      tags: ["Python", "JavaScript", "Automatisation", "IA"],
      links: [
        { label: "DoudouGPT", url: "https://github.com/LeoPonchon/DoudouGPT" },
        { label: "bot-TS1", url: "https://github.com/LeoPonchon/bot-TS1" }
      ]
    }
  ];

  return (
    <section id="projects" className="py-24 px-6 bg-muted/20">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Mes <span className="gradient-text">Projets</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Un GitHub volontairement varié : applications web, mobile, jeux, outils,
            automatisations et sujets plus techniques. Voici une sélection de ce sur quoi je travaille.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <Card
              key={index}
              className={`bg-gradient-card border-border/50 card-hover flex flex-col ${project.featured ? "ring-1 ring-primary/40" : ""
                }`}
            >
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between gap-3">
                  <span className="w-10 h-10 rounded-lg bg-gradient-primary flex items-center justify-center text-white shadow-glow">
                    {project.icon}
                  </span>
                  <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20">
                    {project.category}
                  </Badge>
                </div>
                <CardTitle className="text-xl mt-4">{project.title}</CardTitle>
              </CardHeader>

              <CardContent className="flex-1 flex flex-col">
                <p className="text-muted-foreground text-sm leading-relaxed mb-5">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, tagIndex) => (
                    <Badge
                      key={tagIndex}
                      variant="outline"
                      className="border-primary/20 text-primary"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>

                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.links.map((link, linkIndex) => (
                    <Button
                      key={linkIndex}
                      variant="outline"
                      size="sm"
                      className="border-border/50 bg-card/50 hover:bg-card/80 transition-all duration-300"
                      asChild
                    >
                      <a href={link.url} target="_blank" rel="noopener noreferrer">
                        {link.url.includes("github.com") || link.label === "GitHub" || link.label === "Jeu" || link.label === "Aethelgard" || link.label === "roblox-rpg-rojo" || link.label === "Mars MIPS32" || link.label === "Compilateur (Lisp)" || link.label === "REST" || link.label === "SOAP" || link.label === "RMI" ? (
                          <Github className="w-4 h-4 mr-1.5" />
                        ) : (
                          <ExternalLink className="w-4 h-4 mr-1.5" />
                        )}
                        {link.label}
                      </a>
                    </Button>
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

export default Projects;
