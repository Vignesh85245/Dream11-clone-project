// filepath: c:\Users\Naveenraj\Desktop\AracreateInternship\lineups11\frontend\src\Pages\ContestPage.jsx
import React from "react";
import { useLocation } from "react-router-dom";

const ContestPage = () => {
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const match = queryParams.get("match");

    return (
        <div className="min-h-screen bg-gray-100 flex items-center justify-center">
            <h1 className="text-2xl font-bold">Contest for {match}</h1>
        </div>
    );
};

export default ContestPage;