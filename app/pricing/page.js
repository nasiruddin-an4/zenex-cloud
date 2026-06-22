import PricingClient from "./PricingClient";
import FAQ from "../components/FAQ";

export const metadata = {
  title: "Pricing - Zenex Cloud Solutions",
  description: "Explore all hosting plans and pricing. Web Hosting, VPS Hosting, and S3 Object Storage at competitive rates.",
};

export default function PricingPage() {
  return (
    <div>
      <PricingClient />
      <FAQ />
    </div>
  );
}
