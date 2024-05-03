"use client"

import { useUserContext } from '@/components/(providers)';
import { jars } from '@/lib/core/api';
import React from 'react'

export default function useVerifiedProfile() {
  const [isLoading, setIsLoading] = React.useState(false);
  const [isError, setIsError] = React.useState(false);
  const [isVerified, setIsVerified] = React.useState<boolean | undefined>();

  const { user, isLoading: userLoading } = useUserContext();

  React.useEffect(() => {
    async function getVerifiedProfile() {
      setIsLoading(true);
      try {
        // fetch verified profile
        const status = await jars.getUserProfile(user.address);
        const { is_verified } = status.profile;
        if(is_verified) setIsVerified(true);
      } catch(error) {
        setIsError(true);
      }
      setIsLoading(false);
    }
    getVerifiedProfile();
  }, [user, userLoading])

  return {
    isVerified,
    isLoading,
    isError,
    setIsVerified
  }
}
