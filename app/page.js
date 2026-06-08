import Hero from "./components/Hero";
import TrustedBy from "./components/TrustedBy";
import Services from "./components/Services";
import Features from "./components/Features";
import Benchmark from "./components/Benchmark";
import Solutions from "./components/Solutions";
import GPUServers from "./components/GPUServers";
import Migration from "./components/Migration";
import CTA from "./components/CTA";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Hero />
      <TrustedBy />
      <Services />
      <Features />
      <Benchmark />
      <Solutions />
      <GPUServers />
      <Migration />
      <CTA />
    </div>
  );
}
