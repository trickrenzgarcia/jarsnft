"use client"

import { jars } from '@/lib/core/api';
import { ProfileQuery } from '@/types/users';
import React from 'react'

export default function useIsUserLiked(optimisticLikes: number, user: ProfileQuery, contract: string, tokenId: string) {
  const [isLiked, setIsLiked] = React.useState<boolean>();
  const [isLoading, setLoading] = React.useState(false);

  React.useEffect(() => {
    const fetchUserLiked = async () => {
      if(isLiked === undefined) {
        setLoading(true);
        const result = await jars.getIsUserLiked(user.user.session.uid, contract, tokenId);
        setIsLiked(result);
        setLoading(false);
      } else if((isLiked === true || isLiked === false) && user.isLoggedIn) {
        setIsLiked((prev) => prev = !prev)
      }
    }
    fetchUserLiked();
  }, [user.isLoggedIn, user.isLoading, user.user, contract, tokenId, optimisticLikes, isLoading])

  return {
    isLiked,
    isLoading,
    setIsLiked
  }
}
