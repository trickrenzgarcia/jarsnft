"use client";
import React, { useState } from "react";
import { CMCTableHeader, CMCTableRow, CurrencyToggleButton } from ".";
import useAxios from "@/app/coins/api/useAxios";
import { DesktopTableRow } from "./CMCTableRow";
import { DesktopTableHeader } from "./CMCTableHeader";

const CMCTable = () => {
  const [currency, setCurrency] = useState("usd");
  const { response } = useAxios(
    `coins/markets?vs_currency=${currency}&order=market_cap_desc&per_page=100&page=1&sparkline=true&price_change_percentage=7d&locale=en&x_cg_demo_api_key=CG-Kt6d2R6fUzMk9o7qE8AvSa7F`,
  );

  // Function to handle currency change
  const handleCurrencyChange = () => {
    // Toggle between USD and PHP
    const newCurrency = currency === "usd" ? "php" : "usd";
    setCurrency(newCurrency);
  };

  return (
    <div className="mx-auto mt-10 max-w-screen-2xl font-bold">
      <CurrencyToggleButton
        onClick={handleCurrencyChange}
        currency={currency}
      />
      <div className="hidden xl:block">
        <table
          className="mt-3 w-full"
          style={{ borderCollapse: "separate", borderSpacing: "0 20px" }}
        >
          <CMCTableHeader />
          {response && response ? (
            response.map((coin, index) => {
              return (
                <CMCTableRow
                  currency={currency}
                  key={index}
                  starNum={coin.market_cap_rank}
                  coinName={coin.name}
                  coinSymbol={coin.symbol}
                  coinIcon={coin.image}
                  hRate={coin.price_change_percentage_24h}
                  dRate={coin.price_change_percentage_7d_in_currency}
                  price={coin.current_price}
                  marketCapValue={coin.market_cap}
                  volumeCryptoValue={coin.total_volume}
                  volumeValue={coin.total_supply}
                  circulatingSupply={coin.circulating_supply}
                  sparkline={coin.sparkline_in_7d.price}
                />
              );
            })
          ) : (
            <></>
          )}
        </table>
      </div>
      <div className="xl:hidden">
        <table
          className="mt-3 w-full"
          style={{ borderCollapse: "separate", borderSpacing: "0 20px" }}
        >
          <DesktopTableHeader />
          {response && response ? (
            response.map((coin, index) => {
              return (
                <DesktopTableRow
                  currency={currency}
                  key={index}
                  starNum={coin.market_cap_rank}
                  coinName={coin.name}
                  coinSymbol={coin.symbol}
                  coinIcon={coin.image}
                  hRate={coin.price_change_percentage_24h}
                  dRate={coin.price_change_percentage_7d_in_currency}
                  price={coin.current_price}
                  sparkline={coin.sparkline_in_7d.price}
                />
              );
            })
          ) : (
            <></>
          )}
        </table>
      </div>
    </div>
  );
};

export default CMCTable;
