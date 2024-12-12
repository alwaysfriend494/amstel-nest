// src/components/Footer.jsx
import React from "react";
// import {Link} from React;
import Arrow from "../svg/Arrow";
import Rect from '../svg/Rect';
import Earth from "../svg/Earth";
import FaceBook from "../svg/Facebook";
import Twitter from "../svg/Twitter";
import Instagram from "../svg/Instagram";

const Footer = () => {
    return (
        <footer className="flex bg-[#f7f7f7] w-full">
            <div className="flex flex-col justify-center items-center w-full">
                <div className="flex w-[1280px] px-[80px] justify-center">
                    <div className="flex flex-row items-center justify-start gap-3 h-[84px] w-full">
                        <div className="flex flex-row flex-wrap gap-3">
                            <span className="cursor-pointer">Airbnb</span>
                        </div>
                        <div className="flex flex-row flex-wrap gap-3 items-center justify-center">
                            <Arrow />
                            <span className="cursor-pointer">Airbnb</span>
                        </div>
                        <div className="flex flex-row flex-wrap gap-3 items-center justify-center">
                            <Arrow />
                            <span className="cursor-pointer">Airbnb</span>
                        </div>
                        <div className="flex flex-row flex-wrap gap-3 items-center justify-center">
                            <Arrow />
                            <span className="cursor-pointer">Airbnb</span>
                        </div>
                        <div className="flex flex-row flex-wrap gap-3 items-center justify-center">
                            <Arrow />
                            <span className="cursor-pointer">Airbnb</span>
                        </div>
                    </div>
                </div>
                <hr className="w-full" />
                <div className="flex flex-col w-[1280px] px-[80px] justify-center">
                    <div className="flex flex-col pb-12 pt-8 items-start justify-center whitespace-nowrap w-full">
                        <h2 className="text-[22px] font-semibold leading-[25px] text-[#222222] pb-8">Explore other options in and around Watergraafsmeer</h2>
                        <div className="grid grid-rows-3 grid-cols-3 gap-y-[25px] w-full">
                            <div className="flex w-1/3 flex-col">
                                <span className="font-semibold cursor-pointer text-[14px] leading-[18px] text-[#222222]">Amsterdam</span>
                                <span className="font-semibold cursor-pointer text-[14px] leading-[18px] text-[#969696]">Vacation rentals</span>
                            </div>
                            <div className="flex w-1/3 flex-col">
                                <span className="font-semibold cursor-pointer text-[14px] leading-[18px] text-[#222222]">Amsterdam</span>
                                <span className="font-semibold cursor-pointer text-[14px] leading-[18px] text-[#969696]">Vacation rentals</span>
                            </div>
                            <div className="flex w-1/3 flex-col">
                                <span className="font-semibold cursor-pointer text-[14px] leading-[18px] text-[#222222]">Amsterdam</span>
                                <span className="font-semibold cursor-pointer text-[14px] leading-[18px] text-[#969696]">Vacation rentals</span>
                            </div>
                            <div className="flex w-1/3 flex-col">
                                <span className="font-semibold cursor-pointer text-[14px] leading-[18px] text-[#222222]">Amsterdam</span>
                                <span className="font-semibold cursor-pointer text-[14px] leading-[18px] text-[#969696]">Vacation rentals</span>
                            </div>
                            <div className="flex w-1/3 flex-col">
                                <span className="font-semibold cursor-pointer text-[14px] leading-[18px] text-[#222222]">Amsterdam</span>
                                <span className="font-semibold cursor-pointer text-[14px] leading-[18px] text-[#969696]">Vacation rentals</span>
                            </div>
                            <div className="flex w-1/3 flex-col">
                                <span className="font-semibold cursor-pointer text-[14px] leading-[18px] text-[#222222]">Amsterdam</span>
                                <span className="font-semibold cursor-pointer text-[14px] leading-[18px] text-[#969696]">Vacation rentals</span>
                            </div>
                            <div className="flex w-1/3 flex-col">
                                <span className="font-semibold cursor-pointer text-[14px] leading-[18px] text-[#222222]">Amsterdam</span>
                                <span className="font-semibold cursor-pointer text-[14px] leading-[18px] text-[#969696]">Vacation rentals</span>
                            </div>
                            <div className="flex w-1/3 flex-col">
                                <span className="font-semibold cursor-pointer text-[14px] leading-[18px] text-[#222222]">Amsterdam</span>
                                <span className="font-semibold cursor-pointer text-[14px] leading-[18px] text-[#969696]">Vacation rentals</span>
                            </div>
                            <div className="flex w-1/3 flex-col">
                                <span className="font-semibold cursor-pointer text-[14px] leading-[18px] text-[#222222]">Amsterdam</span>
                                <span className="font-semibold cursor-pointer text-[14px] leading-[18px] text-[#969696]">Vacation rentals</span>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col pb-12 items-start justify-center whitespace-nowrap w-full">
                        <h2 className="text-[20px] font-semibold leading-[22px] text-[#222222] pb-8">Other types of stays on Airbnb</h2>
                        <div className="grid grid-rows-3 grid-cols-3 gap-y-[25px] w-full gap-3">
                            <div className="flex">
                                <span className="font-semibold cursor-pointer text-[14px] leading-[18px] text-[#222222] whitespace-nowrap overflow-hidden overflow-ellipsis">Canals of Amsterdam vacation rentals</span>
                            </div>
                            <div className="flex">
                                <span className="font-semibold cursor-pointer text-[14px] leading-[18px] text-[#222222] whitespace-nowrap overflow-hidden overflow-ellipsis">Canals of Amsterdam monthly stays</span>
                            </div>
                            <div className="flex">
                                <span className="font-semibold cursor-pointer text-[14px] leading-[18px] text-[#222222] whitespace-nowrap overflow-hidden overflow-ellipsis">House vacation rentals in Amsterdam</span>
                            </div>
                            <div className="flex">
                                <span className="font-semibold cursor-pointer text-[14px] leading-[18px] text-[#222222] whitespace-nowrap overflow-hidden overflow-ellipsis">House vacation rentals in North Holland</span>
                            </div>
                            <div className="flex">
                                <span className="font-semibold cursor-pointer text-[14px] leading-[18px] text-[#222222] whitespace-nowrap overflow-hidden overflow-ellipsis">House vacation rentals in Netherlands</span>
                            </div>
                            <div className="flex">
                                <span className="font-semibold cursor-pointer text-[14px] leading-[18px] text-[#222222] whitespace-nowrap overflow-hidden overflow-ellipsis">Townhome vacation rentals in Canals of Amsterdam</span>
                            </div>
                            <div className="flex">
                                <span className="font-semibold cursor-pointer text-[14px] leading-[18px] text-[#222222] whitespace-nowrap overflow-hidden overflow-ellipsis">House vacation rentals in Netherlands</span>
                            </div>
                            <div className="flex">
                                <span className="font-semibold cursor-pointer text-[14px] leading-[18px] text-[#222222] whitespace-nowrap overflow-hidden overflow-ellipsis">Townhome vacation rentals in Government of Amsterdam</span>
                            </div>
                            <div className="flex">
                                <span className="font-semibold cursor-pointer text-[14px] leading-[18px] text-[#222222] whitespace-nowrap overflow-hidden overflow-ellipsis">Townhome vacation rentals in North Holland</span>
                            </div>
                        </div>
                    </div>
                </div>
                <hr className="w-full" />
                <div className="flex flex-row w-[1280px] px-[80px] justify-center h-auto">
                    <div className="flex flex-col w-1/3 py-12">
                        <h3 className="font-semibold cursor-pointer text-[16px] leading-[18px] text-[#222222] mb-4">Support</h3>
                        <div className="flex flex-col w-full gap-4">
                            <span className="font-normal cursor-pointer text-[14px] leading-[16px] text-[#222222]">
                                Help Center
                            </span>
                            <span className="font-normal cursor-pointer text-[14px] leading-[16px] text-[#222222]">
                                AirCover
                            </span>
                            <span className="font-normal cursor-pointer text-[14px] leading-[16px] text-[#222222]">
                                Anti-discrimination
                            </span>
                            <span className="font-normal cursor-pointer text-[14px] leading-[16px] text-[#222222]">
                                Disability support
                            </span><span className="font-normal cursor-pointer text-[14px] leading-[16px] text-[#222222]">
                                Cancellation options
                            </span>
                            <span className="font-normal cursor-pointer text-[14px] leading-[16px] text-[#222222]">
                                Report neighborhood concern
                            </span>
                        </div>
                    </div>
                    <div className="flex flex-col w-1/3 py-12">
                        <h3 className="font-semibold cursor-pointer text-[16px] leading-[18px] text-[#222222] mb-4">Support</h3>
                        <div className="flex flex-col wi-full gap-4">
                            <span className="font-normal cursor-pointer text-[14px] leading-[16px] text-[#222222]">
                            Airbnb your home
                            </span>
                            <span className="font-normal cursor-pointer text-[14px] leading-[16px] text-[#222222]">
                            AirCover for Hosts
                            </span>
                            <span className="font-normal cursor-pointer text-[14px] leading-[16px] text-[#222222]">
                            Hosting resources
                            </span>
                            <span className="font-normal cursor-pointer text-[14px] leading-[16px] text-[#222222]">
                            Community forum
                            </span>
                            <span className="font-normal cursor-pointer text-[14px] leading-[16px] text-[#222222]">
                            Hosting responsibly
                            </span>
                            <span className="font-normal cursor-pointer text-[14px] leading-[16px] text-[#222222]">
                            Airbnb-friendly apartments
                            </span>
                            <span className="font-normal cursor-pointer text-[14px] leading-[16px] text-[#222222]">
                            Join a free Hosting class
                            </span>
                            <span className="font-normal cursor-pointer text-[14px] leading-[16px] text-[#222222]">
                            Find a co‑host
                            </span>
                        </div>
                    </div>
                    <div className="flex flex-col w-1/3 py-12">
                        <h3 className="font-semibold cursor-pointer text-[16px] leading-[18px] text-[#222222] mb-4">Airbnb</h3>
                        <div className="flex flex-col wi-full gap-4">
                            <span className="font-normal cursor-pointer text-[14px] leading-[16px] text-[#222222]">
                            Newsroom
                            </span>
                            <span className="font-normal cursor-pointer text-[14px] leading-[16px] text-[#222222]">
                            New features
                            </span>
                            <span className="font-normal cursor-pointer text-[14px] leading-[16px] text-[#222222]">
                            Careers
                            </span>
                            <span className="font-normal cursor-pointer text-[14px] leading-[16px] text-[#222222]">
                            Investors
                            </span><span className="font-normal cursor-pointer text-[14px] leading-[16px] text-[#222222]">
                            Gift cards
                            </span>
                            <span className="font-normal cursor-pointer text-[14px] leading-[16px] text-[#222222]">
                            Airbnb.org emergency stays
                            </span>
                        </div>
                    </div>
                </div>
                <div className="flex w-[1280px] px-[80px] h-auto ">
                    <div className="w-full border-t border-solid border-[#e5e7eb]">
                        <div className="flex flex-row py-6 justify-between items-center">
                            <div className="flex flex-row w-auto gap-1">
                                <span className="flex">© 2024 Airbnb, Inc.</span>
                                <ol className="flex flex-row">
                                    <li>
                                        <span className="inline-block text-center w-[19px] text-[0.875rem] leading-[1.125rem]">·</span>
                                        Terms
                                    </li>
                                    <li>
                                        <span className="inline-block text-center w-[19px] text-[0.875rem] leading-[1.125rem]">·</span>
                                        Sitemap
                                    </li>
                                    <li>
                                        <span className="inline-block text-center w-[19px] text-[0.875rem] leading-[1.125rem]">·</span>
                                        Privacy
                                    </li>
                                    <li>
                                    <span className="inline-block text-center w-[19px] text-[0.875rem] leading-[1.125rem]">·</span>
                                        Your Privacy Choices
                                    </li>
                                </ol>
                                <span className="flex justify-center items-center">
                                    <Rect />
                                </span>
                            </div>
                            <div className="flex flex-row gap-4">
                                <div className="flex flex-row items-center gap-2">
                                    <Earth />
                                    <span className="flex justify-center items-center cursor-pointer text-[14px] font-semibold">Englsih (US)</span>
                                </div>
                                <div className="flex flex-row items-center gap-2">
                                    <span className="flex">€</span>
                                    <span className="flex text-[14px] font-semibold">EUR</span>
                                </div>
                                <div className="flex flex-row items-center gap-2">
                                    <FaceBook />
                                    <Twitter />
                                    <Instagram />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
