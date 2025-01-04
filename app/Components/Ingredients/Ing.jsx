import React from "react";
import Image from "next/image";
import './Ing.css';

const Ingredients = () => {
  return (
    <section className='ingredients'>
      {/* First Row */}
      <div className="grid-3-cols">
      <div className="ingredient text-only">
        <div className="content">
          <h1>Ingredients</h1>
      <h2>Better Ingredients</h2>
      <p>
        Only the best when you choose products offered on our platform - high-quality ingredients for high-quality products!
      </p>
      </div>
      </div>

        {/* Second Ingredient */}
        <div className="ingredient">
          <Image src="/img/h2-b1.jpg.png" alt="Vitamin C" layout="fill" />
          <div className="content">
            <h3>Vitamin C</h3>
            <p>Vitamin C as ascorbic acid</p>
            <a href="#">SEE MORE</a>
          </div>
        </div>

        {/* Third Ingredient */}
        <div className="ingredient">
          <Image src="/img/h2-b1.jpg.png" alt="Vitamin B3" layout="fill" />
          <div className="content">
            <h3>Vitamin B3</h3>
            <p>Niacin for healthy gut and skin</p>
            <a href="#">SEE MORE</a>
          </div>
        </div>
        </div>  
      {/* Second Row */}
      <div className="gridRowTwo">
        <div className="ingredient">
          <Image src="/img/h2-b1.jpg.png" alt="Magnesium" layout="fill" />
          <div className="content">
            <h3>Magnesium</h3>
            <p>Boost energy and support muscle function</p>
            <a href="#">SEE MORE</a>
          </div>
        </div>
        <div className="ingredient">
          <Image src="/img/h2-b1.jpg.png" alt="Hyaluronic Acid" layout="fill" />
          <div className="content">
            <h3>Hyaluronic Acid</h3>
            <p>For smooth, supple, and soft skin!</p>
            <a href="#">SEE MORE</a>
          </div>
        </div>
        <div className="ingredient">
          <Image src="/img/h2-b1.jpg.png" alt="Lactobacillus" layout="fill" />
          <div className="content">
            <h3>Lactobacillus</h3>
            <p>Invigorate your gut microbiome</p>
            <a href="#">SEE MORE</a>
          </div>
        </div>
        <div className="smallImage">
          <Image src="/img/decorative.png" alt="Decorative Shape" width={100} height={100} />
        </div>
      </div>
    </section>
  );
};

export default Ingredients;
