/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import router from "../../assets/images/router.png";
import wifi from "../../assets/images/wifi.png";
import gemstone from "../../assets/images/gemstone.jpg";
import { useNavigate } from "react-router-dom";
import BottomNavBar from "../BottomNavBar.jsx";
import { motion } from "framer-motion";
import crypto from "crypto-browserify";

const WifiService = () => {
  const navigate = useNavigate();
  const goBack = () => navigate(-1);

  const toServices = () => {
    navigate("/services");
  };

  const queryParams = new URLSearchParams(window.location.search);
  const [token, setToken] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState(
    queryParams.get("res") === "failed" &&
      queryParams.get("reason") === "reject"
      ? "Invalid to token. Try again."
      : queryParams.get("res") === "failed"
      ? "Failed to connect to the internet."
      : ""
  );

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log("Connecting to Wifi...");
      setIsLoading(true);
      const username = token;
      const uamsecret = "greatsecret";
      const challenge = queryParams.get("challenge");

      const hexchal = Buffer.from(challenge, "hex");

      const newchal = crypto
        .createHash("md5")
        .update(Buffer.concat([hexchal, Buffer.from(uamsecret)]))
        .digest();

      const hashed = crypto
        .createHash("md5")
        .update(
          Buffer.concat([Buffer.from("\0"), Buffer.from(username), newchal])
        )
        .digest("hex");

      const url = `http://192.168.182.1:4990/logon?username=${encodeURIComponent(
        username
      )}&response=${encodeURIComponent(hashed)}&userurl=${encodeURIComponent(
        queryParams.get("userurl") || ""
      )}&challenge=${encodeURIComponent(challenge)}`;

      window.location.href = url;
    } catch (error) {
      console.log(error);
      setMessage(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div
      style={{
        fontFamily:
          "'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif"
      }}
      className='max-w-lg mx-auto h-screen p-8 bg-white shadow-2xl rounded-lg flex flex-col items-center justify-between'
    >
      {/* Back Button and Header */}
      <div className='w-full flex items-center justify-between mb-8'>
        <button onClick={goBack} className='text-gray-600 hover:text-gray-900'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='24'
            height='24'
            viewBox='0 0 24 24'
            fill='none'
            stroke='currentColor'
            strokeWidth='2'
            strokeLinecap='round'
            strokeLinejoin='round'
          >
            <path d='M19 12H5M12 19l-7-7 7-7' />
          </svg>
        </button>
        <p className='flex items-center text-gray-700 font-medium'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            className='w-5 h-5 mr-2'
            fill='none'
            viewBox='0 0 24 24'
            stroke='currentColor'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={2}
              d='M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z'
            />
          </svg>
          127.0.0.1:8000
        </p>
      </div>

      {/* Logo and Title */}
      <header className='text-center mb-12'>
        <img
          src={router}
          alt='Router Logo'
          className='w-30 mx-auto mb-6 shadow-lg rounded-lg transform hover:scale-105 transition'
        />
        <h1 className='text-3xl font-bold text-gray-800 mb-4'>
          Connect to Wifi
        </h1>
        <img
          src={wifi}
          alt='WiFi Icon'
          className='w-12 mx-auto shadow-sm rounded-lg'
        />
      </header>

      {/* Connect Button */}
      {(queryParams.get("res") === "failed" ||
        queryParams.get("res") === "notyet") && (
        <form className='w-full flex flex-col gap-4' onSubmit={handleSubmit}>
          <motion.div
            className='relative'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, ease: "easeIn" }}
          >
            <input
              type='text'
              placeholder='Code'
              className='w-full border-gray-300 pl-12 pr-4 py-3 border rounded-[1.5rem] shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition transform hover:translate-y-[-2px] hover:shadow-lg ease-in-input'
              style={{
                boxShadow:
                  "0 4px 6px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.06)",
                border: "1px solid #e2e8f0",
                background: "linear-gradient(to bottom, #ffffff, #f7fafc)",
                transition: "transform 0.2s ease, box-shadow 0.2s ease"
              }}
              onFocus={(e) => (e.target.style.border = "2px solid #4299e1")}
              onBlur={(e) => (e.target.style.border = "1px solid #e2e8f0")}
              onChange={(e) => setToken(e.target.value)}
              required={true}
            />

            {queryParams.get("res") === "failed" && (
              <p className='text-red-500 text-sm font-medium py-2'>{message}</p>
            )}
          </motion.div>

          <button
            type='submit'
            className='w-full py-3  text-white font-semibold rounded-[1.5rem] bg-blue-600 shadow-md hover:shadow-lg transform hover:scale-105 transition'
            style={{
              boxShadow:
                "0 6px 10px rgba(0, 0, 0, 0.15), 0 2px 4px rgba(0, 0, 0, 0.12)",
              transition: "transform 0.2s ease, box-shadow 0.2s ease"
            }}
            disabled={isLoading}
          >
            {isLoading ? "Connecting..." : "Connect"}
          </button>
        </form>
      )}

      {/* Disconnect Button */}
      {queryParams.get("res") === "success" && (
        <div className='text-center'>
          <h1 className='text-2xl font-bold text-green-500 mb-4'>
            You are now connected to the internet
          </h1>
          <p className='text-gray-600'>
            You can now browse the internet freely!
          </p>

          {queryParams.get("userurl") && (
            <a
              href={queryParams.get("userurl")}
              target='_blank'
              rel='noreferrer'
              className='py-2 text-blue-600 underline'
            >
              Continue to your website
            </a>
          )}

          <button
            className='w-full py-3 mt-2 text-white font-semibold rounded-[1.5rem] bg-blue-600 shadow-md hover:shadow-lg transform hover:scale-105 transition'
            style={{
              boxShadow:
                "0 6px 10px rgba(0, 0, 0, 0.15), 0 2px 4px rgba(0, 0, 0, 0.12)",
              transition: "transform 0.2s ease, box-shadow 0.2s ease"
            }}
            onClick={toServices}
          >
            Go to services
          </button>

          <button
            className='w-full py-3 mt-2 text-white font-semibold rounded-[1.5rem] bg-red-600 shadow-md hover:shadow-lg transform hover:scale-105 transition'
            style={{
              boxShadow:
                "0 6px 10px rgba(0, 0, 0, 0.15), 0 2px 4px rgba(0, 0, 0, 0.12)",
              transition: "transform 0.2s ease, box-shadow 0.2s ease"
            }}
          >
            <a
              href='http://192.168.182.1:4990/logout'
              className='h-full w-full'
            >
              Disconnect
            </a>
          </button>
        </div>
      )}

      {/* Footer */}
      <footer className='w-full mt-12 flex flex-col items-center gap-4'>
        <img
          src={gemstone}
          alt='Gemstone'
          className='w-12 shadow-md rounded-lg transform hover:rotate-6 transition'
        />
        <p className='text-gray-500 font-medium'>
          Don’t have an account?{" "}
          <span className='text-gray-900 font-bold cursor-pointer'>
            Sign in
          </span>
        </p>
      </footer>

      {/* Bottom Navigation */}
      <div className='sticky bottom-0 bg-white shadow-lg'>
        <BottomNavBar />
      </div>
    </div>
  );
};

export default WifiService;
