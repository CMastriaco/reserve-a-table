import React from 'react'; 

const Footer = () => {
    return (
            <footer className="footer">
              <div className="footer-logo">
              <img src="Image-2.png" alt="footer" class="photofooter" width="300px" height="100px" />
              </div>
              <div className="footer-one">
              <h3 className="doormat-navigation">Doormat Navigation</h3>
                <ul className="lists">
                  <li><a href="">Home</a></li>
                  <li><a href="">About</a></li>
                  <li><a href="">Menu</a></li>
                  <li><a href="">Reservations</a></li>
                  <li><a href="">Order Online</a></li>
                  <li><a href="">Login</a></li>
                </ul>
              </div>
              <div className="footer-one">
              <h3 className="contact">Contact</h3>
                <ul>
                  <li><a href="">Address</a></li>
                  <li><a href="">Phone Number</a></li>
                  <li><a href="">Email</a></li>
                </ul>
              </div>
              <div className="footer-one">
             <h3 className="social-media">Social Media Links</h3>
                <ul>
                  <li className="navfooter"><a href="/address">Address</a></li>
                  <li className="navfooter"><a href="">Phone Number</a></li>
                  <li className="navfooter"><a href="">Email</a></li>
                </ul>
              </div>
            </footer>
            )
        }

export default Footer;