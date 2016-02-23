export default function(number, decimalPlaces){
  number = Number(number);
  let multiplier = "1";
  for (let i = 0; i < decimalPlaces; i++) {
    multiplier += "0";
  }
  return Math.round(number*Number(multiplier))/Number(multiplier);
}
