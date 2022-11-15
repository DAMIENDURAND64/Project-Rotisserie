import React from "react";
import Logo from "../Images/Logo-Iparla.jpeg";
import Logo1 from "../Images/Label_rouge.jpeg";
import logo2 from "../Images/Logo-Manex.png";
import logo3 from "../Images/Logo3.JPG";
import { useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

export default function ProduitsBody() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <div ref={ref}>
      <div className="flex flex-col justify-center items-center py-6 ">
        <h1 className="text-white text-lg md:text-2xl font-bold h-14 w-full  justify-center items-center flex bg-black-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-black-600">
          NOS PRODUITS
        </h1>
        <div className="flex flex-col items-center p-1 my-2 ">
          <div
            style={{
              transform: isInView ? "none" : "translateX(500px)",
              opacity: isInView ? 1 : 0,
              transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
            }}
            className="flex items-center gap-2 md:gap-4  md:w-4/6"
          >
            <div className="min-w-[80px]   relative h-20 rounded-full overflow-hidden md:min-w-[144px] md:h-[144px]">
              <Image
                layout="fill"
                objectFit="cover"
                alt="logo de la ferme Iparla qui fourni des poulets fermiers parfait pour une cuisson a la broche et ou a la rotissoire"
                src="/Images/Logo-Iparla.jpeg"
              />
            </div>

            <p className="text-base  text-white md:text-lg">
              Les poulets sont fournis par une ferme locale familiale située à
              Saint-Martin d&apos;Arrossa. Les poulets IPARLA ont minimum 91
              jours d&apos;élevage en plein air.
            </p>
          </div>
          <hr className="w-4/6 my-2"></hr>
          <div
            style={{
              transform: isInView ? "none" : "translateX(-500px)",
              opacity: isInView ? 1 : 0,
              transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
            }}
            className=" flex justify-center items-center w-11/12 my-2 md:gap-4"
          >
            <p className="text-base text-white md:text-lg">
              Nos poulets Label Rouge sont issus du Sud-Ouest uniquement.
            </p>
            <div className="min-w-[80px]   relative h-20 rounded-full overflow-hidden md:min-w-[144px] md:h-[144px]">
              <Image
                layout="fill"
                alt="logo poulet Label rouge"
                src="/Images/Label_rouge.jpeg"
              />
            </div>
          </div>
          <hr className="w-4/6 my-2 "></hr>

          <div
            style={{
              transform: isInView ? "none" : "translateX(500px)",
              opacity: isInView ? 1 : 0,
              transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
            }}
            className="flex flex-col items-center w-11/12 my-2 md:flex-row md:gap-4 md:justify-center"
          >
            <div className="w-48 h-28 relative overflow-hidden object-fill rounded-md mb-2 md:w-72 md:h-44 ">
              <Image
                layout="fill"
                alt="le porc manex qui nous vient du pays basque pour nous fournir des jarrets et echines de porc de qualité"
                src="/Images/Logo-Manex.png"
              />
            </div>
            <p className="text-base text-white md:text-lg">
              Le porc Manex nous vient de Saint Etienne de Baigorri.
              <br className="hidden md:block" /> Je vous propose a la rôtissoire
              l&apos;échine ou le jarret.
            </p>
          </div>
          <hr className="w-4/6 my-2"></hr>

          <div
            style={{
              transform: isInView ? "none" : "translateX(-500px)",
              opacity: isInView ? 1 : 0,
              transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
            }}
            className="flex flex-col justify-center items-center w-full  mt-2 md:flex-row-reverse md:w-4/6  "
          >
            <div className="w-48 h-28 relative overflow-hidden rounded-md mb-2 md:min-w-[288px] md:min-h-[176px]">
              <Image
                layout="fill"
                alt="pommes de terre du pays basque rissolées jusqu'a qu'elles deviennent fondantes "
                src="/Images/Logo3.JPG"
              />
            </div>
            <p className="text-base  text-white md:text-lg">
              Les viandes sont accompagnées de pommes de terre cuites vapeur
              puis sautées à la poêle avec des oignons caramélisés.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
