import { Button, Typography } from "@mui/material";
import { Image } from "primereact/image";
import { useNavigate } from "react-router-dom";
import Header from "../Components/Header";
import queue from "../assets/images/Queue.png";

const Queue = () => {
  const navigate = useNavigate();

  const handleNext = () => {
    navigate("/queue-details");
  };

  return (
    <div
      className="min-h-screen bg-white"
      style={{
        padding: '5px',
      }}
    >
      <Header />
      <div className="flex flex-col lg:flex-row items-center justify-center h-full w-full">
        <div className="flex-1 p-8 lg:p-16">
          <p className="text-dark mb-8 text-3xl">
            Welcome to our Queue
          </p>
          <div className="w-full h-96 mt-10 lg:mt-20">
            <Image
              src={queue}
              alt="Queue Image"
              className="rounded-sm object-contain"
            />
          </div>
          <Button
            onClick={handleNext}
            variant="contained"
            color="primary"
            className="bg-blue-600 hover:bg-blue-600 text-white py-2 px-6 rounded-[1.5rem] font-semibold text-sm transition"
          >
            Next
            <svg
              className="ml-5 text-white"
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
              <path d="M5 12H19M12 5l7 7-7 7" />
            </svg>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Queue;
