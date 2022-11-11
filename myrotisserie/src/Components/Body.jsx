import React from "react";
import Image from "../Images/essaimobile.JPG";
import { useState } from "react";
import Lieu from "./Lieu-Body";
import ProduitsBody from "./Produits-Body";
import Tarifs from "./Tarifs";
import Evenementiel from "./Evenementiel";

function Body() {
  const [isChangeSpot, setChangeSpot] = useState(true);

  function HandleChangeSpot(e) {
    setChangeSpot((e) => !e);
  }

  return (
    <div
      className="bg-test bg-fixed bg-no-repeat bg-cover
     w-full flex flex-col gap-4 h-auto"
    >
      <img src={Image} alt="blabla" className="h-28 w-full object-cover" />
      <Lieu isChangeSpot={isChangeSpot} HandleChangeSpot={HandleChangeSpot} />
      <ProduitsBody />
      <Tarifs />
      <Evenementiel />
    </div>
  );
}

export default Body;
