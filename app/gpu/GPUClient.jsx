"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { CheckCircle2, ArrowRight, Cpu, Server, HardDrive, Network, Box, ShieldCheck, Zap, Layers, Headphones, Check, Terminal, Clock } from 'lucide-react';


const GPUHero = () => {
    return (
        <section className="relative w-full overflow-hidden min-h-[70vh] md:min-h-[95vh] flex items-center bg-slate-800 -mt-[75px] pt-[75px]">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/gpu_hero_bg.png"
                    alt="GPU Server Infrastructure"
                    fill
                    priority
                    className="object-cover object-right"
                    quality={90}
                />
                {/* Gradient overlay to ensure text readability on the left */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#020813] via-[#020813]/80 to-transparent"></div>
            </div>

            <div className="max-w-screen-2xl mx-auto px-6 md:px-12 w-full relative z-10 py-16 md:py-24">
                <div className="flex flex-col items-start max-w-3xl">

                    {/* Top Badge */}
                    <div className="inline-flex items-center space-x-2 bg-brandColor/10 border border-brandColor/30 rounded px-3 py-1.5 mb-8 backdrop-blur-sm animate-fade-in-up">
                        <CheckCircle2 className="w-4 h-4 text-brandColor" />
                        <span className="text-[12px] md:text-[13px] font-semibold tracking-wide text-brandColor">
                            Enterprise-Grade GPU Infrastructure
                        </span>
                    </div>

                    {/* Heading */}
                    <h1 className="text-3xl md:text-4xl lg:text-[52px] font-bold text-white leading-[1.1] mb-6 tracking-tight animate-fade-in-up animation-delay-100">
                        Enterprise-Grade GPU Infrastructure - <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-300">
                            Startups
                        </span>
                    </h1>

                    {/* Subheading */}
                    <p className="text-base md:text-lg text-slate-300 leading-relaxed mb-10 max-w-xl animate-fade-in-up animation-delay-200">
                        Deploy powerful GPU instances designed for startups, researchers, and growing businesses. From AI training to 3D rendering, our GPU servers deliver unmatched performance, security, and scalability.
                    </p>

                    {/* Features List */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8 mb-12 animate-fade-in-up animation-delay-300">
                        {[
                            "Dedicated NVIDIA GPUs",
                            "High Performance NVMe",
                            "Unmatched Scalability",
                            "Enterprise Security"
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
                    <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-6 animate-fade-in-up animation-delay-400 w-full sm:w-auto">
                        <Link href="#pricing" className="btn-primary w-full sm:w-auto px-8 py-3.5 text-[15px]">
                            View GPU Plans <ArrowRight className="w-4 h-4 ml-2" />
                        </Link>
                    </div>

                </div>
            </div>
        </section>
    );
};




const gpuPlans = [
    {
        id: "vm-basic",
        isPopular: false,
        name: "GPU VM Basic",
        price: "$99",
        badge: "Coming Soon",
        features: [
            { icon: <Cpu className="w-4 h-4 text-slate-400" />, label: "vCPU:", value: "8 Core" },
            { icon: <Server className="w-4 h-4 text-slate-400" />, label: "RAM:", value: "16 GB" },
            { icon: <HardDrive className="w-4 h-4 text-slate-400" />, label: "Storage:", value: "500 GB NVMe SSD" },
            { icon: <Layers className="w-4 h-4 text-slate-400" />, label: "GPU Share:", value: "1/8 GPU (vGPU)" },
            { icon: <Network className="w-4 h-4 text-slate-400" />, label: "Network:", value: "1 Gbps" },
            { icon: <Box className="w-4 h-4 text-slate-400" />, label: "Use Case:", value: "Dev, light AI, inference" },
            { icon: <ShieldCheck className="w-4 h-4 text-slate-400" />, label: "OS:", value: "Linux / Windows" }
        ],
        buttonText: "Coming Soon"
    },
    {
        id: "professional",
        isPopular: true,
        name: "GPU Professional",
        price: "$179",
        badge: "Coming Soon",
        features: [
            { icon: <Cpu className="w-4 h-4 text-brandColor" />, label: "vCPU:", value: "12 Core" },
            { icon: <Server className="w-4 h-4 text-brandColor" />, label: "RAM:", value: "20 GB" },
            { icon: <HardDrive className="w-4 h-4 text-brandColor" />, label: "Storage:", value: "800 GB NVMe SSD" },
            { icon: <Layers className="w-4 h-4 text-brandColor" />, label: "GPU Share:", value: "1/4 GPU (vGPU)" },
            { icon: <Network className="w-4 h-4 text-brandColor" />, label: "Network:", value: "1-2 Gbps" },
            { icon: <Box className="w-4 h-4 text-brandColor" />, label: "Use Case:", value: "Mid AI workload, Stable Diffusion" },
            { icon: <Zap className="w-4 h-4 text-brandColor" />, label: "Snapshots:", value: "Weekly included" }
        ],
        buttonText: "Coming Soon"
    },
    {
        id: "vm-pro",
        isPopular: false,
        name: "GPU VM Pro",
        price: "$299",
        badge: "Coming Soon",
        features: [
            { icon: <Cpu className="w-4 h-4 text-slate-400" />, label: "vCPU:", value: "16 Core" },
            { icon: <Server className="w-4 h-4 text-slate-400" />, label: "RAM:", value: "32 GB" },
            { icon: <HardDrive className="w-4 h-4 text-slate-400" />, label: "Storage:", value: "1 TB NVMe SSD" },
            { icon: <Layers className="w-4 h-4 text-slate-400" />, label: "GPU Share:", value: "1/2 GPU (vGPU)" },
            { icon: <Network className="w-4 h-4 text-slate-400" />, label: "Network:", value: "2 Gbps" },
            { icon: <Box className="w-4 h-4 text-slate-400" />, label: "Use Case:", value: "LLM fine-tune (7B-13B)" },
            { icon: <Zap className="w-4 h-4 text-slate-400" />, label: "Snapshots:", value: "Daily" },
            { icon: <Headphones className="w-4 h-4 text-slate-400" />, label: "Priority Support:", value: "Yes" }
        ],
        buttonText: "Coming Soon"
    },
    {
        id: "dedicated",
        isPopular: false,
        name: "GPU Dedicated",
        price: "$599",
        badge: "Coming Soon",
        features: [
            { icon: <Cpu className="w-4 h-4 text-slate-400" />, label: "vCPU:", value: "24 Core" },
            { icon: <Server className="w-4 h-4 text-slate-400" />, label: "RAM:", value: "64 GB" },
            { icon: <HardDrive className="w-4 h-4 text-slate-400" />, label: "Storage:", value: "2 TB NVMe SSD" },
            { icon: <Layers className="w-4 h-4 text-slate-400" />, label: "GPU:", value: "1x Dedicated GPU" },
            { icon: <Network className="w-4 h-4 text-slate-400" />, label: "Network:", value: "5 Gbps" },
            { icon: <Box className="w-4 h-4 text-slate-400" />, label: "Use Case:", value: "Large LLM training" },
            { icon: <Zap className="w-4 h-4 text-slate-400" />, label: "Backup:", value: "Included" },
            { icon: <Headphones className="w-4 h-4 text-slate-400" />, label: "Priority Support:", value: "Yes" }
        ],
        buttonText: "Coming Soon"
    }
];

const GPUPricing = () => {
    return (
        <section id="pricing" className="w-full bg-slate-50 py-20 lg:py-28 font-sans">
            <div className="max-w-screen-2xl mx-auto px-6 md:px-12">
                
                {/* Header Section */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <span className="inline-block px-3 py-1 rounded bg-[#EAF5FA] text-[#009DD9] text-[11px] font-bold tracking-widest uppercase mb-6">
                        PRICING
                    </span>
                    <h2 className="text-3xl md:text-[44px] font-extrabold tracking-tight text-slate-900 leading-[1.15] mb-6">
                        GPU Dedicated Server Plans
                    </h2>
                    <p className="text-slate-600 font-medium text-[16px] leading-relaxed">
                        Powerful GPU performance, built on a foundation of intelligent cost-efficiency.
                    </p>
                </div>

                {/* Pricing Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
                    {gpuPlans.map((plan) => (
                        <div 
                            key={plan.id} 
                            className={`relative flex flex-col bg-white rounded-2xl p-8 transition-all duration-300 ${
                                plan.isPopular 
                                ? 'border-2 border-brandColor shadow-xl shadow-brandColor/10 transform xl:-translate-y-4' 
                                : 'border border-slate-200 shadow-sm hover:shadow-md'
                            }`}
                        >
                            {plan.isPopular && (
                                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
                                    <span className="bg-brandColor text-white text-[11px] font-bold tracking-wider uppercase px-4 py-1.5 rounded-full shadow-sm">
                                        MOST POPULAR
                                    </span>
                                </div>
                            )}

                            {plan.badge && (
                                <div className="mb-4">
                                    <span className="inline-block px-2.5 py-1 rounded bg-slate-100 text-slate-600 text-[11px] font-bold tracking-widest uppercase">
                                        {plan.badge}
                                    </span>
                                </div>
                            )}

                            <h3 className="text-xl font-bold text-slate-900 mb-2">{plan.name}</h3>
                            <div className="flex items-baseline mb-6 border-b border-slate-100 pb-6">
                                <span className="text-sm font-semibold text-slate-500 mr-1">US</span>
                                <span className="text-4xl font-extrabold text-slate-900">{plan.price}</span>
                                <span className="text-slate-500 font-medium ml-1">/mo</span>
                            </div>

                            <div className="flex-1">
                                <ul className="space-y-4 mb-8">
                                    {plan.features.map((feature, idx) => (
                                        <li key={idx} className="flex items-start">
                                            <div className="mt-0.5 mr-3 shrink-0">
                                                {feature.icon}
                                            </div>
                                            <div>
                                                <span className="text-sm font-semibold text-slate-700 mr-1">{feature.label}</span>
                                                <span className="text-sm text-slate-600">{feature.value}</span>
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <button className={`w-full py-3.5 rounded-xl font-semibold flex items-center justify-center transition-all duration-300 ${
                                plan.isPopular 
                                ? 'bg-brandColor hover:bg-[#008FCC] text-white shadow-lg shadow-brandColor/20' 
                                : 'bg-slate-100 hover:bg-slate-200 text-slate-800'
                            }`}>
                                {plan.buttonText} <ArrowRight className="w-4 h-4 ml-2" />
                            </button>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};




const gpuFeaturesData = [
    {
        id: "developer-ready",
        icon: <Terminal className="w-6 h-6 text-brandColor" />,
        badge: "Developer Ready",
        title: "Root Access",
        description: "ZenexCloud provides full root access, giving you complete control and flexibility to configure, optimize, and manage your server exactly the way your projects demand."
    },
    {
        id: "secure-isolated",
        icon: <ShieldCheck className="w-6 h-6 text-brandColor" />,
        badge: "Secure & Isolated",
        title: "Linux / Windows",
        description: "ZenexCloud allows you to deploy your server with Linux or Windows, ensuring seamless compatibility and optimized performance for your applications and workloads."
    },
    {
        id: "instant-provisioning",
        icon: <Zap className="w-6 h-6 text-brandColor" />,
        badge: "Instant Provisioning",
        title: "Scalability",
        description: "ZenexCloud infrastructure is built for scale — effortlessly handle traffic spikes and growing workloads while maintaining stability, speed, and reliability."
    },
    {
        id: "dedicated-gpu",
        icon: <Cpu className="w-6 h-6 text-brandColor" />,
        badge: "Root Access",
        title: "Dedicated GPU",
        description: "ZenexCloud delivers powerful dedicated RTX 4000 Series GPU servers, enabling you to optimize AI, machine learning, rendering, and compute-intensive tasks with maximum efficiency."
    },
    {
        id: "uptime",
        icon: <Clock className="w-6 h-6 text-brandColor" />,
        badge: "Root Access",
        title: "Uptime Guarantee",
        description: "ZenexCloud guarantees 99.9% uptime, minimizing downtime and ensuring your applications remain consistently available and dependable."
    },
    {
        id: "support",
        icon: <Headphones className="w-6 h-6 text-brandColor" />,
        badge: "Root Access",
        title: "24/7 Customer Support",
        description: "ZenexCloud offers round-the-clock expert support via live chat, phone, and ticketing — so assistance is always available whenever you need it."
    }
];

const whyChooseData = [
    { title: "Secure", description: "Enterprise-grade encryption and compliance built-in" },
    { title: "Fast", description: "Lightning-speed performance powered by global SSD infrastructure" },
    { title: "Scalable", description: "Effortlessly grow from startup to enterprise without limits" },
    { title: "Support", description: "24/7 expert support that actually has your back" }
];

const GPUFeatures = () => {
    return (
        <section className="w-full bg-white py-24 font-sans text-slate-900">
            <div className="max-w-screen-2xl mx-auto px-6 md:px-12">
                
                {/* Header Section */}
                <div className="text-center max-w-3xl mx-auto mb-20">
                    <span className="inline-block px-3 py-1 rounded bg-[#EAF5FA] text-[#009DD9] text-[11px] font-bold tracking-widest uppercase mb-6">
                        FEATURES
                    </span>
                    <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-slate-900 leading-[1.1] mb-6">
                        GPU Server Features
                    </h2>
                    <p className="text-slate-600 font-medium text-lg leading-relaxed">
                        High-performance dedicated server infrastructure with full administrative control and scalable resources, designed to ensure superior speed, advanced security, and dependable reliability.
                    </p>
                </div>

                {/* Features Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12 mb-24">
                    {gpuFeaturesData.map((feature) => (
                        <div key={feature.id} className="flex flex-col p-8 rounded-2xl bg-slate-50 border border-slate-100 hover:shadow-xl hover:border-brandColor/20 transition-all duration-300 group">
                            <div className="w-12 h-12 rounded-xl bg-white shadow-sm flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                                {feature.icon}
                            </div>
                            <div className="mb-4">
                                <span className="text-[11px] font-bold tracking-wider text-brandColor uppercase">
                                    {feature.badge}
                                </span>
                                <h3 className="text-xl font-bold text-slate-900 mt-1">{feature.title}</h3>
                            </div>
                            <p className="text-slate-600 leading-relaxed text-[15px]">
                                {feature.description}
                            </p>
                        </div>
                    ))}
                </div>

                {/* Why Choose ZenexCloud */}
                <div className="bg-slate-900 rounded-3xl p-10 md:p-16 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-brandColor opacity-10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
                    
                    <div className="relative z-10">
                        <div className="mb-12">
                            <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight mb-4">
                                Why Choose ZenexCloud?
                            </h2>
                            <div className="w-20 h-1 bg-brandColor rounded-full"></div>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                            {whyChooseData.map((item, idx) => (
                                <div key={idx} className="flex flex-col">
                                    <div className="flex items-center space-x-3 mb-3">
                                        <CheckCircle2 className="w-5 h-5 text-brandColor" />
                                        <h4 className="text-white font-semibold text-lg">{item.title}</h4>
                                    </div>
                                    <p className="text-slate-400 text-sm leading-relaxed pl-8">
                                        {item.description}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};



export default function GPUClient() {
    return (
        <div>
            <GPUHero />
            <GPUPricing />
            <GPUFeatures />
        </div>
    );
}
