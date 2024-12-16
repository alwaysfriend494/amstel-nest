// src/components/MapSection.jsx
import React from "react";
import { SlArrowRight } from "react-icons/sl";

const MapSection = () => {
    return (
        <section className="py-12">
            <h2 className="text-xl font-bold">Where you'll be</h2>
            <iframe
                title="Google Map"
                className="w-full h-64 rounded-md mt-4"
                src="https://www.google.com/maps/embed?..."
            ></iframe>
            <div className="mt-6">
                <div className="w-full px-2">
                    <div>
                        <div className="mb-4">
                            <h3 className="font-medium text-base">Watergraafsmeer, North Holland, Netherlands</h3>
                        </div>
                        <div class="text-sm leading-6 overflow-hidden text-ellipsis 
  [display:-webkit-box] [-webkit-line-clamp:3] [-webkit-box-orient:vertical]">
                            <span>
                                From our place, you can easily take a stroll (20-25 minutes) or bike (8-10 minutes) along the Amstel river to the waterlooplein & center area. 
                                <br />
                                <br />
                                Located in the neighborhood of the Amstel river, adjacent to the popular district de Pijp, you can easily taste the authentic Amsterdam life and enjoy the great connectivity.
                            </span>
                        </div>
                    </div>
                </div>
                <div className="mt-4">
                    <div className="underline text-base cursor-pointer font-medium leading-6 flex items-center">
                        <span>Show more </span>
                        <SlArrowRight className="ml-2 h-3 w-3" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MapSection;
