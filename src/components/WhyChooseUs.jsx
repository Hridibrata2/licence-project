import React from 'react'

const WhyChooseUs = () => {
  return (
    <section className="py-16 bg-gradient-to-br from-gray-100 via-white to-blue-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 text-center">
    <h2 className="text-3xl font-medium text-gray-800 dark:text-white mb-10">Why Choose Us</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
      {[
        { icon: "⚡", title: "Fast Payouts", desc: "Receive your money within 24 hours." },
        { icon: "🔒", title: "Secure Transactions", desc: "Your data and payments are always protected." },
        { icon: "💼", title: "Business-Friendly", desc: "We support individual and enterprise license sellers." },
        { icon: "📞", title: "Dedicated Support", desc: "Talk to real humans when you need help." },
      ].map((item, index) => (
        <div key={index} className="bg-gray-100 dark:bg-gray-700 p-6 rounded-lg shadow">
          <div className="text-4xl mb-3">{item.icon}</div>
          <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">{item.title}</h3>
          <p className="text-sm text-gray-600 dark:text-gray-300">{item.desc}</p>
        </div>
      ))}
    </div>
  </section>
  )
}

export default WhyChooseUs