import React from "react";
import Header from "./Header";
import HeroBanner from "./HeroBanner";
import Banner from "./Banner";
import TopCourses from "./TopCourses";

export default function Home() {
  return (
    <>
      <section className="home__top">
        <Header />
        <HeroBanner />
      </section>
      <Banner />
      <TopCourses />
    </>
  );
}
