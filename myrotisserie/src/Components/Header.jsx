import React from "react";
import Logo2 from "../Images/Logo2.png";

function Header() {
  return (
    <div className=" bg-header w-full h-20 bg-cover flex justify-between items-center p-12 ">
      <img src={Logo2} alt="jczoicz" className="w-16 h-16 rounded-full " />
      <a
        href="tel:0670842935"
        className=" flex text-xs rounded bg-[#fdf9e4] w-20 h-8 justify-center items-center"
      >
        Téléphone
      </a>
    </div>
  );
}

export default Header;
