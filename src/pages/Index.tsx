import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Education from "@/components/Education";
import Contact from "@/components/Contact";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Navigation />
      <Hero />
      
      <div id="about">
        <About />
      </div>
      
      <div id="skills">
        <Skills />
      </div>

      <div id="projects">
        <Projects />
      </div>
      
      <div id="education">
        <Education />
      </div>
      
      <div id="contact">
        <Contact />
      </div>
      
      {/* Footer */}
      <footer className="py-8 px-6 border-t border-border/50">
        <div className="container mx-auto text-center">
          <p className="text-muted-foreground">
            © 2026 Léo Ponchon. Conçu avec passion, des projets web aux mondes de jeu.
          </p>
        </div>
      </footer>
    </main>
  );
};

export default Index;