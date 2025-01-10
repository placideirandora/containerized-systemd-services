import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const CreateProfile = () => {
    const [image, setImage] = useState(null);
    const navigate = useNavigate();
    const goBack = () => navigate(-1);

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setImage(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-300 flex items-center justify-center">
            <div className="bg-white rounded-lg shadow-2xl p-8 w-full max-w-lg transition-all duration-500 ease-in-out">
                <div className="flex items-center mb-6">
                    <span
                        onClick={goBack}
                        className="flex items-center text-2xl font-semibold text-gray-700 cursor-pointer hover:text-gray-900 transition-all duration-300 ease-in-out"
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
                        Back
                    </span>
                </div>

                <h1 className="text-3xl font-bold text-center text-gray-800 mb-8 transition-all duration-500 ease-in-out transform hover:scale-105">
                    Create Your Profile
                </h1>

                <div className="relative mb-8 flex justify-center">
                    <div
                        className="w-32 h-32 rounded-full flex items-center justify-center overflow-hidden border-4 border-cyan-500 shadow-lg transition-all duration-300 ease-in-out transform hover:scale-110"
                        style={{
                            backgroundImage: `url(${image})`,
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                            boxShadow:
                                "0 4px 6px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.06)",
                            border: "1px solid #e2e8f0",
                            background: "linear-gradient(to bottom, #ffffff, #f7fafc)",
                        }}
                    >
                        {!image && (
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                width="40"
                                height="40"
                                className="text-gray-500"
                            >
                                <path fill="none" d="M0 0h24v24H0z" />
                                <path
                                    fill="currentColor"
                                    d="M12 12c2.2 0 4-1.8 4-4s-1.8-4-4-4-4 1.8-4 4 1.8 4 4 4zm0 2c-2.7 0-8 1.3-8 4v2h16v-2c0-2.7-5.3-4-8-4z"
                                />
                            </svg>
                        )}
                    </div>
                    <input
                        type="file"
                        accept="image/*"
                        onChange={handleImageChange}
                        className="absolute inset-0 opacity-0 cursor-pointer"
                    />
                </div>

                <div className="space-y-4">
                    {[
                        "Full Name",
                        "Email",
                        "Gender",
                        "Country",
                        "Phone no.",
                        "Username",
                    ].map((placeholder) => (
                        <input
                            key={placeholder}
                            type="text"
                            placeholder={placeholder}
                            className="w-full pl-12 pr-4 py-3 rounded-[1.5rem] focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 ease-in-out transform hover:scale-105"
                            style={{
                                boxShadow:
                                    "0 4px 6px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.06)",
                                border: "1px solid #e2e8f0",
                                background: "linear-gradient(to bottom, #ffffff, #f7fafc)",
                            }}
                            onFocus={(e) => {
                                e.target.style.border = "2px solid #4299e1";
                                e.target.style.transform = "scale(1.05)";
                            }}
                            onBlur={(e) => {
                                e.target.style.border = "1px solid #e2e8f0";
                                e.target.style.transform = "scale(1)";
                            }}
                        />
                    ))}
                </div>

                <Link
                    to="/services"
                    className="block w-full text-center py-4 rounded-[1.5rem] mt-8 font-semibold text-white shadow-lg transform hover:scale-105 hover:shadow-xl transition-all duration-300 ease-in-out"
                    style={{
                        boxShadow:
                          "0 6px 10px rgba(0, 0, 0, 0.15), 0 2px 4px rgba(0, 0, 0, 0.12)",
                        background: "linear-gradient(to bottom, #4299e1, #3182ce)",
                    }}
                >
                    Done
                </Link>

                <div className="fixed bottom-2 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-blue-400 rounded-full"></div>
            </div>
        </div>
    );
};

export default CreateProfile;
