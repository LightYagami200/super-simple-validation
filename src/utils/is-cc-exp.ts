/**
 * Check if a string is a valid Credit Card expiration date
 * 
 * @param {string} value - The string to check
 */
export default (value: string): boolean => /^(0[1-9]|1[0-2])\/?([0-9]{4}|[0-9]{2})$/.test(value);
