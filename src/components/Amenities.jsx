// src/components/Amenities.jsx
import React from "react";

const Amenities = () => {
    return (
        <section className="mt-6">
            <h2 className="text-xl font-bold">Amenities</h2>
            <ul className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4">
                <li className="text-gray-600">Wi-Fi</li>
                <li className="text-gray-600">Kitchen</li>
                <li className="text-gray-600">Microwave</li>
                <li className="text-gray-600">Hairdryer</li>
            </ul>
        </section>
    );
};

export default Amenities;
