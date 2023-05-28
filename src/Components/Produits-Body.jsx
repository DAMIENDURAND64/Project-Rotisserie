import React from "react";
import { motion } from "framer-motion";

import PouletIparla from "./produits/PouletIparla";
import PouletLabelRouge from "./produits/PouletLabelRouge";
import PorcManex from "./produits/PorcManex";
import Patates from "./produits/Patates";

function ProduitsBody() {
  return (
    <div>
      <div className="flex flex-col justify-center items-center py-6">
        <h1 className="text-white text-lg md:text-2xl font-bold h-14 w-full  justify-center items-center flex bg-black-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-black-600">
          NOS PRODUITS
        </h1>
        <div className="flex flex-col justify-center items-center p-1 my-2 w-5/6 space-y-6 md:w-[620px] lg:w-[850px]">
          <motion.section
            initial={{ opacity: 0, x: -250 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ type: "spring", duration: 1, bounce: 0.5 }}
          >
            <PouletIparla />
          </motion.section>
          <hr className=" w-full my-2"></hr>
          <motion.section
            initial={{ opacity: 0, x: 250 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ type: "spring", duration: 1, bounce: 0.5 }}
          >
            <PouletLabelRouge />
          </motion.section>
          <hr className="w-full my-2 "></hr>
          <motion.section
            initial={{ opacity: 0, x: -250 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ type: "spring", duration: 1, bounce: 0.5 }}
          >
            <PorcManex />
          </motion.section>
          <hr className="w-full my-2"></hr>
          <motion.section
            initial={{ opacity: 0, x: 250 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ type: "spring", duration: 1, bounce: 0.5 }}
          >
            <Patates />
          </motion.section>
        </div>
      </div>
    </div>
  );
}
export default ProduitsBody;
