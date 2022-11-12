import React from "react";

function Tarifs() {
  return (
    <div className=" py-4">
      <div className="flex flex-col items-center gap-y-6">
        <h1 className="text-white text-lg font-bold h-14 w-full  justify-center items-center flex bg-black-700 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-black-600">
          TARIFS
        </h1>
        <ul className="h-48 bg-[#906948]  text-white rounded-md flex flex-col justify-between items-center w-11/12 mb-3">
          <li>Poulet Iparla : 21€ / pièce</li>
          <li>Poulet Label Rouge : 21€ / pièce</li>
          <li>Echine de Porc Manex : 22.90€ / Kg</li>
          <li>Jarret sans os de Porc Manex : 14.50€ / Kg</li>
          <li>
            Pommes de terre sautées en barquette : <br />
            <span className="flex justify-center">
              petite : 3€, grande : 5€
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Tarifs;
