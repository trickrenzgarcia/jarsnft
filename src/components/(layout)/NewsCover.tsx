import Image from "next/image";

export default function NewsCover() {
  return (
    <section className="flex flex-col">
      <div className="relative h-[220px] w-auto">
        <Image
          src="/assets/newsBackground.jpg"
          fill
          style={{
            objectFit: "cover",
          }}
          alt="image of a banner"
        />
      </div>
    </section>
  );
}
