import React, { useState } from "react";
import live from "../assets/images/live.jpeg";

const Entertainment = () => {
    const [messages, setMessages] = useState([]);
    const [inputMessage, setInputMessage] = useState("");

    const sendMessage = (e) => {
        e.preventDefault();
        if (inputMessage.trim() !== "") {
            setMessages([...messages, inputMessage]);
            setInputMessage("");
        }
    };

    const otherLiveStreams = [
        {
            title: "Tech Unboxings: Latest Gadgets",
            viewers: "3.2k Watching",
            thumbnail: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
        },
        {
            title: "Cooking Live: Vegan Recipes",
            viewers: "900 Watching",
            thumbnail: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
        },
    ];

    return (
        <div className="bg-gradient-to-br from-gray-50 to-gray-100 min-h-screen p-6 md:p-10">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col lg:flex-row gap-8">
                    {/* Live Stream Section */}
                    <div className="lg:w-3/4 bg-white rounded-2xl shadow-xl overflow-hidden transform transition-all duration-300 hover:shadow-2xl">
                        <div className="relative">
                            {/* Live Video Placeholder */}
                            <div
                                className="w-full h-64 lg:h-[500px] bg-cover bg-center relative group"
                                style={{ backgroundImage: `url(${live})` }}
                            >
                                <div className="absolute inset-0 bg-black bg-opacity-10 group-hover:bg-opacity-20 transition-all duration-300"></div>
                                {/* Live Tag and Viewer Count */}
                                <div className="absolute top-4 left-4 flex items-center space-x-2">
                                    <span className="bg-red-600 text-white text-xs font-semibold px-3 py-1 rounded-full animate-pulse">
                                        LIVE
                                    </span>
                                    <span className="bg-black bg-opacity-60 text-white text-xs px-3 py-1 rounded-full">
                                        5.3k Watching
                                    </span>
                                </div>
                            </div>
                        </div>

                        {/* Stream Information */}
                        <div className="p-6">
                            <h2 className="text-2xl font-bold text-gray-900 mb-2">Playing Now: Chill Beats for Work</h2>
                            <p className="text-sm text-gray-600">
                                Stream by <span className="font-semibold text-blue-600">DJ Chill</span> | Genre: Lo-Fi Hip-Hop
                            </p>
                            <p className="mt-4 text-gray-700 leading-relaxed">
                                Tune in for non-stop Lo-Fi beats that keep you relaxed and focused. Perfect for working, studying, or just chilling out.
                            </p>
                        </div>
                    </div>

                    {/* Sidebar: Chat and Upcoming Streams */}
                    <div className="lg:w-1/4 flex flex-col space-y-8">
                        {/* Chat Section */}
                        <div className="bg-white rounded-2xl shadow-lg p-6 flex flex-col">
                            <h3 className="text-xl font-bold text-gray-900 mb-4 border-b pb-2 border-gray-200">Live Chat</h3>
                            <div className="flex-1 mt-2 overflow-y-auto space-y-3 mb-4 pr-2">
                                {messages.length > 0 ? (
                                    messages.map((msg, index) => (
                                        <div
                                            key={index}
                                            className="bg-gray-100 rounded-lg p-3 text-gray-800 text-sm shadow-sm"
                                        >
                                            {msg}
                                        </div>
                                    ))
                                ) : (
                                    <p className="text-gray-500 text-sm text-center italic">No messages yet. Be the first to say something!</p>
                                )}
                            </div>
                            <form className="flex items-center" onSubmit={sendMessage}>
                                <input
                                    type="text"
                                    value={inputMessage}
                                    onChange={(e) => setInputMessage(e.target.value)}
                                    placeholder="Type a message..."
                                    className="w-full px-4 py-2 text-sm border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                />
                                <button
                                    type="submit"
                                    className="bg-blue-600 text-white px-4 py-2 text-sm rounded-r-lg hover:bg-blue-700 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
                                >
                                    Send
                                </button>
                            </form>
                        </div>
                    </div>
                </div>

                {/* Other Ongoing Live Streams Section */}
                <div className="mt-12">
                    <h3 className="text-2xl font-bold text-gray-900 mb-8">Other Ongoing Live Streams</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {otherLiveStreams.map((stream, index) => (
                            <div 
                                key={index} 
                                className="bg-white rounded-2xl shadow-lg overflow-hidden transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
                            >
                                <div
                                    className="h-48 bg-cover bg-center relative group"
                                    style={{ backgroundImage: `url(${stream.thumbnail})` }}
                                >
                                    <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300"></div>
                                </div>
                                <div className="p-6">
                                    <h4 className="text-lg font-bold text-gray-900 mb-2">{stream.title}</h4>
                                    <p className="text-sm text-gray-600 mb-4">{stream.viewers}</p>
                                    <button className="px-4 bg-blue-600 text-white py-2.5 rounded-lg hover:bg-blue-700 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
                                        Join Now
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Entertainment;