import React from "react";

import Left from "../assets/images/left.avif"
import Right from "../assets/images/right.avif"
import Sprayer from "../assets/images/sprayer.png"
import { IoIosCheckmarkCircleOutline } from "react-icons/io";
import { PiSprayBottleBold } from "react-icons/pi";
import { GrKey } from "react-icons/gr";
import { BiMessageAlt } from "react-icons/bi";
import { BsMap } from "react-icons/bs";
import { TiStar } from "react-icons/ti";

import Review_1 from "../assets/images/review_1.avif"
import Review_2 from "../assets/images/review_2.avif"
import Review_3 from "../assets/images/review_3.avif"
import Review_4 from "../assets/images/review_4.avif"
import Review_5 from "../assets/images/review_5.avif"
import Review_6 from "../assets/images/review_6.avif"

const Reviews = () => {
  return (
    <section className="mt-6 w-full border-b-[1px] flex flex-col justify-between py-12">
      <div className="w-full flex flex-col justify-center items-center mt-4 mb-12 text-center">
        <div className="flex justify-between items-start text-center font-medium gap-2">
          <img src={Left} alt="" className="w-auto h-[132px]" />
          <h2 className="text-8xl text-[#222] -mt-[8px]">4.9</h2>
          <img src={Right} alt="" className="w-auto h-[132px]" />
        </div>
        <div className="pb-2 font-medium text-xl leading-5">
          <span>Guest favorite</span>
        </div>
        <div className="max-w-[23.75rem] text-lg leading-6 font-normal text-center text-[#6a6a6a]">
          <span>One of the most loved homes on Airbnb based on ratings, reviews, and reliability
          </span>
        </div>
      </div>
      <div className="w-full h-full border-b-[1px] pb-10 mb-10 flex justify-between items-center">
        <div className="flex flex-col w-[155px]">
          <span className="mb-2">Overall rating</span>
          <div>
            <div className="flex items-center gap-2">
              <span>5</span>
              <div className="grow">
                <div className="bg-[#ddd] rounded-sm overflow-hidden h-1">
                  <div className="w-[90%] min-w-[2px] bg-[#222] h-full"></div>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <span>4</span>
              <div className="grow">
                <div className="bg-[#ddd] rounded-sm overflow-hidden h-1">
                  <div className="w-[16%] min-w-[2px] bg-[#222] h-full"></div>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <span>3</span>
              <div className="grow">
                <div className="bg-[#ddd] rounded-sm overflow-hidden h-1">
                  <div className="w-[5%] min-w-[2px] bg-[#222] h-full"></div>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <span>2</span>
              <div className="grow">
                <div className="bg-[#ddd] rounded-sm overflow-hidden h-1">
                </div>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <span>1</span>
              <div className="grow">
                <div className="bg-[#ddd] rounded-sm overflow-hidden h-1">
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="h-full flex flex-col justify-start w-[155px]">
          <div className="flex flex-col gap-1">
            <span>Cleanliness</span>
            <span>4.9</span>
          </div>
          <PiSprayBottleBold className="block h-8 w-8" />
        </div>
        <div className="h-full flex flex-col justify-start w-[155px]">
          <div className="flex flex-col gap-1">
            <span>Accuracy</span>
            <span>4.9</span>
          </div>
          <IoIosCheckmarkCircleOutline className="block h-8 w-8" />
        </div>
        <div className="h-full flex flex-col justify-start w-[155px]">
          <div className="flex flex-col gap-1">
            <span>Check-in</span>
            <span>5.0</span>
          </div>
          <GrKey className="block h-8 w-8" />
        </div>
        <div className="h-full flex flex-col justify-start w-[155px]">
          <div className="flex flex-col gap-1">
            <span>Communication</span>
            <span>5.0</span>
          </div>
          <BiMessageAlt className="block h-8 w-8" />
        </div>
        <div className="h-full flex flex-col justify-start w-[155px]">
          <div className="flex flex-col gap-1">
            <span>Location</span>
            <span>4.9</span>
          </div>
          <BsMap className="block h-8 w-8" />
        </div>
        <div className="h-full flex flex-col justify-start w-[155px]">
          <div className="flex flex-col gap-1">
            <span>Value</span>
            <span>4.9</span>
          </div>
          <BsMap className="block h-8 w-8" />
        </div>
      </div>

      <div>
        <div className="-mb-10 grid grid-cols-2">

          <div className="flex flex-wrap items-stretch justify-start">
            <div className="mr-[21.3%] px-2">
              <div className="mb-10">
                <div className="flex flex-col gap-3 mb-1">
                  <div className="flex justify-start items-start gap-4">
                    <div className="h-12 w-12">
                      <div className="h-full w-full rounded-[50%]">
                        <img src={Review_1} alt="" className="w-full h-full rounded-[50%] object-cover" />
                      </div>
                    </div>
                    <div className="flex flex-col gap-1">
                      <h3 className="text-base font-medium">Annette</h3>
                      <div className="font-normal  leading-4 text-sm">10 years on Airbnb</div>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <div className="flex gap-[1px] mr-1">
                      <TiStar className="h-[0.5625rem] w-[0.5625rem]" />
                      <TiStar className="h-[0.5625rem] w-[0.5625rem]" />
                      <TiStar className="h-[0.5625rem] w-[0.5625rem]" />
                      <TiStar className="h-[0.5625rem] w-[0.5625rem]" />
                      <TiStar className="h-[0.5625rem] w-[0.5625rem]" />
                    </div>
                    <div className="p-[0_5px]">
                      <div className="h-[2px] w-[2px] bg-[#000] rounded-[50%]"></div>
                    </div>
                    2 weeks ago
                  </div>
                </div>
                <div>
                  <div className="leading-6 overflow text-ellipsis line-clamp-[3]">
                    <span className="text-base leading-6">
                      Ticked all the boxes: comfy bed, good shower, within walking distance of the city and lots of public transport, and very quiet at night. It was nice staying in someone’s home and there were lots of personal touches. Would stay here again.
                    </span>
                  </div>
                  <div className="mt-2">
                    <div className="underline text-base cursor-pointer font-medium leading-6">show more</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap items-stretch justify-start">
            <div className="mr-[21.3%] px-2">
              <div className="mb-10">
                <div className="flex flex-col gap-3 mb-1">
                  <div className="flex justify-start items-start gap-4">
                    <div className="h-12 w-12">
                      <div className="h-full w-full rounded-[50%]">
                        <img src={Review_2} alt="" className="w-full h-full rounded-[50%] object-cover" />
                      </div>
                    </div>
                    <div className="flex flex-col gap-1">
                      <h3 className="text-base font-medium">Fiona</h3>
                      <div className="font-normal  leading-4 text-sm">Calgary, Canada</div>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <div className="flex gap-[1px] mr-1">
                      <TiStar className="h-[0.5625rem] w-[0.5625rem]" />
                      <TiStar className="h-[0.5625rem] w-[0.5625rem]" />
                      <TiStar className="h-[0.5625rem] w-[0.5625rem]" />
                      <TiStar className="h-[0.5625rem] w-[0.5625rem]" />
                      <TiStar className="h-[0.5625rem] w-[0.5625rem]" />
                    </div>
                    <div className="p-[0_5px]">
                      <div className="h-[2px] w-[2px] bg-[#000] rounded-[50%]"></div>
                    </div>
                    3 weeks ago
                  </div>
                </div>
                <div>
                  <div className="leading-6 overflow text-ellipsis line-clamp-[3]">
                    <span className="text-base leading-6">
                      My sister and I had a great stay here! The area it is in has lots of nice cafes and is a little bit out of the very centre of Amsterdam which makes for a less chaotic environment. It is very easy to walk/take transit/bike to all the sights you may want to visit. Additionally, Rob and Fang were always super friendly and responsive! They were always happy to help + open to giving recommendations on places to visit.
                    </span>
                  </div>
                  <div className="mt-2">
                    <div className="underline text-base cursor-pointer font-medium leading-6">show more</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap items-stretch justify-start">
            <div className="mr-[21.3%] px-2">
              <div className="mb-10">
                <div className="flex flex-col gap-3 mb-1">
                  <div className="flex justify-start items-start gap-4">
                    <div className="h-12 w-12">
                      <div className="h-full w-full rounded-[50%]">
                        <img src={Review_3} alt="" className="w-full h-full rounded-[50%] object-cover" />
                      </div>
                    </div>
                    <div className="flex flex-col gap-1">
                      <h3 className="text-base font-medium">Mike</h3>
                      <div className="font-normal  leading-4 text-sm">Salt Lake City, Utah</div>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <div className="flex gap-[1px] mr-1">
                      <TiStar className="h-[0.5625rem] w-[0.5625rem]" />
                      <TiStar className="h-[0.5625rem] w-[0.5625rem]" />
                      <TiStar className="h-[0.5625rem] w-[0.5625rem]" />
                      <TiStar className="h-[0.5625rem] w-[0.5625rem]" />
                      <TiStar className="h-[0.5625rem] w-[0.5625rem]" />
                    </div>
                    <div className="p-[0_5px]">
                      <div className="h-[2px] w-[2px] bg-[#000] rounded-[50%]"></div>
                    </div>
                    November 2024
                  </div>
                </div>
                <div>
                  <div className="leading-6 overflow text-ellipsis line-clamp-[3]">
                    <span className="text-base leading-6">
                      Rob and fang were great hosts. They had fantastic recommendations for local bakery/cafe. Close to mass transit stops. Walkable. Room was comfortable. Would stay there again if I’m ever in Amsterdam.
                    </span>
                  </div>
                  <div className="mt-2">
                    <div className="underline text-base cursor-pointer font-medium leading-6">show more</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap items-stretch justify-start">
            <div className="mr-[21.3%] px-2">
              <div className="mb-10">
                <div className="flex flex-col gap-3 mb-1">
                  <div className="flex justify-start items-start gap-4">
                    <div className="h-12 w-12">
                      <div className="h-full w-full rounded-[50%]">
                        <img src={Review_4} alt="" className="w-full h-full rounded-[50%] object-cover" />
                      </div>
                    </div>
                    <div className="flex flex-col gap-1">
                      <h3 className="text-base font-medium">Chris</h3>
                      <div className="font-normal  leading-4 text-sm">Invermere, Canada</div>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <div className="flex gap-[1px] mr-1">
                      <TiStar className="h-[0.5625rem] w-[0.5625rem]" />
                      <TiStar className="h-[0.5625rem] w-[0.5625rem]" />
                      <TiStar className="h-[0.5625rem] w-[0.5625rem]" />
                      <TiStar className="h-[0.5625rem] w-[0.5625rem]" />
                      <TiStar className="h-[0.5625rem] w-[0.5625rem]" />
                    </div>
                    <div className="p-[0_5px]">
                      <div className="h-[2px] w-[2px] bg-[#000] rounded-[50%]"></div>
                    </div>
                    October 2024
                  </div>
                </div>
                <div>
                  <div className="leading-6 overflow text-ellipsis line-clamp-[3]">
                    <span className="text-base leading-6">
                      Great place to stay in Amsterdam. Loved the room and the neighbourhood.
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap items-stretch justify-start">
            <div className="mr-[21.3%] px-2">
              <div className="mb-10">
                <div className="flex flex-col gap-3 mb-1">
                  <div className="flex justify-start items-start gap-4">
                    <div className="h-12 w-12">
                      <div className="h-full w-full rounded-[50%]">
                        <img src={Review_5} alt="" className="w-full h-full rounded-[50%] object-cover" />
                      </div>
                    </div>
                    <div className="flex flex-col gap-1">
                      <h3 className="text-base font-medium">Tonii</h3>
                      <div className="font-normal  leading-4 text-sm">2 years on Airbnb</div>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <div className="flex gap-[1px] mr-1">
                      <TiStar className="h-[0.5625rem] w-[0.5625rem]" />
                      <TiStar className="h-[0.5625rem] w-[0.5625rem]" />
                      <TiStar className="h-[0.5625rem] w-[0.5625rem]" />
                      <TiStar className="h-[0.5625rem] w-[0.5625rem]" />
                      <TiStar className="h-[0.5625rem] w-[0.5625rem]" />
                    </div>
                    <div className="p-[0_5px]">
                      <div className="h-[2px] w-[2px] bg-[#000] rounded-[50%]"></div>
                    </div>
                    October 2024
                  </div>
                </div>
                <div>
                  <div className="leading-6 overflow text-ellipsis line-clamp-[3]">
                    <span className="text-base leading-6">
                      😊😊
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap items-stretch justify-start">
            <div className="mr-[21.3%] px-2">
              <div className="mb-10">
                <div className="flex flex-col gap-3 mb-1">
                  <div className="flex justify-start items-start gap-4">
                    <div className="h-12 w-12">
                      <div className="h-full w-full rounded-[50%]">
                        <img src={Review_6} alt="" className="w-full h-full rounded-[50%] object-cover" />
                      </div>
                    </div>
                    <div className="flex flex-col gap-1">
                      <h3 className="text-base font-medium">Mallory</h3>
                      <div className="font-normal  leading-4 text-sm">Dallas, Texas</div>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <div className="flex gap-[1px] mr-1">
                      <TiStar className="h-[0.5625rem] w-[0.5625rem]" />
                      <TiStar className="h-[0.5625rem] w-[0.5625rem]" />
                      <TiStar className="h-[0.5625rem] w-[0.5625rem]" />
                      <TiStar className="h-[0.5625rem] w-[0.5625rem]" />
                      <TiStar className="h-[0.5625rem] w-[0.5625rem]" />
                    </div>
                    <div className="p-[0_5px]">
                      <div className="h-[2px] w-[2px] bg-[#000] rounded-[50%]"></div>
                    </div>
                    October 2024
                  </div>
                </div>
                <div>
                  <div className="leading-6 overflow text-ellipsis line-clamp-[3]">
                    <span className="text-base leading-6">
                      We loved our stay with Rob and Fang! They were very hospitable and gave great recommendations. The location was close to a tram stop and very easy to get around the city. The room was very clean and comfortable! I highly recommend staying with them!
                    </span>
                  </div>
                  <div className="mt-2">
                    <div className="underline text-base cursor-pointer font-medium leading-6">show more</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex items-center mt-10">
        <div className="mt-0">
          <button className="border-[1px] border-[#222] text-center cursor-poiner
           p-[13px_23px] rounded-lg font-cereal font-medium leading-5 text-base">Show all 559 reviews</button>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
