import React from "react";
import Logo2 from "../Images/Logo2.png";
import { motion } from "framer-motion";
import Image from "next/image";

function Footer() {
  return (
    <div className=" bg-header w-full h-24 bg-cover flex justify-around items-center md:h-32 ">
      <div src={Logo2} className="w-40 relative h-16 md:w-72 md:h-28">
        <Image
          alt="La rotisserie Harana au Pays basque qui propose des poulets rotis fermier locaux mais aussi du jarret ou echine de porc Manex"
          layout="fill"
          src="/Images/Logo2.png"
        />
      </div>
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

export default Footer;
