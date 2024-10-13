"use client"

import React, { useState } from "react";
import { GoogleGenerativeAI } from "@google/generative-ai";

import ChatHistory from "./_components/ChatHistory";
import Loading from "./_components/Loading";

const App = () => {
  const [userInput, setUserInput] = useState("");
  const [chatHistory, setChatHistory] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  
  const genAI = new GoogleGenerativeAI(process.env.NEXT_PUBLIC_GEMINI_API_KEY);
  const model = genAI.getGenerativeModel({ model: "gemini-1.5-pro-latest", useSearchGrounding: true, systemInstruction:'You are a expert AI blockchain assistant specializes in NFT,Web 3.0 and Cryptocurrencies that is included in JARSNFT thesis project website',});
  

  // Function to handle user input
  const handleUserInput = (e) => {
    setUserInput(e.target.value);
  };

  const clearChat = () => {
    setChatHistory([]);
  };

  // Function to send user message to Gemini
  const sendMessage = async () => {
  if (userInput.trim() === "") return;

  setIsLoading(true);
  try {
    // call Gemini Api to get a response
    const result = await model.generateContent(userInput);
    const response =  result.response; 

    if (!response || !response.text) {
      throw new Error("Invalid response structure");
    }

    // add Gemini's response to the chat history
    setChatHistory((prevChatHistory) => [
      ...prevChatHistory,
      { type: "user", message: userInput },
      { type: "bot", message: response.text() }, // Ensure this is correct
    ]);
  } catch (error) {
    console.error("Error sending message:", error);
  } finally {
    setUserInput("");
    setIsLoading(false);
  }
};
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-4">Chatbot</h1>

      <div className="chat-container rounded-lg shadow-md p-4">
        <ChatHistory chatHistory={chatHistory} />
        <Loading isLoading={isLoading} />
      </div>

      <div className="flex mt-4">
        <input
          type="text"
          className="flex-grow px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Type your message..."
          value={userInput}
          onChange={handleUserInput}
        />
        <button
          className="px-4 py-2 ml-2 rounded-lg bg-blue-500 text-white hover:bg-blue-600 focus:outline-none"
          onClick={sendMessage}
          disabled={isLoading}
        >
          Send
        </button>
      </div>
      <button
        className="mt-4 block px-4 py-2 rounded-lg bg-gray-400 text-white hover:bg-gray-500 focus:outline-none"
        onClick={clearChat}
      >
        Clear Chat
      </button>
    </div>
  );
};

export default App;