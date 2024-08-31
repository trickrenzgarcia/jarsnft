import CoinNameRow from "./CoinNameRow";
import { TbCaretUpFilled } from "react-icons/tb";
import { TbCaretDownFilled } from "react-icons/tb";
import { upperCase } from "../../api/currencyFunctions";
import { roundTwoDecimalPlaces } from "../../api/currencyFunctions";
import { currencyFormat } from "../../api/currencyFunctions";
import { Sparklines, SparklinesLine } from "react-sparklines";

const styles = {
  tableRow: `mx-auto border-b border-gray-800 text-[0.93rem]`,
};

const CMCTableRow = ({
  starNum,
  coinName,
  coinIcon,
  currency,
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
    <tbody className="table-auto">
      <tr>
        <td></td>
        <td>{starNum}</td>

        {coinIcon && coinIcon ? (
          <td>
            <CoinNameRow name={coinName} icon={coinIcon} symbol={coinSymbol} />
          </td>
        ) : (
          <></>
        )}

        <td>
          {currency === "usd" ? "$" : "₱"} {price}
        </td>
        <td>
          <p className="flex w-full gap-1 text-center" style={hRate >= 0 ? { color: "#39dd15" } : { color: "#DC143C" }}>
            {hRate < 0 ? <TbCaretDownFilled /> : <TbCaretUpFilled />}
            {roundTwoDecimalPlaces(hRate)}%
          </p>
        </td>
        <td>
          <p className="flex w-full gap-1 text-center" style={dRate >= 0 ? { color: "#39dd15" } : { color: "#DC143C" }}>
            {dRate < 0 ? <TbCaretDownFilled /> : <TbCaretUpFilled />}
            {roundTwoDecimalPlaces(dRate)}%
          </p>
        </td>

        <td>
          <p className="mx-3">{currencyFormat(marketCapValue)}</p>
        </td>

        <td>
          <p>{currencyFormat(volumeValue)}</p>
          <p className="text-gray-400">
            {currencyFormat(volumeCryptoValue)} {upperCase(coinSymbol)}
          </p>
        </td>

        <td>
          <p>
            {currencyFormat(circulatingSupply)} {upperCase(coinSymbol)}
          </p>
        </td>

        <td>
          <Sparklines svgWidth={150} height={70} data={sparkline} quality={75}>
            <SparklinesLine color={hRate < 0 ? "#DC143C" : "#2eff00"} />
          </Sparklines>
        </td>
      </tr>
    </tbody>
  );
};
export const MobileTableRow = ({ starNum, coinName, coinIcon, currency, coinSymbol = "---", price = "----", hRate = "---" }) => {
  return (
    <tbody className={`${styles.tableRow}`}>
      <tr>
        <td></td>
        <td>{starNum}</td>

        {coinIcon && coinIcon ? (
          <td className="max-w-[100px]">
            <CoinNameRow name={coinName} icon={coinIcon} symbol="" />
          </td>
        ) : (
          <></>
        )}

        <td>
          <p className="text-end">
            {currency === "usd" ? "$" : "₱"} {price}
            <span className={`flex justify-end gap-1 text-sm ${hRate < 0 ? "text-red-500" : ""}`} style={hRate >= 0 ? { color: "#39dd15" } : {}}>
              {hRate < 0 ? <TbCaretDownFilled /> : <TbCaretUpFilled />}
              {roundTwoDecimalPlaces(hRate)}%
            </span>
          </p>
        </td>
      </tr>
    </tbody>
  );
};

export default CMCTableRow;
