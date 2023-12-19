import React from 'react'
import './navBar.css';
import logo from '../../assets/navBar.png';
import toggleIcon from '../../assets/navBarToggle.png';

const NavBar = () => {
  const options = ['Home', 'Serices', 'Portfolio', 'About Us', 'Contact Us'].
    map(option => <span className='appBarContentItem'>{option}</span>);
  return (
    <div className='appbar'>
      <img src={logo} alt='logo' className='appBarlogo'/>
      <div className='appBarContent'>
          {options}
      </div>
      <button className='appBarbutton' type='toggle'><img src= {toggleIcon}/></button>
    </div>
  );
}

export default NavBar;