"use client"

import * as React from "react"

import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from './tooltip'

type CustomTooltipProps = React.ComponentProps<typeof TooltipContent> & {
  text: string;
}

export default function CustomTooltip({
  children,
  text,
  ...contentProps
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
