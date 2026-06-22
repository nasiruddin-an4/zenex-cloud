import GPUClient from "./GPUClient";

export const metadata = {
  title: "GPU Server Hosting - Zenex Cloud Solutions",
  description: "Enterprise-grade GPU infrastructure for startups. High-performance NVIDIA GPU servers for AI training, machine learning, and 3D rendering.",
};

export default function GPUPage() {
  return (
    <div>
      <GPUClient />
    </div>
  );
}
