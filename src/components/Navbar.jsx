// src/components/Navbar.jsx
import React from "react";

const Navbar = () => {
    return (
        <header className="bg-white shadow-md sticky top-0 z-10">
            <nav className="max-w-6xl mx-auto flex items-center justify-between px-4 py-3">
                <h1 className="text-xl font-bold">Amstel Nest</h1>
                <ul className="hidden md:flex gap-6">
                    <li className="text-gray-600 hover:text-black">Home</li>
                    <li className="text-gray-600 hover:text-black">Listings</li>
                    <li className="text-gray-600 hover:text-black">Contact</li>
                </ul>
                <button className="md:hidden text-gray-600">Menu</button>
            </nav>
        </header>
    );
};

export default Navbar;
