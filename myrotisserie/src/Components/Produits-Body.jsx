import React from "react";
import Logo from "../Images/Logo-Iparla.jpeg";
import Logo1 from "../Images/Label_rouge.jpeg";

export default function ProduitsBody() {
  return (
    <div className="flex flex-col justify-center items-center">
      <h1 className="text-center font-extrabold">NOS PRODUITS</h1>
      <div className="flex mt-4 border-solid border-black border-2 w-11/12 ">
        <img
          src={Logo}
          alt="logo de poulet"
          className="w-20 h-20 rounded-full"
        />
        <p className="text-sm">
          Nos poulets sont fourni par une ferme locale familiale situé a
          Saint-Martin d'Arrosa. Les poulets jaune IPARLA ont minimum 91 jours
          d'élevage en plein air.
        </p>
      </div>
      <div className=" border-solid border-black border-2 flex justify-center items-center mt-4 w-11/12">
        <p className="text-sm">
          Nos poulets Label Rouge sont issues du Sud-Ouest uniquement.
        </p>
        <img
          src={Logo1}
          alt="poulet Label rouge"
          className="w-20 h-20 rounded-full object-fill"
        />
      </div>
    </div>
  );
}
