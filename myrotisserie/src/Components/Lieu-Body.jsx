import React from "react";

function Lieu({ HandleChangeSpot, isChangeSpot }) {
  return (
    <div>
      <div>
        <div className="flex flex-col justify-center bg-header bg-cover">
          <h1 className="text-white flex justify-center font-bold p-2">
            Où trouver la rôtisserie Harana ?
          </h1>
          <div className="flex flex-col items-center m-2 gap-2">
            <div className="bg-[#fdf9e4] rounded-md w-2/3 text-sm flex flex-col ">
              <p className="flex justify-center underline font-bold">
                Mercredi au Vendredi :
              </p>
              <span className="flex text-center">
                Midi et Soir au rond-point de Bassussarry
              </span>
            </div>
            <div className="bg-[#fdf9e4] rounded-md w-2/3 text-sm">
              <p className="flex justify-center underline font-bold">
                Samedi et Dimanche :
              </p>
              <span className="flex text-center">
                Midi uniquement à la boulangerie ITHURRALDE à Ossès
              </span>
            </div>
          </div>
        </div>
        <div className=" w-full flex  justify-center items-center">
          <iframe
            className="rounded w-3/4 border-solid border-2 border-black mt-1"
            title="map de l'emplacement"
            src={
              isChangeSpot
                ? "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d621.9501926698497!2d-1.487707637645706!3d43.42665880159738!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd513fa64ba144e9%3A0xbb084fcb0ccd82c9!2sChezlolo!5e0!3m2!1sfr!2sfr!4v1667682244432!5m2!1sfr!2sfr"
                : "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d662.192537674905!2d-1.2992592985848705!3d43.23326854515506!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd51295acfc4d7c9%3A0x1ecd2725e480fda4!2sBoulangerie%20Artisanale%20ITHURRALDE!5e0!3m2!1sfr!2sfr!4v1667683088904!5m2!1sfr!2sfr"
            }
            width=""
            height="200"
            frameborder="0"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <div className="flex justify-around h-16 items-center">
          <button
            className="bg-header rounded-md text-xs w-24 h-8 text-white font-semibold"
            onClick={HandleChangeSpot}
          >
            Rond-point Bassussarry
          </button>
          <button
            className="bg-header rounded-md text-xs w-24 h-8 text-white font-semibold"
            onClick={HandleChangeSpot}
          >
            Boulangerie Osses
          </button>
        </div>
      </div>
    </div>
  );
}

export default Lieu;
