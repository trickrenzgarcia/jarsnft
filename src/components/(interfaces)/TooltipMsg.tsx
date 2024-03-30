import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

type Props = {
  message: string;
  delay?: number;
} & React.HTMLAttributes<HTMLParagraphElement>;

export default function TooltipMsg(props: Props) {
  const { children, delay = 700, ...otherProps } = props;
  const message = props.message;
  return (
    <TooltipProvider>
      <Tooltip delayDuration={delay}>
        <TooltipTrigger asChild>
          <div {...otherProps}>{children}</div>
        </TooltipTrigger>
        <TooltipContent>
          <p {...otherProps}>{message}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
