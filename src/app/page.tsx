import HeroSection from "./../Components/HomePage/HeroSection/HeroSection";
import WhyChoose from "./../Components/HomePage/WhyChoose/WhyChoose";
import AboutUs from "../Components/HomePage/Testimonial/Testimonial";
import ServicesHome from "./../Components/HomePage/ServicesHome/ServicesHome";
import Map from './../Components/Map/Map';
import Reviews from './../Components/Reviews/Reviews';
import HomeAboutUs from './../Components/HomePage/HomeAboutUs/HomeAboutUs';
import Testimonial from "../Components/HomePage/Testimonial/Testimonial";
import HomeStats from './../Components/HomePage/HomeStats/HomeStats';
import AttestationList from './../Components/HomePage/AttestationList/AttestationList';
import HomeRole from './../Components/HomePage/HomeRole/HomeRole';

export default function HomePage() {
  return (
    <div>
      <HeroSection />
      <ServicesHome />
      <HomeAboutUs />
      <HomeStats/>
      <WhyChoose />
      <Testimonial/>
      <HomeRole/>
      {/* <AttestationList/> */}
      <Reviews/>
      <Map/>
    </div>
  );
}
