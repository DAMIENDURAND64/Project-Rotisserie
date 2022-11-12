import React from "react";
import Logo2 from "../Images/Logo2.png";
import { motion } from "framer-motion";

function Header() {
  return (
    <div className=" bg-header w-full h-24 bg-cover flex justify-around items-center md:h-32 ">
      <img
        src={Logo2}
        alt="La rotisserie Harana au Pays basque qui propose des poulets rotis fermier locaux mais aussi du jarret ou echine de porc Manex"
        className="w-40 h-16 md:w-72 md:h-28"
      />
      <motion.a
        whileHover={{ scale: 1.2 }}
        href="tel:0670842935"
        className=" flex text-xs rounded bg-[#fdf9e4] w-24 h-9 justify-center items-center font-bold md:w-48 md:h-12 md:text-lg"
      >
        Téléphone
      </motion.a>
    </div>
  );
}

export default Header;
