import React from 'react'
import * as motion from "motion/react-client"

const testimonials = [
  {
    name: "Jane Smith",
    role: "IT Manager",
    company: "TechCorp",
    text: "Selling our unused licenses was quick and easy. Great service!",
  },
  {
    name: "Mike Johnson",
    role: "Founder",
    company: "StartSoft",
    text: "I got paid faster than I expected. Highly recommend!",
  },
];

const Testimonials = () => {
  return (
    <section className="py-16 bg-gradient-to-br from-white via-gray-50 to-gray-100 dark:from-gray-800 dark:via-gray-700 dark:to-gray-800 text-center">
      <h2 className="text-3xl font-medium text-gray-800 dark:text-white mb-10">
        What Our Customers Say
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {testimonials.map((review, index) => (
          <motion.div
            key={index}
            whileHover={{
              scale: 1.05,
              transition: { duration: 0.2 },
            }}
            whileTap={{
              scale: 1,
              rotate: 0,
            }}
            transition={{
              type: "spring",
              stiffness: 200,
              damping: 13,
            }}
            className="p-6 bg-white dark:bg-gray-700 rounded-lg shadow text-left transition-all"
          >
            <p className="mb-4 italic text-gray-700 dark:text-gray-200">
              “{review.text}”
            </p>
            <p className="font-semibold text-gray-800 dark:text-white">
              {review.name}
            </p>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              {review.role}, {review.company}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export default Testimonials

