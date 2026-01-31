
import React from 'react';
import { IMAGES } from '../constants.ts';
import { GlassCard, PrimaryButton, Section, AmbientGlow } from '../components';

const MistakeCard: React.FC<{ num: string; title: string; desc: string; img: string; overlayText?: string }> = ({ num, title, desc, img, overlayText }) => (
    <GlassCard padding="md" hover glowColor="rosegold" className="overflow-hidden min-h-[350px] sm:min-h-[380px] flex flex-col">
        <span className="absolute -top-3 sm:-top-4 -right-1 sm:-right-2 text-[6rem] sm:text-[8rem] font-display font-black text-white/[0.03] leading-none pointer-events-none group-hover:text-rosegold/[0.05] transition-colors">
            {num}
        </span>
        <div className="relative z-10 w-full h-40 sm:h-48 rounded-lg overflow-hidden mb-6 sm:mb-8 border border-white/10">
            {/* Removed grayscale to let Indian skin tones and seductive colors shine */}
            <img src={img} alt={title} className="w-full h-full object-cover brightness-75 group-hover:brightness-100 group-hover:scale-110 transition-all duration-700" />
            {overlayText && (
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent pt-8 pb-3 px-4">
                    <p className="text-[10px] sm:text-xs uppercase tracking-[0.3em] font-bold text-white/90">{overlayText}</p>
                </div>
            )}
        </div>
        <h3 className="relative z-10 text-xl sm:text-2xl font-display text-white mb-3 sm:mb-4 group-hover:text-rosegold transition-colors">{title}</h3>
        <p className="relative z-10 text-white/50 font-light leading-relaxed text-xs sm:text-sm">{desc}</p>
    </GlassCard>
);

