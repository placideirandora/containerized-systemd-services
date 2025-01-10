import React, { useState } from "react";
import { Link } from "react-router-dom";

const Verification = () => {
  const [otp, setOtp] = useState(["", "", "", ""]); // For storing the 4 OTP digits

  const handleInputChange = (e, index) => {};

  const handleSubmit = (e) => {};

  return (
    <>
      <div className="min-h-screen flex flex-col items-center justify-center py-6 px-4">
        <div className="max-w-md w-full">
          <div className="p-8 rounded-2xl bg-blue-50 shadow">
            <form onSubmit={handleSubmit} className=" px-4 py-6">
              <p className="text-[#002D74] text-lg  font-bold">
                Mobile Phone Verification
              </p>
              <p className="text-[#002D74] text-lg  font-light">
                Enter the 4-digit verification code that was sent to your phone
                number
              </p>
              <div className="flex pt-15 justify-center gap-2 mb-6">
                {otp.map((value, index) => (
                  <input
                    key={index}
                    className="w-12 h-12 text-center border rounded-md shadow-sm focus:ring-teal-500"
                    type="text"
                    maxLength="1"
                    pattern="[0-9]"
                    inputMode="numeric"
                    autoComplete="one-time-code"
                    required
                    value={value}
                    onChange={(e) => handleInputChange(e, index)}
                  />
                ))}
              </div>
              <div className="flex items-center justify-center">
                {/* Handle the OTP verification */}
                <Link to="/services">
                  <button
                    className="bg-[#002D74] hover:bg-[#002D74] text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    type="submit"
                  >
                    Verify
                  </button>
                </Link>
                <a
                  className="inline-block align-baseline font-bold text-sm text-[#002D74] hover:text-[#002D65] ml-4"
                  href="#"
                >
                  Resend OTP
                </a>
              </div>
            </form>
            <div className="flex pt-15 items-center justify-center">
              <button
                className="bg-blue-100 hover:bg-[#002D74] text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="submit"
              >
                Go Back
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Verification;
