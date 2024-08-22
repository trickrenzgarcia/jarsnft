export function currencyFormat(amount) {
  let roundedAmount = Math.round(amount);
  return roundedAmount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

export function roundTwoDecimalPlaces(number) {
  // Check if number is not null and is a valid number
  if (number === null || isNaN(number)) {
    return 0;
  }
  // Use parseFloat to handle any unexpected types and toFixed to round to two decimal places
  return parseFloat(number.toFixed(2));
}

export function upperCase(symbol) {
  return symbol.toUpperCase();
}
