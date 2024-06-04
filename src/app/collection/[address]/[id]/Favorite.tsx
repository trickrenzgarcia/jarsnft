"use client"

import toggleFavorite from '@/app/actions/toggleFavorites';
import { useUserContext } from '@/components/(providers)';
import useIsUserLiked from '@/hooks/useIsUserLiked';
import React, { useOptimistic } from 'react'
import { IoHeartOutline } from 'react-icons/io5';
import { IoHeartSharp } from "react-icons/io5";
import useSWR from 'swr';

type Props = {
  favorite: {
    count: number;
  },
  address: string;
  id: string;
}

export default function Favorite({ favorite, address, id }: Props) {
  const user = useUserContext();

  const [optimisticLikes, setOptimisticLikes] = useOptimistic(
    favorite.count,
    (state, amount: number) => state + Number(amount)
  );

  const { isLiked, isLoading } = useIsUserLiked(optimisticLikes, user, address, id);
  
  return (
    <div className="flex gap-1">
      <div
        className="hover:cursor-pointer"
        onClick={async (e) => {
          e.preventDefault();
          if(isLiked == undefined) return;

          if(isLiked) {
            setOptimisticLikes(-1)
          } else {
            setOptimisticLikes(1)
          }
          if(user.isLoggedIn) {
            await toggleFavorite(user.user.session.uid, address, id)
          }
          
        }}>
        {isLiked ? <IoHeartSharp className='text-2xl' /> : <IoHeartOutline className="text-2xl" />}
      </div>
      
      <p>{optimisticLikes}</p>
    </div>
  )
}
