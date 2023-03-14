"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Check if the given string is a valid phone number
 *
 * @param {string} phone
 */
exports.default = (phone) => /^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/.test(phone);
