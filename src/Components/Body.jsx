import React from "react";
import { useState } from "react";
import Lieu from "./Lieu-Body";
import ProduitsBody from "./Produits-Body";
import Tarifs from "./Tarifs";
import Evenementiel from "./Evenementiel";
import Carousel from "./Carousel";

function Body() {
  const [isChangeSpot, setChangeSpot] = useState(true);

  function HandleChangeSpot(e) {
    setChangeSpot((e) => !e);
  }

  return (
    <div
      className="bg-background pb-20 bg-fixed bg-cover
     w-full flex flex-col h-auto "
    >
      <Carousel />
      <div className="w-full h-full px-2 md:px-20">
        <Lieu isChangeSpot={isChangeSpot} HandleChangeSpot={HandleChangeSpot} />
        <ProduitsBody />
        <Tarifs />
        <Evenementiel />
      </div>
    </div>
  );
}

export default Body;
