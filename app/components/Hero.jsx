"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Zap, Search, ArrowRight } from 'lucide-react';

const typingWords = [
    "Search the \"Domain\" you want",
    "www.yourdomain.com",
    "www.yourdomain.net",
    "www.yourdomain.io",
    "www.yourdomain.ai",
];

const stats = [
    { value: '99%', label: 'Uptime SLA' },
    { value: '10k+', label: 'Sites hosted' },
    { value: '60s', label: 'Avg Deploy' },
    { value: '24/7', label: 'Support' },
];

const Hero = () => {
    const [currentWordIndex, setCurrentWordIndex] = useState(0);
    const [currentText, setCurrentText] = useState('');
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
        let timer;
        const currentWord = typingWords[currentWordIndex];

        if (isDeleting) {
            timer = setTimeout(() => {
                setCurrentText(prev => prev.slice(0, -1));
                if (currentText.length <= 1) {
                    setIsDeleting(false);
                    setCurrentWordIndex((prev) => (prev + 1) % typingWords.length);
                }
            }, 40);
        } else {
            if (currentText === currentWord) {
                timer = setTimeout(() => {
                    setIsDeleting(true);
                }, 2200);
            } else {
                timer = setTimeout(() => {
                    setCurrentText(currentWord.slice(0, currentText.length + 1));
                }, 80);
            }
        }

        return () => clearTimeout(timer);
    }, [currentText, isDeleting, currentWordIndex]);

    return (
        <div className="relative w-full overflow-hidden bg-brandBlack -mt-[75px]">
            {/* Background Video */}
            <video
                autoPlay
                loop
                muted
                playsInline
                className="absolute inset-0 w-full h-full object-cover z-0 opacity-70"
            >
                <source src="/herovideo.mp4" type="video/mp4" />
            </video>

            {/* Gradient Overlays */}
            <div className="absolute top-0 inset-x-0 h-[85%] bg-gradient-to-b from-black to-transparent z-[1]"></div>
            <div className="absolute inset-0 bg-gradient-to-b from-brandBlack/60 via-transparent to-brandBlack/90 z-[1]"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-brandBlack/40 via-transparent to-brandBlack/40 z-[1]"></div>

            {/* Hero Content */}
            <div className="relative z-10 flex flex-col items-center text-center text-white pt-44 md:pt-52 pb-16 md:pb-20 px-4 sm:px-6">

                {/* NVMe Badge */}
                <div className="inline-flex items-center space-x-2 bg-white/[0.06] border border-white/[0.12] rounded-full px-4 py-1.5 mb-8 backdrop-blur-md animate-fade-in-up">
                    <Zap className="w-3.5 h-3.5 text-cyan-400" />
                    <span className="text-[13px] font-bold tracking-[0.15em] text-cyan-400 uppercase">NVMe Powered</span>
                </div>

                {/* Heading */}
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-medium tracking-tight mb-6 leading-[1.1] animate-fade-in-up animation-delay-100">
                    The Cloud Built for<br />
                    <span className="font-bold bg-gradient-to-r from-white via-white to-gray-300 bg-clip-text">Serious Speed</span>
                </h1>

                {/* Subheading */}
                <p className="text-base sm:text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-10 font-normal leading-relaxed animate-fade-in-up animation-delay-200">
                    NVMe SSD servers, enterprise DDoS protection, and 24/7 expert<br className="hidden md:block" />
                    support — starting at $1.75/mo.
                </p>

                {/* Domain Search Bar */}
                <div className="w-full max-w-4xl mx-auto mb-16 bg-white animate-fade-in-up animation-delay-300 relative rounded-full border-4 border-white group shadow-[0_8px_32px_rgba(0,0,0,0.2)]">
                    <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-brandCyan via-brandPurple to-brandPurple opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                    <form
                        onSubmit={(e) => {
                            e.preventDefault();
                            const domainValue = e.target.domainSearch.value;
                            const baseUrl = "https://clients.zenexcloud.com/cart.php?a=add&domain=register&_gl=1*wlubiy*_gcl_au*ODM4NjY2MzkxLjE3ODAzODEzNzA.*_ga*MTAxMTMxNDA5Ni4xNzgwMzgxMzcx*_ga_4L9HZTSD0D*czE3ODA4OTY3ODYkbzMkZzEkdDE3ODA4OTgzMTMkajYwJGwwJGg0ODYyMTE2NTE.";
                            if (domainValue) {
                                window.location.href = `${baseUrl}&query=${encodeURIComponent(domainValue)}`;
                            } else {
                                window.location.href = baseUrl;
                            }
                        }}
                        className="relative z-10 w-full bg-white backdrop-blur-md rounded-full p-1 flex items-center"
                    >
                        <div className="flex-grow flex items-center px-4 md:px-6">
                            <input
                                name="domainSearch"
                                type="text"
                                placeholder={currentText}
                                className="flex-grow bg-transparent outline-none text-gray-900 placeholder-gray-500 text-sm md:text-base w-full py-1"
                            />
                        </div>
                        <button
                            type="submit"
                            className="bg-cyan-500 hover:bg-cyan-400 text-white rounded-full px-5 md:px-8 py-3 md:py-3.5 whitespace-nowrap text-sm md:text-base font-semibold flex items-center transition-all duration-300 shadow-[0_0_20px_rgba(0,163,255,0.3)] hover:shadow-[0_0_30px_rgba(0,163,255,0.5)] shrink-0"
                        >
                            Find Your Domain <Search className="w-4 h-4 ml-2 hidden sm:inline" />
                        </button>
                    </form>
                </div>

                {/* Stats Row */}
                <div className="grid grid-cols-2 md:grid-cols-4 items-center justify-center gap-8 sm:gap-12 md:gap-24 lg:gap-32 w-full max-w-4xl mx-auto mb-10 animate-fade-in-up animation-delay-400">
                    {stats.map((stat, index) => (
                        <div key={index} className="flex flex-col items-center">
                            <span className="text-2xl sm:text-3xl md:text-4xl font-bold text-white tracking-tight">{stat.value}</span>
                            <span className="text-xs sm:text-sm text-gray-500 mt-1 font-medium tracking-wide">{stat.label}</span>
                        </div>
                    ))}
                </div>

                {/* Divider Line */}
                <div className="w-full max-w-3xl h-px bg-gradient-to-r from-transparent via-white/10 to-transparent mb-8"></div>

                {/* Trust Footer */}
                <div className="text-xs md:text-lg text-gray-500 flex flex-col md:flex-row items-center justify-center gap-2 animate-fade-in-up animation-delay-500">
                    <div className="flex text-cyan-400 mr-1">
                        {[...Array(5)].map((_, i) => (
                            <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                        ))}
                    </div>
                    <span>Trusted by <strong className="text-white font-semibold">10,000+ websites</strong> · No hidden fees · <strong className="text-white font-semibold">30-day</strong> money-back</span>
                </div>
            </div>
        </div>
    );
};

export default Hero;