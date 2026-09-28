import HeroSection from "./../Components/HomePage/HeroSection/HeroSection";
import WhyChoose from "./../Components/HomePage/WhyChoose/WhyChoose";
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
import { client } from './../sanity/client';

export const metadata = {
  title:
    "UAE Attestation in Bangalore at Best Price – 1Hr Documents Collection",
  description:
    "UAE Attestation in Bangalore at Best Price. If you are planning to work, study, start a business, or move your family to the UAE. Call Now!",
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

const heroQuery = `*[_type == "heroSection"][0]{
  subtitle,
  title,
  description
}`;
const keywordsQuery = `*[_type == "homeKeywords"][0]{
  keywords
}`;

const faqQuery = `*[_type == "homeFaq"][0]{
  title,
  faqs[]{
    question,
    answer
  }
}`;
const homeHeaderQuery = `*[_type == "homeHeaderContent"][0]{
  heading,
  paragraphs
}`;
export default async function HomePage() {
  const heroData = await client.fetch(heroQuery);
  const keywordsData = await client.fetch(keywordsQuery);
  const faqData = await client.fetch(faqQuery);
  const homeHeaderData = await client.fetch(homeHeaderQuery);

  return (
    <div>
      <HeroSection data={heroData} />
      <HomeHeaderContent data={homeHeaderData} />     
       <ServicesHome />
      <HomeAboutUs />
      <HomeStats />
      <WhyChoose />
      <Testimonial />
      <HomeRole />
      <HomeKeywords data={keywordsData} />
      <Reviews />
      <HomeFaq data={faqData} />      
      <Map />
      <HomeContent />
    </div>
  );
}