import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import ContestPage from "./Pages/ContestPage";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/contest" element={<ContestPage />} />
            </Routes>
        </Router>
    );
}

export default App;
