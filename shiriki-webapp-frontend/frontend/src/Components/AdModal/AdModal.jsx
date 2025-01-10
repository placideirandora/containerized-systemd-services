import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const AdModal = ({ onClose }) => {
  const [timeLeft, setTimeLeft] = useState(30);
  const [showSkip, setShowSkip] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          setLoading(true);
          setTimeout(() => {
            onClose();
            navigate("/services");
          }, 2000);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    const skipTimer = setTimeout(() => {
      setShowSkip(true);
    }, 15000);

    return () => {
      clearInterval(timer);
      clearTimeout(skipTimer);
    };
  }, [onClose, navigate]);

  const handleSkip = () => {
    setLoading(true);
    setTimeout(() => {
      onClose();
      navigate("/services");
    }, 2000);
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-70 z-50">
      <div
        className="relative bg-white bg-opacity-30 backdrop-blur-lg rounded-xl shadow-2xl p-6 w-11/12 max-w-lg mx-auto text-center"
        style={{ boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)" }}
      >
        {/* Close Button */}
        <button
          className="absolute top-4 right-4 text-gray-700 hover:text-gray-900 text-lg font-bold"
          onClick={onClose}
        >
          &times;
        </button>

        <h2 className="text-2xl text-gray-900 font-bold mb-4">Watch this Ad to Access</h2>

        {/* Video Container */}
        <div className="relative bg-opacity-50 rounded-xl overflow-hidden">
          <video width="100%" height="auto" autoPlay>
            <source src="/video/Ad.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          {showSkip && (
            <button
              className="absolute bottom-4 right-4 bg-red-500 hover:bg-red-600 text-white text-sm px-4 py-2 rounded-full transition-shadow shadow-md"
              onClick={handleSkip}
            >
              Skip Ad
            </button>
          )}
        </div>

        {/* Timer and Loading */}
        <div className="mt-4">
          {loading ? (
            <p className="text-gray-900">Connecting... Please wait</p>
          ) : (
            <p className="text-gray-600">
              Remaining time: <span className="font-semibold">{timeLeft}</span> seconds
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default AdModal;
