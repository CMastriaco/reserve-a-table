import React from 'react';
import { Link } from 'react-router-dom';


const Header = () => {
    return (
    <header>
            <section className="title-section">
                <div className="title">
                    <h1>Little Lemon</h1>
                    <h3>Chicago</h3>
                    <p>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
                    <Link to="/BookingPage"><button>Reserve a table</button></Link>
                </div>
                <div className="title-img">
                    <img src="Image dish.png" alt="dish"/>
                </div>
            </section>
    </header>
    )
}
export default Header;