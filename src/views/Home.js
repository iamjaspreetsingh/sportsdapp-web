import React from 'react';
// import sections
import Hero from '../components/sections/Hero';
import FeaturesTiles from '../components/sections/FeaturesTiles';
import FeaturesSplit from '../components/sections/FeaturesSplit';
import Download from '../components/sections/Download';
// import Testimonial from '../components/sections/Testimonial';
import Cta from '../components/sections/Cta';
import CtaTopHeader from '../components/sections/CtaTopHeader';
import Footer from '../components/layout/Footer';

const Home = () => {
  return (
    <>
    {/* <CtaTopHeader/> */}

      <Hero className="illustration-section-01" />

      <FeaturesTiles />
      <FeaturesSplit invertMobile topDivider imageFill className="illustration-section-02" />

      {/* <Testimonial topDivider /> */}
      <Cta split />
      <Download/>
    </>
  );
}

export default Home;
