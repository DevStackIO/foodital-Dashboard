import React, { useState } from 'react';
import '../../App.css';
import Header from '../Header';
import Cards from '../Cards';
import Tabledata from '../Tabledata';
import FAQcompo from '../FAQcompo';
import Footer from '../Footer';
import Navbar from '../Navbar';
import Pchart from '../Pchart';

function Home() {
  return (
    <>
      <Navbar />
      <Header />
      <Cards />
      <Tabledata />
      <Pchart />
      <FAQcompo />
      <Footer />
    </>
  );
}

export default Home;
