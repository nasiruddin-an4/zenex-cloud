import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Cloud, ArrowRight, HardDrive, Headset, Sparkles, Rocket, Globe } from 'lucide-react';

const benchmarks = [
    {
        name: "Zencloud NVMe",
        time: "220 ms",
        width: "45%",
        gradient: "from-[#8AD9F8] to-[#009DD9]",
        textColor: "text-[#009DD9]"
    },
    {
        name: "Blue Host",
        time: "480 ms",
        width: "60%",
        gradient: "from-[#A3A7FF] to-[#252DF2]",
        textColor: "text-[#252DF2]"
    },
    {
        name: "Host Gator",
        time: "610 ms",
        width: "75%",
        gradient: "from-[#84E1D0] to-[#00987A]",
        textColor: "text-[#00987A]"
    },
    {
        name: "GoDaddy",
        time: "760 ms",
        width: "95%",
        gradient: "from-[#E6A0F1] to-[#A817C6]",
        textColor: "text-[#A817C6]"
    }
];

const floatingCards = [
    { text: "Secure NVMe Storage", icon: HardDrive, active: false },
    { text: "24/7 Premium Support", icon: Headset, active: false },
    { text: "Code with AI", icon: Sparkles, active: true },
    { text: "Deploy Instantly", icon: Rocket, active: false },
    { text: "Global Edge Network", icon: Globe, active: false }
];

const Benchmark = () => {
    return (
        <section className="w-full bg-white py-20 lg:py-32 font-sans overflow-hidden">
            <div className="max-w-screen-2xl mx-auto px-6 md:px-12">

                <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-20">

                    {/* Left Column: Content & Bars */}
                    <div className="w-full lg:w-1/2 flex flex-col items-start">

                        {/* Badge */}
                        <div className="inline-flex items-center space-x-2 bg-[#E6F3FA] text-[#023B5A] rounded px-3 py-1.5 mb-8">
                            <Cloud className="w-3.5 h-3.5" strokeWidth={2.5} />
                            <span className="text-[11px] font-bold tracking-widest uppercase">WEB HOSTING & BEYOND</span>
                        </div>

                        {/* Heading */}
                        <h2 className="text-4xl md:text-5xl font-bold text-slate-900 tracking-tight leading-tight mb-6">
                            Measurably Faster<br />
                            Provably Reliable
                        </h2>

                        {/* Description */}
                        <p className="text-slate-700 text-[15px] font-medium leading-relaxed max-w-lg mb-12">
                            Real-world benchmark — average TTFB across 100 requests from US East to a 5 MB WordPress site.
                        </p>

                        {/* Benchmark Bars */}
                        <div className="w-full max-w-lg flex flex-col space-y-6 mb-8">
                            {benchmarks.map((bench, idx) => (
                                <div key={idx} className="flex flex-col space-y-2">
                                    {/* Labels */}
                                    <div className="flex justify-between items-center text-sm font-bold">
                                        <span className="text-slate-800">{bench.name}</span>
                                        <span className={bench.textColor}>{bench.time}</span>
                                    </div>
                                    {/* Progress Bar container */}
                                    <div className="w-full h-3.5 bg-slate-100 rounded-full overflow-hidden">
                                        {/* Filled Bar */}
                                        <div
                                            className={`h-full rounded-full bg-gradient-to-r ${bench.gradient}`}
                                            style={{ width: bench.width }}
                                        ></div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Disclaimer */}
                        <p className="text-slate-500 text-[11px] mb-12 font-medium">
                            Tested via <strong className="text-slate-800">GTMetrix</strong> - June 2025.
                        </p>

                        {/* Action Button */}
                        <Link href="#" className="btn-primary group px-8 py-3.5 shadow-md">
                            Explore Services <ArrowRight className="w-4 h-4 ml-2 relative z-10 transition-transform duration-300 group-hover:translate-x-1" />
                        </Link>
                    </div>

                    {/* Right Column: Image & Floating Cards */}
                    <div className="w-full lg:w-1/2 relative h-[500px] lg:h-[600px] rounded-3xl overflow-hidden mt-10 lg:mt-0">
                        {/* Placeholder/User Image */}
                        <div className="absolute inset-0 bg-slate-200">
                            <Image
                                src="/image34.png"
                                alt="Professional working on laptop"
                                fill
                                className="object-cover"
                            />
                        </div>

                        {/* Floating Cards Stack Overlay */}
                        <div className="absolute top-1/2 left-6 md:left-10 -translate-y-1/2 flex flex-col space-y-3 z-10">
                            {floatingCards.map((card, idx) => (
                                <div
                                    key={idx}
                                    className={`flex items-center space-x-3 px-4 py-3 rounded-lg shadow-xl backdrop-blur-md border ${card.active
                                            ? 'bg-[#005073] border-[#005073] text-white'
                                            : 'bg-black/60 border-white/10 text-white hover:bg-black/80 transition-colors'
                                        }`}
                                >
                                    <card.icon className={`w-5 h-5 ${card.active ? 'text-[#8AD9F8]' : 'text-[#8AD9F8]'}`} strokeWidth={2} />
                                    <span className="text-sm font-semibold tracking-wide">{card.text}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>

            </div>
        </section>
    );
};

export default Benchmark;
