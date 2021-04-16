import React from 'react';
import logo from '../../images/react.jpg';
import './Header.css';
const Header = () => {
    return (
        <div class="header">
            <img src={logo} alt="alter-text"/>
            <nav><a href="/shop">Shop</a>
            <a href="/review">Order Review</a>
            <a href="/inventory">Manage Inventory</a>
            </nav>
        </div> 
    );
};

export default Header;