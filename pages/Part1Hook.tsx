import React from 'react';
import { motion } from 'framer-motion';
import { IMAGES } from '../constants';

const Part1Hook: React.FC = () => {
    const scrollToMistakes = () => {
        const element = document.getElementById('mistakes');
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div className="w-full overflow-hidden">
            {/* Hero Section */}
            <section className="relative min-h-screen flex flex-col justify-center px-6 md:px-20 pt-32 pb-20">
                <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 bg-gradient-to-r from-obsidian via-transparent to-obsidian z-10"></div>
                    <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-transparent to-obsidian z-10"></div>
                    <img src={IMAGES.heroBg} alt="Background" className="w-full h-full object-cover opacity-20 grayscale" />
                </div>

                <div className="relative z-10 max-w-5xl mx-auto w-full">
                    <motion.div 
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, ease: "easeOut" }}
                    >
                        <h1 className="text-6xl md:text-8xl lg:text-9xl font-display font-light text-white leading-[0.9] tracking-tighter mb-10">
                            Stop Getting Left on <br/>
                            <span className="font-display italic text-primary seen-glow lowercase px-2 md:px-4 block md:inline-block mt-4 md:mt-0">"seen"</span>
                            <span className="text-3xl md:text-5xl block mt-8 opacity-90 font-sans font-thin tracking-wide">— Get Replies That Actually Lead to Dates</span>
                        </h1>
                        <p className="text-lg md:text-2xl text-white/50 max-w-2xl font-light leading-relaxed mb-16">
                            The AI-Powered Texting System That Helps Indian Guys Keep Conversations Going (Without Sounding Like a Bot)
                        </p>
                    </motion.div>

                    {/* Chat Mockup */}
                    <motion.div 
                        className="relative w-full max-w-lg mb-24"
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.5, duration: 1 }}
                    >
                        <div className="frosted-glass rounded-[2.5rem] p-8 relative overflow-hidden neon-tube">
                            <div className="flex items-center gap-4 mb-8">
                                <div className="relative">
                                    <div className="size-12 rounded-full border border-white/20 overflow-hidden">
                                        <img src={IMAGES.profileRiya} alt="Profile" className="w-full h-full object-cover" />
                                    </div>
                                    <div className="absolute -bottom-1 -right-1 size-3 bg-emerald-500 rounded-full border-2 border-black"></div>
                                </div>
                                <div>
                                    <h4 className="font-display text-white text-lg italic">Riya</h4>
                                    <p className="text-[10px] uppercase tracking-[0.2em] text-white/40 font-bold">Active now</p>
                                </div>
                            </div>
                            <div className="space-y-6">
                                <div className="flex flex-col items-end gap-2">
                                    <div className="bg-white/10 border border-white/20 px-6 py-4 rounded-3xl rounded-tr-none max-w-[90%]">
                                        <p className="text-sm font-light text-white/90 leading-relaxed">
                                            You know what, I think you're really interesting. Would love to grab a coffee this weekend?
                                        </p>
                                    </div>
                                    <div className="flex items-center gap-2 pr-2">
                                        <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-primary seen-glow italic">Seen 11:47 PM</span>
                                        <span className="material-symbols-outlined text-[14px] text-primary">done_all</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    <div className="flex flex-col items-start gap-8">
                        <button 
                            onClick={scrollToMistakes}
                            className="bg-coral-gradient text-white px-12 py-6 text-[11px] font-bold tracking-[0.4em] uppercase rounded-2xl shadow-[0_10px_30px_-10px_rgba(255,75,110,0.5)] hover:brightness-110 active:scale-95 transition-all"
                        >
                            Break The Silence
                        </button>
                        <motion.div 
                            className="flex items-center gap-4 text-white/30"
                            animate={{ opacity: [0.3, 1, 0.3] }}
                            transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
                        >
                            <span className="text-[9px] uppercase tracking-[0.6em]">Scroll to unveil</span>
                            <div className="w-12 h-[1px] bg-white/20"></div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* The Diagnosis Section */}
            <section className="relative py-40 border-t border-white/5 px-6 md:px-20 overflow-hidden">
                <div className="absolute inset-0 z-0 opacity-20">
                    <img src={IMAGES.cityStreet} alt="Street" className="w-full h-full object-cover grayscale" />
                    <div className="absolute inset-0 bg-gradient-to-b from-obsidian via-transparent to-obsidian"></div>
                </div>

                <div className="relative z-10 grid grid-cols-1 md:grid-cols-12 gap-12 items-start max-w-7xl mx-auto">
                    <div className="md:col-span-8 space-y-24">
                        <motion.div 
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1 }}
                        >
                            <h2 className="text-5xl md:text-7xl font-display italic text-white leading-tight">
                                You know that feeling.
                            </h2>
                            <div className="space-y-16 max-w-xl mt-12">
                                <div className="space-y-8 text-xl text-white/60 font-light leading-relaxed">
                                    <p>You finally get her number. Or she matches with you on Bumble. Maybe she even messages first.</p>
                                    <p>You're excited. You text back something you think is clever.</p>
                                </div>
                                <div className="relative py-12 pl-12 border-l border-primary/50">
                                    <div className="space-y-8">
                                        <p className="text-4xl md:text-5xl font-display text-white italic">And then... nothing.</p>
                                        <p className="text-xl md:text-2xl text-white/40 font-light">One hour passes. Then three. Then a full day.</p>
                                        <p className="text-2xl md:text-3xl font-display text-primary seen-glow italic">"Seen at 11:47 PM."</p>
                                        <p className="text-xl md:text-2xl text-white font-light italic">She saw it. She just didn't care enough to reply.</p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                    
                    <div className="md:col-span-4 md:sticky md:top-40 pt-12">
                        <div className="border-l border-white/10 pl-8 space-y-8">
                            <span className="text-[10px] tracking-[0.5em] uppercase font-bold text-primary block">The Diagnosis</span>
                            <p className="text-white text-lg font-medium leading-snug">Here's what probably happened:</p>
                            <div className="space-y-6 text-white/60 font-light">
                                <p>Your message was fine. Not terrible. Not amazing. Just... fine.</p>
                                <p>And "fine" doesn't cut it when she has 47 other guys texting her the exact same thing.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-40 max-w-6xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                        <div className="order-2 lg:order-1">
                            <div className="flex flex-col gap-8 mb-20">
                                <span className="text-xl italic text-white/30 border-b border-white/5 pb-4 w-fit">"Hey, how was your day?"</span>
                                <span className="text-xl italic text-white/30 border-b border-white/5 pb-4 w-fit">"What are you up to?"</span>
                                <span className="text-xl italic text-white/30 border-b border-white/5 pb-4 w-fit">"You look beautiful in your photos"</span>
                            </div>
                            <div className="space-y-12">
                                <p className="text-2xl text-white/70 font-light max-w-2xl">
                                    She's heard it all before. A thousand times. From a thousand different guys.
                                </p>
                                <p className="text-2xl text-white/70 font-light max-w-2xl">
                                    So she doesn't reply. Not because she's rude. Not because she's not interested.
                                </p>
                            </div>
                        </div>
                        <div className="order-1 lg:order-2 relative group">
                             <div className="absolute -inset-4 bg-primary/20 blur-3xl rounded-full opacity-30 group-hover:opacity-50 transition-opacity"></div>
                             <div className="relative rounded-3xl overflow-hidden border border-white/10 shadow-2xl rotate-3 transform transition-transform group-hover:rotate-0 duration-700">
                                <img src={IMAGES.phoneMediocrity} alt="Phone" className="w-full aspect-[4/5] object-cover grayscale brightness-50 contrast-125" />
                                <div className="absolute bottom-8 left-0 right-0 text-center">
                                    <span className="bg-black/60 backdrop-blur-md px-6 py-3 rounded-full text-[10px] uppercase tracking-widest text-white/60 font-bold border border-white/10">The Sea of Mediocrity</span>
                                </div>
                             </div>
                        </div>
                    </div>
                    
                    <div className="pt-32 text-center lg:text-left">
                        <h3 className="text-6xl md:text-8xl font-display text-white mb-8 leading-tight">
                            Because she's <span className="text-primary italic">bored</span>.
                        </h3>
                        <p className="text-2xl md:text-3xl text-white font-light italic lg:border-l-4 lg:border-primary lg:pl-10 py-4 max-w-3xl">
                            And if there's one thing that kills attraction faster than anything else, it's being boring.
                        </p>
                    </div>
                </div>

                <div className="py-20 flex flex-col items-center">
                    <button onClick={scrollToMistakes} className="flex flex-col items-center gap-6 group cursor-pointer">
                        <span className="text-[10px] uppercase tracking-[0.8em] text-white/30 group-hover:text-primary transition-colors">Continue the Journey</span>
                        <span className="material-symbols-outlined text-white text-5xl font-thin group-hover:translate-y-2 transition-transform duration-500">expand_more</span>
                    </button>
                </div>
            </section>
        </div>
    );
};

export default Part1Hook;