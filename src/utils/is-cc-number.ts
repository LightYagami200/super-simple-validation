/**
 * Check if a string is a valid credit card number
 * 
 * @param {string} ccNumber - The string to check
 * @param {boolean} checkLuhn - Whether to check the Luhn algorithm (More info: https://en.wikipedia.org/wiki/Luhn_algorithm)
 */
export default (ccNumber: string, checkLuhn = false): boolean => ccRegexes.some((regex) => new RegExp(regex).test(ccNumber.replace(/ /g, "").replace(/-/g, ""))) && (
  !checkLuhn || validateLuhn(ccNumber.replace(/ /g, "").replace(/-/g, ""))
);

const validateLuhn = (ccNumber: string): boolean => {
  ccNumber = ccNumber.replace(/\D/g, "");
  let sum = 0;
  for (let i = ccNumber.length - 1; i >= 0; i--) {
    let digit = parseInt(ccNumber[i]);
    if ((ccNumber.length - i) % 2 == 0) {
      digit *= 2;
      if (digit > 9) {
        digit -= 9;
      }
    }
    sum += digit;
  }
  return sum % 10 == 0;
}

const ccRegexes = [
  "^3[47][0-9]{13}$",
  "^(6541|6556)[0-9]{12}$",
  "^389[0-9]{11}$",
  "^3(?:0[0-5]|[68][0-9])[0-9]{11}$",
  "^65[4-9][0-9]{13}|64[4-9][0-9]{13}|6011[0-9]{12}|(622(?:12[6-9]|1[3-9][0-9]|[2-8][0-9][0-9]|9[01][0-9]|92[0-5])[0-9]{10})$",
  "^63[7-9][0-9]{13}$",
  "^(?:2131|1800|35\\d{3})\\d{11}$",
  "^9[0-9]{15}$",
  "^(6304|6706|6709|6771)[0-9]{12,15}$",
  "^(5018|5020|5038|6304|6759|6761|6763)[0-9]{8,15}$",
  "^(5[1-5][0-9]{14}|2(22[1-9][0-9]{12}|2[3-9][0-9]{13}|[3-6][0-9]{14}|7[0-1][0-9]{13}|720[0-9]{12}))$",
  "^(6334|6767)[0-9]{12}|(6334|6767)[0-9]{14}|(6334|6767)[0-9]{15}$",
  "^(4903|4905|4911|4936|6333|6759)[0-9]{12}|(4903|4905|4911|4936|6333|6759)[0-9]{14}|(4903|4905|4911|4936|6333|6759)[0-9]{15}|564182[0-9]{10}|564182[0-9]{12}|564182[0-9]{13}|633110[0-9]{10}|633110[0-9]{12}|633110[0-9]{13}$",
  "^(62[0-9]{14,17})$",
  "^4[0-9]{12}(?:[0-9]{3})?$",
  "^(?:4[0-9]{12}(?:[0-9]{3})?|5[1-5][0-9]{14})$",
];
