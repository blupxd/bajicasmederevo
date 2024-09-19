import Image from "next/image";
import Link from "next/link";
import React from "react";

interface Info {
  label: string;
}

const Hero = () => {
  const informacije: Info[] = [
    {
      label: "Restauracija spomenika kulture",
    },
    {
      label: "Izgradnja stambenih objekata",
    },
    {
      label: "Sanacija i izrada fasada i podova",
    },
  ];
  return (
    <header className="flex lg:pr-0 px-10 lg:pl-20 justify-between pt-20">
      <div className="flex flex-col max-w-max">
        <h1 className="text-5xl xl:text-6xl text-[#1E1E1E] lg:text-left text-center font-black w-full">
          BAJICA SMEDEREVO
        </h1>
        <div className="w-full flex flex-col items-center">
          <h2 className="text-2xl xl:text-3xl text-[#1E1E1E] text-center">
            Oživljavamo Istoriju, Gradimo Budućnost
          </h2>
          <hr className="w-full border-none bg-gradient-to-r from-transparent via-[#A2EE42] to-transparent h-1 my-4" />
          <p className="text-base md:text-lg xl:text-xl lg:w-[500px] xl:w-[600px] text-[#1E1E1E] text-center leading-6 md:leading-8 italic text-wrap">
            Posvećeni smo očuvanju i obnavljanju istorijskog nasleđa. Kao
            stručnjaci za restauraciju crkava i graditeljstvo, spajamo tradiciju
            sa savremenim standardima kvaliteta.
          </p>
        </div>
        <div className="z-10 max-w-max mx-auto mt-10">
          <Link
            className="relative  font-semibold hover:text-[#A2EE42] bg-[#1E1E1E] mx-auto max-w-max px-12 my-8 py-2 text-white text-medium z-10 
             before:content-[''] transition-all duration-200 before:absolute before:inset-0 before:bg-[#A2EE42] 
             before:w-full before:h-full before:-z-10 before:translate-x-1 before:translate-y-1 
             before:transition-transform before:duration-200 hover:before:translate-x-2 hover:before:translate-y-2"
            href="#usluge"
          >
            Saznaj više
          </Link>
        </div>

        <div className="flex justify-between items-start mt-12 lg:mt-8">
          {informacije.map((info) => (
            <div
              key={info.label}
              className="bg-[#A2EE42] items-center flex justify-center flex-col h-28 p-2 lg:p-8 rounded-t-3xl text-white border-b-8 border-[#1e1e1e] lg:border-[#F1F1F1]"
            >
              <p className="text-xs lg:text-base xl:text-lg text-wrap w-24 xl:w-32 lg:leading-5 text-center ">
                {info.label}
              </p>
            </div>
          ))}
        </div>
      </div>

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
