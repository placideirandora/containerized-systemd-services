import React from 'react';
import { useNavigate } from 'react-router-dom';

const Header = ({ back }) => {
  const navigate = useNavigate();
  const goBack = () => navigate(-1);
  const goToWifi = () => {
    navigate('/services/wifi');
  };

  return (
    <div
      style={{
        background: 'linear-gradient(to right, #3B82F6 , #1D4ED8)', // Gradient from light blue to blue-600
        padding: '20px',
        marginTop: '-22px', // Adjusted margin top
        boxShadow: '0 10px 20px rgba(0, 0, 0, 0.1)', // 3D raised shadow
      }}
      className="w-full flex flex-col"
    >
      <div className="px-2 mb-4 text-dark">
        <p onClick={goBack}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="rgba(255, 255, 255, 0.8)" // White stroke for contrast
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M19 12H5M12 19l-7-7 7-7" />
          </svg>
        </p>
      </div>

      <div className="flex justify-between items-center px-2 mb-4">
        {/* Search Input */}
        <div className="flex items-center">
          <div className="relative">
            <input
              type="text"
              placeholder="Search..."
              className="bg-white py-3 pl-10 pr-4 text-gray-600 border border-gray-300 rounded-[30px] shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transform transition-all hover:scale-105"
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607z"
              />
            </svg>
          </div>
        </div>

        {/* Icons and Profile */}
        <div className="flex items-center justify-between gap-2.5">
          {/* WiFi Icon */}
          <div
            onClick={goToWifi}
            className="bg-white w-11 h-11 border border-gray-400 flex items-center justify-center rounded-[30px] shadow-md hover:shadow-lg transform transition-all hover:scale-105"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="50"
              height="50"
              fill="none"
              stroke="blue"
              strokeWidth="1"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="mb-3"
            >
              <path d="M5.45 13a10.91 10.91 0 0 1 13.1 0" />
              <path d="M8.85 16.5a5.91 5.91 0 0 1 6.3 0" />
              <circle cx="12" cy="20" r="1" fill="lightblue" />
            </svg>
          </div>

          {/* Bell Icon */}
          <div
            className="bg-white w-11 h-11 border border-gray-400 flex items-center justify-center rounded-[30px] shadow-md hover:shadow-lg transform transition-all hover:scale-105"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6 text-blue-900"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0"
              />
            </svg>
          </div>

          {/* Profile Image */}
          <div className="rounded-full w-11 h-11 overflow-hidden ml-2 shadow-md hover:shadow-lg transform transition-all hover:scale-105">
            <img
              src="https://images.pexels.com/photos/3131971/pexels-photo-3131971.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
