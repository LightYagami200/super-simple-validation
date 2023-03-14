"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Imports
const globals_1 = require("@jest/globals");
const index_1 = require("../index");
// Test Suite
(0, globals_1.describe)('Validation', () => {
    (0, globals_1.test)('Is Email? (Good Email)', () => {
        const email = 'some-email@example.com';
        (0, globals_1.expect)((0, index_1.isEmail)(email)).toBe(true);
    });
    (0, globals_1.test)('Is Email? (Bad Email)', () => {
        const email = 'some-email';
        (0, globals_1.expect)((0, index_1.isEmail)(email)).toBe(false);
    });
    (0, globals_1.test)('Is Email? (Empty Email)', () => {
        const email = '';
        (0, globals_1.expect)((0, index_1.isEmail)(email)).toBe(false);
    });
    (0, globals_1.test)('Is Phone? (Good Phone)', () => {
        const phone = '+86-12345678901';
        (0, globals_1.expect)((0, index_1.isPhone)(phone)).toBe(true);
    });
    (0, globals_1.test)('Is Phone? (Good Phone without -)', () => {
        const phone = '+8612345678901';
        (0, globals_1.expect)((0, index_1.isPhone)(phone)).toBe(true);
    });
    (0, globals_1.test)('Is Phone? (Bad Phone)', () => {
        const phone = '1234';
        (0, globals_1.expect)((0, index_1.isPhone)(phone)).toBe(false);
    });
    (0, globals_1.test)('Is hex color? (Good hex color)', () => {
        const color = '#000000';
        (0, globals_1.expect)((0, index_1.isHexColor)(color)).toBe(true);
    });
    (0, globals_1.test)('Is hex color? (Good hex color with 8 digits)', () => {
        const color = '#000000aa';
        (0, globals_1.expect)((0, index_1.isHexColor)(color)).toBe(true);
    });
    (0, globals_1.test)('Is hex color? (Bad hex color)', () => {
        const color = '000000';
        (0, globals_1.expect)((0, index_1.isHexColor)(color)).toBe(false);
    });
});
