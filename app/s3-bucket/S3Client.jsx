"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { CheckCircle2, ArrowRight, Database, Check, Loader2, ShieldCheck, Zap, Globe, Lock, RefreshCw, Server } from 'lucide-react';


const S3Hero = () => {
    return (
        <section className="relative w-full overflow-hidden min-h-[70vh] md:min-h-[95vh] flex items-center bg-slate-800 -mt-[75px] pt-[75px]">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/s3_hero_bg.png"
                    alt="Cloud Object Storage Vault"
                    fill
                    priority
                    className="object-cover object-center"
                    quality={90}
                />
                <div className="absolute inset-0 bg-gradient-to-r from-[#020813] via-[#020813]/90 to-[#020813]/40"></div>
            </div>

            <div className="max-w-screen-2xl mx-auto px-6 md:px-12 w-full relative z-10 py-16 md:py-24">
                <div className="flex flex-col items-start max-w-3xl">

                    {/* Top Badge */}
                    <div className="inline-flex items-center space-x-2 bg-brandColor/10 border border-brandColor/30 rounded px-3 py-1.5 mb-8 backdrop-blur-sm animate-fade-in-up">
                        <Database className="w-4 h-4 text-brandColor" />
                        <span className="text-[12px] md:text-[13px] font-semibold tracking-wide text-brandColor">
                            S3-Compatible API • 99.99% Uptime • Redundant Storage
                        </span>
                    </div>

                    {/* Heading */}
                    <h1 className="text-3xl md:text-4xl lg:text-[52px] font-bold text-white leading-[1.1] mb-6 tracking-tight animate-fade-in-up animation-delay-100">
                        S3-Compatible<br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-brandColor to-brandCyan">
                            Object Storage
                        </span>
                    </h1>

                    {/* Subheading */}
                    <p className="text-base md:text-lg text-slate-300 leading-relaxed mb-10 max-w-xl animate-fade-in-up animation-delay-200">
                        Store, manage, and serve your files with enterprise-grade S3-compatible cloud storage. Built for high availability with redundant storage across our infrastructure.
                    </p>

                    {/* Features List */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8 mb-12 animate-fade-in-up animation-delay-300">
                        {[
                            "S3-Compatible API",
                            "99.99% Uptime SLA",
                            "Redundant Storage",
                            "Secure Access Keys"
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
                        <button className="btn-primary w-full sm:w-auto px-8 py-3.5 text-[15px]">
                            Create Your Bucket <ArrowRight className="w-4 h-4 ml-2" />
                        </button>
                        <span className="text-slate-400 text-sm hidden sm:block">or</span>
                        <Link href="#bucket-pricing" className="w-full sm:w-auto text-center sm:text-left text-white font-medium hover:text-brandColor transition-colors flex items-center justify-center text-[15px]">
                            View Pricing <ArrowRight className="w-4 h-4 ml-2" />
                        </Link>
                    </div>

                </div>
            </div>
        </section>
    );
};




const S3Pricing = () => {
    const [plans, setPlans] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('https://local.zenexcloud.com/api/v1/bucket')
            .then(res => res.json())
            .then(data => {
                setPlans(data);
                setLoading(false);
            })
            .catch(() => setLoading(false));
    }, []);

    const parseFeatures = (description) => {
        // The bucket description is HTML, extract text from li elements
        const tempDiv = document.createElement('div');
        tempDiv.innerHTML = description;
        const items = tempDiv.querySelectorAll('li');
        return Array.from(items).map(li => li.textContent.trim());
    };

    if (loading) {
        return (
            <section id="bucket-pricing" className="w-full bg-gray-50 py-20 px-4 md:px-8 font-sans">
                <div className="max-w-screen-2xl mx-auto flex flex-col items-center justify-center min-h-[400px]">
                    <Loader2 className="w-8 h-8 text-brandColor animate-spin mb-4" />
                    <p className="text-slate-500 text-sm font-medium">Loading storage plans...</p>
                </div>
            </section>
        );
    }

    return (
        <section id="bucket-pricing" className="w-full bg-gray-50 py-20 px-4">
            <div className="container mx-auto">

                {/* Header Section */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-8 gap-4">
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 leading-tight max-w-2xl tracking-tight">
                        Simple, Transparent <span className="text-brandColor">Storage Pricing</span>
                    </h2>
                    <p className="text-slate-600 font-medium max-w-xs text-[15px] leading-relaxed">
                        Pay for what you need. Scale your storage as your data grows.
                    </p>
                </div>

                {/* Main Pricing Container */}
                <div className="relative w-full rounded-xl overflow-hidden bg-[#EBF5FB] p-6 sm:p-10 md:p-14 mb-12">

                    {/* Pricing Cards Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-3 bg-white rounded-2xl overflow-hidden border border-slate-100">
                        {plans.map((plan, index) => {
                            const isPop = plan.is_popular === 1;
                            const features = parseFeatures(plan.description);

                            return (
                                <div
                                    key={index}
                                    className={`relative flex flex-col p-8 md:p-10 transition-colors duration-300 ${isPop ? 'bg-[#061E2E] text-white' : 'bg-white text-slate-900 border-r last:border-r-0 border-slate-100'
                                        }`}
                                >
                                    {/* Popular Badge */}
                                    {isPop && (
                                        <div className="absolute top-8 right-8">
                                            <span className="inline-flex items-center space-x-1 bg-brandColor/10 text-brandColor text-[10px] font-bold px-2 py-1 rounded-sm uppercase tracking-wider">
                                                <svg className="w-3 h-3" viewBox="0 0 24 24" fill="currentColor">
                                                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                                                </svg>
                                                <span>Popular</span>
                                            </span>
                                        </div>
                                    )}

                                    {/* Plan Name & Price */}
                                    <div className="mb-8">
                                        <h3 className={`text-2xl font-bold mb-3 ${isPop ? 'text-white' : 'text-slate-900'}`}>{plan.name || plan.package_name}</h3>
                                        <div className="flex items-baseline text-[42px] font-bold tracking-tighter">
                                            <span className={`text-2xl mr-1 font-medium ${isPop ? 'text-brandColor' : 'text-slate-500'}`}>$</span>
                                            {plan.price}
                                            <span className={`text-base font-normal ml-1 ${isPop ? 'text-slate-300' : 'text-slate-500'}`}>/mon</span>
                                        </div>
                                    </div>

                                    <div className={`w-full h-px mb-8 ${isPop ? 'bg-slate-700/50' : 'bg-slate-100'}`}></div>

                                    {/* Features */}
                                    <div className="flex-grow">
                                        <p className={`font-semibold mb-6 ${isPop ? 'text-white' : 'text-slate-900'}`}>Features:</p>
                                        <ul className="space-y-4 mb-10">
                                            {features.map((feature, fIdx) => (
                                                <li key={fIdx} className="flex items-center space-x-3">
                                                    <div className={`w-4 h-4 rounded-full flex items-center justify-center shrink-0 ${isPop ? 'bg-brandColor' : 'bg-brandColor'}`}>
                                                        <Check className="w-2.5 h-2.5 text-white" strokeWidth={3} />
                                                    </div>
                                                    <span className={`text-[15px] font-medium ${isPop ? 'text-slate-200' : 'text-slate-700'}`}>
                                                        {feature}
                                                    </span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    {/* Action Button */}
                                    <div className="mt-auto w-full">
                                        {!isPop && <div className="w-full h-px bg-slate-200 mb-3"></div>}
                                        <a
                                            href={plan.url || "https://clients.zenexcloud.com"}
                                            rel="noopener noreferrer"
                                            className={`py-3.5 rounded-full font-medium flex items-center transition-all duration-300 text-[14px] ${isPop
                                                ? 'w-[80%] lg:w-[70%] mr-auto bg-brandColor text-white hover:bg-[#008FCC] shadow-[0_4px_14px_0_rgba(0,157,217,0.39)] justify-center'
                                                : 'w-full bg-transparent text-slate-700 hover:text-brandColor group justify-start px-0'
                                                }`}>
                                            <span className="flex items-center">
                                                Create Bucket
                                                <ArrowRight className={`w-4 h-4 ml-2 transition-transform duration-300 ${!isPop ? 'group-hover:translate-x-1' : ''}`} />
                                            </span>
                                        </a>
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



export default function S3Client() {
    return (
        <div>
            <S3Hero />
            <S3Pricing />
            <S3Features />
        </div>
    );
}
