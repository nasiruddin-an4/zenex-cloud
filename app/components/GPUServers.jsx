"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import { Cpu, Server, HardDrive, Layers, Box, ShieldCheck, Zap, Lock, Headphones, Star, ArrowRight } from 'lucide-react';

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
        buttonText: "Explore Dedicated",
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
        buttonText: "Explore VM Pro",
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
        buttonText: "Explore Professional",
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
        buttonText: "Explore Professional",
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
            <div className="max-w-screen-2xl mx-auto px-6 md:px-12">

                {/* Header Section */}
                <div className="flex flex-col lg:flex-row justify-between items-start mb-16 gap-6 relative z-10">
                    <div className="flex flex-col">
                        {/* Top Badge */}
                        <div className="inline-flex items-center space-x-2 bg-brandColor/10 border border-brandColor/20 rounded-full px-3 py-1 mb-6 w-max">
                            <div className="w-1.5 h-1.5 rounded-full bg-brandColor"></div>
                            <span className="text-[12px] font-bold tracking-wider text-brandColor">BUILT FOR AI INNOVATION</span>
                        </div>
                        <h2 className="text-3xl md:text-[44px] font-extrabold tracking-tight text-slate-900 max-w-xl leading-[1.15]">
                            GPU Dedicated Servers<br />
                            Built for <span className="text-brandColor">Deep Learning</span>
                        </h2>
                    </div>
                    <div className="max-w-md pt-0 lg:pt-12">
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
                                className={`relative flex flex-col p-6 lg:p-8 rounded-2xl transition-all duration-300 overflow-hidden group cursor-pointer ${isActive
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

export default GPUServers;
