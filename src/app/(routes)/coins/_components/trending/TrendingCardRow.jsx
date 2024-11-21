import Image from "next/image";

const styles = {
  trendingCardRow: `flex items-center justify-between space-x-4 space-y-4`,
};

const TrendingCardRow = ({ number, icon, name, sparklines }) => {
  const formattedNumber = number.toString().replace(/,/g, ".").slice(0, 10);
  return (
    <>
      <div className={styles.trendingCardRow}>
        <div>{icon && <Image alt="icons.svg" src={icon} width={40} height={40} className="rounded-full" />}</div>
        <div className="text-center">
          <p className="max-w-[90px] overflow-hidden whitespace-nowrap lg:max-w-[210px]">{name}</p>
          <span className="max-w-[90px] overflow-hidden whitespace-nowrap dark:text-gray-400 text-gray-600 lg:max-w-[210px]">{formattedNumber}</span>
        </div>
        <div>{sparklines && <Image alt="sparkline.svg" src={sparklines} width={100} height={80} quality={100} priority={true} />}</div>
      </div>
    </>
  );
};

export default TrendingCardRow;
