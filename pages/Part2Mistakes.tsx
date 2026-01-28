
import React from 'react';
import { IMAGES } from '../constants.ts';

const MistakeCard: React.FC<{ num: string; title: string; desc: string; img: string }> = ({ num, title, desc, img }) => (
    <div className="group relative bg-white/[0.02] backdrop-blur-xl border border-white/10 hover:border-rosegold/40 rounded-2xl p-8 transition-all duration-500 hover:-translate-y-2 overflow-hidden min-h-[450px] flex flex-col">
        <span className="absolute -top-4 -right-2 text-[8rem] font-display font-black text-white/[0.03] leading-none pointer-events-none group-hover:text-rosegold/[0.05] transition-colors">
            {num}
        </span>
        <div className="relative z-10 w-full h-48 rounded-lg overflow-hidden mb-8 border border-white/10">
            {/* Removed grayscale to let Indian skin tones and seductive colors shine */}
            <img src={img} alt={title} className="w-full h-full object-cover brightness-75 group-hover:brightness-100 group-hover:scale-110 transition-all duration-700" />
        </div>
        <h3 className="relative z-10 text-2xl font-display text-white mb-4 group-hover:text-rosegold transition-colors">{title}</h3>
        <p className="relative z-10 text-white/50 font-light leading-relaxed text-sm">{desc}</p>
    </div>
);

