import React from "react";
import { useNavigate } from "react-router-dom";

const SignIn = () => {
  const navigate = useNavigate();
  const goBack = () => navigate(-1);

  const toProfile = () => {
    navigate("/profile/create");
  };

  return (
    <div
      style={{
        fontFamily: "'Inter', sans-serif",
        background: "linear-gradient(to bottom right, #f0f4f8, #d9e8fc)"
      }}
      className='min-h-screen rounded-[1.5rem] flex items-center justify-center px-4'
    >
      <div className='max-w-md w-full bg-white shadow-2xl rounded-6xl p-8 text-center'>
        <div className='flex items-center justify-between mb-6'>
          <div className='pr-3 cursor-pointer' onClick={goBack}>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='24'
              height='24'
              viewBox='0 0 24 24'
              fill='none'
              stroke='currentColor'
              strokeWidth='2'
              strokeLinecap='round'
              strokeLinejoin='round'
              className='text-gray-700 hover:text-gray-900 transition'
            >
              <path d='M19 12H5M12 19l-7-7 7-7' />
            </svg>
          </div>
          <p className='text-lg font-semibold text-gray-800'>Sign In</p>
        </div>

        <p className='text-gray-500 mb-8'>
          Sign in with your account to continue.
        </p>

        <form className='space-y-6'>
          <div className='relative'>
            <span className='absolute left-4 top-3.5 text-gray-400'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='w-5 h-5'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z'
                />
              </svg>
            </span>
            <input
              type='email'
              placeholder='Your email address'
              className='w-full border-gray-300 pl-12 pr-4 py-3 border rounded-[1.5rem] shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition transform hover:translate-y-[-2px] hover:shadow-lg ease-in-input'
            />
          </div>
          <div className='relative'>
            <span className='absolute left-4 top-3.5 text-gray-400'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='w-5 h-5'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z'
                />
              </svg>
            </span>
            <input
              type='password'
              placeholder='Password'
              className='w-full border-gray-300 pl-12 pr-4 py-3 border rounded-[1.5rem] shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition transform hover:translate-y-[-2px] hover:shadow-lg ease-in-input'
            />
          </div>
          <button
            type='submit'
            onClick={toProfile}
            className='w-full py-3 bg-blue-500 text-white font-medium rounded-[1.5rem] shadow-md hover:bg-blue-600 transform hover:translate-y-[-2px] hover:shadow-lg transition pulse-continuous'
          >
            Continue
          </button>
        </form>

        <p className='mt-6 text-gray-500'>
          Don’t have an account?{" "}
          <span
            onClick={() => navigate("/sign-up")}
            className='text-blue-600 font-medium cursor-pointer hover:underline'
          >
            Sign up
          </span>
        </p>
      </div>

      {/* Adding the style for the animations */}
      <style>
        {`
                    @keyframes flyIn {
                        0% {
                            transform: translateY(20px);
                            opacity: 0;
                        }
                        100% {
                            transform: translateY(0);
                            opacity: 1;
                        }
                    }

                    @keyframes pulseButton {
                        0% {
                            transform: scale(1);
                        }
                        50% {
                            transform: scale(1.05);
                        }
                        100% {
                            transform: scale(1);
                        }
                    }

                    @keyframes easeInInput {
                        0% {
                            opacity: 0;
                            transform: translateY(20px);
                        }
                        100% {
                            opacity: 1;
                            transform: translateY(0);
                        }
                    }

                    .fly-in {
                        animation: flyIn 0.6s ease-out forwards;
                    }

                    .pulse-continuous {
                        animation: pulseButton 1s infinite;
                    }

                    .ease-in-input {
                        animation: easeInInput 0.6s ease-out forwards;
                    }
                `}
      </style>
    </div>
  );
};

export default SignIn;
