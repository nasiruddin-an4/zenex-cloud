"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Zap, Search, ArrowRight, Globe, Server, Database, Cpu, ArrowUpRight, ShieldCheck, Network, Headset, HandCoins, Cloud, HardDrive, Sparkles, Rocket, Code, Store, LayoutDashboard, Building2, Check, Layers, Box, Lock, Headphones, Star, ArrowRightLeft } from 'lucide-react';


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
            <div className="relative z-10 flex flex-col items-center text-center text-white pt-36 md:pt-44 pb-16 md:pb-20 px-4 sm:px-6">

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
                            aria-label="Find Your Domain"
                            className="bg-cyan-500 hover:bg-cyan-400 text-white rounded-full px-4 sm:px-5 md:px-8 py-3 md:py-3.5 whitespace-nowrap text-sm md:text-base font-semibold flex items-center transition-all duration-300 shadow-[0_0_20px_rgba(0,163,255,0.3)] hover:shadow-[0_0_30px_rgba(0,163,255,0.5)] shrink-0"
                        >
                            <span className="hidden sm:inline">Find Your Domain</span>
                            <Search className="w-5 h-5 sm:w-4 sm:h-4 sm:ml-2" />
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



const logos = [
    { src: '/Trusted by logo/Stripe_Logo.png', alt: 'Stripe' },
    { src: '/Trusted by logo/Shopify_logo.png', alt: 'Shopify' },
    { src: '/Trusted by logo/Vercel.png', alt: 'Vercel' },
    { src: '/Trusted by logo/Notion.png', alt: 'Notion' },
    { src: '/Trusted by logo/Linear.png', alt: 'Linear' },
    { src: '/Trusted by logo/Wordpresss.png', alt: 'WordPress' },
];

const statsData = [
    { id: 1, value: "99%", label: "Uptime SLA", weightClass: "font-bold" },
    { id: 2, value: "10k+", label: "Sites hosted", weightClass: "font-bold" },
    { id: 3, value: "60s", label: "Avg Deploy", weightClass: "font-semibold" },
    { id: 4, value: "24/7", label: "Support", weightClass: "font-semibold" }
];

const TrustedBy = () => {
    return (
        <section className="w-full bg-black py-10 relative z-10 overflow-hidden">
            <div className="max-w-screen-2xl mx-auto px-6 md:px-12">



                <p className="text-center text-gray-400 text-xl mb-6 font-normal tracking-normal">
                    Trusted by <span className="text-white">startups</span>, <span className="text-white">enterprises</span>, and <span className="text-white">global teams</span> to build scalable systems
                </p>

                {/* Top Subtle Line */}
                <div className="w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>

                {/* Logos Marquee Container */}
                <div className="w-full relative overflow-hidden opacity-60 hover:opacity-100 transition-opacity duration-500 py-8">
                    {/* Left Fade Overlay */}
                    <div className="absolute left-0 top-0 bottom-0 w-24 md:w-48 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none"></div>

                    {/* Right Fade Overlay */}
                    <div className="absolute right-0 top-0 bottom-0 w-24 md:w-48 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none"></div>

                    {/* Inner Track */}
                    <div className="flex w-max animate-marquee items-center gap-16 pr-16 hover:[animation-play-state:paused]">
                        {[...logos, ...logos].map((logo, index) => (
                            <div key={index} className="flex items-center justify-center min-w-[150px]">
                                <Image
                                    src={logo.src}
                                    alt={logo.alt}
                                    width={120}
                                    height={40}
                                    className="object-contain"
                                />
                            </div>
                        ))}
                    </div>
                </div>

                {/* Bottom Subtle Line */}
                <div className="w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>

            </div>
        </section>
    );
};




