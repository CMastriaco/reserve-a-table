import React from 'react';

const Testimonials = () => {
    return (
        <section class="testimonials-section-one">
        <h2>Testimonials</h2>
        <div class="testimonials-section">
          <div class="testimonial-pair">
            <div class="container-testimonials">
              <div class="photo-testimonials">
                <img class="star-photo" src="estrella.png" alt="star" width="20" height="20"/>
                <img class="star-photo" src="estrella.png" alt="star" width="20" height="20"/>
                <img class="star-photo" src="estrella.png" alt="star" width="20" height="20"/>
                <img class="star-photo" src="estrella.png" alt="star" width="20" height="20"/>
              </div>
              <div class="photo-user-name">
                <img class="photo-user" src="" alt="user-photo"/>
                <p class="name">Anna</p>
              </div>
              <p class="review">"Amazing food, environment and music."</p>
            </div>
            <div class="container-testimonials">
              <img class="star-photo" src="estrella.png" alt="star" width="20" height="20"/>
              <img class="star-photo" src="estrella.png" alt="star" width="20" height="20"/>
              <img class="star-photo" src="estrella.png" alt="star" width="20" height="20"/>
              <img class="star-photo" src="estrella.png" alt="star" width="20" height="20"/>
              <img class="star-photo" src="estrella.png" alt="star" width="20" height="20"/>
              <div class="photo-user-name">
                <img class="photo-user" src="" alt="user-photo"/>
                <p class="name">Peter</p>
              </div>
              <p class="review">"Everything great, service was very kind."</p>
            </div>
        </div>
        <div class="testimonial-pair">
          <div class="container-testimonials">
            <img class="star-photo" src="estrella.png" alt="star" width="20" height="20"/>
            <img class="star-photo" src="estrella.png" alt="star" width="20" height="20"/>
            <img class="star-photo" src="estrella.png" alt="star" width="20" height="20"/>
            <img class="star-photo" src="estrella.png" alt="star" width="20" height="20"/>
            <img class="star-photo" src="estrella.png" alt="star" width="20" height="20"/>
            <div class="photo-user-name">
              <img class="photo-user" src="" alt="user-photo"/>
              <p class="name">Tom</p>
            </div>
            <p class="review">"Best food. 100% recommended."</p>
          </div>
            <div class="container-testimonials">
              <div class="stars-and-name">
                <div class="stars">
                <img class="star-photo" src="estrella.png" alt="star" width="20" height="20"/>
                <img class="star-photo" src="estrella.png" alt="star" width="20" height="20"/>
                <img class="star-photo" src="estrella.png" alt="star" width="20" height="20"/>
              </div>
              <div class="photo-user-name">
                <img class="photo-user" src="" alt="user-photo"/>
                <p class="name">Susan</p>
              </div>
              <p class="review">"Great food, but the wait was a little bit long."</p>
            </div>
        </div>
      </div>
      </div>
      </section>
    )
}

export default Testimonials;