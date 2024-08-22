import Image from "next/image";
import { upperCase } from "../../api/currencyFunctions";

const CoinNameRow = ({ name, icon, symbol }) => {
  return (
    <div className="flex flex-initial space-x-1 gap-1 grow-0">
      <Image
        src={icon}
        alt={name}
        width={25}
        height={25}
        quality={75}
        priority={true}
      />
      <p>{name} </p>
      <p className="text-gray-400"> &nbsp; {upperCase(symbol)} </p>
    </div>
  );
};

export default CoinNameRow;
