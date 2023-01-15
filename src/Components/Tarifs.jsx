import React from "react";

function Tarifs() {
  return (
    <div className=" py-4">
      <div className="flex flex-col items-center gap-y-6">
        <h1 className="text-white text-lg md:text-2xl font-bold h-14 w-full  justify-center items-center flex bg-black-700 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-black-600">
          TARIFS
        </h1>
        <ul className=" py-10 bg-[#906948] bg-opacity-80 text-white md:text-lg rounded-md flex flex-col justify-between items-center w-11/12 mb-4 md:w-3/4 md:bg-opacity-80">
          <li className="my-2">Poulet Iparla : 21€ / pièce</li>
          <li className="my-2">Poulet Label Rouge : 21€ / pièce</li>
          <li className="my-2">Echine de Porc Manex : 22.90€ / Kg</li>
          <li className="my-2">Jarret sans os de Porc Manex : 14.50€ / Kg</li>
          <li className="my-2">
            Pommes de terre sautées en barquette : <br />
            <span className="flex justify-center">petite: 3€, grande: 5€</span>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Tarifs;
