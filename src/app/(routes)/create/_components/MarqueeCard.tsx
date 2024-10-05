import Marquee from "@/components/ui/marquee";
import Image from "next/image";

const logos = [
    {
      name: "Cnebula",
      img: "/nebula1.avif",
    },
    {
      name: "flower",
      img: "/flowah1.jpeg",
    },
    {
      name: "autumn",
      img: "/autumn.jpeg",
    },
    {
      name: "nebula",
      img: "/nebula.avif",
    },
    {
      name: "tiger",
      img: "/tiger.jpg",
    },
    {
      name: "food",
      img: "/food.jpeg",
    },
  ];

export function MarqueeCard() {
    return (
      <div className="relative flex h-full flex-col items-center justify-center gap-4 overflow-hidden rounded-lg px-20 md:shadow-xl">
        <div className="flex flex-row gap-4 [perspective:300px]">
          <Marquee pauseOnHover
            className="h-[500px] justify-center overflow-hidden [--duration:45s] [--gap:1rem]"
            vertical
            style={{
              transform:
                "translateX(0px) translateY(0px) translateZ(-50px) rotateX(0deg) rotateY(10deg) rotateZ(-10deg) scale(1.5)",
            }}
          >
            {logos.map((data, idx) => (
              <Image
                key={idx}
                src={data.img}
                alt={data.name}
                width={300}
                height={300}
                quality={100}
                className="mx-auto min-h-[300px] aspect-auto cursor-pointer rounded-xl border border-neutral-300 transition-all duration-200 hover:ring-1 hover:ring-neutral-300"
              />
            ))}
          </Marquee>
        </div>
      </div>
    );
  }