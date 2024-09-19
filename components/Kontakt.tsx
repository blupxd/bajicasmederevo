import React from "react";
import { podaci } from "@/constants";
import Link from "next/link";
import { FaFacebook, FaInstagram } from "react-icons/fa6";

interface InfoItem {
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  text: string;
  ref: string;
  contact: string;
}

const Kontakt = () => {
  return (
    <section className="px-10 lg:px-20 pt-16 pb-[30rem] md:pb-8 bg-[#A2EE42] flex flex-col mb-48">
      <div className="text-[#1e1e1e] flex flex-col text-center max-w-max mx-auto relative h-72 md:h-64">
        <h1 className="font-extrabold text-3xl sm:text-4xl lg:text-5xl">
          Zainteresovani ste za naše usluge?
        </h1>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl">
          Kontaktirajte nas za više informacija
        </h2>
        <div className="flex gap-6 max-w-max mx-auto mt-4 items-center text-[#1E1E1E]">
          <Link href="https://www.instagram.com/bajicasmederevo">
            <FaInstagram className="w-8 h-8" />
          </Link>
          <Link href="https://www.facebook.com/bajica.doo?locale=sr_RS">
            <FaFacebook className="w-8 h-8" />
          </Link>
        </div>
        <hr className="w-full border-none bg-gradient-to-r from-transparent via-[#1e1e1e] to-transparent h-0.5 my-6" />
        <div className="flex md:flex-row flex-col h-full space-y-16 md:space-y-0 md:justify-between absolute top-72 md:top-48 bottom-0 w-full">
          {podaci.map((kontakt) => (
            <div
              key={kontakt.contact}
              className="bg-white h-full w-full md:w-72 lg:w-96 px-10 lg:px-16 shadow-xl shadow-black/20 py-8 border-b-[0.75rem] border-[#A2EE42] text-base lg:text-lg flex flex-col items-center"
            >
              <kontakt.icon className="w-12 h-12 text-[#1e1e1e]" />
              <h1 className=" text-[#1e1e1e] mt-2 md:mt-6 font-medium -mb-2">
                {kontakt.text}
              </h1>
              <p className="text-[#A2EE42] italic font-bold">
                {kontakt.contact}
              </p>
              <Link
                href={`${kontakt.ref}${kontakt.contact}`}
                className="px-8 hover:bg-[#1E1E1E] transition-all duration-200 ease-in-out mt-2 md:mt-6 py-1 text-white font-semibold bg-[#A2EE42] max-w-max"
              >
                Kontaktiraj
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Kontakt;
