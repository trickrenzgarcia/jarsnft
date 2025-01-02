import * as React from 'react'
import { 
  Carousel,
  CarouselContent,
  CarouselNext,
  CarouselPrevious
} from '@/components/ui/carousel';

type CarouselComponentProps<Item> = React.HTMLAttributes<HTMLDivElement> & {
  data: Item[];
  title?: string;
  renderItem: (item: Item, index: number) => React.ReactNode;
};

export default function CarouselComponent<ItemType>({ data, title, renderItem, ...rest }: CarouselComponentProps<ItemType>) {
  return (
    <div {...rest}>
      <h1 className='text-2xl font-bold my-4'>{title}</h1>
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
