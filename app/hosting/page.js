import HostingClient from "./HostingClient";

export const metadata = {
  title: "Cloud Hosting - Zenex Cloud Solutions",
  description: "Lightning-Fast Cloud Hosting with NVMe, full root access, and 99.97% uptime.",
};

export default function HostingPage() {
  return (
    <div>
      <HostingClient />
    </div>
  );
}
