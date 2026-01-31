
import React from 'react';
import { IMAGES } from '../constants.ts';
import { GlassCard, PrimaryButton, Section, AmbientGlow } from '../components';

const Part3System: React.FC = () => {

    const scrollToOffer = () => {
        const element = document.getElementById('offer');
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <Section containerSize="large" spacing="lg">
            {/* Hero */}
            <div className="grid lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 items-center mb-20 sm:mb-24">
                <div className="text-center">
                    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-white leading-tight mb-6 sm:mb-8 font-display">
                        Introducing: The Complete Texting System That Does the <span className="italic text-primary">Heavy Lifting</span> For You
                    </h1>
                    <p className="text-primary font-bold tracking-[0.15em] sm:tracking-[0.2em] text-[10px] sm:text-xs uppercase mb-4 bg-primary/10 inline-block px-3 sm:px-4 py-2 rounded-lg">
                        Here's what you're getting for just ₹1,497:
                    </p>
                </div>
                <div className="relative">
                    <AmbientGlow color="primary" size="lg" />
                    <div className="relative rounded-xl sm:rounded-2xl overflow-hidden border border-white/10 shadow-2xl group">
                        <img src={IMAGES.part3Hero} alt="Man Smiling" className="w-full aspect-[4/3] object-cover filter sepia-[0.3] contrast-110 brightness-90 transition-all duration-700 group-hover:sepia-0" />
                        <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 right-4 sm:right-6">
                            <div className="bg-white/10 backdrop-blur-xl p-3 sm:p-4 rounded-lg sm:rounded-xl flex items-center gap-3 sm:gap-4 border border-white/20">
                                <div className="size-8 sm:size-10 rounded-full bg-primary/20 flex items-center justify-center shrink-0">
                                    <span className="material-symbols-outlined text-primary text-base sm:text-xl">bolt</span>
                                </div>
                                <div>
                                    <p className="text-[9px] sm:text-[10px] text-primary font-bold tracking-wider sm:tracking-widest uppercase">System Active</p>
                                    <p className="text-[10px] sm:text-xs text-white/80 line-clamp-1">AI Suggestion: "That's a bold choice..."</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Part 1 Feature */}
            <div className="grid lg:grid-cols-2 gap-20 items-center mb-24">
                <div>
                    <span className="text-primary text-xs font-bold tracking-[0.3em] uppercase mb-4 block">Part 1</span>
                    <h2 className="text-3xl sm:text-4xl font-display text-white mb-8 leading-tight">Professional Texting Analysis <span className="text-rosegold italic">(Worth ₹2,500)</span></h2>
                    <div className="space-y-8">
                        <p className="text-white/60 text-base leading-relaxed font-light">
                            Works with WhatsApp, Instagram DM, Bumble, Hinge, Tinder—basically any app where you're texting.
                        </p>
                        
                        <div className="bg-white/5 border border-white/10 p-8 rounded-2xl space-y-6">
                            <p className="text-primary text-xs font-bold uppercase tracking-[0.2em]">Within 24-48 hours, you'll get:</p>
                            <div className="grid grid-cols-1 gap-4">
                                {[
                                    "Detailed breakdown of the mistakes that killed the vibe",
                                    "Exact moments where you lost her interest",
                                    "Better alternatives for your weak texts",
                                    "Psychological triggers you missed (but should've hit)",
                                    "Full personality assessment based on your style",
                                    "Custom strategy for YOUR texting habits",
                                    "Proven templates you can use immediately"
                                ].map((item, i) => (
                                    <div key={i} className="flex items-start gap-3 text-sm text-white/80">
                                        <span className="material-symbols-outlined text-primary text-lg shrink-0">check_circle</span>
                                        <span>{item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                        
                        <div className="border-l-2 border-primary/20 pl-6 py-2">
                            <p className="text-white/60 text-base leading-relaxed font-light italic">
                                This isn't some automated bot reading your texts. Real dating experts in India—trained in texting psychology—review your convos and deliver personalized feedback.
                            </p>
                        </div>
                        
                        <div className="space-y-4">
                            <p className="text-white/60 text-base leading-relaxed font-light">
                                Send us screenshots of your conversations. We'll tell you the truth. Even if it stings a little.
                            </p>
                            <p className="text-white/60 text-base leading-relaxed font-light">
                                Because that's how you actually improve.
                            </p>
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

            {/* Part 2 Feature */}
            <div className="mb-24">
                <div>
                    <span className="text-primary text-xs font-bold tracking-[0.3em] uppercase mb-4 block">Part 2</span>
                    <h2 className="text-3xl sm:text-4xl font-display text-white mb-8 leading-tight">AI-Powered Reply Generator — 1 Full Year Free <span className="text-rosegold italic">(Worth ₹5,988)</span></h2>
                    
                    <div className="space-y-3 mb-10">
                        <p className="text-white/60 text-xs font-bold uppercase tracking-[0.2em] mb-4">Here's how it works:</p>
                        {[
                            "You're chatting with a girl",
                            "She sends a message... and you're stuck",
                            "Screenshot it, upload to the app",
                            "AI analyzes the conversation context",
                            "Get 3 perfect reply options instantly",
                            "Pick one, send it, watch her reply faster"
                        ].map((step, i) => (
                            <div key={i} className="flex items-start gap-6 p-4 bg-white/5 border border-white/5 rounded-xl hover:bg-white/10 transition-all">
                                <div className="size-8 rounded-full bg-primary/10 text-primary flex items-center justify-center text-xs font-bold border border-primary/20 shrink-0">{i+1}</div>
                                <p className="text-base text-white/80 pt-1">{step}</p>
                            </div>
                        ))}
                    </div>
                    
                    <div className="bg-primary/5 border border-primary/10 p-6 rounded-xl mb-8">
                        <p className="text-white/60 text-base leading-relaxed font-light mb-3">
                            But this isn't just any AI.
                        </p>
                        <p className="text-white/60 text-base leading-relaxed font-light">
                            It's been trained on successful Indian dating conversations—so it understands cultural context, humor that works here, and the exact vibe Indian girls respond to.
                        </p>
                    </div>
                    
                    <div className="border-l-2 border-white/10 pl-6 py-2 mb-8">
                        <p className="text-white/60 text-base leading-relaxed font-light italic">
                            The replies don't sound robotic. They sound natural. Like something you'd actually say... if you were smoother.
                        </p>
                    </div>
                    
                    <div className="text-center mb-12">
                        <p className="text-white/60 text-base leading-relaxed font-light">
                            Works with WhatsApp, Instagram, Bumble, Hinge, Tinder, Messenger, Snapchat, SMS—basically any app where you're texting.
                        </p>
                        <p className="text-white/50 text-sm italic mt-4">
                            If you can screenshot it, the AI can help you reply to it.
                        </p>
                    </div>
                </div>
            </div>

            {/* Why This Works */}
            <div className="mb-24">
                <div className="text-center mb-12">
                    <p className="text-primary text-xs font-bold tracking-[0.3em] uppercase mb-4">Why This Works</p>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-display text-white mb-4">Why This Works <span className="text-rosegold italic">(When Everything Else Hasn't)</span></h2>
                    <p className="text-white/60 text-base font-light max-w-2xl mx-auto">
                        You've probably tried:
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8 mb-10">
                    <div className="bg-white/5 border border-white/10 p-8 rounded-2xl space-y-5">
                        <p className="text-white/60 text-xs font-bold uppercase tracking-[0.2em]">What you already tried</p>
                        <div className="space-y-4">
                            {[
                                "YouTube videos about \"how to text girls\"",
                                "Reading \"The Game\" and pickup artist books",
                                "Asking your friends for advice",
                                "Just \"being yourself\" and hoping for the best"
                            ].map((item, i) => (
                                <div key={i} className="flex items-start gap-3 text-base text-white/80">
                                    <span className="material-symbols-outlined text-primary text-lg shrink-0">close</span>
                                    <span>{item}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="bg-white/5 border border-white/10 p-8 rounded-2xl space-y-5">
                        <p className="text-white/60 text-xs font-bold uppercase tracking-[0.2em]">Why those don't work</p>
                        <div className="space-y-4 text-base text-white/60 font-light leading-relaxed">
                            <p>YouTube videos give you generic advice that might work in America but doesn't translate to Indian dating culture.</p>
                            <p>Pickup artist books teach you manipulation tactics that make you sound fake and try-hard.</p>
                            <p>Your friends mean well, but they're probably just as clueless as you are. Or if they're good at texting, they can't explain WHY they're good at it.</p>
                            <p>"Being yourself" is great advice... once you know how to be an attractive version of yourself. But nobody tells you how to do that.</p>
                        </div>
                    </div>
                </div>

                <div className="bg-gradient-to-br from-primary/10 via-white/5 to-obsidian border border-white/10 p-10 rounded-3xl">
                    <div className="max-w-4xl mx-auto space-y-8">
                        <div className="text-center">
                            <p className="text-primary text-xs font-bold uppercase tracking-[0.2em] mb-3">This system is different</p>
                            <h3 className="text-2xl sm:text-3xl md:text-4xl font-display text-white">Practical help, <span className="text-rosegold italic">right when you need it</span></h3>
                        </div>
                        <div className="grid sm:grid-cols-2 gap-6">
                            {[
                                "Trained on Indian conversations with Indian girls",
                                "Gives you instant help in the moment you need it",
                                "Shows you what works AND why it works",
                                "Doesn't try to change who you are, just makes you better at expressing it",
                                "Works for shy guys, extroverted guys, and everyone in between"
                            ].map((item, i) => (
                                <div key={i} className="flex items-start gap-3 text-base text-white/80">
                                    <span className="material-symbols-outlined text-primary text-lg shrink-0">check_circle</span>
                                    <span>{item}</span>
                                </div>
                            ))}
                        </div>
                        <div className="space-y-4 text-white/60 text-base font-light leading-relaxed">
                            <p>You're not learning theory. You're getting practical, in-the-moment help.</p>
                            <p>And you're learning by doing. Every time you use the app, you're seeing what works. Your brain starts to pick up the patterns.</p>
                            <p>Eventually? You won't even need the app as much. Because you'll have internalized the skills.</p>
                            <p>But until then, you've got backup. 24/7.</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Testimonials */}
            <div className="mb-24">
                <div className="text-center mb-16">
                    <h2 className="text-3xl sm:text-4xl font-display text-white mb-4">Real Results From <span className="text-rosegold italic">Real Guys</span></h2>
                    <div className="h-px w-24 bg-primary/30 mx-auto"></div>
                </div>
                <div className="grid md:grid-cols-2 gap-8">
                    {[
                        { name: "Rahul M.", role: "Software Engineer", img: IMAGES.testimonials[0], text: "I used to get matches but they would always fizzle out. The analysis showed me I was being too safe. Once I started using the AI to spice things up, I booked 3 dates in one week." },
                        { name: "Arjun K.", role: "Verified User", img: IMAGES.testimonials[1], text: "The AI replies are actually scary good. They don't sound like a bot—they sound like me on my best day. It's taught me more about how to talk to women than any 'dating coach' ever did." }
                    ].map((t, i) => (
                        <div key={i} className="bg-white/5 border border-white/10 p-10 rounded-2xl hover:border-primary/30 transition-all duration-500 group">
                            <div className="flex items-center gap-5 mb-8">
                                <img src={t.img} alt={t.name} className="size-16 rounded-xl object-cover transition-all" />
                                <div>
                                    <p className="text-white font-display text-xl">{t.name}</p>
                                    <p className="text-xs text-white/40 uppercase tracking-[0.15em]">{t.role}</p>
                                    <div className="flex gap-1 mt-2 text-primary text-xs">★★★★★</div>
                                </div>
                            </div>
                            <p className="text-white/60 text-base font-light italic leading-relaxed">"{t.text}"</p>
                        </div>
                    ))}
                </div>
            </div>
        </Section>
    );
};

export default Part3System;


