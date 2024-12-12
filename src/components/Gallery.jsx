import React from "react";

import image_1 from "../assets/images/1.avif"
import image_2 from "../assets/images/2.avif"
import image_3 from "../assets/images/3.avif"
import image_4 from "../assets/images/4.avif"
import image_5 from "../assets/images/5.avif"

const Gallery = () => {
    return (
        <section className="mt-6 w-full">
            <h2 className="sr-only">Gallery</h2>
            <div className="grid grid-cols-2 ml-20 mr-20 gap-2">
                <div>
                    <img
                        src={image_1}
                        alt="Room image"
                        className="rounded-md object-cover"
                    />
                </div>
                <div className="flex">
                    <div>
                        <img
                            src={image_2}
                            alt="Room image"
                            className="rounded-md object-cover"
                        />
                        <img
                            src={image_3}
                            alt="Room image"
                            className="rounded-md object-cover"
                        />
                    </div>
                    <div>
                        <img
                            src={image_4}
                            alt="Room image"
                            className="rounded-md object-cover"
                        />
                        <img
                            src={image_5}
                            alt="Room image"
                            className="rounded-md object-cover"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Gallery;
