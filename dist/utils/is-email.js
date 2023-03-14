"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Check if the given string is an email address
 *
 * @param {string} email
 */
exports.default = (email) => /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(email);
