// src/components/PricingCard.jsx
import React from "react";

const PricingCard = () => {
    return (
        <aside className="bg-white border p-4 rounded-lg shadow-md mt-6 lg:mt-0">
            <h2 className="text-lg font-semibold mb-4">€160 / night</h2>
            <form className="space-y-4">
                <label className="block">
                    <span className="block text-gray-700">Check-in</span>
                    <input type="date" className="w-full border p-2 rounded-md" />
                </label>
                <label className="block">
                    <span className="block text-gray-700">Check-out</span>
                    <input type="date" className="w-full border p-2 rounded-md" />
                </label>
                <label className="block">
                    <span className="block text-gray-700">Guests</span>
                    <select className="w-full border p-2 rounded-md">
                        <option>1 Guest</option>
                        <option>2 Guests</option>
                        <option>3 Guests</option>
                    </select>
                </label>
                <button className="w-full bg-pink-500 text-white py-2 rounded-md">
                    Reserve
                </button>
            </form>
        </aside>
    );
};

export default PricingCard;
