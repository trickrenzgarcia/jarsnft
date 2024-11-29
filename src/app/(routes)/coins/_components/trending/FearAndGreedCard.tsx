import Image from "next/image";

const styles = {
  trendingCard: `w-full dark:bg-[#1C1C1C] bg-[#e3e3e3] rounded-lg flex flex-col p-6`,
  trendingCardWrapper: `flex flex-row items-center justify-center gap-4`,
};

type Props = {
  title: string;
  icon?: string;
};

export default async function FearAndGreedCard({ title, icon }: Props) {
  const marketSentimentData = await fetch("https://api.alternative.me/fng/", {
    next: { revalidate: 300 },
  });
  const marketSentiment = await marketSentimentData.json();
  const sentiment = marketSentiment.data[0].value;

  const normalizeAngle = (value: number) => {
    const maxValue = 100;
    const minAngle = 0;
    const maxAngle = 180;
    const normalizedAngle = (value * (maxAngle - minAngle)) / maxValue + minAngle;
    return normalizedAngle;
  };

  const FearGreedIndex = () => {
    if (sentiment <= 20) {
      return "Extreme Fear";
    } else if (sentiment <= 49) {
      return "Fear";
    } else if (sentiment === 50) {
      return "Neutral";
    } else if (sentiment <= 69) {
      return "Greed";
    } else if (sentiment <= 79) {
      return "Very Greedy";
    } else if (sentiment >= 80) {
      return "Extreme Greed";
    }
  };

  const normalizedAngle = normalizeAngle(sentiment);

  return (
    <div className={styles.trendingCard}>
      <div className={styles.trendingCardWrapper}>
        {icon && <Image src={icon} width={40} height={40} alt="Image" />}
        <p className="text-center text-lg font-bold">{title}</p>
      </div>
      <br />

      <div className="mb-6 flex w-full flex-1 items-center justify-center">
        <div className="relative">
          <div
            style={{
              transform: `rotate(${normalizedAngle}deg)`,
              transformOrigin: "93.5px 8px",
            }}
            className="absolute left-[-5px] top-[82px] h-5 w-5 rounded-full border-2 border-white bg-gray-700"
          />
          <div className="-translate-y-1/6 absolute left-1/2 top-1/2 mb-2 flex -translate-x-1/2 flex-col items-center justify-center">
            <p className="text-xl font-bold">{sentiment}</p>
            <p className="whitespace-nowrap font-light">{FearGreedIndex()}</p>
          </div>
          <Image src="/FNG.svg" alt="fng.svg" width={177} height={100} />
        </div>
      </div>
    </div>
  );
}
