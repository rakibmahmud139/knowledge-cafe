import React from 'react';
import './Header.css'

const Header = () => {
    return (
        <div>
           <nav className='header-container'>
            <h2>KNOWLEDGE BLOG </h2>

            <div>
                <a href="home">Home</a>
                <a href="about">About</a>
                <a href="blog">Blog</a>
            </div>
            </nav> 
        </div>
    );
};

export default Header;