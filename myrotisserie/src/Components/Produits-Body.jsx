import React from "react";
import Logo from "../Images/Logo-Iparla.jpeg";
import Logo1 from "../Images/Label_rouge.jpeg";
import logo2 from "../Images/Logo-Manex.png";
import logo3 from "../Images/Logo3.JPG";

export default function ProduitsBody() {
  return (
    <div>
      <div className="flex flex-col justify-center items-center py-6">
        <h1 className="text-white text-lg md:text-xl font-bold h-14 w-full  justify-center items-center flex bg-black-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-black-600">
          NOS PRODUITS
        </h1>
        <div className="flex flex-col items-center p-1 my-2 ">
          <div className="flex items-center ">
            <img
              src={Logo}
              alt="logo de la ferme Iparla qui fourni des poulets fermiers parfait pour une cuisson a la broche et ou a la rotissoire"
              className="w-20 h-20 rounded-full"
            />
            <p className="text-base text-white md:text-lg">
              Les poulets sont fourni par une ferme locale familiale situé a
              Saint-Martin d'Arrosa. Les poulets IPARLA ont minimum 91 jours
              d'élevage en plein air.
            </p>
          </div>
          <hr className="w-4/6 my-2"></hr>
          <div className=" flex justify-center items-center w-11/12 my-2 ">
            <p className="text-base text-white md:text-lg">
              Nos poulets Label Rouge sont issues du Sud-Ouest uniquement.
            </p>
            <img
              src={Logo1}
              alt="logo poulet Label rouge"
              className="w-20 h-20 rounded-full object-fill"
            />
          </div>
          <hr className="w-4/6 my-2 "></hr>

          <div className="flex flex-col items-center w-11/12 my-2">
            <img
              src={logo2}
              alt="le porc manex qui nous vient du pays basque pour nous fournir des jarrets et echines de porc de qualité"
              className="w-48 h-28  object-fill rounded-md mb-2"
            />
            <p className="text-base text-white md:text-lg">
              Le porc Manex provient de la ferme Belarrea située à St Etienne de
              Baigorri. Je vous propose a la rôtissoire l'Echine ou le Jarret.
            </p>
          </div>
          <hr className="w-4/6 my-2"></hr>

          <div className="flex flex-col items-center w-11/12  mt-2">
            <img
              src={logo3}
              alt="pommes de terre du pays basque rissolées jusqu'a qu'elles deviennent fondantes "
              className="w-48 h-28  object-fill rounded-md mb-2"
            />
            <p className="text-base text-white md:text-lg">
              Les viandes sont accompagnées de pommes de terre cuite vapeur puis
              sautées a la poêle avec des oignons caramelisés.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
