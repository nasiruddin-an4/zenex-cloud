import HomeClient from "./HomeClient";
import FAQ from "./components/FAQ";
import CTA from "./components/CTA";

export default function Home() {
  return (
    <div>
      <HomeClient />
      <FAQ />
      <CTA />
    </div>
  );
}
