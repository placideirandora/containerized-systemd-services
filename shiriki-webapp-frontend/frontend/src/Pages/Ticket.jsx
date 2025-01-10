import React, { useState, useEffect } from "react";
import barcode from "../assets/images/barcode.png";
import Header from "../Components/Header";
import BottomNavBar from "../Components/BottomNavBar";

const Ticket = () => {
    const [ticketNumber, setTicketNumber] = useState("");
    const [waitingTime, setWaitingTime] = useState("");
    const [generatedTime, setGeneratedTime] = useState("");

    useEffect(() => {
        generateTicket();
    }, []);

    const generateTicket = () => {
        const randomNumber = `Q${Math.floor(1000 + Math.random() * 9000)}`;
        const currentTime = new Date();
        const waitTime = new Date(currentTime.getTime() + 30 * 60000);
        const formattedWaitTime = waitTime.toLocaleString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
            hour: "2-digit",
            minute: "2-digit",
        });
        const formattedGeneratedTime = currentTime.toLocaleString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
            hour: "2-digit",
            minute: "2-digit",
        });

        const ticketData = {
            ticketNumber: randomNumber,
            waitingTime: formattedWaitTime,
            generatedTime: formattedGeneratedTime,
        };

        // Retrieve existing tickets from local storage and ensure it's an array
        let storedTickets = JSON.parse(localStorage.getItem("ticketData"));

        // If storedTickets is not an array, initialize it as an empty array
        if (!Array.isArray(storedTickets)) {
            storedTickets = [];
        }

        storedTickets.push(ticketData);

        localStorage.setItem("ticketData", JSON.stringify(storedTickets));

        setTicketNumber(randomNumber);
        setWaitingTime(formattedWaitTime);
        setGeneratedTime(formattedGeneratedTime);
    };



    return (
        <div className="h-screen bg-white">
            <Header />
            <h2 className="mt-8 font-bold text-3xl">Here is Your Ticket </h2>
            <div
                className="bg-gray-50 shadow-lg"
                style={{
                    width: "300px",
                    margin: "20px auto",
                    padding: "20px",
                    border: "1px solid #ddd",
                    borderRadius: "10px",
                    textAlign: "center",
                    fontFamily: "Arial, sans-serif",
                }}
            >
                <h3 style={{ marginBottom: "10px" }}>XYZ NATIONAL BANK</h3>
                <p style={{ margin: "0" }}>Accounts Dept</p>
                <p style={{ margin: "0" }}>Lorem Ipsum Lorem Ipsum</p>
                <p style={{ margin: "0" }}>Lorem Ipsum-002547</p>
                <hr style={{ margin: "10px 0" }} />
                <h1 style={{ fontSize: "40px", margin: "10px 0" }}>{ticketNumber}</h1>
                <div style={{ margin: "10px 0" }}>
                    <img
                        src={barcode}
                        alt="barcode"
                        style={{ display: "block", margin: "0 auto", height: '50px', width: '500px' }}
                    />
                </div>
                <p style={{ margin: "10px 0" }}>
                    Your Waiting Time is <br />
                    {waitingTime}
                </p>
                <hr style={{ margin: "10px 0" }} />
                <p style={{ fontSize: "12px", margin: "10px 0" }}>
                    Generated on {generatedTime}
                </p>
            </div>
            <BottomNavBar />
        </div>
    );
};

export default Ticket;
