import React from "react";
import { Button } from "@/components/ui/button";

const CurrencyToggleButton = ({ onClick, currency }) => {
  return <Button onClick={onClick}>Change to PHP</Button>;
};

export default CurrencyToggleButton;
