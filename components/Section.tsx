import React from 'react';

interface SectionProps {
    children: React.ReactNode;
    className?: string;
    containerSize?: 'full' | 'large' | 'medium' | 'small';
    spacing?: 'sm' | 'md' | 'lg';
}

export const Section: React.FC<SectionProps> = ({ 
    children, 
    className = '',
    containerSize = 'large',
    spacing = 'md'
}) => {
    const containerClasses = {
        full: 'max-w-full',
        large: 'max-w-7xl',
        medium: 'max-w-5xl',
        small: 'max-w-3xl'
    };

    const spacingClasses = {
        sm: 'py-12 sm:py-16',
        md: 'pt-16 sm:pt-20 pb-8 sm:pb-12',
        lg: 'py-20 sm:py-24'
    };

    return (
        <section className={`
            ${spacingClasses[spacing]} 
            px-4 sm:px-6 
            ${containerClasses[containerSize]} 
            mx-auto
            ${className}
        `}>
            {children}
        </section>
    );
};
