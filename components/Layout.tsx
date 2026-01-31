import React from 'react';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return (
        <div className="relative min-h-screen font-sans text-gray-200 bg-obsidian selection:bg-primary/30">
            {/* Ambient Background */}
            <div className="fixed inset-0 z-0 pointer-events-none noise-texture"></div>
            <div className="fixed inset-0 z-0 pointer-events-none opacity-30 bg-gradient-to-br from-obsidian via-obsidian to-primary/5"></div>

            <main className="relative z-10">
                {children}
            </main>

            <footer className="relative z-10 py-6 md:py-8 px-4 md:px-8 text-center border-t border-white/5 bg-obsidian">
                <div className="max-w-6xl mx-auto">
                    <div className="flex flex-col items-center gap-5 md:gap-6">
                        {/* Footer Links - 3 columns on mobile, horizontal with bullets on desktop */}
                        <div className="grid grid-cols-3 gap-3 md:flex md:flex-wrap md:items-center md:justify-center md:gap-2 text-[9px] md:text-xs w-full max-w-sm md:max-w-none">
                            <a 
                                href="https://thriveonp.com/index.php/contact-us/" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="text-white/40 hover:text-primary transition-colors uppercase tracking-wider text-center"
                            >
                                Contact
                            </a>
                            <span className="hidden md:inline text-white/20 mx-2">•</span>
                            <a 
                                href="https://thriveonp.com/index.php/privacy-policy/" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="text-white/40 hover:text-primary transition-colors uppercase tracking-wider text-center"
                            >
                                Privacy
                            </a>
                            <span className="hidden md:inline text-white/20 mx-2">•</span>
                            <a 
                                href="https://thriveonp.com/index.php/terms-conditions/" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="text-white/40 hover:text-primary transition-colors uppercase tracking-wider text-center"
                            >
                                Terms
                            </a>
                            <span className="hidden md:inline text-white/20 mx-2">•</span>
                            <a 
                                href="https://thriveonp.com/index.php/refund_returns/" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="text-white/40 hover:text-primary transition-colors uppercase tracking-wider text-center col-span-3 md:col-span-1"
                            >
                                Refund Policy
                            </a>
                        </div>

                        {/* Copyright */}
                        <p className="text-[8px] md:text-[9px] font-medium uppercase tracking-[0.2em] md:tracking-[0.3em] text-white/20">
                            © 2023-26. All Rights Reserved By Thriveonp
                        </p>

                        {/* Disclaimer */}
                        <div className="max-w-4xl mx-auto">
                            <p className="text-[8px] md:text-[9px] leading-relaxed text-white/30 px-4">
                                This Site Is Not A Part Of The Facebook Website / Google Ads / Facebook Inc / Google Inc. Additionally, This Site Is NOT Endorsed By Facebook / Google In Any Way. FACEBOOK Is A Trademark Of FACEBOOK, Inc. Google Ads Is A Trademark Of Google Inc.
                            </p>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export { Layout };
export default Layout;