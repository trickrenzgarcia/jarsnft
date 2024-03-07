"use client";

import React, { useState, useContext, useEffect, useCallback } from "react";
import CMCtableHeader from "./CMCTableHeader";
import CMCtableRow from "./CMCtableRow";
import useAxios from "@/app/coins/api/useAxios";

const CMCTable = () => {
  const { response } = useAxios(
    "coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=true&price_change_percentage=7d&locale=en&x_cg_demo_api_key=CG-Kt6d2R6fUzMk9o7qE8AvSa7F"
  );

  return (
    <div className="text-white font-bold">
      <div className="mx-auto max-w-screen-2xl">
        <table className="w-full">
          <CMCtableHeader />
          {response && response ? (
            response.map((coin, index) => {
              return (
                <CMCtableRow
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
    </div>
  );
};

export default CMCTable;
