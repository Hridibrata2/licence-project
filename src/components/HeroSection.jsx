import React from 'react'


const HeroSection = () => {
    return (
    <section className="bg-gradient-to-r from-blue-500 to-purple-600 dark:from-gray-800 dark:to-gray-900 py-20 px-4 text-center">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-light text-gray-800 dark:text-white mb-4 ">
          Unlock the Value of Your Unused Software
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
          Sell your software licenses securely and get instant payouts.
        </p>
        <button className="bg-blue-600 hover:bg-blue-700 text-white text-lg font-semibold px-6 py-3 rounded-full transition-all">
          Sell My Licenses
        </button>
      </div>
    </section>
)};

export default HeroSection