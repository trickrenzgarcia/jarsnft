import React from "react";
import Markdown from "react-markdown";
import { TypewriterEffectV2 } from "@/components/ui/typewriter-effect";
import { Card, CardBody } from "@nextui-org/react";

const ChatHistory = ({ chatHistory }) => {
  return (
    <>
      {chatHistory.map((message, index) => (
        <Card key={index}>
          <CardBody className="w-full">
            <div className="flex flex-row items-center gap-4">
              {message.type === "user" ? (
                <>
                  <span>You:</span> <Markdown className="whitespace-pre-line">{message.message}</Markdown>
                </>
              ) : (
                <>
                  <span>Bot:</span> <TypewriterEffectV2 className="whitespace-pre-line" words={[{ text: message.message }]} />
                </>
              )}
            </div>
          </CardBody>
        </Card>
      ))}
    </>
  );
};

export default ChatHistory;
