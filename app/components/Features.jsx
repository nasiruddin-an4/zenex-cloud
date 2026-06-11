import React from 'react';
import { Database, ShieldCheck, Globe, Network, Headset, HandCoins } from 'lucide-react';

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
            <div className="max-w-screen-2xl mx-auto px-6 md:px-12">

                {/* Header */}
                <div className="flex flex-col items-center text-center mb-16">
                    <span className="text-[#009DD9] text-[11px] font-bold tracking-widest uppercase mb-4">
                        WHY CHOOSE US
                    </span>
                    <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-slate-900 mb-6">
                        Infrastructure Designed<br className="hidden md:block" /> For Reliability
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
                            className="bg-[#E6EFF3] p-10 md:p-14 flex flex-col items-center text-center group hover:bg-[#F0F6F9] transition-colors duration-300"
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

export default Features;
