"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Checks if a string is a valid hex color
 *
 * @param {string} color
 */
exports.default = (color) => /^#([0-9A-Fa-f]{3}|[0-9A-Fa-f]{6}|([0-9A-Fa-f]{2}){4})$/i.test(color);
