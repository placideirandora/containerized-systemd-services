import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import ConnectForFree from "../Components/connectToWifi/connectForFree";
import { TimeContext } from "../context/WifiTimeContext";
import AdModal from "../Components/AdModal/AdModal";

const Welcome = () => {
  const { isConnected } = useContext(TimeContext);
  const [showAd, setShowAd] = useState(false);
  const navigate = useNavigate();

  const handleCloseAd = () => {
    setShowAd(false);
    navigate("/services");
  };

  const handleShowAd = () => {
    console.log(isConnected)
    setShowAd(true);
  };

  return (
    <div className="h-screen flex flex-col items-center justify-center space-y-2 py-6 bg-[#002D74]">
      <ConnectForFree />

      {!isConnected && (
        <div className="px-2 w-96">
          {/* <Link to="/services"> */}
          <button
            onClick={handleShowAd}
            className="relative group overflow-hidden px-6 w-full h-12 rounded-full flex space-x-2 items-center justify-center bg-gradient-to-r from-blue-800 to-blue-500 hover:to-purple-600"
          >
            <span className="relative text-sm text-white">Later</span>
            <div className="flex items-center -space-x-3 translate-x-3">
              <div className="w-2.5 h-[1.6px] rounded bg-white origin-left scale-x-0 transition duration-300 group-hover:scale-x-100"></div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 stroke-white -translate-x-2 transition duration-300 group-hover:translate-x-0"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </div>
          </button>
        </div>
      )}
      {showAd && <AdModal onClose={handleCloseAd} />}
    </div>
  );
};

export default Welcome;
