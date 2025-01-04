import React from 'react';
import './main.css';

const Main = () => {
  return (
    <div className="features">
      <div className="container grid grid--3-cols" id="main">
        <div className="project" id="project-1">
          <figure className="project-icon">
            <img src="/img/icons8-test-tube-80.png"/>
          </figure>
          <p className="project-title">Clinically Studied</p>
          <p className="project-description">
          All products that we offer have 
          undergone lab and safety tests
          </p>
        </div>
        <div className="project" id="project-2">
          <figure className="project-icon">
            <img src="/img/icons8-leaves-64.png"/>
          </figure>
          <p className="project-title">Vegetarian Friendly</p>
          <p className="project-description">
          We have a wide selection of vegetarian 
          products to meet your needs
          </p>
        </div>
        <div className="project" id="project-3">
          <figure className="project-icon">
            <img src="/img/icons8-india-48.png"/>
          </figure>
          <p className="project-title">Made In India</p>
          <p className="project-description">
          Shop local and explore health products 
          made right here in India
          </p>
        </div>
        <div className="project" id="project-4">
          <figure className="project-icon">
            <img src="/img/icons8-shipping-cart-66.png"/>
          </figure>
          <p className="project-title">Free Shipping</p>
          <p className="project-description">
          We deliver to your door with no 
          shipping costs on your orders
          </p>
        </div>
        <div className="project" id="project-5">
          <figure className="project-icon">
            <img src="/img/icons8-box-50.png"/>
          </figure>
          <p className="project-title">No Risk</p>
          <p className="project-description">
          We ensure that all products are safe 
and within their use-by date
          </p>
        </div>
        <div className="project" id="project-6">
          <figure className="project-icon">
            <img src="/img/icons8-leaves-64.png"/>
          </figure>
          <p className="project-title">GMO Free</p>
          <p className="project-description">
          Natural, no modified products and 
          derivatives for those who need it
          </p>
        </div>
      </div>
      </div>
  );
};

export default Main;
