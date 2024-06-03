"use client"

import addFavorites from '@/app/actions/addFavorites';
import { useUserContext } from '@/components/(providers)';
import React, { useOptimistic } from 'react'
import { IoHeartOutline } from 'react-icons/io5';
import { IoHeartSharp } from "react-icons/io5";

type Props = {
  favorite: {
    count: number;
  },
  isLiked: boolean | undefined;
  address: string;
  id: string;
}

export default function Favorite({ favorite, isLiked, address, id }: Props) {
  const { user } = useUserContext();
  const [optimisticLikes, setOptimisticLikes] = useOptimistic(
    favorite.count,
    (state, amount: number) => state + Number(amount)
  );

  return (
    <div className="flex gap-1">
      <div
        className="hover:cursor-pointer"
        onClick={async (e) => {
          setOptimisticLikes(1);
          await addFavorites(user.session.uid, address, id)
        }}>
        {isLiked ? <IoHeartSharp className="text-2xl" /> : <IoHeartOutline className="text-2xl" />}
      </div>
      
      <p>{optimisticLikes}</p>
    </div>
  )
}
