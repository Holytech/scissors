import React from 'react';
import NavBar from '../components/NavBar';
import Hero from '../components/Hero';
import Footer from '../components/Footer';
import WhyUs from '../components/WhyUs';
import Pricing from '../components/Pricing';
import FAQ from '../components/FAQ';
import Revo from '../components/Revo';
import TrimLink from '../components/TrimLink';

const Home = () => {
  return (
    <>
      <NavBar />
      <Hero />
      <WhyUs />
      <Pricing />
      <TrimLink />
      <FAQ />
      <Revo />
      <Footer />
    </>
  );
};

export default Home;
