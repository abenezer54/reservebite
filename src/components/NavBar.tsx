import React from "react";
import Image from "next/image";
import { Component } from "lucide-react";

export const NavBar = () => {
  return (
    <section className="w-full h-22 bg-amber-500 flex justify-between pt-4 pb-4 pl-10 pr-10 shadow-[0px_5px_14px_0px_#080F340A]">
      <Image
        src="/logo.svg"
        alt="ReserveBite Logo"
        width={115}
        height={44}
        className="gap-2 md:w-29 md:h-11"
      />
    </section>
  );
};

const Right = () => {
  return <div></div>;
};
