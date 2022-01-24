import React from 'react';
import './Withdraw.css';

function Withdraw() {
  return (
    <>
        <section className='withdraw'>
      <div className='withdraw-container io1'>
        {/* two flex, withdraw & pipeline */}
          <div className='withdraw-amount'>
            <h1 className='Dh1'>withdraw</h1>

            <div className='te-cpn'>
              <div className='te'>
                <h6>Total Earnings</h6>
                <h1>₦54,550</h1>
              </div>

              <div className='te'>
                <h6>Total points</h6>
                <h1>420</h1>
              </div>
            </div>

            <button className='cpn-btn'>Withdraw</button>
          </div>

          <div className='withdraw-amount io2'>
            <h1 className='Dh1'>pipeline</h1>

            <div className='te-cpn'>
              <div className='te hz'>
                <h6>Foodie</h6>
                <h1>300</h1>
                <ul>
                    <li></li>
                </ul>
              </div>

              <div className='te hz'>
                <h6>Vendor</h6>
                <h1>120</h1>
                <ul><li></li></ul>
              </div>

              <div className='te hz'>
                <h6>Delivery</h6>
                <h1>40</h1>
                <ul>
                    <li></li>
                </ul>
              </div>
            </div>
          </div>
      </div>
    </section>

    </>
  )
}

export default Withdraw;
