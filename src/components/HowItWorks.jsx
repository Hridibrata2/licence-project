import React from 'react'

const HowItWorks = () => {
  return (
    <section className="py-16 bg-gradient-to-br from-blue-100 via-white to-purple-100 dark:from-gray-800 dark:via-gray-900 dark:to-gray-800 text-center">
    <h2 className="text-3xl font-medium text-gray-800 dark:text-white mb-10">How It Works</h2>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
      {[
        { title: "Upload License", icon: "⬆️" },
        { title: "Get Valuation", icon: "📊" },
        { title: "Get Paid", icon: "💰" },
      ].map((step, index) => (
        <div key={index} className="p-6 bg-white dark:bg-gray-700 rounded-xl shadow text-center">
          <div className="text-4xl mb-4">{step.icon}</div>
          <h3 className="text-xl font-semibold text-gray-800 dark:text-white">{step.title}</h3>
        </div>
      ))}
    </div>
  </section>
  )
}

export default HowItWorks