import React from "react";
import Logo2 from "../Images/Logo2.png";
import { motion } from "framer-motion";
import Image from "next/image";

function Header() {
  return (
    <div className=" bg-header w-full h-24 bg-cover flex justify-around  items-center md:h-32 ">
      <div className="w-40 h-20 md:w-72 md:h-24 relative">
        <Image
          fill
          alt="La rotisserie Harana au Pays basque qui propose des poulets rotis fermier locaux mais aussi du jarret ou echine de porc Manex"
          src="/Images/Logo2.png"
          className="object-cover"
        />
      </div>
      <div className="flex flex-col justify-center align-middle items-center h-full md:justify-center md:h-full space-y-2 md:space-y-4">
        <motion.a
          whileHover={{ scale: 1.2 }}
          href="tel:0670842935"
          className=" flex text-sm rounded bg-[#fdf9e4] w-28 h-11 justify-center items-center font-bold md:w-40 md:h-10 md:text-lg "
        >
          Téléphone
        </motion.a>
        <p className="hidden md:font-bold md:text-white md:text-xl md:block ">
          06.70.84.29.35
        </p>
      </div>
    </div>
  );
}

export default Header;
