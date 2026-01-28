
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { IMAGES } from '../constants.ts';

const Part3System: React.FC = () => {
    const [replyMode, setReplyMode] = useState<'flirty' | 'playful' | 'smooth'>('smooth');

    const replyContent = {
        flirty: {
            title: "Option 1: Flirty 🔥",
            barWidth: "w-3/4",
            color: "bg-pink-500",
            text: "That dress is trouble. Good thing I like a little danger."
        },
        playful: {
            title: "Option 2: Playful 😎",
            barWidth: "w-2/3",
            color: "bg-blue-500",
            text: "Is this where I'm supposed to say you look cute? Because I was thinking... breathtaking."
        },
        smooth: {
            title: "Option 3: Smooth 💼",
            barWidth: "w-full",
            color: "bg-secondary", // Using secondary from config if defined, else fallback style in class
            text: "Stop looking at me like that or I might just have to cancel my plans and take you out."
        }
    };

    const scrollToOffer = () => {
        const element = document.getElementById('offer');
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div className="pt-20 px-6 max-w-7xl mx-auto">
            {/* Hero */}
            <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl md:text-6xl font-light text-white leading-tight mb-8 font-display">
                        Introducing: The Complete Texting System That Does the <span className="italic text-primary">Heavy Lifting</span> For You
                    </h1>
                    <p className="text-primary font-bold tracking-[0.2em] text-xs uppercase mb-4 bg-primary/10 inline-block px-4 py-2 rounded-lg">
                        Here's what you're getting for just ₹97:
                    </p>
                </div>
                <div className="relative">
                    <div className="absolute -inset-10 bg-primary/10 rounded-full blur-[80px]"></div>
                    <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl group">
                        <img src={IMAGES.part3Hero} alt="Man Smiling" className="w-full aspect-[4/3] object-cover filter sepia-[0.3] contrast-110 brightness-90 transition-all duration-700 group-hover:sepia-0" />
                        <div className="absolute bottom-6 left-6 right-6">
                            <div className="bg-white/10 backdrop-blur-xl p-4 rounded-xl flex items-center gap-4 border border-white/20">
                                <div className="size-10 rounded-full bg-primary/20 flex items-center justify-center">
                                    <span className="material-symbols-outlined text-primary">bolt</span>
                                </div>
                                <div>
                                    <p className="text-[10px] text-primary font-bold tracking-widest uppercase">System Active</p>
                                    <p className="text-xs text-white/80">AI Suggestion: "That's a bold choice..."</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Part 1 Feature */}
            <div className="grid lg:grid-cols-2 gap-20 items-center mb-24">
                <div>
                    <span className="text-primary text-[10px] font-bold tracking-[0.5em] uppercase mb-4 block">Part 1</span>
                    <h2 className="text-4xl font-display text-white mb-8 leading-tight">Professional Texting Analysis (Worth ₹2,500)</h2>
                    <div className="space-y-8">
                        <p className="text-white/70 text-lg leading-relaxed font-light">
                            Send us screenshots of your conversations. We'll tell you the truth. Even if it stings a little. Because that's how you actually improve.
                        </p>
                        <div className="bg-white/[0.03] border border-white/10 p-8 rounded-2xl space-y-6">
                            <p className="text-primary text-xs font-bold uppercase tracking-[0.2em]">Within 24-48 hours, you'll get:</p>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {["Detailed breakdown of mistakes", "Specific moments you lost interest", "Better alternatives for weak texts", "Psychological triggers you missed"].map((item, i) => (
                                    <div key={i} className="flex items-start gap-3 text-sm text-white/80">
                                        <span className="material-symbols-outlined text-primary text-lg">check_circle</span>
                                        <span>{item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="relative">
                    <img src={IMAGES.expertWorking} alt="Expert" className="relative rounded-2xl border border-white/10 shadow-2xl w-full aspect-[4/5] object-cover contrast-125" />
                    <div className="absolute -bottom-6 -left-6 bg-obsidian p-6 rounded-xl border border-white/10 shadow-xl flex items-center gap-4 max-w-xs">
                         <div className="size-12 rounded-full overflow-hidden shrink-0">
                            <img src={IMAGES.expert} alt="Expert Face" className="w-full h-full object-cover" />
                         </div>
                         <p className="text-xs text-white/60 italic">"Real human experts trained in conversation psychology review your chats."</p>
                    </div>
                </div>
            </div>

            {/* Part 2 AI Demo */}
            <div className="grid lg:grid-cols-2 gap-20 items-center mb-24">
                <div className="order-2 lg:order-1 relative">
                    <div className="absolute -inset-20 bg-primary/5 rounded-full blur-[100px]"></div>
                    <div className="relative bg-charcoal border border-white/10 rounded-[2rem] p-4 max-w-[350px] mx-auto shadow-2xl">
                        <div className="bg-obsidian rounded-[1.5rem] overflow-hidden border border-white/5 h-[500px] flex flex-col">
                            <div className="p-6 border-b border-white/5 flex justify-between items-center bg-white/[0.02]">
                                <span className="text-[10px] font-bold tracking-widest text-primary uppercase">AI REPLIES</span>
                                <span className="material-symbols-outlined text-primary text-lg">bolt</span>
                            </div>
                            <div className="flex-grow p-6 space-y-4">
                                {/* Options */}
                                {(['flirty', 'playful', 'smooth'] as const).map((mode) => (
                                    <div 
                                        key={mode}
                                        onClick={() => setReplyMode(mode)}
                                        className={`p-4 rounded-xl border cursor-pointer transition-all duration-300 ${replyMode === mode ? 'bg-primary/10 border-primary/40' : 'bg-white/5 border-white/5 hover:bg-white/10'}`}
                                    >
                                        <div className="flex justify-between mb-2">
                                            <p className={`text-[9px] uppercase tracking-wider font-bold ${replyMode === mode ? 'text-primary' : 'text-white/40'}`}>
                                                {replyContent[mode].title}
                                            </p>
                                        </div>
                                        {replyMode === mode && (
                                            <motion.p 
                                                initial={{ opacity: 0 }} 
                                                animate={{ opacity: 1 }} 
                                                className="text-xs text-white/90 leading-relaxed font-light"
                                            >
                                                "{replyContent[mode].text}"
                                            </motion.p>
                                        )}
                                        {replyMode !== mode && <div className={`h-1.5 rounded-full bg-white/10 ${replyContent[mode].barWidth}`}></div>}
                                    </div>
                                ))}
                            </div>
                            <div className="p-4">
                                <button className="w-full py-3 bg-primary text-obsidian rounded-xl text-[10px] font-black tracking-widest uppercase hover:bg-white transition-colors">
                                    Copy Selected
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="order-1 lg:order-2">
                    <span className="text-primary text-[10px] font-bold tracking-[0.5em] uppercase mb-4 block">Part 2</span>
                    <h2 className="text-4xl font-display text-white mb-8 leading-tight">AI-Powered Reply Generator — 1 Full Year Free (Worth ₹5,988)</h2>
                    <div className="space-y-6">
                        {["You're chatting with a girl", "She sends a message and you're stuck", "Upload screenshot -> Get 3 perfect options"].map((step, i) => (
                            <div key={i} className="flex items-center gap-6 p-4 bg-white/[0.02] border border-white/5 rounded-xl">
                                <div className="size-8 rounded-full bg-primary/10 text-primary flex items-center justify-center text-xs font-bold border border-primary/20">{i+1}</div>
                                <p className="text-sm text-white/80">{step}</p>
                            </div>
                        ))}
                    </div>
                    <div className="mt-8 flex gap-3 flex-wrap">
                        {['WhatsApp', 'Instagram', 'Bumble', 'Hinge'].map(app => (
                            <span key={app} className="px-3 py-1 bg-white/5 rounded-full text-[10px] text-white/40 border border-white/5 uppercase">{app}</span>
                        ))}
                    </div>
                </div>
            </div>

            {/* Testimonials */}
            <div className="mb-24">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-display text-white mb-4">Real Results From Real Guys</h2>
                    <div className="h-px w-24 bg-primary/30 mx-auto"></div>
                </div>
                <div className="grid md:grid-cols-2 gap-8">
                    {[
                        { name: "Rahul M.", role: "Software Engineer", img: IMAGES.testimonials[0], text: "I used to get matches but they would always fizzle out. The analysis showed me I was being too safe. Once I started using the AI to spice things up, I booked 3 dates in one week." },
                        { name: "Arjun K.", role: "Verified User", img: IMAGES.testimonials[1], text: "The AI replies are actually scary good. They don't sound like a bot—they sound like me on my best day. It's taught me more about how to talk to women than any 'dating coach' ever did." }
                    ].map((t, i) => (
                        <div key={i} className="bg-white/[0.02] border border-white/10 p-10 rounded-2xl hover:border-primary/30 transition-all duration-500 group">
                            <div className="flex items-center gap-5 mb-8">
                                {/* Removed grayscale */}
                                <img src={t.img} alt={t.name} className="size-16 rounded-xl object-cover transition-all" />
                                <div>
                                    <p className="text-white font-display text-xl">{t.name}</p>
                                    <p className="text-[10px] text-white/30 uppercase tracking-[0.2em]">{t.role}</p>
                                    <div className="flex gap-1 mt-2 text-primary text-[10px]">★★★★★</div>
                                </div>
                            </div>
                            <p className="text-white/80 font-light italic leading-relaxed">"{t.text}"</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* CTA */}
            <div className="pb-20 text-center">
                 <div className="bg-gradient-to-br from-primary/20 to-obsidian border border-primary/20 p-16 rounded-[3rem] relative overflow-hidden">
                    <div className="relative z-10">
                        <h3 className="text-4xl md:text-5xl font-display text-white mb-6">Master the Game</h3>
                        <p className="text-white/60 text-lg font-light mb-12 max-w-2xl mx-auto">Join 12,000+ men who have unlocked their digital charisma.</p>
                        <button 
                            onClick={scrollToOffer}
                            className="px-12 py-5 bg-primary text-obsidian rounded-full text-xs font-bold tracking-[0.4em] uppercase hover:scale-105 transition-transform shadow-[0_0_40px_rgba(255,75,110,0.4)]"
                        >
                            Access The Complete System
                        </button>
                    </div>
                 </div>
            </div>
        </div>
    );
};

export default Part3System;
