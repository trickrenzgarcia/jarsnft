import Image from "next/image";

const styles = {
  trendingCardRow: `flex flex-1 items-center mt-3 justify-between grow-0 m-2`,
};

const TrendingCardRow = ({ number, icon, name, sparklines }) => {
  const formattedNumber = number.toString().replace(/,/g, '.').slice(0, 10);
  return (
    <>
      <div className={styles.trendingCardRow}>
        <div>{icon && <Image alt="icons.svg" src={icon} width={40} height={40} className="rounded-full" />}</div>
        <div className="basis-1 text-center">
          <p className="overflow-hidden text-ellipsis">{name}</p>
          <span className="text-gray-400">{formattedNumber}</span>
        </div>
        <div className="basis-1/4">
          {sparklines && <Image alt="sparkline.svg" src={sparklines} width={100} height={80} quality={100} priority={true} />}
        </div>
      </div>
    </>
  );
};

export default TrendingCardRow;
