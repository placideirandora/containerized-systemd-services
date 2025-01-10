import React, { useState, useContext } from "react";
import { BiWifi } from "react-icons/bi";
import Modal from "react-modal";
import { useNavigate } from "react-router-dom";
import logo from "./../../assets/images/bkarena.png";
import freeWifi from "./../../assets/images/freeWifi.png";
import freeBundleExhasuted from "./../../assets/images/ConnectForFree.png";
import WifiTimeStepper from "./WifiTimeStepper";
import { Link } from "react-router-dom";
import { TimeContext } from "../../context/WifiTimeContext";

Modal.setAppElement("#root");

const ConnectForFree = () => {
  const { timeLeft, isConnected, startTimer, stopTimer } =
    useContext(TimeContext);
  const [showLogoutModal, setShowLogoutModal] = useState(false);
  const [showStepper, setShowStepper] = useState(false);
  const navigate = useNavigate();

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${minutes.toString().padStart(2, "0")}:${secs
      .toString()
      .padStart(2, "0")}`;
  };

  const handleConnect = () => {
    startTimer(0.1 * 60); // Start countdown based on time
  };

  const handleLogout = () => {
    setShowLogoutModal(true);
  };

  const confirmLogout = () => {
    setShowLogoutModal(false);
    stopTimer();
    navigate("/");
  };

  const handleGetMoreTime = () => {
    setShowStepper(true);
  };

  const closeStepper = () => {
    setShowStepper(false);
    startTimer(0.1 * 60); // Set new countdown time after the stepper
  };
  return (
    <div className="flex flex-col w-96 h-full items-center justify-between py-1">
      <Modal
        isOpen={showLogoutModal}
        onRequestClose={() => setShowLogoutModal(false)}
        className="bg-white p-8 rounded-md shadow-lg max-w-md mx-auto mt-20 text-center"
        overlayClassName="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center"
      >
        <h2 className="text-lg font-semibold mb-4">Confirm Logout</h2>
        <p>You will be accessing offline data only?</p>
        <div className="mt-6 flex justify-center space-x-4">
          <button
            onClick={confirmLogout}
            className="px-4 py-2 bg-red-500 text-white rounded-md"
          >
            Yes, Logout
          </button>
          <button
            onClick={() => setShowLogoutModal(false)}
            className="px-4 py-2 bg-gray-300 text-gray-700 rounded-md"
          >
            Cancel
          </button>
        </div>
      </Modal>

      {showStepper ? (
        <WifiTimeStepper onClose={closeStepper} />
      ) : !isConnected ? (
        <>
          <div className="flex flex-col items-center">
            <BiWifi size={150} className="text-slate-100" />
          </div>
          <div className="border border-[#002D74] rounded-md shadow-xl">
            <img src={logo} alt="Logo" className="w-36" />
          </div>
          <button
            onClick={handleConnect}
            className="mt-8 relative group overflow-hidden px-8 h-12 rounded-md bg-lime-500
              before:absolute 
              before:inset-0 
              before:bg-lime-600 
              before:scale-y-[0.1] 
              before:origin-bottom
              before:transition
              before:duration-300
              hover:before:scale-y-100
              "
          >
            <span className="relative uppercase text-base text-white">
              Connect to WiFi
            </span>
          </button>
        </>
      ) : timeLeft > 0 ? (
        <>
          <div>
            <img
              src={freeWifi}
              alt="Logo"
              className="w-36 h-36 rounded-full object-cover"
            />
          </div>

          <div className="flex flex-col items-center space-y-4">
            <p className="text-green-600 text-lg font-bold">Success!</p>
            <p className="text-gray-500">You can enjoy browsing internet</p>
            <div className="text-2xl font-semibold text-blue-50">
              {formatTime(timeLeft)}
            </div>
          </div>
          <div className="flex flex-col items-center space-y-4">
            <Link to="/services">
              <button className="relative group overflow-hidden px-6 w-full h-12 rounded-full flex space-x-2 items-center justify-center bg-gradient-to-r from-blue-800 to-blue-500 hover:to-green-600">
                <span className="relative text-sm text-white">
                  Go to Services
                </span>
              </button>
            </Link>
            <button
              onClick={handleLogout}
              className="w-full bg-red-500 text-white py-2 rounded-md"
            >
              LOGOUT
            </button>
          </div>
        </>
      ) : (
        <>
          <div>
            <img
              src={freeBundleExhasuted}
              alt="Logo"
              className="w-36 h-36 rounded-full object-cover"
            />
          </div>
          <div className="text-center text-red-500 font-light text-xl px-2">
            Free Connection Time is up! Please reconnect to continue browsing.
          </div>

          <button
            onClick={handleGetMoreTime}
            className="mt-8 relative group overflow-hidden px-8 h-12 rounded-md bg-lime-500
           before:absolute 
           before:inset-0 
           before:bg-lime-600 
           before:scale-y-[0.1] 
           before:origin-bottom
           before:transition
           before:duration-300
           hover:before:scale-y-100
           "
          >
            <span className="relative uppercase text-base text-white">
              Get more wifi time
            </span>
          </button>
        </>
      )}
    </div>
  );
};

export default ConnectForFree;