const Part2Mistakes: React.FC = () => {
    const scrollToSystem = () => {
        const element = document.getElementById('system');
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <Section containerSize="large" spacing="lg">
            {/* Header */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 sm:gap-14 md:gap-16 items-center mb-16 sm:mb-20">
                <div className="text-center lg:text-left">
                    <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light text-white leading-[1.1] mb-8 sm:mb-10 md:mb-12 font-display">
                        You're Not Bad <br/>
                        <span className="italic text-rosegold">at Texting.</span>
                    </h1>
                    <div className="space-y-6 sm:space-y-7 md:space-y-8 text-white/60 font-light leading-relaxed text-base sm:text-lg max-w-xl">
                        <p>Listen, I get it. You're smart. You're successful. You can hold a real conversation in person just fine. But texting? That's a different game entirely.</p>
                        <p>In person, you have context. Over text, you have... <span className="text-white font-medium border-b border-primary/40">Words. Just words.</span></p>
                        <p className="text-rosegold font-medium italic opacity-90">You're supposed to just... figure it out?</p>
                    </div>
                </div>
                {/* Chat Mockup Replacement for Hero Image */}
                <div className="relative group perspective-1000">
                    <AmbientGlow color="primary" size="lg" className="group-hover:opacity-100" />
                    
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
            <div className="glass-panel border border-rosegold/10 bg-white/[0.01] p-6 sm:p-8 md:p-10 lg:p-14 rounded-2xl sm:rounded-3xl mb-20 sm:mb-24 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-48 sm:w-64 h-48 sm:h-64 bg-rosegold/5 blur-[80px] sm:blur-[100px] rounded-full"></div>
                <div className="flex flex-col lg:flex-row gap-8 sm:gap-10 md:gap-12 justify-between lg:items-center mb-10 sm:mb-12">
                    <div>
                        <h2 className="text-2xl sm:text-3xl font-display text-white italic mb-2">Meanwhile, she's getting texts from:</h2>
                        <p className="text-white/40 text-xs sm:text-sm tracking-wide">The competition is no longer just "other guys."</p>
                    </div>
                    <div className="flex -space-x-3 sm:-space-x-4">
                        {IMAGES.avatars.map((src, i) => (
                            <img key={i} src={src} alt="Avatar" className="w-10 sm:w-12 h-10 sm:h-12 rounded-full border border-rosegold object-cover" />
                        ))}
                        <div className="w-10 sm:w-12 h-10 sm:h-12 rounded-full bg-primary/10 flex items-center justify-center border border-primary/30 backdrop-blur-md">
                            <span className="material-symbols-outlined text-primary text-xs sm:text-sm">bolt</span>
                        </div>
                    </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
                    {["Guys who've had years of practice", "Guys who've read all the \"game\" books", "Guys who are naturally witty and charming", "And now, guys who are using AI to craft messages"].map((item, i) => (
                        <div key={i} className="flex items-start gap-3 sm:gap-4 text-sm sm:text-base text-white/80">
                            <span className="mt-2 w-1.5 h-1.5 rounded-full bg-primary shadow-[0_0_12px_rgba(255,75,110,1)] flex-shrink-0"></span>
                            <span className="font-light">{item}</span>
                        </div>
                    ))}
                </div>
                
                <div className="mt-10 sm:mt-12 pt-8 sm:pt-10 border-t border-white/5">
                    <p className="text-center text-rosegold text-xl sm:text-2xl font-display italic tracking-wide">
                        You're competing against all of them. With zero training. That's not a fair fight.
                    </p>
                </div>
            </div>

            {/* Mistakes Grid */}
            <div className="text-center mb-12 sm:mb-16">
                <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-display text-white mb-6 sm:mb-8">
                    The Mistakes <br/> <span className="italic text-rosegold">You're Making</span>
                </h2>
                <p className="text-white/40 font-light max-w-2xl mx-auto text-base sm:text-lg px-4">
                    After analyzing 10,000+ text conversations, we've found the patterns that kill attraction instantly.
                </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-20 sm:mb-24">
                <MistakeCard 
                    num="01" 
                    img={IMAGES.mistakes[0]} 
                    title="You're too available" 
                    desc="Replying instantly every time. Never making her wait. Always being the one to text first." 
                    overlayText="TOO EAGER"
                />
                <MistakeCard 
                    num="02" 
                    img={IMAGES.mistakes[1]} 
                    title="Asking interview questions" 
                    desc="'What do you do?' 'Where are you from?' She's not filling out a job application. She wants to feel something." 
                    overlayText="BORING"
                />
                <MistakeCard 
                    num="03" 
                    img={IMAGES.mistakes[2]} 
                    title="You're too logical" 
                    desc="You're trying to have a meaningful conversation. She wants playful banter and emotional connection first." 
                    overlayText="NO SPARK"
                />
                <MistakeCard 
                    num="04" 
                    img={IMAGES.mistakes[3]} 
                    title="Not reading energy" 
                    desc="She's sending short replies? You're still writing paragraphs. She's being playful? You're being serious." 
                    overlayText="TONE DEAF"
                />
                <MistakeCard 
                    num="05" 
                    img={IMAGES.mistakes[4]} 
                    title="Overthinking everything" 
                    desc="Spending 15 minutes crafting the 'perfect' reply. Then sending something safe and boring because you're scared." 
                    overlayText="PARALYZED"
                />
                <MistakeCard 
                    num="06" 
                    img={IMAGES.mistakes[5]} 
                    title="Not escalating" 
                    desc="The conversation is going well, but you never suggest meeting up. Or you suggest it too early." 
                    overlayText="MISSED CHANCE"
                />
                 <div className="md:col-span-2 lg:col-span-3 lg:w-2/3 lg:mx-auto">
                    <MistakeCard 
                        num="07" 
                        img={IMAGES.mistakes[6]} 
                        title="You sound like everyone else" 
                        desc="Generic compliments. Safe topics. No personality. Nothing that makes her say 'This guy is different.'" 
                        overlayText="INVISIBLE"
                    />
                 </div>
            </div>

            {/* Transition */}
            <div className="flex flex-col items-center text-center py-12 sm:py-14 md:py-16 bg-gradient-to-b from-transparent via-primary/5 to-transparent rounded-full px-4">
                <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-display italic text-white mb-8 sm:mb-10 md:mb-12">Sound familiar?</h2>
                <div className="space-y-4 sm:space-y-6 text-lg sm:text-xl md:text-2xl font-light text-white/70 mb-10 sm:mb-12 max-w-2xl">
                    <p>Of course it does. Because you're doing what seems logical.</p>
                    <p className="text-rosegold font-medium italic">But safe doesn't spark attraction.</p>
                </div>
                <PrimaryButton
                    onClick={scrollToSystem}
                    size="md"
                >
                    Stop Making Mistakes
                </PrimaryButton>
            </div>
        </Section>
    );
};

export default Part2Mistakes;
