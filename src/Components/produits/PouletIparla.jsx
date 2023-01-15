import React from "react";
import Image from "next/image";

function PouletIparla() {
  return (
    <div>
      <div className="flex  items-center gap-2 md:gap-4  md:w-full">
        <div className="min-w-[80px]   relative h-20 rounded-full overflow-hidden md:min-w-[144px] md:h-[144px]">
          <Image
            fill
            alt="logo de la ferme Iparla qui fourni des poulets fermiers parfait pour une cuisson a la broche et ou a la rotissoire"
            src="/Images/Logo-Iparla.jpeg"
          />
        </div>

        <p className="text-base  text-white md:text-lg">
          Les poulets sont fourni par une ferme locale familiale situé a
          Saint-Martin d&apos;Arrosa. Les poulets IPARLA ont minimum 91 jours
          d&apos;élevage en plein air.
        </p>
      </div>
    </div>
  );
}

export default PouletIparla;
