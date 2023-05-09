import React from "react";
import Layout from "../../components/Layout/Layout";
import Values from "../../components/landing-page/values/Values";
import AboutHero from "../../components/about/AboutHero";

const AboutUs = () => {
  return (
    <Layout>
      <AboutHero />
      <Values />
    </Layout>
  );
};

export default AboutUs;
