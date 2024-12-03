import { podaci } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="px-4 lg:px-20 text-sm py-16 flex lg:flex-row flex-col gap-12 lg:gap-0 lg:justify-between flex-wrap">
      <div className="flex flex-col space-y-10">
        <Image src="/assets/logo.png" width={150} height={150} alt="logo" />
        <p className="italic leading-6 text-gray-400 w-auto md:w-96 xl:w-[30rem] text-wrap">
          Posvećeni smo očuvanju i obnavljanju istorijskog nasleđa. Kao
          stručnjaci za restauraciju crkava i graditeljstvo, spajamo tradiciju
          sa savremenim standardima kvaliteta.
        </p>
      </div>
      <div className="flex flex-col">
        <h1 className="text-2xl text-[#1E1E1E] font-bold">Meni</h1>
        <ul className="flex mt-6 flex-col space-y-4 text-gray-400">
          <li>
            {" "}
            <Link href="/">Početna</Link>
          </li>
          <li>
            <Link href="/galerija">Galerija</Link>
          </li>
          <li>
            <Link href="#o-nama">O nama</Link>
          </li>
        </ul>
      </div>
      <div className="flex flex-col">
        <h1 className="text-2xl text-[#1E1E1E] font-bold">
          Kontaktirajte nas putem
        </h1>
        <div className="flex flex-col justify-between h-full">
          <div className="flex flex-col space-y-4 mt-6 text-gray-400">
            {podaci.map((podatak) => (
              <div key={podatak.contact} className="flex items-center gap-4">
                <podatak.icon className="h-6 w-6" />
                <Link
                  className="font-medium"
                  href={`${podatak.ref}${podatak.contact}`}
                >
                  {podatak.contact}
                </Link>
              </div>
            ))}
          </div>
          <p className="font-light lg:block hidden text-sm text-gray-300">
            © 2024 Bajica Smederevo. Sva prava zadržana.
          </p>
        </div>
      </div>
      <p className="font-light block lg:hidden max-w-max mx-auto text-sm text-gray-300">
        © 2024 Bajica Smederevo. Sva prava zadržana.
      </p>
    </footer>
  );
};

export default Footer;
