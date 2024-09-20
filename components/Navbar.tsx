"use client";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import { TbPhone } from "react-icons/tb";

interface Link {
  label: string;
  href: string;
}

const Navbar = () => {
  const params = useParams();
  const [hash, setHash] = useState<string>("");
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
    <nav className="lg:flex w-full justify-between items-center text-sm px-20 2xl:py-10 py-8 hidden">
      <Link className="block max-w-max" href="/">
        <Image
          src="/assets/logo.png"
          width={200}
          height={200}
          className="w-40 h-auto"
          alt="logo"
        />
      </Link>

      <ul className="flex items-center gap-6 bg-gray-200 py-2.5 px-1 rounded-full">
        {links.map((link) => (
          <li key={link.href}>
            <Link
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
      </ul>
      <Link
        href="tel:+381 11 1234 567"
        className="px-8 py-3 flex items-center gap-2 rounded-bl-full rounded-tr-full font-medium text-white hover:bg-[#1e1e1e] transition-all duration-200 ease-in-out bg-[#A2EE42]"
      >
        <TbPhone className="text-2xl" /> Pozovite Nas
      </Link>
    </nav>
  );
};

export default Navbar;
