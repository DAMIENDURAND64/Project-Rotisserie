import React from "react";
import Image from "next/image";

function PouletLabelRouge() {
  return (
    <div>
      <div className="flex  justify-center items-center w-full my-2 md:gap-4">
        <p className="text-base text-white md:text-lg">
          Nos poulets Label Rouge sont issues du Sud-Ouest uniquement.
        </p>
        <div className="min-w-[80px]   relative h-20 rounded-full overflow-hidden md:min-w-[144px] md:h-[144px]">
          <Image
            fill
            alt="logo poulet Label rouge"
            src="/Images/Label_rouge.jpeg"
          />
        </div>
      </div>
    </div>
  );
}

export default PouletLabelRouge;
