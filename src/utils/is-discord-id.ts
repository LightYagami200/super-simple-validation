/**
 * Checks if a string is a valid Discord ID. (E.g. a user ID, channel ID, etc.)
 * 
 * @param {string} id The string to check.
 */
export default (id: string): boolean => /^\d{17,19}$/.test(id);