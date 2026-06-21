"use client";
import React from 'react';
import Link from 'next/link';
import { ArrowRight, Sparkles } from 'lucide-react';

const PricingHero = () => {
    return (
        <section className="relative w-full overflow-hidden bg-gradient-to-b from-[#020813] via-[#061E2E] to-[#0a2940] -mt-[75px] pt-[75px]">
            {/* Decorative elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-brandColor/5 rounded-full blur-[120px]"></div>
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-brandColor/5 rounded-full blur-[120px]"></div>
            </div>

            <div className="max-w-screen-2xl mx-auto px-6 md:px-12 w-full relative z-10 py-20 md:py-28">
                <div className="flex flex-col items-center text-center">

                    {/* Top Badge */}
                    <div className="inline-flex items-center space-x-2 bg-white/5 border border-white/10 rounded-full px-4 py-2 mb-8 backdrop-blur-sm animate-fade-in-up">
                        <Sparkles className="w-4 h-4 text-brandColor" />
                        <span className="text-[12px] md:text-[13px] font-semibold tracking-wide text-slate-300">
                            Transparent pricing • No hidden fees
                        </span>
                    </div>

                    {/* Heading */}
                    <h1 className="text-3xl md:text-4xl lg:text-[56px] font-bold text-white leading-[1.1] mb-6 tracking-tight animate-fade-in-up animation-delay-100 max-w-3xl">
                        All Plans &
                        <span className="text-brandColor"> Pricing</span>
                    </h1>

                    {/* Subheading */}
                    <p className="text-base md:text-lg text-slate-400 leading-relaxed mb-10 max-w-2xl animate-fade-in-up animation-delay-200">
                        Find the perfect plan for your needs. From shared web hosting to high-performance VPS and scalable object storage — everything at competitive rates.
                    </p>

                    {/* Quick Links */}
                    <div className="flex flex-wrap justify-center gap-3 animate-fade-in-up animation-delay-300">
                        <Link href="/hosting" className="px-5 py-2.5 rounded-full bg-brandColor/10 border border-brandColor/30 text-brandColor text-sm font-semibold hover:bg-brandColor/20 transition-all">
                            Web Hosting
                        </Link>
                        <Link href="/vps" className="px-5 py-2.5 rounded-full bg-brandColor/10 border border-brandColor/30 text-brandColor text-sm font-semibold hover:bg-brandColor/20 transition-all">
                            VPS Hosting
                        </Link>
                        <Link href="/s3-bucket" className="px-5 py-2.5 rounded-full bg-brandColor/10 border border-brandColor/30 text-brandColor text-sm font-semibold hover:bg-brandColor/20 transition-all">
                            S3 Storage
                        </Link>
                    </div>
                </div>
            </div>

        </section>
    );
};

export default PricingHero;
