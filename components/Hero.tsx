import { Pacifico } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Animation1 from "./Animation1";
const pacifico = Pacifico({ weight: "400", subsets: ["latin"] });

const Hero = () => {
  return (
    <header className="flex items-center lg:pr-0 px-4 lg:pl-20 justify-between pt-40 lg:pt-10 pb-32 lg:pb-0 relative">
      <Image
        src="/assets/border.svg"
        alt="border"
        width={100}
        height={100}
        className="w-full absolute -bottom-20 sm:hidden left-0 right-0 z-20"
      />
      <Image
        src="/assets/bg.jpg"
        fill
        className="object-cover lg:hidden opacity-10 z-10"
        alt="BG"
      />
      <Animation1>
        <div className="flex flex-col max-w-max z-20">
          <h1 className="text-5xl xl:text-7xl text-[#1E1E1E] lg:text-left text-center font-black w-full">
            BAJICA SMEDEREVO
          </h1>
          <div className="w-full flex flex-col items-center">
            <h2
              className={`${pacifico.className} text-xl xl:text-3xl text-[#1E1E1E] text-center`}
            >
              Oživljavamo Istoriju, Gradimo Budućnost
            </h2>

            <hr className="w-full border-none bg-gradient-to-r from-transparent via-[#A2EE42] to-transparent h-1 my-4" />
            <p className="text-base md:text-lg xl:text-xl lg:w-[500px] xl:w-[600px] text-[#1E1E1E] text-center leading-6 md:leading-8 italic text-wrap">
              Porodična građevinska firma sa tradicijom od tri generacije,
              specijalizovana za sve vrste radova – od sanacija i podova do
              fasada i restauracije objekata. Kvalitet, tradicija i pažnja prema
              detaljima su naš prioritet.
            </p>
          </div>
          <div className="z-10 max-w-max mx-auto mt-16">
            <Link
              className="relative  font-semibold hover:text-[#A2EE42] bg-[#1E1E1E] mx-auto max-w-max px-12 my-8 py-4 text-white text-medium z-10 
             before:content-[''] transition-all duration-200 before:absolute before:inset-0 before:bg-[#A2EE42] 
             before:w-full before:h-full before:-z-10 before:translate-x-1 before:translate-y-1 
             before:transition-transform before:duration-200 hover:before:translate-x-2 hover:before:translate-y-2"
              href="/galerija"
            >
              Pogledajte naše radove
            </Link>
          </div>
        </div>
      </Animation1>
      <Image
        src="/assets/Hero.png"
        width={500}
        height={500}
        alt="Hero Image"
        className="2xl:w-fit lg:block hidden w-[400px] xl:w-[500px] h-fit"
        quality={100}
      />
    </header>
  );
};

export default Hero;
