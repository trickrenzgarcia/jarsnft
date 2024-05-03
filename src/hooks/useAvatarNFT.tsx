"use client"

import { useUserContext } from '@/components/(providers)';
import { jars } from '@/lib/core/api';
import React from 'react'

export default function useAvatarNFT() {
  const [isLoading, setIsLoading] = React.useState(false);
  const [isError, setIsError] = React.useState(false);
  const [avatar, setAvatar] = React.useState<string | undefined>();

  const { user, refreshAvatar } = useUserContext();

  React.useEffect(() => {
    async function getAvatar() {
      setIsLoading(true);
      try {
        const profile = await jars.getUserProfile(user.address);
        if(profile) setAvatar(profile.profile.image_url);
      } catch(error) {
        setIsError(true);
      }
      setIsLoading(false);
    }
    getAvatar();
  }, [refreshAvatar, user])

  return { avatar, isLoading, isError }
}
