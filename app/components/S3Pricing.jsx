"use client";
import React, { useState, useEffect } from 'react';
import { Check, ArrowRight, Loader2, Database } from 'lucide-react';

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

export default S3Pricing;
