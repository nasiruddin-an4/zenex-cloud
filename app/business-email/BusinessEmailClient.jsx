"use client";
import React from 'react';
import { Mail, Zap, MonitorSmartphone, DownloadCloud, ShieldCheck, Calendar, Briefcase, User, Building2, Users } from 'lucide-react';

export default function BusinessEmailClient() {
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
                        Professional Communication
                    </span>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-tight mb-8">
                        Business Email
                    </h1>
                    <p className="text-lg md:text-xl text-slate-300 font-medium leading-relaxed max-w-2xl mx-auto">
                        ZenexCloud Business Email Service. Essential tools for professional growth, branding, and effective communication with your team, partners, and clients.
                    </p>
                </div>
            </section>

            {/* MAIN CONTENT SECTION */}
            <section className="w-full bg-white py-24 font-sans text-slate-900">
                <div className="max-w-screen-xl mx-auto px-6 md:px-12">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
                        <div>
                            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">Why Use Business Email?</h2>
                            <div className="w-16 h-1 bg-brandColor rounded-full mb-8"></div>
                            <p className="text-slate-600 leading-relaxed text-lg mb-6">
                                Business Email or Webmail is more than just communication—it's an essential tool for professional growth and branding. At ZenexCloud, we offer Business Email Solutions that help you communicate effectively while strengthening your brand identity.
                            </p>
                            <div className="bg-[#f8fafc] p-6 rounded-xl border border-slate-100 mb-6">
                                <h4 className="font-semibold text-slate-900 mb-2">Your business email address typically follows the format:</h4>
                                <div className="flex items-center gap-3">
                                    <Mail className="w-5 h-5 text-brandColor" />
                                    <span className="text-lg font-bold text-brandColor">info@zenexcloud.com</span>
                                </div>
                            </div>
                            <p className="text-slate-600 leading-relaxed text-lg">
                                This not only ensures professional communication but also serves as a subtle marketing tool—your business name is visible in every interaction, building trust and credibility.
                            </p>
                        </div>
                        
                        <div className="bg-slate-50 p-10 rounded-2xl border border-slate-100 shadow-sm relative">
                            {/* Decorative element */}
                            <div className="absolute top-0 right-0 -mt-6 -mr-6 w-24 h-24 bg-[#EAF5FA] rounded-full flex items-center justify-center opacity-50 pointer-events-none"></div>
                            
                            <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-6">ZenexCloud Business Email Hosting</h2>
                            <p className="text-slate-600 leading-relaxed mb-6">
                                At ZenexCloud, we provide secure, reliable, and fast Business Email hosting services globally. Our service is designed to meet the needs of businesses of all sizes.
                            </p>
                            <p className="text-slate-600 leading-relaxed font-semibold italic border-l-4 border-brandColor pl-4 py-2 bg-white shadow-sm rounded-r-lg">
                                Whether you are running a small business or managing a large organization, ZenexCloud's Business Email service will keep your communication smooth, secure, and professional.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* FEATURES SECTION */}
            <section className="w-full bg-[#f8fafc] py-24 font-sans">
                <div className="max-w-screen-xl mx-auto px-6 md:px-12">
                    <div className="text-center mb-16">
                        <span className="text-[#009DD9] text-[12px] font-bold tracking-widest uppercase mb-4 block">Key Features</span>
                        <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-slate-900 mb-6">
                            Everything You Need
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
                        {[
                            { title: "Fast & Lightweight", icon: Zap, text: "A lightning-fast webmail interface for quick access." },
                            { title: "Full Browser Support", icon: MonitorSmartphone, text: "Seamlessly works across all mobile & desktop browsers." },
                            { title: "No Expensive Software", icon: DownloadCloud, text: "Everything runs in the cloud—no costly local setups required." },
                            { title: "Privacy-Focused", icon: ShieldCheck, text: "Secure, encrypted email handling to protect your data." },
                            { title: "Easy Management", icon: Calendar, text: "Intuitive contact and calendar management tools built-in." }
                        ].map((feature, idx) => (
                            <div key={idx} className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-lg hover:border-cyan-200 transition-all duration-300">
                                <div className="w-14 h-14 bg-[#EAF5FA] rounded-xl flex items-center justify-center mb-6">
                                    <feature.icon className="w-7 h-7 text-[#009DD9]" />
                                </div>
                                <h3 className="text-xl font-bold text-slate-900 mb-3">{feature.title}</h3>
                                <p className="text-slate-600 leading-relaxed">{feature.text}</p>
                            </div>
                        ))}
                    </div>

                    <div className="bg-slate-900 rounded-3xl p-10 md:p-16 text-white relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-[#009DD9] rounded-full blur-[100px] opacity-30 pointer-events-none"></div>
                        <h3 className="text-2xl md:text-3xl font-bold mb-10 text-center relative z-10">Who is this for?</h3>
                        
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 relative z-10">
                            <div className="flex flex-col items-center text-center p-6 bg-white/5 rounded-2xl border border-white/10 hover:bg-white/10 transition-colors">
                                <Briefcase className="w-10 h-10 text-cyan-400 mb-4" />
                                <span className="font-semibold">Corporate Teams</span>
                            </div>
                            <div className="flex flex-col items-center text-center p-6 bg-white/5 rounded-2xl border border-white/10 hover:bg-white/10 transition-colors">
                                <User className="w-10 h-10 text-cyan-400 mb-4" />
                                <span className="font-semibold">Freelancers & Entrepreneurs</span>
                            </div>
                            <div className="flex flex-col items-center text-center p-6 bg-white/5 rounded-2xl border border-white/10 hover:bg-white/10 transition-colors">
                                <Building2 className="w-10 h-10 text-cyan-400 mb-4" />
                                <span className="font-semibold">Startups & SMEs</span>
                            </div>
                            <div className="flex flex-col items-center text-center p-6 bg-white/5 rounded-2xl border border-white/10 hover:bg-white/10 transition-colors">
                                <Users className="w-10 h-10 text-cyan-400 mb-4" />
                                <span className="font-semibold">Personal & Professional Use</span>
                            </div>
                        </div>
                    </div>

                </div>
            </section>
        </div>
    );
}
