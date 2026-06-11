import React from 'react';
import Image from 'next/image';

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
        <section className="w-full bg-slate-900 py-10 relative z-10 overflow-hidden">
            <div className="max-w-screen-2xl mx-auto px-6 md:px-12">



                <p className="text-center text-gray-400 text-xl mb-6 font-normal tracking-normal">
                    Trusted by <span className="text-white">startups</span>, <span className="text-white">enterprises</span>, and <span className="text-white">global teams</span> to build scalable systems
                </p>

                {/* Top Subtle Line */}
                <div className="w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>

                {/* Logos Marquee Container */}
                <div className="w-full relative overflow-hidden opacity-60 hover:opacity-100 transition-opacity duration-500 py-8">
                    {/* Left Fade Overlay */}
                    <div className="absolute left-0 top-0 bottom-0 w-24 md:w-48 bg-gradient-to-r from-slate-900 to-transparent z-10 pointer-events-none"></div>

                    {/* Right Fade Overlay */}
                    <div className="absolute right-0 top-0 bottom-0 w-24 md:w-48 bg-gradient-to-l from-slate-900 to-transparent z-10 pointer-events-none"></div>

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

export default TrustedBy;
