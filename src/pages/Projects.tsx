
import React from 'react';
import { useParams } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Section from '../components/Section';
import ProjectCard from '../components/ProjectCard';
import { projects, getProject } from '../data/projects';
import ImageCarousel from '../components/ImageCarousel';
import { ArrowLeft, Check } from 'lucide-react';
import { Link } from 'react-router-dom';

const ProjectDetail = () => {
  const { id } = useParams<{ id: string }>();
  const project = id ? getProject(id) : null;
  
  if (!project) {
    return <div>Project not found</div>;
  }
  
  return (
    <div className="min-h-screen pt-20">
      <div className="container mx-auto px-6 md:px-12">
        <Link to="/projects" className="inline-flex items-center text-sm text-muted-foreground hover:text-primary mb-8">
          <ArrowLeft size={16} className="mr-2" />
          Back to all projects
        </Link>
        
        <div className="glass-panel rounded-2xl overflow-hidden mb-10">
          <ImageCarousel images={project.images} />
        </div>
        
        <div className="max-w-4xl">
          <div className="mb-8">
            <div className="flex items-center space-x-4 mb-4">
              <div className="w-14 h-14 rounded-md overflow-hidden bg-secondary flex items-center justify-center">
                <img 
                  src={project.logoSrc} 
                  alt={`${project.title} logo`} 
                  className="object-contain w-10 h-10"
                />
              </div>
              <h1 className="text-3xl md:text-4xl font-display font-medium tracking-tight">{project.title}</h1>
            </div>
            
            <div className="inline-block px-3 py-1 rounded-full text-xs bg-secondary text-secondary-foreground mb-4">
              {project.role}
            </div>
            
            <p className="text-xl text-muted-foreground">{project.description}</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-16">
            <div>
              <h2 className="text-2xl font-display font-medium mb-4">The Problem</h2>
              <p className="text-muted-foreground">{project.problem}</p>
            </div>
            
            <div>
              <h2 className="text-2xl font-display font-medium mb-4">The Solution</h2>
              <p className="text-muted-foreground">{project.solution}</p>
            </div>
          </div>
          
          <div className="mb-16">
            <h2 className="text-2xl font-display font-medium mb-6">My Contributions</h2>
            <ul className="space-y-3">
              {project.contributions.map((contribution, index) => (
                <li key={index} className="flex items-start">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center mr-3 mt-0.5">
                    <Check size={14} className="text-primary" />
                  </span>
                  <span className="text-muted-foreground">{contribution}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h2 className="text-2xl font-display font-medium mb-6">Results & Impact</h2>
            <ul className="space-y-3">
              {project.results.map((result, index) => (
                <li key={index} className="flex items-start">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center mr-3 mt-0.5">
                    <Check size={14} className="text-primary" />
                  </span>
                  <span className="text-muted-foreground">{result}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

const ProjectsList = () => {
  return (
    <div className="min-h-screen">
      <Header />
      
      <Section title="My Projects" subtitle="Portfolio" className="pt-28">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
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
      </Section>
      
      <Footer />
    </div>
  );
};

const Projects = () => {
  const { id } = useParams<{ id?: string }>();
  
  return id ? <ProjectDetail /> : <ProjectsList />;
};

export default Projects;
