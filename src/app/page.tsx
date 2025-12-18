import HeroSection from "./../Components/HomePage/HeroSection/HeroSection";
import WhyChoose from "./../Components/HomePage/WhyChoose/WhyChoose";
import AboutUs from "../Components/HomePage/Testimonial/Testimonial";
import ServicesHome from "./../Components/HomePage/ServicesHome/ServicesHome";
import Map from "./../Components/Map/Map";
import Reviews from "./../Components/Reviews/Reviews";
import HomeAboutUs from "./../Components/HomePage/HomeAboutUs/HomeAboutUs";
import Testimonial from "../Components/HomePage/Testimonial/Testimonial";
import HomeStats from "./../Components/HomePage/HomeStats/HomeStats";
import HomeRole from "./../Components/HomePage/HomeRole/HomeRole";
import HomeContent from "./../Components/HomePage/HomeContent";
import HomeKeywords from "./../Components/HomePage/HomeKeywords/HomeKeywords";
import HomeFaq from "./../Components/HomePage/HomeFaq/HomeFaq";
import HomeHeaderContent from "./../Components/HomePage/HomeHeaderContent";
export const metadata = {
  title:
    "UAE Attestation in Bangalore at Best Price – 1Hr Documents Collection",
  description:
    "UAE Attestation in Bangalore at Best Price. If you are planning to work, study, start a business, or move your family to the UAE. Call Now!  ",
  alternates: {
    canonical: "https://uaeattestationbangalore.com/",
  },

  keywords: [
    "UAE attestation Bangalore",
    "UAE certificate attestation",
    "UAE embassy attestation Bangalore",
    "UAE document attestation",
    "UAE attestation services",
    "UAE MOFA attestation",
  ],
};
export default function HomePage() {
  return (
    <div>
      <HeroSection />
      <HomeHeaderContent />
      <ServicesHome />
      <HomeAboutUs />
      <HomeStats />
      <WhyChoose />
      <Testimonial />
      <HomeRole />
      <HomeKeywords />
      <Reviews />
      <HomeFaq />
      <Map />
      <HomeContent />
    </div>
  );
}
