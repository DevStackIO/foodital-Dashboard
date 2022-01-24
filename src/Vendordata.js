import React from 'react'
import './Vendordata.css';

function Vendordata() {
    return (
        <div className='vendordata'>
            <h1 className='y-vendor'>Your Vendors</h1>

            <div className='vendordata-component'>

                {/*<div className='top-help'>
                    <h1>plans</h1>
                    <div className='th-huse'>

                        <div className='op1'>
                            <h1>All</h1>
                            <button className='op1-btn'>Apply Filter</button>
                        </div>

                        <div className='op2'>
                            <div className='dv1'>
                                <h1>Select Date</h1>
                                <h2>Select Date</h2>
                                <i className='fas fa bar'></i>
                            </div>

                            <div className='dv2'>
                                <h1>Download CSV</h1>
                                <i className='fas fa bar'></i>
                            </div>
                        </div>
                    </div>
                </div> */}

                <section className='table-data'>
                <table>
                <tr>
                    <th>No.</th>
                    <th>VENDOR</th>
                    <th>PLAN</th>
                    <th>COMMISSION</th>
                </tr>
                <tr>
                    <td>1</td>
                    <td>Dough Factory</td>
                    <td>Free</td>
                    <td>--</td>
                </tr>
                <tr>
                    <td>2</td>
                    <td>Ebrechi Fargo</td>
                    <td>Standard</td>
                    <td>#4500</td>
                </tr>
                <tr>
                    <td>2</td>
                    <td>Nkemdirim Oyinlade</td>
                    <td>Standard</td>
                    <td>#4500</td>
                </tr>
                <tr>
                    <td>4</td>
                    <td>Nkemdirim Oyinlade</td>
                    <td>Standard</td>
                    <td>#4500</td>
                </tr>
                <tr>
                    <td>5</td>
                    <td>Nkemdirim Oyinlade</td>
                    <td>Free</td>
                    <td>--</td>
                </tr>
                <tr>
                    <td>6</td>
                    <td>KFC</td>
                    <td>Premium</td>
                    <td>#8500</td>
                </tr>
                <tr>
                    <td>7</td>
                    <td>Chicken Rep</td>
                    <td>Free</td>
                    <td>#4500</td>
                </tr>
                <tr>
                    <td>8</td>
                    <td>Nkemdirim Oyinlade</td>
                    <td>Free</td>
                    <td>#4500</td>
                </tr>
                <tr>
                    <td>9</td>
                    <td>Nkemdirim Oyinlade</td>
                    <td>Premium</td>
                    <td>#4500</td>
                </tr>
                <tr>
                    <td>10</td>
                    <td>Nkemdirim Oyinlade</td>
                    <td>Free</td>
                    <td>#4500</td>
                </tr>
            </table>
                </section>
            </div>
        </div>
    )
}

export default Vendordata;
