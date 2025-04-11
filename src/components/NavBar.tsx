import Image from "next/image";
import { UserRound, Bell } from "lucide-react";
import SearchBar from "./search-bar";
import DropDown from "./dropdown";

export const NavBar = () => {
  return (
    <section className="w-full h-22 flex justify-between items-center pt-4 pb-4 pl-10 pr-10 shadow-[0px_5px_14px_0px_#080F340A]">
      <Image
        src="/logo.svg"
        alt="ReserveBite Logo"
        width={115}
        height={44}
        className="gap-2 md:w-29 md:h-11"
      />
      <SearchBar />
      <Right />
    </section>
  );
};

const Right = () => {
  return (
    <div className="flex gap-3 items-center">
      <DropDown />
      <Bell className="bg-[#004225] text-white p-2 rounded-lg md:w-12 md:h-12 md:p-3" />
      <UserRound className="bg-[#004225] text-white p-2 rounded-lg md:w-12 md:h-12 md:p-3" />
    </div>
  );
};
