"use client"

import * as React from "react"

import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from './tooltip'

type CustomTooltipProps = {
  text: string;
  contentProps?: React.ComponentProps<typeof TooltipContent>;
}

export default function CustomTooltip({
  children,
  contentProps,
  text
}: React.PropsWithChildren<CustomTooltipProps>)
{
  return (
    <TooltipProvider>
      <Tooltip delayDuration={250}>
        <TooltipTrigger asChild>
          {children}
        </TooltipTrigger>
        <TooltipContent side="bottom" {...contentProps} >
          {text}
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
}
