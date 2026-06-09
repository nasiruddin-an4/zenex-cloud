import HostingHero from "../components/HostingHero";
import HostingPricing from "../components/HostingPricing";
import HostingComparison from "../components/HostingComparison";
import HostingFeatures from "../components/HostingFeatures";
import HostingUseCases from "../components/HostingUseCases";

export const metadata = {
  title: "Cloud Hosting - Zenex Cloud Solutions",
  description: "Lightning-Fast Cloud Hosting with NVMe, full root access, and 99.97% uptime.",
};

export default function HostingPage() {
  return (
    <div>
      <HostingHero />
      <HostingPricing />
      <HostingComparison />
      <HostingFeatures />
      <HostingUseCases />
    </div>
  );
}
