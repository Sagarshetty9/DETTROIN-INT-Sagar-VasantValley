
import Hero from "../components/Hero";
import StatsBar from "../components/StatsBar";
import EducationFeatures from "../components/EducationFeatures";
import CultivatingMinds from "../components/CultivatingMinds";
import LatestNews from "../components/LatestNews";
import Admissions from "../components/Admissions";
// import Footer from "../components/layout/Footer";
 
export default function Home() {
  return (
    <div className="bg-[#f7f3ea]">
      <Hero />
      <StatsBar />
      <EducationFeatures />
      <CultivatingMinds />
      <LatestNews />
      <Admissions />
      {/* <Footer /> */}
    </div>
  );
}
 