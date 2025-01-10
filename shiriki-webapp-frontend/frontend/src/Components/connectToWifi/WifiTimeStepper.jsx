import React, { useState } from "react";
import { FaCheckCircle } from "react-icons/fa";
import { useForm } from "react-hook-form";
import successRefresh from "./../../assets/images/successRefreshToken.png";

const steps = ["Enter Phone Number", "Submit Token", "Success"];

const WifiTimeStepper = ({ onClose }) => {
  const [activeStep, setActiveStep] = useState(0);
  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
  } = useForm();
  const [token, setToken] = useState("");

  const handleNext = () => {
    if (activeStep === 0) {
      handleSubmit(onSubmitPhoneNumber)();
    } else if (activeStep === 1) {
      handleSubmit(onSubmitToken)();
    } else {
      onClose();
    }
  };

  const handleBack = () => {
    setActiveStep((prev) => prev - 1);
  };

  const onSubmitPhoneNumber = (data) => {
    console.log("Phone Number:", data.phoneNumber);
    const generatedToken = "WIFI123456"; // For demo purposes
    setToken(generatedToken);
    setActiveStep((prev) => prev + 1);
  };

  const onSubmitToken = (data) => {
    console.log("Submitted Token:", data.token);
    if (true) {
      setActiveStep((prev) => prev + 1);
    } else {
      alert("Invalid token. Please try again.");
    }
  };

  return (
    <div className="flex flex-col items-center justify-between h-full w-full">
      {/* Stepper navigation */}
      <div className="flex justify-between w-full px-2">
        {steps.map((step, index) => (
          <div
            key={step}
            className={`flex-1 text-center py-2 ${
              index === activeStep
                ? "text-blue-500 font-semibold"
                : index < activeStep
                ? "text-blue-500"
                : "text-gray-500"
            }`}
          >
            {index < activeStep ? (
              <FaCheckCircle size={28} className="text-green-500" />
            ) : (
              <span className="font-semibold text-base">{step}</span>
            )}
          </div>
        ))}
      </div>

      {/* Step content */}
      <div className="flex-1 mb-6 p-4 bg-slate-100 rounded-sm text-black w-full">
        {activeStep === 0 && (
          <form onSubmit={(e) => e.preventDefault()}>
            <label className="block mb-2">Phone Number:</label>
            <input
              {...register("phoneNumber", {
                required: "Phone number is required",
              })}
              type="tel"
              className="border p-2 rounded w-full"
            />
            {errors.phoneNumber && (
              <p className="text-red-500">{errors.phoneNumber.message}</p>
            )}
          </form>
        )}
        {activeStep === 1 && (
          <form onSubmit={(e) => e.preventDefault()}>
            <label className="block mb-2">Enter Token:</label>
            <input
              {...register("token", { required: "Token is required" })}
              type="text"
              className="border p-2 rounded w-full"
            />
            {errors.token && (
              <p className="text-red-500">{errors.token.message}</p>
            )}
          </form>
        )}
        {activeStep === 2 && (
          <div className="text-center h-full">
            <p className="text-green-600 font-thin text-lg">
              You are back online
            </p>
            <img
              src={successRefresh}
              className="py-2"
              alt="Success refresh token image"
            />
            <button
              onClick={onClose}
              className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg"
            >
              Finish
            </button>
          </div>
        )}
      </div>

      {/* Navigation buttons */}
      <div className="flex justify-between w-full px-2">
        <button
          onClick={handleBack}
          disabled={activeStep === 0}
          className="px-4 py-2 bg-gray-600 text-white rounded-lg disabled:bg-gray-400"
        >
          Back
        </button>
        {activeStep < 2 && (
          <button
            onClick={handleNext}
            className="px-4 py-2 bg-blue-500 text-white rounded-lg"
          >
            {activeStep === steps.length - 2 ? "Submit" : "Next"}
          </button>
        )}
      </div>
    </div>
  );
};

export default WifiTimeStepper;
