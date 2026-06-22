import React from 'react';
import { Check } from 'lucide-react';

export const metadata = {
  title: "Refund Policy - Zenex Cloud Solutions",
  description: "Learn about ZenexCloud's refund policy, eligibility, and process.",
};

const CheckListItem = ({ children }) => (
    <li className="flex items-start gap-3 mb-2">
        <div className="mt-1 flex-shrink-0 text-[#00AEEF]">
            <Check className="w-5 h-5" />
        </div>
        <span className="text-slate-600">{children}</span>
    </li>
);

export default function RefundPolicyPage() {
    return (
        <div className="bg-slate-50 font-sans min-h-screen pt-32 pb-24">
            <div className="max-w-4xl mx-auto px-6 md:px-12 bg-white p-10 md:p-16 rounded-2xl shadow-sm border border-slate-100">
                
                <h1 className="text-4xl md:text-5xl font-bold text-[#005073] mb-4">Refund <span className="text-[#00AEEF]">Policy</span></h1>
                <h2 className="text-xl font-medium text-slate-500 mb-8">Your Cloud, Fully Managed - Stress-Free & Secure</h2>
                
                <div className="prose prose-slate max-w-none text-slate-600 leading-relaxed space-y-8">
                    <p className="text-lg">
                        At ZenexCloud, customer satisfaction is our top priority. However, since we provide digital products/services such as hosting, domain registration, SaaS tools, or cloud services, refunds are subject to specific conditions.
                    </p>

                    <div>
                        <h2 className="text-2xl font-bold text-slate-800 mb-4">General Refund <span className="text-[#00AEEF]">Terms</span></h2>
                        <ul className="list-none pl-0 space-y-3">
                            <CheckListItem>We offer refunds only for eligible services purchased directly from ZenexCloud.com.</CheckListItem>
                            <CheckListItem>Refund requests must be made within 7 days of the initial purchase.</CheckListItem>
                            <CheckListItem>After 7 days, no refunds will be provided.</CheckListItem>
                            <CheckListItem>Setup fees, domain registrations, or any third-party costs are non-refundable.</CheckListItem>
                        </ul>
                    </div>

                    <div>
                        <h2 className="text-2xl font-bold text-slate-800 mb-4">Eligibility for <span className="text-[#00AEEF]">Refunds</span></h2>
                        <p className="mb-4">Refunds are applicable only if:</p>
                        <ul className="list-none pl-0 space-y-3">
                            <CheckListItem>The service did not work as described and we failed to resolve the issue.</CheckListItem>
                            <CheckListItem>There was a technical fault from our side preventing the service from being used.</CheckListItem>
                            <CheckListItem>The customer did not violate our Terms of Service.</CheckListItem>
                        </ul>
                    </div>

                    <div>
                        <h2 className="text-2xl font-bold text-slate-800 mb-4">Non-Refundable <span className="text-[#00AEEF]">Services</span></h2>
                        <ul className="list-none pl-0 space-y-3">
                            <CheckListItem>Domain Registrations & Renewals</CheckListItem>
                            <CheckListItem>SSL Certificates & Software Licenses</CheckListItem>
                            <CheckListItem>Setup or Installation Fees</CheckListItem>
                        </ul>
                    </div>

                    <div>
                        <h2 className="text-2xl font-bold text-slate-800 mb-4">How To Request <span className="text-[#00AEEF]">A Refund</span></h2>
                        <p className="mb-4">To request a refund, please contact our support team at <a href="mailto:support@zenexcloud.com" className="text-[#00AEEF] hover:underline">support@zenexcloud.com</a> with:</p>
                        <ul className="list-none pl-0 space-y-3">
                            <CheckListItem>Your order details</CheckListItem>
                            <CheckListItem>The reason for your refund request</CheckListItem>
                            <CheckListItem>Any relevant screenshots or evidence (if applicable)</CheckListItem>
                        </ul>
                    </div>

                    <div>
                        <h2 className="text-2xl font-bold text-slate-800 mb-4">Processing <span className="text-[#00AEEF]">Time</span></h2>
                        <p>
                            Once your refund request is approved, we will process it within 7-10 business days. The refund will be credited to the original payment method.
                        </p>
                    </div>

                    <div>
                        <h2 className="text-2xl font-bold text-slate-800 mb-4">Modifications <span className="text-[#00AEEF]">To Policy</span></h2>
                        <p>
                            ZenexCloud reserves the right to modify this Refund Policy at any time without prior notice.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