const servicesData = [
    {
        id: "hosting",
        title: "Hosting",
        icon: Globe,
        description: "Launch websites and business applications with optimized hosting powered by NVMe storage, LiteSpeed technology, enterprise-grade security, and automated backups.",
        features: [
            "cPanel Hosting",
            "Wordpress Optimized",
            "Node.js Support",
            "Mysql Database"
        ],
        link: "/hosting",
        badge: null,
        image: "/image 34.png"
    },
    {
        id: "vps",
        title: "VPS",
        icon: Server,
        description: "Deploy Linux or Windows virtual servers with full root access, guaranteed resources, high-performance NVMe storage, and instant scalability.",
        features: [
            "Linux VPS",
            "Windows VPS",
            "NVMe Storage",
            "Full Root Access"
        ],
        link: "/vps",
        badge: null,
        image: "/image 38.png"
    },
    {
        id: "s3",
        title: "S3 Bucket",
        icon: Database,
        description: "Store, manage, and deliver files at scale using S3-compatible object storage built for backups, applications, media delivery, and enterprise workloads.",
        features: [
            "S3 Compatible",
            "CDN Ready",
            "API Access",
            "Daily Backup"
        ],
        link: "/s3-bucket",
        badge: null,
        image: "/Frame 2085663933.png"
    },
    {
        id: "gpu",
        title: "GPU Server",
        icon: Cpu,
        description: "Accelerate machine learning, AI model training, rendering, simulations, and compute-intensive workloads using dedicated NVIDIA GPU infrastructure.",
        features: [
            "NVIDIA GPU",
            "AI Training Ready",
            "CUDA Support",
            "High Performance"
        ],
        link: "/gpu",
        badge: "Coming Soon",
        image: "/image 40.png"
    }
];

