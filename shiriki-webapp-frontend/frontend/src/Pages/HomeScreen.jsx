import React, { useContext, useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import AdModal from "../Components/AdModal/AdModal";
import { TimeContext } from "../context/WifiTimeContext";
import { FaRegClipboard, FaConciergeBell, FaTv, FaUsers, FaGlobe, FaGamepad } from 'react-icons/fa'; // FontAwesome icons

// Utility to shuffle an array
const shuffleArray = (array) => array.sort(() => Math.random() - 0.5);

const pastelColors = [
  "#FAD02E", // Yellow
  "#F28D35", // Orange
  "#D83367", // Pink
  "#6C5B7B", // Purple
  '#6A4C93'
];

const slideImages = shuffleArray([
  { icon: <FaConciergeBell size={40} color={pastelColors[0]} />, caption: "Restaurants", link: "/services/restaurant" },
  { icon: <FaUsers size={40} color={pastelColors[1]} />, caption: "Queue System", link: "/queue" },
  { icon: <FaRegClipboard size={40} color={pastelColors[2]} />, caption: "Survey", link: "/survey" },
  { icon: <FaTv size={40} color={pastelColors[3]} />, caption: "Entertainment", link: "/services/entertainment" },
]);

const newFeatures = shuffleArray([
  { 
    icon: <FaGlobe size={40} color={pastelColors[4]} />,  // Icon for Arena 3D Map
    caption: "Arena 3D Map" 
  },
  { 
    icon: <FaGamepad size={40} color={pastelColors[1]} />,  // Icon for Games
    caption: "Games" 
  },
]);

const HomeScreen = () => {
  const navigate = useNavigate();
  const { isConnected } = useContext(TimeContext);
  const [showAd, setShowAd] = useState(false);

  const setCookie = (name, value, minutes) => {
    const now = new Date();
    now.setTime(now.getTime() + minutes * 60 * 1000);
    const expires = "expires=" + now.toUTCString();
    document.cookie = `${name}=${value};${expires};path=/`;
  };

  const getCookie = (name) => {
    const cookies = document.cookie.split("; ");
    for (let i = 0; i < cookies.length; i++) {
      const [key, value] = cookies[i].split("=");
      if (key === name) return value;
    }
    return null;
  };

  useEffect(() => {
    const adViewed = getCookie("AdViewed");
    if (!adViewed) {
      setShowAd(true);
    }
  }, []);

  const handleCloseAd = () => {
    setShowAd(false);
    setCookie("AdViewed", "true", 30);
    navigate("/services");
  };

  return (
    <div className="min-h-screen bg-white relative overflow-hidden">
      {/* Curved Top Background */}
      <div
        className="absolute top-0 left-0 w-full h-60 rounded-b-[70%]"
        style={{
          background: 'linear-gradient(to right, #3B82F6 , #1D4ED8)', // Gradient from blue to light blue
        }}
      ></div>

      <div className="relative z-10 p-1">
        {/* Start Your Journey Section */}
        <div className="p-3 mb-6">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Start Your Journey</h2>
          <div className="rounded-xl  shadow-lg p-6">
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
              {slideImages.map((slideImage, index) => (
                <Link to={slideImage.link} key={index} className="group cursor-pointer">
                  <div className="rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transform transition-transform duration-300 group-hover:scale-105">
                    <div className="w-full h-40 flex justify-center items-center bg-white">
                      {slideImage.icon}
                    </div>
                    <div className="p-3 bg-gray-100 text-center">
                      <span className="text-lg font-semibold">{slideImage.caption}</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Latest Additions Section */}
        <div className="p-6 mb-6">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Latest Additions</h2>
          <div className="rounded-xl  shadow-lg p-6">
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
              {newFeatures.map((feature, index) => (
                <div
                  key={index}
                  className="rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transform transition-transform duration-300 hover:scale-105"
                >
                  <div className="w-full h-40 flex justify-center items-center bg-white">
                    {feature.icon} {/* Render the icon */}
                  </div>
                  <div className="p-3 bg-white text-center">
                    <span className="text-lg font-semibold">{feature.caption}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Ad Modal */}
      {showAd && <AdModal onClose={handleCloseAd} />}
    </div>
  );
};

export default HomeScreen;
