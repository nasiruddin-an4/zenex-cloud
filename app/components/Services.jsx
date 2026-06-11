import React from 'react';
import Link from 'next/link';
import { Globe, Server, Database, Cpu, ArrowUpRight } from 'lucide-react';
import Image from 'next/image';

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
        image: "/image 34.png"
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
        image: "/image 38.png"
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
        image: "/Frame 2085663933.png"
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
        image: "/image 40.png"
    }
];

const Services = () => {
    return (
        <section className="w-full bg-white py-24 font-sans text-slate-900 relative z-10">
            <div className="max-w-screen-2xl mx-auto px-6">
                {/* Header Section */}
                <div className="flex flex-col lg:flex-row justify-between items-start mb-24 gap-8">
                    <div>
                        <span className="inline-block px-3 py-1 rounded bg-[#EAF5FA] text-[#009DD9] text-[11px] font-bold tracking-widest uppercase mb-6">
                            Services
                        </span>
                        <h2 className="text-4xl md:text-5xl lg:text-[56px] font-bold tracking-tight text-slate-900 leading-[1.1]">
                            Infrastructure and<br />Cloud Services
                        </h2>
                    </div>
                    <div className="lg:max-w-md lg:pt-16">
                        <p className="text-slate-700 font-semibold text-base md:text-lg leading-relaxed">
                            Reliable hosting, virtual servers, object storage, and AI-ready compute resources — all from a single platform.
                        </p>
                    </div>
                </div>

                {/* Cards List */}
                <div className="flex flex-col w-full relative">
                    {servicesData.map((service, index) => (
                        <Link
                            href={service.link}
                            key={service.id}
                            className="block sticky bg-white border-t border-slate-200 py-10 md:py-16 transition-all duration-300 group"
                            style={{
                                top: `calc(100px + ${index * 20}px)`,
                                zIndex: index + 1
                            }}
                        >
                            <div className="flex flex-col md:flex-row gap-8 lg:gap-16 items-center transition-transform duration-300 group-hover:translate-x-2">
                                {/* Left: Image */}
                                <div className="w-full md:w-[30%] shrink-0 relative rounded-2xl overflow-hidden aspect-[4/2.5] bg-slate-100">
                                    <Image
                                        src={service.image}
                                        alt={service.title}
                                        fill
                                        className="object-cover"
                                    />
                                </div>

                                {/* Right: Content */}
                                <div className="w-full md:w-[55%] flex flex-col justify-center relative h-full">
                                    <div className="flex justify-between items-start mb-6">
                                        <div className="flex items-center gap-4">
                                            <div className="w-10 h-10 rounded-full bg-[#EAF5FA] flex items-center justify-center text-brandColor">
                                                <service.icon className="w-5 h-5" />
                                            </div>
                                            <div className="flex items-center gap-3">
                                                <h3 className="text-3xl lg:text-4xl font-bold tracking-tight text-slate-900">{service.title}</h3>
                                                {service.badge && (
                                                    <span className="px-2.5 py-1 rounded bg-[#6B859E] text-white text-[11px] font-bold tracking-wide uppercase">
                                                        {service.badge}
                                                    </span>
                                                )}
                                            </div>
                                        </div>
                                        <div className="text-[#009DD9] transition-all duration-300 p-2 group-hover:-translate-y-1.5 group-hover:text-[#023B5A]">
                                            <ArrowUpRight className="w-7 h-7 stroke-[2]" />
                                        </div>
                                    </div>

                                    <p className="text-slate-800 font-medium text-base md:text-lg leading-relaxed mb-8 max-w-2xl">
                                        {service.description}
                                    </p>

                                    <div className="flex justify-between items-end mt-auto">
                                        <div className="flex flex-wrap gap-3 max-w-[85%]">
                                            {service.features.map((feature, idx) => (
                                                <span key={idx} className="bg-slate-100 text-slate-600 px-4 py-1.5 rounded-full text-[13px] font-semibold whitespace-nowrap">
                                                    {feature}
                                                </span>
                                            ))}
                                        </div>
                                        <div className="text-slate-300 font-medium text-base mb-1.5">
                                            0{index + 1}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default Services;
