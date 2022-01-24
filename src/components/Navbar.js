import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const [dropbox, setDropbox] = useState(false);

  const dropdown = () =>{
    setDropbox(!dropbox)
  };


  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          {/* Foodgital logo */}
          <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
            <img src='./asset/foodgital-icon.png' alt='Foodgital Brand Logo' />
          </Link>

          {/* Menu/Toggle Icon */}
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>

          {/* navbar menu */}
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link to='/' className='nav-links active'>
                Home
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/Manage'
                className='nav-links'
              >
                Manage
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/FAQ'
                className='nav-links'
              >
                FAQ
              </Link>
            </li>
          </ul>
          
          {/* User Profile*/}
          <div className='user-dp'>
            <Link to='/Login'>
              <div className='user-dp-wrap'>
                <img src='./asset/profile-img.png' alt='User Image'/>
              </div>
            </Link>
            
            <Link to='/' className='dp-link' onClick={dropdown}>
              <small>Tobi Faboye <i class="fas fa-angle-right"></i></small>
            </Link>
          </div>
          {/* End */}

        </div>
      </nav>

      {dropbox && (
        <div className='dropdown'>
          <small>Change Password</small>
          <strong>SignOut</strong>
        </div>
      )}
    </>
  );
}

export default Navbar;
