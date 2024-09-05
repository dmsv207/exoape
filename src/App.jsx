import React from "react";
import LocomotiveScroll from 'locomotive-scroll';
import Navbar from "./Components/Navbar/Navbar";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MainPage from "./Components/MainPage";
import HomePage from "./Components/HomePage";
import AboutPage from "./Components/AboutPage";
import ContactPage from "./Components/ContactPage";

function App() {
    // Initialize Locomotive Scroll
    React.useEffect(() => {
        const locomotiveScroll = new LocomotiveScroll({
            el: document.querySelector('[data-scroll-container]'),
            smooth: true
        });

        return () => {
            locomotiveScroll.destroy();
        };
    }, []);

    return (
        <Router>
            <div className="w-full" data-scroll-container>
                <Navbar />
                <Routes>
                    <Route path="/" element={<MainPage />} />
                    <Route path="/home" element={<HomePage />} />
                    <Route path="/about" element={<AboutPage />} />
                    <Route path="/contact" element={<ContactPage />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
