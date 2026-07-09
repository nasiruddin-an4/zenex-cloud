"use client";
import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

const faqs = [
    {
        question: "What steps should I take to begin my hosting journey?",
        answer: "To begin your hosting journey, simply choose a plan that fits your needs, register a domain name, and complete the checkout process. You will get instant account details on your registered email address."
    },
    {
        question: "What is the pricing structure for your hosting services?",
        answer: "We offer competitive and transparent pricing tailored to your hosting needs. Whether you're looking for shared hosting, VPS, or dedicated servers, we have flexible plans to fit your budget. All plans are billed in USD currency."
    },
    {
        question: "Can you assist with migrating my current website to your platform?",
        answer: "Yes! We offer website migration services for new clients. Our team of experts will handle the entire process to ensure a seamless transition with minimal downtime."
    },
    {
        question: "Will you continue to assist me after my website goes live?",
        answer: "Yes, we provide 24/7 expert support to help you with any issues or questions that may arise after your website is live. We're here to ensure your ongoing success."
    },
    {
        question: "Which hosting technologies do you utilize?",
        answer: "We utilize industry-leading technologies including SSD NVMe storage, LiteSpeed web servers, cPanel/WHM, Imunify360 Security Suite and CloudLinux to deliver superior performance, security, and reliability."
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

    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": faqs.map(faq => ({
            "@type": "Question",
            "name": faq.question,
            "acceptedAnswer": {
                "@type": "Answer",
                "text": faq.answer
            }
        }))
    };

    return (
        <section className="w-full bg-white py-20 lg:py-28 font-sans">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
            />
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
                                    <h3 className="text-[16px] md:text-[18px] font-medium italic text-slate-900 pr-8 group-hover:text-brandColor transition-colors m-0">
                                        {faq.question}
                                    </h3>
                                    <span className="flex-shrink-0 text-brandColor">
                                        {isOpen ? <Minus className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
                                    </span>
                                </button>
                                <div
                                    className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96 opacity-100 pb-6' : 'max-h-0 opacity-0'
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