const Part2Mistakes: React.FC = () => {
    const scrollToSystem = () => {
        const element = document.getElementById('system');
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div className="pt-20 pb-12 px-6 md:px-12 max-w-7xl mx-auto">
            {/* Header */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
                <div>
                    <h1 className="text-6xl md:text-7xl font-light text-white leading-[1.1] mb-12 font-display">
                        You're Not Bad <br/>
                        <span className="italic text-rosegold">at Texting.</span>
                    </h1>
                    <div className="space-y-8 text-white/60 font-light leading-relaxed text-lg max-w-xl">
                        <p>Listen, I get it. You're smart. You're successful. You can hold a real conversation in person just fine. But texting? That's a different game entirely.</p>
                        <p>In person, you have context. Over text, you have... <span className="text-white font-medium border-b border-primary/40">Words. Just words.</span></p>
                        <p className="text-rosegold font-medium italic opacity-90">You're supposed to just... figure it out?</p>
                    </div>
                </div>
                {/* Chat Mockup Replacement for Hero Image */}
                <div className="relative group perspective-1000">
                    <div className="absolute -inset-4 bg-primary/10 blur-[80px] group-hover:bg-primary/20 transition-all duration-1000"></div>
                    
                    <div className="relative rounded-[2.5rem] w-full aspect-[4/5] bg-obsidian border border-white/10 shadow-2xl rotate-2 overflow-hidden flex flex-col hover:rotate-0 transition-transform duration-700">
                        {/* Status Bar */}
                        <div className="px-8 py-5 flex justify-between items-center bg-white/[0.02] border-b border-white/5">
                            <span className="text-[10px] text-white/40 font-medium font-mono">22:41</span>
                            <div className="flex gap-1.5 items-center">
                                <span className="material-symbols-outlined text-[14px] text-white/40">wifi</span>
                                <span className="material-symbols-outlined text-[14px] text-white/40">signal_cellular_alt</span>
                                <div className="w-5 h-2.5 bg-white/20 rounded-[2px] border border-white/10 relative ml-1">
                                    <div className="absolute inset-0.5 bg-white/60 rounded-[1px] w-[60%]"></div>
                                </div>
                            </div>
                        </div>

                        {/* Chat Header */}
                        <div className="px-6 py-4 border-b border-white/5 flex items-center gap-4 bg-white/[0.02] backdrop-blur-md sticky top-0 z-10">
                             <div className="size-10 rounded-full border border-white/10 overflow-hidden relative">
                                <img src={IMAGES.profileRiya} className="w-full h-full object-cover opacity-80" />
                                <div className="absolute inset-0 bg-primary/10 mix-blend-overlay"></div>
                             </div>
                             <div className="flex flex-col">
                                <span className="text-sm text-white font-display italic tracking-wide">Maya (Bumble)</span>
                                <span className="text-[9px] text-white/30 uppercase tracking-widest">Online</span>
                             </div>
                        </div>

                        {/* Chat Area */}
                        <div className="flex-1 p-6 space-y-6 overflow-y-auto bg-gradient-to-b from-[#050505] to-[#0a0a0a] scrollbar-hide">
                            <div className="flex justify-center my-4">
                                <span className="text-[9px] text-white/20 font-bold uppercase tracking-[0.2em] bg-white/5 px-3 py-1 rounded-full">Yesterday</span>
                            </div>

                            {/* Boring Exchange */}
                            <div className="flex flex-col gap-1 items-end">
                                <div className="bg-[#1A1A1A] border border-white/5 text-white/80 text-sm px-5 py-3 rounded-2xl rounded-tr-sm max-w-[85%] font-light">
                                    Hey Maya, how's your week going?
                                </div>
                            </div>

                             <div className="flex flex-col gap-1 items-start">
                                 <div className="bg-primary/10 border border-primary/20 text-white/90 text-sm px-5 py-3 rounded-2xl rounded-tl-sm max-w-[85%] font-light shadow-[0_0_15px_rgba(255,75,110,0.1)]">
                                    It's okay! Just super busy with work 😅
                                </div>
                            </div>

                            <div className="flex flex-col gap-1 items-end">
                                <div className="bg-[#1A1A1A] border border-white/5 text-white/80 text-sm px-5 py-3 rounded-2xl rounded-tr-sm max-w-[85%] font-light">
                                    Ah nice. What do you do for work?
                                </div>
                                <div className="bg-[#1A1A1A] border border-white/5 text-white/80 text-sm px-5 py-3 rounded-2xl rounded-tr-sm max-w-[85%] font-light">
                                    Do you like marketing?
                                </div>
                                <span className="text-[9px] text-primary/60 font-medium tracking-wider mt-1 mr-1">Read 10:45 AM</span>
                            </div>
                            
                            {/* Ghosting visual */}
                            <div className="flex justify-center mt-8 opacity-30">
                                <span className="text-[9px] text-white font-bold uppercase tracking-[0.3em]">No Reply</span>
                            </div>

                        </div>
                        
                        {/* Input Area */}
                        <div className="p-5 bg-white/[0.02] border-t border-white/5 backdrop-blur-sm">
                            <div className="h-12 rounded-full bg-white/5 border border-white/5 flex items-center px-5 justify-between">
                                <div className="w-2/3 h-2 bg-white/10 rounded-full animate-pulse"></div>
                                <div className="flex gap-3">
                                    <span className="material-symbols-outlined text-white/20 text-lg">mic</span>
                                    <span className="material-symbols-outlined text-white/20 text-lg">send</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Competition Section */}
            <div className="glass-panel border border-rosegold/10 bg-white/[0.01] p-10 md:p-14 rounded-3xl mb-24 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-rosegold/5 blur-[100px] rounded-full"></div>
                <div className="flex flex-col lg:flex-row gap-12 justify-between lg:items-center mb-12">
                    <div>
                        <h2 className="text-3xl font-display text-white italic mb-2">Meanwhile, she's getting texts from:</h2>
                        <p className="text-white/40 text-sm tracking-wide">The competition is no longer just "other guys."</p>
                    </div>
                    <div className="flex -space-x-4">
                        {IMAGES.avatars.map((src, i) => (
                            <img key={i} src={src} alt="Avatar" className="w-12 h-12 rounded-full border border-rosegold object-cover" />
                        ))}
                        <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center border border-primary/30 backdrop-blur-md">
                            <span className="material-symbols-outlined text-primary text-sm">bolt</span>
                        </div>
                    </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-8">
                    {["Guys who've had years of practice", "Guys who've read all the \"game\" books", "Guys who are naturally witty and charming", "And now, guys who are using AI to craft messages"].map((item, i) => (
                        <div key={i} className="flex items-start gap-4 text-white/80">
                            <span className="mt-2 w-1.5 h-1.5 rounded-full bg-primary shadow-[0_0_12px_rgba(255,75,110,1)] flex-shrink-0"></span>
                            <span className="font-light">{item}</span>
                        </div>
                    ))}
                </div>
                
                <div className="mt-12 pt-10 border-t border-white/5">
                    <p className="text-rosegold text-2xl font-display italic tracking-wide">
                        You're competing against all of them. With zero training. That's not a fair fight.
                    </p>
                </div>
            </div>

            {/* Mistakes Grid */}
            <div className="text-center mb-16">
                <div className="inline-flex items-center gap-6 text-rosegold/40 text-[10px] font-bold uppercase tracking-[0.6em] mb-8">
                    <span className="w-16 h-[0.5px] bg-gradient-to-r from-transparent to-rosegold/30"></span>
                    Deep Analysis
                    <span className="w-16 h-[0.5px] bg-gradient-to-l from-transparent to-rosegold/30"></span>
                </div>
                <h2 className="text-5xl md:text-7xl font-display text-white mb-8">
                    The Mistakes <br/> <span className="italic text-rosegold">You're Making</span>
                </h2>
                <p className="text-white/40 font-light max-w-2xl mx-auto text-lg">
                    After analyzing 10,000+ text conversations, we've found the patterns that kill attraction instantly.
                </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
                <MistakeCard 
                    num="01" 
                    img={IMAGES.mistakes[0]} 
                    title="You're too available" 
                    desc="Replying instantly every time. Never making her wait. Always being the one to text first." 
                />
                <MistakeCard 
                    num="02" 
                    img={IMAGES.mistakes[1]} 
                    title="Asking interview questions" 
                    desc="'What do you do?' 'Where are you from?' She's not filling out a job application. She wants to feel something." 
                />
                <MistakeCard 
                    num="03" 
                    img={IMAGES.mistakes[2]} 
                    title="You're too logical" 
                    desc="You're trying to have a meaningful conversation. She wants playful banter and emotional connection first." 
                />
                <MistakeCard 
                    num="04" 
                    img={IMAGES.mistakes[3]} 
                    title="Not reading energy" 
                    desc="She's sending short replies? You're still writing paragraphs. She's being playful? You're being serious." 
                />
                <MistakeCard 
                    num="05" 
                    img={IMAGES.mistakes[4]} 
                    title="Overthinking everything" 
                    desc="Spending 15 minutes crafting the 'perfect' reply. Then sending something safe and boring because you're scared." 
                />
                <MistakeCard 
                    num="06" 
                    img={IMAGES.mistakes[5]} 
                    title="Not escalating" 
                    desc="The conversation is going well, but you never suggest meeting up. Or you suggest it too early." 
                />
                 <div className="md:col-span-2 lg:col-span-3 lg:w-2/3 lg:mx-auto">
                    <MistakeCard 
                        num="07" 
                        img={IMAGES.mistakes[6]} 
                        title="You sound like everyone else" 
                        desc="Generic compliments. Safe topics. No personality. Nothing that makes her say 'This guy is different.'" 
                    />
                 </div>
            </div>

            {/* Transition */}
            <div className="flex flex-col items-center text-center py-16 bg-gradient-to-b from-transparent via-primary/5 to-transparent rounded-full">
                <h2 className="text-6xl md:text-8xl font-display italic text-white mb-12">Sound familiar?</h2>
                <div className="space-y-6 text-2xl font-light text-white/70 mb-12 max-w-2xl">
                    <p>Of course it does. Because you're doing what seems logical.</p>
                    <p className="text-rosegold font-medium italic">But safe doesn't spark attraction.</p>
                </div>
                <button 
                    onClick={scrollToSystem}
                    className="group relative px-12 py-6 bg-primary text-white font-black tracking-[0.4em] uppercase text-xs rounded-full transition-all duration-500 hover:scale-105 hover:shadow-[0_0_40px_rgba(255,75,110,0.5)]"
                >
                    Stop Making Mistakes
                </button>
                <div className="mt-16 flex flex-col items-center gap-6 opacity-30">
                    <p className="text-[9px] font-bold uppercase tracking-[1.2em] text-white">Neural Response Engine v2.0</p>
                    <div className="w-px h-32 bg-gradient-to-b from-primary to-transparent"></div>
                </div>
            </div>
        </div>
    );
};

export default Part2Mistakes;
