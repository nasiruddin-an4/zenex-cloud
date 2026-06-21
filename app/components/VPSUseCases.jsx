"use client";
import React from 'react';
import { Code, Database, Globe, Layers, ArrowRight } from 'lucide-react';
import Link from 'next/link';

const useCases = [
    {
        icon: Code,
        title: "App Development",
        desc: "Build and deploy web apps, APIs, and microservices with full stack control.",
        link: "Explore Dev VPS",
        href: "#vps-pricing"
    },
    {
        icon: Database,
        title: "Database Hosting",
        desc: "Run MySQL, PostgreSQL, MongoDB with dedicated NVMe performance.",
        link: "Explore DB Solutions",
        href: "#vps-pricing"
    },
    {
        icon: Globe,
        title: "Web Applications",
        desc: "Host WordPress, Node.js, Python apps with guaranteed uptime.",
        link: "Explore Web VPS",
        href: "#vps-pricing"
    },
    {
        icon: Layers,
        title: "DevOps & CI/CD",
        desc: "Run containers, pipelines, and automated deployments at scale.",
        link: "Explore DevOps VPS",
        href: "#vps-pricing"
    }
];

const VPSUseCases = () => {
    return (
        <section className="w-full bg-slate-900 py-24 px-4 md:px-8">
            <div className="max-w-screen-2xl mx-auto">

                {/* Header */}
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-6 tracking-tight">
                        Built For Every<br />Workload
                    </h2>
                    <p className="text-slate-400 font-medium text-[15px] max-w-3xl mx-auto leading-relaxed">
                        From simple web apps to complex database clusters, our VPS infrastructure scales to match your needs.
                    </p>
                </div>

                {/* Grid Container */}
                <div className="grid grid-cols-1 md:grid-cols-2 bg-slate-800 gap-px border border-slate-700 rounded-2xl overflow-hidden">

                    {useCases.map((useCase, index) => {
                        const Icon = useCase.icon;
                        return (
                            <div key={index} className="bg-slate-900 p-10 md:p-14 flex flex-col items-center text-center group hover:bg-slate-800/80 transition-colors duration-300">

                                {/* Icon */}
                                <div className="w-16 h-16 rounded-2xl bg-brandPurple/10 border border-brandPurple/20 flex items-center justify-center mb-6 transition-transform duration-300 group-hover:-translate-y-1">
                                    <Icon className="w-8 h-8 text-brandPurple" strokeWidth={1.5} />
                                </div>

                                {/* Content */}
                                <h3 className="text-2xl font-bold text-white mb-4">
                                    {useCase.title}
                                </h3>
                                <p className="text-slate-400 text-[15px] mb-8 leading-relaxed">
                                    {useCase.desc}
                                </p>

                                {/* Link */}
                                <Link
                                    href={useCase.href}
                                    className="mt-auto inline-flex items-center text-sm font-bold text-brandPurple hover:text-brandCyan transition-colors"
                                >
                                    {useCase.link} <ArrowRight className="w-4 h-4 ml-1.5 transition-transform group-hover:translate-x-1" />
                                </Link>

                            </div>
                        );
                    })}

                </div>

            </div>
        </section>
    );
};

export default VPSUseCases;
