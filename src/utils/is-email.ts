/**
 * Check if the given string is an email address
 * 
 * @param {string} email - The email address to check
 */
export default (email: string): boolean => /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(email);