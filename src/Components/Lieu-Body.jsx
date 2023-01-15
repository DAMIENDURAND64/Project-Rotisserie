import React, { useState } from "react";
import { motion } from "framer-motion";

function Lieu() {
  const [bassussarry, setBassussarry] = useState(true);
  const [osses, setOsses] = useState(false);

  const changeToOsses = () => {
    setBassussarry(false);
    setOsses(true);
  };
  const changeToBassussarry = () => {
    setOsses(false);
    setBassussarry(true);
  };

  return (
    <div className="">
      <div className="py-6">
        <div className="flex flex-col justify-center items-center ">
          <h1 className="text-white text-base md:text-2xl font-bold h-14 w-full justify-center items-center flex bg-black-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-black-600">
            OU TROUVER LA ROTISSERIE HARANA ?
          </h1>
          <div className="flex flex-col items-center py-4 gap-3 md:flex-row md:gap-32">
            <div className="bg-[#906948] p-2 text-white rounded-md w-2/3 text-sm flex flex-col bg-opacity-80 md:text-lg md:h-24 md:flex md:justify-center md:items-center">
              <p className="flex justify-center underline font-bold">
                Mercredi au Vendredi :
              </p>
              <span className="flex text-center">
                Midi et Soir au rond-point de Bassussarry
              </span>
            </div>
            <div className="bg-[#906948] text-white rounded-md w-2/3 p-2 text-sm bg-opacity-80 md:text-lg md:h-24 ">
              <p className="flex justify-center underline font-bold ">
                Samedi et Dimanche :
              </p>
              <span className="flex text-center">
                Midi uniquement à la boulangerie ITHURRALDE à Ossès
              </span>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center mb-2 md:flex-row md:ml-48 ">
          <iframe
            className="rounded w-11/12 border-solid border-2 border-black md:w-1/2 h-96 md:flex md:items-center"
            title="emplacement à Bassussarry du mercredi au vendredi le midi et le soir ainsi qu'a Ossès le samedi et dimanche le midi uniquement "
            src={
              bassussarry
                ? "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d621.9501926698497!2d-1.487707637645706!3d43.42665880159738!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd513fa64ba144e9%3A0xbb084fcb0ccd82c9!2sChezlolo!5e0!3m2!1sfr!2sfr!4v1667682244432!5m2!1sfr!2sfr"
                : "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d662.192537674905!2d-1.2992592985848705!3d43.23326854515506!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd51295acfc4d7c9%3A0x1ecd2725e480fda4!2sBoulangerie%20Artisanale%20ITHURRALDE!5e0!3m2!1sfr!2sfr!4v1667683088904!5m2!1sfr!2sfr"
            }
            width=""
            height="200"
            frameborder="0"
            allowFullScreen
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
          <div>
            <div className="flex gap-16 mt-2 md:flex-col md:gap-10">
              <motion.button
                whileHover={{ scale: 1.2 }}
                className={
                  bassussarry
                    ? "bg-white rounded-md text-xs w-24 h-12 px-3 text-[#906948] font-bold bg-opacity-80 md:ml-20 md:text-base md:h-16 md:w-32"
                    : "bg-[#906948] rounded-md text-xs w-24 h-12 px-3 text-white font-semibold bg-opacity-80 md:ml-20 md:text-base md:h-16 md:w-32"
                }
                onClick={changeToBassussarry}
              >
                Rond-point Bassussarry
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.2 }}
                className={
                  osses
                    ? "bg-white rounded-md text-xs w-24 h-12 px-3 text-[#906948] font-bold bg-opacity-80 md:ml-20 md:text-base md:h-16 md:w-32"
                    : "bg-[#906948] rounded-md text-xs w-24 h-12 px-3 text-white font-semibold bg-opacity-80 md:ml-20 md:text-base md:h-16 md:w-32"
                }
                onClick={changeToOsses}
              >
                Boulangerie Osses
              </motion.button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Lieu;
