import React from "react";
import Header from "./Header";
import HeroBanner from "./HeroBanner";
import Banner from "./Banner";
import TopCourses from "./TopCourses";
import TopCatagories from "./TopCatagories";
import CountUpProfile from "./CountUpProfile";
import Events from "./Events";

export default function Home() {
  return (
    <>
      <section className="home__top">
        <Header />
        <HeroBanner />
      </section>
      <Banner />
      <TopCatagories />
      <TopCourses />
      <CountUpProfile />
      <Events />
    </>
  );
}
