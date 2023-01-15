import Image from "next/image";
import React from "react";

function Carousel() {
  return (
    <div className="w-full h-[128px] md:h-[384px] relative">
      <Image
        fill
        priority
        quality={100}
        src="/Images/essaimobile.webp"
        alt="Le poulet fermier local Iparla ou label rouge cuit a la broche au coeur du pays basque"
        className="h-32 w-full object-cover md:h-96 md:object-cover"
      />
    </div>
  );
}

export default Carousel;
