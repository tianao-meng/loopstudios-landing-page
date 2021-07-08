import React, { useState } from "react";
import data from "../data-mobile";

const CreationsMobile = () => {
  const [cards, setCards] = useState(data);
  return (
    <section className="mobile">
      <div className="container">
        <div className="title">
          <h2>Our creations</h2>
        </div>

        <div className="cards">
          {cards.map((card) => {
            const { id, title, image } = card;
            console.log(image);
            return (
              <div key={id} className="card">
                <img src={image} alt={title} />

                <h3>{title}</h3>
              </div>
            );
          })}
        </div>
        <div className="btn">
          <button>See all</button>
        </div>
      </div>
    </section>
  );
};

export default CreationsMobile;
