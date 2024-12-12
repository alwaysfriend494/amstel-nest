// src/App.js
import React from "react";
import Navbar from "./components/Navbar";
import Gallery from "./components/Gallery";
import Information from "./components/Information"
import PricingCard from "./components/PricingCard";
import AboutPlace from "./components/AboutPlace";
import Amenities from "./components/Amenities";
import Reviews from "./components/Reviews";
import MapSection from "./components/MapSection";
import HostDetails from "./components/HostDetails";
import Footer from "./components/Footer";


function App() {
  return (
    <div className="font-sans">
      <Navbar />
      <main className="max-w-6xl mx-auto px-4 lg:px-0">
        <Gallery />
        <div className="lg:flex lg:gap-8">
          <div className="flex-1">
            <Information />
            <AboutPlace />
            <Amenities />
            <Reviews />
          </div>
          <div className="lg:w-1/3">
            <PricingCard />
          </div>
        </div>
        <MapSection />
        <HostDetails />
      </main>
      <Footer />
    </div>
  );
}

export default App;
