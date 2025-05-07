import { useState } from "react";

const accordionItems = [
  {
    title: "What is E-Waste?",
    content: "Electronic waste, or e-waste, refers to discarded electronic devices such as phones, computers, and TVs.",
    color: "bg-red-100",
  },
  {
    title: "How to Recycle Batteries?",
    content: "Batteries should be taken to designated recycling points to avoid environmental harm.",
    color: "bg-yellow-100",
  },
  {
    title: "Why Proper Disposal Matters?",
    content: "Improper e-waste disposal leads to toxic pollution and health risks.",
    color: "bg-blue-100",
  },
  {
    title: "Can I Donate Old Devices?",
    content: "Yes! Many charities accept working electronics for reuse or parts recovery.",
    color: "bg-green-100",
  },
  {
    title: "Are Hard Drives Secure?",
    content: "Always wipe or destroy data storage devices before recycling.",
    color: "bg-purple-100",
  },
  {
    title: "Pickup Services Available?",
    content: "Some companies offer door-to-door collection of large electronics.",
    color: "bg-pink-100",
  },
];

export default function AccordionGridPage() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen p-4 md:p-10 bg-gray-50">
      <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">
        📦 FAQ: Accordion/Grid Hybrid
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {accordionItems.map((item, index) => (
          <div
            key={index}
            className={`${item.color} rounded-lg shadow-lg transition-all duration-300`}
          >
            <button
              className="w-full p-4 text-left font-semibold text-gray-800 focus:outline-none"
              onClick={() => toggleAccordion(index)}
            >
              {item.title}
            </button>
            <div
              className={`overflow-hidden transition-all duration-500 ease-in-out ${
                openIndex === index ? "max-h-40 p-4 pt-0" : "max-h-0 p-0"
              }`}
            >
              <p className="text-gray-700">{item.content}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
