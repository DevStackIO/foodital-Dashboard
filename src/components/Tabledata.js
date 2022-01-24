import React from 'react';
import './Tabledata.css';
import { Button } from './Button';
import { Link } from 'react-router-dom';

function Tabledata() {
  return (
    <section className='table-data'>
      <h1>Leadership Board</h1>
      <div className='tabledata-container'>
      <table>
                <tr>
                    <th>No.</th>
                    <th>NAME</th>
                    <th>POINTS</th>
                    <th>COMMISSION</th>
                </tr>
                <tr>
                    <td>1</td>
                    <td>Nkemdirim Oyinlade</td>
                    <td>30 POINTS</td>
                    <td>#4500</td>
                </tr>
                <tr>
                    <td>2</td>
                    <td>Ebrechi Fargo</td>
                    <td>8 POINTS</td>
                    <td>#4500</td>
                </tr>
                <tr>
                    <td>2</td>
                    <td>Nkemdirim Oyinlade</td>
                    <td>30 POINTS</td>
                    <td>#4500</td>
                </tr>
                <tr>
                    <td>4</td>
                    <td>Nkemdirim Oyinlade</td>
                    <td>30 POINTS</td>
                    <td>#4500</td>
                </tr>
                <tr>
                    <td>5</td>
                    <td>Nkemdirim Oyinlade</td>
                    <td>30 POINTS</td>
                    <td>#4500</td>
                </tr>
                <tr>
                    <td>6</td>
                    <td>Nkemdirim Oyinlade</td>
                    <td>30 POINTS</td>
                    <td>#4500</td>
                </tr>
                <tr>
                    <td>7</td>
                    <td>Nkemdirim Oyinlade</td>
                    <td>30 POINTS</td>
                    <td>#4500</td>
                </tr>
                <tr>
                    <td>8</td>
                    <td>Nkemdirim Oyinlade</td>
                    <td>30 POINTS</td>
                    <td>#4500</td>
                </tr>
                <tr>
                    <td>9</td>
                    <td>Nkemdirim Oyinlade</td>
                    <td>30 POINTS</td>
                    <td>#4500</td>
                </tr>
                <tr>
                    <td>10</td>
                    <td>Nkemdirim Oyinlade</td>
                    <td>30 POINTS</td>
                    <td>#4500</td>
                </tr>
            </table>
            
            <button className='table-btn'>Generate Full Report <i class="fas fa-arrow-right"></i></button>
      </div>
    </section>

  );
}

export default Tabledata;
