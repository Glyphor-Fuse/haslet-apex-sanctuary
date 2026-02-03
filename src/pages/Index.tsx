import Hero from "@/components/Hero";
import SponsorshipSlider from "@/components/SponsorshipSlider";
import ResidentSpotlight from "@/components/ResidentSpotlight";
import TransparencyGrid from "@/components/TransparencyGrid";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100 overflow-x-hidden">
      <Hero />
      <SponsorshipSlider />
      <ResidentSpotlight />
      <TransparencyGrid />
      <Footer />
    </main>
  );
};

export default Index;
