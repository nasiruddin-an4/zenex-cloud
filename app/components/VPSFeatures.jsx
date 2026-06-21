"use client";
import React from 'react';
import { Server, Cpu, HardDrive, Gauge, Shield, Headphones, ArrowRight } from 'lucide-react';
import Link from 'next/link';

const features = [
    {
        icon: Cpu,
        title: "Dedicated vCPU",
        desc: "Guaranteed CPU resources with no sharing or throttling."
    },
    {
        icon: HardDrive,
        title: "NVMe SSD Storage",
        desc: "Enterprise-grade NVMe drives for blazing fast read/write."
    },
    {
        icon: Gauge,
        title: "Unlimited Bandwidth",
        desc: "No data transfer limits — scale without worrying about overages."
    },
    {
        icon: Shield,
        title: "Snapshot Backups",
        desc: "Automated snapshot backups to protect your workloads."
    },
    {
        icon: Server,
        title: "Full Root Access",
        desc: "Complete control over your OS, software, and configurations."
    },
    {
        icon: Headphones,
        title: "24/7 Managed Support",
        desc: "Expert support team available around the clock for any issues."
    }
];

const VPSFeatures = () => {
    return (
        <section className="w-full bg-white py-24 px-4 md:px-8 font-sans">
            <div className="max-w-screen-2xl mx-auto">

                {/* Header */}
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 leading-tight mb-6 tracking-tight">
                        Why Choose Managed VPS?
                    </h2>
                    <p className="text-slate-600 font-medium text-[15px] max-w-3xl mx-auto leading-relaxed">
                        Get the power of a dedicated server with the simplicity of managed hosting. We handle the infrastructure so you can focus on building.
                    </p>
                </div>

                {/* Features Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {features.map((feature, idx) => {
                        const Icon = feature.icon;
                        return (
                            <div key={idx} className="bg-slate-50 rounded-2xl p-8 hover:bg-white hover:shadow-lg hover:shadow-slate-100 border border-transparent hover:border-slate-200 transition-all duration-300 group">
                                <div className="w-14 h-14 rounded-xl bg-brandPurple/10 flex items-center justify-center mb-6 transition-transform duration-300 group-hover:-translate-y-1">
                                    <Icon className="w-7 h-7 text-brandPurple" strokeWidth={1.5} />
                                </div>
                                <h3 className="text-xl font-bold text-slate-900 mb-3">{feature.title}</h3>
                                <p className="text-slate-600 text-[15px] leading-relaxed">{feature.desc}</p>
                            </div>
                        );
                    })}
                </div>

                {/* CTA */}
                <div className="flex justify-center mt-12">
                    <Link href="#vps-pricing" className="btn-primary px-8 py-3.5 text-[15px]">
                        View VPS Plans <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                </div>

            </div>
        </section>
    );
};

export default VPSFeatures;
