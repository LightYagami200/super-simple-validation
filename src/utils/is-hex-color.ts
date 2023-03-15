/**
 * Checks if a string is a valid hex color
 * 
 * @param {string} color - The color to check
 */
export default (color: string): boolean => /^#([0-9A-Fa-f]{3}|[0-9A-Fa-f]{6}|([0-9A-Fa-f]{2}){4})$/i.test(color);