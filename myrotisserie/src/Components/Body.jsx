import React from "react";
import Image from "../Images/essaimobile.JPG";
import { useState } from "react";

function Body() {
  const [isChangeSpot, setChangeSpot] = useState(true);

  function HandleChangeSpot(e) {
    setChangeSpot((e) => !e);
  }
  return (
    <div className="bg-body w-full h-96 bg-cover">
      <img src={Image} alt="blabla" className="h-28 w-full object-cover" />
      <div className="overflow-hidden relative h-32 w-32">
        <iframe
          className="w-full border-solid border-4 border-black"
          title="map de l'emplacement"
          src={
            isChangeSpot
              ? "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d621.9501926698497!2d-1.487707637645706!3d43.42665880159738!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd513fa64ba144e9%3A0xbb084fcb0ccd82c9!2sChezlolo!5e0!3m2!1sfr!2sfr!4v1667682244432!5m2!1sfr!2sfr"
              : "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d662.192537674905!2d-1.2992592985848705!3d43.23326854515506!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd51295acfc4d7c9%3A0x1ecd2725e480fda4!2sBoulangerie%20Artisanale%20ITHURRALDE!5e0!3m2!1sfr!2sfr!4v1667683088904!5m2!1sfr!2sfr"
          }
          width="600"
          height="450"
          frameborder="0"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      <div className="flex justify-around h-16 items-center">
        <button
          className="bg-[#fdf9e4] rounded-md text-xs w-32 h-8"
          onClick={HandleChangeSpot}
        >
          Rond-point Bassussarry
        </button>
        <button
          className="bg-[#fdf9e4] rounded-md text-xs w-32 h-8"
          onClick={HandleChangeSpot}
        >
          Boulangerie Osses
        </button>
      </div>
    </div>
  );
}

export default Body;
