import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { fetchFromApi } from "../../api/apiCoingecko";

const CurrencyToggleButton = ({ onClick }) => {
  const [buttonText, setButtonText] = useState("Change to PHP");

  const handleClick = () => {
    const newText =
      buttonText === "Change to PHP" ? "Change to USD" : "Change to PHP";
    setButtonText(newText);
    fetchFromApi();
    onClick();
  };

  return <Button onClick={handleClick}>{buttonText}</Button>;
};

export default CurrencyToggleButton;
