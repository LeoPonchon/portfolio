import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, Award, BookOpen } from "lucide-react";

const Education = () => {
  return (
    <section className="py-24 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">Formation</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Parcours à la Faculté des Sciences de Montpellier, entre fondements en informatique
            et expertise en génie logiciel
          </p>
        </div>

        <div className="space-y-8">
          {/* Master's Degree */}
          <Card className="bg-gradient-card border-border/50 card-hover">
            <CardHeader>
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div>
                  <CardTitle className="text-2xl mb-2">Master Génie Logiciel (GL)</CardTitle>
                  <div className="flex items-center gap-2 text-muted-foreground mb-2">
                    <MapPin className="w-4 h-4" />
                    <span>Faculté Des Sciences de Montpellier</span>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Calendar className="w-4 h-4" />
                    <span>2024 - Present</span>
                  </div>
                </div>
                <Badge className="bg-gradient-primary text-white self-start md:self-center">
                  Études en cours
                </Badge>
              </div>
            </CardHeader>
            <CardContent>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Études approfondies en génie logiciel centrées sur l'automatisation des
                  étapes du cycle de vie du logiciel, l'assurance qualité et les méthodologies
                  de développement modernes.
                </p>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-3 flex items-center gap-2">
                    <BookOpen className="w-4 h-4 text-primary" />
                    Domaines d'étude
                  </h4>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Automatisation du cycle de vie logiciel</li>
                    <li>• Compilation & optimisation de code</li>
                    <li>• Tests logiciels & assurance qualité</li>
                    <li>• De la conception à la maintenance</li>
                    <li>• Modularisation & réutilisation</li>
                    <li>• Architecture logicielle avancée</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-3 flex items-center gap-2">
                    <Award className="w-4 h-4 text-primary" />
                    Compétences développées
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline" className="border-primary/20 text-primary">Architecture logicielle</Badge>
                    <Badge variant="outline" className="border-primary/20 text-primary">Assurance qualité</Badge>
                    <Badge variant="outline" className="border-primary/20 text-primary">Pratiques DevOps</Badge>
                    <Badge variant="outline" className="border-primary/20 text-primary">Gestion de projet</Badge>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Bachelor's Degree */}
          <Card className="bg-gradient-card border-border/50 card-hover">
            <CardHeader>
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div>
                  <CardTitle className="text-2xl mb-2">Licence Informatique</CardTitle>
                  <div className="flex items-center gap-2 text-muted-foreground mb-2">
                    <MapPin className="w-4 h-4" />
                    <span>Faculté Des Sciences de Montpellier</span>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Calendar className="w-4 h-4" />
                    <span>2021 - 2024</span>
                  </div>
                </div>
                <Badge variant="secondary" className="self-start md:self-center">
                  Terminé
                </Badge>
              </div>
            </CardHeader>
            <CardContent>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Programme de 3 ans (1600+ heures) couvrant les fondements théoriques et
                  les applications pratiques de l'informatique, avec 70% axés sur le cœur
                  de la discipline.
                </p>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-3 flex items-center gap-2">
                    <BookOpen className="w-4 h-4 text-primary" />
                    Cursus fondamental
                  </h4>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Programmation & développement logiciel</li>
                    <li>• Algorithmes & structures de données</li>
                    <li>• Systèmes & conception de bases de données</li>
                    <li>• Architecture & systèmes informatiques</li>
                    <li>• Réseaux & systèmes distribués</li>
                    <li>• Mathématiques & informatique théorique</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-3 flex items-center gap-2">
                    <Award className="w-4 h-4 text-primary" />
                    Fondations techniques
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline" className="border-primary/20 text-primary">Programmation orientée objet</Badge>
                    <Badge variant="outline" className="border-primary/20 text-primary">Conception de bases de données</Badge>
                    <Badge variant="outline" className="border-primary/20 text-primary">Programmation système</Badge>
                    <Badge variant="outline" className="border-primary/20 text-primary">Technologies web</Badge>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Education;