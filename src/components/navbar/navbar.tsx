"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { UserRound, Bell } from "lucide-react";
import DropDown from "./dropdown";
import SearchBar from "./search-bar";
import NotificationPopup from "./notification-popup";
export const NavBar = () => {
  return (
    <section className="w-full h-22 flex justify-between items-center pt-4 pb-4 pl-10 pr-10 shadow-[0px_5px_14px_0px_#080F340A] z-10">
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
  const [showNotifications, setShowNotifications] = useState(false);
  const notificationRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        notificationRef.current &&
        !notificationRef.current.contains(event.target as Node)
      ) {
        setShowNotifications(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="flex gap-2 md:gap-3 items-center">
      <DropDown />
      <div className="relative" ref={notificationRef}>
        <button
          onClick={() => setShowNotifications(!showNotifications)}
          className="bg-[#004225] text-white p-2 rounded-lg w-10 h-10 flex items-center justify-center md:w-12 md:h-12 md:p-3"
        >
          <Bell className="w-5 h-5 md:w-6 md:h-6" />
        </button>
        {showNotifications && (
          <div
            className="fixed inset-0 z-10 md:relative md:inset-auto"
            onClick={(e) =>
              e.target === e.currentTarget && setShowNotifications(false)
            }
          >
            <div className="absolute md:right-0 right-4 left-4 md:left-auto top-16 md:top-full md:mt-2">
              <NotificationPopup />
            </div>
          </div>
        )}
      </div>
      <button className="bg-[#004225] text-white p-2 rounded-lg w-10 h-10 flex items-center justify-center md:w-12 md:h-12 md:p-3">
        <UserRound className="w-5 h-5 md:w-6 md:h-6" />
      </button>
    </div>
  );
};
