import React from "react";
import Lieu from "./Lieu-Body";
import ProduitsBody from "./Produits-Body";
import Tarifs from "./Tarifs";
import Evenementiel from "./Evenementiel";
import Carousel from "./Carousel";

function Body() {
  return (
    <div
      className="bg-background pb-20 bg-fixed bg-cover
     w-full flex flex-col h-auto "
    >
      <Carousel />
      <div className="w-full h-full px-2 md:px-10 ">
        <Lieu />
        <ProduitsBody />
        <Tarifs />
        <Evenementiel />
      </div>
    </div>
  );
}

export default Body;
