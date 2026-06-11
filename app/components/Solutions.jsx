"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Code, Store, LayoutDashboard, Building2, Check, ArrowRight } from 'lucide-react';

const solutionsData = [
    {
        id: "developers",
        tabLabel: "Developer",
        title: "Developers",
        icon: Code,
        description: "Deploy applications with full root access, SSH connectivity, Git workflows, Docker support, and developer-friendly infrastructure.",
        features: ["SSH Access", "Git Integration", "Full Root Access", "NVMe Performance"],
        linkText: "Explore Developer Hosting",
        link: "#",
        imageSrc: "/Web-Developers-in-the-World-1.avif"
    },
    {
        id: "ecommerce",
        tabLabel: "Ecommerce",
        title: "Ecommerce",
        icon: Store,
        description: "Build and scale your online store with high-performance infrastructure, built-in security, and seamless caching for fast checkouts.",
        features: ["WooCommerce Ready", "Magento Optimized", "Free SSL Certificates", "DDoS Protection"],
        linkText: "Explore E-Commerce Hosting",
        link: "#",
        imageSrc: "/E_commerce_and_What_are_its_Applications_2_d2eb0d4402.jpg"
    },
    {
        id: "wordpress",
        tabLabel: "Online Stores",
        title: "Online Stores",
        icon: LayoutDashboard,
        description: "Launch lightning-fast WordPress sites with one-click installation, automated updates, and server-level caching configured out of the box.",
        features: ["1-Click Install", "Automated Backups", "LiteSpeed Cache", "Staging Environment"],
        linkText: "Explore WordPress Hosting",
        link: "#",
        imageSrc: "/wp.png"
    },
    {
        id: "enterprise",
        tabLabel: "Enterprise",
        title: "Enterprise",
        icon: Building2,
        description: "Custom-architected infrastructure designed for high availability, compliance, and massive scalability to support your mission-critical workloads.",
        features: ["Dedicated Account Manager", "Custom SLAs", "High Availability Setup", "Advanced Load Balancing"],
        linkText: "Explore Enterprise Solutions",
        link: "#",
        imageSrc: "/enterprise-in-business--1200x900.png"
    }
];

const Solutions = () => {
    const [activeTab, setActiveTab] = useState("developers");

    return (
        <section className="w-full bg-[#EAF5FA] py-20 lg:py-28 font-sans overflow-hidden relative">
            <div className="max-w-screen-2xl mx-auto px-6 md:px-12 relative z-10">

                {/* Header Section */}
                <div className="flex flex-col lg:flex-row justify-between items-center mb-10 gap-4">
                    <h2 className="text-2xl md:text-4xl 2xl:text-5xl font-bold tracking-tight text-slate-900 2xl:max-w-lg leading-[1.1]">
                        Solutions Tailored To How You Build
                    </h2>

                    {/* Tabs */}
                    <div className="flex flex-wrap items-center gap-2 lg:gap-3">
                        {solutionsData.map((solution) => {
                            const isActive = activeTab === solution.id;
                            return (
                                <button
                                    key={solution.id}
                                    onClick={() => setActiveTab(solution.id)}
                                    className={`group flex items-center gap-2 px-5 py-2 rounded-full text-[13px] font-semibold transition-all duration-300 border ${isActive
                                        ? 'bg-[#005B82] text-white border-[#005B82]'
                                        : 'bg-transparent text-slate-600 border-[#C1D6E2] hover:border-[#005B82] hover:text-[#005B82]'
                                        }`}
                                >
                                    <solution.icon className={`w-4 h-4 ${isActive ? 'text-white' : 'text-slate-500 group-hover:text-[#005B82]'}`} />
                                    {solution.tabLabel}
                                </button>
                            );
                        })}
                    </div>
                </div>

                {/* Main Content Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center relative">

                    {/* Left Column: Graphic */}
                    <div className="w-full relative min-h-[300px] lg:min-h-[480px] rounded-2xl overflow-hidden shadow-sm">
                        {solutionsData.map((solution) => (
                            <div
                                key={solution.id}
                                className={`absolute inset-0 transition-opacity duration-500 ease-in-out ${activeTab === solution.id ? 'opacity-100 z-20' : 'opacity-0 z-10'
                                    }`}
                            >
                                <Image
                                    src={solution.imageSrc}
                                    alt={solution.title}
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        ))}
                    </div>

                    {/* Right Column: Content */}
                    <div className="w-full flex flex-col relative z-20 pl-0 lg:pl-6">
                        {solutionsData.map((solution) => {
                            const isActive = activeTab === solution.id;
                            if (!isActive) return null;

                            return (
                                <div key={solution.id} className="flex flex-col animate-fadeIn">
                                    <span className="inline-block px-2.5 py-1 rounded bg-[#DCECF5] text-[#009DD9] text-[10px] font-bold tracking-widest uppercase mb-5 w-max">
                                        PERFORMANCE RESULT
                                    </span>
                                    <h3 className="text-2xl lg:text-3xl font-bold text-slate-900 mb-4">{solution.title}</h3>

                                    <p className="text-slate-700 text-[15px] leading-relaxed mb-8 font-medium">
                                        {solution.description}
                                    </p>

                                    <ul className="space-y-4 mb-10">
                                        {solution.features.map((feature, idx) => (
                                            <li key={idx} className="flex items-center gap-3 border-b border-[#D4E4EE] pb-4 last:border-0 last:pb-0">
                                                <div className="w-[18px] h-[18px] rounded flex items-center justify-center bg-[#005B82] shrink-0">
                                                    <Check className="w-3 h-3 text-white" strokeWidth={4} />
                                                </div>
                                                <span className="text-[14px] font-medium text-slate-800">{feature}</span>
                                            </li>
                                        ))}
                                    </ul>

                                    <div>
                                        <Link
                                            href={solution.link || "#"}
                                            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full border border-[#A7C5D8] text-[13px] font-bold text-slate-700 hover:border-[#005B82] hover:text-[#005B82] transition-colors"
                                        >
                                            {solution.linkText}
                                            <ArrowRight className="w-4 h-4" />
                                        </Link>
                                    </div>
                                </div>
                            );
                        })}
                    </div>

                </div>

            </div>
        </section>
    );
};

export default Solutions;
