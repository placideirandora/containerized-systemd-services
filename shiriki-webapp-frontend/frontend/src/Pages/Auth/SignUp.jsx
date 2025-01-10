import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion"; // Import motion from framer-motion

const SignUp = () => {
  const navigate = useNavigate();
  const goBack = () => navigate(-1);

  const toProfile = () => {
    navigate("/profile/create");
  };

  return (
    <motion.div
      style={{
        fontFamily: "'Inter', sans-serif",
        background: "linear-gradient(to bottom right, #f0f4f8, #d9e8fc)",
      }}
      className="min-h-screen flex items-center justify-center px-4"
      initial={{ opacity: 0 }} // Initial state
      animate={{ opacity: 1 }} // Final state
      transition={{ duration: 0.5 }} // Animation duration
    >
      <motion.div
        className="max-w-md w-full bg-white shadow-2xl rounded-[1.5rem] p-8 text-center"
        initial={{ y: -100, opacity: 0 }} // Initial position and opacity
        animate={{ y: 0, opacity: 1 }} // Final position and opacity
        transition={{ duration: 0.5 }}
      >
        <div className="flex items-center justify-between mb-6">
          <div className="pr-3 cursor-pointer" onClick={goBack}>
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
              className="text-gray-700 hover:text-gray-900 transition"
            >
              <path d="M19 12H5M12 19l-7-7 7-7" />
            </svg>
          </div>
          <p className="text-lg font-semibold text-gray-800">Sign Up</p>
        </div>

        <p className="text-gray-500 mb-8">
          Create an account to access exclusive features.
        </p>

        <form className="space-y-6">
          {/* Full Name Field */}
          <motion.div
            className="relative"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, ease: "easeIn" }}
          >
            <input
              type="text"
              placeholder="Full Name"
              className="w-full border-gray-300 pl-12 pr-4 py-3 border rounded-[1.5rem] shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition transform hover:translate-y-[-2px] hover:shadow-lg ease-in-input"
              style={{
                boxShadow:
                  "0 4px 6px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.06)",
                border: "1px solid #e2e8f0",
                background: "linear-gradient(to bottom, #ffffff, #f7fafc)",
                transition: "transform 0.2s ease, box-shadow 0.2s ease",
              }}
              onFocus={(e) => (e.target.style.border = "2px solid #4299e1")}
              onBlur={(e) => (e.target.style.border = "1px solid #e2e8f0")}
            />
          </motion.div>

          {/* Email Field */}
          <motion.div
            className="relative"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, ease: "easeIn" }}
          >
            <input
              type="email"
              placeholder="Email Address"
              className="w-full border-gray-300 pl-12 pr-4 py-3 border rounded-[1.5rem] shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition transform hover:translate-y-[-2px] hover:shadow-lg ease-in-input"
              style={{
                boxShadow:
                  "0 4px 6px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.06)",
                border: "1px solid #e2e8f0",
                background: "linear-gradient(to bottom, #ffffff, #f7fafc)",
                transition: "transform 0.2s ease, box-shadow 0.2s ease",
              }}
              onFocus={(e) => (e.target.style.border = "2px solid #4299e1")}
              onBlur={(e) => (e.target.style.border = "1px solid #e2e8f0")}
            />
          </motion.div>

          {/* Password Field */}
          <motion.div
            className="relative"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, ease: "easeIn" }}
          >
            <input
              type="password"
              placeholder="Password"
              className="w-full pl-12 pr-4 py-3 rounded-[1.5rem] focus:outline-none focus:ring-2 focus:ring-blue-500"
              style={{
                boxShadow:
                  "0 4px 6px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.06)",
                border: "1px solid #e2e8f0",
                background: "linear-gradient(to bottom, #ffffff, #f7fafc)",
                transition: "transform 0.2s ease, box-shadow 0.2s ease",
              }}
              onFocus={(e) => (e.target.style.border = "2px solid #4299e1")}
              onBlur={(e) => (e.target.style.border = "1px solid #e2e8f0")}
            />
          </motion.div>

          {/* Confirm Password Field */}
          <motion.div
            className="relative"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, ease: "easeIn" }}
          >
            <input
              type="password"
              placeholder="Confirm Password"
              className="w-full pl-12 pr-4 py-3 rounded-[1.5rem] focus:outline-none focus:ring-2 focus:ring-blue-500"
              style={{
                boxShadow:
                  "0 4px 6px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.06)",
                border: "1px solid #e2e8f0",
                background: "linear-gradient(to bottom, #ffffff, #f7fafc)",
                transition: "transform 0.2s ease, box-shadow 0.2s ease",
              }}
              onFocus={(e) => (e.target.style.border = "2px solid #4299e1")}
              onBlur={(e) => (e.target.style.border = "1px solid #e2e8f0")}
            />
          </motion.div>

          {/* Sign-Up Button with Mild Pulse Effect */}
          <motion.button
            type="submit"
            onClick={toProfile}
            className="w-full py-3 text-white font-medium rounded-[1.5rem] bg-blue-600"
            style={{
              boxShadow:
                "0 6px 10px rgba(0, 0, 0, 0.15), 0 2px 4px rgba(0, 0, 0, 0.12)",
              transition: "transform 0.2s ease, box-shadow 0.2s ease",
            }}
            animate={{ opacity: 1, scale: [1, 1.01, 1] }} // Mild pulse effect
            transition={{
              duration: 0.8,
              repeat: Infinity, // Repeat the pulse effect
              repeatType: "reverse", // Reverse the pulse
              ease: "easeInOut",
            }}
          >
            Create Account
          </motion.button>
        </form>

        <p className="mt-6 text-gray-500">
          Already have an account?{" "}
          <span
            className="text-blue-600 font-medium cursor-pointer hover:underline"
            onClick={() => navigate("/sign-in")}
          >
            Sign in
          </span>
        </p>
      </motion.div>
    </motion.div>
  );
};

export default SignUp;
