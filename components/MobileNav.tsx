"use client";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import { BiMenuAltRight } from "react-icons/bi";
import { FaFacebook, FaInstagram } from "react-icons/fa6";
import { IoCloseOutline } from "react-icons/io5";
import { TbPhone } from "react-icons/tb";

interface Link {
  label: string;
  href: string;
}

const MobileNav = () => {
  const params = useParams();
  const [hash, setHash] = useState<string>("");
  const [isOpen, setIsOpen] = useState<boolean>(false); // Stanje za praćenje otvorenog/zatvorenog menija
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  useEffect(() => {
    if (window.location.pathname === "/galerija") setHash("galerija");
    else setHash(window.location.hash);
  }, [params]);

  const links: Link[] = [
    {
      label: "Početna",
      href: "",
    },
    {
      label: "O nama",
      href: "#o-nama",
    },
    {
      label: "Kontakt",
      href: "#kontakt",
    },
    {
      label: "Galerija",
      href: "galerija",
    },
  ];

  return (
    <nav className="z-30 bg-white shadow-lg shadow-black/10 px-10 py-4 fixed top-0 left-0 right-0 items-center lg:hidden block">
      <Link className="mx-auto block max-w-max" href='/'>
        <Image
          src="/assets/logo.png"
          width={100}
          height={100}
          className=""
          alt="logo"
        />
      </Link>

      <button
        onClick={toggleMenu}
        className="p-1 bg-[#A2EE42] rounded-tr-2xl rounded-bl-2xl text-white absolute right-10 my-auto top-0 bottom-0 max-h-max"
      >
        {!isOpen ? (
          <BiMenuAltRight className="text-3xl" />
        ) : (
          <IoCloseOutline className="text-3xl" />
        )}
      </button>
      <div
        onClick={(e) => {
          if (e.target === e.currentTarget) {
            setIsOpen(false);
          }
        }}
        className={`w-screen left-0 h-screen -z-10 absolute top-[3.4rem] ${
          isOpen ? "bg-black/20 " : ""
        } transition-all duration-300`}
        style={{ pointerEvents: isOpen ? "auto" : "none" }}
      >
        <ul
          className={`transform absolute right-0  ${
            isOpen ? "translate-x-0" : "translate-x-full"
          } transition-all duration-300 items-end flex flex-col h-screen gap-12 w-80 bg-white text-lg text-white p-12`}
        >
          {links.map((link) => (
            <li key={link.href}>
              <Link
                onClick={toggleMenu}
                href={`/${link.href}`}
                className={`${
                  hash === link.href
                    ? "bg-[#A2EE42] hover:bg-[#91c551] text-white hover:text-[#e4e4e4]"
                    : "bg-transparent hover:bg-[#e4e4e4] text-green-800 hover:text-[#91c551]"
                } px-5 py-2 font-medium rounded-full`}
              >
                {link.label}
              </Link>
            </li>
          ))}
          <li className="mt-12">
            <Link
              onClick={toggleMenu}
              href="tel:+381 11 1234 567"
              className="px-8 py-3 flex items-center gap-2 rounded-bl-full rounded-tr-full font-medium text-white bg-[#A2EE42]"
            >
              <TbPhone className="text-2xl" /> Pozovite Nas
            </Link>
          </li>
          <li className="flex flex-col items-end">
            <h1 className="font-semibold text-[#A2EE42]">Drustvene mreže</h1>
            <div className="flex gap-6 max-w-max float-right items-center text-[#1E1E1E]">
              <Link href="https://www.instagram.com/bajicasmederevo">
                <FaInstagram className="w-6 h-6" />
              </Link>
              <Link href="https://www.facebook.com/bajica.doo?locale=sr_RS">
                <FaFacebook className="w-6 h-6" />
              </Link>
            </div>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default MobileNav;
