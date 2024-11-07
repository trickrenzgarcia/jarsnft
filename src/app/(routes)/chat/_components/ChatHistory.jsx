import React from "react";
import Markdown from "react-markdown";
import { TypewriterEffectSmooth } from "@/components/ui/typewriter-effect";

const ChatHistory = ({ chatHistory }) => {
  return (
    <>
      {chatHistory.map((message, index) => (
        <div
          key={index}
          className={`flex w-full items-center gap-4 space-x-2 rounded-lg p-6 ${
            message.type === "user" ? "bg-gray-100 text-gray-800" : "bg-violet-500 text-white"
          }`}
        >
          <div className="font-bold leading-tight">{message.type === "user" ? "You:" : "Bot:"}</div>
          <div className="w-full">
            {message.type === "user" ? <Markdown>{message.message}</Markdown> : <TypewriterEffectSmooth words={[{ text: message.message }]} />}
          </div>
        </div>
      ))}
    </>
  );
};

export default ChatHistory;
