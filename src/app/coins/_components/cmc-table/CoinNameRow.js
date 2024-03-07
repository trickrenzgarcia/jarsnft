import Image from "next/image";
import { upperCase } from "../../api/currencyFunctions";

const CoinNameRow = ({ name, icon, symbol }) => {
  return (
    <div className="flex w-full ml-14">
      <Image
        src={icon}
        alt={name}
        width={25}
        height={25}
        quality={100}
        priority={true}
      />
      <p> &nbsp; {name} </p>
      <p className="text-gray-400"> &nbsp; {upperCase(symbol)} </p>
    </div>
  );
};

export default CoinNameRow;
