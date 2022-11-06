import React from "react";
import Image from "../Images/essaimobile.JPG";
import { useState } from "react";
import Lieu from "./Lieu-Body";
import ProduitsBody from "./Produits-Body";

function Body() {
  const [isChangeSpot, setChangeSpot] = useState(true);

  function HandleChangeSpot(e) {
    setChangeSpot((e) => !e);
  }

  return (
    <div className="bg-body w-full bg-cover flex flex-col gap-4 h-auto">
      <img src={Image} alt="blabla" className="h-28 w-full object-cover" />
      <Lieu isChangeSpot={isChangeSpot} HandleChangeSpot={HandleChangeSpot} />
      <ProduitsBody />
    </div>
  );
}

export default Body;
