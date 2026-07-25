import Hero from "../components/Hero";
import StatsBar from "../components/StatsBar";
import EducationFeatures from "../components/EducationFeatures";
import CultivatingMinds from "../components/CultivatingMinds";
import LatestNews from "../components/LatestNews";
import AdmissionsCTA from "../components/AdmissionsCTA";
import Footer from "../layout/Footer";

export default function Home() {
  return (
    <div className="bg-[#f7f3ea]">
      <Hero />
      <StatsBar />
      <EducationFeatures />
      <CultivatingMinds />
      <LatestNews />
      <AdmissionsCTA />
      <Footer />
    </div>
  );
}
