"use client";

import React, { useState } from "react";
import { GoogleGenerativeAI } from "@google/generative-ai";

import ChatHistory from "./_components/ChatHistory";
import Loading from "./_components/Loading";

const Chatbot = () => {
  const [userInput, setUserInput] = useState("");
  const [chatHistory, setChatHistory] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const genAI = new GoogleGenerativeAI(process.env.NEXT_PUBLIC_GEMINI_API_KEY);
  const model = genAI.getGenerativeModel({
    model: "gemini-1.5-flash",
    useSearchGrounding: true,
    systemInstruction: `
      Your name is Jars Bot, Don't use emoji. Our team is composed of Alrae Chaluangco, Patrick Renz Garcia, Rigor Syguat and Jeffrey Dapar.
      You are an expert AI blockchain assistant specializing in NFT, Web 3.0, and Cryptocurrencies included in JARSNFT thesis project website
      that aims to develop a Philippine-based decentralized NFT trading marketplace empowered by Polygon blockchain technology.
      Limit your answer in 3 sentence and summarize if necessary. Don't answer other topics only answer things about blockchain, nft, cryptocurrency.
    `,
  });

  const handleUserInput = (e) => {
    setUserInput(e.target.value);
  };

  const clearChat = () => {
    setChatHistory([]);
  };

  const sendMessage = async () => {
    if (userInput.trim() === "") return;

    setIsLoading(true);
    try {
      const result = await model.generateContent(userInput);
      const response = result.response;

      if (!response || !response.text) {
        throw new Error("Invalid response structure");
      }

      setChatHistory((prevChatHistory) => [...prevChatHistory, { type: "user", message: userInput }, { type: "bot", message: response.text() }]);
    } catch (error) {
      console.error("Error sending message:", error);
    } finally {
      setUserInput("");
      setIsLoading(false);
    }
  };
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      sendMessage();
    }
  };
  return (
    <div className="container p-6">
      <div className="chat-container flex flex-col space-y-4 rounded-lg">
        <ChatHistory chatHistory={chatHistory} />
        <Loading isLoading={isLoading} />
      </div>
      <div className="my-4">
        <input
          type="text"
          className="w-full flex-grow rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-violet-500"
          placeholder="Type your message..."
          value={userInput}
          onChange={handleUserInput}
          onKeyDown={handleKeyDown}
        />
      </div>
      <div className="grid grid-cols-2 gap-2">
        <button className="rounded-lg bg-violet-500 p-2 focus:outline-none" onClick={sendMessage} disabled={isLoading}>
          Send
        </button>

        <button className="rounded-lg bg-red-500 p-2 focus:outline-none" onClick={clearChat}>
          Clear Chat
        </button>
      </div>
    </div>
  );
};

export default Chatbot;
