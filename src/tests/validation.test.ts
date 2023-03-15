// Imports
import { describe, test, expect } from '@jest/globals';
import { isEmail, isPhone, isHexColor, isUrl } from '../index';

// Test Suite
describe('Validation', () => {

  test('Is Email? (Good Email)', () => expect(isEmail('some-email@example.com')).toBe(true));

  test('Is Email? (Bad Email)', () => expect(isEmail('some-email')).toBe(false));

  test('Is Email? (Empty Email)', () => expect(isEmail('')).toBe(false));

  test('Is Phone? (Good Phone)', () => expect(isPhone('+86-12345678901')).toBe(true));

  test('Is Phone? (Good Phone without -)', () => expect(isPhone('+8612345678901')).toBe(true));

  test('Is Phone? (Bad Phone)', () => expect(isPhone('1234')).toBe(false));

  test('Is hex color? (Good hex color)', () => expect(isHexColor('#000000')).toBe(true));

  test('Is hex color? (Good hex color with 8 digits)', () => expect(isHexColor('#000000aa')).toBe(true));

  test('Is hex color? (Bad hex color)', () => expect(isHexColor('000000')).toBe(false));

  test('Is url? (Good url)', () => expect(isUrl('https://www.example.com')).toBe(true));

  test('Is url? (good url without https)', () => expect(isUrl('www.example.com')).toBe(true));

  test('Is url? (good url without www)', () => expect(isUrl('example.com')).toBe(false));

  test('Is url? (bad url)', () => expect(isUrl('example')).toBe(false));

  test('Is url? (bad url)', () => expect(isUrl('example-.com')).toBe(false));
});
