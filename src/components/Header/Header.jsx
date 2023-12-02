import React from 'react';
import logo from '../../assets/images/Logo.svg'
import './Header.css'
const Header = () => {
    return (
        <div className='header'>
             <img src={logo} alt="" />
             <div className='nav-item'>
                <a href="/shop">Shop</a>
                <a href="/review">Orders</a>
                <a href="/inventory">Manage Inventory</a>
                <a href="/login">Login</a>
             </div>
        </div>
    );
};

export default Header;