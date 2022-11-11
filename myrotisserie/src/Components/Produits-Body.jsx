import React from "react";
import Logo from "../Images/Logo-Iparla.jpeg";
import Logo1 from "../Images/Label_rouge.jpeg";
import logo2 from "../Images/Logo-Manex.png";
import logo3 from "../Images/Logo3.JPG";

export default function ProduitsBody() {
  return (
    <div className="flex flex-col justify-center items-center gap-4">
      <h1 className="text-white text-lg font-bold h-14 w-full  justify-center items-center flex bg-black-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-black-600">
        NOS PRODUITS
      </h1>
      <div className="flex items-center mt-4 w-11/12 gap-2 ">
        <img
          src={Logo}
          alt="logo de poulet"
          className="w-20 h-20 rounded-full"
        />
        <p className="text-base text-white">
          Les poulets sont fourni par une ferme locale familiale situé a
          Saint-Martin d'Arrosa. Les poulets IPARLA ont minimum 91 jours
          d'élevage en plein air.
        </p>
      </div>
      <hr className="w-4/6 "></hr>
      <div className=" flex justify-center items-center mt-4 w-11/12 gap-2">
        <p className="text-base text-white">
          Nos poulets Label Rouge sont issues du Sud-Ouest uniquement.
        </p>
        <img
          src={Logo1}
          alt="poulet Label rouge"
          className="w-20 h-20 rounded-full object-fill"
        />
      </div>
      <hr className="w-4/6 "></hr>

      <div className="flex items-center mt-4 w-11/12 gap-2">
        <img
          src={logo2}
          alt="le porc manex"
          className="w-40 h-28  object-cover rounded-md"
        />
        <p className="text-base text-white">
          Le porc Manex provient de la ferme Belarrea située à St Etienne de
          Baigorri. Je vous propose a la rôtissoire l'Echine ou le Jarret.
        </p>
      </div>
      <hr className="w-4/6 "></hr>

      <div className="flex items-center mt-4 w-11/12 gap-2">
        <p className="text-base text-white">
          Les viandes sont accompagnées de pommes de terre cuite vapeur puis
          sautées a la poêle.
        </p>
        <img
          src={logo3}
          alt="pommes de terre sautées"
          className="w-32 h-28  object-cover rounded-md"
        />
      </div>
    </div>
  );
}
