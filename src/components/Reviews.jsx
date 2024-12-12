// src/components/Reviews.jsx
import React from "react";

const Reviews = () => {
    return (
        <section className="mt-6">
            <h2 className="text-xl font-bold">Reviews</h2>
            <ul className="space-y-4 mt-4">
                <li className="border p-4 rounded-md">
                    <h3 className="font-semibold">John Doe</h3>
                    <p className="text-gray-600">Amazing place! Highly recommended.</p>
                </li>
                <li className="border p-4 rounded-md">
                    <h3 className="font-semibold">Jane Smith</h3>
                    <p className="text-gray-600">Loved the atmosphere and location.</p>
                </li>
            </ul>
        </section>
    );
};

export default Reviews;
