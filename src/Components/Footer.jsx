import Link from "next/link";
import React from "react";

function Footer() {
  return (
    <div className=" bg-header h-8 bg-cover md:h-10 w-full">
      <div className="flex justify-center items-end w-full h-full p-1">
        <p className="font-semibold text-sm">
          Made with &#x2661; by{" "}
          <Link
            href={"https://portfoliodamiendurand.vercel.app/"}
            target="_blank"
            className="inline-block transition-transform hover:scale-110 hover:duration-300"
          >
            {" "}
            Damien
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Footer;
