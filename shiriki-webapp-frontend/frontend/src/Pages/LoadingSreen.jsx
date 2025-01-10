import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import logo from "../assets/images/arena-logo.png";

const LoadingScreen = () => {
    const navigate = useNavigate();

    useEffect(() => {
        const timer = setTimeout(() => {
            navigate('/welcome');
        }, 5000);

        return () => clearTimeout(timer);
    }, [navigate]);

    return (
        <div
            className="w-screen h-screen bg-cover bg-center flex items-center justify-center relative"
            style={{
                overflow: 'hidden',
            }}
        >
            <style>
                {`
                    @keyframes flyIn {
                        0% {
                            opacity: 0;
                            transform: translateY(50px);
                        }
                        50% {
                            opacity: 0.5;
                            transform: translateY(-10px);
                        }
                        100% {
                            opacity: 1;
                            transform: translateY(0);
                        }
                    }

                    @keyframes pulse {
                        0%, 100% {
                            transform: scale(1);
                        }
                        50% {
                            transform: scale(1.1);
                        }
                    }

                    .animate-fly-in {
                        animation: flyIn 10s ease-out forwards;
                    }

                    .pulse-animation {
                        animation: pulse 2s infinite;
                    }
                `}
            </style>
            <div className="flex flex-col animate-fly-in">
                <img
                    src={logo}
                    alt="Arena Logo"
                    className="max-w-[200px] w-full pulse-animation"
                />

                {/* Welcome Text */}
                <div className="text-center mt-4">
                    <h1 className="text-white text-2xl mb-2">
                        <span className="font-bold">BK</span>{' '}
                        <span className="bg-blue-600 px-2 py-1 rounded">Arena</span>
                    </h1>
                </div>
            </div>

            <div
                style={{
                    position: 'absolute',
                    bottom: '10px',
                    left: '40%',
                    width: '5rem',
                    height: '0.25rem',
                    backgroundColor: '#00FFFF',
                    borderRadius: '0.5rem',
                }}
                className="pulse-animation"
            ></div>
        </div>
    );
};

export default LoadingScreen;
