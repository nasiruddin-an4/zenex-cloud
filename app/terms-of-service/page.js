import React from 'react';
import { Check } from 'lucide-react';

export const metadata = {
  title: "Terms of Service - Zenex Cloud Solutions",
  description: "Read the Terms of Service for ZenexCloud.",
};

const CheckListItem = ({ children }) => (
    <li className="flex items-start gap-3 mb-2">
        <div className="mt-1 flex-shrink-0 text-[#00AEEF]">
            <Check className="w-5 h-5" />
        </div>
        <span className="text-slate-600">{children}</span>
    </li>
);

export default function TermsOfServicePage() {
    return (
        <div className="bg-slate-50 font-sans min-h-screen pt-32 pb-24">
            <div className="max-w-4xl mx-auto px-6 md:px-12 bg-white p-10 md:p-16 rounded-2xl shadow-sm border border-slate-100">
                
                <h1 className="text-4xl md:text-5xl font-bold text-[#005073] mb-8">Terms of <span className="text-[#00AEEF]">Service</span></h1>
                
                <div className="prose prose-slate max-w-none text-slate-600 leading-relaxed space-y-8">
                    <p className="text-lg">
                        Welcome to ZenexCloud. By accessing or using our services, you agree to comply with and be bound by the following Terms of Service. If you do not agree to these terms, please do not use our services.
                    </p>

                    <div>
                        <h2 className="text-2xl font-bold text-slate-800 mb-4">Service <span className="text-[#00AEEF]">Contract</span></h2>
                        <p>
                            This agreement is between ZenexCloud (referred to as "we", "our", or "us") and the user ("you", "client", or "customer"). By purchasing or using any ZenexCloud product (e.g., cloud hosting, VPS, email, domain registration, or SSL), you accept this agreement in full.
                        </p>
                        <p className="mt-4">
                            ZenexCloud may revise this policy at any time. Continued use of our services constitutes your agreement to any changes.
                        </p>
                    </div>

                    <div>
                        <h2 className="text-2xl font-bold text-slate-800 mb-4">Delivery of <span className="text-[#00AEEF]">Services</span></h2>
                        <p className="mb-4">ZenexCloud provides service provisioning timelines as follows:</p>
                        <ul className="list-none pl-0 space-y-3">
                            <CheckListItem><strong>Web Hosting & Email:</strong> Instant after payment</CheckListItem>
                            <CheckListItem><strong>VPS / Cloud Servers:</strong> Within 1-24 hours</CheckListItem>
                            <CheckListItem><strong>Domain Registration:</strong> Immediate but subject to registrar confirmation</CheckListItem>
                            <CheckListItem><strong>SSL Certificates:</strong> Delivery time varies depending on provider verification</CheckListItem>
                        </ul>
                    </div>

                    <div>
                        <h2 className="text-2xl font-bold text-slate-800 mb-4">Refund <span className="text-[#00AEEF]">Policy</span></h2>
                        <p className="mb-4">ZenexCloud offers a 7-day money-back guarantee on web hosting and email plans. Refunds are not available for:</p>
                        <ul className="list-none pl-0 space-y-3">
                            <CheckListItem>Domain registrations or renewals</CheckListItem>
                            <CheckListItem>SSL Certificates</CheckListItem>
                            <CheckListItem>VPS/Cloud servers</CheckListItem>
                            <CheckListItem>Misuse or policy violations</CheckListItem>
                            <CheckListItem>Requests beyond the 7-day window</CheckListItem>
                        </ul>
                    </div>

                    <div>
                        <h2 className="text-2xl font-bold text-slate-800 mb-4">SLA <span className="text-[#00AEEF]">Conditions</span></h2>
                        <p>
                            We provide a 99.99% uptime guarantee for hosting services. If uptime drops below this rate (excluding scheduled maintenance), clients may request service credits.
                        </p>
                    </div>

                    <div>
                        <h2 className="text-2xl font-bold text-slate-800 mb-4">Free Domain <span className="text-[#00AEEF]">Conditions</span></h2>
                        <p className="mb-4 text-sm text-slate-500 italic">(If applicable during promotions)</p>
                        <p>
                            Free domains are valid for 1 year and limited to specific TLDs (.com, .net, etc.). Renewals are billed at regular prices. Free domain is revoked if hosting is canceled or refunded.
                        </p>
                    </div>

                    <div>
                        <h2 className="text-2xl font-bold text-slate-800 mb-4"><span className="text-[#00AEEF]">Affiliates</span></h2>
                        <p>
                            Affiliate commissions may be suspended or revoked for misuse, fake referrals, or spam tactics. Payments are made monthly upon minimum payout thresholds.
                        </p>
                    </div>

                    <div>
                        <h2 className="text-2xl font-bold text-slate-800 mb-4">Web Hosting <span className="text-[#00AEEF]">Terms</span></h2>
                        <ul className="list-none pl-0 space-y-3">
                            <CheckListItem>Resource overuse may result in temporary suspension</CheckListItem>
                            <CheckListItem>Abusive activities (spam, phishing, illegal content) will lead to immediate termination</CheckListItem>
                            <CheckListItem>All hosting clients are required to follow usage guidelines and maintain account security</CheckListItem>
                        </ul>
                    </div>

                    <div>
                        <h2 className="text-2xl font-bold text-slate-800 mb-4">General <span className="text-[#00AEEF]">Policies</span></h2>
                        <ul className="list-none pl-0 space-y-3">
                            <CheckListItem>Clients are responsible for their content and backups</CheckListItem>
                            <CheckListItem>ZenexCloud is not liable for data loss unless covered by managed backup plans</CheckListItem>
                            <CheckListItem>Resource-intensive apps may require VPS plans</CheckListItem>
                            <CheckListItem>We reserve the right to refuse service at our discretion</CheckListItem>
                        </ul>
                    </div>

                    <div>
                        <h2 className="text-2xl font-bold text-slate-800 mb-4">Suspension & <span className="text-[#00AEEF]">Termination</span></h2>
                        <p className="mb-4">Accounts may be suspended or terminated for:</p>
                        <ul className="list-none pl-0 space-y-3">
                            <CheckListItem>Spam, malware, or phishing</CheckListItem>
                            <CheckListItem>Hosting illegal or copyrighted content without permission</CheckListItem>
                            <CheckListItem>Excessive server resource usage</CheckListItem>
                            <CheckListItem>Chargebacks or payment fraud</CheckListItem>
                            <CheckListItem>Abuse towards support staff</CheckListItem>
                        </ul>
                    </div>

                    <div>
                        <h2 className="text-2xl font-bold text-slate-800 mb-4">Resource <span className="text-[#00AEEF]">Usage</span></h2>
                        <p>
                            Shared hosting customers are limited by fair-use policies. Heavy workloads (e.g., cron jobs, video processing, mass emailing) require VPS or higher plans.
                        </p>
                    </div>

                    <div>
                        <h2 className="text-2xl font-bold text-slate-800 mb-4">VPS CPU <span className="text-[#00AEEF]">Usage</span></h2>
                        <p>
                            VPS plans include dedicated vCPUs. Constant 100% usage may trigger investigation and temporary limits. Misuse may result in plan upgrades or service changes.
                        </p>
                    </div>

                    <div>
                        <h2 className="text-2xl font-bold text-slate-800 mb-4"><span className="text-[#00AEEF]">Content</span></h2>
                        <p className="mb-4">Users must not host, share, or distribute content that is:</p>
                        <ul className="list-none pl-0 space-y-3">
                            <CheckListItem>Pornographic, hateful, or threatening</CheckListItem>
                            <CheckListItem>Copyrighted without authorization</CheckListItem>
                            <CheckListItem>Malicious in nature (e.g., viruses, DDoS tools)</CheckListItem>
                            <CheckListItem>In violation of local or international law</CheckListItem>
                        </ul>
                    </div>

                    <div>
                        <h2 className="text-2xl font-bold text-slate-800 mb-4">Reseller <span className="text-[#00AEEF]">Terms</span></h2>
                        <p>
                            Resellers must ensure their clients follow ZenexCloud's terms. Abuse by resold clients may result in reseller account suspension.
                        </p>
                    </div>

                    <div>
                        <h2 className="text-2xl font-bold text-slate-800 mb-4">Account <span className="text-[#00AEEF]">Transfers</span></h2>
                        <p>
                            ZenexCloud may assist with account migration within the first 30 days of purchase. We do not guarantee 100% data accuracy in migrations due to platform differences.
                        </p>
                    </div>

                    <div>
                        <h2 className="text-2xl font-bold text-slate-800 mb-4">Discount <span className="text-[#00AEEF]">Vouchers</span></h2>
                        <p>
                            Promotional codes cannot be reused or applied to existing plans. Misuse will lead to cancellation of the discount and possible account review.
                        </p>
                    </div>

                    <div>
                        <h2 className="text-2xl font-bold text-slate-800 mb-4">Account <span className="text-[#00AEEF]">Payments</span></h2>
                        <ul className="list-none pl-0 space-y-3">
                            <CheckListItem>Payments must be made in advance</CheckListItem>
                            <CheckListItem>Late payments may result in service suspension</CheckListItem>
                            <CheckListItem>Repeated non-payment may lead to termination</CheckListItem>
                            <CheckListItem>Chargebacks will lead to immediate suspension</CheckListItem>
                        </ul>
                    </div>

                    <div>
                        <h2 className="text-2xl font-bold text-slate-800 mb-4">Overusage <span className="text-[#00AEEF]">Fees</span></h2>
                        <p>
                            Overuse of bandwidth, storage, or CPU may result in automatic upgrade, suspension, or additional billing.
                        </p>
                    </div>

                    <div>
                        <h2 className="text-2xl font-bold text-slate-800 mb-4"><span className="text-[#00AEEF]">Amendments</span></h2>
                        <p>
                            ZenexCloud may update this TOS periodically. Continued use of services after updates constitutes your agreement. We recommend reviewing this page regularly.
                        </p>
                    </div>

                    <div>
                        <h2 className="text-2xl font-bold text-slate-800 mb-4">Contact <span className="text-[#00AEEF]">Us</span></h2>
                        <p>
                            For questions regarding this agreement, contact us at:
                        </p>
                        <div className="mt-4 flex flex-col sm:flex-row gap-4 font-medium text-slate-800">
                            <a href="mailto:legal@zenexcloud.com" className="flex items-center gap-2 hover:text-[#00AEEF] transition-colors">
                                <svg className="w-5 h-5 text-[#00AEEF]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                                legal@zenexcloud.com
                            </a>
                            <a href="tel:+447353738623" className="flex items-center gap-2 hover:text-[#00AEEF] transition-colors">
                                <svg className="w-5 h-5 text-[#00AEEF]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                </svg>
                                +44 7353 738623
                            </a>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}
