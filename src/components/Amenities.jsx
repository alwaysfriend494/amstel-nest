import React from "react";
import { LiaDoorClosedSolid } from "react-icons/lia";
import { LiaLuggageCartSolid } from "react-icons/lia";
import { LuRefrigerator } from "react-icons/lu";
import { LuCalendarFold } from "react-icons/lu";
import { GrWifi } from "react-icons/gr";
import { PiHairDryer } from "react-icons/pi";
import { TbMicrowave } from "react-icons/tb";
import { BiAlarmOff } from "react-icons/bi";

const Amenities = () => {
  return (
    <section className="mt-6 w-full border-b-2">
      <h2 className="text-xl font-bold mb-6">What this place offers</h2>
      <div className="w-full h-full flex justify-between">
        <div className="flex flex-col w-[50%] pr-5">
          <div className="flex justify-start items-center pb-6 font-normal leading-5 text-xl">
            <LiaDoorClosedSolid className="mr-5" />
            <span>Lock on bedroom door</span>
          </div>
          <div className="flex justify-start items-center pb-6 font-normal leading-5 text-xl">
            <LiaLuggageCartSolid className="mr-5" />
            <span>Luggage dropoff allowed</span>
          </div>
          <div className="flex justify-start items-center pb-6 font-normal leading-5 text-xl">
            <LuRefrigerator className="mr-5" />
            <span>Refrigerator</span>
          </div>
          <div className="flex justify-start items-center pb-6 font-normal leading-5 text-xl">
            <LuCalendarFold className="mr-5" />
            <span>Long term stays allowed</span>
          </div>
        </div>
        <div className="flex flex-col w-[50%] pr-5">
          <div className="flex justify-start items-center pb-6 font-normal leading-5 text-xl">
            <GrWifi className="mr-5" />
            <span>Wifi</span>
          </div>
          <div className="flex justify-start items-center pb-6 font-normal leading-5 text-xl">
            <PiHairDryer className="mr-5" />
            <span>Hair dryer</span>
          </div>
          <div className="flex justify-start items-center pb-6 font-normal leading-5 text-xl">
            <TbMicrowave className="mr-5" />
            <span>Microwave</span>
          </div>
          <div className="flex justify-start items-center pb-6 font-light leading-5 text-xl">
            <BiAlarmOff className="mr-5" />
            <span className="line-through">Carbon monoxide alarm</span>
          </div>
        </div>
      </div>
      <div className="mt-4 mb-12 border-[1px] border-[#222] border-solid rounded-xl w-52 flex flex-col justify-between items-start p-[13px_23px] cursor-pointer">
        <span className="font-medium">Show all 9 amenities</span>
      </div>
    </section>
  );
};

export default Amenities;
