import React from 'react';
import Image from 'next/image';
import { Check, Globe, ArrowRightLeft, ArrowRight } from 'lucide-react';

const Migration = () => {
    return (
        <section className="w-full bg-[#EAF5FA] py-20 lg:py-28 font-sans">
            <div className="max-w-screen-2xl mx-auto px-6 md:px-12">
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

                        {/* Bottom Right Floating Badge */}
                        <div className="absolute -bottom-5 right-4 md:bottom-8 md:-right-4 bg-white rounded-xl p-2 pl-5 flex items-center gap-3 shadow-md border border-slate-100 animate-fade-in-up animation-delay-200">
                            <span className="text-[13px] font-bold text-slate-800 tracking-wide">Migrate Your Site</span>
                            <div className="bg-[#023B5A] p-2.5 rounded-lg">
                                <ArrowRightLeft className="w-4 h-4 text-white" strokeWidth={2.5} />
                            </div>
                        </div>
                    </div>

                    {/* Right Column - Content */}
                    <div className="w-full lg:w-1/2 flex flex-col order-1 lg:order-2">
                        <h2 className="text-3xl md:text-[44px] font-bold text-slate-900 leading-[1.15] tracking-tight mb-6">
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

                        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
                            <button className="bg-gradient-to-r from-[#009DD9] to-[#01B5F8] text-white px-6 py-3 rounded-full font-bold text-[14px] flex items-center gap-2 hover:shadow-[0_0_20px_rgba(0,157,217,0.3)] transition-all group">
                                Start Hosting Option
                                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </button>
                            <span className="text-slate-500 text-sm font-medium">or</span>
                            <button className="text-slate-700 font-bold text-[14px] flex items-center gap-2 hover:text-[#009DD9] transition-colors group">
                                Chat with Our Expert
                                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </button>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Migration;
