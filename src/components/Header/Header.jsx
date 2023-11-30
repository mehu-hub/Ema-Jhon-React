import React from 'react';
import logo from '../../assets/images/Logo.svg'
import './Header.css'
const Header = () => {
    return (
        <div className='header'>
             <img src={logo} alt="" />
             <div className='nav-item'>
                <a href="/order">Order</a>
                <a href="/review">Order Review</a>
                <a href="/inventory">Manage Inventory</a>
                <a href="/login">Login</a>
             </div>
        </div>
    );
};

export default Header;