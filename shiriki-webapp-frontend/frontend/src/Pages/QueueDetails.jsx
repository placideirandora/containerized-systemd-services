import React from "react";
import { useNavigate } from "react-router-dom";
import Header from "../Components/Header";
import BottomNavBar from "../Components/BottomNavBar";

const services = [
  {
    id: 1,
    name: "Mobile Services",
    description: "Voice, data plans, SIM card services, and device sales.",
    icon: "📱",
  },
  {
    id: 2,
    name: "Mobile Money (MoMo)",
    description: "Money transfers, bill payments, and MoMoPay for businesses.",
    icon: "💰",
  },
  {
    id: 3,
    name: "Internet Services",
    description: "Broadband internet, WiFi routers, and IoT solutions.",
    icon: "🌐",
  },
  {
    id: 4,
    name: "Enterprise Solutions",
    description: "Corporate plans, bulk SMS, and business MoMo services.",
    icon: "🏢",
  },
  {
    id: 5,
    name: "Customer Support",
    description: "Support for technical issues, device setup, and account inquiries.",
    icon: "🛠️",
  },
  {
    id: 6,
    name: "Digital & VAS",
    description: "Entertainment, e-learning, insurance, and health services.",
    icon: "🎮",
  },
];

const QueueDetails = () => {
  const navigate = useNavigate();

  const handleJoinQueue = (service) => {
    const randomPeople = Math.floor(Math.random() * 20) + 1;
    const randomTime = randomPeople * 3; // Each person takes approx. 3 minutes
    const queueInfo = { peopleInFront: randomPeople, waitingTime: randomTime };
    navigate("/queue-status", { state: { service, queueInfo } });
  };

  return (
    <div className="bg-gradient-to-br from-blue-50 to-gray-100 flex flex-col w-full">
      {/* Header */}
      <Header />

      {/* Title */}
      <h3 className="text-3xl text-gray-800 font-bold mt-8 mb-6 text-center">
        Choose a Service
      </h3>

      {/* Services Grid */}
      <main className="container mx-auto px-4 flex-grow">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-white shadow-lg hover:shadow-xl rounded-lg p-6 border border-gray-200 transition-transform transform hover:scale-105"
            >
              {/* Icon */}
              <div className="text-4xl text-blue-500 mb-4 flex justify-center">
                {service.icon}
              </div>

              {/* Service Name */}
              <h3 className="text-lg font-bold text-gray-800 text-center">
                {service.name}
              </h3>

              {/* Description */}
              <p className="text-sm text-gray-600 mt-3 text-center">
                {service.description}
              </p>

              {/* Join Queue Button */}
              <div className="flex justify-center mt-6">
                <button
                  onClick={() => handleJoinQueue(service)}
                  className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-6 rounded-[1.5rem] font-semibold text-sm transition"
                >
                  Join Queue
                </button>
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* Bottom Navigation */}
      <BottomNavBar />
    </div>
  );
};

export default QueueDetails;
