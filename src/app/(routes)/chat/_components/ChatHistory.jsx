import React from "react";
import { TypewriterEffectV2 } from "@/components/ui/typewriter-effect";
import { Card, CardBody } from "@nextui-org/react";

const ChatHistory = ({ chatHistory }) => {
  return (
    <>
      {chatHistory.map((message, index) => (
        <Card key={index} className="shadow-lg">
          <CardBody className="w-full">
            <div className="flex flex-row items-center gap-4">
              {message.type === "user" ? (
                <>
                  <span>You:</span>
                  <div className="overflow-hidden">{message.message}</div>
                </>
              ) : (
                <>
                  <span>Bot:</span> {<TypewriterEffectV2 words={[{ text: message.message }]} />}
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
