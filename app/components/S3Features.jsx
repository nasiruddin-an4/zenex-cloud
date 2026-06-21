"use client";
import React from 'react';
import { ShieldCheck, Zap, Globe, Lock, RefreshCw, Server, ArrowRight } from 'lucide-react';
import Link from 'next/link';

const features = [
    {
        icon: Zap,
        title: "S3-Compatible API",
        desc: "Drop-in replacement for Amazon S3. Use your existing tools and SDKs without code changes."
    },
    {
        icon: ShieldCheck,
        title: "99.99% Uptime",
        desc: "Enterprise-grade availability backed by our SLA guarantee."
    },
    {
        icon: Server,
        title: "Redundant Storage",
        desc: "Your data is replicated across multiple nodes for maximum durability."
    },
    {
        icon: Lock,
        title: "Secure Access",
        desc: "Fine-grained access keys and permissions to control who sees your data."
    },
    {
        icon: Globe,
        title: "CDN-Ready",
        desc: "Serve static assets globally with fast edge delivery."
    },
    {
        icon: RefreshCw,
        title: "Easy Integration",
        desc: "Works seamlessly with popular frameworks, CMS platforms, and backup tools."
    }
];

const S3Features = () => {
    return (
        <section className="w-full bg-white py-24 px-4 md:px-8 font-sans">
            <div className="max-w-screen-2xl mx-auto">

                {/* Header */}
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 leading-tight mb-2 tracking-tight">
                        Enterprise Storage, Simple Pricing
                    </h2>
                    <p className="text-slate-600 font-medium text-[15px] max-w-3xl mx-auto leading-relaxed">
                        All the features you need for reliable, secure, and high-performance object storage — without the complexity.
                    </p>
                </div>

                {/* Features Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {features.map((feature, idx) => {
                        const Icon = feature.icon;
                        return (
                            <div key={idx} className="bg-slate-50 rounded-2xl p-8 hover:bg-white hover:shadow-lg hover:shadow-slate-100 border border-transparent hover:border-slate-200 transition-all duration-300 group">
                                <div className="w-14 h-14 rounded-xl bg-emerald-50 flex items-center justify-center mb-6 transition-transform duration-300 group-hover:-translate-y-1">
                                    <Icon className="w-7 h-7 text-emerald-600" strokeWidth={1.5} />
                                </div>
                                <h3 className="text-xl font-bold text-slate-900 mb-3">{feature.title}</h3>
                                <p className="text-slate-600 text-[15px] leading-relaxed">{feature.desc}</p>
                            </div>
                        );
                    })}
                </div>

                {/* CTA */}
                <div className="flex justify-center mt-12">
                    <Link href="#bucket-pricing" className="btn-primary px-8 py-3.5 text-[15px]">
                        View Storage Plans <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                </div>

            </div>
        </section>
    );
};

export default S3Features;
