import React from 'react';
import Vendordata from '../../Vendordata';
import { Button } from '../Button';
import EditProfile from '../EditProfile';
import Footer from '../Footer';
import Navbar from '../Navbar';
import Withdraw from '../Withdraw';
import './Manage.css';

function Manage() {
  return (
    <>
    <Navbar />
    <section className='welcome'>
      <div className='welcome-container'>
        <div className='welcome-txt'>
          <h1>Hello, Dara</h1>
          <p>
            Earn a living doing something you love
            Lorem ipsum dolor sit amet, consectetur 
            adipiscing elit. Venenatis scelerisque at 
            quam congue posuere libero in sit quam. Consequat, 
            scelerisque non tincidunt sit lectus.
         </p>
        </div>

        <img src='./asset/asset2.png' />
      </div>
    </section>

    <section className='price-chart'>
      <div className='pc-wrap'>
        <h1>You are on your way to ₦1,000,000</h1>
        <div className='pc-level'>
          {/* First Price chart level */}
          <ul className='level1'>
            <li>100 points</li>
            <li>300 points</li>
            <li>500 points</li>
            <li>750 points</li>
            <li>1000 points</li>
          </ul>

          {/* Level Indicator */}
          <ul className='str-line'>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
            </ul>

          {/* 2nd Price chart level */}
          <ul className='level3'>
            <li>₦10,000</li>
            <li>₦50,000</li>
            <li>₦100,000</li>
            <li>₦300,000</li>
            <li>₦1,000,000</li>
          </ul>
        </div>
      </div>
    </section>

    <Withdraw />
    <Vendordata />
    <EditProfile />
    <Footer />

    </>
  )
}

export default Manage;
