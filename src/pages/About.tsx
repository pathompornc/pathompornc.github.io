
import React from 'react';
import { Github, Linkedin, Mail, FileText, ExternalLink } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Section from '../components/Section';
import ExperienceCard from '../components/ExperienceCard';
import EducationCard from '../components/EducationCard';
import CertificationCard from '../components/CertificationCard';
import { experiences, education, certifications } from '../data/projects';

const About = () => {
  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Profile Section */}
      <Section className="pt-28">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-block px-3 py-1 rounded-full text-xs bg-secondary text-secondary-foreground mb-2">
              About Me
            </div>
            <h1 className="text-3xl md:text-5xl font-display font-medium tracking-tight mb-6">
              Patt Chokchainant
            </h1>
            <p className="text-xl text-muted-foreground mb-6">
              I'm a passionate software engineer with expertise in developing innovative solutions 
              that merge technical excellence with intuitive user experiences. With a background 
              spanning web development, machine learning, and system architecture, I approach each 
              project with a focus on creating scalable, efficient, and elegant code.
            </p>
            <p className="text-xl text-muted-foreground mb-6">
              My philosophy centers on continuous learning and growth. I believe in the power of 
              technology to transform businesses and improve lives, and I'm committed to being 
              part of that transformation through thoughtful, purpose-driven development.
            </p>
            <div className="pt-4 flex flex-wrap gap-4">
              <a 
                href="https://linkedin.com/in/yourusername" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center px-4 py-2 rounded-full bg-secondary hover:bg-secondary/80 transition-colors"
              >
                <Linkedin size={18} className="mr-2" />
                LinkedIn
              </a>
              <a 
                href="https://github.com/yourusername" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center px-4 py-2 rounded-full bg-secondary hover:bg-secondary/80 transition-colors"
              >
                <Github size={18} className="mr-2" />
                GitHub
              </a>
              <a 
                href="https://scholar.google.com/yourusername" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center px-4 py-2 rounded-full bg-secondary hover:bg-secondary/80 transition-colors"
              >
                <ExternalLink size={18} className="mr-2" />
                Google Scholar
              </a>
              <a 
                href="mailto:your.email@example.com" 
                className="inline-flex items-center px-4 py-2 rounded-full bg-secondary hover:bg-secondary/80 transition-colors"
              >
                <Mail size={18} className="mr-2" />
                Email Me
              </a>
            </div>
            <div className="pt-2">
              <a 
                href="/resume.pdf" 
                target="_blank"
                className="inline-flex items-center px-5 py-3 rounded-full bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
              >
                <FileText size={18} className="mr-2" />
                Download Resume
              </a>
            </div>
          </div>
          
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="w-56 h-56 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white shadow-lg">
              <img 
                src="https://images.unsplash.com/photo-1649972904349-6e44c42644a7?auto=format&fit=crop&w=400&h=400" 
                alt="Profile" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </Section>
      
      {/* Certifications Section */}
      <Section 
        title="Certifications"
        subtitle="Professional Development"
        className="bg-secondary/30"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {certifications.map((cert, index) => (
            <CertificationCard 
              key={index}
              title={cert.title}
              issuer={cert.issuer}
              date={cert.date}
              credential={cert.credential}
              credentialUrl={cert.credentialUrl}
              logoSrc={cert.logoSrc}
            />
          ))}
        </div>
      </Section>
      
      {/* Experience Section */}
      <Section 
        title="Work Experience"
        subtitle="Professional Journey"
      >
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <ExperienceCard 
              key={index}
              company={exp.company}
              period={exp.period}
              role={exp.role}
              description={exp.description}
              logoSrc={exp.logoSrc}
            />
          ))}
        </div>
      </Section>
      
      {/* Education Section */}
      <Section 
        title="Education"
        subtitle="Academic Background"
        className="bg-secondary/30"
      >
        <div className="space-y-8">
          {education.map((edu, index) => (
            <EducationCard 
              key={index}
              school={edu.school}
              degree={edu.degree}
              period={edu.period}
              activities={edu.activities}
              awards={edu.awards}
              logoSrc={edu.logoSrc}
            />
          ))}
        </div>
      </Section>
      
      <Footer />
    </div>
  );
};

export default About;
