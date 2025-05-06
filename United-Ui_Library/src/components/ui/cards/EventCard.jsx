// EventCard.jsx
import React from "react";

const EventCard = ({
  title = "Event Title",
  date = "Dec 25, 2025",
  time = "6:00 PM",
  location = "Venue Name, City",
  rsvpButtonText = "RSVP Now",
}) => {
  return (
    <div className="w-full max-w-xl bg-white dark:bg-gray-900 p-6 rounded-xl shadow-lg">
      <h3 className="text-xl font-semibold text-gray-800 dark:text-white">{title}</h3>
      <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">{date} at {time}</p>
      <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">Location: {location}</p>
      <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
        {rsvpButtonText}
      </button>
    </div>
  );
};

export default EventCard;
