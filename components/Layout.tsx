import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div className="relative min-h-screen font-sans text-gray-200 bg-obsidian selection:bg-primary/30">
            {/* Ambient Background */}
            <div className="fixed inset-0 z-0 pointer-events-none noise-texture"></div>
            <div className="fixed inset-0 z-0 pointer-events-none opacity-30 bg-gradient-to-br from-obsidian via-obsidian to-primary/5"></div>
            
            {/* Header */}
            <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'bg-obsidian/80 backdrop-blur-md border-b border-white/5 py-4' : 'bg-transparent py-6'}`}>
                <div className="max-w-[1440px] mx-auto px-6 md:px-8 flex justify-between items-center">
                    <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="flex items-center gap-3 group">
                        <span className="material-symbols-outlined text-primary text-2xl group-hover:rotate-180 transition-transform duration-700">auto_awesome</span>
                        <div className="flex flex-col items-start">
                            <span className="font-display font-medium text-sm md:text-base tracking-[0.2em] text-white uppercase group-hover:text-primary transition-colors">
                                TextAssistant
                            </span>
                            <span className="text-[8px] uppercase tracking-widest text-white/40 hidden md:block">Luxe Edition 2.0</span>
                        </div>
                    </button>

                    <div className="flex items-center gap-6">
                        <nav className="hidden md:flex items-center gap-6">
                            <button onClick={() => scrollToSection('mistakes')} className="text-[10px] uppercase tracking-widest text-white/40 cursor-pointer hover:text-primary transition-colors">Mistakes</button>
                            <button onClick={() => scrollToSection('system')} className="text-[10px] uppercase tracking-widest text-white/40 cursor-pointer hover:text-primary transition-colors">The System</button>
                        </nav>
                        <button 
                            onClick={() => scrollToSection('offer')}
                            className="bg-primary/10 border border-primary/20 text-primary px-6 py-2 md:py-3 text-[10px] font-bold tracking-[0.2em] uppercase rounded-sm hover:bg-primary hover:text-obsidian transition-all duration-300 shadow-[0_0_20px_rgba(255,75,110,0.2)] hover:shadow-[0_0_30px_rgba(255,75,110,0.6)]"
                        >
                            Secure Access
                        </button>
                    </div>
                </div>
            </header>

            <main className="relative z-10">
                {children}
            </main>

            <footer className="relative z-10 py-12 px-8 text-center border-t border-white/5 bg-obsidian">
                <div className="flex flex-col items-center gap-4">
                    <div className="flex items-center gap-2 opacity-50">
                        <span className="material-symbols-outlined text-primary text-lg">auto_awesome</span>
                        <span className="font-display font-medium text-[10px] tracking-widest text-white uppercase">TextAssistant AI</span>
                    </div>
                    <p className="text-[9px] font-medium uppercase tracking-[0.4em] text-white/20">
                        © 2024 Seductive Premium Experience • Confidential
                    </p>
                </div>
            </footer>
        </div>
    );
};

export default Layout;