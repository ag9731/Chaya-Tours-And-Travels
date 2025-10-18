import Image from "next/image";
import styles from "./page.module.css";
import HomeBanner from "./components/HomePageComponents/HomeBanner";
import HomeAboutUs from "./components/HomePageComponents/HomeAboutUs";
import HomeFacilitiesSection from "./components/HomePageComponents/HomeFacilitiesSection";
import HomeFleetsSection from "./components/HomePageComponents/HomeFleetsSection";
import HomeServices from "./components/HomePageComponents/HomeServices";
import HomePageContactUs from "./components/HomePageComponents/HomePageContactUs";
import HomePackagesSection from "./components/HomePageComponents/HomePackagesSection";

export default function Home() {
  return (
    <>
      <div className="flex flex-col gap-20 bg-gray-50">
        <HomeBanner />
        <HomeAboutUs />
        <HomePackagesSection/>
        <HomeFacilitiesSection />
        <HomeFleetsSection/>
        <HomeServices/>
        <HomePageContactUs/>
      </div>
    </>
  );
}
