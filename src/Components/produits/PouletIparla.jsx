import React from "react";
import Image from "next/image";
import Link from "next/link";

function PouletIparla() {
  return (
    <div>
      <div className="flex items-center gap-2 md:gap-4  md:w-full px-3">
        <div className="min-w-[80px] relative h-20 rounded-full overflow-hidden md:min-w-[144px] md:h-[144px]">
          <Link
            href={"https://app.cagette.net/ferme-iparla-etxaldea"}
            target="_blank"
          >
            <Image
              fill
              alt="logo de la ferme Iparla qui fourni des poulets fermiers parfait pour une cuisson a la broche et ou a la rotissoire"
              src="/Images/Logo-Iparla.jpeg"
            />
          </Link>
        </div>

        <p className="text-base  text-white md:text-lg">
          Les poulets IPARLA sont fournis par une ferme locale familiale située
          à Saint-Martin d&apos;Arrosa. Ils ont minimum 91 jours d&apos;élevage
          en plein air.
        </p>
      </div>
    </div>
  );
}

export default PouletIparla;
