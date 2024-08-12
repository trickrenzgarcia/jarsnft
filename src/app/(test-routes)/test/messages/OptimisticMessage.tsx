"use client";

import { useOptimistic } from "react";

type Message = { message: string };

export default function OptimisticMessage({
  messages,
}: {
  messages: Message[];
}) {
  const [optimisticMessages, addOptimisticMessage] = useOptimistic(messages, (state: Message[], newMessage: string) => [...state, { message: newMessage }]);

  return <div></div>;
}
