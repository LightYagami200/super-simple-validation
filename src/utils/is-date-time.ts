/**
 * Check if a string is a valid date time
 * 
 * @param {string} dateTime - The string to check
 */
export default (dateTime: string): boolean => !isNaN(Date.parse(dateTime));