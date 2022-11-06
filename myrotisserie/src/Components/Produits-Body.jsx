import React from "react";
import Logo from "../Images/Logo-Iparla.jpeg";
import Logo1 from "../Images/Label_rouge.jpeg";
import logo2 from "../Images/Logo-Manex.png";

export default function ProduitsBody() {
  return (
    <div className="flex flex-col justify-center items-center">
      <h1 className="text-center font-extrabold">NOS PRODUITS</h1>
      <div className="flex items-center mt-4 w-11/12 gap-2 ">
        <img
          src={Logo}
          alt="logo de poulet"
          className="w-20 h-20 rounded-full"
        />
        <p className="text-sm">
          Les poulets sont fourni par une ferme locale familiale situé a
          Saint-Martin d'Arrosa. Les poulets IPARLA ont minimum 91 jours
          d'élevage en plein air.
        </p>
      </div>
      <div className=" flex justify-center items-center mt-4 w-11/12 gap-2">
        <p className="text-sm">
          Nos poulets Label Rouge sont issues du Sud-Ouest uniquement.
        </p>
        <img
          src={Logo1}
          alt="poulet Label rouge"
          className="w-20 h-20 rounded-full object-fill"
        />
      </div>
      <div className="flex items-center mt-4 w-11/12 gap-2">
        <img
          src={logo2}
          alt="le porc manex"
          className="w-32 h-28  object-contain"
        />
        <p className="text-sm">
          Le porc Manex me provient de la ferme Belarrea située à St Etienne de
          Baigorri. Je vous propose a la rôtissoire l'Echine ou le Jarret .
        </p>
      </div>
    </div>
  );
}
