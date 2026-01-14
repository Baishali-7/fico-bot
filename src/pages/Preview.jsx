import React from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Platform from "../components/Platform";
import Features from "../components/Features";
import Calculator from "../components/Calculator";
import Pricing from "../components/Pricing";
import Contact from "../components/Contact";
import Flow from "../components/Flow";
import Footer from "../components/Footer";

const Preview = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Platform />
      <Flow />
      <Features />
      <Calculator />
      <Pricing />
      <Contact />
      <Footer />
    </div>
  );
};

export default Preview;
