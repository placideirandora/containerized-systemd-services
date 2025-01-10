import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import BottomNavBar from "../Components/BottomNavBar";

const Feedback = () => {
    const navigate = useNavigate();
    const goBack = () => navigate(-1);

    const [feedback, setFeedback] = useState({
        name: "",
        contact: "",
        email: "",
        experience: "",
        comments: "",
        sliderValue: 0,
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFeedback({ ...feedback, [name]: value });
    };

    const handleSliderChange = (e) => {
        setFeedback({ ...feedback, sliderValue: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(feedback);
        navigate("/services");
    };

    return (
        <div className="flex flex-col min-h-screen bg-gray-100">
            <div className="flex-none bg-white shadow-md">
                <div className="p-4">
                    <span
                        onClick={goBack}
                        className="flex items-center text-2xl font-semibold text-gray-700 cursor-pointer hover:text-gray-900 transition"
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
                    </span>
                </div>
            </div>
            <div className="flex-grow overflow-y-auto">
                <div
                    className="bg-white shadow-lg rounded-[1.5rem] p-8 mx-4 my-6"
                    style={{ fontFamily: "'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif" }}
                >
                    <form onSubmit={handleSubmit}>
                        <p className="text-2xl font-bold text-gray-800 mb-6 text-center">We Value Your Feedback</p>
                        <div className="mb-4">
                            <label className="block text-sm font-medium text-gray-600 mb-2" htmlFor="name">
                                Name
                            </label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={feedback.name}
                                onChange={handleChange}
                                className="w-full p-3 border border-gray-300 rounded-[1.5rem] focus:outline-none focus:ring focus:ring-blue-400"
                                placeholder="Enter your name"
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-sm font-medium text-gray-600 mb-2" htmlFor="contact">
                                Phone Number
                            </label>
                            <input
                                type="text"
                                id="contact"
                                name="contact"
                                value={feedback.contact}
                                onChange={handleChange}
                                className="w-full p-3 border border-gray-300 rounded-[1.5rem] focus:outline-none focus:ring focus:ring-blue-400"
                                placeholder="+91 00000 00000"
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-sm font-medium text-gray-600 mb-2" htmlFor="email">
                                Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={feedback.email}
                                onChange={handleChange}
                                className="w-full p-3 border border-gray-300 rounded-[1.5rem] focus:outline-none focus:ring focus:ring-blue-400"
                                placeholder="example@gmail.com"
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-sm font-medium text-gray-600 mb-2">
                                Rate Your Experience
                            </label>
                            <div className="flex justify-between mb-3">
                                <span role="img" aria-label="Worst">
                                    😡
                                </span>
                                <span role="img" aria-label="Not Good">
                                    😕
                                </span>
                                <span role="img" aria-label="Fine">
                                    🙂
                                </span>
                                <span role="img" aria-label="Good">
                                    😊
                                </span>
                                <span role="img" aria-label="Very Good">
                                    😍
                                </span>
                            </div>
                            <input
                                type="range"
                                name="sliderValue"
                                min="0"
                                max="4"
                                value={feedback.sliderValue}
                                onChange={handleSliderChange}
                                className="w-full h-2 bg-gray-300 rounded-lg appearance-none focus:outline-none focus:ring focus:ring-blue-400"
                            />
                        </div>
                        <div className="mb-6">
                            <label className="block text-sm font-medium text-gray-600 mb-2" htmlFor="comments">
                                Comments
                            </label>
                            <textarea
                                id="comments"
                                name="comments"
                                value={feedback.comments}
                                onChange={handleChange}
                                className="w-full h-24 p-3 border border-gray-300 rounded-[1.5rem] focus:outline-none focus:ring focus:ring-blue-400"
                                placeholder="Add your comments..."
                            ></textarea>
                        </div>
                        <button
                            type="submit"
                            className="w-full py-3 bg-blue-600 text-white font-medium rounded-[1.5rem] hover:bg-blue-600 transition-all duration-300"
                        >
                            Submit Feedback
                        </button>
                    </form>
                </div>
            </div>
            <BottomNavBar />
        </div>
    );
};

export default Feedback;
