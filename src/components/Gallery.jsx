import React from "react";
import { SlHeart } from "react-icons/sl";
import { SlShareAlt } from "react-icons/sl";

import image_1 from "../assets/images/1.avif"
import image_2 from "../assets/images/2.avif"
import image_3 from "../assets/images/3.avif"
import image_4 from "../assets/images/4.avif"
import image_5 from "../assets/images/5.avif"

const Gallery = () => {
  return (
    <section className="mt-6 w-full">
      <div className="w-full h-20 flex justify-between items-center">
        <div className="w-[80%]">
          <h1 className="text-3xl font-semibold">Amstel Nest - an urban retreat for two</h1>
        </div>
        <div className="w-[15%] flex justify-between items-center">
          <div className="flex justify-evenly items-center w-[35%] decoration-black hover:font-semibold cursor-pointer">
            <SlShareAlt />
            <h1 className="underline font-[14px] font-sans">Share</h1>
          </div>
          <div className="flex justify-evenly items-center w-[35%] decoration-black hover:font-semibold cursor-pointer">
            <SlHeart />
            <h1 className="underline font-[14px] font-sans">Save</h1>
          </div>
        </div>
      </div>
      {/* <div class="flex justify-between w-full h-full">
        <div className="w-[50%] h-full">
          <img src={image_1} alt="" />
        </div>
        <div className="w-[25%] h-full flex flex-col justify-between">
          <div className="w-full h-full">
            <img src={image_2} alt="" />
          </div>
          <div className="w-full h-full">
            <img src={image_2} alt="" />
          </div>
        </div>
        <div className="w-[25%] h-full flex flex-col justify-between">
          <div className="w-full h-full">
            <img src={image_2} alt="" />
          </div>
          <div className="w-full h-full">
            <img src={image_2} alt="" />
          </div>
        </div>
      </div> */}
      <div className="flex justify-between gap-2 p-4 max-w-6xl mx-auto">
        <div className="w-[50%] h-full">
          <img
            src={image_1}
            alt="Large"
            className="w-full h-full object-cover rounded-tl-md rounded-bl-md"
          />
        </div>

        <div className="w-[50%] h-full flex gap-2">
          <div className="w-[50%] h-full flex flex-col gap-1">
            <div className="">
              <img
                src={image_2}
                alt="Small 1"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="">
              <img
                src={image_3}
                alt="Small 2"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <div className="w-[50%] h-full flex flex-col gap-1">
            <div className="">
              <img
                src={image_4}
                alt="Small 3"
                className="w-full h-full object-cover rounded-tr-md"
              />
            </div>
            <div className="h-[182px] relative">
              <img
                src={image_5}
                alt="Small 4"
                className="w-full h-full object-cover rounded-br-md"
              />
              <button className="absolute bottom-4 right-4 bg-white text-gray-800 px-4 py-2 rounded shadow hover:bg-gray-200">
                Show all photos
              </button>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
};

export default Gallery;
