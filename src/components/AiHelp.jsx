import React, { useState } from "react";

const AIHelp = () => {
  const [open, setOpen] = useState(false);

  const faqs = [
    {
      question: "How do I sell my license?",
      answer: "Just upload your license info, get an instant valuation, and receive your payout within 24 hours.",
    },
    {
      question: "Is my data safe?",
      answer: "Yes, we use secure encryption to protect your data and ensure private transactions.",
    },
    {
      question: "What types of licenses can I sell?",
      answer: "You can sell licenses for Microsoft Office, Adobe Suite, Antivirus software, and more.",
    },
  ];

  return (
    <>
      {/* Toggle Button */}
      <button
        onClick={() => setOpen(!open)}
        className="fixed bottom-4 right-4 z-50 bg-blue-600 text-white px-4 py-2 rounded-full shadow-md hover:bg-blue-700 transition"
      >
        {open ? "❌ Close Help" : "🤖 AI Help"}
      </button>

      {/* Help Panel */}
      {open && (
        <div className="fixed bottom-20 right-4 w-[90vw] max-w-sm bg-white dark:bg-gray-800 text-gray-900 dark:text-white p-4 rounded-xl shadow-lg z-50 overflow-y-auto max-h-[60vh] sm:max-h-[70vh]">
          <h3 className="text-lg font-semibold mb-3">Need Help?</h3>
          <ul className="space-y-3 text-sm">
            {faqs.map((faq, index) => (
              <li key={index}>
                <strong>{faq.question}</strong>
                <p className="text-gray-600 dark:text-gray-300">{faq.answer}</p>
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
};

export default AIHelp;
