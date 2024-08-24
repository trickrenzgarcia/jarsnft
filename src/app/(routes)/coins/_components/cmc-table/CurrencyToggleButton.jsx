import React, { useState } from "react";
import { fetchFromApi } from "../../api/apiCoingecko";
import Flare from "@/components/ui/flare";

const CurrencyToggleButton = ({ onClick }) => {
  const [buttonText, setButtonText] = useState("Change to PHP");

  const currencyChange = () => {
    const newText = buttonText === "Change to PHP" ? "Change to USD" : "Change to PHP";
    setButtonText(newText);
    fetchFromApi();
    onClick();
  };

  return (
    <div className="z-10 flex min-h-[16rem] items-center justify-center">
      <Flare className="shadow-2xl" onClick={currencyChange}>
        <span className="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-white dark:from-white dark:to-slate-900/10 lg:text-lg">
          {buttonText}
        </span>
      </Flare>
    </div>
  );
};

export default CurrencyToggleButton;
