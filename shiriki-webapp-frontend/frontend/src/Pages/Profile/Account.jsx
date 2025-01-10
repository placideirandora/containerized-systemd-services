import React from "react";
import BottomNavBar from "../../Components/BottomNavBar";
import { useNavigate, Link } from "react-router-dom";
import ToggleOffIcon from '@mui/icons-material/ToggleOff';
import ToggleOnIcon from '@mui/icons-material/ToggleOn';

const Account = () => {
    const navigate = useNavigate();
    const goBack = () => navigate(-1);

    const handleSubmit = () => {
        navigate("/services");
    };

    return (
        <div className="min-h-screen p-4 bg-gradient-to-br from-[#f0f4f8] to-[#d9e8fc] text-dark">

            <div className="flex mt-5 mb-8">
                <svg
                    className="mr-5"
                    onClick={goBack}
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                >
                    <path d="M19 12H5M12 19l-7-7 7-7" />
                </svg>
                <h1 className="text-3xl font-semibold">Account</h1>
            </div>

            {/* Menu Items */}
            <div className="space-y-4">
                <div className="bg-white p-4 rounded-[1.5rem] shadow-lg hover:shadow-2xl hover:scale-105 transition-all">
                    <span className="text-gray-900 text-lg">Account Preferences</span>
                </div>

                <div className="bg-white p-4 rounded-[1.5rem] shadow-lg hover:shadow-2xl hover:scale-105 transition-all">
                    <span className="text-gray-900 text-lg">Privacy and Security</span>
                </div>

                <div className="bg-white p-4 rounded-[1.5rem] shadow-lg hover:shadow-2xl hover:scale-105 transition-all">
                    <Link  className="text-gray-900 text-lg">Payment Method</Link>
                </div>

                <div className="bg-white p-4 rounded-[1.5rem] shadow-lg hover:shadow-2xl hover:scale-105 transition-all">
                    <Link to="/feedback" className="text-gray-900 text-lg">Give Feedback</Link>
                </div>

                <div className="bg-white p-4 rounded-[1.5rem] shadow-lg hover:shadow-2xl hover:scale-105 transition-all">
                    <span className="text-gray-900 text-lg">Additional Settings</span>
                </div>

                <div className="bg-white p-4 rounded-[1.5rem] shadow-lg hover:shadow-2xl hover:scale-105 transition-all flex justify-between items-center">
                    <span className="text-gray-900 text-lg">Light Mode</span>
                    <div className="toggle-switch ">
                        <ToggleOnIcon />
                    </div>
                </div>

                <div className="bg-white p-4 rounded-[1.5rem] shadow-lg hover:shadow-2xl hover:scale-105 transition-all flex justify-between items-center">
                    <span className="text-gray-900 text-lg">Data Saver</span>
                    <div className="toggle-switch">
                        <ToggleOffIcon />
                    </div>
                </div>
            </div>

            {/* Input and Button with 3D effect */}
            <div className="mt-8">
                <input
                    type="text"
                    placeholder="Enter text"
                    className="w-full p-3 rounded-[1.5rem] border-2 border-blue-500 bg-white shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-300 transition-all"
                />
                <button
                    onClick={handleSubmit}
                    className="w-full mt-4 p-3 rounded-[1.5rem] bg-blue-600 text-white shadow-lg hover:shadow-2xl hover:scale-105 hover:bg-blue-600 transition-all"
                >
                    Submit
                </button>
            </div>

            {/* Footer Text */}
            <div className="text-center mt-20 mb-20">
                <span className="text-gray-400 text-lg">Super app inc.</span>
            </div>

            <div className="absolute bottom-0 w-[93%]">
                <BottomNavBar />
            </div>
        </div>
    );
};

export default Account;
