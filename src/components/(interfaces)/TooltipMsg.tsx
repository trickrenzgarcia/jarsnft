"use client"

import { 
  Tooltip,
  TooltipContent,
  TooltipProvider, 
  TooltipTrigger

} from '@/components/ui/tooltip'

type Props = {
  message: string;
} & React.HTMLAttributes<HTMLParagraphElement>;

export default function TooltipMsg(props: Props) {
  const { children, ...otherProps } = props
  const message = props.message
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <div {...otherProps}>{children}</div>
        </TooltipTrigger>
        <TooltipContent>
          <p {...otherProps}>{message}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
}