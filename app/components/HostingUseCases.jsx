"use client";
import React from 'react';
import Link from 'next/link';
import { Code, Building2, ShoppingCart, Landmark, ArrowRight } from 'lucide-react';

const useCases = [
    {
        icon: Code,
        title: "Developers",
        desc: "Build, test, deploy, and scale applications faster.",
        link: "Explore Developer Hosting",
        href: "#"
    },
    {
        icon: Building2,
        title: "Agencies",
        desc: "Manage multiple client projects from one platform.",
        link: "Explore Agency Solutions",
        href: "#"
    },
    {
        icon: ShoppingCart,
        title: "Online Stores",
        desc: "Optimize performance for ecommerce growth.",
        link: "Explore Ecommerce VPS",
        href: "#"
    },
    {
        icon: Landmark,
        title: "Enterprise",
        desc: "Run mission-critical infrastructure with confidence.",
        link: "Explore Enterprise VPS",
        href: "#"
    }
];

const HostingUseCases = () => {
    return (
        <section className="w-full bg-white py-24 px-4 md:px-8">
            <div className="max-w-screen-2xl mx-auto">

                {/* Header */}
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 leading-tight mb-6 tracking-tight">
                        Infrastructure That Adapts<br />to Your Goals.
                    </h2>
                    <p className="text-slate-600 font-medium text-[15px] max-w-3xl mx-auto leading-relaxed">
                        Whether you're building applications, managing clients, running stores, or operating business-critical systems, ZenexCloud provides infrastructure designed for your workload.
                    </p>
                </div>

                {/* Grid Container */}
                {/* Using a background color with a 1px gap creates perfect clean inner borders */}
                <div className="grid grid-cols-1 md:grid-cols-2 bg-slate-200 gap-px border border-slate-200 rounded-2xl overflow-hidden shadow-sm">

                    {useCases.map((useCase, index) => {
                        const Icon = useCase.icon;
                        return (
                            <div key={index} className="bg-white p-10 md:p-14 flex flex-col items-center text-center group hover:bg-slate-50 transition-colors duration-300">

                                {/* Icon */}
                                <div className="w-16 h-16 rounded-2xl bg-sky-100 flex items-center justify-center mb-6 transition-transform duration-300 group-hover:-translate-y-1">
                                    <Icon className="w-8 h-8 text-[#033A5E]" strokeWidth={1.5} />
                                </div>

                                {/* Content */}
                                <h3 className="text-2xl font-bold text-[#033A5E] mb-4">
                                    {useCase.title}
                                </h3>
                                <p className="text-slate-600 text-[15px] mb-8 leading-relaxed">
                                    {useCase.desc}
                                </p>

                                {/* Link */}
                                <Link
                                    href={useCase.href}
                                    className="mt-auto inline-flex items-center text-sm font-bold text-[#033A5E] hover:text-brandColor transition-colors"
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

export default HostingUseCases;
