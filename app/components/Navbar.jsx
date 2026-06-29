"use client";
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { ArrowRight, X, Menu, User } from 'lucide-react';

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

            {/* Main Navbar */}
            <nav className={`w-full sticky top-0 z-50 transition-all duration-500 ${isScrolled
                ? 'bg-white backdrop-blur-xl shadow-[0_4px_30px_rgba(0,0,0,0.3)]'
                : 'bg-white'
                }`}>
                <div className="max-w-7xl mx-auto w-full py-4 px-4 md:px-0 flex justify-between items-center">
                    {/* Left Side: Logo & Desktop Menu */}
                    <div className="flex items-center">
                        <Link href="/" className="mr-10 lg:mr-14">
                            <Image
                                src="/dark.png"
                                alt="ZenexCloud"
                                width={170}
                                height={34}
                                className="h-7 md:h-9 w-auto"
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
                    <div className="hidden lg:flex items-center space-x-3">
                        <Link
                            href="https://clients.zenexcloud.com/register.php"
                            className="text-[14px] font-semibold text-gray-800 bg-white border border-gray-200 hover:bg-gray-50 transition-all duration-300 px-5 py-2.5 rounded-[6px]"
                        >
                            Register
                        </Link>
                        <Link
                            href="https://clients.zenexcloud.com/index.php?rp=/login"
                            className="text-[14px] font-semibold text-white bg-[#0f62fe] hover:bg-blue-700 transition-colors duration-300 px-5 py-2.5 rounded-[6px]"
                        >
                            Login
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

                    <div className="!mt-8 pt-6 border-t border-white/10 space-y-5">
                        <button className="relative flex items-center justify-center w-full py-3.5 rounded-full font-semibold text-[15px] group">
                            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-fuchsia-500 via-purple-500 to-cyan-500 p-[1.5px]" />
                            <div className="absolute inset-[1.5px] rounded-full bg-[#0a1e2e] transition-colors" />
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="mr-2 text-white relative z-10">
                                <path d="M12 2.5L14.5 9.5L21.5 12L14.5 14.5L12 21.5L9.5 14.5L2.5 12L9.5 9.5L12 2.5Z" fill="currentColor" />
                            </svg>
                            <span className="text-white relative z-10">Ask AI</span>
                        </button>

                        <div className="flex items-center justify-center px-2 pt-2">
                            <Link href="https://clients.zenexcloud.com/index.php?rp=/login" className="flex items-center gap-2 text-white hover:text-cyan-400 transition-colors duration-300">
                                <User className="w-[22px] h-[22px] stroke-[2.5]" />
                                <span className="font-medium text-[15px]">Account</span>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Navbar;
