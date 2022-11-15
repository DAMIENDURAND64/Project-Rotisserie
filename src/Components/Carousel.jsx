import Image from "next/image";
import React from "react";

function Carousel() {
  return (
    <div className="w-full h-[128px] md:h-[384px] relative">
      <Image
        layout="fill"
        objectFit="cover"
        priority
        quality={50}
        src="/Images/carousel.webp"
        alt="Le poulet fermier local Iparla ou label rouge cuit a la broche au coeur du pays basque"
        // className="h-32 w-full object-cover md:h-96 md:object-cover"
      />
    </div>
  );
}

export default Carousel;
