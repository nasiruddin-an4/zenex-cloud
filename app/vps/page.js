import VPSClient from "./VPSClient";

export const metadata = {
  title: "VPS Hosting - Zenex Cloud Solutions",
  description: "Managed VPS Hosting with dedicated vCPU, NVMe SSD, snapshot backups, and unlimited bandwidth.",
};

export default function VPSPage() {
  return (
    <div>
      <VPSClient />
    </div>
  );
}
