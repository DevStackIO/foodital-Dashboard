import React from 'react'
import './Pchart.css';

function Pchart() {
    return (
        <section className='p-chart'>
            <div className='pc-head'>
                <h1>Your Performance</h1>
                <div className='s-calender'>
                    <small>March 2021 - June 2021</small>
                    <i class="fas fa-calendar"></i>
                </div>
            </div>

            <div className='chart-wrapper'>
                {/* Top Varius Chart Toggle Buttons */}
                <div className='c-help'>
                    {/* Varius Chart Buttons */}
                    <div className='c-lists'>
                        <button>Foodies</button>
                        <button>Vendors</button>
                        <button>Delivery</button>
                    </div>

                    {/* Weekly Chart Buttons */}
                    <div className='c-lists weekly-chart'>
                        <button>Day</button>
                        <button>Week</button>
                        <button>Month</button>
                    </div>
                </div>

                {/* Chart Section */}
                <div className='chart-container'>
                    
                </div>
            </div>
        </section>
    )
}

export default Pchart;
