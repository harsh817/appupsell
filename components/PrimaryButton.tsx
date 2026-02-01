import React from 'react';

interface PrimaryButtonProps {
    children: React.ReactNode;
    onClick?: () => void;
    href?: string;
    className?: string;
    size?: 'sm' | 'md' | 'lg';
    fullWidth?: boolean;
    variant?: 'primary' | 'gradient';
}

export const PrimaryButton: React.FC<PrimaryButtonProps> = ({ 
    children, 
    onClick,
    href,
    className = '',
    size = 'md',
    fullWidth = false,
    variant = 'primary'
}) => {
    const sizeClasses = {
        sm: 'px-8 py-4 text-xs',
        md: 'px-10 py-5 text-xs',
        lg: 'px-12 py-6 text-sm'
    };

    const baseClasses = `
        group relative inline-flex items-center justify-center text-center
        ${variant === 'primary' ? 'bg-primary' : 'bg-gradient-to-r from-primary to-primary/90'}
        text-obsidian 
        rounded-xl 
        font-black uppercase 
        tracking-[0.3em]
        shadow-[0_0_40px_rgba(255,75,110,0.4)] 
        hover:shadow-[0_0_60px_rgba(255,75,110,0.6)] 
        hover:scale-105 
        active:scale-95 
        transition-all duration-300
        ${sizeClasses[size]}
        ${fullWidth ? 'w-full' : ''}
        ${className}
    `;

    const content = (
        <>
            <span className="relative z-10 block w-full text-center">{children}</span>
            <div className="absolute inset-0 bg-white/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </>
    );

    if (href) {
        return (
            <a href={href} className={baseClasses}>
                {content}
            </a>
        );
    }

    return (
        <button onClick={onClick} className={baseClasses}>
            {content}
        </button>
    );
};
