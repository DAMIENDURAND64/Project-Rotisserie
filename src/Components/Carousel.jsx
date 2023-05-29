import Image from "next/image";
import React from "react";

function Carousel() {
  return (
    <div className="w-full h-[150px] md:h-[384px] relative">
      <Image
        fill
        priority
        quality={100}
        placeholder="blur"
        blurDataURL="/Images/carousel.webp"
        src="/Images/carousel.webp"
        alt="Le poulet fermier local Iparla ou label rouge cuit a la broche au coeur du pays basque et disponible a la vente a emporter a la rôtisserie Harana à Bassussarry et à Ossés"
        className="h-full w-full object-cover md:h-96 md:object-cover"
      />
    </div>
  );
}

export default Carousel;
