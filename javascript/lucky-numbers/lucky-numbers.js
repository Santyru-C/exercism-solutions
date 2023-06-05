// @ts-check

/**
 * Calculates the sum of the two input arrays.
 *
 * @param {number[]} array1
 * @param {number[]} array2
 * @returns {number} sum of the two arrays
 */
export function twoSum(array1, array2) {

  return Number(array1.join("")) + Number(array2.join(""))
}

/**
 * Checks whether a number is a palindrome.
 *
 * @param {number} value
 * @returns {boolean} whether the number is a palindrome or not
 */
export function luckyNumber(value) {
  const stringifiedValue = String(value);
  const NumberToArray = stringifiedValue.split("").join();
  const reversed = stringifiedValue.split("").reverse().join(); // use reverse with original value to avoid array destrucion

  return NumberToArray === reversed
}

/**
 * Determines the error message that should be shown to the user
 * for the given input value.
 *
 * @param {string|null|undefined} input
 * @returns {string} error message
 */
export function errorMessage(input) {
  const handledInput = input ?? ""; // set null and undefined values as empty fields.
  const inputToNumber = Number(handledInput);
  if ( handledInput === "" ) return "Required field"
  if ( Number(handledInput) === 0 || Number.isNaN(inputToNumber)) return "Must be a number besides 0";
  return ""
}
