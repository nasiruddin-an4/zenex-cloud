"use client";
import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

const faqs = [
    {
        question: "What steps should I take to begin my hosting journey?",
        answer: "To begin your hosting journey, simply choose a plan that fits your needs, register a domain name, and complete the checkout process. Our setup wizard will guide you through the rest of the process."
    },
    {
        question: "What is the pricing structure for your hosting services?",
        answer: "We offer tiered pricing based on the resources you need, including shared, VPS, and dedicated hosting options. You can pay monthly or annually, with discounts available for annual commitments."
    },
    {
        question: "What is the typical timeframe for setting up a hosting account?",
        answer: "Most of our hosting accounts are provisioned instantly upon payment confirmation. Dedicated servers or custom configurations may take up to 24-48 hours."
    },
    {
        question: "Is your service available to clients outside of Bangladesh?",
        answer: "Yes, our services are available globally. We have data centers in multiple locations to ensure fast and reliable performance for clients worldwide."
    },
    {
        question: "Can you assist with migrating my current website to your platform?",
        answer: "Absolutely! We offer free website migration services for new clients. Our team of experts will handle the entire process to ensure a seamless transition with minimal downtime."
    },
    {
        question: "Will you continue to assist me after my website goes live?",
        answer: "Yes, we provide 24/7 expert support to help you with any issues or questions that may arise after your website is live. We're here to ensure your ongoing success."
    },
    {
        question: "Which hosting technologies do you utilize?",
        answer: "We utilize industry-leading technologies including SSD NVMe storage, LiteSpeed web servers, cPanel/WHM, and CloudLinux to deliver superior performance, security, and reliability."
    },
    {
        question: "Are you able to connect with third-party applications or services?",
        answer: "Yes, our hosting platforms support a wide range of third-party integrations and applications. You can easily install popular CMS platforms, e-commerce solutions, and custom applications."
    }
];

const FAQ = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="w-full bg-white py-20 lg:py-28 font-sans">
            <div className="max-w-3xl mx-auto px-6 md:px-12">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-[44px] font-bold tracking-tight text-slate-900 leading-tight">
                        Frequently Asked Question
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
    );
};

export default FAQ;
