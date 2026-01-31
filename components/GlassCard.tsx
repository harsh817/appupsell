import React from 'react';

interface GlassCardProps {
    children: React.ReactNode;
    className?: string;
    hover?: boolean;
    glowColor?: 'primary' | 'rosegold' | 'blue';
    padding?: 'sm' | 'md' | 'lg';
}

export const GlassCard: React.FC<GlassCardProps> = ({ 
    children, 
    className = '', 
    hover = true,
    glowColor = 'primary',
    padding = 'md'
}) => {
    const paddingClasses = {
        sm: 'p-4 sm:p-6',
        md: 'p-6 sm:p-8',
        lg: 'p-8 sm:p-10'
    };

    const glowColors = {
        primary: 'bg-primary/10',
        rosegold: 'bg-rosegold/10',
        blue: 'bg-blue-500/10'
    };

    const borderHoverColors = {
        primary: 'hover:border-primary/40',
        rosegold: 'hover:border-rosegold/40',
        blue: 'hover:border-blue-500/40'
    };

    return (
        <div className={`
            group relative 
            bg-white/[0.02] backdrop-blur-xl 
            border border-white/10 
            rounded-2xl 
            ${paddingClasses[padding]}
            ${hover ? `${borderHoverColors[glowColor]} hover:-translate-y-2 transition-all duration-500` : ''}
            ${className}
        `}>
            {/* Ambient glow */}
            {hover && (
                <div className={`
                    absolute -inset-4 
                    ${glowColors[glowColor]} 
                    blur-[80px] 
                    opacity-0 group-hover:opacity-100 
                    transition-opacity duration-500 
                    pointer-events-none
                `}></div>
            )}
            {/* Content */}
            <div className="relative z-10">
                {children}
            </div>
        </div>
    );
};
