import React from "react";

function Tarifs() {
  return (
    <div className="">
      <h1 className="text-white text-lg font-bold h-14 w-full  justify-center items-center flex bg-black-700 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-black-600">
        TARIFS
      </h1>
      <ul className="h-48 bg-[#906948] rounded-md flex flex-col justify-between items-center">
        <li>Poulet Iparla : 21€ / pièce</li>
        <li>Poulet Label Rouge : 21€ / pièce</li>
        <li>Echine de Porc Manex : 22.90€ / Kg</li>
        <li>Jarret sans os de Porc Manex : 14.50€ / Kg</li>
        <li>Pommes de terre sautées en barquette : petite 3€, grande 5€</li>
      </ul>
    </div>
  );
}

export default Tarifs;
