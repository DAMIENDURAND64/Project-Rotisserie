import React from "react";
import Image from "../Images/essaimobile.JPG";

function Carousel() {
  return (
    <div>
      <img
        src={Image}
        alt="Le poulet fermier local Iparla ou label rouge cuit a la broche au coeur du pays basque"
        className="h-32 w-full object-cover md:h-96 md:object-cover"
      />
    </div>
  );
}

export default Carousel;
