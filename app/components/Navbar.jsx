"use client";
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { ArrowRight, X, Menu } from 'lucide-react';

const Navbar = () => {
    const pathname = usePathname();
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isTopBannerVisible, setIsTopBannerVisible] = useState(true);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Removed body scroll lock to prevent iOS Safari jump-to-top bug

    return (
        <>
            {/* Top Banner */}
            {/* {isTopBannerVisible && (
                <div className="w-full relative z-[60] bg-[#062a3e] text-white text-xs">
                    <div className="max-w-screen-2xl mx-auto w-full py-2.5 px-4 flex justify-between items-center">
                        <div className="flex-1 flex justify-center items-center text-center gap-1">
                            <span className="text-gray-300 hidden sm:inline">All systems operational · 99.97% uptime</span>
                            <span className="hidden sm:inline mx-2 text-gray-500">·</span>
                            <Link href="#" className="text-white font-semibold inline-flex items-center hover:text-cyan-300 transition-colors duration-300">
                                Claim Offer <ArrowRight className="w-3.5 h-3.5 ml-1" />
                            </Link>
                        </div>
                        <button
                            onClick={() => setIsTopBannerVisible(false)}
                            className="text-gray-400 hover:text-white shrink-0 ml-4 transition-colors duration-200"
                            aria-label="Close banner"
                        >
                            <X className="w-4 h-4" />
                        </button>
                    </div>
                </div>
            )} */}

            {/* Main Navbar */}
            <nav className={`w-full sticky top-0 z-50 transition-all duration-500 ${isScrolled
                ? 'bg-white backdrop-blur-xl shadow-[0_4px_30px_rgba(0,0,0,0.3)]'
                : 'bg-white'
                }`}>
                <div className="max-w-screen-2xl mx-auto w-full py-4 px-6 flex justify-between items-center">
                    {/* Left Side: Logo & Desktop Menu */}
                    <div className="flex items-center">
                        <Link href="/" className="mr-10 lg:mr-14">
                            <Image
                                src="/dark.png"
                                alt="ZenexCloud"
                                width={170}
                                height={34}
                                className="h-7 md:h-8 w-auto"
                                priority
                            />
                        </Link>

                        <div className="hidden lg:flex items-center space-x-8 text-[15px] font-medium">
                            {[
                                { href: '/hosting', label: 'Hosting' },
                                { href: '/vps', label: 'VPS' },
                                { href: '/s3-bucket', label: 'S3 Bucket' },
                                { href: '/pricing', label: 'Pricing' },
                            ].map((link) => (
                                <Link key={link.href} href={link.href} className={`transition-colors duration-300 relative group ${pathname === link.href ? 'text-black' : 'text-gray-600 hover:text-black'}`}>
                                    {link.label}
                                    <span className={`absolute -bottom-1 left-0 h-[2px] bg-cyan-400 transition-all duration-300 ${pathname === link.href ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* Right Actions */}
                    <div className="hidden lg:flex items-center space-x-5">
                        <div className="flex items-center mr-2">
                            <Link href="https://clients.zenexcloud.com/index.php?rp=/login&_gl=1*3as8su*_gcl_au*ODM4NjY2MzkxLjE3ODAzODEzNzA.*_ga*MTAxMTMxNDA5Ni4xNzgwMzgxMzcx*_ga_4L9HZTSD0D*czE3ODIxMjU1NjckbzE1JGcxJHQxNzgyMTI1OTQ5JGo0OSRsMCRoNDg3MjQxOTkx" className="text-[15px] font-medium text-gray-600 hover:text-cyan-500 transition-colors duration-300">
                                Login
                            </Link>
                        </div>
                        <Link
                            href="https://clients.zenexcloud.com/register.php?_gl=1*1ao0rgm*_gcl_au*ODM4NjY2MzkxLjE3ODAzODEzNzA.*_ga*MTAxMTMxNDA5Ni4xNzgwMzgxMzcx*_ga_4L9HZTSD0D*czE3ODIxMjU1NjckbzE1JGcxJHQxNzgyMTI2MDcwJGo0MCRsMCRoNDg3MjQxOTkx"
                            className="bg-cyan-500 hover:bg-cyan-400 text-white rounded-full px-6 py-2.5 text-sm font-semibold flex items-center transition-all duration-300 shadow-[0_0_20px_rgba(0,163,255,0.3)] hover:shadow-[0_0_30px_rgba(0,163,255,0.5)]"
                        >
                            Register <ArrowRight className="w-4 h-4 ml-1.5" />
                        </Link>
                    </div>

                    {/* Mobile menu button */}
                    <div className="lg:hidden flex items-center">
                        <button
                            className="text-black hover:text-cyan-500 focus:outline-none p-1 transition-colors duration-200"
                            onClick={() => setIsMobileMenuOpen(true)}
                            aria-label="Open menu"
                        >
                            <Menu className="w-6 h-6" />
                        </button>
                    </div>
                </div>

            </nav>

            {/* Mobile Menu Overlay - Moved outside nav to escape stacking context */}
            <div
                className={`fixed inset-0 bg-black/60 backdrop-blur-sm z-[90] lg:hidden transition-opacity duration-300 ${isMobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
                    }`}
                onClick={() => setIsMobileMenuOpen(false)}
            ></div>

            {/* Mobile Menu Drawer - Moved outside nav */}
            <div
                className={`fixed top-0 right-0 h-[100dvh] w-[85%] max-w-[340px] bg-[#0a1e2e] z-[100] lg:hidden flex flex-col py-6 px-6 shadow-2xl transform transition-transform duration-300 ease-out ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
                    }`}
            >
                {/* Drawer Header */}
                <div className="flex justify-between items-center mb-10">
                    <Image src="/zenexcloudlogowhite.svg" alt="ZenexCloud" width={130} height={26} className="h-6 w-auto" />
                    <button
                        className="text-gray-400 hover:text-white focus:outline-none p-1.5 bg-white/5 rounded-full border border-white/10 transition-colors duration-200"
                        onClick={() => setIsMobileMenuOpen(false)}
                        aria-label="Close menu"
                    >
                        <X className="w-4 h-4" />
                    </button>
                </div>

                <div className="flex flex-col space-y-1 text-[15px] font-medium text-gray-300 overflow-y-auto pb-6 flex-1">
                    {[
                        { href: '/hosting', label: 'Hosting' },
                        { href: '/vps', label: 'VPS' },
                        { href: '/s3-bucket', label: 'S3 Bucket' },
                        { href: '/pricing', label: 'Pricing' },
                    ].map((link) => (
                        <Link key={link.href} href={link.href} onClick={() => setIsMobileMenuOpen(false)} className={`transition-all py-3 px-3 rounded-lg ${pathname === link.href ? 'text-white bg-white/10' : 'hover:text-white hover:bg-white/5'}`}>
                            {link.label}
                        </Link>
                    ))}

                    <div className="!mt-8 pt-6 border-t border-white/10 space-y-3">
                        <Link href="https://clients.zenexcloud.com/index.php?rp=/login&_gl=1*3as8su*_gcl_au*ODM4NjY2MzkxLjE3ODAzODEzNzA.*_ga*MTAxMTMxNDA5Ni4xNzgwMzgxMzcx*_ga_4L9HZTSD0D*czE3ODIxMjU1NjckbzE1JGcxJHQxNzgyMTI1OTQ5JGo0OSRsMCRoNDg3MjQxOTkx" className="w-full text-center block text-gray-300 hover:text-white py-2 transition-colors font-medium">
                            Login
                        </Link>
                        <Link href="https://clients.zenexcloud.com/register.php?_gl=1*1ao0rgm*_gcl_au*ODM4NjY2MzkxLjE3ODAzODEzNzA.*_ga*MTAxMTMxNDA5Ni4xNzgwMzgxMzcx*_ga_4L9HZTSD0D*czE3ODIxMjU1NjckbzE1JGcxJHQxNzgyMTI2MDcwJGo0MCRsMCRoNDg3MjQxOTkx" className="bg-cyan-500 hover:bg-cyan-400 text-white rounded-full px-5 py-3 mt-4 transition-all flex items-center justify-center w-full shadow-[0_0_20px_rgba(0,163,255,0.3)] font-semibold">
                            Register <ArrowRight className="w-4 h-4 ml-1.5" />
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Navbar;
