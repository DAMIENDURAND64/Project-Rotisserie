import React from "react";
import { motion } from "framer-motion";

import PouletIparla from "./produits/PouletIparla";
import PouletLabelRouge from "./produits/PouletLabelRouge";
import PorcManex from "./produits/PorcManex";
import Patates from "./produits/Patates";

const variants = {
  initial: {
    y: 300,
  },
  animate: {
    y: 0,

    transition: {
      type: "spring",
      bounce: 0.5,
      duration: 0.9,
    },
  },
};

function ProduitsBody() {
  return (
    <div>
      <div className="flex flex-col justify-center items-center py-6">
        <h1 className="text-white text-lg md:text-2xl font-bold h-14 w-full  justify-center items-center flex bg-black-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-black-600">
          NOS PRODUITS
        </h1>
        <div className="flex flex-col justify-center items-center p-1 my-2  md:w-5/6 space-y-6">
          <motion.section
            initial={"initial"}
            whileInView={"animate"}
            viewport={{ once: true, amount: 0.1 }}
            variants={variants}
          >
            <PouletIparla />
          </motion.section>
          <hr className="w-4/6 my-2"></hr>
          <motion.section
            initial={"initial"}
            whileInView={"animate"}
            viewport={{ once: true, amount: 0.1 }}
            variants={variants}
          >
            <PouletLabelRouge />
          </motion.section>
          <hr className="w-4/6 my-2 "></hr>
          <motion.section
            initial={"initial"}
            whileInView={"animate"}
            viewport={{ once: true, amount: 0.1 }}
            variants={variants}
          >
            <PorcManex />
          </motion.section>
          <hr className="w-4/6 my-2"></hr>
          <motion.section
            initial={"initial"}
            whileInView={"animate"}
            viewport={{ once: true, amount: 0.1 }}
            variants={variants}
          >
            <Patates />
          </motion.section>
        </div>
      </div>
    </div>
  );
}
export default ProduitsBody;
