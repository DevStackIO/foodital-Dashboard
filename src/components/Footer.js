import React from 'react'
import './Footer.css';
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <section className='footer'>
            <div className='footer-container'>

                <Link>
                    <img 
                        className="footer-logo"
                        src='./asset/foodgital-icon.png' 
                        alt='Foodgital Brand Logo'
                    />
                </Link>

                <div className='fcopy'>
                    <h1>© 2021 Foodgital. All rights reserved</h1>
                </div>

                <ul className='fsocial-icon'>
                    <Link to='/'>
                        <li><i class="fab fa-instagram"></i></li>
                    </Link>

                    <Link to='/'>
                        <li><i class="fab fa-twitter"></i></li>
                    </Link>

                    <Link to='/'>
                        <li><i class="fab fa-youtube"></i></li>
                    </Link>
                </ul>
            </div>
        </section>
    )
}

export default Footer;
