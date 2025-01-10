// TimeContext.js
import React, { createContext, useState, useEffect } from "react";

export const TimeContext = createContext();

export const TimeProvider = ({ children }) => {
  const [timeLeft, setTimeLeft] = useState(0);
  const [isConnected, setIsConnected] = useState(false);

  useEffect(() => {
    let timerId;
    if (timeLeft > 0) {
      timerId = setInterval(() => {
        setTimeLeft((prev) => prev - 1);
      }, 1000);
    }
    return () => clearInterval(timerId);
  }, [timeLeft]);

  const startTimer = (seconds) => {
    setTimeLeft(seconds);
    setIsConnected(true);
  };

  const stopTimer = () => {
    setTimeLeft(0);
    setIsConnected(false);
  };

  return (
    <TimeContext.Provider
      value={{ timeLeft, setTimeLeft, isConnected, startTimer, stopTimer }}
    >
      {children}
    </TimeContext.Provider>
  );
};
