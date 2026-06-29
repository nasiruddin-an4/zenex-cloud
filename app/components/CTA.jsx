import React from 'react';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';

const CTA = () => {
    return (
        <section className="w-full bg-white py-16 lg:py-24 font-sans">
            <div className="max-w-7xl mx-auto px-6">

                {/* CTA Container */}
                <div className="relative w-full rounded-2xl overflow-hidden flex flex-col md:flex-row items-center justify-between p-10 md:p-16 lg:px-24 lg:py-20 bg-gradient-to-r from-[#012535] via-[#024060] to-[#008FCC]">

                    {/* Left Content */}
                    <div className="relative z-10 w-full md:w-3/5 flex flex-col items-start">
                        <h2 className="text-3xl md:text-4xl lg:text-[48px] font-bold tracking-tight mb-4 leading-tight">
                            Ready to Host Smarter
                        </h2>
                        <p className="text-[15px] md:text-base text-slate-300 mb-8 font-medium">
                            Start from <span className="text-white font-bold">$1.75/mo</span>. Deploy in <span className="text-white font-bold">60 seconds</span>. Cancel anytime.
                        </p>

                        <a href="https://clients.zenexcloud.com/index.php?rp=/store/web-hosting/zenbasic&_gl=1*lkouc4*_gcl_au*ODM4NjY2MzkxLjE3ODAzODEzNzA.*_ga*MTAxMTMxNDA5Ni4xNzgwMzgxMzcx*_ga_4L9HZTSD0D*czE3ODIxMjU1NjckbzE1JGcxJHQxNzgyMTI1NTY5JGo1OCRsMCRoNDg3MjQxOTkx" className="bg-[#00AEEF] hover:bg-[#009DD9] text-white px-7 py-3 rounded-full font-bold text-sm flex items-center gap-2 transition-all shadow-lg hover:shadow-[#00AEEF]/40 group">
                            Start Hosting
                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </a>
                    </div>

                    {/* Right Content - 3D Image */}
                    <div className="relative z-10 w-full md:w-2/5 flex justify-center md:justify-end mt-12 md:mt-0">
                        <div className="relative w-48 h-48 md:w-64 md:h-64 lg:w-[300px] lg:h-[220px] drop-shadow-2xl hover:-translate-y-2 transition-transform duration-500">
                            <Image
                                src="/ctaimg.png" // User can drop this image in public
                                alt="3D Cloud Hosting"
                                fill
                                className="object-contain"
                            />
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default CTA;
