import React from "react";
import { Typewriter } from "react-simple-typewriter";

export default function Hero() {
  return (
    <section
      className="relative h-[500px] bg-cover bg-center text-white flex items-center justify-center"
      style={{
        backgroundImage: `url('/images/image.jfif')`,
      }}
    >
      <div className="bg-black bg-opacity-50 w-full h-full absolute top-0 left-0" />
      <div className="relative z-10 text-center px-4">
        <h1 className="text-5xl font-extrabold tracking-wide drop-shadow-xl mb-4">
          <Typewriter
            words={[
              "Tile Adhesives",
              "Block Join Mortar",
              "Solutions for Every Surface",
              "Strong Bonds, Beautiful Results",
            ]}
            loop={true}
            cursor
            cursorStyle="|"
            typeSpeed={100}
            deleteSpeed={50}
            delaySpeed={1000}
          />
        </h1>
        <p className="text-lg drop-shadow-md mb-6">
          Professional grade products for lasting results
        </p>
        <button className="px-6 py-3 bg-yellow-400 hover:bg-yellow-300 text-black font-semibold rounded shadow-lg transition">
          Explore Products
        </button>
      </div>
    </section>
  );
}
