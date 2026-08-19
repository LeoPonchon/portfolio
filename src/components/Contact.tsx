import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Github, Linkedin, MapPin, Phone } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: <Mail className="w-5 h-5" />,
      label: "Email",
      value: "leo.ponchon@student.umontpellier.fr",
      link: "mailto:leo.ponchon@student.umontpellier.fr"
    },
    {
      icon: <MapPin className="w-5 h-5" />,
      label: "Localisation",
      value: "Montpellier, France",
      link: null
    },
    {
      icon: <Github className="w-5 h-5" />,
      label: "GitHub",
      value: "github.com/LeoPonchon",
      link: "https://github.com/LeoPonchon"
    },
    {
      icon: <Linkedin className="w-5 h-5" />,
      label: "LinkedIn",
      value: "linkedin.com/in/leo-ponchon-5b4a68230",
      link: "https://www.linkedin.com/in/l%C3%A9o-ponchon-5b4a68230/"
    }
  ];

  return (
    <section className="py-24 px-6 bg-muted/20">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Restons en <span className="gradient-text">contact</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Envie de collaborer ou d'en savoir plus sur mon parcours ? 
            N'hésite pas à m'écrire !
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
            <h3 className="text-2xl font-semibold mb-6">Connectons-nous</h3>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Toujours ouvert à discuter de nouvelles opportunités, de projets, ou simplement
              d'échanger avec d'autres développeurs et passionnés de jeux et de tech.
            </p>
            </div>

            <div className="grid gap-4">
              {contactInfo.map((info, index) => (
                <Card key={index} className="bg-gradient-card border-border/50">
                  <CardContent className="p-4">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center text-white shadow-glow">
                        {info.icon}
                      </div>
                      <div className="flex-1">
                        <p className="text-sm text-muted-foreground">{info.label}</p>
                        {info.link ? (
                          <a 
                            href={info.link}
                            className="text-foreground hover:text-primary transition-colors"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            {info.value}
                          </a>
                        ) : (
                          <p className="text-foreground">{info.value}</p>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Contact Form */}
          <Card className="bg-gradient-card border-border/50">
            <CardHeader>
              <CardTitle className="text-2xl">Envoyer un message</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Nom</label>
                  <Input 
                    placeholder="Votre nom" 
                    className="bg-background/50 border-border/50"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Email</label>
                  <Input 
                    type="email"
                    placeholder="votre.email@exemple.com" 
                    className="bg-background/50 border-border/50"
                  />
                </div>
              </div>
              
              <div>
                  <label className="block text-sm font-medium mb-2">Sujet</label>
                  <Input 
                    placeholder="De quoi s'agit-il ?" 
                  className="bg-background/50 border-border/50"
                />
              </div>
              
              <div>
                  <label className="block text-sm font-medium mb-2">Message</label>
                  <Textarea 
                    placeholder="Votre message..." 
                  rows={6}
                  className="bg-background/50 border-border/50"
                />
              </div>
              
              <Button 
                size="lg" 
                className="w-full bg-gradient-primary hover:opacity-90 transition-all duration-300 shadow-elegant"
              >
                <Mail className="w-5 h-5 mr-2" />
                Envoyer le message
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;