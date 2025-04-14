"use client";

import { useState, ComponentType } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Calendar, Clock, ChevronDown, Search, User } from "lucide-react";

export default function HotelSearch() {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
    console.log("Searching for:", searchQuery);
  };

  return (
    <section className="w-75 h-138 md:w-full md:h-567">
      <div className="w-full relative flex justify-center">
        <img
          src="https://s3-alpha-sig.figma.com/img/26b5/96a9/ca381775d2a7a7d5e9a0b4bd8be38340?Expires=1745798400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=hnskd8TY2ZlBPajUtn8KYzm5-33SibYYKkUPcWob5kncW9IaZBcpwH3w4v2OwJQuU4T6w-mQrVX90E3E7VMzSaHdusvB9NpIlUmH63pqY9zwff7HBCRjTKi3y7J5WeESO5GQ9iaqwA3-TeiWlYfQqFmLsCM8SR7ylOrSYkefFPVEdOD6vKZC9a-xTZru68njZHnEstsXy6wysD1-cZpz2C9IMa9C0SNOpvgrx8Xj3j-YmychAyed3jiT85m8ip9wG0jSKIMQcQmmyutZPiDyPURVqPFWWrD452GnAcYYaHCeirnSx~SX2PSAOrcjVXLnkYZhI0J5ITOIn1IX4SkSPA__"
          alt="Resort background"
          className="w-75 h-72 md:h-154 md:w-full rounded-3xl object-cover"
        />
        <div className="absolute top-46 w-70 h-90 p-6 gap-3 rounded-3xl bg-[#004225] text-white shadow-[0px_4px_8px_0px_#4A3AFF14] flex flex-col md:w-340 md:h-35 md:top-135 md:flex-row md:pl-17 md:pr-17 md:pt-10 md:pb-10 ">
          <div
            className="w-full flex  flex-col items-center justify-center font-semibold h-36 bg-[#FFFFFF] rounded-xl text-[#004225] text-lg md:flex-row md:h-15 md:w-153
            
          "
          >
            <MyComp IconComponent={Calendar} text="Jan 19, 2023" />
            <MyComp IconComponent={Clock} text="7:30 PM" />
            <MyComp IconComponent={User} text="2 People" />
          </div>
          <div className="w-full h-15 bg-[#FFFFFF] rounded-xl flex items-center p-4 md:h-full md:w-108">
            <Search className="w-5 h-5 text-[#C5C5C5]" />
            <Input
              type="text"
              placeholder="Search tables..."
              value={searchQuery}
              onChange={handleSearch}
              className="h-full border-none bg-transparent text-[#004225] placeholder:text-[#004225]/60 focus-visible:ring-0 focus-visible:ring-offset-0"
            />
          </div>
          <Button
            variant="default"
            className="w-full h-15 bg-[#007E47] text-white rounded-xl hover:bg-[#007E47]/90 md:h-full md:w-35"
          >
            Find Table
          </Button>
        </div>
      </div>
    </section>
  );
}

interface MyCompProps {
  IconComponent: ComponentType<{ className?: string }>;
  text: string;
}

const MyComp = ({ IconComponent, text }: MyCompProps) => {
  return (
    <div
      className="
        h-12 w-50 pt-3.5 pb-3.5 pl-4.5 pr-4.5 
        flex justify-between items-center font-normal 
        md:w-51 text-sm 
        border-b border-gray-200 last:border-b-0 
        md:border-b-0 md:border-r md:last:border-r-0
      "
    >
      <div className="flex gap-3 justify-between items-center">
        <IconComponent className="p-0.5 w-5 h-5" />
        <span>{text}</span>
      </div>
      <ChevronDown className="p-0.5 w-5 h-5" />
    </div>
  );
};
