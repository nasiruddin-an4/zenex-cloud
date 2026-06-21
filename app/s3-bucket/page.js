import S3Hero from "../components/S3Hero";
import S3Pricing from "../components/S3Pricing";
import S3Features from "../components/S3Features";

export const metadata = {
  title: "S3 Object Storage - Zenex Cloud Solutions",
  description: "S3-compatible cloud object storage with 99.99% uptime, redundant storage, and secure access.",
};

export default function S3BucketPage() {
  return (
    <div>
      <S3Hero />
      <S3Pricing />
      <S3Features />
    </div>
  );
}
