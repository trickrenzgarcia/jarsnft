"use client"

import jars from '@/lib/api';
import React from 'react'

export default function useBanner(address: string, refreshBanner: string) {
  const [isLoading, setIsLoading] = React.useState(false);
  const [isError, setIsError] = React.useState(false);
  const [banner, setBanner] = React.useState<string | undefined>();

  React.useEffect(() => {
    async function getAvatar() {
      setIsLoading(true);
      try {
        const profile = await jars.getUserProfile(address);
        if(profile) setBanner(profile.profile.bannerUrl);
      } catch(error) {
        setIsError(true);
      }
      setIsLoading(false);
    }
    getAvatar();
  }, [refreshBanner])

  return { banner, isLoading, isError }
}
