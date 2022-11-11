import React from "react";
import { motion } from "framer-motion";

function Lieu({ HandleChangeSpot, isChangeSpot }) {
  return (
    <div>
      <div>
        <div className="flex flex-col justify-center items-center ">
          <h1 className="text-white text-base font-bold h-14 w-full justify-center items-center flex bg-black-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-black-600">
            OU TROUVER LA ROTISSERIE HARANA ?
          </h1>
          <div className="flex flex-col items-center m-2 gap-2">
            <div className="bg-[#906948] text-white rounded-md w-2/3 text-sm flex flex-col bg-opacity-80 ">
              <p className="flex justify-center underline font-bold">
                Mercredi au Vendredi :
              </p>
              <span className="flex text-center">
                Midi et Soir au rond-point de Bassussarry
              </span>
            </div>
            <div className="bg-[#906948] text-white rounded-md w-2/3 text-sm bg-opacity-80 ">
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
          <motion.button
            whileHover={{ scale: 1.2 }}
            className="bg-[#906948] rounded-md text-xs w-24 h-8 text-white font-semibold bg-opacity-80 "
            onClick={HandleChangeSpot}
          >
            Rond-point Bassussarry
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.2 }}
            className="bg-[#906948] rounded-md text-xs w-24 h-8 text-white font-semibold bg-opacity-80 "
            onClick={HandleChangeSpot}
          >
            Boulangerie Osses
          </motion.button>
        </div>
      </div>
    </div>
  );
}

export default Lieu;
