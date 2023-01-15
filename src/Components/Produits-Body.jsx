import React from "react";
import { useInView } from "framer-motion";
import { useRef } from "react";
import PouletIparla from "./produits/PouletIparla";
import PouletLabelRouge from "./produits/PouletLabelRouge";
import PorcManex from "./produits/PorcManex";
import Patates from "./produits/Patates";

export default function ProduitsBody() {
  return (
    <div>
      <div className="flex flex-col justify-center items-center py-6">
        <h1 className="text-white text-lg md:text-2xl font-bold h-14 w-full  justify-center items-center flex bg-black-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-black-600">
          NOS PRODUITS
        </h1>
        <div className="flex flex-col justify-center items-center p-1 my-2  md:w-5/6 space-y-6">
          <section>
            <PouletIparla />
          </section>
          <hr className="w-4/6 my-2"></hr>
          <section>
            <PouletLabelRouge />
          </section>
          <hr className="w-4/6 my-2 "></hr>
          <section>
            <PorcManex />
          </section>
          <hr className="w-4/6 my-2"></hr>
          <section>
            <Patates />
          </section>
        </div>
      </div>
    </div>
  );
}
