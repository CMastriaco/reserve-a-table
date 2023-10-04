import React from 'react';

const Testimonials = () => {
    return (
        <section className="testimonials-section-one">
        <h2>Testimonials</h2>
        <div className="testimonials-section">
          <div className="testimonial-pair">
            <div className="container-testimonials">
              <div className="photo-testimonials">
                <img className="star-photo" src="estrella.png" alt="star" width="20" height="20"/>
                <img className="star-photo" src="estrella.png" alt="star" width="20" height="20"/>
                <img className="star-photo" src="estrella.png" alt="star" width="20" height="20"/>
                <img className="star-photo" src="estrella.png" alt="star" width="20" height="20"/>
              </div>
              <div className="photo-user-name">
                <img className="photo-user" src="" alt="user"/>
                <p className="name">Anna</p>
              </div>
              <p className="review">"Amazing food, environment and music."</p>
            </div>
            <div className="container-testimonials">
              <img className="star-photo" src="estrella.png" alt="star" width="20" height="20"/>
              <img className="star-photo" src="estrella.png" alt="star" width="20" height="20"/>
              <img className="star-photo" src="estrella.png" alt="star" width="20" height="20"/>
              <img className="star-photo" src="estrella.png" alt="star" width="20" height="20"/>
              <img className="star-photo" src="estrella.png" alt="star" width="20" height="20"/>
              <div className="photo-user-name">
                <img className="photo-user" src="" alt="user"/>
                <p className="name">Peter</p>
              </div>
              <p className="review">"Everything great, service was very kind."</p>
            </div>
        </div>
        <div className="testimonial-pair">
          <div className="container-testimonials">
            <img className="star-photo" src="estrella.png" alt="star" width="20" height="20"/>
            <img className="star-photo" src="estrella.png" alt="star" width="20" height="20"/>
            <img className="star-photo" src="estrella.png" alt="star" width="20" height="20"/>
            <img className="star-photo" src="estrella.png" alt="star" width="20" height="20"/>
            <img className="star-photo" src="estrella.png" alt="star" width="20" height="20"/>
            <div className="photo-user-name">
              <img className="photo-user" src="" alt="user"/>
              <p className="name">Tom</p>
            </div>
            <p className="review">"Best food. 100% recommended."</p>
          </div>
            <div className="container-testimonials">
              <div className="stars-and-name">
                <div className="stars">
                <img className="star-photo" src="estrella.png" alt="star" width="20" height="20"/>
                <img className="star-photo" src="estrella.png" alt="star" width="20" height="20"/>
                <img className="star-photo" src="estrella.png" alt="star" width="20" height="20"/>
              </div>
              <div className="photo-user-name">
                <img className="photo-user" src="" alt="user"/>
                <p className="name">Susan</p>
              </div>
              <p className="review">"Great food, but the wait was a little bit long."</p>
            </div>
        </div>
      </div>
      </div>
      </section>
    )
}

export default Testimonials;