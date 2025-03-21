
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Briefcase, FileText, ChevronDown } from 'lucide-react';
import Section from '../components/Section';
import ProjectCard from '../components/ProjectCard';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { projects } from '../data/projects';

const Home = () => {
  // Showcase just the first 3 projects on the home page
  const featuredProjects = projects.slice(0, 3);
  
  const scrollToServices = () => {
    document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
  };
  
  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative pt-20">
        <div className="absolute inset-0 bg-gradient-radial from-primary/5 to-transparent z-0" />
        
        <div className="container mx-auto px-6 md:px-12 relative z-10">
          <div className="max-w-3xl mx-auto text-center animate-fade-up">
            <div className="inline-block px-3 py-1 rounded-full text-xs bg-secondary text-secondary-foreground mb-6">
              Digital Craftsman
            </div>
            <h1 className="text-4xl md:text-6xl font-display font-medium tracking-tight mb-6">
              Your Name
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8">
              I'm a passionate developer crafting digital experiences 
              that combine aesthetic design with flawless functionality. 
              Specializing in creating solutions that solve real-world problems.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/projects" 
                className="inline-flex items-center px-5 py-3 rounded-full bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
              >
                View My Work
                <ArrowRight size={18} className="ml-2" />
              </Link>
              <Link 
                to="/about" 
                className="inline-flex items-center px-5 py-3 rounded-full bg-secondary text-secondary-foreground hover:bg-secondary/80 transition-colors"
              >
                About Me
              </Link>
            </div>
          </div>
          
          <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
            <button 
              onClick={scrollToServices}
              className="flex flex-col items-center text-muted-foreground hover:text-foreground transition-colors"
              aria-label="Scroll down"
            >
              <span className="text-sm mb-2">Scroll Down</span>
              <ChevronDown size={20} className="animate-bounce" />
            </button>
          </div>
        </div>
      </section>
      
      {/* Services Section */}
      <Section 
        id="services"
        title="What I Do"
        subtitle="Services"
        className="bg-secondary/30"
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="glass-panel rounded-2xl p-8 flex flex-col items-center text-center">
            <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-6">
              <Briefcase size={24} className="text-primary" />
            </div>
            <h3 className="text-xl font-display font-medium mb-4">Development</h3>
            <p className="text-muted-foreground">
              Creating clean, efficient code that powers innovative web applications 
              and digital experiences with a focus on performance and scalability.
            </p>
          </div>
          
          <div className="glass-panel rounded-2xl p-8 flex flex-col items-center text-center">
            <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-6">
              <FileText size={24} className="text-primary" />
            </div>
            <h3 className="text-xl font-display font-medium mb-4">Design</h3>
            <p className="text-muted-foreground">
              Crafting intuitive user interfaces and experiences that balance 
              aesthetic appeal with functionality and accessibility.
            </p>
          </div>
          
          <div className="glass-panel rounded-2xl p-8 flex flex-col items-center text-center">
            <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-6">
              <Briefcase size={24} className="text-primary" />
            </div>
            <h3 className="text-xl font-display font-medium mb-4">Consulting</h3>
            <p className="text-muted-foreground">
              Providing expert advice on technology strategy, architecture, 
              and implementation to help businesses achieve their digital goals.
            </p>
          </div>
        </div>
      </Section>
      
      {/* Featured Projects Section */}
      <Section 
        title="Featured Projects"
        subtitle="My Work"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredProjects.map((project) => (
            <ProjectCard 
              key={project.id}
              id={project.id}
              title={project.title}
              logoSrc={project.logoSrc}
              description={project.description}
              role={project.role}
            />
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Link 
            to="/projects" 
            className="inline-flex items-center px-5 py-3 rounded-full bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
          >
            View All Projects
            <ArrowRight size={18} className="ml-2" />
          </Link>
        </div>
      </Section>
      
      {/* Contact CTA Section */}
      <Section className="bg-gradient-to-b from-secondary/30 to-background">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-display font-medium tracking-tight mb-6">
            Let's Work Together
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            I'm always interested in hearing about new projects and opportunities.
          </p>
          <a 
            href="mailto:your.email@example.com" 
            className="inline-flex items-center px-5 py-3 rounded-full bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
          >
            Get In Touch
            <ArrowRight size={18} className="ml-2" />
          </a>
        </div>
      </Section>
      
      <Footer />
    </div>
  );
};

export default Home;
