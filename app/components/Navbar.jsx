"use client";
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Search } from 'lucide-react';

const typingWords = [
    "www.yourdomain.com",
    "www.yourdomain.net",
    "www.yourdomain.org",
    "www.yourdomain.io",
    "www.yourdomain.co",
    "www.yourdomain.ai"
];

const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isTopBannerVisible, setIsTopBannerVisible] = useState(true);

    const [currentWordIndex, setCurrentWordIndex] = useState(0);
    const [currentText, setCurrentText] = useState('');
    const [isDeleting, setIsDeleting] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

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
            }, 50);
        } else {
            if (currentText === currentWord) {
                timer = setTimeout(() => {
                    setIsDeleting(true);
                }, 2000);
            } else {
                timer = setTimeout(() => {
                    setCurrentText(currentWord.slice(0, currentText.length + 1));
                }, 100);
            }
        }

        return () => clearTimeout(timer);
    }, [currentText, isDeleting, currentWordIndex]);

    return (
        <>
            {/* Top Banner */}
            {isTopBannerVisible && (
                <div className={`w-full relative z-40 text-white text-xs transition-colors duration-300 ${isScrolled ? 'bg-[#031520]' : 'bg-[#031520]'}`}>
                    <div className="max-w-screen-2xl mx-auto w-full py-2 px-4 flex justify-between items-center">
                        <div className="flex-1 flex justify-center items-center text-center">
                            <span className="text-gray-300 hidden sm:inline">All systems operational · 99.97% uptime</span>
                            <span className="mx-3 text-gray-600 hidden sm:inline">|</span>
                            <Link href="#" className="text-white font-semibold flex items-center justify-center hover:text-gray-300 transition-colors">
                                Claim Offer <span className="ml-1">→</span>
                            </Link>
                        </div>
                        <button
                            onClick={() => setIsTopBannerVisible(false)}
                            className="text-gray-400 hover:text-white shrink-0 ml-2"
                        >
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>
                </div>
            )}

            {/* Main Navbar */}
            <nav className={`w-full sticky top-0 z-50 text-slate-900 transition-all duration-300 ${isScrolled ? 'bg-white backdrop-blur-md shadow-xl' : 'bg-white'}`}>
                <div className="max-w-screen-2xl mx-auto w-full py-4 px-6 flex justify-between items-center">
                    {/* Left Side: Logo & Desktop Menu */}
                    <div className="flex items-center">
                        <Link href="/" className="mr-8 lg:mr-12">
                            <Image src="/dark.png" alt="Zenexcloud" width={160} height={32} className="h-7 md:h-8 w-auto" />
                        </Link>

                        <div className="hidden lg:flex items-center space-x-8 text-md">
                            <Link href="/hosting" className="relative hover:text-brandColor transition-colors duration-300 before:content-['•'] before:absolute before:-left-3.5 before:top-[45%] before:-translate-y-1/2 before:opacity-0 hover:before:opacity-100 before:transition-opacity before:text-brandColor">Hosting</Link>
                            <Link href="#" className="relative hover:text-brandColor transition-colors duration-300 before:content-['•'] before:absolute before:-left-3.5 before:top-[45%] before:-translate-y-1/2 before:opacity-0 hover:before:opacity-100 before:transition-opacity before:text-brandColor">VPS</Link>
                            <Link href="#" className="relative hover:text-brandColor transition-colors duration-300 before:content-['•'] before:absolute before:-left-3.5 before:top-[45%] before:-translate-y-1/2 before:opacity-0 hover:before:opacity-100 before:transition-opacity before:text-brandColor">Domain</Link>
                            <Link href="#" className="relative hover:text-brandColor transition-colors duration-300 before:content-['•'] before:absolute before:-left-3.5 before:top-[45%] before:-translate-y-1/2 before:opacity-0 hover:before:opacity-100 before:transition-opacity before:text-brandColor">Pricing</Link>
                        </div>
                    </div>

                    {/* Right Actions */}
                    <div className="hidden lg:flex items-center space-x-6 text-sm font-medium">
                        <Link href="#" className="flex items-center hover:text-gray-300 transition-colors">
                            Contact Sales
                            <svg className="w-4 h-4 ml-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                            </svg>
                        </Link>
                        <Link href="#" className="border border-slate-900 rounded-full px-5 py-2 bg-slate-900 text-white hover:bg-white hover:text-black transition-colors flex items-center duration-300">
                            Get Started <span className="ml-1">→</span>
                        </Link>
                    </div>

                    {/* Mobile menu button */}
                    <div className="lg:hidden flex items-center">
                        <button
                            className="text-slate-900 hover:text-[#009DD9] focus:outline-none p-1"
                            onClick={() => setIsMobileMenuOpen(true)}
                        >
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        </button>
                    </div>
                </div>

                {/* Mobile Menu Overlay */}
                {isMobileMenuOpen && (
                    <div
                        className="fixed inset-0 bg-slate-900/40 backdrop-blur-sm z-[60] lg:hidden"
                        onClick={() => setIsMobileMenuOpen(false)}
                    ></div>
                )}

                {/* Mobile Menu Drawer */}
                <div
                    className={`fixed top-0 right-0 h-[100dvh] w-[80%] max-w-[320px] bg-white z-[70] lg:hidden flex flex-col py-6 px-6 shadow-2xl transform transition-transform duration-300 ease-in-out ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}
                >
                    {/* Drawer Header */}
                    <div className="flex justify-between items-center mb-8">
                        <Image src="/dark.png" alt="Zenexcloud" width={120} height={24} className="h-6 w-auto" />
                        <button
                            className="text-slate-500 hover:text-slate-900 focus:outline-none p-1 bg-slate-100 rounded-full"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>

                    <div className="flex flex-col space-y-2 text-[15px] font-medium text-slate-700 overflow-y-auto pb-6">
                        <Link href="/hosting" className="hover:text-brandColor transition-colors py-3 border-b border-slate-100">Hosting</Link>
                        <Link href="#" className="hover:text-brandColor transition-colors py-3 border-b border-slate-100">VPS</Link>
                        <Link href="#" className="hover:text-brandColor transition-colors py-3 border-b border-slate-100">Domain</Link>
                        <Link href="#" className="hover:text-brandColor transition-colors py-3 border-b border-slate-100">Pricing</Link>
                        <Link href="#" className="flex items-center hover:text-brandColor transition-colors py-3">
                            Contact Sales
                            <svg className="w-4 h-4 ml-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                            </svg>
                        </Link>

                        <div className="mt-6 pt-4">
                            <Link href="#" className="bg-[#009DD9] text-white rounded-full px-5 py-3 hover:bg-[#008FCC] transition-colors flex items-center justify-center w-full shadow-md hover:shadow-lg">
                                Get Started <span className="ml-1">→</span>
                            </Link>
                        </div>
                    </div>
                </div>
            </nav>

            {/* Search box section */}
            <div className={`w-full relative z-40 px-6 flex flex-col items-center bg-white pt-4 pb-4 md:pb-0 border-b border-transparent`}>
                <div className="w-full flex flex-col xl:flex-row items-center justify-between gap-6 max-w-screen-2xl mx-auto">
                    <div className="w-full flex-grow relative group rounded-full">
                        {/* Hover Gradient Border (4px = inset-1) */}
                        <div className="absolute -inset-1 bg-gradient-to-r from-[#8AD9F8] to-[#8A38F5] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-0"></div>

                        {/* Inner Search Box */}
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
                            className="relative z-10 w-full h-full bg-white border border-gray-200 group-hover:border-transparent rounded-full p-1.5 flex items-center shadow-md transition-colors duration-300"
                        >
                            <div className="flex-grow flex items-center px-4 md:px-6">
                                <input
                                    name="domainSearch"
                                    type="text"
                                    placeholder={`${currentText}|`}
                                    className="flex-grow bg-transparent outline-none text-black placeholder-gray-500 sm:ml-2 text-sm md:text-base w-full"
                                />
                            </div>
                            <button type="submit" className="btn-primary group px-6 md:px-8 py-3 md:py-3.5 whitespace-nowrap text-sm md:text-base shrink-0">
                                Find Your Domain
                                <Search className="w-4 h-4 ml-2 hidden sm:inline relative z-10 transition-transform duration-300 group-hover:translate-x-1" />
                            </button>
                        </form>
                    </div>

                    {/* Free Domain Text */}
                    <div className="text-gray-700 text-sm hidden xl:block w-48 shrink-0">
                        Free domain for 1 year<br />included with yearly plans
                    </div>
                </div>
            </div>
        </>
    );
};

export default Navbar;
