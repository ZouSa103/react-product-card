import React from "react";

const Image = () => {
  // je Remplace cette URL par l'URL de limage
  const imageUrl = "https://th.bing.com/th?id=OPE.%2fcHlPF9jFRmQPA300C300&w=300&h=300&dpr=1.3&pid=21.1";

  return <img src={imageUrl} alt="Product" />;
};

export default Image;
