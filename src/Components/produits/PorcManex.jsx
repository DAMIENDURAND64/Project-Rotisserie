import React from "react";
import Image from "next/image";

function PorcManex() {
  return (
    <div>
      <div className="flex flex-col items-center w-full my-2 md:flex-row md:gap-4 justify-center">
        <div className="w-48 h-28 relative overflow-hidden object-fill rounded-md mb-2 md:min-w-[288px] md:min-h-[176px] ">
          <Image
            fill
            alt="le porc manex qui nous vient du pays basque pour nous fournir des jarrets et echines de porc de qualité"
            src="/Images/Logo-Manex.png"
          />
        </div>
        <p className="text-base text-white md:text-lg text-center">
          Le porc Manex provient de la ferme Belarrea située à St Etienne de
          Baigorri.
          <br /> Je vous propose a la rôtissoire l&apos;Echine ou le Jarret.
        </p>
      </div>
    </div>
  );
}

export default PorcManex;
