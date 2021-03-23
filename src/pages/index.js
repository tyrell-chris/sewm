import * as React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./../components/Header/Index";
import Hero from "./../containers/HeroSection/Index";
import SectionTwo from "./../containers/SectionTwo/Index";
import SectionThree from "./../containers/SectionThree/Index";
import SectionFour from "./../containers/SectionFour/Index";
import SectionFive from "./../containers/SectionFive/Index";

const IndexPage = () => {
  return (
    <div>
      <Header />
      <Hero />
      <SectionTwo />
      <SectionThree />
      <SectionFour />
      <SectionFive />
    </div>
  );
};

export default IndexPage;
