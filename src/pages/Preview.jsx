import React from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Platform from "../components/Platform";

import Contact from "../components/Contact";
import Flow from "../components/Flow";
import Footer from "../components/Footer";
import OperationalUtility from "../components/Operation";
import DecisionSimulator from "../components/Decision";
import Infrastructure from "../components/Features";
import Pricing from "../components/Pricing";

const Preview = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />

      <Platform />
      <Flow />
      <OperationalUtility />
      <Infrastructure />
      <DecisionSimulator />
      <Pricing />
      <Contact />
      <Footer />
    </div>
  );
};

export default Preview;
