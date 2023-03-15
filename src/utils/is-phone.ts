/**
 * Check if the given string is a valid phone number 
 * 
 * @param {string} phone - The phone number to check
 */
export default (phone: string): boolean => /^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/.test(phone);