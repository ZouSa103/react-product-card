import React from "react";
import "./App.css";
import product from "./product";
import Name from "./Name";
import Price from "./Price";
import Description from "./Description";
import Image from "./Image";
import { Card } from "react-bootstrap";

function App() {
  const firstName = ""; // La variable firstName est vide

  //  les valeurs du produit cosmétique
  product.name = "La Roche-Posay Toleriane Double Repair Face Moisturizer";
  product.price = "$19.99";
  product.description = "Hydratez et réparez votre peau avec ce double hydratant facial de La Roche-Posay.";
  product.image = "https://example.com/la-roche-posay-image.jpg"; 

  return (
    <div className="App">
      <Card style={{ width: "18rem" }}>
        <Image imageUrl={product.image} />
        <Card.Body>
          <Name name={product.name} />
          <Price price={product.price} />
          <Description description={product.description} />
        </Card.Body>
      </Card>
      <p>{firstName ? `Hello, ${firstName}!` : "Hello, there!"}</p>
      {firstName && <Image imageUrl="https://example.com/your-image.jpg" />} {}
    </div>
  );
}

export default App;

