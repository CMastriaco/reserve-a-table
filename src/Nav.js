import React from 'react';

const Nav = () => {
return (
      <nav>
        <div className="navigation">
            <div className="img-logo">
                <img src="Image-2.png" alt="logo-little-lemon" width="200" height="60"/>
            </div>
            <div className="navigation-ul">
                <ul>
                    <li><a href="/home">Home</a></li>
                    <li><a href="/about">About</a></li>
                    <li><a href="/menu">Menu</a></li>
                    <li><a href="/bookingpage">Reservations</a></li>
                    <li><a href="/orderonline">Order Online</a></li>
                    <li><a href="/Testimonials">Testimonials</a></li>
                    <li><a href="/login">Login</a></li>
                </ul>
            </div>
        </div>
      </nav>
    )}
    export default Nav;