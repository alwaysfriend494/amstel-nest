import React from "react";

const PricingCard = () => {
    return (
        <div className="sticky top-0 max-w-sm p-6 bg-white rounded-lg shadow-md border">
            <h2 className="text-lg font-semibold mb-4">Add dates for prices</h2>

            <div className="border rounded-lg divide-y text-sm">
                <div className="grid grid-cols-2 divide-x">
                    <div className="p-3">
                        <p className="text-xs font-bold text-gray-600 uppercase mb-1">
                            Check-in
                        </p>
                        <p className="text-gray-700">2/2/2025</p>
                    </div>
                    <div className="p-3">
                        <p className="text-xs font-bold text-gray-600 uppercase mb-1">
                            Checkout
                        </p>
                        <p className="text-gray-400">Add date</p>
                    </div>
                </div>

                <div className="p-3 relative">
                    <p className="text-xs font-bold text-gray-600 uppercase mb-1">
                        Guests
                    </p>
                    <div className="flex items-center justify-between">
                        <p className="text-gray-700">2 guests</p>
                        <span className="text-gray-700">▼</span>
                    </div>
                </div>
            </div>

            <button className="w-full mt-4 py-3 text-white bg-gradient-to-r from-pink-500 to-red-500 font-semibold rounded-md hover:from-pink-600 hover:to-red-600">
                Check availability
            </button>

            <div className="mt-4 text-center">
                <button className="text-sm text-gray-500 hover:underline">
                    🏳 Report this listing
                </button>
            </div>
        </div>
    );
};

export default PricingCard;
