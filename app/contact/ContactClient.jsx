"use client";
import React from 'react';
import { MapPin, Phone, Mail, Clock, MessageSquare, Ticket, Send } from 'lucide-react';
import Link from 'next/link';

export default function ContactClient() {
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
                        Get in Touch
                    </span>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-tight mb-8">
                        Contact ZenexCloud
                    </h1>
                    <p className="text-lg md:text-xl text-slate-300 font-medium leading-relaxed max-w-2xl mx-auto">
                        We are here to help. Whether you have a question about our services, pricing, or need technical support, our team is ready to answer all your questions.
                    </p>
                </div>
            </section>

            {/* CONTACT CONTENT */}
            <section className="w-full bg-[#f8fafc] py-24 font-sans">
                <div className="max-w-screen-xl mx-auto px-6 md:px-12">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
                        
                        {/* Left Column: Contact Info */}
                        <div className="lg:col-span-5 space-y-8">
                            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
                                <h3 className="text-2xl font-bold text-slate-900 mb-8">Contact Information</h3>
                                
                                <div className="space-y-6">
                                    <div className="flex items-start gap-4">
                                        <div className="w-12 h-12 bg-[#EAF5FA] rounded-full flex items-center justify-center shrink-0">
                                            <MapPin className="w-5 h-5 text-[#009DD9]" />
                                        </div>
                                        <div>
                                            <h4 className="text-[15px] font-bold text-slate-900 mb-1">Office Address</h4>
                                            <p className="text-slate-600 leading-relaxed text-[15px]">ZenexCloud<br/>2 Holme Road, E6 1LY<br/>London, United Kingdom</p>
                                        </div>
                                    </div>
                                    
                                    <div className="flex items-start gap-4">
                                        <div className="w-12 h-12 bg-[#EAF5FA] rounded-full flex items-center justify-center shrink-0">
                                            <Phone className="w-5 h-5 text-[#009DD9]" />
                                        </div>
                                        <div>
                                            <h4 className="text-[15px] font-bold text-slate-900 mb-1">Phone Number</h4>
                                            <p className="text-slate-600 leading-relaxed text-[15px]">+44 7353 738623</p>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-4">
                                        <div className="w-12 h-12 bg-[#EAF5FA] rounded-full flex items-center justify-center shrink-0">
                                            <Mail className="w-5 h-5 text-[#009DD9]" />
                                        </div>
                                        <div>
                                            <h4 className="text-[15px] font-bold text-slate-900 mb-1">Email Address</h4>
                                            <p className="text-slate-600 leading-relaxed text-[15px]">admin@zenexcloud.com</p>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-4">
                                        <div className="w-12 h-12 bg-[#EAF5FA] rounded-full flex items-center justify-center shrink-0">
                                            <Clock className="w-5 h-5 text-[#009DD9]" />
                                        </div>
                                        <div>
                                            <h4 className="text-[15px] font-bold text-slate-900 mb-1">Office Hours</h4>
                                            <p className="text-slate-600 leading-relaxed text-[15px]">Hours: 9:00 - 18:00 (Mon - Sat)</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="grid grid-cols-2 gap-4">
                                <Link href="https://clients.zenexcloud.com/submitticket.php" className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex flex-col items-center justify-center text-center hover:border-cyan-400 hover:shadow-md transition-all group">
                                    <Ticket className="w-8 h-8 text-[#009DD9] mb-3 group-hover:scale-110 transition-transform" />
                                    <span className="font-bold text-slate-900 text-[15px]">Sales Ticket</span>
                                </Link>
                                <button className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex flex-col items-center justify-center text-center hover:border-cyan-400 hover:shadow-md transition-all group">
                                    <MessageSquare className="w-8 h-8 text-[#009DD9] mb-3 group-hover:scale-110 transition-transform" />
                                    <span className="font-bold text-slate-900 text-[15px]">Live Chat</span>
                                </button>
                            </div>
                        </div>

                        {/* Right Column: Contact Form */}
                        <div className="lg:col-span-7">
                            <div className="bg-white p-8 md:p-12 rounded-2xl shadow-lg border border-slate-100 h-full">
                                <h3 className="text-3xl font-bold text-slate-900 mb-2">Submit Your Inquiry</h3>
                                <p className="text-slate-500 mb-8">Fill out the form below and we will get back to you as soon as possible.</p>
                                
                                <form onSubmit={(e) => e.preventDefault()} className="space-y-6">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div className="space-y-2">
                                            <label className="text-[14px] font-semibold text-slate-700">Name</label>
                                            <input type="text" placeholder="John Doe" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors bg-slate-50 text-slate-900" />
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-[14px] font-semibold text-slate-700">Email Address</label>
                                            <input type="email" placeholder="john@example.com" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors bg-slate-50 text-slate-900" />
                                        </div>
                                    </div>
                                    
                                    <div className="space-y-2">
                                        <label className="text-[14px] font-semibold text-slate-700">Subject</label>
                                        <input type="text" placeholder="How can we help you?" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors bg-slate-50 text-slate-900" />
                                    </div>

                                    <div className="space-y-2">
                                        <label className="text-[14px] font-semibold text-slate-700">Message</label>
                                        <textarea rows="6" placeholder="Write your message here..." className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors bg-slate-50 resize-none text-slate-900"></textarea>
                                    </div>

                                    <button type="submit" className="bg-cyan-500 hover:bg-cyan-400 text-white rounded-xl px-8 py-4 font-bold w-full md:w-auto flex items-center justify-center transition-all duration-300 shadow-[0_4px_14px_0_rgba(0,163,255,0.39)] hover:shadow-[0_6px_20px_rgba(0,163,255,0.23)] group">
                                        Send Message
                                        <Send className="w-4 h-4 ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                                    </button>
                                </form>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </section>
        </div>
    );
}
