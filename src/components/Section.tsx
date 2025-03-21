
import React from 'react';

interface SectionProps {
  title?: string;
  subtitle?: string;
  children: React.ReactNode;
  className?: string;
  fullWidth?: boolean;
  id?: string;
}

const Section: React.FC<SectionProps> = ({ 
  title, 
  subtitle, 
  children, 
  className = '', 
  fullWidth = false,
  id
}) => {
  return (
    <section id={id} className={`py-16 md:py-24 ${className}`}>
      <div className={fullWidth ? 'w-full' : 'container mx-auto px-6 md:px-12'}>
        {(title || subtitle) && (
          <div className="mb-12 md:mb-16 text-center max-w-3xl mx-auto">
            {subtitle && (
              <div className="inline-block px-3 py-1 rounded-full text-xs bg-secondary text-secondary-foreground mb-3">
                {subtitle}
              </div>
            )}
            {title && (
              <h2 className="text-3xl md:text-4xl font-display font-medium tracking-tight">
                {title}
              </h2>
            )}
          </div>
        )}
        {children}
      </div>
    </section>
  );
};

export default Section;
