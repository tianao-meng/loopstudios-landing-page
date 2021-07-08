import React, { useState } from "react";
import data from "../data-desktop";

const Creations = () => {
  const [cards, setCards] = useState(data);
  return (
    <section className="creations">
      <div className="container">
        <div className="title">
          <h2>Our creations</h2>

          <button>See all</button>
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
      </div>
    </section>
  );
};

export default Creations;
