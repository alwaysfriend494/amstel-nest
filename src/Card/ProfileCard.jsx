// src/components/Navbar.jsx
import React from "react";
import SuperShot from '../svg/SuperShot'
import Profile from "../svg/Profile";
import Star from '../svg/Star'

const ProfileCard = () => {
    return (
       <div className="flex flex-row w-[380px] h-[230px] rounded-[20px] shadow-custom pr-8 gap-5 justify-center items-center">
            <div className="flex flex-col justify-center items-center gap-3">
                <div className="flex w-full justify-center items-center">
                    <div className="flex relative w-[105px] h-[105px]">
                        <img className="rounded-[50%]" src="data:image/webp;base64,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" alt="avatar"></img>
                        <div className="absolute flex items-center justify-center right-[-4px] bottom-1 w-8 h-8 rounded-[50%] bg-[#da0b64]">
                            <Profile />
                        </div>
                    </div>
                </div>
                <div className="flex flex-col justify-center items-center">
                    <h1 className="font-airbnb text-[28.8px] font-semibold leading-[33.1px] text-[#222222] tracking-normal">Rob & Fang</h1>
                    <span className="flex flex-row justify-center items-center gap-1">
                        <SuperShot />
                        <h3 className="font-airbnb text-[14px] font-semibold leading-[18px] text-[#222222]">
                            Superhost
                        </h3>
                    </span>
                </div>
            </div>
            <div className="flex flex-col justify-center items-center">
                <div className="flex flex-col gap-2">
                    <div className="flex flex-col gap-[2px]">
                        <h2 className="text-[22px] font-airbnb font-bold leading-[25px] text-[#222222]">565</h2>
                        <p className="text-[10px] font-airbnb leading-[14px] text-[#222222] ">
                            Reviews
                        </p>
                    </div>
                    <div className="flex bg-[#e5e7eb] h-[1px] min-w-[90px]"></div>
                    <div className="flex flex-col gap-[2px]">
                        <div className="flex flex-row items-center gap-1">
                            <h2 className="text-[22px] font-airbnb font-bold leading-[25px] text-[#222222]">4.9</h2>
                            <Star />
                        </div>
                        <p className="text-[10px] font-airbnb leading-[14px] text-[#222222] ">
                        Rating
                        </p>
                    </div>
                    <div className="flex bg-[#e5e7eb] h-[1px] min-w-[90px]"></div>
                    <div className="flex flex-col gap-[2px]">
                        <h2 className="text-[22px] font-airbnb font-bold leading-[25px] text-[#222222]">13</h2>
                        <p className="text-[10px] font-airbnb leading-[14px] text-[#222222] ">
                            Years hosting
                        </p>
                    </div>
                </div>
            </div>
       </div>
    );
};

export default ProfileCard;
