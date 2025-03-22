
import React from 'react';
import { Link } from 'react-router-dom';
import { Github, Linkedin, Mail, ExternalLink } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-16 bg-secondary/50 border-t border-gray-100">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-6">
            <h3 className="font-display text-xl font-medium">Let's create something amazing together</h3>
            <p className="text-muted-foreground max-w-md">
              Always open to discussing new projects, creative ideas or opportunities to be part of your vision.
            </p>
            
            <div className="flex items-center space-x-5 pt-2">
              <a 
                href="https://github.com/yourusername" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-primary transition-colors"
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
              <a 
                href="https://linkedin.com/in/yourusername" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-primary transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a 
                href="https://scholar.google.com/yourusername" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-primary transition-colors"
                aria-label="Google Scholar"
              >
                <ExternalLink size={20} />
              </a>
              <a 
                href="mailto:your.email@example.com" 
                className="text-gray-600 hover:text-primary transition-colors"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>
          
          <div className="flex flex-col md:items-end space-y-6">
            <div className="space-y-4">
              <h4 className="font-medium">Quick Links</h4>
              <nav className="flex flex-col space-y-2">
                <Link to="/" className="text-muted-foreground hover:text-primary transition-colors">Home</Link>
                <Link to="/projects" className="text-muted-foreground hover:text-primary transition-colors">Projects</Link>
                <Link to="/about" className="text-muted-foreground hover:text-primary transition-colors">About</Link>
              </nav>
            </div>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center text-sm text-muted-foreground">
          <p>© {currentYear} Pathomporn Chokchainant. All rights reserved.</p>
          <p className="mt-2 md:mt-0">Made with precision and care</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
