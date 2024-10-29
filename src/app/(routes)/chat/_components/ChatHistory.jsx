import React from "react";
import Markdown from "react-markdown";

const ChatHistory = ({ chatHistory }) => {
  return (
    <>
      {chatHistory.map((message, index) => (
        <div
          key={index}
          className={`flex items-center gap-4 space-x-4 p-6 rounded-lg w-full
            ${message.type === "user" ? "bg-gray-100 text-gray-800": "bg-violet-500"}`}
        >
          <div className="leading-tight font-bold">
            {message.type === "user" ? "You:" : "Bot:"}
          </div>
          <div>
            <Markdown>{message.message}</Markdown>
          </div>
        </div>
      ))}
    </>
  );
};

export default ChatHistory;
