"use client";
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

const features = [
    {
        title: "Full Root Access",
        desc: "Complete control over your server environment and software stack."
    },
    {
        title: "Instant Provisioning",
        desc: "Deploy production-ready servers in under 60 seconds."
    },
    {
        title: "Snapshot Backups",
        desc: "Protect workloads with automated recovery points."
    },
    {
        title: "NVMe Storage",
        desc: "Faster storage performance for applications and databases."
    },
    {
        title: "Dedicated Resources",
        desc: "No noisy neighbors. No shared limitations."
    },
    {
        title: "API Ready",
        desc: "Automate deployments and infrastructure management."
    }
];

const HostingFeatures = () => {
    return (
        <section className="w-full bg-sky-50/50 py-24 px-4 md:px-8 font-sans">
            <div className="max-w-screen-2xl mx-auto">
                
                {/* Header Row */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-6">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 leading-[1.1] tracking-tight max-w-xl">
                        Everything You Need To<br />Build, Deploy & Scale.
                    </h2>
                    <Link href="#" className="inline-flex items-center px-6 py-2.5 rounded-full border border-slate-300 text-slate-700 font-medium text-sm hover:border-brandColor hover:text-brandColor transition-colors bg-transparent">
                        Explore Infrastructure <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                </div>

                {/* Content Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-8">
                    
                    {/* Left: Features List */}
                    <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100 flex flex-col h-full">
                        <div className="flex-grow flex flex-col justify-between">
                            {features.map((feature, idx) => (
                                <div key={idx} className="pb-6 border-b border-slate-100 last:border-0 last:pb-0 pt-6 first:pt-0">
                                    <h3 className="text-lg font-bold text-slate-900 mb-2">{feature.title}</h3>
                                    <p className="text-sm text-slate-600 leading-relaxed">{feature.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right: Graphic */}
                    <div className="bg-[#061C2C] rounded-2xl overflow-hidden relative min-h-[400px] lg:min-h-full flex items-center justify-center">
                        <Image 
                            src="/image 34.png" 
                            alt="Cloud Infrastructure" 
                            fill
                            className="object-contain p-8"
                        />
                        {/* If the image doesn't exist or doesn't have the Z background, this CSS acts as a fallback/enhancement */}
                        <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_center,rgba(0,157,217,0.15)_0%,rgba(0,0,0,0)_70%)]"></div>
                    </div>

                </div>

            </div>
        </section>
    );
};

export default HostingFeatures;
