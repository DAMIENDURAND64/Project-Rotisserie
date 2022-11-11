import React from "react";
import Logo2 from "../Images/Logo2.png";
import { motion } from "framer-motion";

function Footer() {
  return (
    <div className=" bg-header w-full h-20 bg-cover flex justify-between items-center p-12 ">
      <img
        src={Logo2}
        alt="La rotisserie Harana au Pays basque"
        className="w-36 h-16  "
      />
      <motion.a
        whileHover={{ scale: 1.2 }}
        href="tel:0670842935"
        className=" flex text-xs rounded bg-[#fdf9e4] w-20 h-8 justify-center items-center font-bold"
      >
        Téléphone
      </motion.a>
    </div>
  );
}

export default Footer;
