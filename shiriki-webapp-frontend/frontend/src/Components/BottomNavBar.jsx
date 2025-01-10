import React from "react";
import { Link } from "react-router-dom";

const BottomNavBar = () => {
  return (
    <div className="bg-white border-t border-gray-400 rounded-t-2xl px-4 py-6 flex justify-between items-center fixed bottom-0 left-0 w-full z-10">
      <Link to="/services" className="flex flex-col items-center text-gray-600 hover:text-blue-500">
        <div className="flex flex-col items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
            />
          </svg>
          <span className="text-xs font-semibold hover:text-gray-600">Home</span>
        </div>
      </Link>
      <Link to="/feedback" className="flex flex-col items-center text-gray-600 hover:text-blue-500">
        <div className="flex flex-col items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.395-4.133a1.14 1.14 0 0 1 .865-.501 48.17 48.17 0 0 0 3.423-.379c1.584-.233 2.707-1.626 2.707-3.227V6.75c0-1.607-1.123-3-2.707-3.233A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.75v6.368c0 1.607 1.123 3 2.707 3.233.386.047.773.09 1.16.128"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
            />
          </svg>
          <span className="text-xs font-semibold">Feedback</span>
        </div>
      </Link>
      <Link to="/apps" className="flex flex-col items-center text-gray-600 hover:text-blue-500">
        <div className="flex flex-col items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M5.25 3.75v16.5c0 .621.756.954 1.248.573l12-8.25a.75.75 0 0 0 0-1.146l-12-8.25c-.492-.381-1.248-.048-1.248.573z"
            />
          </svg>
          <span className="text-xs font-semibold">My Apps</span>
        </div>
      </Link>

      <Link to="/account" className="flex flex-col items-center text-gray-600 hover:text-blue-500">
        <div className="flex flex-col items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
            />
          </svg>
          <span className="text-xs font-semibold hover:text-gray-600">Accounts</span>
        </div>
      </Link>
    </div>
  );
};

export default BottomNavBar;