const Services = () => {
    return (
        <section className="w-full bg-white py-24 font-sans text-slate-900 relative z-10">
            <div className="max-w-7xl mx-auto px-6">
                {/* Header Section */}
                <div className="flex flex-col lg:flex-row justify-between items-start mb-24 gap-8">
                    <div>
                        <h2 className="text-4xl md:text-4xl font-bold tracking-tight text-slate-900 leading-[1.1]">
                            Infrastructure and<br />Cloud Services
                        </h2>
                    </div>
                    <div className="lg:max-w-xl">
                        <p className="text-slate-700 font-semibold text-base md:text-lg leading-relaxed">
                            Reliable hosting, virtual servers, object storage, and AI-ready compute resources all from a single platform.
                        </p>
                    </div>
                </div>

                {/* Cards List */}
                <div className="flex flex-col w-full relative">
                    {servicesData.map((service, index) => (
                        <Link
                            href={service.link}
                            key={service.id}
                            className="block sticky bg-white border-t border-slate-200 py-10 md:py-16 transition-all duration-300 group"
                            style={{
                                top: `calc(100px + ${index * 20}px)`,
                                zIndex: index + 1
                            }}
                        >
                            <div className="flex flex-col md:flex-row gap-8 lg:gap-16 items-center transition-transform duration-300 group-hover:translate-x-2">
                                {/* Left: Image */}
                                <div className="w-full md:w-[30%] shrink-0 relative rounded-2xl overflow-hidden aspect-[4/2.5] bg-slate-100">
                                    <Image
                                        src={service.image}
                                        alt={service.title}
                                        fill
                                        className="object-cover"
                                    />
                                </div>

                                {/* Right: Content */}
                                <div className="w-full md:w-[55%] flex flex-col justify-center relative h-full">
                                    <div className="flex justify-between items-start mb-6">
                                        <div className="flex items-center gap-4">
                                            <div className="w-10 h-10 rounded-full bg-[#EAF5FA] flex items-center justify-center text-brandColor">
                                                <service.icon className="w-5 h-5" />
                                            </div>
                                            <div className="flex items-center gap-3">
                                                <h3 className="text-3xl lg:text-4xl font-bold tracking-tight text-slate-900">{service.title}</h3>
                                                {service.badge && (
                                                    <span className="px-2.5 py-1 rounded bg-[#6B859E] text-white text-[11px] font-bold tracking-wide uppercase">
                                                        {service.badge}
                                                    </span>
                                                )}
                                            </div>
                                        </div>
                                        <div className="text-[#009DD9] transition-all duration-300 p-2 group-hover:-translate-y-1.5 group-hover:text-[#023B5A]">
                                            <ArrowUpRight className="w-7 h-7 stroke-[2]" />
                                        </div>
                                    </div>

                                    <p className="text-slate-800 font-medium text-base md:text-lg leading-relaxed mb-8 max-w-2xl">
                                        {service.description}
                                    </p>

                                    <div className="flex justify-between items-end mt-auto">
                                        <div className="flex flex-wrap gap-3 max-w-[85%]">
                                            {service.features.map((feature, idx) => (
                                                <span key={idx} className="bg-slate-100 text-slate-600 px-4 py-1.5 rounded-full text-[13px] font-semibold whitespace-nowrap">
                                                    {feature}
                                                </span>
                                            ))}
                                        </div>
                                        <div className="text-slate-300 font-medium text-base mb-1.5">
                                            0{index + 1}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>

            </div>
        </section>
    );
};




const featureData = [
    {
        id: "storage",
        title: "NVMe Storage",
        description: "Experience significantly faster loading speeds with enterprise-grade NVMe SSD storage.",
        icon: Database
    },
    {
        id: "security",
        title: "Advanced Security",
        description: "Protect websites and applications with enterprise-grade security and threat protection.",
        icon: ShieldCheck
    },
    {
        id: "performance",
        title: "Global Performance",
        description: "Low-latency delivery through optimized cloud infrastructure.",
        icon: Globe
    },
    {
        id: "scalability",
        title: "Scalability",
        description: "Upgrade resources instantly as your business grows.",
        icon: Network
    },
    {
        id: "support",
        title: "Expert Support",
        description: "Technical specialists available around the clock.",
        icon: Headset
    },
    {
        id: "guarantee",
        title: "Money-Back Guarantee",
        description: "Risk-free hosting backed by confidence.",
        icon: HandCoins
    }
];

const Features = () => {
    return (
        <section className="w-full bg-[#E6EFF3] py-24 relative z-10">
            <div className="max-w-7xl mx-auto px-6">

                {/* Header */}
                <div className="text-center flex flex-col items-center mb-10">

                    <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-slate-900 mb-4">
                        Infrastructure Designed For Reliability
                    </h2>
                    <p className="text-slate-600 text-sm md:text-base max-w-2xl font-medium">
                        Every layer of our platform is optimized to deliver speed, stability, and security for businesses that depend on their online presence.
                    </p>
                </div>

                {/* Grid with 1px inner borders */}
                {/* We achieve the internal border effect by setting the grid gap to 1px and coloring the grid background, while the items have the section background */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[1px] bg-[#D4E2E8] border border-[#D4E2E8] rounded-2xl overflow-hidden">

                    {featureData.map((feature) => (
                        <div
                            key={feature.id}
                            className="bg-[#f1f6f8] p-10 md:p-14 flex flex-col items-center text-center group hover:bg-white transition-colors duration-300"
                        >
                            {/* Icon inside rounded square */}
                            <div className="w-14 h-14 rounded-2xl border border-[#BBD0DC] bg-[#DAE8F0] flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-110">
                                <feature.icon className="w-6 h-6 text-[#023B5A]" />
                            </div>

                            {/* Title */}
                            <h3 className="text-xl md:text-2xl font-bold tracking-tight text-slate-900 mb-4">
                                {feature.title}
                            </h3>

                            {/* Description */}
                            <p className="text-slate-600 text-sm leading-relaxed">
                                {feature.description}
                            </p>
                        </div>
                    ))}

                </div>

            </div>
        </section>
    );
};




const benchmarks = [
    {
        name: "Zencloud NVMe",
        time: "220 ms",
        width: "45%",
        gradient: "from-[#8AD9F8] to-[#009DD9]",
        textColor: "text-[#009DD9]"
    },
    {
        name: "Blue Host",
        time: "480 ms",
        width: "60%",
        gradient: "from-[#A3A7FF] to-[#252DF2]",
        textColor: "text-[#252DF2]"
    },
    {
        name: "Host Gator",
        time: "610 ms",
        width: "75%",
        gradient: "from-[#84E1D0] to-[#00987A]",
        textColor: "text-[#00987A]"
    },
    {
        name: "GoDaddy",
        time: "760 ms",
        width: "95%",
        gradient: "from-[#E6A0F1] to-[#A817C6]",
        textColor: "text-[#A817C6]"
    }
];

const floatingCards = [
    { text: "Secure NVMe Storage", icon: HardDrive, active: false },
    { text: "24/7 Premium Support", icon: Headset, active: false },
    { text: "Code with AI", icon: Sparkles, active: true },
    { text: "Deploy Instantly", icon: Rocket, active: false },
    { text: "Global Edge Network", icon: Globe, active: false }
];

const Benchmark = () => {
    return (
        <section className="w-full bg-white py-20 lg:py-32 font-sans overflow-hidden">
            <div className="max-w-7xl mx-auto px-6">

                <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-20">

                    {/* Left Column: Content & Bars */}
                    <div className="w-full lg:w-1/2 flex flex-col items-start">

                        {/* Badge */}
                        <div className="inline-flex items-center space-x-2 bg-[#E6F3FA] text-[#023B5A] rounded px-3 py-1.5 mb-8">
                            <Cloud className="w-3.5 h-3.5" strokeWidth={2.5} />
                            <span className="text-[11px] font-bold tracking-widest uppercase">WEB HOSTING & BEYOND</span>
                        </div>

                        {/* Heading */}
                        <h2 className="text-4xl md:text-5xl font-bold text-slate-900 tracking-tight leading-tight mb-6">
                            Measurably Faster<br />
                            Provably Reliable
                        </h2>

                        {/* Description */}
                        <p className="text-slate-700 text-[15px] font-medium leading-relaxed max-w-lg mb-12">
                            Real-world benchmark — average TTFB across 100 requests from US East to a 5 MB WordPress site.
                        </p>

                        {/* Benchmark Bars */}
                        <div className="w-full max-w-lg flex flex-col space-y-6 mb-8">
                            {benchmarks.map((bench, idx) => (
                                <div key={idx} className="flex flex-col space-y-2">
                                    {/* Labels */}
                                    <div className="flex justify-between items-center text-sm font-bold">
                                        <span className="text-slate-800">{bench.name}</span>
                                        <span className={bench.textColor}>{bench.time}</span>
                                    </div>
                                    {/* Progress Bar container */}
                                    <div className="w-full h-3.5 bg-slate-100 rounded-full overflow-hidden">
                                        {/* Filled Bar */}
                                        <div
                                            className={`h-full rounded-full bg-gradient-to-r ${bench.gradient}`}
                                            style={{ width: bench.width }}
                                        ></div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Disclaimer */}
                        <p className="text-slate-500 text-[11px] mb-12 font-medium">
                            Tested via <strong className="text-slate-800">GTMetrix</strong> - May 2026
                        </p>

                    </div>

                    {/* Right Column: Image & Floating Cards */}
                    <div className="w-full lg:w-1/2 relative h-[500px] lg:h-[600px] rounded-3xl overflow-hidden mt-10 lg:mt-0">
                        {/* Placeholder/User Image */}
                        <div className="absolute inset-0 bg-slate-200">
                            <Image
                                src="/image34.png"
                                alt="Professional working on laptop"
                                fill
                                className="object-cover"
                            />
                        </div>

                        {/* Floating Cards Stack Overlay */}
                        <div className="absolute top-1/2 left-6 md:left-10 -translate-y-1/2 flex flex-col space-y-3 z-10">
                            {floatingCards.map((card, idx) => (
                                <div
                                    key={idx}
                                    className={`flex items-center space-x-3 px-4 py-3 rounded-lg shadow-xl backdrop-blur-md border ${card.active
                                        ? 'bg-[#005073] border-[#005073] text-white'
                                        : 'bg-black/60 border-white/10 text-white hover:bg-black/80 transition-colors'
                                        }`}
                                >
                                    <card.icon className={`w-5 h-5 ${card.active ? 'text-[#8AD9F8]' : 'text-[#8AD9F8]'}`} strokeWidth={2} />
                                    <span className="text-sm font-semibold tracking-wide">{card.text}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>

            </div>
        </section>
    );
};




const solutionsData = [
    {
        id: "developers",
        tabLabel: "Developer",
        title: "Developers",
        icon: Code,
        description: "Deploy applications with full root access, SSH connectivity, Git workflows, Docker support, and developer-friendly infrastructure.",
        features: ["SSH Access", "Git Integration", "Full Root Access", "NVMe Performance"],
        linkText: "Explore Developer Hosting",
        link: "#",
        imageSrc: "/Web-Developers-in-the-World-1.avif"
    },
    {
        id: "ecommerce",
        tabLabel: "Ecommerce",
        title: "Ecommerce",
        icon: Store,
        description: "Build and scale your online store with high-performance infrastructure, built-in security, and seamless caching for fast checkouts.",
        features: ["WooCommerce Ready", "Magento Optimized", "Free SSL Certificates", "DDoS Protection"],
        linkText: "Explore E-Commerce Hosting",
        link: "#",
        imageSrc: "/E_commerce_and_What_are_its_Applications_2_d2eb0d4402.jpg"
    },
    {
        id: "wordpress",
        tabLabel: "Online Stores",
        title: "Online Stores",
        icon: LayoutDashboard,
        description: "Launch lightning-fast WordPress sites with one-click installation, automated updates, and server-level caching configured out of the box.",
        features: ["1-Click Install", "Automated Backups", "LiteSpeed Cache", "Staging Environment"],
        linkText: "Explore WordPress Hosting",
        link: "#",
        imageSrc: "/wp.png"
    },
    {
        id: "enterprise",
        tabLabel: "Enterprise",
        title: "Enterprise",
        icon: Building2,
        description: "Custom-architected infrastructure designed for high availability, compliance, and massive scalability to support your mission-critical workloads.",
        features: ["Dedicated Account Manager", "Custom SLAs", "High Availability Setup", "Advanced Load Balancing"],
        linkText: "Explore Enterprise Solutions",
        link: "#",
        imageSrc: "/enterprise-in-business--1200x900.png"
    }
];

const Solutions = () => {
    const [activeTab, setActiveTab] = useState("developers");

    return (
        <section className="w-full bg-[#EAF5FA] py-20 lg:py-28 font-sans overflow-hidden relative">
            <div className="max-w-7xl mx-auto px-6 relative z-10">

                {/* Header Section */}
                <div className="flex flex-col lg:flex-row justify-between items-center mb-10 gap-4">
                    <h2 className="text-2xl md:text-4xl font-bold tracking-tight text-slate-900 max-w-md leading-[1.1]">
                        Solutions Tailored To How You Build
                    </h2>

                    {/* Tabs */}
                    <div className="flex flex-wrap items-center gap-2 lg:gap-3">
                        {solutionsData.map((solution) => {
                            const isActive = activeTab === solution.id;
                            return (
                                <button
                                    key={solution.id}
                                    onClick={() => setActiveTab(solution.id)}
                                    className={`group flex items-center gap-2 px-5 py-2 rounded-full text-[13px] font-semibold transition-all duration-300 border ${isActive
                                        ? 'bg-[#005B82] text-white border-[#005B82]'
                                        : 'bg-transparent text-slate-600 border-[#C1D6E2] hover:border-[#005B82] hover:text-[#005B82]'
                                        }`}
                                >
                                    <solution.icon className={`w-4 h-4 ${isActive ? 'text-white' : 'text-slate-500 group-hover:text-[#005B82]'}`} />
                                    {solution.tabLabel}
                                </button>
                            );
                        })}
                    </div>
                </div>

                {/* Main Content Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center relative">

                    {/* Left Column: Graphic */}
                    <div className="w-full relative min-h-[300px] lg:min-h-[480px] rounded-2xl overflow-hidden shadow-sm">
                        {solutionsData.map((solution) => (
                            <div
                                key={solution.id}
                                className={`absolute inset-0 transition-opacity duration-500 ease-in-out ${activeTab === solution.id ? 'opacity-100 z-20' : 'opacity-0 z-10'
                                    }`}
                            >
                                <Image
                                    src={solution.imageSrc}
                                    alt={solution.title}
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        ))}
                    </div>

                    {/* Right Column: Content */}
                    <div className="w-full flex flex-col relative z-20 pl-0 lg:pl-6">
                        {solutionsData.map((solution) => {
                            const isActive = activeTab === solution.id;
                            if (!isActive) return null;

                            return (
                                <div key={solution.id} className="flex flex-col animate-fadeIn">
                                    <span className="inline-block px-2.5 py-1 rounded bg-[#DCECF5] text-[#009DD9] text-[10px] font-bold tracking-widest uppercase mb-5 w-max">
                                        PERFORMANCE RESULT
                                    </span>
                                    <h3 className="text-2xl lg:text-3xl font-bold text-slate-900 mb-4">{solution.title}</h3>

                                    <p className="text-slate-700 text-[15px] leading-relaxed mb-8 font-medium">
                                        {solution.description}
                                    </p>

                                    <ul className="space-y-4 mb-10">
                                        {solution.features.map((feature, idx) => (
                                            <li key={idx} className="flex items-center gap-3 border-b border-[#D4E4EE] pb-4 last:border-0 last:pb-0">
                                                <div className="w-[18px] h-[18px] rounded flex items-center justify-center bg-[#005B82] shrink-0">
                                                    <Check className="w-3 h-3 text-white" strokeWidth={4} />
                                                </div>
                                                <span className="text-[14px] font-medium text-slate-800">{feature}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            );
                        })}
                    </div>

                </div>

            </div>
        </section>
    );
};




const gpuData = [
    {
        id: "dedicated",
        isPopular: false,
        topBadge: "24-core vCPU • 64GB RAM • 1x GPU",
        title: "GPU Dedicated",
        icon: <Cpu className="w-6 h-6 text-brandColor" />,
        specs: [
            { icon: <Cpu className="w-4 h-4 text-brandColor" />, title: "24-core vCPU", subtitle: "High-performance CPU" },
            { icon: <Server className="w-4 h-4 text-[#22C55E]" />, title: "64GB RAM", subtitle: "DDR5 ECC Memory" },
            { icon: <HardDrive className="w-4 h-4 text-[#EAB308]" />, title: "1x GPU", subtitle: "NVIDIA RTX 4000 Series" }
        ],
        description: "Massive scale bare-metal dedicated servers optimized for agentic AI and model training.",
        buttonText: "Coming Soon",
    },
    {
        id: "vm-pro",
        isPopular: true,
        topBadge: "16-core vCPU • 32GB RAM • 1/2 vGPU",
        title: "GPU VM Pro",
        icon: <Cpu className="w-6 h-6 text-brandColor" />,
        specs: [
            { icon: <Cpu className="w-4 h-4 text-brandColor" />, title: "16-core vCPU", subtitle: "High-performance CPU" },
            { icon: <Server className="w-4 h-4 text-[#22C55E]" />, title: "32GB RAM", subtitle: "DDR5 ECC Memory" },
            { icon: <HardDrive className="w-4 h-4 text-[#EAB308]" />, title: "1/2 vGPU", subtitle: "NVIDIA RTX 4000 Series" }
        ],
        description: "Perfect for fine-tuning LLMs (7B-13B) and complex 3D rendering workloads.",
        buttonText: "Coming Soon",
        imageSrc: "/image 38.png"
    },
    {
        id: "pro-1",
        isPopular: false,
        topBadge: "12-core vCPU • 20GB RAM • 1/4 vGPU",
        title: "GPU Professional",
        icon: <Layers className="w-6 h-6 text-brandColor" />,
        specs: [
            { icon: <Cpu className="w-4 h-4 text-brandColor" />, title: "12-core vCPU", subtitle: "High-performance CPU" },
            { icon: <Server className="w-4 h-4 text-[#22C55E]" />, title: "20GB RAM", subtitle: "DDR5 ECC Memory" },
            { icon: <HardDrive className="w-4 h-4 text-[#EAB308]" />, title: "1/4 vGPU", subtitle: "NVIDIA RTX 4000 Series" }
        ],
        description: "Perfect for fine-tuning LLMs (7B-13B) and complex 3D rendering workloads.",
        buttonText: "Coming Soon",
    },
    {
        id: "pro-2",
        isPopular: false,
        topBadge: "8-core vCPU • 16GB RAM • 1/8 vGPU",
        title: "GPU Professional",
        icon: <Box className="w-6 h-6 text-brandColor" />,
        specs: [
            { icon: <Cpu className="w-4 h-4 text-brandColor" />, title: "8-core vCPU", subtitle: "High-performance CPU" },
            { icon: <Server className="w-4 h-4 text-[#22C55E]" />, title: "16GB RAM", subtitle: "DDR5 ECC Memory" },
            { icon: <HardDrive className="w-4 h-4 text-[#EAB308]" />, title: "1/8 vGPU", subtitle: "NVIDIA RTX 4000 Series" }
        ],
        description: "Perfect for fine-tuning LLMs (7B-13B) and complex 3D rendering workloads.",
        buttonText: "Coming Soon",
    }
];

const features = [
    {
        icon: <ShieldCheck className="w-6 h-6 text-brandColor" />,
        title: "Enterprise Bare Metal",
        subtitle: "Maximum performance & security"
    },
    {
        icon: <Zap className="w-6 h-6 text-brandColor" />,
        title: "RTX 4000 Series",
        subtitle: "Latest NVIDIA architecture"
    },
    {
        icon: <Lock className="w-6 h-6 text-brandColor" />,
        title: "Full Root Access",
        subtitle: "Complete control & flexibility"
    },
    {
        icon: <Headphones className="w-6 h-6 text-brandColor" />,
        title: "24/7 Expert Support",
        subtitle: "AI infrastructure specialists"
    }
];

const GPUServers = () => {
    const [hoveredId, setHoveredId] = useState(null);

    return (
        <section className="w-full bg-white py-20 lg:py-28 font-sans">
            <div className="max-w-7xl mx-auto px-6">

                {/* Header Section */}
                <div className="flex flex-col lg:flex-row justify-between items-start mb-16 gap-6 relative z-10">
                    <div className="flex flex-col">
                        <h2 className="text-2xl md:text-4xl font-extrabold tracking-tight text-slate-900 max-w-xl leading-[1.15]">
                            GPU Dedicated Servers<br />
                            Built for <span className="text-brandColor">Deep Learning</span>
                        </h2>
                    </div>
                    <div className="max-w-md ">
                        <p className="text-slate-600 font-medium text-[15px] leading-relaxed">
                            Host and fine-tune large models, run real-time inference pipelines, or accelerate rendering using enterprise RTX 4000 series bare metal and vGPU instances.
                        </p>
                    </div>
                </div>

                {/* Cards Container */}
                <div
                    className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10"
                    onMouseLeave={() => setHoveredId(null)}
                >
                    {gpuData.map((server) => {
                        const isActive = hoveredId ? hoveredId === server.id : server.isPopular;

                        return (
                            <div
                                key={server.id}
                                onMouseEnter={() => setHoveredId(server.id)}
                                className={`relative flex flex-col p-6 rounded-2xl transition-all duration-300 overflow-hidden group cursor-pointer ${isActive
                                    ? 'bg-slate-900 border-2 border-brandColor shadow-[0_0_20px_rgba(0,157,217,0.3)]'
                                    : 'bg-slate-50 border border-slate-200 hover:border-brandColor/50 shadow-sm'
                                    }`}
                            >
                                {/* Background Image for Active Card */}
                                {isActive && server.imageSrc && (
                                    <>
                                        <div className="absolute inset-0 z-0">
                                            <Image
                                                src={server.imageSrc}
                                                alt={server.title}
                                                fill
                                                className="object-cover opacity-20 mix-blend-overlay"
                                            />
                                        </div>
                                        <div className="absolute inset-0 bg-gradient-to-b from-[#0B1120]/80 via-[#0B1120]/90 to-[#0B1120] z-0"></div>
                                    </>
                                )}

                                {/* Card Content */}
                                <div className="relative z-10 flex flex-col h-full">


                                    {/* Specs Top Badge */}
                                    <div className="mb-3">
                                        <span className="text-[12px] font-medium text-brandColor tracking-wide">
                                            {server.topBadge}
                                        </span>
                                    </div>

                                    {/* Title */}
                                    <h3 className={`text-[22px] md:text-[26px] font-bold mb-8 transition-colors duration-300 ${isActive ? 'text-white' : 'text-slate-900'}`}>
                                        {server.title}
                                    </h3>

                                    {/* Detailed Specs List */}
                                    <div className="flex flex-col space-y-5 mb-8">
                                        {server.specs.map((spec, i) => (
                                            <div key={i} className="flex items-center space-x-4">
                                                <div className={`p-2 rounded-lg border transition-colors duration-300 ${isActive ? 'bg-slate-800 border-slate-700' : 'bg-slate-50 border-slate-200'}`}>
                                                    {spec.icon}
                                                </div>
                                                <div className="flex flex-col">
                                                    <span className={`text-[14px] font-semibold transition-colors duration-300 ${isActive ? 'text-white' : 'text-slate-900'}`}>{spec.title}</span>
                                                    <span className={`text-[12px] transition-colors duration-300 ${isActive ? 'text-slate-400' : 'text-slate-500'}`}>{spec.subtitle}</span>
                                                </div>
                                            </div>
                                        ))}
                                    </div>

                                    {/* Description */}
                                    <p className={`text-[14px] leading-relaxed mb-8 transition-colors duration-300 ${isActive ? 'text-slate-400' : 'text-slate-600'}`}>
                                        {server.description}
                                    </p>

                                    {/* Action Button */}
                                    <div className="mt-auto pt-4">
                                        <button className={`w-full py-3.5 rounded-xl font-medium flex items-center justify-center transition-all duration-300 ${isActive
                                            ? 'bg-brandColor text-white hover:bg-[#008FCC] shadow-lg'
                                            : 'bg-transparent border border-slate-200 text-slate-700 hover:bg-slate-100'
                                            }`}>
                                            {server.buttonText}
                                            <ArrowRight className="w-4 h-4 ml-2" />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* Footer Features */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16 pt-10 border-t border-slate-200 relative z-10">
                    {features.map((feature, idx) => (
                        <div key={idx} className="flex items-start space-x-4">
                            <div className="mt-1">
                                {feature.icon}
                            </div>
                            <div className="flex flex-col">
                                <h4 className="text-slate-900 text-[15px] font-semibold mb-1">{feature.title}</h4>
                                <p className="text-slate-600 text-[13px]">{feature.subtitle}</p>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};




const Migration = () => {
    return (
        <section className="w-full bg-[#EAF5FA] py-20 lg:py-28 font-sans">
            <div className="max-w-7xl mx-auto px-6">
                <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">

                    {/* Left Column - Image & Floating Badges */}
                    <div className="w-full lg:w-1/2 relative mt-10 lg:mt-0 order-2 lg:order-1">
                        {/* Main Image Container */}
                        <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-sm border border-slate-200/50">
                            <Image
                                src="/image 34.png" // User can drop this image in public
                                alt="Hosting Migration Expert"
                                fill
                                className="object-cover"
                            />
                            {/* Fallback color if image is missing */}
                            <div className="absolute inset-0 bg-slate-200 -z-10"></div>
                        </div>

                        {/* Top Left Floating Badge */}
                        <div className="absolute top-6 -left-4 md:top-8 md:left-4 bg-white rounded-xl p-2 pr-5 flex items-center gap-3 shadow-md border border-slate-100 animate-fade-in-up">
                            <div className="bg-[#023B5A] p-2.5 rounded-lg">
                                <Globe className="w-4 h-4 text-white" strokeWidth={2.5} />
                            </div>
                            <span className="text-[13px] font-bold text-slate-800 tracking-wide">Transfer Your Domain</span>
                        </div>
                    </div>

                    {/* Right Column - Content */}
                    <div className="w-full lg:w-1/2 flex flex-col order-1 lg:order-2">
                        <h2 className="text-2xl md:text-4xl font-bold text-slate-900 leading-[1.15] tracking-tight mb-6">
                            Free Migration, Faster Hosting<br />Zero Downtime
                        </h2>
                        <p className="text-slate-600 text-[15px] leading-relaxed mb-10 max-w-[500px]">
                            Switch to faster, more secure hosting with free migration and zero downtime. Our experts manage your migration end-to-end and fully test it before going live.
                        </p>

                        <div className="flex flex-col mb-12 max-w-[500px]">
                            {[
                                "Zero risk with our 30-day money-back guarantee.",
                                "High performance hosting & advanced security.",
                                "Global data centers & automated backups.",
                                "24/7 Support"
                            ].map((item, index) => (
                                <div key={index} className={`flex items-center gap-4 py-4 ${index !== 3 ? 'border-b border-[#D4E4EE]' : ''}`}>
                                    <div className="flex-shrink-0 w-[22px] h-[22px] rounded bg-[#009DD9] flex items-center justify-center">
                                        <Check className="w-3.5 h-3.5 text-white" strokeWidth={3.5} />
                                    </div>
                                    <span className="text-slate-800 text-[15px] font-medium">{item}</span>
                                </div>
                            ))}
                        </div>


                    </div>

                </div>
            </div>
        </section>
    );
};



export default function HomeClient() {
    return (
        <div>
            <Hero />
            {/* <TrustedBy /> */}
            <Services />
            <Features />
            <Benchmark />
            <Solutions />
            <GPUServers />
            <Migration />
        </div>
    );
}
