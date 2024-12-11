import { addAnimation } from '@/lib/scroller';
import '@/css/scroller.css'
import React from 'react'

export type ScrollerProps = {
  isAnimated?: boolean,
  duration?: "fast" | "slow"
}

export function Scroller({
  isAnimated: isAnimatedProps = true,
  duration = "slow",
  children
}: React.PropsWithChildren<ScrollerProps>) {
  const [isAnimated, setAnimated] = React.useState(isAnimatedProps);

  React.useEffect(() => {
    // Initialize scroller animations only once
    addAnimation();
  }, []);

  return (
    <div className='scroller'
      data-animated={isAnimated}
      data-duration={duration}
      onMouseEnter={() => setAnimated(false)}
      onMouseLeave={() => setAnimated(true)}
    >
      <ul className='tag-list scroller__inner'>
        {children}
      </ul>
    </div>
  )
}

export function ScrollerItem({ children }: React.PropsWithChildren<object>) {
  return <li className='tag-item'>{children}</li>
}