import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { IMAGES } from '../constants';

const FAQItem: React.FC<{ question: string; answer: string }> = ({ question, answer }) => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className="border-b border-white/5">
            <button 
                onClick={() => setIsOpen(!isOpen)} 
                className="w-full py-8 flex items-center justify-between text-left group"
            >
                <span className={`text-[11px] uppercase tracking-[0.2em] font-medium transition-colors ${isOpen ? 'text-white' : 'text-white/40 group-hover:text-white/70'}`}>
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
                        <p className="pb-8 pt-2 px-4 text-xs font-light leading-loose text-white/60">
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
        <div className="pt-32 px-6 max-w-5xl mx-auto pb-40">
            <div className="text-center mb-24">
                <h2 className="text-4xl md:text-6xl font-light text-white leading-tight mb-8">
                    This Used to Cost ₹8,488. <br/>
                    <span className="italic text-gold">Today It's Just ₹97.</span>
                </h2>
                <div className="inline-block bg-white/5 px-6 py-2 rounded-full border border-white/10">
                     <p className="text-[10px] uppercase tracking-[0.3em] text-white/60 font-bold">Offer Ends Soon</p>
                </div>
            </div>

            {/* Pricing Card */}
            <div className="relative mb-32">
                <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent blur-3xl"></div>
                <div className="relative bg-white/[0.02] backdrop-blur-xl border border-white/10 rounded-[3rem] p-10 md:p-16 shadow-2xl overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-50"></div>
                    
                    <div className="grid md:grid-cols-2 gap-16 items-center">
                        <div>
                            <p className="text-[11px] uppercase tracking-[0.3em] text-white/40 mb-8 font-bold">What You Get Immediately:</p>
                            <ul className="space-y-6">
                                {["Lifetime AI Message Generator", "The 'Anti-Ghost' Protocol", "Instant Bio-Optimizer Tool", "Premium Conversation Scripts"].map((item, i) => (
                                    <li key={i} className="flex items-center gap-5 group">
                                        <div className="w-2 h-2 rounded-full bg-primary/30 group-hover:bg-primary transition-colors shadow-[0_0_10px_rgba(255,75,110,0.5)]"></div>
                                        <p className="text-xs font-light text-white/90 tracking-wide group-hover:text-white transition-colors">{item}</p>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="text-center md:text-right bg-black/20 p-8 rounded-3xl border border-white/5">
                            <div className="flex flex-col items-end">
                                <span className="line-through text-white/20 text-lg mb-1">₹8,488</span>
                                <div className="text-7xl md:text-8xl font-display text-white mb-2">₹97</div>
                                <p className="text-[10px] uppercase tracking-[0.4em] text-primary font-bold">98% Off • One Time</p>
                            </div>
                        </div>
                    </div>

                    <div className="mt-16 pt-10 border-t border-white/5">
                        <div className="flex justify-between items-center mb-6 px-2">
                             <div className="flex items-center gap-3">
                                <span className="relative flex h-2.5 w-2.5">
                                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-primary"></span>
                                </span>
                                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-primary">Live Scarcity</span>
                             </div>
                             <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/40">347 / 500 Spots Taken</span>
                        </div>
                        <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden mb-10">
                            <div className="h-full bg-primary w-[69%] shadow-[0_0_10px_rgba(255,75,110,0.8)]"></div>
                        </div>

                        <button 
                            onClick={handlePurchase}
                            className="w-full bg-white text-obsidian py-6 md:py-8 rounded-2xl font-black uppercase tracking-widest text-[11px] md:text-xs shadow-[0_20px_50px_rgba(255,255,255,0.1)] hover:shadow-[0_25px_60px_rgba(255,255,255,0.2)] hover:-translate-y-1 active:scale-[0.98] transition-all duration-300"
                        >
                            👉 Yes, I want to fix my texting — Get Instant Access Now
                        </button>
                        
                        <div className="flex justify-center gap-6 mt-6 opacity-40 grayscale hover:grayscale-0 transition-all duration-500">
                             <img src={IMAGES.razorpay} alt="Razorpay" className="h-5" />
                             <img src={IMAGES.security} alt="Security" className="h-5" />
                        </div>
                    </div>
                </div>
            </div>

            {/* Guarantee */}
            <div className="relative mb-32 p-12 md:p-16 border border-gold/20 rounded-[3rem] bg-gradient-to-b from-gold/5 to-transparent text-center overflow-hidden">
                <div className="absolute top-0 right-0 p-8 opacity-10">
                    <span className="material-symbols-outlined text-9xl text-gold">verified</span>
                </div>
                <span className="material-symbols-outlined text-gold text-5xl mb-8">workspace_premium</span>
                <h3 className="text-3xl font-display text-white mb-8 italic">Our "You'll Get Results or We'll Work With You" Guarantee</h3>
                <p className="text-white/60 font-light leading-relaxed max-w-2xl mx-auto italic text-sm">
                    If you use the AI, follow the protocols, and don't see a massive shift within 7 days... we'll either get on a call to personally fix your profile, or refund every paisa. No questions asked.
                </p>
            </div>

            {/* FAQ */}
            <div className="max-w-3xl mx-auto">
                <h3 className="text-3xl font-display text-white mb-12 text-center">Common Questions</h3>
                <div className="bg-white/[0.02] rounded-3xl border border-white/5 p-8">
                    <FAQItem question="Does this work on all dating apps?" answer="Yes, the AI is trained on data from Tinder, Bumble, Hinge, and even Instagram DMs." />
                    <FAQItem question="Will I sound like a robot?" answer="Absolutely not. Our 'Persona-Sync' technology adapts the output to sound like a wittier version of you." />
                    <FAQItem question="Is this a monthly subscription?" answer="No. The ₹97 price is a one-time payment for lifetime access." />
                    <FAQItem question="How do I get access?" answer="Instant access is granted via email immediately after your payment is processed." />
                </div>
            </div>
            
            <div className="mt-20 text-center">
                 <p className="text-[10px] text-white/30 uppercase tracking-[0.3em]">Secure • Instant • Private</p>
            </div>
        </div>
    );
};

export default Part4Offer;