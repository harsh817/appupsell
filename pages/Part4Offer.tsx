import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { IMAGES } from '../constants.ts';
import { GlassCard, PrimaryButton, Section, AmbientGlow } from '../components';

const FAQItem: React.FC<{ question: string; answer: string }> = ({ question, answer }) => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className="border-b border-white/5">
            <button 
                onClick={() => setIsOpen(!isOpen)} 
                className="w-full py-8 flex items-center justify-between text-left group"
            >
                <span className={`text-sm uppercase tracking-[0.15em] font-medium transition-colors ${isOpen ? 'text-white' : 'text-white/40 group-hover:text-white/70'}`}>
                    {question}
                </span>
                <span className={`material-symbols-outlined text-white/40 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>expand_more</span>
            </button>
            <AnimatePresence>
                {isOpen && (
                    <motion.div 
                        initial={{ height: 0, opacity: 0 }} 
                        animate={{ height: 'auto', opacity: 1 }} 
                        exit={{ height: 0, opacity: 0 }}
                        className="overflow-hidden"
                    >
                        <p className="pb-8 pt-2 px-4 text-sm font-light leading-loose text-white/60">
                            {answer}
                        </p>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

const Part4Offer: React.FC = () => {
    const handlePurchase = () => {
        alert("Redirecting to Razorpay secure checkout...");
    };

    return (
        <Section containerSize="large" spacing="lg">
            <div className="text-center mb-12">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-display text-white leading-tight mb-6">
                    This Used to Cost <span className="text-rosegold italic">₹8,488.</span>
                    <br/>
                    Today It's Just ₹1,497.
                </h2>
                <div className="inline-block bg-white/5 px-4 sm:px-6 py-2 rounded-full border border-white/10">
                     <p className="text-xs uppercase tracking-[0.2em] text-white/60">First 500 Customers Only</p>
                </div>
            </div>

            {/* Pricing Card */}
            <div className="relative mb-12">
                <AmbientGlow color="primary" size="lg" />
                <GlassCard padding="lg" className="overflow-hidden">
                    
                    <div className="grid md:grid-cols-2 gap-10 items-center">
                        <div>
                            <div className="space-y-6">
                                <div>
                                    <p className="text-xs uppercase tracking-[0.2em] text-white/40 mb-6">Let's be real about what you're getting:</p>
                                    <div className="space-y-3">
                                        {[
                                            "Professional Texting Analysis: ₹2,500 value",
                                            "AI Reply Generator (1 Year): ₹5,988 value",
                                            "Total Value: ₹8,488",
                                            "Your Price Today: ₹1,497",
                                            "That's 82.4% off."
                                        ].map((item, i) => (
                                            <div key={i} className="flex items-start gap-3 text-base text-white/60">
                                                <span className="material-symbols-outlined text-primary text-lg shrink-0">check_circle</span>
                                                <span>{item}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <div className="border-l-2 border-primary/20 pl-6 space-y-2">
                                    <p className="text-white/80 text-base font-semibold">Why so cheap?</p>
                                    <p className="text-white/60 text-base font-light leading-relaxed">Because we're building our initial user base in India. We need reviews. We need testimonials. We need word-of-mouth.</p>
                                    <p className="text-white/60 text-base font-light leading-relaxed">So we're making this a complete no-brainer.</p>
                                </div>

                                <div className="bg-white/5 border border-white/10 p-6 rounded-2xl space-y-3">
                                    <p className="text-xs uppercase tracking-[0.2em] text-white/50">Think about what ₹1,497 gets you normally:</p>
                                    <div className="grid sm:grid-cols-2 gap-3 text-base text-white/60 font-light">
                                        <span>Two movie tickets and popcorn</span>
                                        <span>One nice dinner</span>
                                        <span>A few drinks at a bar</span>
                                        <span>Half a tank of petrol</span>
                                    </div>
                                </div>

                                <div className="space-y-2 text-white/60 text-base font-light leading-relaxed">
                                    <p>Or you could invest it in actually solving your texting problem.</p>
                                    <p>The problem that's costing you dates. Relationships. Confidence.</p>
                                    <p>The problem that's keeping you single when you don't want to be.</p>
                                </div>
                            </div>
                        </div>
                        <div className="text-center md:text-right bg-white/5 p-8 rounded-2xl border border-white/10">
                            <div className="flex flex-col items-center md:items-end">
                                <span className="line-through text-white/30 text-lg mb-2">₹8,488</span>
                                <div className="text-7xl font-display text-white mb-3">₹1,497</div>
                                <p className="text-xs uppercase tracking-[0.2em] text-primary">82.4% Off • One Time</p>
                            </div>
                        </div>
                    </div>

                    <div className="mt-10 pt-8 border-t border-white/10">
                        <PrimaryButton
                            href="https://bondstyle.thriveonp.com/checkout-upgrade-1"
                            size="lg"
                            fullWidth
                        >
                            Get Instant Access Now
                        </PrimaryButton>
                        
                        <div className="flex justify-center gap-4 sm:gap-6 mt-5 sm:mt-6 opacity-40 grayscale hover:grayscale-0 transition-all duration-500">
                             <img src={IMAGES.razorpay} alt="Razorpay" className="h-4 sm:h-5" width="80" height="20" loading="lazy" />
                             <img src={IMAGES.security} alt="Security" className="h-4 sm:h-5" width="80" height="20" loading="lazy" />
                        </div>
                    </div>
                </GlassCard>
            </div>

            {/* Guarantee */}
            <div className="relative mb-12">
                <AmbientGlow color="rosegold" size="lg" />
                <GlassCard padding="lg" glowColor="rosegold" className="overflow-hidden">
                    <AmbientGlow color="rosegold" size="md" className="-top-24 -left-24" />
                    <AmbientGlow color="primary" size="md" className="-bottom-28 -right-24" />

                    <div className="relative z-10 text-center mb-10">
                        <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-rosegold/10 border border-rosegold/20 shadow-[0_0_30px_rgba(212,165,116,0.15)] mb-4">
                            <span className="material-symbols-outlined text-rosegold text-3xl">workspace_premium</span>
                        </div>
                        <h3 className="text-2xl sm:text-3xl font-display text-white mb-5 italic">Our <span className="text-rosegold italic">"Results or We'll Work With You"</span> Guarantee</h3>
                        <div className="h-px w-24 bg-rosegold/40 mx-auto"></div>
                    </div>

                    <div className="relative z-10 grid md:grid-cols-2 gap-8 text-left">
                        <div className="bg-white/5 border border-white/10 rounded-2xl p-6 space-y-4">
                            <p className="text-xs uppercase tracking-[0.2em] text-rosegold/80">Here's the deal:</p>
                            <p className="text-white/60 text-base font-light leading-relaxed">Use the system for 30 days.</p>
                            <p className="text-white/60 text-base font-light leading-relaxed">If you're not getting better responses, more engaging conversations, and actual dates from your matches... Just email us.</p>
                        </div>
                        <div className="bg-white/5 border border-white/10 rounded-2xl p-6 space-y-4">
                            <p className="text-white/60 text-base font-light leading-relaxed">We'll personally review your conversations again. We'll give you a 1-on-1 consultation call. We'll figure out what's not clicking.</p>
                            <p className="text-white/60 text-base font-light leading-relaxed">And we'll keep working with you until you start seeing results.</p>
                            <p className="text-white/60 text-base font-light leading-relaxed">We're not just selling you a product and disappearing. We actually care if this works for you.</p>
                            <p className="text-white/60 text-base font-light leading-relaxed">Because when it works, you tell your friends. You leave reviews. You become a success story we can share.</p>
                            <p className="text-white/80 text-base font-semibold">That's the deal.</p>
                        </div>
                    </div>
                </GlassCard>
            </div>

            {/* What Happens Next */}
            <div className="relative mb-12">
                <AmbientGlow color="primary" size="lg" />
                <GlassCard padding="lg" className="overflow-hidden">

                    <div className="text-center mb-10">
                        <p className="text-primary text-xs uppercase tracking-[0.2em] mb-4">Next Steps</p>
                        <h3 className="text-2xl sm:text-3xl font-display text-white mb-4">Here's What Happens <span className="text-rosegold italic">When You Order</span> Right Now</h3>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                        {[
                            "Instant Access — Get your login details via email in 2 minutes",
                            "Submit Your Screenshots — Upload your past conversations for analysis",
                            "Get Your Report — Detailed analysis within 24-48 hours",
                            "Start Getting Better Replies — Screenshot → 3 options → Send",
                            "See Results Fast — Most guys see improvement in first 3 conversations"
                        ].map((item, i) => (
                            <div key={i} className="flex items-start gap-4 bg-white/5 border border-white/10 rounded-2xl p-5">
                                <span className="material-symbols-outlined text-primary text-xl shrink-0">check_circle</span>
                                <p className="text-white/60 text-base font-light leading-relaxed">{item}</p>
                            </div>
                        ))}
                    </div>

                    <div className="mt-10 text-center space-y-2">
                        <p className="text-white/60 text-base font-light">You'll have everything set up in under 5 minutes.</p>
                        <p className="text-white/60 text-base font-light">No complicated process. No technical headaches.</p>
                    </div>
                </GlassCard>
            </div>

            {/* Scarcity */}
            <div className="relative mb-12">
                <AmbientGlow color="gradient" size="lg" />
                <GlassCard padding="lg" className="overflow-hidden">
                    <div className="text-center mb-8">
                        <p className="text-primary text-xs uppercase tracking-[0.2em] mb-4">Limited Launch</p>
                        <h3 className="text-2xl sm:text-3xl font-display text-white">This Offer <span className="text-rosegold italic">Won't Last</span> Forever</h3>
                    </div>

                    <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
                        <div className="flex items-center gap-3">
                            <span className="relative flex h-2.5 w-2.5">
                              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-primary"></span>
                            </span>
                            <span className="text-xs uppercase tracking-[0.2em] text-primary">Live availability</span>
                        </div>
                        <span className="text-xs uppercase tracking-[0.2em] text-white/40">Current spots taken: 347/500</span>
                    </div>
                    <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden mb-8">
                        <div className="h-full bg-primary w-[69%] shadow-[0_0_10px_rgba(255,75,110,0.8)]"></div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                        <div className="space-y-3 text-white/60 text-base font-light leading-relaxed">
                            <p>We're keeping the price at ₹1,497 only for our first 500 customers.</p>
                            <p>After that, it goes up to the regular price of ₹497/month for the AI app alone.</p>
                            <p>Once we hit 500, this deal is gone. Not "maybe gone." Not "we might extend it." Gone.</p>
                        </div>
                        <div className="space-y-3 text-white/60 text-base font-light leading-relaxed">
                            <p>Because at ₹1,497, we're barely covering our costs. This is purely about building an initial user base.</p>
                            <p>So if you're reading this and thinking "I'll come back later..." Don't.</p>
                            <p>There might not be a "later" at this price.</p>
                        </div>
                    </div>
                </GlassCard>
            </div>

            {/* Stop Waiting */}
            <div className="relative mb-12">
                <AmbientGlow color="gradient" size="lg" />
                <GlassCard padding="lg" className="overflow-hidden">
                    <div className="text-center mb-10">
                        <p className="text-rosegold text-xs uppercase tracking-[0.2em] mb-4">Wake Up Call</p>
                        <h3 className="text-2xl sm:text-3xl font-display text-white">Stop Waiting for <span className="text-rosegold italic">Things to "Just Happen"</span></h3>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8 text-white/60 text-base font-light leading-relaxed">
                        <div className="space-y-4">
                            <p>You know what happens when you do nothing? Nothing.</p>
                            <p>The girls you like will keep not replying.</p>
                            <p>You'll keep wondering what you did wrong.</p>
                            <p>You'll keep seeing other guys (sometimes worse guys) get the results you want.</p>
                            <p>And you'll keep telling yourself "I'll figure it out eventually."</p>
                            <p>But eventually never comes.</p>
                        </div>
                        <div className="space-y-4">
                            <p>Because figuring this out on your own takes years. Hundreds of failed conversations. Lots of rejection and frustration.</p>
                            <p>Why go through all that when there's a faster way?</p>
                            <p>₹1,497 to solve a problem that's been frustrating you for how long?</p>
                            <p>One month? Six months? Years?</p>
                            <p>What's that worth to you?</p>
                        </div>
                    </div>
                </GlassCard>
            </div>

            {/* Two Paths Decision */}
            <div className="relative mb-12">
                <AmbientGlow color="gradient" size="xl" />
                <GlassCard padding="lg" className="overflow-hidden">
                    
                    <div className="relative max-w-4xl mx-auto">
                        <h2 className="text-3xl sm:text-4xl font-display text-white text-center mb-12 leading-tight">
                            Two Paths. <span className="text-rosegold italic">You Pick.</span>
                        </h2>

                        <div className="grid md:grid-cols-2 gap-8">
                            {/* Path 1 */}
                            <GlassCard padding="lg">
                                <h3 className="text-xl font-display text-white/70 mb-6 flex items-center gap-3">
                                    <span className="flex-shrink-0 w-8 h-8 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white/50 text-sm font-bold">1</span>
                                    Path 1: Keep doing what you're doing.
                                </h3>
                                
                                <div className="space-y-4 text-white/60 text-base font-light leading-relaxed">
                                    <p className="flex items-start gap-3">
                                        <span className="text-white/40 text-lg shrink-0">×</span>
                                        <span>Keep getting the same results.</span>
                                    </p>
                                    <p className="flex items-start gap-3">
                                        <span className="text-white/40 text-lg shrink-0">×</span>
                                        <span>Keep wondering why nothing's working.</span>
                                    </p>
                                    <p className="flex items-start gap-3">
                                        <span className="text-white/40 text-lg shrink-0">×</span>
                                        <span>Keep seeing your matches go cold.</span>
                                    </p>
                                </div>
                            </GlassCard>

                            {/* Path 2 */}
                            <GlassCard padding="lg" className="border-primary/20">
                                <h3 className="text-xl font-display text-white mb-6 flex items-center gap-3">
                                    <span className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/20 border border-primary/30 flex items-center justify-center text-primary text-sm font-bold">2</span>
                                    Path 2: Try something different.
                                </h3>
                                
                                <div className="space-y-4 text-white/60 text-base font-light leading-relaxed">
                                    <p className="flex items-start gap-3">
                                        <span className="text-primary text-lg shrink-0">✓</span>
                                        <span>Get expert help analyzing what you're doing wrong.</span>
                                    </p>
                                    <p className="flex items-start gap-3">
                                        <span className="text-primary text-lg shrink-0">✓</span>
                                        <span>Get AI assistance when you're not sure what to say.</span>
                                    </p>
                                    <p className="flex items-start gap-3">
                                        <span className="text-primary text-lg shrink-0">✓</span>
                                        <span>Start seeing actual results in days, not years.</span>
                                    </p>
                                </div>
                            </GlassCard>
                        </div>

                        <div className="text-center mt-10">
                            <p className="text-white/80 text-lg font-medium">
                                The choice is pretty obvious, isn't it?
                            </p>
                        </div>
                    </div>
                </GlassCard>
            </div>

            {/* Main Offer CTA */}
            <div id="offer" className="mb-12">
                <GlassCard padding="lg" hover={false} glowColor="primary" className="bg-gradient-to-br from-primary/10 via-white/5 to-obsidian border-primary/20 overflow-hidden">
                    <AmbientGlow color="primary" size="xl" />
                    
                    <div className="relative max-w-4xl mx-auto">
                        <div className="text-center mb-10">
                            <h2 className="text-3xl sm:text-4xl font-display text-white mb-4 leading-tight">
                                Get Started Now <span className="text-rosegold italic">₹1,497 One-Time</span>
                            </h2>
                        </div>

                        <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 mb-8">
                            <p className="text-primary text-xs uppercase tracking-[0.2em] mb-6">What You Get Immediately:</p>
                            
                            <div className="grid sm:grid-cols-2 gap-4 mb-8">
                                <div className="flex items-start gap-3">
                                    <span className="material-symbols-outlined text-primary text-xl shrink-0">check_circle</span>
                                    <span className="text-white/60 text-base font-light">Professional texting analysis (screenshots reviewed by experts)</span>
                                </div>
                                <div className="flex items-start gap-3">
                                    <span className="material-symbols-outlined text-primary text-xl shrink-0">check_circle</span>
                                    <span className="text-white/60 text-base font-light">1 full year of AI-powered reply generator</span>
                                </div>
                                <div className="flex items-start gap-3">
                                    <span className="material-symbols-outlined text-primary text-xl shrink-0">check_circle</span>
                                    <span className="text-white/60 text-base font-light">Works on WhatsApp, Instagram, Bumble, Tinder, all apps</span>
                                </div>
                                <div className="flex items-start gap-3">
                                    <span className="material-symbols-outlined text-primary text-xl shrink-0">check_circle</span>
                                    <span className="text-white/60 text-base font-light">3 reply modes (Flirty, Playful, Smooth)</span>
                                </div>
                                <div className="flex items-start gap-3">
                                    <span className="material-symbols-outlined text-primary text-xl shrink-0">check_circle</span>
                                    <span className="text-white/60 text-base font-light">Trained on real Indian conversations</span>
                                </div>
                                <div className="flex items-start gap-3">
                                    <span className="material-symbols-outlined text-primary text-xl shrink-0">check_circle</span>
                                    <span className="text-white/60 text-base font-light">iOS & Android apps</span>
                                </div>
                                <div className="flex items-start gap-3">
                                    <span className="material-symbols-outlined text-primary text-xl shrink-0">check_circle</span>
                                    <span className="text-white/60 text-base font-light">30-day results guarantee</span>
                                </div>
                                <div className="flex items-start gap-3">
                                    <span className="material-symbols-outlined text-primary text-xl shrink-0">check_circle</span>
                                    <span className="text-white/60 text-base font-light">Personal support if you need it</span>
                                </div>
                            </div>

                            <div className="border-t border-white/10 pt-6">
                                <div className="flex justify-between items-center mb-2">
                                    <span className="text-white/60 text-sm font-light">Total Value:</span>
                                    <span className="text-white/40 text-lg line-through">₹8,488</span>
                                </div>
                                <div className="flex justify-between items-center">
                                    <span className="text-white font-bold text-lg">Your Price Today:</span>
                                    <span className="text-primary font-black text-3xl sm:text-4xl">₹1,497</span>
                                </div>
                            </div>
                        </div>

                        <div className="text-center mb-6">
                            <PrimaryButton
                                href="https://bondstyle.thriveonp.com/checkout-upgrade-1"
                                size="lg"
                                className="gap-3"
                            >
                                Get Instant Access Now
                            </PrimaryButton>
                        </div>

                        <div className="text-center">
                            <p className="text-white/50 text-base font-light">
                                Secure payment via Razorpay. Works with UPI, cards, net banking.
                            </p>
                        </div>
                    </div>
                </GlassCard>
            </div>

            {/* FAQ */}
            <div className="max-w-3xl mx-auto">
                <h3 className="text-2xl sm:text-3xl font-display text-white mb-10 sm:mb-12 text-center">Frequently Asked Questions</h3>
                <GlassCard padding="md">
                    <FAQItem
                        question="Will the AI replies sound fake or robotic?"
                        answer="No. Our system is trained on real conversations between real Indian guys and real Indian girls. The replies sound natural, authentic, and matched to your personality based on how you normally text."
                    />
                    <FAQItem
                        question="What if I don't want to use AI for every message?"
                        answer="You don't have to! Use it only when you're stuck, unsure, or want to see different options. Many guys use it just for the first few messages and then take over once the conversation is flowing."
                    />
                    <FAQItem
                        question="How does the texting analysis work?"
                        answer="You send us screenshots of your past conversations (blur out any personal info if you want). Our experts review them and give you a detailed report showing what worked, what didn't, and exactly how to improve."
                    />
                    <FAQItem
                        question="Is this only for dating apps?"
                        answer="No! It works for any text-based conversation. WhatsApp, Instagram DMs, regular texts with someone you met in real life — anywhere you're texting someone you're interested in."
                    />
                    <FAQItem
                        question="What if I'm really bad at texting? Like, REALLY bad?"
                        answer="Perfect. You're exactly who this is for. The worse you are now, the more dramatic your improvement will be. We've helped guys go from getting zero replies to having multiple dates lined up."
                    />
                    <FAQItem
                        question="How fast will I see results?"
                        answer="Most guys notice better responses within their first 3-5 conversations using the app. The analysis report usually gives you immediate 'aha!' moments about what you were doing wrong."
                    />
                    <FAQItem
                        question="Is my data private?"
                        answer="Yes. We never share your conversations or personal information with anyone. Ever. Your privacy is non-negotiable."
                    />
                    <FAQItem
                        question="What happens after 1 year?"
                        answer="If you want to continue using the AI app, it's ₹497/month after the first year. But honestly, most guys have internalized the skills by then and don't need it as much. The choice is yours."
                    />
                    <FAQItem
                        question="Can I get a refund if it doesn't work?"
                        answer="We don't do refunds because we give you instant access to the app and analysis. But we do have a results guarantee — if you're not seeing improvement after 30 days, we'll work with you personally until you do."
                    />
                    <FAQItem
                        question="This seems too cheap. What's the catch?"
                        answer="No catch. We're building our user base and need testimonials and reviews. Once we hit 500 users, the price goes up to ₹497/month. This is a limited-time launch offer."
                    />
                </GlassCard>
            </div>

            {/* Final CTA - Don't Let Another Match Go Cold */}
            <div className="mt-12">
                <GlassCard padding="lg" className="overflow-hidden">
                    <AmbientGlow color="primary" size="xl" />
                    
                    <div className="relative max-w-3xl mx-auto">
                        <h2 className="text-3xl sm:text-4xl font-display text-white mb-8 text-center leading-tight">
                            Don't Let Another <span className="text-rosegold italic">Match Go Cold</span>
                        </h2>
                        
                        <div className="space-y-4 text-white/60 text-base font-light leading-relaxed mb-8">
                            <p>You've read this far.</p>
                            <p>That means some part of you knows you need help with this.</p>
                            <p>And that's okay.</p>
                            <p className="text-white/80">Nobody's born knowing how to text in a way that keeps girls interested.</p>
                            <p>It's a skill. Like any other skill.</p>
                            <p>And skills can be learned.</p>
                            <p className="text-white/80 font-normal">But only if you actually take action.</p>
                            <p>Reading about it doesn't change anything.</p>
                            <p>Thinking about it doesn't change anything.</p>
                            <p>Wishing you were better doesn't change anything.</p>
                        </div>

                        <div className="text-center my-12">
                            <h3 className="text-4xl sm:text-5xl md:text-6xl font-display text-primary mb-4 leading-tight">
                                Action changes things.
                            </h3>
                            <div className="h-1 w-24 bg-primary/40 mx-auto"></div>
                        </div>

                        <div className="bg-white/5 border border-white/10 rounded-2xl p-8 sm:p-10 mb-12">
                            <p className="text-white/80 text-lg font-medium leading-relaxed mb-8 text-center">
                                And the action you can take right now is simple:
                            </p>
                            <div className="space-y-4 text-white/70 text-base font-light max-w-xl mx-auto">
                                <p className="flex items-center gap-4">
                                    <span className="text-primary text-2xl shrink-0">→</span>
                                    Click the button below.
                                </p>
                                <p className="flex items-center gap-4">
                                    <span className="text-primary text-2xl shrink-0">→</span>
                                    Enter your payment details.
                                </p>
                                <p className="flex items-center gap-4">
                                    <span className="text-primary text-2xl shrink-0">→</span>
                                    Get instant access.
                                </p>
                                <p className="flex items-center gap-4">
                                    <span className="text-primary text-2xl shrink-0">→</span>
                                    Start getting better replies.
                                </p>
                            </div>
                            <div className="text-center mt-8 pt-6 border-t border-white/10">
                                <p className="text-white/80 text-lg font-medium">That's it.</p>
                            </div>
                        </div>

                        <div className="text-center mb-12">
                            <p className="text-white/70 text-lg font-light leading-relaxed mb-4">
                                <span className="block text-rosegold font-black text-3xl sm:text-4xl italic mb-2">₹1,497</span>
                                to solve a problem that's been holding you back.
                            </p>
                            <p className="text-white/60 text-base italic">Worth it? You tell me.</p>
                        </div>

                        <div className="text-center">
                            <PrimaryButton
                                href="https://bondstyle.thriveonp.com/checkout-upgrade-1"
                                size="lg"
                                className="gap-3"
                            >
                                Get Instant Access Now
                            </PrimaryButton>
                        </div>
                    </div>
                </GlassCard>
            </div>

            {/* P.S. Section - Final Urgency */}
            <div className="mt-12">
                <GlassCard padding="lg" className="overflow-hidden">
                    <AmbientGlow color="primary" size="lg" />
                    
                    <div className="relative max-w-3xl mx-auto space-y-8">
                        {/* P.S. */}
                        <div className="border-l-2 border-primary/20 pl-6">
                            <p className="text-primary text-xs uppercase tracking-[0.2em] mb-2">P.S.</p>
                            <p className="text-white/60 text-base font-light leading-relaxed">
                                Remember, this price is only available for the first 500 customers. We're at <span className="text-white font-medium">347/500 spots taken</span> right now. Once we hit 500, it's <span className="text-white font-medium">₹497/month</span>. Don't be the guy who waits and ends up paying 5x more. Get in now while you still can.
                            </p>
                        </div>

                        {/* P.P.S. */}
                        <div className="border-l-2 border-primary/20 pl-6">
                            <p className="text-primary text-xs uppercase tracking-[0.2em] mb-2">P.P.S.</p>
                            <p className="text-white/60 text-base font-light leading-relaxed">
                                Still unsure? Think about this: What's the cost of <span className="text-white font-medium">NOT</span> fixing this? How many more matches will go cold? How many more "seen" messages will you get? How much longer are you willing to stay stuck? <span className="text-white font-medium">₹1,497</span> is nothing compared to staying in the same frustrating cycle for another year. Plus, you're protected by our results guarantee — if you use the system and don't see improvement, we'll personally work with you until you do. The only way you lose is by not trying.
                            </p>
                        </div>

                        {/* Final CTA Button */}
                        <div className="pt-8">
                            <PrimaryButton
                                href="https://bondstyle.thriveonp.com/checkout-upgrade-1"
                                size="lg"
                                fullWidth
                            >
                                Get Access Now
                            </PrimaryButton>
                        </div>

                        {/* Guarantee text */}
                        <div className="text-center pt-6">
                            <div className="flex items-center justify-center gap-4 text-sm flex-wrap">
                                <span className="text-white/60 font-light flex items-center gap-2">
                                    <span className="material-symbols-outlined text-xs">lock</span>
                                    Secure payment
                                </span>
                                <span className="text-white/40">•</span>
                                <span className="text-white/60 font-light flex items-center gap-2">
                                    <span className="material-symbols-outlined text-xs">bolt</span>
                                    Instant access
                                </span>
                                <span className="text-white/40">•</span>
                                <span className="text-white/60 font-light flex items-center gap-2">
                                    <span className="material-symbols-outlined text-xs">verified</span>
                                    30-day guarantee
                                </span>
                            </div>
                        </div>
                    </div>
                </GlassCard>
            </div>
        </Section>
    );
};

export default Part4Offer;


