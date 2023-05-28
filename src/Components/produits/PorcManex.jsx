import React from "react";
import Image from "next/image";
import Link from "next/link";

function PorcManex() {
  return (
    <div>
      <div className="flex flex-col items-center w-full my-2 md:flex-row md:gap-4 justify-center px-3">
        <div className="w-48 h-28 relative overflow-hidden object-fill rounded-md mb-2 md:min-w-[288px] md:min-h-[176px] ">
          <Link href={"https://porc-manex.com/"} target="_blank">
            <Image
              fill
              alt="le porc manex qui nous vient du pays basque pour nous fournir des jarrets et echines de porc de qualité"
              src="/Images/Logo-Manex.png"
            />
          </Link>
        </div>
        <p className="text-base text-white md:text-lg ">
          Le porc Manex provient de la ferme Belarrea située à St Étienne de
          Baigorri. Je vous propose à la rôtissoire l&apos;échine ou le jarret.
        </p>
      </div>
    </div>
  );
}

export default PorcManex;
