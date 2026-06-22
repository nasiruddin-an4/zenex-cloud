import Link from 'next/link';
import Image from 'next/image';

const Footer = () => {
    return (
        <footer className="text-slate-800 w-full z-10 relative">
            <div className="bg-white border-t border-slate-100">
                <div className="max-w-screen-2xl mx-auto px-6 md:px-12 py-16">

                    {/* Top Section - Links Grid */}
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 mb-4">
                        {/* Hosting Column */}
                        <div>
                            <h3 className="font-bold text-[#005073] text-lg mb-6">Hosting</h3>
                            <ul className="space-y-3 text-sm text-slate-600 font-medium">
                                <li><Link href="/hosting" className="hover:text-black transition-colors">Web hosting</Link></li>
                                <li><Link href="/vps" className="hover:text-black transition-colors">VPS hosting</Link></li>
                                <li><Link href="/business-email" className="hover:text-black transition-colors">Business Email</Link></li>
                            </ul>
                        </div>

                        {/* Domain Column */}
                        <div>
                            <h3 className="font-bold text-[#005073] text-lg mb-6">Domain</h3>
                            <ul className="space-y-3 text-sm text-slate-600 font-medium">
                                <li><Link href="https://clients.zenexcloud.com/cart.php?a=add&domain=register&_gl=1*1aehp46*_gcl_au*ODM4NjY2MzkxLjE3ODAzODEzNzA.*_ga*MTAxMTMxNDA5Ni4xNzgwMzgxMzcx*_ga_4L9HZTSD0D*czE3ODIxMjIxMzEkbzE0JGcxJHQxNzgyMTIyMzQ4JGo1OSRsMCRoOTgxODczMzc1" className="hover:text-black transition-colors">Domain name search</Link></li>
                                <li><Link href="https://clients.zenexcloud.com/cart.php?a=add&domain=register&_gl=1*azpk9p*_gcl_au*ODM4NjY2MzkxLjE3ODAzODEzNzA.*_ga*MTAxMTMxNDA5Ni4xNzgwMzgxMzcx*_ga_4L9HZTSD0D*czE3ODIxMjIxMzEkbzE0JGcxJHQxNzgyMTIyOTY3JGo1NiRsMCRoOTgxODczMzc1" className="hover:text-black transition-colors">Cheap domain names</Link></li>
                                <li><Link href="https://clients.zenexcloud.com/cart.php?a=add&domain=transfer&_gl=1*hysv9a*_gcl_au*ODM4NjY2MzkxLjE3ODAzODEzNzA.*_ga*MTAxMTMxNDA5Ni4xNzgwMzgxMzcx*_ga_4L9HZTSD0D*czE3ODIxMjIxMzEkbzE0JGcxJHQxNzgyMTIyOTk4JGoyNSRsMCRoOTgxODczMzc1" className="hover:text-black transition-colors">Domain transfer</Link></li>
                                <li><Link href="#" className="hover:text-black transition-colors">Domain Price List</Link></li>
                            </ul>
                        </div>

                        {/* Information Column */}
                        <div>
                            <h3 className="font-bold text-[#005073] text-lg mb-6">Information</h3>
                            <ul className="space-y-3 text-sm text-slate-600 font-medium">
                                <li><Link href="#" className="hover:text-black transition-colors">Affiliate program</Link></li>
                                <li><Link href="#" className="hover:text-black transition-colors">Referral program</Link></li>
                            </ul>
                        </div>

                        {/* Company Column */}
                        <div>
                            <h3 className="font-bold text-[#005073] text-lg mb-6">Company</h3>
                            <ul className="space-y-3 text-sm text-slate-600 font-medium">
                                <li><Link href="/about" className="hover:text-black transition-colors">About Us</Link></li>
                                <li><Link href="#" className="hover:text-black transition-colors">Our technology</Link></li>
                            </ul>
                        </div>

                        {/* Support Column */}
                        <div>
                            <h3 className="font-bold text-[#005073] text-lg mb-6">Support</h3>
                            <ul className="space-y-3 text-sm text-slate-600 font-medium">
                                <li><Link href="/contact" className="hover:text-black transition-colors">Contact us</Link></li>
                                <li><Link href="#" className="hover:text-black transition-colors">Report abuse</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Footer Section */}
            <div className="bg-gray-50 border-t border-slate-200">
                <div className="max-w-screen-2xl mx-auto px-6 md:px-12 py-10 md:py-14">

                    {/* Row 1: Logo & Socials */}
                    <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-10">
                        <Image src="/dark.png" alt="Zenexcloud" width={200} height={40} className="h-12 w-auto" />

                        <div className="flex items-center gap-3">
                            <a href="https://www.linkedin.com/company/zenexcloud/" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-slate-800 text-white flex items-center justify-center hover:bg-[#0A66C2] transition-colors">
                                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg>
                            </a>
                            <a href="https://www.facebook.com/Zenexcloud" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-slate-800 text-white flex items-center justify-center hover:bg-[#1877F2] transition-colors">
                                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" /></svg>
                            </a>
                            <Link href="#" className="w-8 h-8 rounded-full bg-slate-800 text-white flex items-center justify-center hover:bg-black transition-colors">
                                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" /></svg>
                            </Link>
                        </div>
                    </div>

                    {/* Row 2: Payments & Links */}
                    <div className="flex flex-col lg:flex-row items-center justify-between gap-8 mb-12">
                        <div className="flex flex-wrap items-center gap-3">
                            {/* Payment Methods */}
                            <div className="bg-white border border-slate-200 rounded p-2 flex items-center justify-center min-w-[50px] shadow-sm">
                                <span className="font-bold text-[#1434CB] italic text-sm">VISA</span>
                            </div>
                            <div className="bg-white border border-slate-200 rounded p-2 flex items-center justify-center min-w-[50px] shadow-sm">
                                <div className="relative w-6 h-4 flex items-center justify-center">
                                    <div className="absolute left-0 w-4 h-4 rounded-full bg-[#EB001B]/90 mix-blend-multiply"></div>
                                    <div className="absolute right-0 w-4 h-4 rounded-full bg-[#F79E1B]/90 mix-blend-multiply"></div>
                                </div>
                            </div>
                            <div className="bg-white border border-slate-200 rounded p-2 flex items-center justify-center min-w-[50px] shadow-sm">
                                <span className="font-bold bg-[#0070BA] text-white px-1 rounded-sm italic text-xs">AMEX</span>
                            </div>
                            <div className="bg-white border border-slate-200 rounded p-2 flex items-center justify-center min-w-[50px] shadow-sm">
                                <span className="font-bold text-orange-600 text-[10px] tracking-wider">DISCOVER</span>
                            </div>
                            <span className="text-indigo-600 font-bold text-sm ml-2">and more</span>
                        </div>

                        <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-slate-700 font-medium">
                            <Link href="#" className="hover:underline">NPRD request policy</Link>
                            <Link href="/privacy-policy" className="hover:underline">Privacy policy</Link>
                            <Link href="/refund-policy" className="hover:underline">Refund policy</Link>
                            <Link href="/terms-of-service" className="hover:underline">Terms of service</Link>
                        </div>
                    </div>

                    {/* Row 3: Copyright */}
                    <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-600 font-medium pt-8 border-t border-slate-200">
                        <p>© 2004-2026 ZenexCloud – Launch, grow, and succeed online, supported by AI that puts the power in your hands.</p>
                        <p>Prices are listed without VAT</p>
                    </div>

                </div>
            </div>
        </footer>
    );
};

export default Footer;
