// src/components/MapSection.jsx
import React from "react";

const MapSection = () => {
    return (
        <section className="mt-6">
            <h2 className="text-xl font-bold">Where you'll be</h2>
            <iframe
                title="Google Map"
                className="w-full h-64 rounded-md mt-4"
                src="https://www.google.com/maps/embed?..."
            ></iframe>
        </section>
    );
};

export default MapSection;
