import React from "react";
import Logo2 from "../Images/Logo2.png";

function Footer() {
  return (
    <div className=" bg-header w-full h-20 bg-cover flex justify-center gap-5 items-center p-12 ">
      <img src={Logo2} alt="jczoicz" className="w-16 h-16 rounded-full " />
      <a
        href="#haut"
        className="flex text-xs rounded-full bg-[#fdf9e4] w-16 h-16 justify-center items-center "
      >
        Haut
        <br /> de <br /> Page
      </a>
      <a
        href="tel:0670842935"
        className="flex text-xs rounded-full bg-[#fdf9e4] w-16 h-16 justify-center items-center"
      >
        Téléphone
      </a>
    </div>
  );
}

export default Footer;
