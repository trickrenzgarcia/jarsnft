"use client"

import React from 'react'

export default function AuctionEndTime({ endTimeInSeconds }: { endTimeInSeconds: number }) {
  const endTime = new Date(endTimeInSeconds * 1000); // Convert seconds to milliseconds

  const formattedEndTime = endTime.toLocaleDateString(undefined, {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  });

  return (
    <div>
      <p className='text-sm text-gray-500 dark:text-gray-400'>End bidding:</p>
      <p className="text-sm font-bold">
        {formattedEndTime}
      </p>
    </div>
  );
}

