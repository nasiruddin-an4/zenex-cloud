import VPSHero from "../components/VPSHero";
import VPSPricing from "../components/VPSPricing";
import VPSFeatures from "../components/VPSFeatures";
import VPSUseCases from "../components/VPSUseCases";

export const metadata = {
  title: "VPS Hosting - Zenex Cloud Solutions",
  description: "Managed VPS Hosting with dedicated vCPU, NVMe SSD, snapshot backups, and unlimited bandwidth.",
};

export default function VPSPage() {
  return (
    <div>
      <VPSHero />
      <VPSPricing />
      <VPSFeatures />
      <VPSUseCases />
    </div>
  );
}
