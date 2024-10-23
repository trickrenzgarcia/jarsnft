import React from "react";
import Markdown from "react-markdown";

const ChatHistory = ({ chatHistory }) => {
  return (
    <>
      {chatHistory.map((message, index) => (
        <div
          key={index}
          className={`flex items-start gap-2 p-6 rounded-lg w-full 
            ${message.type === "user" ? "bg-gray-100 text-gray-800": "bg-blue-100 text-blue-800"}`}
        >
          <div className="mr-2 font-bold text-gray-600">
            {message.type === "user" ? "You:" : "JARS Bot:"}
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
