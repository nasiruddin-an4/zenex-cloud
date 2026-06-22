"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import { ArrowRight, ShieldCheck, Headset, Banknote, Lock, Plus, Minus } from 'lucide-react';

export default function AboutClient() {
    const faqs = [
        {
            question: "What is an SSL Certificate?",
            answer: "An SSL certificate is a digital certificate that proves a website is real and trustworthy. It encrypts the connection between your web browser and the website, keeping your data safe. SSL stands for Secure Sockets Layer, a security system that protects information as it travels online."
        },
        {
            question: "What Are the Benefits of SSL?",
            answer: "SSL protects sensitive information, such as passwords and credit card details, by encrypting the data. It also helps build trust with your visitors and can improve your website's search engine ranking."
        },
        {
            question: "Does SSL work in all web browsers?",
            answer: "Yes, our SSL certificates are compatible with all major modern web and mobile browsers. Your visitors will experience a seamless, secure connection without any warnings or errors."
        },
        {
            question: "How do I apply for an SSL?",
            answer: "You can purchase an SSL certificate directly through your ZenexCloud client portal. Once purchased, our automated system will guide you through the activation and installation process on your hosting account."
        }
    ];

    const [openIndex, setOpenIndex] = useState(null);

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className="w-full">
            {/* HERO SECTION */}
            <section className="relative w-full bg-slate-900 overflow-hidden pt-[120px] pb-24 md:pt-[160px] md:pb-32 -mt-[75px]">
                <div className="absolute inset-0 z-0 opacity-20">
                    <div className="absolute top-0 right-0 w-96 h-96 bg-brandColor rounded-full blur-[120px]"></div>
                    <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-500 rounded-full blur-[120px]"></div>
                </div>
                <div className="max-w-screen-xl mx-auto px-6 relative z-10 text-center">
                    <span className="inline-block py-1 px-3 rounded-full bg-white/10 text-cyan-400 text-[12px] font-bold tracking-widest uppercase mb-6 border border-white/10">
                        About Us
                    </span>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-tight mb-8">
                        About ZenexCloud
                    </h1>
                    <div className="max-w-3xl mx-auto space-y-6">
                        <p className="text-lg md:text-xl text-slate-300 font-medium leading-relaxed">
                            High performance VPS at affordable prices to get your projects off the ground.
                        </p>
                        <p className="text-base text-slate-400 leading-relaxed">
                            ZenexCloud sells domains, hosting, VPS, and RDP services. We give you fast servers at a fair price. You can use them for tests, live sites, or key business apps.
                        </p>
                        <p className="text-base text-slate-400 leading-relaxed">
                            Our data centers are in the USA and Singapore. This gives you quick speed and strong uptime. No matter where you are, your site or app will stay fast and safe.
                        </p>
                    </div>
                </div>
            </section>

            {/* STORY SECTION */}
            <section className="w-full bg-white py-24 font-sans text-slate-900">
                <div className="max-w-screen-xl mx-auto px-6 md:px-12">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start mb-24">
                        <div>
                            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">Our Story</h2>
                            <div className="w-16 h-1 bg-brandColor rounded-full mb-8"></div>
                            <p className="text-slate-600 leading-relaxed text-lg mb-6">
                                ZenexCloud began with a big dream to make cloud services easy for everyone. We saw that many people needed a simple way to buy and manage servers, domains, and hosting.
                            </p>
                            <p className="text-slate-600 leading-relaxed text-lg">
                                Our team wanted to remove hard steps, high costs, and slow support. That dream grew into a platform where anyone can start a website, run apps, or launch a business online. We built a system that is fast, safe, and open to all, with data centers in the USA and Singapore and a helpful team in London.
                            </p>
                        </div>
                        <div className="bg-slate-50 p-10 rounded-2xl border border-slate-100 shadow-sm">
                            <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-6">ZenexCloud Management</h2>
                            <p className="text-slate-600 leading-relaxed mb-6">
                                ZenexCloud is built by a strong management team. Our experts have deep skills in cloud and infrastructure management, and we use that knowledge to give you the best service.
                            </p>
                            <ul className="space-y-3 mb-6">
                                {['Infrastructure as a Service', 'Software as a Service', 'Platform as a Service', 'Managed Services'].map((item, idx) => (
                                    <li key={idx} className="flex items-center text-slate-700 font-semibold">
                                        <div className="w-2 h-2 rounded-full bg-brandColor mr-3"></div>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                            <p className="text-slate-600 leading-relaxed">
                                Cloud is changing the way people, products, and processes work. It gives low cost, easy scale, and strong security, so anyone can start small and grow big.
                            </p>
                        </div>
                    </div>
                    <div className="max-w-4xl mx-auto text-center">
                        <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">Who we are</h2>
                        <div className="w-16 h-1 bg-brandColor rounded-full mb-8 mx-auto"></div>
                        <p className="text-slate-600 leading-relaxed text-lg mb-6">
                            ZenexCloud is a one-stop cloud marketplace for domains, hosting, VPS, and RDP services. We offer .co.uk and global domain registration, web hosting, cloud servers, and dedicated servers, along with enterprise cloud solutions for mission-critical applications.
                        </p>
                        <p className="text-slate-600 leading-relaxed text-lg font-medium">
                            Our main office is located at 2 Holme Road, E6 1LY, London, United Kingdom, where our team works every day to deliver expert support and trusted solutions.
                        </p>
                    </div>
                </div>
            </section>

            {/* FEATURES SECTION */}
            <section className="w-full bg-[#f8fafc] py-24 font-sans">
                <div className="max-w-screen-xl mx-auto px-6 md:px-12">
                    <div className="text-center mb-16">
                        <span className="text-[#009DD9] text-[12px] font-bold tracking-widest uppercase mb-4 block">Why Choose Us</span>
                        <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-slate-900 mb-6">
                            Our relentless focus on the<br className="hidden md:block" /> success of your business
                        </h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
                        {[
                            {
                                title: "Quality & Reliability",
                                icon: ShieldCheck,
                                description: "Start by choosing the right SSL certificate for your website or application. We offer three types of SSL certificates to fit different needs and levels of security."
                            },
                            {
                                title: "24/7 Support",
                                icon: Headset,
                                description: "Our team is here to help anytime, day or night. We guide you through choosing the right SSL certificate for your website or application."
                            },
                            {
                                title: "20 Days Money Back Guarantee",
                                icon: Banknote,
                                description: "We want you to feel safe and confident with your purchase. If you are not satisfied, you can get a full refund within 20 days of your purchase."
                            }
                        ].map((feature, idx) => (
                            <div key={idx} className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-lg transition-shadow duration-300">
                                <div className="w-14 h-14 bg-[#EAF5FA] rounded-xl flex items-center justify-center mb-6">
                                    <feature.icon className="w-7 h-7 text-[#009DD9]" />
                                </div>
                                <h3 className="text-xl font-bold text-slate-900 mb-4">{feature.title}</h3>
                                <p className="text-slate-600 leading-relaxed">{feature.description}</p>
                            </div>
                        ))}
                    </div>
                    <div className="bg-slate-900 rounded-3xl p-10 md:p-16 text-white relative overflow-hidden flex flex-col md:flex-row items-center gap-10">
                        <div className="absolute -top-24 -right-24 w-64 h-64 bg-[#009DD9] rounded-full blur-[100px] opacity-30 pointer-events-none"></div>
                        <div className="w-full md:w-1/4 flex justify-center">
                            <div className="w-24 h-24 bg-white/10 rounded-full flex items-center justify-center backdrop-blur-md border border-white/20">
                                <Lock className="w-12 h-12 text-[#009DD9]" />
                            </div>
                        </div>
                        <div className="w-full md:w-3/4 relative z-10">
                            <h3 className="text-2xl md:text-3xl font-bold mb-4">Worried About Upgrades, Maintenance, and Security?</h3>
                            <p className="text-slate-300 leading-relaxed text-lg">
                                At ZenexCloud, we take care of upgrades, maintenance, and security for you. We offer secure data storage options both locally and globally. Our data centers follow Uptime Institute Tier 3 and Tier 4 standards, the highest in the industry. This ensures your data and applications are always safe, secure, and available whenever you need them.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ SECTION */}
            <section className="w-full bg-white py-20 lg:py-28 font-sans">
                <div className="max-w-3xl mx-auto px-6 md:px-12">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-[44px] font-bold tracking-tight text-slate-900 leading-tight">
                            Frequently Asked Questions
                        </h2>
                    </div>
                    <div className="flex flex-col border-t border-slate-100">
                        {faqs.map((faq, index) => {
                            const isOpen = openIndex === index;
                            return (
                                <div key={index} className="border-b border-slate-100">
                                    <button
                                        onClick={() => toggleFAQ(index)}
                                        className="w-full flex items-center justify-between py-6 text-left focus:outline-none group"
                                    >
                                        <span className="text-[16px] md:text-[18px] font-medium italic text-slate-900 pr-8 group-hover:text-brandColor transition-colors">
                                            {faq.question}
                                        </span>
                                        <span className="flex-shrink-0 text-brandColor">
                                            {isOpen ? <Minus className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
                                        </span>
                                    </button>
                                    <div
                                        className={`overflow-hidden transition-all duration-300 ease-in-out ${
                                            isOpen ? 'max-h-96 opacity-100 pb-6' : 'max-h-0 opacity-0'
                                        }`}
                                    >
                                        <p className="text-slate-600 text-[15px] leading-relaxed">
                                            {faq.answer}
                                        </p>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* CTA SECTION */}
            <section className="w-full bg-[#0a1e2e] py-20 font-sans border-t border-white/5">
                <div className="max-w-screen-xl mx-auto px-6 md:px-12 text-center">
                    <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-6 leading-tight max-w-4xl mx-auto">
                        Choose the Best Managed Cloud Hosting for Your Business!
                    </h2>
                    <p className="text-slate-400 text-lg md:text-xl font-medium leading-relaxed max-w-3xl mx-auto mb-10">
                        Experience fast, secure, and reliable cloud hosting designed to help your business grow. With ZenexCloud, managing your servers, websites, and applications has never been easier.
                    </p>
                    <Link href="https://clients.zenexcloud.com/" className="inline-flex items-center justify-center bg-cyan-500 hover:bg-cyan-400 text-white rounded-full px-8 py-4 text-lg font-bold transition-all duration-300 shadow-[0_0_20px_rgba(0,163,255,0.3)] hover:shadow-[0_0_30px_rgba(0,163,255,0.5)] group">
                        Get Started Now
                        <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Link>
                </div>
            </section>
        </div>
    );
}
