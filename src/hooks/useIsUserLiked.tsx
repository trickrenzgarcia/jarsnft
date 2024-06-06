"use client"

import { useUserContext } from '@/components/(providers)';
import { jars } from '@/lib/core/api';
import React from 'react'

export default function useIsUserLiked(optimisticLikes: number, contract: string, tokenId: string) {
  const { user, isLoggedIn, isLoading: loadingUser } = useUserContext();
  const [isLiked, setIsLiked] = React.useState<boolean>();
  const [isLoading, setLoading] = React.useState(false);

  React.useEffect(() => {
    const fetchUserLiked = async () => {
      if(isLiked === undefined) {
        setLoading(true);
        const result = await jars.getIsUserLiked(user.session.uid, contract, tokenId);
        setIsLiked(result);
        setLoading(false);
      } else if((isLiked === true || isLiked === false) && isLoggedIn) {
        setIsLiked((prev) => prev = !prev);
      }
    }
    if(isLoggedIn) {
      fetchUserLiked();
    }
  }, [isLoggedIn, isLoading, user, optimisticLikes, loadingUser])

  return {
    isLiked,
    isLoading,
    setIsLiked
  }
}
