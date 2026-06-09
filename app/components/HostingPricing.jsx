"use client";
import React, { useState } from 'react';
import { Check, ArrowRight, Zap } from 'lucide-react';

const pricingPlans = [
    {
        name: "ZenVM1",
        monthlyPrice: 4.99,
        yearlyPrice: 3.99,
        features: [
            "1 vCPU",
            "4GB RAM",
            "60GB NVMe Storage",
            "Unlimited Bandwidth",
            "USA Datacenter"
        ],
        buttonText: "Configure Server",
        isPopular: false
    },
    {
        name: "ZenVM2",
        monthlyPrice: 6.49,
        yearlyPrice: 5.19,
        features: [
            "2 vCPU",
            "8GB RAM",
            "120GB NVMe Storage",
            "Unlimited Bandwidth",
            "Snapshot Backups"
        ],
        buttonText: "Launch ZenVM2",
        isPopular: true
    },
    {
        name: "ZenVM3",
        monthlyPrice: 9.99,
        yearlyPrice: 7.99,
        features: [
            "4 vCPU",
            "16GB RAM",
            "200GB NVMe Storage",
            "Unlimited Bandwidth",
            "2 More Add-ones"
        ],
        buttonText: "Configure Server",
        isPopular: false
    },
    {
        name: "ZenVM 4",
        monthlyPrice: 19.99,
        yearlyPrice: 15.99,
        features: [
            "8 vCPU core",
            "32GB RAM",
            "420GB NVMe Storage",
            "Unlimited Bandwidth",
            "2 More Add-ones"
        ],
        buttonText: "Configure Server",
        isPopular: false
    }
];

const HostingPricing = () => {
    const [isYearly, setIsYearly] = useState(false);

    return (
        <section className="w-full bg-gray-50 py-20 px-4 md:px-8 font-sans">
            <div className="max-w-screen-2xl mx-auto">

                {/* Header Section */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-6">
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 leading-tight max-w-xl tracking-tight">
                        Choose The Right VPS<br />For Your Workload
                    </h2>
                    <p className="text-slate-600 font-medium max-w-xs text-[15px] leading-relaxed">
                        Start small and scale resources as your applications grow.
                    </p>
                </div>

                {/* Main Pricing Container */}
                <div className="relative w-full rounded-xl overflow-hidden bg-gradient-to-b from-[#EBF5FB] via-[#D5EEF9] to-[#60CCFA] p-6 sm:p-10 md:p-14 mb-12">

                    {/* Toggle */}
                    <div className="flex justify-center mb-12">
                        <div className="bg-white p-1.5 rounded-full inline-flex items-center shadow-sm relative">
                            <button
                                onClick={() => setIsYearly(false)}
                                className={`relative z-10 px-6 py-2.5 rounded-full text-sm font-semibold transition-colors duration-300 ${!isYearly ? 'bg-[#032A46] text-white' : 'text-slate-600 hover:text-slate-900'}`}
                            >
                                Monthly
                            </button>
                            <button
                                onClick={() => setIsYearly(true)}
                                className={`relative z-10 px-6 py-2.5 rounded-full text-sm font-semibold flex items-center transition-colors duration-300 ${isYearly ? 'bg-[#032A46] text-white' : 'text-slate-600 hover:text-slate-900'}`}
                            >
                                Yearly
                                <span className={`ml-2 px-2 py-0.5 rounded-full text-[11px] flex items-center ${isYearly ? 'bg-white/20 text-white' : 'bg-[#EBF5FB] text-brandColor'}`}>
                                    <Zap className="w-3 h-3 mr-1" />
                                    20% flat
                                </span>
                            </button>
                        </div>
                    </div>

                    {/* Pricing Cards Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 bg-white rounded-2xl overflow-hidden border border-slate-100">
                        {pricingPlans.map((plan, index) => {
                            const isPop = plan.isPopular;

                            return (
                                <div
                                    key={index}
                                    className={`relative flex flex-col p-8 md:p-10 transition-colors duration-300 ${isPop ? 'bg-[#061E2E] text-white' : 'bg-white text-slate-900 border-r last:border-r-0 border-slate-100'
                                        }`}
                                >
                                    {/* Popular Badge */}
                                    {isPop && (
                                        <div className="absolute top-8 right-8">
                                            <span className="inline-flex items-center space-x-1 bg-[#EBF5FB] text-brandColor text-[10px] font-bold px-2 py-1 rounded-sm uppercase tracking-wider">
                                                <svg className="w-3 h-3" viewBox="0 0 24 24" fill="currentColor">
                                                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                                                </svg>
                                                <span>Popular</span>
                                            </span>
                                        </div>
                                    )}

                                    {/* Plan Name & Price */}
                                    <div className="mb-8">
                                        <h3 className={`text-xl font-semibold mb-3 ${isPop ? 'text-white' : 'text-slate-900'}`}>{plan.name}</h3>
                                        <div className="flex items-baseline text-[42px] font-bold tracking-tighter">
                                            <span className={`text-2xl mr-1 font-medium ${isPop ? 'text-brandColor' : 'text-slate-500'}`}>$</span>
                                            {isYearly ? plan.yearlyPrice : plan.monthlyPrice}
                                            <span className={`text-base font-normal ml-1 ${isPop ? 'text-slate-300' : 'text-slate-500'}`}>/mon</span>
                                        </div>
                                    </div>

                                    <div className={`w-full h-px mb-8 ${isPop ? 'bg-slate-700/50' : 'bg-slate-100'}`}></div>

                                    {/* Features */}
                                    <div className="flex-grow">
                                        <p className={`font-semibold mb-6 ${isPop ? 'text-white' : 'text-slate-900'}`}>Include:</p>
                                        <ul className="space-y-4 mb-10">
                                            {plan.features.map((feature, fIdx) => (
                                                <li key={fIdx} className="flex items-center space-x-3">
                                                    <div className={`w-4 h-4 rounded-full flex items-center justify-center shrink-0 ${isPop ? 'bg-brandColor' : 'bg-[#032A46]'}`}>
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
                                    <div className="mt-auto">
                                        <button className={`w-full py-3.5 rounded-full font-medium flex items-center justify-center transition-all duration-300 text-[14px] ${isPop
                                            ? 'bg-brandColor text-white hover:bg-[#008FCC] shadow-[0_4px_14px_0_rgba(0,157,217,0.39)]'
                                            : 'bg-transparent text-slate-700 hover:text-brandColor group'
                                            }`}>
                                            <span className="flex items-center">
                                                {plan.buttonText}
                                                <ArrowRight className={`w-4 h-4 ml-2 transition-transform duration-300 ${!isPop ? 'group-hover:translate-x-1' : ''}`} />
                                            </span>
                                        </button>
                                        {!isPop && <div className="w-full h-px bg-slate-200 mt-2"></div>}
                                    </div>

                                </div>
                            );
                        })}
                    </div>
                </div>

                {/* Footer Button */}
                <div className="flex justify-center">
                    <button className="px-6 py-2.5 rounded-full border border-slate-300 text-slate-700 font-medium text-sm hover:border-brandColor hover:text-brandColor transition-colors flex items-center">
                        See Detailed Comparison <ArrowRight className="w-4 h-4 ml-2" />
                    </button>
                </div>

            </div>
        </section>
    );
};

export default HostingPricing;
