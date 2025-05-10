import React from 'react';
import logo from "../assets/softsell.png";

const HeroSection = () => {
    return (
        <div className="py-16 bg-gradient-to-br from-blue-100 via-white to-blue-100 dark:from-gray-800 dark:via-gray-900 dark:to-gray-800">
            {/* Top row: logo on left, toggle on right (only on md and above) */}
            <div className="flex flex-col md:flex-row justify-between items-center max-w-6xl mx-auto px-4 mb-9">
                <img src={logo} alt="Softsell Logo" className="w-28 h-28 -mt-12 mb-4 md:mb-0 md:mr-6" />
                <div className="md:ml-auto">
                </div>
            </div>

            <div className="text-center max-w-3xl mx-auto px-4">
                <h1 className="text-4xl md:text-5xl font-light text-gray-800 dark:text-white mb-4">
                    Softsell: Turning Unused Software into Instant Value
                </h1>
                <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
                    Got software licenses gathering dust? Softsell helps you unlock their true worth. Sell your unused software securely and get instant payouts, ensuring every license finds a new purpose. Stop letting valuable assets sit idle—turn them into cash with ease.
                </p>
                <button className="bg-blue-600 hover:bg-blue-700 text-white text-lg font-semibold px-6 py-3 rounded-full transition-all">
                    Sell My Licenses
                </button>
            </div>
        </div>
    );
};

export default HeroSection;
