import React, { useState, useEffect } from "react";
import "./Home.css";

const Home = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const slides = [
        "./img1.webp",
        "./img2.webp",
        "./img3.webp",
        "./img4.webp"
    ];

    // Function to update slides correctly
    const updateSlide = (index) => {
        if (index < 0) {
            setCurrentIndex(slides.length - 1);
        } else if (index >= slides.length) {
            setCurrentIndex(0);
        } else {
            setCurrentIndex(index);
        }
    };

    // Function to handle slide movement
    const moveSlide = (step) => {
        updateSlide(currentIndex + step);
    };

    // Auto-slide effect every 3 seconds
    useEffect(() => {
        const interval = setInterval(() => {
            moveSlide(1);
        }, 3000);
        return () => clearInterval(interval);
    }, [currentIndex]);

    // Function to open Google Drive link
    const openDrive = () => {
        window.location.href="https://drive.google.com/drive/folders/17Gw-3AjOVSjPvzst0PvoNj94zAoJVVy0?usp=drive_link";
    }

    return (
        <div className="home-container">
            <div className="background-container"></div>
            <div className="overlay"></div>

            {/* Slideshow Container */}
            <div className="slideshow-container">
                <div className="slides">
                    {slides.map((src, index) => {
                        let position = "next"; // Default to next slide

                        if (index === currentIndex) {
                            position = "active";
                        } else if (
                            index === (currentIndex - 1 + slides.length) % slides.length
                        ) {
                            position = "prev";
                        }

                        return (
                            <div key={index} className={`slide ${position}`}>
                                <img src={src} alt={`Slide ${index + 1}`} />
                            </div>
                        );
                    })}
                </div>
            </div>

            {/* Buttons */}
            <div className="button-container">
                <button className="custom-button">View Payment</button>
                <button className="custom-button" onClick={openDrive}>Photo Gallery</button>
            </div>
        </div>
    );
};

export default Home;
