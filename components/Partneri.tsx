import React from "react";
import Animation1 from "./Animation1";

const Partneri = () => {
  return (
    <section className="px-10 lg:px-20 py-16 flex flex-col">
      <Animation1>
        <h1 className="text-3xl md:text-4xl 2xl:text-5xl font-extrabold bg-gradient-to-r from-[#7DB238] to-[#A1D164] bg-clip-text text-transparent">
          Naši partneri
        </h1>
        <p className="text-base md:text-lg 2xl:text-xl text-[#1E1E1E]">
          Udruživanjem snaga unapređujemo građevinske projekte i kvalitet usluga
        </p>
        {/* Ovde idu partneri */}
      </Animation1>
    </section>
  );
};

export default Partneri;
