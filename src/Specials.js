import React from 'react';

const Specials = () => {
    return (
        <div className="container-section-dish">
          <section className="specials">
            <h2>This weeks specials!</h2>
            <button>Online Menu</button>
          </section>
          <div className="dishes">
            <div className="dish-container">
              <img className="img-salad" src="Image.png" alt="greek-salad" width="400" height="200"/>
              <h5 className="salad-title">Greek Salad</h5>
              <p className="price">$12.99</p>
              <p className="description">The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.</p>
              <button className="delivery-text-salad">Order a delivery</button>
            </div>
            <div className="dish-container">
              <img className="img-bruschetta" src="Image-1.png" alt="bruschetta" width="400" height="200"/>
              <h5 className="bruschetta-title">Bruschetta</h5>
              <p className="price">$5.99</p>
              <p className="description">Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.</p>
              <button className="delivery-text-bruschetta">Order a delivery</button>
            </div>
            <div className="dish-container">
              <img className="img-lemmon" src="image 3.png" alt="lemmon-dessert" width="400" height="200"/>
              <h5 className="dessert-title">Lemmon Dessert</h5>
              <p className="price">$5.00</p>
              <p className="description">This comes straight from grandma's recipe book, every last ingredient has been sourced and is as authentic as can be imagined.</p>
              <button className="delivery-text-dessert">Order a delivery</button>
            </div>
          </div>
        </div>
    )
}
export default Specials;