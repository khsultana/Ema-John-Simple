import React from 'react';
import logo from '../../images/Logo.svg'
import './Header.css'

const Header = () => {
    return (
        <nav className='Header-Section'>
            <img src={logo} alt="" />

            <div className='item'>
                <a href="/Shop">Shop</a>
                <a href="/Product">Product</a>
                <a href="/Inventory">Inventory</a>
                <a href="/About">About</a>
            </div>
        </nav>
    );
};

export default Header;