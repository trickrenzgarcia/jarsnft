import * as React from 'react'
import { 
  Carousel,
  CarouselContent,
  CarouselNext,
  CarouselPrevious
} from '@/components/ui/carousel';

type CarouselComponentProps<Item> = {
  data: Item[];
  renderItem: (item: Item, index: number) => React.ReactNode;
}

export default function CarouselComponent<ItemType>({ data, renderItem }: CarouselComponentProps<ItemType>) {
  return (
    <div className='bg-gradient-to-b from-navbg via-violet-500 to-background px-2 md:px-6 py-6'>
      <Carousel opts={{ align: "start" }}>
        <CarouselContent>
          {data.map((item, index) => renderItem(item, index))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  )
}
