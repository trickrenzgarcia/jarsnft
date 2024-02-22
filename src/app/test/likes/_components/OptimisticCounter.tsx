"use client"

import { addLikes } from '@/app/actions';
import { useOptimistic } from 'react'

export default function OptimisticCounter({ likes }: { likes: number }) {
  const [optimisticLikes, addOptimisticLikes] = useOptimistic(likes,
    (state, amount) => state + Number(amount)
  )

  const updateLikes = async (amount: number) => {
    addOptimisticLikes(amount);
    await addLikes(amount);
  }

  return (
    <div>
      <h1>Optimistic Value: {optimisticLikes}</h1>
      <button onClick={() => updateLikes(1)}>add</button>
      <button onClick={() => updateLikes(-1)}>unlike</button>
    </div>
  )
}