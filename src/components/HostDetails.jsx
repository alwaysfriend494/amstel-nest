// src/components/HostDetails.jsx
import React from "react";

const HostDetails = () => {
    return (
        <section className="mt-6">
            <h2 className="text-xl font-bold">Meet your Host</h2>
            <div className="flex items-center mt-4">
                <img
                    src="host-image.jpg"
                    alt="Host"
                    className="w-16 h-16 rounded-full"
                />
                <div className="ml-4">
                    <h3 className="font-semibold">Rob & Fang</h3>
                    <p className="text-gray-600">Superhost</p>
                </div>
            </div>
        </section>
    );
};

export default HostDetails;
