"use client";
import React, { useState, useEffect } from 'react';
import { Check, ArrowRight, Zap, Loader2 } from 'lucide-react';

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

export default VPSPricing;
