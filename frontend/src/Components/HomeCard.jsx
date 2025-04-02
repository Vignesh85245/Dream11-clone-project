import React from "react";

const HomeCard = ({ match, image }) => {
    return (
        <div className="bg-white shadow-md rounded-lg p-4 flex items-center">
            {image && (
                <img
                    src={image}
                    alt="Match"
                    className="w-16 h-16 rounded-full mr-4"
                />
            )}
            <p className="text-gray-600">{match}</p>
        </div>
    );
};

export default HomeCard;