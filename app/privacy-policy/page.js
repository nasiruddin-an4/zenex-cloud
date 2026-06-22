export const metadata = {
  title: "Privacy Policy - Zenex Cloud Solutions",
  description: "Learn how ZenexCloud collects, uses, and protects your information.",
};

export default function PrivacyPolicyPage() {
    return (
        <div className="bg-slate-50 font-sans min-h-screen pt-32 pb-24">
            <div className="max-w-4xl mx-auto px-6 md:px-12 bg-white p-10 md:p-16 rounded-2xl shadow-sm border border-slate-100">
                <h1 className="text-4xl md:text-5xl font-bold text-[#005073] mb-8">Privacy Policy</h1>
                
                <div className="prose prose-slate max-w-none text-slate-600 leading-relaxed space-y-6">
                    <p className="text-lg">
                        This is the Privacy Policy for ZenexCloud. It explains how we collect, use, and protect the information of our website visitors and customers. This policy is part of our Terms of Service and applies to all interactions with our website and services.
                    </p>

                    <h2 className="text-2xl font-bold text-slate-800 mt-10 mb-4">What Information Do We Collect?</h2>
                    <p>When you visit our website or use our services, we may collect the following:</p>
                    
                    <h3 className="text-xl font-semibold text-slate-800 mt-6 mb-3">Automatically Collected Information:</h3>
                    <ul className="list-disc pl-6 space-y-2">
                        <li>IP address and browser type</li>
                        <li>Device type and operating system</li>
                        <li>Referring/exit pages and URLs</li>
                        <li>Date/time of visits and site usage behavior</li>
                    </ul>

                    <h3 className="text-xl font-semibold text-slate-800 mt-6 mb-3">Information You Provide:</h3>
                    <ul className="list-disc pl-6 space-y-2">
                        <li>Full name, company name, and contact details</li>
                        <li>Email address and billing address</li>
                        <li>Payment information (handled securely via third-party processors like Stripe or PayPal)</li>
                        <li>Login credentials (username, encrypted password)</li>
                        <li>Domain registration details (when applicable)</li>
                    </ul>

                    <h2 className="text-2xl font-bold text-slate-800 mt-10 mb-4">How We Use Your Information</h2>
                    <p>We use your information to:</p>
                    <ul className="list-disc pl-6 space-y-2">
                        <li>Provide and manage hosting, email, and domain services</li>
                        <li>Process payments and issue invoices</li>
                        <li>Register domain names and SSL certificates</li>
                        <li>Respond to customer support inquiries</li>
                        <li>Improve our infrastructure, services, and website experience</li>
                    </ul>
                    <p>We may also use non-personally identifiable information for analytics and performance optimization.</p>

                    <h2 className="text-2xl font-bold text-slate-800 mt-10 mb-4">Cookies and Tracking Technologies</h2>
                    <p>We use cookies and third-party tools (such as Google Analytics and Facebook Pixel) to:</p>
                    <ul className="list-disc pl-6 space-y-2">
                        <li>Analyze site traffic and user behavior</li>
                        <li>Show relevant ads on third-party platforms (where applicable)</li>
                    </ul>
                    <p>You may disable cookies in your browser settings, though this may limit some features.</p>

                    <h2 className="text-2xl font-bold text-slate-800 mt-10 mb-4">Data Sharing and Third Parties</h2>
                    <p>We do not sell, rent, or share your personal data with unrelated third parties.</p>
                    <p>We may share your data with:</p>
                    <ul className="list-disc pl-6 space-y-2">
                        <li>Domain registrars (e.g., for WHOIS records)</li>
                        <li>Payment processors (e.g., Stripe, PayPal)</li>
                        <li>Infrastructure providers (e.g., cPanel, Cloudflare)</li>
                        <li>Legal authorities if required by law</li>
                    </ul>

                    <h2 className="text-2xl font-bold text-slate-800 mt-10 mb-4">How We Protect Your Data</h2>
                    <p>ZenexCloud applies multiple layers of security:</p>
                    <ul className="list-disc pl-6 space-y-2">
                        <li>SSL encryption</li>
                        <li>Firewalls and DDoS protection</li>
                        <li>Role-based access control</li>
                        <li>Secure data centers with 24/7 monitoring</li>
                    </ul>
                    <p>We comply with applicable data privacy standards, including GDPR, ISO/IEC 27001, and industry best practices.</p>

                    <h2 className="text-2xl font-bold text-slate-800 mt-10 mb-4">Your Rights</h2>
                    <p>You have the right to:</p>
                    <ul className="list-disc pl-6 space-y-2">
                        <li>Access your personal information</li>
                        <li>Request correction or deletion</li>
                        <li>Object to data processing for marketing</li>
                        <li>Withdraw consent (if consent was required)</li>
                    </ul>
                    <p>
                        To request any of the above, email us at <a href="mailto:privacy@zenexcloud.com" className="text-[#00AEEF] hover:underline">privacy@zenexcloud.com</a>.
                    </p>

                    <h2 className="text-2xl font-bold text-slate-800 mt-10 mb-4">Data Retention</h2>
                    <p>We retain your data for as long as your account is active or as required to provide services, comply with laws, and resolve disputes.</p>
                </div>
            </div>
        </div>
    );
}
