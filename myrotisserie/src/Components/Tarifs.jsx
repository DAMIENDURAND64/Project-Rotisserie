import React from "react";

function Tarifs() {
  return (
    <div className=" bg-header w-full h-auto bg-cover ">
      <h1 className="text-white text-center font-extrabold">TARIFS</h1>
      <ul className=" m-6 bg-[#fdf9e4] rounded-md">
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
