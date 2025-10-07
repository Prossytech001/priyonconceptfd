import Image from "next/image";

import Hero from "../components/Hero";
import CategoryHighlights from "@/components/CategoryHighlights";
import NewArrivals  from "@/components/NewArrivals";
import BestSelling from "@/components/BestSelling";
import CallToActionBanner from "@/components/CallToActionBanner"


export default function Home() {
  return (
    <>
     
      <Hero />
      <CategoryHighlights/>
      <NewArrivals/>
      <CallToActionBanner/>
      <BestSelling/>
    </>
  );
}
