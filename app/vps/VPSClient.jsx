"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { CheckCircle2, ArrowRight, Shield, Check, Zap, Loader2, Server, Cpu, HardDrive, Gauge, Headphones, Code, Database, Globe, Layers } from 'lucide-react';


const VPSHero = () => {
    return (
        <section className="relative w-full overflow-hidden min-h-[70vh] md:min-h-[95vh] flex items-center bg-slate-800 -mt-[75px] pt-[75px]">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/vps_hero_bg.png"
                    alt="Virtual Private Server Environment"
                    fill
                    priority
                    className="object-cover object-right"
                    quality={90}
                />
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#020813] via-[#020813]/85 to-transparent"></div>
            </div>

            <div className="max-w-screen-2xl mx-auto px-6 md:px-12 w-full relative z-10 py-16 md:py-24">
                <div className="flex flex-col items-start max-w-3xl">

                    {/* Top Badge */}
                    <div className="inline-flex items-center space-x-2 bg-brandColor/10 border border-brandColor/30 rounded px-3 py-1.5 mb-8 backdrop-blur-sm animate-fade-in-up">
                        <Shield className="w-4 h-4 text-brandColor" />
                        <span className="text-[12px] md:text-[13px] font-semibold tracking-wide text-brandColor">
                            Dedicated Resources • NVMe SSD • Full Root Access
                        </span>
                    </div>

                    {/* Heading */}
                    <h1 className="text-3xl md:text-4xl lg:text-[52px] font-bold text-white leading-[1.1] mb-6 tracking-tight animate-fade-in-up animation-delay-100">
                        Managed VPS Hosting<br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-brandColor to-brandCyan">
                            Built For Performance
                        </span>
                    </h1>

                    {/* Subheading */}
                    <p className="text-base md:text-lg text-slate-300 leading-relaxed mb-10 max-w-xl animate-fade-in-up animation-delay-200">
                        Deploy powerful virtual private servers with dedicated vCPU, NVMe SSD storage, snapshot backups, and unlimited bandwidth — all managed by our expert team.
                    </p>

                    {/* Features List */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8 mb-12 animate-fade-in-up animation-delay-300">
                        {[
                            "Dedicated vCPU Cores",
                            "NVMe SSD Storage",
                            "Snapshot Backups",
                            "Unlimited Bandwidth"
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
                            Configure Your VPS <ArrowRight className="w-4 h-4 ml-2" />
                        </button>
                        <span className="text-slate-400 text-sm hidden sm:block">or</span>
                        <Link href="#vps-pricing" className="w-full sm:w-auto text-center sm:text-left text-white font-medium hover:text-brandColor transition-colors flex items-center justify-center text-[15px]">
                            Compare Plans <ArrowRight className="w-4 h-4 ml-2" />
                        </Link>
                    </div>

                </div>
            </div>
        </section>
    );
};




const VPSPricing = () => {
    const [plans, setPlans] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('https://local.zenexcloud.com/api/v1/vps')
            .then(res => res.json())
            .then(data => {
                setPlans(data);
                setLoading(false);
            })
            .catch(() => setLoading(false));
    }, []);

    const parseFeatures = (description) => {
        return description.split(',').map(f => f.trim()).filter(Boolean);
    };

    if (loading) {
        return (
            <section id="vps-pricing" className="w-full bg-gray-50 py-20 px-4 md:px-8 font-sans">
                <div className="max-w-screen-2xl mx-auto flex flex-col items-center justify-center min-h-[400px]">
                    <Loader2 className="w-8 h-8 text-brandColor animate-spin mb-4" />
                    <p className="text-slate-500 text-sm font-medium">Loading VPS plans...</p>
                </div>
            </section>
        );
    }

    return (
        <section id="vps-pricing" className="w-full bg-gray-50 py-20 px-4 md:px-8 font-sans">
            <div className="max-w-screen-2xl mx-auto">

                {/* Header Section */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-8 gap-6">
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 leading-tight max-w-xl tracking-tight">
                        Choose The Right VPS<br />For Your Workload
                    </h2>
                    <p className="text-slate-600 font-medium max-w-xs text-[15px] leading-relaxed">
                        Start small and scale resources as your applications grow.
                    </p>
                </div>

                {/* Main Pricing Container */}
                <div className="relative w-full mt-12 mb-12">
                    
                    {/* Main Container */}
                    <div className="relative bg-gradient-to-b from-[#E3F2FA] to-[#BFE4F8] rounded-2xl p-6 pt-16 md:p-10 md:pt-20">
                        
                        {/* Toggle Switch */}
                        <div className="absolute top-6 left-1/2 -translate-x-1/2 bg-white p-1 rounded-sm border border-slate-200 flex items-center shadow-sm z-10">
                            <button className="px-5 py-1.5 bg-[#061E2E] text-white text-[13px] font-medium rounded-sm">Monthly</button>
                            <button className="px-5 py-1.5 bg-transparent text-slate-700 hover:text-slate-900 text-[13px] font-medium rounded-sm transition-colors">Yearly</button>
                            <span className="flex items-center text-brandColor text-[11px] font-bold px-2 py-1 ml-1 bg-[#EBF5FB] rounded-sm">
                                <Zap className="w-3 h-3 mr-1" /> 20% flat
                            </span>
                        </div>

                        {/* Pricing Cards Grid */}
                        <div className="grid grid-cols-1 lg:grid-cols-4 relative z-0 bg-white rounded-xl shadow-sm overflow-hidden">
                            {plans.map((plan, index) => {
                                const isPop = plan.is_popular === 1;
                                const features = parseFeatures(plan.description);

                                return (
                                    <div
                                        key={index}
                                        className={`relative flex flex-col ${isPop ? 'bg-[#061E2E] text-white' : 'bg-transparent text-slate-900'} ${
                                            index !== plans.length - 1 ? 'border-b lg:border-b-0 lg:border-r border-slate-200' : ''
                                        }`}
                                    >
                                        {/* Top Section */}
                                        <div className={`p-8 pb-6 ${isPop ? '' : 'border-b border-slate-100'}`}>
                                            <div className="flex justify-between items-center mb-2">
                                                <h3 className={`text-lg font-bold ${isPop ? 'text-white' : 'text-slate-800'}`}>{plan.name || plan.package_name}</h3>
                                                {isPop && (
                                                    <span className="inline-flex items-center space-x-1 bg-white/10 text-[#8AD9F8] text-[10px] font-bold px-2 py-1 rounded-sm uppercase tracking-wider">
                                                        <Zap className="w-3 h-3" />
                                                        <span>Popular</span>
                                                    </span>
                                                )}
                                            </div>
                                            <div className="flex items-baseline font-bold tracking-tighter">
                                                <span className={`text-lg mr-1 ${isPop ? 'text-[#8AD9F8]' : 'text-slate-500'}`}>$</span>
                                                <span className="text-[40px] leading-none">{plan.price}</span>
                                                <span className={`text-sm font-normal ml-1 ${isPop ? 'text-slate-400' : 'text-slate-500'}`}>/mon</span>
                                            </div>
                                        </div>

                                        {/* Features Section */}
                                        <div className="p-8 pt-6 flex-grow">
                                            <p className={`font-semibold mb-6 ${isPop ? 'text-white' : 'text-slate-900'}`}>Include:</p>
                                            <ul className="space-y-4">
                                                {features.map((feature, fIdx) => (
                                                    <li key={fIdx} className="flex items-center space-x-3">
                                                        <div className={`w-4 h-4 rounded-sm flex items-center justify-center shrink-0 ${isPop ? 'bg-brandColor' : 'bg-[#061E2E]'}`}>
                                                            <Check className="w-3 h-3 text-white" strokeWidth={3} />
                                                        </div>
                                                        <span className={`text-[14px] font-medium ${isPop ? 'text-slate-300' : 'text-slate-700'}`}>
                                                            {feature}
                                                        </span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>

                                        {/* Action Button Section */}
                                        <div className={`p-8 pt-6 mt-auto ${isPop ? '' : 'border-t border-slate-100'}`}>
                                            <a
                                                href={plan.url || "https://clients.zenexcloud.com"}
                                                rel="noopener noreferrer"
                                                className={`flex items-center transition-all duration-300 ${isPop
                                                    ? 'w-[90%] mx-auto py-3 rounded-full bg-brandColor text-white font-semibold justify-center hover:bg-[#008FCC] shadow-[0_4px_14px_0_rgba(0,157,217,0.39)]'
                                                    : 'w-full bg-transparent text-slate-700 font-semibold hover:text-brandColor group justify-start text-sm'
                                                    }`}>
                                                <span>{isPop ? `Launch ${plan.name || plan.package_name}` : 'Configure Server'}</span>
                                                <ArrowRight className={`w-4 h-4 ml-2 transition-transform duration-300 ${!isPop ? 'group-hover:translate-x-1' : ''}`} />
                                            </a>
                                        </div>

                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>

                {/* Footer Button */}
                <div className="flex justify-center mt-8">
                    <button className="px-6 py-2.5 rounded-full border border-slate-300 text-slate-700 font-medium text-sm hover:border-brandColor hover:text-brandColor transition-colors flex items-center">
                        See Detailed Comparison <ArrowRight className="w-4 h-4 ml-2" />
                    </button>
                </div>

            </div>
        </section>
    );
};




const features = [
    {
        icon: Cpu,
        title: "Dedicated vCPU",
        desc: "Guaranteed CPU resources with no sharing or throttling."
    },
    {
        icon: HardDrive,
        title: "NVMe SSD Storage",
        desc: "Enterprise-grade NVMe drives for blazing fast read/write."
    },
    {
        icon: Gauge,
        title: "Unlimited Bandwidth",
        desc: "No data transfer limits — scale without worrying about overages."
    },
    {
        icon: Shield,
        title: "Snapshot Backups",
        desc: "Automated snapshot backups to protect your workloads."
    },
    {
        icon: Server,
        title: "Full Root Access",
        desc: "Complete control over your OS, software, and configurations."
    },
    {
        icon: Headphones,
        title: "24/7 Managed Support",
        desc: "Expert support team available around the clock for any issues."
    }
];

const VPSFeatures = () => {
    return (
        <section className="w-full bg-white py-24 px-4 md:px-8 font-sans">
            <div className="max-w-screen-2xl mx-auto">

                {/* Header */}
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 leading-tight mb-6 tracking-tight">
                        Why Choose Managed VPS?
                    </h2>
                    <p className="text-slate-600 font-medium text-[15px] max-w-3xl mx-auto leading-relaxed">
                        Get the power of a dedicated server with the simplicity of managed hosting. We handle the infrastructure so you can focus on building.
                    </p>
                </div>

                {/* Features Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {features.map((feature, idx) => {
                        const Icon = feature.icon;
                        return (
                            <div key={idx} className="bg-slate-50 rounded-2xl p-8 hover:bg-white hover:shadow-lg hover:shadow-slate-100 border border-transparent hover:border-slate-200 transition-all duration-300 group">
                                <div className="w-14 h-14 rounded-xl bg-brandPurple/10 flex items-center justify-center mb-6 transition-transform duration-300 group-hover:-translate-y-1">
                                    <Icon className="w-7 h-7 text-brandPurple" strokeWidth={1.5} />
                                </div>
                                <h3 className="text-xl font-bold text-slate-900 mb-3">{feature.title}</h3>
                                <p className="text-slate-600 text-[15px] leading-relaxed">{feature.desc}</p>
                            </div>
                        );
                    })}
                </div>

                {/* CTA */}
                <div className="flex justify-center mt-12">
                    <Link href="#vps-pricing" className="btn-primary px-8 py-3.5 text-[15px]">
                        View VPS Plans <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                </div>

            </div>
        </section>
    );
};




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



export default function VPSClient() {
    return (
        <div>
            <VPSHero />
            <VPSPricing />
            <VPSFeatures />
            <VPSUseCases />
        </div>
    );
}
