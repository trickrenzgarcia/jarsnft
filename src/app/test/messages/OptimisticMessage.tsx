"use client"

import { useOptimistic } from 'react'

type Message = { message: string}

export default function OptimisticMessage({ messages }: { messages: Message[] }) {
  const [optimisticMessages, addOptimisticMessage] = useOptimistic<Message[]>(
    messages,
    (state: Message[], newMessage: string) => {
      return [
        ...state,
        { message: newMessage },
      ]
    }
  )

  return <div></div>
}