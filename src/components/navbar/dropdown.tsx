// components/CityDropdown.tsx
"use client";

import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import { ChevronDown, MapPin } from "lucide-react";
import { useState } from "react";

const cities = [
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

export default function CityDropdown() {
  const [selectedCity, setSelectedCity] = useState("Addis Ababa");

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button className="hidden md:flex items-center justify-between w-[211px] h-[48px] px-3 py-2 gap-4 rounded-lg border border-gray-200 cursor-pointer">
          <MapPin className="w-5 h-5 text-gray-700" />
          <div className="flex flex-col items-start">
            <span className="text-xs text-gray-500">Location</span>
            <span className="text-sm font-medium text-gray-700">
              {selectedCity}
            </span>
          </div>
          <ChevronDown className="w-5 h-5 text-gray-700 ml-auto" />
        </button>
      </DropdownMenuTrigger>

      <DropdownMenuContent className="w-[211px]">
        {cities.map((city) => (
          <DropdownMenuItem
            key={city}
            onSelect={() => setSelectedCity(city)}
            className="cursor-pointer"
          >
            {city}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
