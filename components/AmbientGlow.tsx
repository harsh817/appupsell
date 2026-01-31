import React from 'react';

interface AmbientGlowProps {
    color?: 'primary' | 'rosegold' | 'blue' | 'gradient';
    size?: 'sm' | 'md' | 'lg' | 'xl';
    className?: string;
}

export const AmbientGlow: React.FC<AmbientGlowProps> = ({ 
    color = 'primary',
    size = 'md',
    className = ''
}) => {
    const colorClasses = {
        primary: 'bg-primary/5',
        rosegold: 'bg-rosegold/5',
        blue: 'bg-blue-500/5',
        gradient: 'bg-gradient-to-br from-primary/5 to-rosegold/5'
    };

    const sizeClasses = {
        sm: '-inset-10 blur-[60px]',
        md: '-inset-10 blur-[80px]',
        lg: '-inset-20 blur-[100px]',
        xl: '-inset-20 blur-[120px]'
    };

    return (
        <div className={`
            absolute 
            ${sizeClasses[size]} 
            ${colorClasses[color]} 
            rounded-full 
            pointer-events-none
            ${className}
        `}></div>
    );
};
