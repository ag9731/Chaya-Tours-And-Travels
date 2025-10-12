import AboutUsCountSection from "../components/AboutUsPageComponents/AboutUsCountSection";
import AboutUsHeroSection from "../components/AboutUsPageComponents/AboutUsHeroSection"
import AboutUsSection2 from "../components/AboutUsPageComponents/AboutUsSection2";
import HomeFacilitiesSection from "../components/HomePageComponents/HomeFacilitiesSection";


const page = () => {
  return (
    <div className="flex flex-col gap-20 bg-gray-50">
      <AboutUsHeroSection />
      <AboutUsSection2/>
      <AboutUsCountSection/>
      <HomeFacilitiesSection/>
    </div>
  );
}

export default page
