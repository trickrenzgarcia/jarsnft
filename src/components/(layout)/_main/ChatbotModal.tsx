"use client";

import React from "react";
import { Bot } from "lucide-react";
import { Modal, ModalContent, ModalHeader, ModalBody, useDisclosure } from "@nextui-org/react";
import Chatbot from "@/app/(routes)/chat/page";
import { FaRobot } from "react-icons/fa";

export default function ChatbotModal({ className }: { className: string }) {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  return (
    <>
      <div className={className}>
        <div className="flex h-[50px] w-[50px] cursor-pointer items-center justify-center rounded-[10px] bg-gray-200 dark:bg-card" onClick={onOpen}>
          <Bot />
        </div>
        <Modal backdrop="blur" isOpen={isOpen} onOpenChange={onOpenChange} size="5xl" scrollBehavior="inside">
          <ModalContent>
            {(onClose) => (
              <>
                <ModalHeader className="flex items-center justify-center gap-2">
                  <FaRobot className="text-5xl" />
                  JARS AI Chatbot
                </ModalHeader>
                <ModalBody>
                  <Chatbot />
                </ModalBody>
              </>
            )}
          </ModalContent>
        </Modal>
      </div>
    </>
  );
}
