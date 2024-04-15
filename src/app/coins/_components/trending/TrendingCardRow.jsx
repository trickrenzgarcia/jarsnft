import Image from "next/image";

const styles = {
  trendingCardRow: `flex items-center justify-between space-x-4 m-2 p-2 gap-5`,
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
              style={{ borderRadius: "15px" }}
            />
          )}
        </div>

        {/* Div 2 */}
        <div>
          <p>{name}</p>
          <span className="text-gray-400">{number}</span>
        </div>

        <div className="grow">
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