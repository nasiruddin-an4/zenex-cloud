import Link from 'next/link';
import Image from 'next/image';

const Footer = () => {
    return (
        <footer className="bg-white text-gray-800 font-sans border-t border-gray-100 w-full z-10 relative">
            <div className="max-w-screen-2xl mx-auto px-6 md:px-12 py-16">

                {/* Top Section - Links Grid */}
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 mb-16">
                    {/* Hosting Column */}
                    <div>
                        <h3 className="font-semibold text-black text-lg mb-6">Hosting</h3>
                        <ul className="space-y-3 text-sm text-gray-600">
                            <li><Link href="#" className="hover:text-black transition-colors">Cloud Hosting</Link></li>
                            <li><Link href="#" className="hover:text-black transition-colors">Web Hosting</Link></li>
                            <li><Link href="#" className="hover:text-black transition-colors">VPS Hosting</Link></li>
                            <li><Link href="#" className="hover:text-black transition-colors">Wordpress Hosting</Link></li>
                            <li><Link href="#" className="hover:text-black transition-colors">Dedicated Servers</Link></li>
                            <li><Link href="#" className="hover:text-black transition-colors">OpenVZ</Link></li>
                            <li><Link href="#" className="hover:text-black transition-colors">CDS Hosting</Link></li>
                        </ul>
                    </div>

                    {/* Domain Column */}
                    <div>
                        <h3 className="font-semibold text-black text-lg mb-6">Domain</h3>
                        <ul className="space-y-3 text-sm text-gray-600">
                            <li><Link href="#" className="hover:text-black transition-colors">Domain Name Search</Link></li>
                            <li><Link href="#" className="hover:text-black transition-colors">Cheap Domain Names</Link></li>
                            <li><Link href="#" className="hover:text-black transition-colors">Free Domain</Link></li>
                            <li><Link href="#" className="hover:text-black transition-colors">Free SSL Certificate</Link></li>
                            <li><Link href="#" className="hover:text-black transition-colors">Domain Transfer</Link></li>
                        </ul>
                    </div>

                    {/* Information Column */}
                    <div>
                        <h3 className="font-semibold text-black text-lg mb-6">Information</h3>
                        <ul className="space-y-3 text-sm text-gray-600">
                            <li><Link href="#" className="hover:text-black transition-colors">Pricing</Link></li>
                            <li><Link href="#" className="hover:text-black transition-colors">Reviews</Link></li>
                            <li><Link href="#" className="hover:text-black transition-colors">Affiliate Program</Link></li>
                            <li><Link href="#" className="hover:text-black transition-colors">Educational Partnership</Link></li>
                            <li><Link href="#" className="hover:text-black transition-colors">Referral Program</Link></li>
                            <li><Link href="#" className="hover:text-black transition-colors">Roadmap</Link></li>
                            <li><Link href="#" className="hover:text-black transition-colors">System Status</Link></li>
                        </ul>
                    </div>

                    {/* Company Column */}
                    <div>
                        <h3 className="font-semibold text-black text-lg mb-6">Company</h3>
                        <ul className="space-y-3 text-sm text-gray-600">
                            <li><Link href="#" className="hover:text-black transition-colors">About ZenexCloud</Link></li>
                            <li><Link href="#" className="hover:text-black transition-colors">Our Technology</Link></li>
                            <li><Link href="#" className="hover:text-black transition-colors">Career</Link></li>
                            <li><Link href="#" className="hover:text-black transition-colors">Blog</Link></li>
                            <li><Link href="#" className="hover:text-black transition-colors">Discounts</Link></li>
                            <li><Link href="#" className="hover:text-black transition-colors">Principals</Link></li>
                        </ul>
                    </div>

                    {/* Support Column */}
                    <div>
                        <h3 className="font-semibold text-black text-lg mb-6">Support</h3>
                        <ul className="space-y-3 text-sm text-gray-600">
                            <li><Link href="#" className="hover:text-black transition-colors">Tutorials</Link></li>
                            <li><Link href="#" className="hover:text-black transition-colors">Knowledge Base</Link></li>
                            <li><Link href="#" className="hover:text-black transition-colors">Contact Us</Link></li>
                            <li><Link href="#" className="hover:text-black transition-colors">Report Abuse</Link></li>
                        </ul>
                    </div>
                </div>

                <hr className="border-gray-100 my-8" />

                {/* Middle Section - Logos, Theme Toggle, Socials */}
                <div className="flex flex-col lg:flex-row items-center justify-between gap-6 my-8">

                    {/* Left: Logo and Payments */}
                    <div className="flex flex-col sm:flex-row items-center gap-6">
                        <Image src="/zenexcloudlogo.svg" alt="Zenexcloud" width={160} height={32} className="h-8 w-auto" />

                        {/* Payment Methods placeholders */}
                        <div className="flex items-center gap-3 ml-0 sm:ml-4">
                            <span className="font-bold text-[#1434CB] italic text-xl">VISA</span>
                            <div className="relative w-10 h-6 flex items-center justify-center">
                                <div className="absolute left-0 w-6 h-6 rounded-full bg-[#EB001B]/90 mix-blend-multiply"></div>
                                <div className="absolute right-0 w-6 h-6 rounded-full bg-[#F79E1B]/90 mix-blend-multiply"></div>
                            </div>
                            <span className="font-bold text-[#253B80] text-lg bg-[#0070BA] text-white px-1 rounded-sm italic">AMEX</span>
                            <span className="font-bold text-[#003087] italic font-sans flex items-center">
                                <span className="text-[#0079C1] text-xl">P</span>ay<span className="text-[#0079C1]">P</span>al
                            </span>
                        </div>
                    </div>

                    {/* Center: Theme Toggler */}
                    <div className="flex items-center bg-gray-100 rounded-full p-1 border border-gray-200 shadow-sm">
                        <button className="bg-[#0073e6] text-white p-2 rounded-full shadow-sm">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                            </svg>
                        </button>
                        <button className="text-gray-400 p-2 hover:text-gray-600 rounded-full">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                            </svg>
                        </button>
                        <button className="text-gray-400 p-2 hover:text-gray-600 rounded-full">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                            </svg>
                        </button>
                    </div>

                    {/* Right: Social Icons */}
                    <div className="flex items-center gap-3">
                        <Link href="#" className="w-8 h-8 rounded-full bg-[#0073e6] text-white flex items-center justify-center hover:bg-blue-700 transition-colors">
                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                            </svg>
                        </Link>
                        <Link href="#" className="w-8 h-8 rounded-full bg-[#0073e6] text-white flex items-center justify-center hover:bg-blue-700 transition-colors">
                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                            </svg>
                        </Link>
                        <Link href="#" className="w-8 h-8 rounded-full bg-[#0073e6] text-white flex items-center justify-center hover:bg-blue-700 transition-colors">
                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" />
                            </svg>
                        </Link>
                    </div>

                </div>

                <hr className="border-gray-100 my-8" />

                {/* Bottom Section - Copyright and Extra text */}
                <div className="flex flex-col sm:flex-row items-center justify-between text-xs text-gray-500">
                    <p>© 2026 <strong className="text-black font-semibold">Zenexcloud</strong>. All rights reserved.</p>
                    <p className="mt-2 sm:mt-0">Prices are listed without <strong className="text-black font-semibold">VAT</strong></p>
                </div>

            </div>
        </footer>
    );
};

export default Footer;
