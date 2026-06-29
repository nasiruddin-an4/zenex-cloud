"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { ArrowRight, Sparkles, Check, Loader2, Server, Cpu, Database, Filter } from 'lucide-react';


const PricingHero = () => {
    return (
        <section className="relative w-full overflow-hidden bg-gradient-to-b from-[#020813] via-[#061E2E] to-[#0a2940] -mt-[75px] pt-[75px]">
            {/* Decorative elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-brandColor/5 rounded-full blur-[120px]"></div>
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-brandColor/5 rounded-full blur-[120px]"></div>
            </div>

            <div className="max-w-screen-2xl mx-auto px-6 md:px-12 w-full relative z-10 py-20 md:py-28">
                <div className="flex flex-col items-center text-center">

                    {/* Top Badge */}
                    <div className="inline-flex items-center space-x-2 bg-white/5 border border-white/10 rounded-full px-4 py-2 mb-8 backdrop-blur-sm animate-fade-in-up">
                        <Sparkles className="w-4 h-4 text-brandColor" />
                        <span className="text-[12px] md:text-[13px] font-semibold tracking-wide text-slate-300">
                            Transparent pricing • No hidden fees
                        </span>
                    </div>

                    {/* Heading */}
                    <h1 className="text-3xl md:text-4xl lg:text-[56px] font-bold text-white leading-[1.1] mb-6 tracking-tight animate-fade-in-up animation-delay-100 max-w-3xl">
                        All Plans &
                        <span className="text-brandColor"> Pricing</span>
                    </h1>

                    {/* Subheading */}
                    <p className="text-base md:text-lg text-slate-400 leading-relaxed mb-10 max-w-2xl animate-fade-in-up animation-delay-200">
                        Find the perfect plan for your needs. From shared web hosting to high-performance VPS and scalable object storage — everything at competitive rates.
                    </p>

                    {/* Quick Links */}
                    <div className="flex flex-wrap justify-center gap-3 animate-fade-in-up animation-delay-300">
                        <Link href="/hosting" className="px-5 py-2.5 rounded-full bg-brandColor/10 border border-brandColor/30 text-brandColor text-sm font-semibold hover:bg-brandColor/20 transition-all">
                            Web Hosting
                        </Link>
                        <Link href="/vps" className="px-5 py-2.5 rounded-full bg-brandColor/10 border border-brandColor/30 text-brandColor text-sm font-semibold hover:bg-brandColor/20 transition-all">
                            VPS Hosting
                        </Link>
                        <Link href="/s3-bucket" className="px-5 py-2.5 rounded-full bg-brandColor/10 border border-brandColor/30 text-brandColor text-sm font-semibold hover:bg-brandColor/20 transition-all">
                            S3 Storage
                        </Link>
                    </div>
                </div>
            </div>

        </section>
    );
};




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
        <section className="w-full bg-gray-50 py-20 px-4">
            <div className="max-w-7xl mx-auto">

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
                                className="group relative flex flex-col rounded-2xl overflow-hidden transition-all duration-300 shadow bg-white hover:bg-[#061E2E] hover:border-transparent hover:shadow-xl"
                            >
                                <div className="p-8">
                                    {/* Category Badge + Popular */}
                                    <div className="flex items-center justify-between mb-6">
                                        <span className={`inline-flex items-center gap-1.5 text-[11px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider ${colors.badge} group-hover:bg-white/10 group-hover:text-[#8AD9F8] transition-colors`}>
                                            <CategoryIcon className="w-3 h-3" />
                                            {pkg.category_name}
                                        </span>
                                        {isPop && (
                                            <span className="inline-flex items-center space-x-1 bg-brandColor/10 text-brandColor text-[10px] font-bold px-2 py-1 rounded-full uppercase tracking-wider group-hover:bg-white/10 group-hover:text-[#8AD9F8] transition-colors">
                                                <svg className="w-3 h-3" viewBox="0 0 24 24" fill="currentColor">
                                                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                                                </svg>
                                                <span>Popular</span>
                                            </span>
                                        )}
                                    </div>

                                    {/* Plan Name */}
                                    <h3 className="text-2xl font-bold mb-1 text-slate-900 group-hover:text-white transition-colors">
                                        {pkg.name || pkg.package_name}
                                    </h3>

                                    {/* Short Description */}
                                    {pkg.short_description && (
                                        <p className="text-sm mb-5 leading-relaxed text-slate-500 group-hover:text-slate-300 transition-colors">
                                            {pkg.short_description}
                                        </p>
                                    )}

                                    {/* Price */}
                                    <div className="mb-2">
                                        <div className="flex items-baseline">
                                            <span className="text-2xl mr-1 font-medium text-slate-500 group-hover:text-[#8AD9F8] transition-colors">$</span>
                                            <span className="text-[38px] font-bold tracking-tighter text-slate-900 group-hover:text-white transition-colors">{pkg.price}</span>
                                            <span className="text-base font-normal ml-1 text-slate-500 group-hover:text-slate-400 transition-colors">/mon</span>
                                        </div>

                                        {pkg.renew_price_info && (
                                            <p className="text-xs mt-1 text-slate-500 group-hover:text-slate-400 transition-colors">
                                                {pkg.renew_price_info}
                                            </p>
                                        )}
                                    </div>

                                    <div className="w-full h-px my-6 bg-slate-100 group-hover:bg-slate-700/50 transition-colors"></div>

                                    {/* Features */}
                                    <ul className="space-y-3 mb-4">
                                        {features.map((feature, fIdx) => (
                                            <li key={fIdx} className="flex items-start space-x-3">
                                                <div className="w-4 h-4 rounded-full flex items-center justify-center shrink-0 mt-0.5 bg-brandColor">
                                                    <Check className="w-2.5 h-2.5 text-white" strokeWidth={3} />
                                                </div>
                                                <span className="text-[14px] font-medium leading-snug text-slate-600 group-hover:text-slate-200 transition-colors">
                                                    {feature}
                                                </span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                {/* Action Button - pinned to bottom */}
                                <div className="mt-auto px-8 pb-8">
                                    <Link
                                        href={`https://clients.zenexcloud.com/index.php?rp=/store/` + pkg.slug}
                                        rel="noopener noreferrer"
                                        className="w-full py-3.5 rounded-full font-medium flex items-center justify-center transition-all duration-300 text-[14px] bg-transparent border border-slate-300 text-slate-700 group-hover:border-white group-hover:text-white hover:!text-brandColor hover:!border-brandColor"
                                    >
                                        <span className="flex items-center">
                                            Get Started
                                            <ArrowRight className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
                                        </span>
                                    </Link>
                                </div>
                            </div>
                        );
                    })}
                </div>

            </div>
        </section>
    );
};



export default function PricingClient() {
    return (
        <div>
            <PricingHero />
            <PricingAll />
        </div>
    );
}
