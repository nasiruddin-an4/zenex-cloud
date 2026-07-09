import HomeClient from "./HomeClient";
import FAQ from "./components/FAQ";
import CTA from "./components/CTA";

export const metadata = {
  title: "Home",
};

export default function Home() {
  return (
    <div>
      <HomeClient />
      <FAQ />
      <CTA />
    </div>
  );
}
