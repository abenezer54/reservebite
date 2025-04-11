"use client";

import { useState, useRef, useEffect } from "react";
import { MapPin, ChevronDown, ChevronUp } from "lucide-react";

const ethiopianCities = [
  "Addis Ababa",
  "Dire Dawa",
  "Bahir Dar",
  "Hawassa",
  "Mekelle",
  "Adama",
  "Gondar",
  "Jimma",
  "Dessie",
  "Bishoftu",
];

const DropDown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedCity, setSelectedCity] = useState("Addis Ababa");
  const dropdownRef = useRef<HTMLDivElement>(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const selectCity = (city: string) => {
    setSelectedCity(`${city}`);
    setIsOpen(false);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      <div
        className="hidden md:flex items-center justify-between w-[211px] h-[48px] px-3 py-2 gap-4 rounded-lg border border-gray-200 cursor-pointer"
        onClick={toggleDropdown}
      >
        <MapPin className="w-5 h-5 text-gray-700" />

        <div className="flex flex-col items-start">
          <span className="text-xs text-gray-500">Location</span>
          <span className="text-sm font-medium text-gray-700">
            {selectedCity}
          </span>
        </div>
        {isOpen ? (
          <ChevronUp className="w-5 h-5 text-gray-700 ml-auto" />
        ) : (
          <ChevronDown className="w-5 h-5 text-gray-700 ml-auto" />
        )}
      </div>

      {isOpen && (
        <div className="absolute top-full left-0 mt-1 w-[211px] bg-white border border-gray-200 rounded-lg shadow-lg z-10">
          <ul className="py-1">
            {ethiopianCities.map((city) => (
              <li
                key={city}
                className="px-3 py-2 hover:bg-gray-100 cursor-pointer text-sm text-gray-700"
                onClick={() => selectCity(city)}
              >
                {city}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default DropDown;
