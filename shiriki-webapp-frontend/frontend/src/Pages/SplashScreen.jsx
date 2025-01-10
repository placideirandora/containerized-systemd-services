import "../css/Splash.css";
import { useNavigate } from "react-router";
import logo from "../assets/images/arena-logo.png";
import male_left from "../assets/images/119.png";
import male_right from "../assets/images/113.png";
import female_top from "../assets/images/34.png";
import female_left from "../assets/images/18.png";
import burger from "../assets/images/burger.png";


const SplashScreen = () => {
    const navigate = useNavigate();

    const getStarted = () => {
        navigate("/sign-in");
    };

    return (
        <div
            className="min-h-screen flex flex-col items-center px-4 pt-8"
            
        >
            {/* Circular Orbits with Icons */}
            <div className="circle-container w-full relative mb-8">
                {/* Thicker and Whiter Orbits */}
              
                <div className="orbit w-[500px] h-[600px] border-8 border-white"></div>
                <div className="orbit w-[340px] h-[340px] border-8 border-white"></div>
                <div className="orbit w-[210px] h-[210px] border-8 border-white"></div>
                

                {/* Center Logo */}
                <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
                    <img
                        src={logo}
                        alt="Kigali Arena logo with geometric patterns"
                        className="mb-2 pulse-animation"
                    />
                </div>

                {/* Orbital Icons */}
                <img
    src={burger}
    alt="Burger icon on orange background"
    className="orbit-icon left-[3%] top-[5%] bg-[#EBA751] rounded-full shadow-lg border-4 border-[#EBA750] w-16 h-16"
/>
<img
    src={female_top}
    alt="Stylish woman with sunglasses and curly hair on purple background"
    className="orbit-icon right-[-1%] top-[15%] bg-[#B190B6] rounded-full shadow-lg border-4 border-[#8A6E95] w-16 h-16"
/>
<img
    src={female_left}
    alt="Animated woman with updo hairstyle and orange accessories"
    className="orbit-icon left-[47%] top-[11%] bg-[#DBE9EF] rounded-full shadow-lg border-4 border-[#B0C7D4] w-16 h-16"
/>
<img
    src={male_left}
    alt="Man in black hoodie on beige background"
    className="orbit-icon left-[15%] top-[66%] bg-[#FFDBA5] rounded-full shadow-lg border-4 border-[#FFDBA3] w-16 h-16"
/>
<img
    src={male_right}
    alt="Light blue circular icon"
    className="orbit-icon right-[20%] top-[70%] bg-[#97B2CC] rounded-full shadow-lg border-4 border-[#97B2CB] w-16 h-16"
/>


{/* Apps Icon */}
<div className="absolute left-1/2 bottom-[8%] transform -translate-x-1/2">
    
</div>

            </div>

            {/* Welcome Text */}
            <div className="text-center mb-8">
              <h1 className="text-white text-2xl mb-2 animate-fade-in-up">
                Welcome to <span className="font-bold">BK</span> <span className="bg-blue-600 px-2 py-1 rounded">Arena</span>
              </h1>
              <p className="text-xl font-bold bg-gradient-to-r from-blue-500 via-white to-blue-500 bg-clip-text text-transparent animate-fade-in-up delay-200">
                Kigali's Finest
              </p>
            </div>


            {/* Get Started Button */}
            <button
              onClick={getStarted}
              className="gradient-button text-white py-4 px-16 rounded-full text-lg font-semibold mb-8 transition-all transform hover:scale-105 hover:shadow-lg active:scale-95 active:shadow-xl animate-pulse"
            >
              Get Started
            </button>


            {/* Bottom Bar */}
            <div className="w-16 h-1 bg-[#00CCFF] rounded-full"></div>
        </div>
    );
};

export default SplashScreen;
