import S3Client from "./S3Client";

export const metadata = {
  title: "S3 Object Storage - Zenex Cloud Solutions",
  description: "S3-compatible cloud object storage with 99.99% uptime, redundant storage, and secure access.",
};

export default function S3BucketPage() {
  return (
    <div>
      <S3Client />
    </div>
  );
}
