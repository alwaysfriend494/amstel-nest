// src/components/HostDetails.jsx
import React from "react";
import ProfileCard from '../Card/ProfileCard';
import Project from '../svg/Project';
import Languages from '../svg/Languages';
import Live from '../svg/Live';
import Business from '../svg/Business';
import Host from '../svg/Host';
import ShowMore from '../Button/ShowMore'

const HostDetails = () => {
    return (
        <section className="">
            <div className="flex flex-col w-[1120px] border-t border-solid border-[#e5e7eb] pt-10">
                <h2 className="font-airbnb text-[22px] font-semibold leading-[25px] text-[#222222] pb-8">Meet your Host</h2>
                <div className="flex flex-row justify-between w-full pb-[64px]">
                    <div className="flex w-[395px] flex-col gap-8">
                        <div className="cursor-pointer">
                            <ProfileCard />
                        </div>
                        <div className="flex flex-col w-full gap-3">
                            <div className="flex flex-row w-full gap-3 items-center">
                                <Project />
                                <span className="font-normal text-[16px] leading-[18px] text-[#222222] ">
                                    My work: Architecture in Development, Nest Project
                                </span>
                            </div>
                            <div className="flex flex-row w-full gap-3 items-center">
                                <Languages />
                                <span className="font-normal text-[16px] leading-[18px] text-[#222222] ">
                                    Speaks Chinese, Dutch, and English
                                </span>
                            </div>
                            <div className="flex flex-row w-full gap-3 items-center">
                                <Live />
                                <span className="font-normal text-[16px] leading-[18px] text-[#222222] ">
                                    Lives in Amsterdam, The Netherlands
                                </span>
                            </div>
                            <div className="flex flex-row w-full gap-3 items-center">
                                <Business />
                                <span className="font-normal text-[16px] leading-[18px] text-[#222222] ">
                                    Business
                                </span>
                            </div>
                        </div>
                        <div className="flex flex-col gap-3 font-normal text-[17px] leading-[22px] text-[#222222]">
                            We are a family of 2 kids and 2 creative entrepreneurs, working at home with few{""}...
                            <ShowMore />
                        </div>
                    </div>
                    <div className="flex w-[660px] flex-col gap-8">
                        <div className="flex flex-col gap-4">
                            <h2 className="font-semibold text-[20px] leading-[22px] text-[#222222]">Rob & Fang is a Superhost</h2>
                            <h3 className="font-normal text-[17px] leading-[18px] text-[#222222]">Superhosts are experienced, highly rated hosts who are committed to providing great stays for guests.</h3>
                        </div>
                        <div className="flex flex-col gap-4">
                            <h2 className="font-semibold text-[20px] leading-[22px] text-[#222222]">Host details</h2>
                            <div className="flex flex-col">
                                <h3 className="font-normal text-[17px] leading-[18px] text-[#222222]">Response rate: 100%</h3>
                                <h3 className="font-normal text-[17px] leading-[18px] text-[#222222]">Responds within an hour</h3>
                            </div>
                        </div>
                        <div className="flex cursor-pointer w-fit text-[#fff] bg-[#222222] rounded-lg py-[14px] px-[24px] hover:bg-[#000000] font-medium text-[16px] leading-[18px]">
                            Messsage Host
                        </div>
                        <div className="flex flex-col gap-4">
                            <h3 className="font-normal text-[17px] leading-[18px] text-[#222222]">Registration number: 0363 FC71 F7DB 3AB4 3C42</h3>
                        </div>
                        <div className="flex bg-[#e5e7eb] h-[1px]"></div>
                        <div className="flex flex-row gap-2 items-center ">
                            <Host />
                            <h5 className="font-normal text-[12px] leading-[15px] text-[#222222]">To protect your payment, never transfer money or communicate outside of the Airbnb website or app.</h5>
                        </div>
                    </div>
                </div>
                <div className="flex h-[1px] bg-[#e5e7eb]">
                    
                </div>
                <div className="flex flex-col h-auto py-12">
                    <h2 className="text-[22px] font-semibold leading-[25px] text-[#222222] pb-8">Things to know</h2>
                    <div className="flex flex-row">
                        <div className="flex flex-col w-1/3">
                            <h3 className="font-semibold cursor-pointer text-[17px] leading-[18px] text-[#222222] mb-4">House rules</h3>
                            <div className="flex flex-col w-full gap-4">
                                <span className="font-normal cursor-pointer text-[17px] leading-[18px] text-[#222222]">
                                    Check-in: 3:00 PM - 9:00 PM
                                </span>
                                <span className="font-normal cursor-pointer text-[17px] leading-[18px] text-[#222222]">
                                    Checkout before 12:00 PM
                                </span>
                                <span className="font-normal cursor-pointer text-[17px] leading-[18px] text-[#222222]">
                                    2 guests maximum
                                </span>
                                <ShowMore />
                            </div>
                        </div>
                        <div className="flex flex-col w-1/3">
                            <h3 className="font-semibold cursor-pointer text-[17px] leading-[18px] text-[#222222] mb-4">Safety & property</h3>
                            <div className="flex flex-col w-full gap-4">
                                <span className="font-normal cursor-pointer text-[17px] leading-[18px] text-[#222222]">
                                    No carbon monoxide alarm
                                </span>
                                <span className="font-normal cursor-pointer text-[17px] leading-[18px] text-[#222222]">
                                    Smoke alarm
                                </span>
                                <ShowMore />
                            </div>
                        </div>
                        <div className="flex flex-col w-1/3">
                            <h3 className="font-semibold cursor-pointer text-[17px] leading-[18px] text-[#222222] mb-4">Cancellation policy</h3>
                            <div className="flex flex-col w-full gap-4">
                                <span className="font-normal cursor-pointer text-[17px] leading-[18px] text-[#222222]">
                                    Free cancellation before Jan 22. Cancel before Feb 14 for a partial refund.
                                </span>
                                <span className="font-normal cursor-pointer text-[17px] leading-[18px] text-[#222222]">
                                    Review this Host's full policy for details.
                                </span>
                                <ShowMore />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HostDetails;
