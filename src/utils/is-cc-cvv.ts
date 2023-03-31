/**
 * Check if a string is a valid Credit Card CVV
 * 
 * @param {string} value - The string to check
 */
export default (value: string): boolean => /^[0-9]{3,4}$/.test(value);
