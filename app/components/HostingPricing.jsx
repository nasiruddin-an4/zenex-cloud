"use client";
import React, { useState, useEffect } from 'react';
import { Check, ArrowRight, Zap, Loader2 } from 'lucide-react';

const HostingPricing = () => {
    const [plans, setPlans] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('https://local.zenexcloud.com/api/v1/hosting')
            .then(res => res.json())
            .then(data => {
                setPlans(data);
                setLoading(false);
            })
            .catch(() => setLoading(false));
    }, []);

    const parseFeatures = (description) => {
        return description.split(',').map(f => f.trim()).filter(Boolean).slice(0, 6);
    };

    if (loading) {
        return (
            <section className="w-full bg-gray-50 py-20 px-4 md:px-8 font-sans">
                <div className="max-w-screen-2xl mx-auto flex flex-col items-center justify-center min-h-[400px]">
                    <Loader2 className="w-8 h-8 text-brandColor animate-spin mb-4" />
                    <p className="text-slate-500 text-sm font-medium">Loading hosting plans...</p>
                </div>
            </section>
        );
    }

    return (
        <section className="w-full bg-gray-50 py-20 px-4 md:px-8 font-sans">
            <div className="max-w-screen-2xl mx-auto">

                {/* Header Section */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-8 gap-6">
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 leading-tight max-w-xl tracking-tight">
                        Choose The Right Plan<br />For Your Website
                    </h2>
                    <p className="text-slate-600 font-medium max-w-xs text-[15px] leading-relaxed">
                        Start small and scale resources as your website grows.
                    </p>
                </div>

                {/* Main Pricing Container */}
                <div className="relative w-full rounded-xl overflow-hidden bg-[#EBF5FB] p-4 md:p-8 mb-12">

                    {/* Pricing Cards Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {plans.map((plan, index) => {
                            const isPop = index === 2; // Highlight only one card as requested
                            const features = parseFeatures(plan.description);

                            return (
                                <div
                                    key={index}
                                    className={`relative flex flex-col p-8 md:p-10 rounded-2xl transition-all duration-300 hover:shadow-xl ${isPop ? 'bg-[#061E2E] text-white shadow-lg' : 'bg-white text-slate-900 border border-slate-200 hover:border-slate-300 shadow-sm'
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
                                    <div className="mb-4">
                                        <h3 className={`text-3xl font-bold mb-3 ${isPop ? 'text-white' : 'text-slate-900'}`}>{plan.name || plan.package_name}</h3>
                                        <div className="flex items-baseline text-[42px] font-bold tracking-tighter">
                                            <span className={`text-2xl mr-1 font-medium ${isPop ? 'text-brandColor' : 'text-slate-500'}`}>US$</span>
                                            {plan.price}
                                            <span className={`text-base font-normal ml-1 ${isPop ? 'text-slate-300' : 'text-slate-500'}`}>/mo</span>
                                        </div>
                                        <p className={`text-sm font-medium mt-1 mb-4 ${isPop ? 'text-slate-300' : 'text-slate-500'}`}>For 12-month term</p>

                                        {/* Action Button */}
                                        <div className="w-full mb-4">
                                            <a
                                                href={plan.url || "https://clients.zenexcloud.com"}
                                                rel="noopener noreferrer"
                                                className={`py-3 rounded-xl font-semibold flex items-center justify-center w-full transition-all duration-300 text-[15px] border-2 ${isPop
                                                    ? 'bg-brandColor border-brandColor text-white hover:bg-[#008FCC] hover:border-[#008FCC] shadow-[0_4px_14px_0_rgba(0,157,217,0.39)]'
                                                    : 'bg-transparent border-indigo-600 text-indigo-600 hover:bg-indigo-50'
                                                    }`}>
                                                <span>Choose plan</span>
                                            </a>
                                        </div>
                                        {plan.renew_price_info && (
                                            <p className={`text-xs mt-3 ${isPop ? 'text-slate-400' : 'text-slate-500'}`}>
                                                {plan.renew_price_info.replace(/Renews at \$[0-9,]+\.[0-9]{2}/, `Renews at $${(parseFloat(plan.price) * 12).toFixed(2)}`)}
                                            </p>
                                        )}
                                    </div>

                                    <div className={`w-full h-px mb-8 ${isPop ? 'bg-slate-700/50' : 'bg-slate-100'}`}></div>

                                    {/* Features */}
                                    <div className="flex-grow">
                                        <p className={`font-semibold mb-6 ${isPop ? 'text-white' : 'text-slate-900'}`}>Includes:</p>
                                        <ul className="space-y-4 mb-10">
                                            {features.map((feature, fIdx) => (
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



                                </div>
                            );
                        })}
                    </div>
                </div>

            </div>
        </section>
    );
};

export default HostingPricing;
