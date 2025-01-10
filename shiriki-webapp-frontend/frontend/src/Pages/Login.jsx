import React, { useState } from "react";
import WifiIcon from "../assets/images/router.png";
import { Link } from "react-router-dom";
import SignInWithGoogle from "../Components/signInWithGoogle";

const Login = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [agreeToTerms, setAgreeToTerms] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Submit form logic here
    console.log("Name:", name);
    console.log("Phone:", phone);
    console.log("Agree to Terms:", agreeToTerms);
  };

  return (
    <div className="font-[sans-serif]">
      <div className="min-h-screen flex flex-col items-center justify-center py-6 px-4">
        <div className="max-w-md w-full">
          <div className="page-header">
            <h1 className="text-white text-lg  font-bold">
              {" "}
              Welcome to BK Arena{" "}
            </h1>
            <h2 className="text-white text-lg  font-bold"> Kigali's Finest </h2>
          </div>

          <div className="p-8 flex flex-col rounded-2xl bg-blue-50 shadow">
            <img className="mx-auto h-12 w-auto" src={WifiIcon} alt="wifi" />
            <form className="mt-8 space-y-4" onSubmit={handleSubmit}>
              <p>
                <b>Connect to WIFI</b>
              </p>
              <p>Please enter your name and phone number to access</p>
              <div>
                <div className="relative flex items-center border-2 rounded-full py-2 px-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="h-5 w-5 text-gray-400"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
                    />
                  </svg>
                  <input
                    name="name"
                    id="name"
                    type="text"
                    required
                    className="w-full text-gray-800 pl-12 py-2 md:py-4 focus:outline-none text-sm  h-9 px-4 rounded-full bg-blue-50 outline-blue-600"
                    placeholder="Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
              </div>
              <div>
                <div className="relative flex items-center border-2 rounded-full py-2 px-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-gray-400"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
                    />
                  </svg>
                  <input
                    name="phone"
                    id="phone"
                    type="text"
                    required
                    className="w-full text-gray-800 pl-12 py-2 md:py-4 focus:outline-none text-sm h-9 px-4 rounded-full bg-blue-50 outline-blue-600"
                    placeholder="Phone Number"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                  />
                </div>
              </div>

              <label className="mt-8 ml-4 flex content-start">
                <input
                  type="checkbox"
                  name="agreeToTerms"
                  className="mr-2 form-checkbox rounded-none ring-0 focus:border-tan-500 border-tan-300 border-2 w-4 h-4 text-highlight"
                  checked={agreeToTerms}
                  onChange={() => setAgreeToTerms(!agreeToTerms)}
                />
                <span className="text-sm font-semibold">
                  I agree to the{" "}
                  <a
                    className="text-[#002D74] hover:underline"
                    href="www.google.com"
                  >
                    Terms and Conditions
                  </a>
                </span>
              </label>

              <div className="!mt-8">
               {/* <Link to='/verification'>
                <button 
                    type="submit" 
                    className={`h-12 px-6 m-2 py-3 px-2 text-sm font-semibold tracking-wide rounded-full text-white ${agreeToTerms ? 'bg-[#002D74] cursor-pointer' : 'bg-gray-400 cursor-not-allowed'}`} */}
                <Link to="/services">
                  <button
                    type="submit"
                    className={`h-12 px-6 m-2 py-3 text-sm font-semibold tracking-wide rounded-full text-white ${
                      agreeToTerms
                        ? "bg-[#002D74] cursor-pointer"
                        : "bg-gray-400 cursor-not-allowed"
                    }`}
                    disabled={!agreeToTerms}
                  >
                    Connect
                  </button>
                </Link>
              </div>
            </form>

            <SignInWithGoogle />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
