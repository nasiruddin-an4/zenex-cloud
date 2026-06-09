"use client";
import React from 'react';
import { Server, Cloud, Check, ArrowRight } from 'lucide-react';
import Link from 'next/link';

const HostingComparison = () => {
    return (
        <section className="w-full bg-slate-900 py-24 px-4 md:px-8 font-sans">
            <div className="max-w-screen-2xl mx-auto">

                {/* Header */}
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-6 tracking-tight">
                        Stop Sharing Resources <br />
                        Start Scaling Independently
                    </h2>
                    <p className="text-slate-400 font-medium text-sm md:text-base max-w-3xl mx-auto leading-relaxed">
                        Shared hosting works for simple websites. VPS hosting gives your applications dedicated resources, predictable performance, and complete control.
                    </p>
                </div>

                {/* Cards Container */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-16">

                    {/* Shared Hosting Card */}
                    <div className="bg-brandColor/10 border border-brandColor/50 rounded-2xl p-8 md:p-10">
                        <div className="flex items-center space-x-4 mb-10">
                            <div className="bg-white p-2 rounded-lg">
                                <Server className="w-6 h-6 text-slate-800" />
                            </div>
                            <h3 className="text-2xl font-bold text-white">Shared Hosting</h3>
                        </div>

                        <ul className="space-y-6">
                            {[
                                "Shared CPU Resources",
                                "Limited Customization",
                                "Performance Fluctuations",
                                "Restricted Access"
                            ].map((feature, idx) => (
                                <li key={idx} className="flex items-center space-x-3 pb-6 border-b border-slate-700/50 last:border-0 last:pb-0">
                                    <div className="w-5 h-5 rounded bg-blue-500/20 flex items-center justify-center shrink-0">
                                        <Check className="w-3.5 h-3.5 text-blue-400" strokeWidth={3} />
                                    </div>
                                    <span className="text-slate-300 font-medium">{feature}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* VPS Hosting Card */}
                    <div className="bg-brandColor/10 border border-brandColor/50 rounded-2xl p-8 md:p-10 relative overflow-hidden">
                        {/* Soft glow background */}
                        <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl pointer-events-none"></div>

                        <div className="relative z-10">
                            <div className="flex items-center space-x-4 mb-10">
                                <div className="bg-white p-2 rounded-lg">
                                    <Cloud className="w-6 h-6 text-blue-600" />
                                </div>
                                <h3 className="text-2xl font-bold text-white">ZenexCloud VPS</h3>
                            </div>

                            <ul className="space-y-6">
                                {[
                                    "Dedicated Resources",
                                    "Full Root Access",
                                    "Custom Configurations",
                                    "Consistent Performance"
                                ].map((feature, idx) => (
                                    <li key={idx} className="flex items-center space-x-3 pb-6 border-b border-blue-800/50 last:border-0 last:pb-0">
                                        <div className="w-5 h-5 rounded bg-blue-500 flex items-center justify-center shrink-0 shadow-[0_0_10px_rgba(59,130,246,0.5)]">
                                            <Check className="w-3.5 h-3.5 text-white" strokeWidth={3} />
                                        </div>
                                        <span className="text-white font-medium">{feature}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                </div>

                {/* Footer Action */}
                <div className="flex justify-center">
                    <Link href="#" className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-8 rounded-full transition-colors duration-300 flex items-center shadow-lg shadow-blue-500/20">
                        See VPS Benefits <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                </div>

            </div>
        </section>
    );
};

export default HostingComparison;
