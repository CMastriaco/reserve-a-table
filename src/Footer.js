import React from 'react'; 

const Footer = () => {
    return (
            <footer className="footer">
              <div className="footer-logo">
              <img src="Image-2.png" alt="footer" className="photofooter" width="300px" height="100px" />
              </div>
              <div className="footer-one">
              <h3 className="doormat-navigation">Doormat Navigation</h3>
                <ul className="lists">
                  <li>Home</li>
                  <li>About</li>
                  <li>Menu</li>
                  <li>Reservations</li>
                  <li>Order Online</li>
                  <li>Login</li>
                </ul>
              </div>
              <div className="footer-one">
              <h3 className="contact">Contact</h3>
                <ul>
                  <li>Address</li>
                  <li>Phone Number</li>
                  <li>Email</li>
                </ul>
              </div>
              <div className="footer-one">
             <h3 className="social-media">Social Media Links</h3>
                <ul>
                  <li className="navfooter">Address</li>
                  <li className="navfooter">Phone Number</li>
                  <li className="navfooter">Email</li>
                </ul>
              </div>
            </footer>
            )
        }

export default Footer;