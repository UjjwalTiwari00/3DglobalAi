import React from "react";
import { world } from "../data/globe.js";
import SpinningGlobe from "./SpinningGlobe";
import PriceHighlight from "./Highlight.jsx";

const HeroSection = ({ className }) => {
  return (
    <div
      className={`hero-section bg-gradient-to-r
from-[#dfe2fe]
via-[#bbccec]
to-[#acb2e7]
 text-white py-16 px-4 flex justify-center flex-col md:flex-row items-center  ${className}`}
    >
      {/* Text Area */}
      <div className="hero-content w-full md:w-1/2 p-5 transform translate-y-1/3">
        <div className="container mx-auto px-4 pt-4 flex-grow flex flex-col justify-center">
          <div className="text-center mb-8">
            <div className="inline-block mb-6">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold leading-tight bg-clip-text text-transparent bg-gradient-to-b from-zinc-800 to-zinc-500 dark:from-[#6b68ce] dark:to-[#605BEF]">
                Empower Your Commodity & Energy Trading
              </h1>
             
            </div>
            <p className="text-base sm:text-lg md:text-xl xl:text-2xl text-gray-900 dark:text-gray-900 max-w-3xl mx-auto mb-4 sm:mb-6 mt-4 leading-relaxed px-4">
             {" "}  
             <strong className="font-bold dark:text-black"> <PriceHighlight>Streamline inventory,</PriceHighlight></strong>{" "}
            <strong className="font-bold dark:text-black">manage risk </strong>,{" "}
              <strong className="font-bold dark:text-black">automate P&L tracking</strong>{" "}
            and close your day with confidence, {" "}
              {/* <strong className="font-bold dark:text-white">
                AI Integrations
              </strong> */}
              .
            </p>
          </div>
        </div>
      </div>
      {/* Globe Placeholder Area */}
      <div className="globe-placeholder w-full md:w-1/3 flex justify-center items-center relative md:mt-0 transform translate-y-1/3">
        {/* Floating Widgets Placeholder */}
        <div className="absolute top-0 right-0 bg-white bg-opacity-90 text-black p-4 rounded-md shadow-md text-sm">
                    <p className="font-bold">Eva Prosperi</p>
                    <p>Current account • £24,200.95</p>
                </div>
                <div className="absolute bottom-0 right-0 bg-white bg-opacity-90 text-black p-4 rounded-md shadow-md text-sm">
                    <p className="font-bold">WonderWallet</p>
                    <p>Connection reauthorised</p>
                </div>

        <SpinningGlobe worldTopoData={world} />
      </div>
    </div>
  );
};

export default HeroSection;
