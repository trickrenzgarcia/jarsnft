import Image from "next/image";

const styles = {
  trendingCardRow: `flex items-center justify-between self-auto max-w-[40px] grow-0 m-2`,
};

const TrendingCardRow = ({ number, icon, name, sparklines, percentChange }) => {
  function formatNumber(percentageChange) {
    const number = parseFloat(percentChange);
    if (isNaN(number)) {
      console.error("Error: The provided value is not a valid number.");
      return null;
    }
    return parseFloat(number.toFixed(2));
  }

  return (
    <>
      <div className={styles.trendingCardRow}>
        {/* div 1 */}
        <div>
          {icon && (
            <Image
              alt="icons.svg"
              src={icon}
              width={30}
              height={30}
              className="rounded-full"
            />
          )}
        </div>
        {/* Div 2 */}
        <div className="grow-0 basis-1 text-center">
          <p className="overflow-hidden text-ellipsis">{name}</p>
          <span className="text-gray-400">{number}</span>
        </div>

        <div className="basis-1/3">
          {sparklines && (
            <Image
              alt="sparkline.svg"
              src={sparklines}
              width={100}
              height={80}
              quality={100}
              priority={true}
            />
          )}
        </div>
      </div>
    </>
  );
};

export default TrendingCardRow;
