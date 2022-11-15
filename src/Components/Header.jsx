import React from "react";
import Logo2 from "../Images/Logo2.png";
import { motion } from "framer-motion";
import Image from "next/image";

function Header() {
  return (
    <div className=" bg-header w-full h-24 bg-cover flex justify-around items-center md:h-32 ">
      <div className="w-32 h-16 md:w-48 md:h-20 relative">
        <Image
          layout="fill"
          alt="La rotisserie Harana au Pays basque qui propose des poulets rotis fermier locaux mais aussi du jarret ou echine de porc Manex"
          src="/Images/Logo2.png"
        />
      </div>
      <div className="flex flex-col justify-center align-middle items-center">
        <motion.a
          whileHover={{ scale: 1.2 }}
          href="tel:0670842935"
          className=" flex text-xs rounded bg-[#fdf9e4] w-24 h-9 justify-center items-center font-bold md:w-40 md:h-10 md:text-lg"
        >
          Téléphone
        </motion.a>
        <p className="font-bold text-white text-xl">06.70.84.29.35</p>
      </div>
    </div>
  );
}

export default Header;
