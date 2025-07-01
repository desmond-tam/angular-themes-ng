

export const FormatNumber = (number:number,maxFraDigit:number=2) => {
  return number.toLocaleString(navigator.language,{ maximumFractionDigits: maxFraDigit });
}



