"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Code, Store, LayoutDashboard, Building2, Check, ArrowRight } from 'lucide-react';

const solutionsData = [
    {
        id: "developers",
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
        title: "E-Commerce",
        icon: Store,
        description: "Build and scale your online store with high-performance infrastructure, built-in security, and seamless caching for fast checkouts.",
        features: ["WooCommerce Ready", "Magento Optimized", "Free SSL Certificates", "DDoS Protection"],
        linkText: "Explore E-Commerce Hosting",
        link: "#",
        imageSrc: "/E_commerce_and_What_are_its_Applications_2_d2eb0d4402.jpg"
    },
    {
        id: "wordpress",
        title: "WordPress",
        icon: LayoutDashboard, // WordPress logo could be custom SVG, using LayoutDashboard as fallback
        description: "Launch lightning-fast WordPress sites with one-click installation, automated updates, and server-level caching configured out of the box.",
        features: ["1-Click Install", "Automated Backups", "LiteSpeed Cache", "Staging Environment"],
        linkText: "Explore WordPress Hosting",
        link: "#",
        imageSrc: "/wp.png"
    },
    {
        id: "enterprise",
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
    // Note: We'll just hardcode the first one as active for now to match the design perfectly,
    // but this state is ready if you want to make it fully interactive!
    const [activeTab, setActiveTab] = useState("developers");

    return (
        <section className="w-full bg-[#EAF5FA] py-20 lg:py-28 font-sans overflow-hidden relative">
            <div className="max-w-screen-2xl mx-auto px-6 md:px-12 relative z-10">

                {/* Header Section */}
                <div className="flex flex-col lg:flex-row justify-between items-start mb-16 gap-8">
                    <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900 max-w-lg leading-tight">
                        Solutions Tailored To How You Build
                    </h2>
                    <p className="text-slate-800 font-medium text-[15px] lg:text-base max-w-lg leading-relaxed lg:mt-4">
                        Whether you're launching your first website, scaling an online store, managing client projects, or running enterprise workloads, ZenexCloud provides infrastructure designed for your specific needs.
                    </p>
                </div>

                {/* Main Content Grid */}
                <div className="flex flex-col lg:flex-row gap-6 relative">

                    {/* Left Column: Tabs */}
                    <div className="w-full lg:w-[380px] shrink-0 flex flex-col space-y-3 relative z-20">
                        {solutionsData.map((solution) => {
                            const isActive = activeTab === solution.id;

                            if (isActive) {
                                // Active Card
                                return (
                                    <div key={solution.id} className="bg-white rounded-xl shadow-sm border border-slate-200 p-6 flex flex-col relative">
                                        <div className="flex items-center gap-3 mb-4">
                                            <div className="w-10 h-10 rounded-lg bg-[#EAF5FA] flex items-center justify-center text-[#023B5A]">
                                                <solution.icon className="w-5 h-5 stroke-[2]" />
                                            </div>
                                            <h3 className="text-xl font-bold text-slate-900">{solution.title}</h3>
                                        </div>

                                        {solution.description && (
                                            <p className="text-slate-700 text-sm leading-relaxed mb-6 font-medium">
                                                {solution.description}
                                            </p>
                                        )}

                                        {solution.features && solution.features.length > 0 && (
                                            <ul className="space-y-4 mb-6">
                                                {solution.features.map((feature, idx) => (
                                                    <li key={idx} className="flex items-center gap-3 border-b border-slate-100 pb-3 last:border-0 last:pb-0">
                                                        <div className="w-[18px] h-[18px] rounded flex items-center justify-center bg-[#023B5A] shrink-0">
                                                            <Check className="w-3 h-3 text-white" strokeWidth={4} />
                                                        </div>
                                                        <span className="text-sm font-medium text-slate-800">{feature}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        )}

                                        {solution.linkText && (
                                            <Link
                                                href={solution.link || "#"}
                                                className="text-sm font-bold text-[#023B5A] flex items-center gap-1.5 hover:text-[#009DD9] transition-colors group/link mt-auto"
                                            >
                                                {solution.linkText}
                                                <ArrowRight className="w-4 h-4 transition-transform group-hover/link:translate-x-1" />
                                            </Link>
                                        )}


                                    </div>
                                );
                            }

                            // Inactive Cards
                            return (
                                <button
                                    key={solution.id}
                                    onClick={() => setActiveTab(solution.id)}
                                    className="w-full bg-white rounded-xl border border-slate-200 p-4 flex items-center justify-between hover:border-[#009DD9] transition-colors group"
                                >
                                    <div className="flex items-center gap-3">
                                        <div className="w-8 h-8 rounded bg-slate-50 flex items-center justify-center text-slate-500 group-hover:text-[#009DD9] transition-colors">
                                            <solution.icon className="w-4 h-4 stroke-[2]" />
                                        </div>
                                        <h3 className="text-[17px] font-bold text-slate-900">{solution.title}</h3>
                                    </div>
                                    <ArrowRight className="w-4 h-4 text-[#8AD9F8] group-hover:text-[#009DD9] group-hover:translate-x-1 transition-all" />
                                </button>
                            );
                        })}
                    </div>

                    {/* Right Column: Graphic */}
                    <div className="w-full flex-grow relative min-h-[400px] lg:min-h-0 bg-white rounded-2xl shadow-sm border border-slate-200 p-3 lg:p-4 overflow-hidden z-10">
                        <div className="w-full h-full rounded-xl bg-[#021A26] overflow-hidden relative flex items-center justify-center">

                            {/* Active Image Layering */}
                            <div className="absolute inset-0 z-10 bg-slate-200">
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
                        </div>
                    </div>

                </div>

            </div>
        </section>
    );
};

export default Solutions;
