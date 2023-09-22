// Description.js
import React from "react";
const Description = ({ description }) => {
  return (
    <div className="description">
      <p>{description}</p>
      <p>
        La Roche-Posay Hydratant est un hydratant de haute qualité qui offre une
        hydratation intense et durable pour votre peau. Formulé avec des
        ingrédients naturels et apaisants, ce produit laisse votre peau douce,
        lisse et radieuse. Parfait pour une utilisation quotidienne, ce
        hydratant convient à tous les types de peau.
      </p>
    </div>
  );
};
export default Description;
