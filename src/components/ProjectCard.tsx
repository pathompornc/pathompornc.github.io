
import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

export interface ProjectProps {
  id: string;
  title: string;
  logoSrc: string;
  description: string;
  role: string;
}

const ProjectCard: React.FC<ProjectProps> = ({
  id,
  title,
  logoSrc,
  description,
  role,
}) => {
  return (
    <Link 
      to={`/projects/${id}`}
      className="group block"
    >
      <div className="glass-panel rounded-2xl overflow-hidden transition-all duration-300 group-hover:translate-y-[-4px]">
        <div className="p-8 flex flex-col h-full">
          <div className="flex items-center space-x-4 mb-4">
            <div className="w-12 h-12 rounded-md overflow-hidden bg-secondary flex items-center justify-center">
              <img 
                src={logoSrc} 
                alt={`${title} logo`} 
                className="object-contain w-8 h-8"
              />
            </div>
            <h3 className="text-xl font-medium font-display">{title}</h3>
          </div>
          
          <div className="mb-4">
            <div className="inline-block px-3 py-1 rounded-full text-xs bg-secondary text-secondary-foreground mb-3">
              {role}
            </div>
            <p className="text-muted-foreground line-clamp-2">{description}</p>
          </div>
          
          <div className="mt-auto pt-4 flex items-center text-sm font-medium text-primary">
            <span>View project</span>
            <ChevronRight size={16} className="ml-1 transition-transform group-hover:translate-x-1" />
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProjectCard;
