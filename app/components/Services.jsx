import React from 'react';
import Link from 'next/link';
import { Globe, Server, Database, Cpu, Check, ArrowRight } from 'lucide-react';

const servicesData = [
    {
        id: "hosting",
        title: "Hosting",
        icon: Globe,
        description: "Launch websites and business applications with optimized hosting powered by NVMe storage, LiteSpeed technology, enterprise-grade security, and automated backups.",
        features: [
            "cPanel Hosting",
            "Wordpress Optimized",
            "Node.js Support",
            "Mysql Database"
        ],
        link: "#",
        badge: null,
        gradientClass: "bg-gradient-to-bl from-[#b5dbfc] via-white via-40% to-white"
    },
    {
        id: "vps",
        title: "VPS",
        icon: Server,
        description: "Deploy Linux or Windows virtual servers with full root access, guaranteed resources, high-performance NVMe storage, and instant scalability.",
        features: [
            "Linux VPS",
            "Windows VPS",
            "NVMe Storage",
            "Full Root Access"
        ],
        link: "#",
        badge: null,
        gradientClass: "bg-gradient-to-br from-[#b5dbfc] via-white via-40% to-white"
    },
    {
        id: "s3",
        title: "S3 Bucket",
        icon: Database,
        description: "Store, manage, and deliver files at scale using S3-compatible object storage built for backups, applications, media delivery, and enterprise workloads.",
        features: [
            "S3 Compatible",
            "CDN Ready",
            "API Access",
            "Daily Backup"
        ],
        link: "#",
        badge: null,
        gradientClass: "bg-gradient-to-tl from-[#b5dbfc] via-white via-40% to-white"
    },
    {
        id: "gpu",
        title: "GPU Server",
        icon: Cpu,
        description: "Accelerate machine learning, AI model training, rendering, simulations, and compute-intensive workloads using dedicated NVIDIA GPU infrastructure.",
        features: [
            "NVIDIA GPU",
            "AI Training Ready",
            "CUDA Support",
            "High Performance"
        ],
        link: "#",
        badge: "Coming Soon",
        gradientClass: "bg-gradient-to-tr from-[#b5dbfc] via-white via-40% to-white"
    }
];

const Services = () => {
    return (
        <section className="w-full bg-[#EAF5FA] py-20 lg:py-28 font-sans text-slate-900">
            <div className="max-w-screen-2xl mx-auto px-6 md:px-12">

                {/* Header Section */}
                <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-16 gap-8">
                    <h2 className="text-4xl md:text-5xl font-bold tracking-tight max-w-md">
                        Infrastructure and Cloud Services
                    </h2>
                    <p className="text-slate-800 font-medium text-sm md:text-base max-w-sm leading-relaxed">
                        Reliable hosting, virtual servers, object storage, and AI-ready compute resources — all from a single platform.
                    </p>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
                    {servicesData.map((service) => (
                        <div
                            key={service.id}
                            className="relative w-full rounded-xl overflow-hidden bg-white shadow border border-slate-50 p-8 md:p-10 flex flex-col h-full group transition-shadow hover:shadow-lg"
                        >
                            {/* Dynamic Background Gradient */}
                            <div className={`absolute inset-0 ${service.gradientClass} opacity-100 z-0 pointer-events-none`}></div>

                            {/* Content */}
                            <div className="relative z-10 flex-grow flex flex-col">
                                {/* Icon and Title */}
                                <div className="flex items-center gap-4 mb-6">
                                    <div className="w-10 h-10 rounded-lg bg-[#EAF5FA] flex items-center justify-center text-[#023B5A]">
                                        <service.icon className="w-5 h-5 stroke-[2]" />
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <h3 className="text-2xl md:text-3xl font-bold tracking-tight text-slate-900">{service.title}</h3>
                                        {service.badge && (
                                            <span className="px-2.5 py-1 rounded bg-[#DDF1F8] text-[#023B5A] text-[11px] font-bold tracking-wide uppercase">
                                                {service.badge}
                                            </span>
                                        )}
                                    </div>
                                </div>

                                {/* Description */}
                                <p className="text-slate-800 text-[15px] leading-relaxed mb-10 font-medium">
                                    {service.description}
                                </p>

                                {/* Spacer to push features and link to bottom */}
                                <div className="mt-auto">
                                    {/* Features List */}
                                    <ul className="space-y-4 mb-8">
                                        {service.features.map((feature, idx) => (
                                            <li key={idx} className="flex items-center gap-3 border-b border-slate-100 pb-4 last:border-0 last:pb-0">
                                                <div className="w-[18px] h-[18px] rounded flex items-center justify-center bg-[#023B5A] shrink-0">
                                                    <Check className="w-3 h-3 text-white" strokeWidth={4} />
                                                </div>
                                                <span className="text-[15px] font-medium text-slate-800">{feature}</span>
                                            </li>
                                        ))}
                                    </ul>

                                    {/* Link */}
                                    <div className="flex justify-end mt-4">
                                        <Link
                                            href={service.link}
                                            className="text-sm font-bold text-[#023B5A] flex items-center gap-1.5 hover:text-[#009DD9] transition-colors group/link"
                                        >
                                            Explore Plans
                                            <ArrowRight className="w-4 h-4 transition-transform group-hover/link:translate-x-1" />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default Services;
