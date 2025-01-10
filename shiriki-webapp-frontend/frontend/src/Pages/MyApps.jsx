import React from "react";
import { useNavigate } from "react-router-dom";
import BottomNavBar from "../Components/BottomNavBar.jsx";
import { FaConciergeBell, FaUsers, FaRegClipboard, FaTv } from 'react-icons/fa'; // FontAwesome icons

const pastelColors = [
  "#FAD02E", // Yellow
  "#F28D35", // Orange
  "#D83367", // Pink
  "#6C5B7B", // Purple
  '#6A4C93'
];

const apps = [
  {
    name: "Restaurant",
    description:
      "Explore a world of culinary delights with our virtual restaurant chooser. Discover new dining options, customize your preferences, and make reservations effortlessly—all from the comfort of your device.",
    lastUpdated: "December 2024",
    icon: <FaConciergeBell size={40} color={pastelColors[0]} />,  // Icon for Restaurant
    route: "/services/restaurant",
  },
  {
    name: "Queueing",
    description:
      "Effortlessly manage your queues with our virtual ticket generator. Streamline customer service, reduce wait times, and enhance satisfaction in a user-friendly digital environment.",
    icon: <FaUsers size={40} color={pastelColors[1]} />,  // Icon for Queue System
    route: "/queue",
  },
  {
    name: "Entertainment",
    description:
      "Dive into a world of virtual entertainment and live streams. Experience concerts, gaming events, and interactive shows—all from the comfort of your home.",
    lastUpdated: "December 2024",
    icon: <FaTv size={40} color={pastelColors[2]} />,  // Icon for Entertainment
    route: "/services/entertainment",
  },
  {
    name: "Survey",
    description:
      "Participate in engaging online surveys and share your valuable insights. Help shape the future by voicing your opinions on trending topics and services.",
    lastUpdated: "December 2024",
    icon: <FaRegClipboard size={40} color={pastelColors[3]} />,  // Icon for Survey
    route: "/survey",
  },
];

const MyApps = () => {
  const navigate = useNavigate();
  const goBack = () => navigate(-1);

  return (
    <div className="bg-white text-dark min-h-screen flex flex-col justify-between">
      {/* Header Section */}
      <div className="flex items-center px-4 py-6 bg-[#1D4ED8] shadow-md">
        <span
          onClick={goBack}
          className="flex items-center text-2xl font-semibold text-white cursor-pointer hover:text-gray-900 transition"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="mr-2"
          >
            <path d="M19 12H5M12 19l-7-7 7-7" />
          </svg>
          My Apps
        </span>
      </div>

      {/* Apps Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 px-4 py-8">
        {apps.map((app, index) => (
          <div
            key={index}
            className="relative group rounded-xl overflow-hidden bg-white shadow-lg transform transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-2xl cursor-pointer"
            onClick={() => navigate(app.route)}
          >
            {/* App Icon */}
            <div className="w-full h-40 flex justify-center items-center bg-white">
              {app.icon}
            </div>

            {/* App Details */}
            <div className="p-4 flex flex-col justify-between h-32">
              <h3 className="text-xl font-semibold text-gray-800">{app.name}</h3>
              {/* Truncated Description */}
              <p className="text-sm mt-2 text-gray-600 truncate">{app.description}</p>
              <p className="text-xs mt-2 text-gray-300">
                Last Updated: {app.lastUpdated}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom Navigation */}
      <div className="sticky bottom-0 bg-white shadow-lg">
        <BottomNavBar />
      </div>
    </div>
  );
};

export default MyApps;
