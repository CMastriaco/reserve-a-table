import React from 'react';

const About = () => {
    return (
        <section className="about">
        <div className="about-little-lemon">
          <h1>Little Lemon</h1>
          <h3>Chicago</h3>
          <p>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
        </div>
        <div className="img-about">
          <img className="bottom-image" src="Image-3.png" alt="about-logo-one" width="220" height="220"/>
          <img className="top-image" src="Image-4.png" alt="about-logo-two" width="220" height="220"/>
        </div>
      </section>
    )
}
export default About;