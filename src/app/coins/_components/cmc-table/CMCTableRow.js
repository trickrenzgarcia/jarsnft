import CoinNameRow from "./CoinNameRow";
import { TbCaretUpFilled } from "react-icons/tb";
import { TbCaretDownFilled } from "react-icons/tb";
import { upperCase } from "../../api/currencyFunctions";
import { roundTwoDecimalPlaces } from "../../api/currencyFunctions";
import { currencyFormat } from "../../api/currencyFunctions";
import { Sparklines, SparklinesLine } from "react-sparklines";

const styles = {
  tableRow: `text-white border-b border-gray-800 text-[0.93rem]`,
};

const CMCTableRow = ({
  starNum,
  coinName,
  coinIcon,
  coinSymbol = "---",
  price = "----",
  hRate = "---",
  dRate = "---",
  marketCapValue = "---",
  volumeValue = "---",
  volumeCryptoValue = "---",
  circulatingSupply = "---",
  sparkline,
}) => {
  return (
    <tbody className={styles.tableRow}>
      <tr>
        <td></td>
        <td>{starNum}</td>

        {coinIcon && coinIcon ? (
          <td className="cursor-pointer">
            <CoinNameRow name={coinName} icon={coinIcon} symbol={coinSymbol} />
          </td>
        ) : (
          <></>
        )}

        <td>
          <p className="w-full">$ {price}</p>
        </td>
        <td>
          <p
            className={`flex gap-1 w-full text-center ${
              hRate < 0 ? "text-[#ff3a33]" : "text-green-400"
            }`}
          >
            {" "}
            {hRate < 0 ? <TbCaretDownFilled /> : <TbCaretUpFilled />}{" "}
            {roundTwoDecimalPlaces(hRate)}%
          </p>
        </td>
        <td>
          <p
            className={`flex gap-1 w-full text-center ${
              dRate < 0 ? "text-[#ff3a33]" : "text-green-400"
            }`}
          >
            {" "}
            {dRate < 0 ? <TbCaretDownFilled /> : <TbCaretUpFilled />}{" "}
            {roundTwoDecimalPlaces(dRate)}%
          </p>
        </td>

        <td>
          <div>
            <p>{currencyFormat(marketCapValue)}</p>
          </div>
        </td>

        <td>
          <div>
            <p>{currencyFormat(volumeValue)}</p>
            <p className="text-gray-400">
              {currencyFormat(volumeCryptoValue)} {upperCase(coinSymbol)}
            </p>
          </div>
        </td>

        <td>
          <div>
            <p>
              {currencyFormat(circulatingSupply)} {upperCase(coinSymbol)}
            </p>
          </div>
        </td>

        <td>
          <Sparklines svgWidth={160} height={60} data={sparkline} quality={100}>
            <SparklinesLine color={hRate < 0 ? "red" : "#2DFE54"} />
          </Sparklines>
        </td>
      </tr>
    </tbody>
  );
};

export default CMCTableRow;
