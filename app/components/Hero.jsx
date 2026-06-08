import React from 'react';
import Link from 'next/link';
import { Zap, ArrowRight } from 'lucide-react';



const Hero = () => {
    return (
        <div className="relative w-full py-6 bg-white overflow-hidden flex flex-col items-center justify-center px-4 md:px-8">
            {/* Rounded Hero Card */}
            <div className="relative w-full max-w-[1800px] mx-auto rounded-3xl overflow-hidden flex flex-col items-center text-center text-white pt-16 pb-12 md:pt-24 md:pb-16 shadow-2xl">

                {/* Background Video */}
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="absolute inset-0 w-full h-full object-cover z-0"
                >
                    <source src="/herovideo.mp4" type="video/mp4" />
                </video>

                {/* Hero Content */}
                <div className="relative z-10 flex flex-col items-center w-full px-6 md:px-12">

                    {/* Badge */}
                    <div className="inline-flex items-center space-x-2 bg-white/5 border border-white/10 rounded px-3 py-1 mb-8 backdrop-blur-md">
                        <Zap className="w-3.5 h-3.5 text-[#00a3ff]" />
                        <span className="text-[14px] font-bold tracking-wider text-[#00a3ff]">NVMe POWERED</span>
                    </div>

                    {/* Heading */}
                    <h1 className="text-5xl md:text-7xl font-medium tracking-tight mb-6">
                        The Cloud Built for<br />
                        <span className='font-bold'>Serious Speed</span>
                    </h1>

                    {/* Subheading */}
                    <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-10 font-normal">
                        NVMe SSD servers, enterprise DDoS protection, and 24/7 expert<br className="hidden md:block" />
                        support — starting at $1.75/mo.
                    </p>

                    {/* Action Buttons */}
                    <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4 mb-20">
                        <Link href="#" className="btn-primary group px-8 py-3.5 shadow-[0_0_20px_rgba(0,163,255,0.4)]">
                            Start Hosting <ArrowRight className="w-5 h-5 ml-2 relative z-10 transition-transform duration-300 group-hover:translate-x-1" />
                        </Link>

                        {/* <Link href="#" className="group text-white hover:text-[#009DD9] font-medium flex items-center transition-all duration-300 hover:underline hover:decoration-[#009DD9] underline-offset-4 hover:translate-x-1">
                            See How it Works <ArrowRight className="w-5 h-5 ml-2 relative z-10 transition-transform duration-300 group-hover:translate-x-1" />
                        </Link> */}
                    </div>



                    {/* Trust Footer */}
                    <div className="text-xs md:text-sm text-gray-400 flex flex-col md:flex-row items-center justify-center">
                        <div className="flex text-[#00a3ff] mr-3 mb-2 md:mb-0">
                            {[...Array(5)].map((_, i) => (
                                <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                </svg>
                            ))}
                        </div>
                        <span>Trusted by <strong className="text-white font-semibold">10,000+ websites</strong> · No hidden fees · <strong className="text-white font-semibold">30-day</strong> money-back</span>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Hero;