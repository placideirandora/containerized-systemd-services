import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const SurveyForm = () => {
    const navigate = useNavigate();
    const goBack = () => navigate(-1);
    const [formData, setFormData] = useState({
        satisfaction: "",
        favoriteFeature: "",
        improvement: "",
        ageGroup: "",
        feedback: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Survey Data:", formData);
        alert("Thank you for your feedback!");
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-sky-100 flex items-center justify-center p-4">
            <div className="w-full max-w-xl bg-white rounded-2xl shadow-2xl overflow-hidden transform transition-all duration-300 hover:scale-[1.01]">
                {/* Back Button */}
                <div className="px-6 pt-6 pb-2">
                    <button 
                        onClick={goBack}
                        className="group flex items-center text-gray-600 hover:text-indigo-600 transition-colors duration-300"
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
                            className="mr-2 group-hover:animate-bounce-left"
                        >
                            <path d="M19 12H5M12 19l-7-7 7-7" />
                        </svg>
                        <span className="text-sm font-medium">Back</span>
                    </button>
                </div>

                {/* Form Content */}
                <form 
                    onSubmit={handleSubmit} 
                    className="px-6 pb-8 space-y-6 animate-ease-in-up"
                >
                    {/* Header */}
                    <div className="text-center mb-6 bg-blue-600 rounded-[1.5rem] p-3">
                        <h1 className="text-2xl font-bold text-white mb-2">
                            User Experience Survey
                        </h1>
                        <p className="text-white text-sm max-w-md mx-auto">
                            Help us improve your experience by answering a few quick questions.
                        </p>
                    </div>

                    {/* Satisfaction Question */}
                    <div className="space-y-3">
                        <label className="block text-gray-700 font-semibold mb-2">
                            How satisfied are you with this app?
                        </label>
                        <div className="grid grid-cols-3 gap-3">
                            {["Very Satisfied", "Somewhat Satisfied", "Not Satisfied"].map((option) => (
                                <label 
                                    key={option} 
                                    className={`
                                        flex items-center justify-center 
                                        p-3 rounded-[1.5rem] cursor-pointer 
                                        border-2 transition-all duration-300
                                        ${formData.satisfaction === option 
                                            ? "bg-blue-100 border-blue-500 text-blue-700" 
                                            : "border-gray-200 hover:border-blue-300"}`}
                                >
                                    <input
                                        type="radio"
                                        name="satisfaction"
                                        value={option}
                                        onChange={handleChange}
                                        className="sr-only"
                                    />
                                    <span className="text-sm font-medium">{option}</span>
                                </label>
                            ))}
                        </div>
                    </div>

                    {/* Favorite Feature Question */}
                    <div className="space-y-3">
                        <label className="block text-gray-700 font-semibold mb-2">
                            What is your favorite feature of this app?
                        </label>
                        <div className="grid grid-cols-3 gap-3">
                            {["User Interface", "Performance", "Customization Options"].map((feature) => (
                                <label 
                                    key={feature} 
                                    className={`
                                        flex items-center justify-center 
                                        p-3 rounded-[1.5rem] cursor-pointer 
                                        border-2 transition-all duration-300
                                        ${formData.favoriteFeature.includes(feature) 
                                            ? "bg-blue-100 border-blue-500 text-blue-700" 
                                            : "border-gray-200 hover:border-blue-300"}`}
                                >
                                    <input
                                        type="checkbox"
                                        name="favoriteFeature"
                                        value={feature}
                                        onChange={(e) => {
                                            const currentFeatures = formData.favoriteFeature.split(',').filter(f => f);
                                            const newFeatures = e.target.checked 
                                                ? [...currentFeatures, feature].join(',')
                                                : currentFeatures.filter(f => f !== feature).join(',');
                                            setFormData({...formData, favoriteFeature: newFeatures});
                                        }}
                                        className="sr-only"
                                    />
                                    <span className="text-sm font-medium">{feature}</span>
                                </label>
                            ))}
                        </div>
                    </div>

                    {/* Improvements Question */}
                    <div className="space-y-3">
                        <label className="block text-gray-700 font-semibold mb-2">
                            What improvements would you like to see?
                        </label>
                        <select
                            name="improvement"
                            value={formData.improvement}
                            onChange={handleChange}
                            className="w-full p-3 border-2 border-blue-500 rounded-[1.5rem] focus:border-indigo-500 focus:ring-2 focus:ring-blue-400 transition-all duration-300"
                        >
                            <option value="" disabled>Select an option</option>
                            <option value="Faster Loading Times">Faster Loading Times</option>
                            <option value="Better Graphics">Better Graphics</option>
                            <option value="More Features">More Features</option>
                            <option value="Bug Fixes">Bug Fixes</option>
                        </select>
                    </div>

                    {/* Age Group Question */}
                    <div className="space-y-3">
                        <label className="block text-gray-700 font-semibold mb-2">
                            What is your age group?
                        </label>
                        <div className="grid grid-cols-4 gap-3">
                            {["Under 18", "18-25", "26-35", "36 and above"].map((age) => (
                                <label 
                                    key={age} 
                                    className={`
                                        flex items-center justify-center 
                                        p-3 rounded-[1.5rem] cursor-pointer 
                                        border-2 transition-all duration-300
                                        ${formData.ageGroup === age 
                                            ? "bg-blue-100 border-blueo-500 text-blue-700" 
                                            : "border-gray-200 hover:border-blue-300"}`}
                                >
                                    <input
                                        type="radio"
                                        name="ageGroup"
                                        value={age}
                                        onChange={handleChange}
                                        className="sr-only"
                                    />
                                    <span className="text-sm font-medium">{age}</span>
                                </label>
                            ))}
                        </div>
                    </div>

                    {/* Feedback Question */}
                    <div className="space-y-3">
                        <label className="block text-gray-700 font-semibold rounded-[1.5rem] mb-2">
                            Any additional feedback or suggestions?
                        </label>
                        <textarea
                            name="feedback"
                            value={formData.feedback}
                            onChange={handleChange}
                            rows="4"
                            placeholder="Type your feedback here..."
                            className="w-full p-3 border-2 border-blue-500 rounded-[1.5rem] focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-300 resize-none"
                        ></textarea>
                    </div>

                    {/* Submit Button */}
                    <button
                        type="submit"
                        className="w-full bg-blue-600 text-white py-3 rounded-[1.5rem] font-semibold 
                        shadow-lg hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-300 
                        transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98]"
                    >
                        Submit Survey
                    </button>
                </form>
            </div>
        </div>
    );
};

export default SurveyForm;
