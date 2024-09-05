import Image from "next/image";

const CoinNameRow = ({ name, icon, symbol }) => {
  const cryptoSymbol = symbol.toUpperCase();

  return (
    <div className="flex flex-none gap-1 max-w-[300px]">
      <Image
        src={icon}
        alt={name}
        width={25}
        height={25}
        quality={75}
        loading="lazy"
      />
      <p className="truncate text-sky-500">{name}</p>
      <p className="text-gray-400">{cryptoSymbol}</p>
    </div>
  );
};

export default CoinNameRow;
