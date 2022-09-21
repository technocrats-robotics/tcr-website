// Helper functions for Google Firebase Utilities
let passwordGenerator = require("generate-password");

/**
 * version 1
 *
 * A password generator function that uses the makemeapassord API.
 * {@link https://makemeapassword.ligos.net/api Make me a Passord API}
 * The generated password also contains special symbols.
 * @example
 * ```javascript
 * var passwd = await generatePassword();
 * ```
 * @param {number} length Define the desired length of the password (default=12).
 */
// export async function generatePassword(length=12){
//     const apiURL =
//         'https://makemeapassword.ligos.net/api/v1/alphanumeric/plain?l='
//         + length.toString() + '&sym=T';
//     return fetch(apiURL)    // Async function
//         .then((resp) => resp.text()) // API returns the data in Plain text
//         .then((data) => data.substr(0, length)); // Sliced, coz the API returns with \n at end
// }

/**
 * version 2
 * @docs https://www.npmjs.com/package/generate-password
 * @returns string
 */

export async function generatePassword(length = 12) {
  return passwordGenerator.generate({
    length: length,
    numbers: true,
    symbols: false,
    lowercase: true,
  });
}

/**
 * Convert an integer to a custom base 26.
 * The possible characters for the custom base 26 is [a-z]
 * @example
 * ```1 => b | 26 => ba```
 * @param {number} number Positive integer
 */
export function convertDec2CustomBase26(number) {
  if (number === 0) return "a";
  var res = "";
  while (number > 0) {
    res += String.fromCharCode((number % 26) + 97);
    number = (number / 26) >> 0;
  }
  res = [...res].reverse().join("");
  return res;
}

/**
 * Convert given string to title case
 * @param {string} str The string to be converted to Title Case
 */
export function titleCase(str) {
  return str
    .toLowerCase()
    .split(" ")
    .map(function (word) {
      return word.replace(word[0], word[0].toUpperCase());
    })
    .join(" ");
}

/*
 ** References:
 * Password Generator:
 * https://makemeapassword.ligos.net/api
 * https://www.digitalocean.com/community/tutorials/how-to-use-the-javascript-fetch-api-to-get-data
 * https://www.geeksforgeeks.org/how-to-use-the-javascript-fetch-api-to-get-data/
 * Base Converter:
 * https://www.w3schools.com/jsref/jsref_fromcharcode.asp
 * https://stackoverflow.com/questions/4228356/integer-division-with-remainder-in-javascript
 * https://www.geeksforgeeks.org/convert-base-decimal-vice-versa/
 * https://www.geeksforgeeks.org/reverse-a-string-in-javascript/
 * Title Case:
 * https://www.freecodecamp.org/news/three-ways-to-title-case-a-sentence-in-javascript-676a9175eb27/
 */
