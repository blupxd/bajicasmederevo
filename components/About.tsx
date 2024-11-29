'use client'
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaArrowDown } from "react-icons/fa6";
import Animation1 from "./Animation1";
import Animation2 from "./Animation2";
import CountUp from "react-countup";

const About = () => {
  const info = [
    {
      title: "Firma od Poverenja",
      number: 10,
      description: "Firma kojoj svi veruju za sigurne i kvalitetne projekte",
    },
    {
      title: "Godine Postojanja",
      number: 30,
      description: "Tri generacije iskustva u obnovi i očuvanju građevina",
    },
    {
      title: "Završeni projekti",
      number: 100,
      description: "Završene obnove i izgradnje širom Srbije",
    },
  ];
  return (
    <section id="o-nama" className="px-10 lg:px-20 mb-12 w-full scroll-mt-20">
      <div className="flex flex-col md:flex-row justify-between w-full md:space-x-20">
        <Animation1>
          <h1 className="text-2xl sm:text-4xl md:text-3xl xl:text-4xl 2xl:text-5xl md:leading-normal 2xl:leading-[3.75rem] w-full font-black italic text-[#1E1E1E]">
            Porodična firma koja se bavi izvođenjem građevinskih radova već tri
            generacije unazad
          </h1>
        </Animation1>

        <div className="flex overflow-hidden flex-col w-full justify-between">
          <Animation2>
            <p className="leading-6 md:mt-0 mt-2 text-[#1E1E1E] text-base xl:text-lg 2xl:text-xl">
              Specijalizovani smo za restauraciju starih i istorijskih objekata.
              Korišćenjem savremenih tehnika, pažljivo obnavljamo zgrade uz
              očuvanje njihove autentičnosti. Kvalitet i tradicija su nam
              prioritet.
            </p>
          </Animation2>
          <Link
            href="#services"
            className="px-8 md:px-10 py-3 md:mt-0 mt-6 flex items-center gap-2 font-semibold hover:bg-[#1E1E1E] hover:text-white transition-all duration-300 ease-in-out rounded-full bg-[#A2EE42] max-w-max text-base 2xl:text-lg"
          >
            Nase usluge <FaArrowDown />
          </Link>
        </div>
      </div>
      <hr className="w-full border-none bg-gradient-to-r from-transparent via-[#A2EE42] to-transparent h-1 my-24" />
      <div className="flex flex-col text-center md:text-left md:flex-row lg:items-normal items-center justify-between lg:gap-0 gap-24 flex-wrap">
        {info.map((info, index) => (
          <div key={index} className="flex flex-col text-[#1E1E1E] w-60">
            <Animation1>
              <h1 className="text-2xl md:text-lg font-semibold">
                {info.title}
              </h1>
              {index === 0 ? (
                <Image
                  src="/assets/trophy.svg"
                  alt="Trophy"
                  width={50}
                  height={50}
                  className="md:mx-0 mx-auto md:w-12 md:h-12 w-20 mb-4 h-20"
                />
              ) : (
                <h2 className="text-7xl md:text-5xl font-bold">
                  <CountUp duration={3} end={info.number} /> {index === 2 && '+'}
                </h2>
              )}
              <p className="md:text-base text-lg md:mt-6">{info.description}</p>
            </Animation1>
          </div>
        ))}
      </div>
    </section>
  );
};

export default About;
