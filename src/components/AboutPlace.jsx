import React from "react";
import { FaAngleRight } from "react-icons/fa6";

const AboutPlace = () => {
    return (
        <section className="mt-6">
            <h2 className="text-xl font-bold">About this place</h2>
            <p className="text-gray-700 mt-4">
                Amstel Nest is a stylish guest room for those who are looking for a quality accommodation.  </p>
            <p className="text-gray-700 mt-4">
                Located in the neighborhood of the Amstel river, adjacent to the popular district de Pijp, you can easily taste the authentic Amsterdam life and enjoy the great connectivity.
            </p>
            <p className="text-gray-700 mt-4">
                ...
            </p>
            <div className="mt-4 flex justify-between items-center w-[100px]">
                <p className="text-gray-700 underline">
                    Show more 
                </p>
                <FaAngleRight />
            </div>
        </section>
    );
};

export default AboutPlace;
