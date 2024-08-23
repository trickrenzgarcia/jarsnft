import Image from "next/image";
import { upperCase } from "../../api/currencyFunctions";

const CoinNameRow = ({ name, icon, symbol }) => {
  return (
    <div className="flex flex-none gap-1 max-w-[300px]">
      <Image
        src={icon}
        alt={name}
        width={25}
        height={25}
        quality={75}
        priority={true}
      />
      <p className="truncate text-sky-500">{name} </p>
      <p className="text-gray-400"> &nbsp; {upperCase(symbol)} </p>
    </div>
  );
};

export default CoinNameRow;
