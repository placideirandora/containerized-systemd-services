import React from 'react';
import { useNavigate } from 'react-router-dom';
import BottomNavBar from '../Components/BottomNavBar';

const Downloads = () => {
    const navigate = useNavigate();
    const goBack = () => navigate(-1);

    return (
        <div className="bg-white h-screen text-dark p-4">
            <div className="flex justify-between items-center my-3">
                <span
                    onClick={goBack}
                    className="text-3xl text-dark font-bold flex items-center space-x-2 cursor-pointer"
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
                    >
                        <path d="M19 12H5M12 19l-7-7 7-7" />
                    </svg>

                    <span style={{color:'black'}}>Downloads</span>
                </span>

            </div>
            <div className="flex flex-col">
                <div className=" p-4 rounded-lg flex  my-2">
                    <img style={{ borderRadius: '15%' }} src="https://plus.unsplash.com/premium_photo-1661947137018-87955a7e7123?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y2FsbCUyMG9mJTIwZHV0eXxlbnwwfHwwfHx8MA%3D%3D" alt="Call of Duty" className="w-16 h-16 mr-4" />
                    <div className="flex-1">
                        <p style={{ textAlign: "start" }} className="text-lg font-medium">Call of Duty</p>
                        <p style={{ textAlign: "start" }} className="text-sm text-gray-400">Size 5.6 GB <span>01:23 min left to download</span></p>
                        <div className="w-full bg-gray-700 rounded-full h-2.5 mt-2">
                            <div className="bg-cyan-500 h-2.5 rounded-full" style={{ width: '28.8%' }}></div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex flex-col">
                <div className=" p-4 rounded-lg flex  my-2">
                    <img style={{ borderRadius: '15%' }} src="https://images.unsplash.com/photo-1697479665524-3e06cf37b2b7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fG1pbmVjcmFmdHxlbnwwfHwwfHx8MA%3D%3D" alt="Call of Duty" className="w-16 h-16 mr-4" />
                    <div className="flex-1">
                        <p style={{ textAlign: "start" }} className="text-lg font-medium">Minecraft</p>
                        <p style={{ textAlign: "start" }} className="text-sm text-gray-400">Size 5.2 GB <span>00:23 min left to download</span></p>
                        <div className="w-full bg-gray-700 rounded-full h-2.5 mt-2">
                            <div className="bg-cyan-500 h-2.5 rounded-full" style={{ width: '90.8%' }}></div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex flex-col">
                <div className=" p-4 rounded-lg flex  my-2">
                    <img style={{ borderRadius: '15%' }} src="https://plus.unsplash.com/premium_photo-1661947137018-87955a7e7123?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y2FsbCUyMG9mJTIwZHV0eXxlbnwwfHwwfHx8MA%3D%3D" alt="Call of Duty" className="w-16 h-16 mr-4" />
                    <div className="flex-1">
                        <p style={{ textAlign: "start" }} className="text-lg font-medium">Call of Duty</p>
                        <p style={{ textAlign: "start" }} className="text-sm text-gray-400">Size 5.6 GB <span>01:23 min left to download</span></p>
                        <div className="w-full bg-gray-700 rounded-full h-2.5 mt-2">
                            <div className="bg-cyan-500 h-2.5 rounded-full" style={{ width: '28.8%' }}></div>
                        </div>
                    </div>
                </div>
            </div>
            <div
                className="absolute bottom-0 w-[93%]"
            >
                <BottomNavBar />
            </div>
        </div>
    );
};

export default Downloads;