import React from "react";
import { LuBedDouble } from "react-icons/lu";

const Sleep = () => {
    return (
        <section className="mt-6 border-b-2">
            <h2 className="text-xl font-bold">Where you’ll sleep</h2>
            <div className="mt-4 mb-12 border-2 border-solid rounded-xl w-52 flex flex-col justify-between items-start h-full p-6">
                <div className="mb-4 w-6 h-6">
                <LuBedDouble className="w-full h-full" />
                </div>
                <p className="text-bold mb-2 text-[#222] font-medium text-base">
                    Bedroom
                </p>
                <p className="text-gray-700 text-bold">
                    1 double bed
                </p>
            </div>
        </section>
    );
};

export default Sleep;
