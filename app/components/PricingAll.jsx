"use client";
import React, { useState, useEffect } from 'react';
import { Check, ArrowRight, Loader2, Server, Cpu, Database, Filter } from 'lucide-react';

const PricingAll = () => {
    const [packages, setPackages] = useState([]);
    const [loading, setLoading] = useState(true);
    const [activeCategory, setActiveCategory] = useState('all');
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch('https://local.zenexcloud.com/api/v1/packages')
            .then(res => res.json())
            .then(data => {
                setPackages(data);
                // Extract unique categories
                const cats = [...new Set(data.map(p => p.category_name))];
                setCategories(cats);
                setLoading(false);
            })
            .catch(() => setLoading(false));
    }, []);

    const filteredPackages = activeCategory === 'all'
        ? packages
        : packages.filter(p => p.category_name === activeCategory);

    const parseFeatures = (description) => {
        // Check if description is HTML
        if (description.includes('<') && description.includes('>')) {
            const tempDiv = document.createElement('div');
            tempDiv.innerHTML = description;
            const items = tempDiv.querySelectorAll('li');
            if (items.length > 0) {
                return Array.from(items).map(li => li.textContent.trim());
            }
            return [tempDiv.textContent.trim()];
        }
        return description.split(',').map(f => f.trim()).filter(Boolean).slice(0, 5);
    };

    const getCategoryIcon = (categoryName) => {
        switch (categoryName) {
            case 'Web Hosting': return Server;
            case 'VPS Hosting': return Cpu;
            case 'S3 Bucket': return Database;
            default: return Server;
        }
    };

    const getCategoryColors = (categoryName) => {
        switch (categoryName) {
            default: return {
                badge: 'bg-brandColor/10 text-brandColor',
                accent: 'text-brandColor',
                bgDark: 'bg-[#061E2E]',
                checkPop: 'bg-brandColor',
                checkReg: 'bg-[#032A46]',
                btnPop: 'bg-brandColor hover:bg-[#008FCC] shadow-[0_4px_14px_0_rgba(0,157,217,0.39)]',
                btnHover: 'hover:text-brandColor',
                dollar: 'text-brandColor',
            };
        }
    };

    if (loading) {
        return (
            <section className="w-full bg-gray-50 py-20 px-4 md:px-8 font-sans min-h-[60vh]">
                <div className="max-w-screen-2xl mx-auto flex flex-col items-center justify-center min-h-[400px]">
                    <Loader2 className="w-8 h-8 text-brandColor animate-spin mb-4" />
                    <p className="text-slate-500 text-sm font-medium">Loading all packages...</p>
                </div>
            </section>
        );
    }

    return (
        <section className="w-full bg-gray-50 py-20 px-4 md:px-8 font-sans">
            <div className="max-w-screen-2xl mx-auto">

                {/* Category Filter */}
                <div className="flex flex-wrap justify-center gap-3 mb-12">
                    <button
                        onClick={() => setActiveCategory('all')}
                        className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${activeCategory === 'all'
                            ? 'bg-[#032A46] text-white shadow-md'
                            : 'bg-white text-slate-600 hover:text-slate-900 border border-slate-200 hover:border-slate-300'
                            }`}
                    >
                        All Packages
                    </button>
                    {categories.map(cat => (
                        <button
                            key={cat}
                            onClick={() => setActiveCategory(cat)}
                            className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 flex items-center gap-2 ${activeCategory === cat
                                ? 'bg-[#032A46] text-white shadow-md'
                                : 'bg-white text-slate-600 hover:text-slate-900 border border-slate-200 hover:border-slate-300'
                                }`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                {/* Packages Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredPackages.map((pkg, index) => {
                        const firstPopIdx = filteredPackages.findIndex(p => p.is_popular === 1);
                        // Only highlight the first popular package in the current view
                        const isPop = index === firstPopIdx;
                            
                        const features = parseFeatures(pkg.description);
                        const colors = getCategoryColors(pkg.category_name);
                        const CategoryIcon = getCategoryIcon(pkg.category_name);

                        return (
                            <div
                                key={index}
                                className={`relative flex flex-col rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-xl ${isPop
                                    ? `${colors.bgDark} text-white shadow-lg`
                                    : 'bg-white text-slate-900 border border-slate-200 hover:border-slate-300 shadow-sm'
                                    }`}
                            >
                                <div className="p-8">
                                    {/* Category Badge + Popular */}
                                    <div className="flex items-center justify-between mb-6">
                                        <span className={`inline-flex items-center gap-1.5 text-[11px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider ${colors.badge}`}>
                                            <CategoryIcon className="w-3 h-3" />
                                            {pkg.category_name}
                                        </span>
                                        {isPop && (
                                            <span className="inline-flex items-center space-x-1 bg-white/10 text-white/90 text-[10px] font-bold px-2 py-1 rounded-full uppercase tracking-wider">
                                                <svg className="w-3 h-3" viewBox="0 0 24 24" fill="currentColor">
                                                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                                                </svg>
                                                <span>Popular</span>
                                            </span>
                                        )}
                                    </div>

                                    {/* Plan Name */}
                                    <h3 className={`text-xl font-bold mb-2 ${isPop ? 'text-white' : 'text-slate-900'}`}>
                                        {pkg.name || pkg.package_name}
                                    </h3>

                                    {/* Short Description */}
                                    {pkg.short_description && (
                                        <p className={`text-sm mb-5 leading-relaxed ${isPop ? 'text-slate-300' : 'text-slate-500'}`}>
                                            {pkg.short_description}
                                        </p>
                                    )}

                                    {/* Price */}
                                    <div className="mb-2">
                                        <div className="flex items-baseline">
                                            <span className={`text-2xl mr-1 font-medium ${isPop ? colors.accent : 'text-slate-500'}`}>$</span>
                                            <span className="text-[38px] font-bold tracking-tighter">{pkg.price}</span>
                                            <span className={`text-base font-normal ml-1 ${isPop ? 'text-slate-300' : 'text-slate-500'}`}>/mon</span>
                                        </div>
                                        {pkg.fake_price && pkg.fake_price !== "0" && (
                                            <p className={`text-xs ${isPop ? 'text-slate-400' : 'text-slate-400'}`}>
                                                <span className="line-through">${pkg.fake_price}/yr</span>
                                            </p>
                                        )}
                                        {pkg.renew_price_info && (
                                            <p className={`text-xs mt-1 ${isPop ? 'text-slate-400' : 'text-slate-500'}`}>
                                                {pkg.renew_price_info}
                                            </p>
                                        )}
                                    </div>

                                    <div className={`w-full h-px my-6 ${isPop ? 'bg-white/10' : 'bg-slate-100'}`}></div>

                                    {/* Features */}
                                    <ul className="space-y-3 mb-8">
                                        {features.map((feature, fIdx) => (
                                            <li key={fIdx} className="flex items-start space-x-3">
                                                <div className={`w-4 h-4 rounded-full flex items-center justify-center shrink-0 mt-0.5 ${isPop ? colors.checkPop : colors.checkReg}`}>
                                                    <Check className="w-2.5 h-2.5 text-white" strokeWidth={3} />
                                                </div>
                                                <span className={`text-[14px] font-medium leading-snug ${isPop ? 'text-slate-200' : 'text-slate-600'}`}>
                                                    {feature}
                                                </span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                {/* Action Button - pinned to bottom */}
                                <div className="mt-auto px-8 pb-8">
                                    <a
                                        href={`https://clients.zenexcloud.com`}
                                        rel="noopener noreferrer"
                                        className={`w-full py-3.5 rounded-full font-medium flex items-center justify-center transition-all duration-300 text-[14px] ${isPop
                                            ? `${colors.btnPop} text-white`
                                            : `border border-slate-300 text-slate-700 ${colors.btnHover} hover:border-current`
                                            }`}
                                    >
                                        <span className="flex items-center">
                                            Get Started
                                            <ArrowRight className="w-4 h-4 ml-2" />
                                        </span>
                                    </a>
                                </div>
                            </div>
                        );
                    })}
                </div>

            </div>
        </section>
    );
};

export default PricingAll;
