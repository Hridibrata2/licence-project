import React from "react";
import CountUp from "react-countup";

const stats = [
  { label: "Licenses Sold", value: 1200, suffix: "+" },
  { label: "Avg. Payout Time (hrs)", value: 12 },
  { label: "Trusted Users", value: 500, suffix: "+" },
];

const StatsSection = () => (
  <section className="py-16 bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 text-center">
    <h2 className="text-3xl font-medium text-gray-800 dark:text-white mb-10">Our Impact</h2>
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-4xl mx-auto">
      {stats.map((stat, idx) => (
        <div key={idx} className="bg-gray-100 dark:bg-gray-700 p-6 rounded-lg shadow">
          <div className="text-4xl font-bold text-blue-600 dark:text-blue-400">
            <CountUp end={stat.value} duration={2.5} suffix={stat.suffix || ""} />
          </div>
          <p className="mt-2 text-gray-700 dark:text-gray-200">{stat.label}</p>
        </div>
      ))}
    </div>
  </section>
);

export default StatsSection;