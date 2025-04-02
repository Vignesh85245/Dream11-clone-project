import React from "react";
import { useNavigate } from "react-router-dom";
import HomeCard from "../Components/HomeCard";
import IndiaFlag from "../assets/images/ind_logo.jpg"; // Import the provided image

const HomePage = () => {
    const navigate = useNavigate();
    const matches = ["IND vs PAK", "AUS vs ENG", "AFG vs NZ"];
    const images = [
        IndiaFlag, // Image for the first card
        null, // No image for the second card
        null, // No image for the third card
    ];

    const handleCardClick = (match) => {
        navigate(`/contest?match=${encodeURIComponent(match)}`);
    };

    return (
        <div className="min-h-screen bg-gray-100">
            <header className="bg-blue-600 text-white py-4">
                <h1 className="text-2xl font-bold">Lineups11</h1>
            </header>
            <nav className="bg-gray-800 text-white">
                <ul className="flex justify-around py-2">
                </ul>
            </nav>
            <main className="p-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
                {matches.map((match, index) => (
                    <div
                        key={index}
                        onClick={() => handleCardClick(match)}
                        className="cursor-pointer"
                    >
                        <HomeCard match={match} image={images[index]} />
                    </div>
                ))}
            </main>
        </div>
    );
};

export default HomePage;
