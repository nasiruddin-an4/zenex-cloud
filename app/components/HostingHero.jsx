"use client";
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { CheckCircle2, ArrowRight } from 'lucide-react';

const HostingHero = () => {
    return (
        <section className="w-full bg-white py-6 px-4 md:px-8">
            <div className="relative w-full max-w-screen-2xl mx-auto rounded-2xl overflow-hidden min-h-[70vh] flex items-center bg-slate-800">
                {/* Background Image */}
                <div className="absolute inset-0 z-0">
                    <Image
                        src="/image 40.png"
                        alt="Cloud Hosting Servers"
                        fill
                        priority
                        className="object-cover object-right"
                        quality={90}
                    />
                    {/* Gradient overlay to ensure text readability on the left */}
                    <div className="absolute inset-0 bg-gradient-to-r from-[#020813] via-[#020813]/70 to-transparent"></div>
                </div>

                <div className="max-w-screen-2xl mx-auto px-6 md:px-12 w-full relative z-10">
                    <div className="flex flex-col items-start max-w-3xl">

                        {/* Top Badge */}
                        <div className="inline-flex items-center space-x-2 bg-brandColor/10 border border-brandColor/30 rounded px-3 py-1.5 mb-8 backdrop-blur-sm">
                            <CheckCircle2 className="w-4 h-4 text-brandColor" />
                            <span className="text-[12px] md:text-[13px] font-semibold tracking-wide text-brandColor">
                                NVMe Powered Infrastructure • Full Root Access • Deploy in Under 60 Seconds
                            </span>
                        </div>

                        {/* Heading */}
                        <h1 className="text-2xl md:text-3xl lg:text-[44px] font-bold text-white leading-[1.1] mb-6 tracking-tight">
                            Power Your Business with <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-300">
                                Lightning-Fast Cloud Hosting
                            </span>
                        </h1>

                        {/* Subheading */}
                        <p className="text-sm md:text-lg text-slate-300 leading-relaxed mb-10 max-w-xl">
                            Launch high-performance virtual servers with dedicated resources, ultra-fast NVMe storage, enterprise-grade security, and complete control over your environment.
                        </p>

                        {/* Features List */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8 mb-12">
                            {[
                                "Instant Deployment",
                                "Full Root Access",
                                "99.97% Uptime",
                                "24/7 Expert Support"
                            ].map((feature, idx) => (
                                <div key={idx} className="flex items-center space-x-3">
                                    <div className="w-5 h-5 rounded bg-brandColor/20 flex items-center justify-center flex-shrink-0">
                                        <svg className="w-3.5 h-3.5 text-brandColor" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                        </svg>
                                    </div>
                                    <span className="text-slate-200 font-medium text-[15px]">{feature}</span>
                                </div>
                            ))}
                        </div>

                        {/* Action Buttons */}
                        <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-6">
                            <button className="btn-primary w-full sm:w-auto px-8 py-3.5 text-[15px]">
                                Configure Your Server <ArrowRight className="w-4 h-4 ml-2" />
                            </button>
                            <span className="text-slate-400 text-sm hidden sm:block">or</span>
                            <Link href="#" className="w-full sm:w-auto text-center sm:text-left text-white font-medium hover:text-brandColor transition-colors flex items-center justify-center text-[15px]">
                                Compare Plans <ArrowRight className="w-4 h-4 ml-2" />
                            </Link>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default HostingHero;
